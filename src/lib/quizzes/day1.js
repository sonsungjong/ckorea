const day1Quiz = {
  dayId: "day1",
  title: "Day 1 퀴즈",
  description: "출력, 변수, 연산자 빈칸 완성",
  questions: [
    {
      id: "1",
      prompt: "아래 코드가 문자열을 출력하도록 빈칸을 채우세요.",
      code: `#include <stdio.h>

int main() {
    ____("Hello C 언어!\\n");

    return 0;
}`,
      answer: `printf`
    },
    {
      id: "2",
      prompt: "변수 `count`에 5를 저장하도록 빈칸을 채우세요.",
      code: `#include <stdio.h>

int main() {
    int count = ____;
    printf("%d\\n", count);

    return 0;
}`,
      answer: `5`
    },
    {
      id: "3",
      prompt: "두 수를 더한 결과가 출력되도록 빈칸을 채우세요.",
      code: `#include <stdio.h>

int main() {
    int a = 10;
    int b = 3;

    printf("%d\\n", a ____ b);

    return 0;
}`,
      answer: `+`
    }
  ]
};

export default day1Quiz;
