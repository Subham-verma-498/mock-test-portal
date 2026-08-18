'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import {
  Brain,
  Sparkles,
  Server,
  Code2,
  CheckCircle2,
  Clock,
  HelpCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Trophy,
  Play,
  Filter,
  Award,
  BookOpen,
} from 'lucide-react';

interface TestItem {
  id: string;
  title: string;
  category: string;
  description: string;
  totalQuestions: number;
  timePerQuestion: number;
  marksPerQuestion: number;
  isCompleted?: boolean;
  highestScore?: number | null;
  _count?: {
    questions: number;
  };
}

interface CourseItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  badge: string;
  icon: string;
  description: string;
  totalTests: number;
  completedTests: number;
  progressPercentage: number;
  tests: TestItem[];
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch('/api/courses');
        if (res.ok) {
          const data = await res.json();
          setCourses(data.courses || []);
          if (data.courses?.length > 0) {
            setExpandedCourseId(data.courses[0].id);
          }
        }
      } catch (err) {
        console.error('Failed to fetch courses:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-[#38C7C7]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#38C7C7]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#38C7C7]" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#38C7C7]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#38C7C7]" />;
      default:
        return <BookOpen className="w-6 h-6 text-[#38C7C7]" />;
    }
  };

  const categories = ['ALL', 'Aptitude', 'Reasoning', 'Technical', 'IndiaBIX'];

  const filteredCourses = selectedCategory === 'ALL'
    ? courses
    : courses.filter((c) => c.category.toLowerCase() === selectedCategory.toLowerCase());

  const totalSeries = courses.length;
  const totalAvailableTests = courses.reduce((acc, c) => acc + c.totalTests, 0);
  const totalCompletedTests = courses.reduce((acc, c) => acc + c.completedTests, 0);

  return (
    <div className="min-h-screen bg-[#03070d] text-slate-100 font-sans selection:bg-[#38C7C7]/30 selection:text-cyan-200 pb-20">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-[#07131e] to-[#040e17] border border-[#38C7C7]/20 p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden mb-10">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#38C7C7]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-12 w-64 h-64 bg-cyan-600/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#38C7C7]/15 border border-[#38C7C7]/30 text-[#38C7C7] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Structured Exam Prep Track</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Courses & Dedicated Test Series
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Master Aptitude, Logical Reasoning, and Technical Placement exams through organized course series. 
              Each test is built with unique, non-repeating questions designed to simulate actual campus recruitment tests.
            </p>

            {/* Quick Stat Badges */}
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              <div className="bg-black/40 border border-slate-800 rounded-xl p-3.5 text-center">
                <div className="text-2xl font-black text-white">{totalSeries}</div>
                <div className="text-xs text-slate-400 font-medium">Series Tracks</div>
              </div>
              <div className="bg-black/40 border border-slate-800 rounded-xl p-3.5 text-center">
                <div className="text-2xl font-black text-[#38C7C7]">{totalAvailableTests}</div>
                <div className="text-xs text-slate-400 font-medium">Total Tests</div>
              </div>
              <div className="bg-black/40 border border-slate-800 rounded-xl p-3.5 text-center">
                <div className="text-2xl font-black text-emerald-400">{totalCompletedTests}</div>
                <div className="text-xs text-slate-400 font-medium">Completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center">
            <Filter className="w-3.5 h-3.5 mr-1 text-[#38C7C7]" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory.toLowerCase() === cat.toLowerCase()
                  ? 'bg-[#38C7C7] text-black shadow-lg shadow-[#38C7C7]/20 scale-105'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-[#38C7C7]/40 hover:text-white'
              }`}
            >
              {cat === 'ALL' ? 'All Course Tracks' : `${cat} Series`}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-44 bg-slate-900/60 border border-slate-800 rounded-2xl animate-pulse"
              />
            ))}
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-300">No course tracks found</h3>
            <p className="text-sm text-slate-500">Try selecting a different filter category above.</p>
          </div>
        ) : (
          /* Course Series List */
          <div className="space-y-6">
            {filteredCourses.map((course) => {
              const isExpanded = expandedCourseId === course.id;

              return (
                <div
                  key={course.id}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isExpanded
                      ? 'bg-slate-900/90 border-[#38C7C7]/50 shadow-[0_8px_30px_rgba(56,199,199,0.12)]'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  {/* Course Header Bar */}
                  <div
                    onClick={() => setExpandedCourseId(isExpanded ? null : course.id)}
                    className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-black border border-[#38C7C7]/30 flex items-center justify-center shrink-0 shadow-md">
                        {getCourseIcon(course.icon)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#38C7C7]/15 text-[#38C7C7] text-[11px] font-bold uppercase tracking-wider">
                            {course.category}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md bg-zinc-800 text-slate-300 text-[11px] font-semibold">
                            {course.badge}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-white tracking-tight">
                          {course.title}
                        </h2>
                        <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                          {course.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end space-x-6 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-800">
                      {/* Course Progress */}
                      <div className="text-right min-w-[130px]">
                        <div className="text-xs font-semibold text-slate-400 mb-1 flex items-center justify-between">
                          <span>Progress</span>
                          <span className="text-[#38C7C7] font-bold">
                            {course.completedTests}/{course.totalTests} Tests
                          </span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-[#38C7C7] rounded-full transition-all duration-500"
                            style={{ width: `${course.progressPercentage}%` }}
                          />
                        </div>
                      </div>

                      <button
                        className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                        aria-label="Toggle series tests"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-[#38C7C7]" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Test Series Items (Expanded Accordion Content) */}
                  {isExpanded && (
                    <div className="border-t border-slate-800/80 p-6 bg-black/40 rounded-b-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Tests included in this series ({course.tests.length}):
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.tests.map((test, index) => {
                          const questionCount = test._count?.questions || test.totalQuestions;
                          const totalTimeMins = Math.round((test.timePerQuestion * questionCount) / 60);

                          return (
                            <div
                              key={test.id}
                              className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                                test.isCompleted
                                  ? 'bg-slate-900/60 border-emerald-500/30'
                                  : 'bg-slate-900/30 border-slate-800 hover:border-[#38C7C7]/40'
                              }`}
                            >
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-[11px] font-bold text-[#38C7C7]">
                                    Test #{index + 1}
                                  </span>
                                  {test.isCompleted ? (
                                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                                      <CheckCircle2 className="w-3 h-3" />
                                      <span>Score: {test.highestScore} pts</span>
                                    </span>
                                  ) : (
                                    <span className="text-[10px] font-semibold text-slate-400">
                                      Not Attempted
                                    </span>
                                  )}
                                </div>

                                <h4 className="text-base font-bold text-white mb-1.5">
                                  {test.title}
                                </h4>
                                <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                                  {test.description}
                                </p>
                              </div>

                              <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
                                <div className="flex items-center space-x-3 text-xs text-slate-400">
                                  <span className="flex items-center">
                                    <HelpCircle className="w-3.5 h-3.5 mr-1 text-[#38C7C7]" />
                                    {questionCount} Qs
                                  </span>
                                  <span className="flex items-center">
                                    <Clock className="w-3.5 h-3.5 mr-1 text-[#38C7C7]" />
                                    {totalTimeMins} mins
                                  </span>
                                </div>

                                <Link
                                  href={`/test/${test.id}`}
                                  className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm ${
                                    test.isCompleted
                                      ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white'
                                      : 'bg-[#38C7C7] text-black hover:bg-[#2fb0b0] shadow-[#38C7C7]/20 scale-100 hover:scale-105'
                                  }`}
                                >
                                  <Play className="w-3 h-3 fill-current" />
                                  <span>{test.isCompleted ? 'Re-take' : 'Start Test'}</span>
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
