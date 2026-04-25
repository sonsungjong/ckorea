import Link from "next/link";
import { getCurriculum, getDayFiles, getFileContent } from "@/lib/curriculum";
import LectureTabs from "@/components/LectureTabs";

export async function generateStaticParams() {
  const curriculum = getCurriculum();
  return curriculum.map((item) => ({
    day: item.day,
  }));
}

export default async function LectureDetailPage({ params }) {
  // `params` will be a Promise in Next.js 15+ (if using canary/v15), but standard in Next.js 14. 
  // Let's resolve it if needed, or assume standard params.
  const resolvedParams = await params;
  const { day } = resolvedParams;

  const curriculum = getCurriculum();
  const dayInfo = curriculum.find(item => item.day === day);

  if (!dayInfo) {
    return <div className="p-20 text-center text-white">Lecture not found</div>;
  }

  const filenames = getDayFiles(day);
  const files = filenames.map(filename => ({
    filename,
    content: getFileContent(day, filename) || "// No content"
  }));

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 pt-20">
      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* Header */}
        <div className="mb-10">
          <Link href="/lectures" className="text-zinc-500 hover:text-white transition-colors text-sm mb-6 inline-block">
            ← 강의 목록으로 돌아가기
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 text-xs font-bold bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
              {dayInfo.title}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {dayInfo.description}
          </h1>
          <p className="text-zinc-400">
            해당 챕터의 실습 소스 코드입니다. 코드를 분석하고 복사하여 직접 실행해보세요.
          </p>
        </div>

        {/* Content Tabs */}
        <div className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            실습 파일
          </h2>
          <LectureTabs files={files} dayTitle={dayInfo.title} />
        </div>
      </div>
    </div>
  );
}
