import Link from "next/link";
import { getDayData, getStepData, courseData } from "@/lib/courseData";
import CodeViewer from "@/components/CodeViewer";

export async function generateStaticParams() {
  const params = [];
  courseData.forEach(day => {
    day.steps.forEach(step => {
      params.push({ dayId: day.dayId, step: step.id });
    });
  });
  return params;
}

export default async function StepPage({ params }) {
  const resolvedParams = await params;
  const { dayId, step } = resolvedParams;

  const day = getDayData(dayId);
  const stepData = getStepData(dayId, step);

  if (!day || !stepData) {
    return <div className="p-20 text-center text-white">해당 스텝을 찾을 수 없습니다.</div>;
  }

  // Calculate Next and Previous logic
  const dayIndex = courseData.findIndex(d => d.dayId === dayId);
  const stepIndex = day.steps.findIndex(s => s.id === step);
  
  let prevLink = null;
  let nextLink = null;

  if (stepIndex > 0) {
    // Previous step in the same day
    prevLink = \`/lectures/\${dayId}/\${day.steps[stepIndex - 1].id}\`;
  } else if (dayIndex > 0) {
    // Last step of the previous day
    const prevDay = courseData[dayIndex - 1];
    prevLink = \`/lectures/\${prevDay.dayId}/\${prevDay.steps[prevDay.steps.length - 1].id}\`;
  }

  if (stepIndex < day.steps.length - 1) {
    // Next step in the same day
    nextLink = \`/lectures/\${dayId}/\${day.steps[stepIndex + 1].id}\`;
  } else if (dayIndex < courseData.length - 1) {
    // First step of the next day
    const nextDay = courseData[dayIndex + 1];
    nextLink = \`/lectures/\${nextDay.dayId}/1\`;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 pt-16">
      <div className="max-w-4xl mx-auto px-6 pb-24">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="text-zinc-500 hover:text-white transition-colors text-sm mb-6 inline-block">
            ← 목차로 돌아가기
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 text-xs font-bold bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
              {day.title} : {day.description}
            </span>
            <span className="text-zinc-600 text-sm">Step {step}/{day.steps.length}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            {stepData.title}
          </h1>
          <p className="text-zinc-400 text-lg">
            {stepData.description}
          </p>
        </div>

        {/* Code Content */}
        <div className="mb-12">
          <CodeViewer code={stepData.code} filename="main.c" />
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between border-t border-zinc-800 pt-8 mt-12">
          {prevLink ? (
            <Link 
              href={prevLink}
              className="px-6 py-3 rounded-xl bg-[#0a0a0a] border border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:border-zinc-600 transition-all font-medium flex items-center gap-2"
            >
              <span>← 이전 단계</span>
            </Link>
          ) : (
            <div></div> // empty div for spacing if no prev
          )}

          {nextLink ? (
            <Link 
              href={nextLink}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all font-medium flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              <span>다음 단계 →</span>
            </Link>
          ) : (
            <Link 
              href="/"
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition-all font-medium flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <span>강의 완료! (목차로)</span>
            </Link>
          )}
        </div>
        
      </div>
    </div>
  );
}
