import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 pt-20">
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="mb-14 border-b border-zinc-800 pb-8 text-center md:text-left">
          <p className="text-sm font-semibold text-blue-400 mb-3">C언어 학습 자료</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            C언어 기초 프로그래밍
          </h1>
          <p className="text-zinc-400 text-lg">
            강의 자료로 개념을 익히고, 퀴즈로 이해도를 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/lectures"
            className="group relative min-h-64 bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-8 hover:border-blue-500/60 transition-all overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors" />
            <div className="relative">
              <div className="text-sm font-bold text-blue-400 mb-4">LECTURES</div>
              <h2 className="text-3xl font-black mb-4">강의 자료</h2>
              <p className="text-zinc-400 mb-8">
                Day별 개념 설명과 C 예제 코드를 순서대로 학습합니다.
              </p>
              <span className="inline-flex px-5 py-2.5 rounded-full bg-blue-600 text-white font-medium group-hover:bg-blue-500 transition-colors">
                강의 보러가기
              </span>
            </div>
          </Link>

          <Link
            href="/quizzes"
            className="group relative min-h-64 bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-8 hover:border-emerald-500/60 transition-all overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors" />
            <div className="relative">
              <div className="text-sm font-bold text-emerald-400 mb-4">QUIZZES</div>
              <h2 className="text-3xl font-black mb-4">퀴즈</h2>
              <p className="text-zinc-400 mb-8">
                각 Day의 핵심 개념을 짧은 문제로 복습합니다.
              </p>
              <span className="inline-flex px-5 py-2.5 rounded-full bg-emerald-600 text-white font-medium group-hover:bg-emerald-500 transition-colors">
                퀴즈 풀러가기
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
