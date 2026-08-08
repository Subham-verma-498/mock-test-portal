# Mock Test Portal 🎓

A full-stack, production-ready web application built with **Next.js 14+ (App Router)**, **Prisma ORM**, **PostgreSQL**, **NextAuth.js**, and **Tailwind CSS**. Designed for students to practice timed campus placement mock tests (Technical & Aptitude) and track their improvement over time.

---

## 🌟 Key Features

### 1. Student Authentication & Security
- **Google (Gmail) OAuth Login** powered by NextAuth.js.
- Automatic student profile creation (name, email, Google avatar).
- **Production Security Gated Demo Login**: Developer instant login switcher is strictly enabled **ONLY** when `NODE_ENV === 'development'` or `ENABLE_DEMO_AUTH === 'true'`. In Vercel production deployments, demo auth is automatically disabled to eliminate security vulnerabilities.

### 2. Timed Mock Examination Engine
- **Two Original Test Banks**:
  1. **Technical Mock Test**: 30 questions covering OOPs concepts, C++, and C#.
  2. **Aptitude Mock Test**: 30 questions covering Quantitative Aptitude, Logical Reasoning, and Verbal Ability.
- **60-Second Per-Question Hard Timer**: Circular SVG countdown ring for each question (indigo ➔ amber ➔ red). Auto-advances and locks unanswered questions on timeout.
- **No Negative Marking**: +2 marks for correct answers, 0 for wrong/unattempted (Max score = 60).
- **Lock & Next**: Answers lock upon proceeding. Back navigation is disabled for exam integrity.
- **Accidental Exit Protection**: Window `beforeunload` warning modal prevents mid-test page refreshes.

### 3. Scorecard & Question Review
- Total score (out of 60), accuracy percentage, correct/wrong/skipped counts, and time taken.
- Interactive 30-question review list showing student's choice vs. correct answer key.
- **Question Flagging / Reporting**: Students can report questions ("Question is wrong" / "Correct answer is wrong") with comments for Admin review.
- Score progression chart on the student dashboard.

### 4. Feature-Rich Admin Dashboard (`/admin`)
- **Protected Role Access**: Restricted to accounts matching `ADMIN_EMAIL` or marked `ADMIN` in DB.
- **Student Directory**: Registered student list with join dates and test attempt counts.
- **Attempt History**: Filterable log of candidate test submissions.
- **Question Bank CRUD**: Add, edit, or delete questions in Technical and Aptitude test banks.
- **Reported Questions Queue**: Resolve student flags and edit erroneous questions in real-time.
- **Analytics**: Identify hardest questions (lowest correct %) and most-skipped questions.
- **CSV Export**: Download complete student test results with one click.

---

## 🚀 Tech Stack

- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS + Lucide React Icons
- **Database & ORM**: PostgreSQL + Prisma ORM
- **Auth**: NextAuth.js (Google Provider + Production-Gated Credentials)
- **Charts & Feedback**: Recharts + Canvas Confetti

---

## 🛠 Local Setup & Running

### 1. Clone & Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Ensure your `.env` contains:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/mocktestportal?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="mocktestportal_super_secret_jwt_key_2026"
GOOGLE_CLIENT_ID="your-google-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
ADMIN_EMAIL="admin@mocktestportal.com"
ENABLE_DEMO_AUTH="true"
```

### 3. Database Migration & Seeding
Push the Prisma schema to your PostgreSQL database and run the seed script:
```bash
# Push schema tables to database
npx prisma db push

# Generate Prisma Client
npx prisma generate

# Seed 60 audited original questions (30 Tech + 30 Aptitude) and default users
npx prisma db seed
```

### 4. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Google OAuth Credentials Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project and navigate to **APIs & Services > Credentials**.
3. Create an **OAuth 2.0 Client ID** (Web application).
4. Add Authorized redirect URI:
   - For local: `http://localhost:3000/api/auth/callback/google`
   - For Vercel: `https://<your-vercel-domain>.vercel.app/api/auth/callback/google`
5. Copy the Client ID and Client Secret into your `.env` or Vercel Environment Variables.

---

## ☁️ Deployment to Vercel

1. Push your code repository to GitHub.
2. Import your repository into **Vercel**.
3. Add a PostgreSQL database (e.g., **Vercel Postgres**, **Supabase**, or **Neon**).
4. Configure Environment Variables in Vercel project settings:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `NEXTAUTH_URL`: `https://<your-app-name>.vercel.app`
   - `NEXTAUTH_SECRET`: Generate a secret via `openssl rand -base64 32`
   - `GOOGLE_CLIENT_ID`: Your Google OAuth Client ID
   - `GOOGLE_CLIENT_SECRET`: Your Google OAuth Client Secret
   - `ADMIN_EMAIL`: `admin@mocktestportal.com` (or your preferred admin email)
   - `ENABLE_DEMO_AUTH`: `false` (Ensures demo login is completely disabled in production)
5. Deploy! Vercel will run `prisma generate` during `postinstall` automatically.
