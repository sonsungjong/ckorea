const day2Quiz = {
  dayId: "day2",
  title: "Day 2 퀴즈",
  description: "입력, 조건문, 삼항연산자 연습",
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
      type: "program",
      prompt: "숫자를 입력받아서 홀수인지 짝수인지 판단하는 프로그램을 삼항연산자로 작성해보세요.",
      starterCode: `#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    int num = 0;

    printf("숫자를 입력하세요>> ");
    scanf("%d", &num);

    // 여기에 삼항연산자로 홀수/짝수를 출력하세요.

    return 0;
}`,
      answerCode: `#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    int num = 0;

    printf("숫자를 입력하세요>> ");
    scanf("%d", &num);

    (num % 2 == 0) ? printf("짝수입니다.\\n") : printf("홀수입니다.\\n");

    return 0;
}`
    },
    {
      id: "3",
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
      id: "4",
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
    },
    {
      id: "5",
      type: "program",
      prompt: "숫자를 입력받아서 홀수인지 짝수인지 판단하는 프로그램을 if문으로 작성해보세요.",
      answerCode: `#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    int num = 0;

    printf("숫자를 입력하세요>> ");
    scanf("%d", &num);

    if (num % 2 == 0) {
        printf("짝수입니다.\\n");
    } else {
        printf("홀수입니다.\\n");
    }

    return 0;
}`
    },
    {
      id: "6",
      type: "program",
      prompt: "사용자에게 나이를 입력받고, 아래 버스 요금표에 맞춰 지불해야 하는 요금을 출력하는 프로그램을 작성해보세요. 코드 미리보기 없이 직접 작성해보세요.",
      tableTitle: "버스 요금표",
      tableHeaders: ["구분", "조건", "요금"],
      table: [
        { label: "영유아 및 노인", condition: "6세 미만 또는 65세 이상", fare: "무료" },
        { label: "어린이", condition: "6세 이상 13세 미만", fare: "500원" },
        { label: "청소년", condition: "13세 이상 19세 미만", fare: "900원" },
        { label: "일반", condition: "19세 이상 65세 미만", fare: "1250원" }
      ],
      answerCode: `#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    int age = 0;
    int fare = 0;

    printf("나이를 입력하세요>> ");
    scanf("%d", &age);

    if (age < 6) {
        fare = 0;
    } else if (age < 13) {
        fare = 500;
    } else if (age < 19) {
        fare = 900;
    } else if (age < 65) {
        fare = 1250;
    } else {
        fare = 0;
    }

    printf("지불해야 하는 요금은 %d원입니다.\\n", fare);

    return 0;
}`
    },
    {
      id: "7",
      type: "program",
      prompt: "아래 중간고사 성적표를 보고 평균 점수를 구한 뒤, 평균 점수에 따른 학점을 출력하는 프로그램을 작성해보세요. 90 이상은 A, 80 이상은 B, 70 이상은 C, 60 미만은 D입니다.",
      tableTitle: "중간고사 성적표",
      tableVariant: "horizontal",
      tableHeaders: ["국어", "영어", "수학", "사회", "과학"],
      tableRows: [["88", "90", "58", "81", "72"]],
      answerCode: `#include <stdio.h>

int main() {
    int korean = 88;
    int english = 90;
    int math = 58;
    int social = 81;
    int science = 72;
    double average = 0;
    char grade = 'D';

    average = (korean + english + math + social + science) / 5.0;

    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    } else if (average >= 70) {
        grade = 'C';
    } else {
        grade = 'D';
    }

    printf("평균 점수: %f\\n", average);
    printf("학점: %c\\n", grade);

    return 0;
}`
    }
  ]
};

export default day2Quiz;
