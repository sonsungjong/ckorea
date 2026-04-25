export const courseData = [
  {
    dayId: "day1",
    title: "Day 1",
    description: "변수와 연산",
    steps: [
      {
        id: "1",
        title: "Hello World 출력",
        description: "C언어의 가장 기본이 되는 printf 함수를 사용하여 화면에 텍스트를 출력해봅시다.",
        code: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    printf("C언어 학습을 환영합니다!\\n");\n    \n    return 0;\n}`
      },
      {
        id: "2",
        title: "변수 선언과 초기화",
        description: "데이터를 저장할 수 있는 공간인 변수를 만들고 값을 넣어봅니다.",
        code: `#include <stdio.h>\n\nint main() {\n    int age = 20;           // 정수형 변수\n    float height = 175.5;   // 실수형 변수\n    char grade = 'A';       // 문자형 변수\n    \n    printf("나이: %d\\n", age);\n    printf("키: %.1f\\n", height);\n    printf("등급: %c\\n", grade);\n    \n    return 0;\n}`
      },
      {
        id: "3",
        title: "기본 연산자",
        description: "덧셈, 뺄셈 등 수학적 계산을 수행하는 연산자를 알아봅니다.",
        code: `#include <stdio.h>\n\nint main() {\n    int a = 10, b = 3;\n    \n    printf("a + b = %d\\n", a + b);\n    printf("a - b = %d\\n", a - b);\n    printf("a * b = %d\\n", a * b);\n    printf("a / b = %d (몫)\\n", a / b);\n    printf("a %% b = %d (나머지)\\n", a % b);\n    \n    return 0;\n}`
      }
    ]
  },
  {
    dayId: "day2",
    title: "Day 2",
    description: "조건문",
    steps: [
      {
        id: "1",
        title: "if 조건문",
        description: "특정 조건이 참(true)일 때만 코드를 실행하는 if문을 배워봅시다.",
        code: `#include <stdio.h>\n\nint main() {\n    int score = 85;\n    \n    if (score >= 90) {\n        printf("A 학점입니다.\\n");\n    } else if (score >= 80) {\n        printf("B 학점입니다.\\n");\n    } else {\n        printf("노력이 필요합니다.\\n");\n    }\n    \n    return 0;\n}`
      },
      {
        id: "2",
        title: "switch 분기문",
        description: "여러 개의 값 중 하나와 일치하는지 확인할 때 유용한 switch문입니다.",
        code: `#include <stdio.h>\n\nint main() {\n    int option = 2;\n    \n    switch (option) {\n        case 1:\n            printf("새 게임 시작\\n");\n            break;\n        case 2:\n            printf("게임 불러오기\\n");\n            break;\n        case 3:\n            printf("설정\\n");\n            break;\n        default:\n            printf("잘못된 입력입니다.\\n");\n            break;\n    }\n    \n    return 0;\n}`
      }
    ]
  },
  {
    dayId: "day3",
    title: "Day 3",
    description: "반복문",
    steps: [
      {
        id: "1",
        title: "for 반복문",
        description: "정해진 횟수만큼 코드를 반복 실행할 때 사용합니다.",
        code: `#include <stdio.h>\n\nint main() {\n    // 1부터 5까지 출력하기\n    for (int i = 1; i <= 5; i++) {\n        printf("%d번째 반복입니다.\\n", i);\n    }\n    \n    return 0;\n}`
      },
      {
        id: "2",
        title: "while 반복문",
        description: "조건이 참인 동안 계속해서 코드를 반복 실행합니다.",
        code: `#include <stdio.h>\n\nint main() {\n    int count = 5;\n    \n    // count가 0보다 클 때까지 반복\n    while (count > 0) {\n        printf("카운트다운: %d\\n", count);\n        count--;  // count 1 감소\n    }\n    printf("발사!\\n");\n    \n    return 0;\n}`
      }
    ]
  },
  {
    dayId: "day4",
    title: "Day 4",
    description: "배열",
    steps: [
      {
        id: "1",
        title: "1차원 배열",
        description: "같은 자료형의 변수 여러 개를 하나로 묶어서 관리하는 배열입니다.",
        code: `#include <stdio.h>\n\nint main() {\n    int scores[5] = {80, 90, 75, 100, 85};\n    int sum = 0;\n    \n    for (int i = 0; i < 5; i++) {\n        printf("%d번 학생 점수: %d\\n", i+1, scores[i]);\n        sum += scores[i];\n    }\n    \n    printf("총점: %d, 평균: %.1f\\n", sum, sum / 5.0);\n    \n    return 0;\n}`
      },
      {
        id: "2",
        title: "문자열 (문자 배열)",
        description: "C언어에서 문자열은 문자의 배열로 표현됩니다.",
        code: `#include <stdio.h>\n\nint main() {\n    char name[] = "C Language";\n    \n    printf("배우고 있는 언어: %s\\n", name);\n    \n    // 문자 하나씩 접근하기\n    for (int i = 0; name[i] != '\\0'; i++) {\n        printf("%c ", name[i]);\n    }\n    printf("\\n");\n    \n    return 0;\n}`
      }
    ]
  },
  {
    dayId: "day5",
    title: "Day 5",
    description: "함수",
    steps: [
      {
        id: "1",
        title: "함수 정의와 호출",
        description: "반복되는 코드를 블록으로 묶어 이름을 붙이고 필요할 때 호출합니다.",
        code: `#include <stdio.h>\n\n// 두 정수를 더하는 함수 정의\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int result1 = add(10, 20);\n    int result2 = add(5, 7);\n    \n    printf("10 + 20 = %d\\n", result1);\n    printf("5 + 7 = %d\\n", result2);\n    \n    return 0;\n}`
      }
    ]
  },
  {
    dayId: "day6",
    title: "Day 6",
    description: "포인터",
    steps: [
      {
        id: "1",
        title: "포인터의 기초",
        description: "메모리 주소를 저장하는 변수인 포인터의 개념을 알아봅니다.",
        code: `#include <stdio.h>\n\nint main() {\n    int num = 10;\n    int *ptr = &num;  // ptr에 num의 주소 저장\n    \n    printf("num의 값: %d\\n", num);\n    printf("num의 주소: %p\\n", &num);\n    printf("ptr이 가리키는 주소: %p\\n", ptr);\n    printf("ptr이 가리키는 값(*ptr): %d\\n", *ptr);\n    \n    // 포인터를 통해 값 변경\n    *ptr = 20;\n    printf("변경 후 num의 값: %d\\n", num);\n    \n    return 0;\n}`
      }
    ]
  },
  {
    dayId: "day7",
    title: "Day 7",
    description: "구조체",
    steps: [
      {
        id: "1",
        title: "구조체 정의와 사용",
        description: "서로 다른 자료형을 묶어 새로운 자료형을 만드는 구조체입니다.",
        code: `#include <stdio.h>\n#include <string.h>\n\n// Student 구조체 정의\nstruct Student {\n    char name[20];\n    int age;\n    int score;\n};\n\nint main() {\n    struct Student s1;\n    \n    strcpy(s1.name, "홍길동");\n    s1.age = 20;\n    s1.score = 95;\n    \n    printf("이름: %s\\n", s1.name);\n    printf("나이: %d\\n", s1.age);\n    printf("점수: %d\\n", s1.score);\n    \n    return 0;\n}`
      }
    ]
  },
  {
    dayId: "day8",
    title: "Day 8",
    description: "함수 포인터",
    steps: [
      {
        id: "1",
        title: "함수 포인터 기초",
        description: "함수의 시작 주소를 저장하고, 이를 통해 함수를 호출하는 방법입니다.",
        code: `#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint sub(int a, int b) {\n    return a - b;\n}\n\nint main() {\n    // 함수 포인터 선언 (반환형과 매개변수 타입 일치해야 함)\n    int (*calc)(int, int);\n    \n    calc = add;\n    printf("calc(10, 5) [add] = %d\\n", calc(10, 5));\n    \n    calc = sub;\n    printf("calc(10, 5) [sub] = %d\\n", calc(10, 5));\n    \n    return 0;\n}`
      }
    ]
  }
];

export function getCourseOverview() {
  return courseData.map(day => ({
    dayId: day.dayId,
    title: day.title,
    description: day.description,
    stepCount: day.steps.length
  }));
}

export function getDayData(dayId) {
  return courseData.find(d => d.dayId === dayId) || null;
}

export function getStepData(dayId, stepId) {
  const day = getDayData(dayId);
  if (!day) return null;
  return day.steps.find(s => s.id === stepId) || null;
}
