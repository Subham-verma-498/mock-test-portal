import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';
import { Role } from '@prisma/client';

export const isDemoAuthAllowed = () => {
  return process.env.NODE_ENV === 'development' || process.env.ENABLE_DEMO_AUTH === 'true';
};

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    ...(isDemoAuthAllowed()
      ? [
          CredentialsProvider({
            id: 'demo-login',
            name: 'Demo Login',
            credentials: {
              email: { label: 'Email', type: 'text' },
              role: { label: 'Role', type: 'text' },
            },
            async authorize(credentials) {
              if (!isDemoAuthAllowed()) {
                throw new Error('Demo login is strictly disabled in production.');
              }

              const email = credentials?.email?.toLowerCase().trim();
              const requestedRole = credentials?.role === 'ADMIN' ? Role.ADMIN : Role.STUDENT;

              if (!email) return null;

              // Admin email override check
              const isAdminEmail = email === (process.env.ADMIN_EMAIL || 'admin@mocktestportal.com').toLowerCase();
              const finalRole = isAdminEmail ? Role.ADMIN : requestedRole;

              let user;
              try {
                user = await prisma.user.upsert({
                  where: { email },
                  update: {
                    role: finalRole,
                  },
                  create: {
                    email,
                    name: email.split('@')[0].toUpperCase(),
                    role: finalRole,
                    image: finalRole === Role.ADMIN
                      ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
                      : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
                  },
                });
              } catch (err) {
                console.error('Database connection error during demo auth, returning mock user:', err);
                user = {
                  id: email.startsWith('admin') ? 'admin-demo-id' : 'student-demo-id',
                  email,
                  name: email.split('@')[0].toUpperCase(),
                  role: finalRole,
                  image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                };
              }

              return {
                id: user.id,
                name: user.name,
                email: user.email,
                image: user.image,
                role: user.role,
              };
            },
          }),
        ]
      : []),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account }) {
      if (!user.email) return false;

      // In production Google OAuth login, sync or create user record in DB
      if (account?.provider === 'google') {
        const isAdminEmail = user.email.toLowerCase() === (process.env.ADMIN_EMAIL || 'admin@mocktestportal.com').toLowerCase();
        try {
          const dbUser = await prisma.user.upsert({
            where: { email: user.email },
            update: {
              name: user.name || undefined,
              image: user.image || undefined,
              ...(isAdminEmail ? { role: Role.ADMIN } : {}),
            },
            create: {
              email: user.email,
              name: user.name || user.email.split('@')[0],
              image: user.image || null,
              role: isAdminEmail ? Role.ADMIN : Role.STUDENT,
            },
          });
          user.id = dbUser.id;
          user.role = dbUser.role;
        } catch (err) {
          console.error('Error syncing Google user to DB:', err);
        }
      }
      return true;
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.role = user.role || Role.STUDENT;
      }
      if (trigger === 'update' && session?.role) {
        token.role = session.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || 'mocktestportal_super_secret_jwt_key_2026',
};
