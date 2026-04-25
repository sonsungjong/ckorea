const day2Quiz = {
  dayId: "day2",
  title: "Day 2 퀴즈",
  description: "입력과 조건문 빈칸 완성",
  questions: [
    {
      id: "1",
      prompt: "사용자가 입력한 정수가 `num`에 저장되도록 빈칸을 채우세요.",
      code: `#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    int num = 0;
    ____("%d", &num);
    printf("%d\\n", num);

    return 0;
}`,
      answer: `scanf`
    },
    {
      id: "2",
      prompt: "score가 60 이상일 때만 통과 메시지가 나오도록 빈칸을 채우세요.",
      code: `#include <stdio.h>

int main() {
    int score = 75;

    ____(score >= 60) {
        printf("통과\\n");
    }

    return 0;
}`,
      answer: `if`
    },
    {
      id: "3",
      prompt: "menu 값에 따라 분기하도록 빈칸을 채우세요.",
      code: `#include <stdio.h>

int main() {
    int menu = 1;

    ____(menu) {
        case 1:
            printf("시작\\n");
            break;
        default:
            printf("다시 선택\\n");
            break;
    }

    return 0;
}`,
      answer: `switch`
    }
  ]
};

export default day2Quiz;
