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
            빈칸을 채우거나 직접 프로그램을 작성해 코드가 실행되게 완성하세요.
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
              <h2 className="text-xl font-bold text-white mb-5 whitespace-pre-wrap">{item.prompt}</h2>
              {item.table || item.tableRows ? (
                <div className="mb-6 overflow-hidden rounded-2xl border border-emerald-500/20 bg-[#070f0b]">
                  <div className="border-b border-emerald-500/20 bg-emerald-500/10 px-5 py-4">
                    <h3 className="text-lg font-bold text-emerald-300">{item.tableTitle}</h3>
                  </div>
                  {item.tableVariant === "horizontal" ? (
                    <table className="w-full min-w-[520px] table-fixed border-collapse text-center">
                      <thead className="bg-zinc-950/70 text-xs font-bold uppercase tracking-wide text-zinc-400">
                        <tr>
                          {item.tableHeaders.map((header) => (
                            <th key={header} className="border-b border-zinc-800 px-5 py-3">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {item.tableRows.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                              <td
                                key={`${rowIndex}-${cellIndex}`}
                                className="border-b border-zinc-900 px-5 py-5 font-bold text-emerald-300 last:border-b-0"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <table className="w-full border-collapse">
                      <thead className="bg-zinc-950/70 text-xs font-bold uppercase tracking-wide text-zinc-400">
                        <tr>
                          <th className="border-b border-zinc-800 px-5 py-3 text-left">
                            {item.tableHeaders?.[0] || "구분"}
                          </th>
                          <th className="border-b border-zinc-800 px-5 py-3 text-left">
                            {item.tableHeaders?.[1] || "조건"}
                          </th>
                          <th className="border-b border-zinc-800 px-5 py-3 text-right">
                            {item.tableHeaders?.[2] || "값"}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.table.map((row) => (
                          <tr key={row.label}>
                            <td className="border-b border-zinc-900 px-5 py-4 font-semibold text-white">
                              {row.label}
                            </td>
                            <td className="border-b border-zinc-900 px-5 py-4 text-zinc-400">
                              {row.condition}
                            </td>
                            <td className="border-b border-zinc-900 px-5 py-4 text-right font-bold text-emerald-300">
                              {row.fare}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              ) : null}
              {item.code ? (
                <CodeViewer code={item.code} filename={`quiz-${item.id}.c`} />
              ) : null}
              {item.starterCode ? (
                <CodeViewer code={item.starterCode} filename={`quiz-${item.id}-starter.c`} />
              ) : null}
              <details className="group">
                <summary className="cursor-pointer text-sm font-medium text-zinc-300 group-open:text-emerald-400 transition-colors">
                  정답 보기
                </summary>
                <div className="mt-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4">
                  <div className="text-xs font-bold text-emerald-400 mb-2">정답</div>
                  {item.answerCode ? (
                    <CodeViewer code={item.answerCode} filename={`quiz-${item.id}-answer.c`} />
                  ) : (
                    <code className="font-mono text-emerald-100">{item.answer}</code>
                  )}
                </div>
              </details>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
