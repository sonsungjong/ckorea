import Link from "next/link";
import { getQuizData, quizData } from "@/lib/courseData";
import CodeViewer from "@/components/CodeViewer";

export async function generateStaticParams() {
  return quizData.map(quiz => ({ dayId: quiz.dayId }));
}

export default async function QuizPage({ params }) {
  const { dayId } = await params;
  const quiz = getQuizData(dayId);

  if (!quiz) {
    return <div className="p-20 text-center text-white">해당 퀴즈를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 pt-16">
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <div className="mb-8">
          <Link href="/quizzes" className="text-zinc-500 hover:text-white transition-colors text-sm mb-6 inline-block">
            ← 퀴즈 목록으로 돌아가기
          </Link>
          <div className="inline-flex px-3 py-1 text-xs font-bold bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 mb-4">
            {quiz.description}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            {quiz.title}
          </h1>
          <p className="text-zinc-400 text-lg">
            빈칸을 채워 코드가 실행될 수 있게 완성하세요.
          </p>
        </div>

        <div className="space-y-5">
          {quiz.questions.map((item, index) => (
            <section
              key={item.id}
              className="bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-6"
            >
              <div className="text-sm font-bold text-emerald-400 mb-3">
                Q{index + 1}
              </div>
              <h2 className="text-xl font-bold text-white mb-5">{item.prompt}</h2>
              <CodeViewer code={item.code} filename={`quiz-${item.id}.c`} />
              <details className="group">
                <summary className="cursor-pointer text-sm font-medium text-zinc-300 group-open:text-emerald-400 transition-colors">
                  빈칸 정답 보기
                </summary>
                <div className="mt-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4">
                  <div className="text-xs font-bold text-emerald-400 mb-2">정답</div>
                  <code className="font-mono text-emerald-100">{item.answer}</code>
                </div>
              </details>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
