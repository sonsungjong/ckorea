import Link from "next/link";
import { getQuizOverview } from "@/lib/courseData";

export default function QuizzesPage() {
  const quizzes = getQuizOverview();

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 pt-20">
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="mb-12">
          <Link href="/" className="text-zinc-500 hover:text-white transition-colors text-sm mb-6 inline-block">
            ← 홈으로 돌아가기
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            퀴즈
          </h1>
          <p className="text-zinc-400 text-lg">
            Day별 핵심 개념을 문제로 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizzes.map((quiz) => (
            <Link
              key={quiz.dayId}
              href={`/quizzes/${quiz.dayId}`}
              className="group bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/60 transition-all"
            >
              <div className="text-sm font-bold text-emerald-400 mb-3">
                {quiz.questionCount}문항
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {quiz.title}
              </h2>
              <p className="text-zinc-400 mb-6">{quiz.description}</p>
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                퀴즈 시작하기 →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
