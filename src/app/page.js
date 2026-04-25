import Link from "next/link";
import { getCourseOverview } from "@/lib/courseData";

export default function Home() {
  const curriculum = getCourseOverview();

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 pt-20">
      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* Header */}
        <div className="mb-16 border-b border-zinc-800 pb-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            C언어 기초 프로그래밍
          </h1>
          <p className="text-zinc-400">
            C언어 입문.
          </p>
        </div>

        {/* Curriculum List */}
        <div className="grid grid-cols-1 gap-6">
          {curriculum.map((item, index) => (
            <Link
              key={item.dayId}
              href={`/lectures/${item.dayId}/1`}
              className="group relative bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-600 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title} : {item.description}
                  </h3>
                  <p className="text-zinc-400">
                    총 {item.stepCount}개의 스텝으로 구성되어 있습니다.
                  </p>
                </div>
              </div>

              <div className="px-6 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all self-start md:self-auto shrink-0">
                학습 시작하기
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
