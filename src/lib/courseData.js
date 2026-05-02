import fs from "node:fs";
import path from "node:path";
import day1Quiz from "./quizzes/day1";
import day2Quiz from "./quizzes/day2";
import day3Quiz from "./quizzes/day3";

function readLectureCode(dayId, filename) {
  return fs.readFileSync(
    path.join(process.cwd(), "src", "lib", "lectures", dayId, filename),
    "utf8"
  );
}

function getDynamicSteps(dayId) {
  try {
    const dirPath = path.join(process.cwd(), "src", "lib", "lectures", dayId);
    if (!fs.existsSync(dirPath)) return [];
    
    const files = fs.readdirSync(dirPath)
      .filter(f => f.endsWith('.c'))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
      
    return files.map((file, index) => ({
      id: (index + 1).toString(),
      title: file,
      description: "",
      code: readLectureCode(dayId, file)
    }));
  } catch (e) {
    return [];
  }
}


const day1Lecture = {
  dayId: "day1",
  title: "Day 1",
  description: "변수와 연산자",
  steps: [
    {
      id: "1",
      title: "printf 출력",
      description: "printf 함수로 화면에 문자열을 출력합니다.",
      code: readLectureCode("day1", "01-printf.c")
    },
    {
      id: "2",
      title: "반복되는 출력",
      description: "같은 출력 코드가 반복될 때 생기는 문제를 확인합니다.",
      code: readLectureCode("day1", "02-variable.c")
    },
    {
      id: "3",
      title: "변수",
      description: "값을 저장하고 재사용하는 변수의 필요성을 배웁니다.",
      code: readLectureCode("day1", "03-variable.c")
    },
    {
      id: "4",
      title: "기본 연산자",
      description: "산술 연산자를 사용해 값을 계산합니다.",
      code: readLectureCode("day1", "04-operator.c")
    },
    {
      id: "5",
      title: "연산자 활용",
      description: "연산자를 활용한 예제 코드를 확인합니다.",
      code: readLectureCode("day1", "05-operator.c")
    }
  ]
};

const day2Lecture = {
  dayId: "day2",
  title: "Day 2",
  description: "조건문",
  steps: [
    {
      id: "1",
      title: "변수와 연산자 복습",
      description: "변수와 연산자를 함께 사용하는 예제를 확인합니다.",
      code: readLectureCode("day2", "01-variable-operator.c")
    },
    {
      id: "2",
      title: "연산자",
      description: "여러 연산자의 동작을 예제로 확인합니다.",
      code: readLectureCode("day2", "02-operator.c")
    },
    {
      id: "3",
      title: "scanf 입력",
      description: "scanf로 사용자 입력을 받는 방법을 배웁니다.",
      code: readLectureCode("day2", "03-scanf.c")
    },
    {
      id: "4",
      title: "if 조건문",
      description: "조건이 참일 때만 코드를 실행하는 if문을 배웁니다.",
      code: readLectureCode("day2", "04-if.c")
    },
    {
      id: "5",
      title: "if 조건문 활용",
      description: "조건문을 사용한 분기 예제를 확인합니다.",
      code: readLectureCode("day2", "05-if.c")
    },
    {
      id: "6",
      title: "if 조건문 연습",
      description: "조건문 연습용 예제 파일입니다.",
      code: readLectureCode("day2", "06-if.c")
    },
    {
      id: "7",
      title: "switch 분기문",
      description: "여러 값 중 하나를 선택해 분기하는 switch문을 배웁니다.",
      code: readLectureCode("day2", "07-switch.c")
    }
  ]
};

export const courseData = [
  day1Lecture,
  day2Lecture,
  {
    dayId: "day3",
    title: "Day 3",
    description: "반복문",
    steps: getDynamicSteps("day3")
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

export const quizData = [
  day1Quiz,
  day2Quiz,
  day3Quiz,
  {
    dayId: "day4",
    title: "Day 4 퀴즈",
    description: "배열 빈칸 완성",
    questions: [
      {
        id: "1",
        prompt: "배열의 첫 번째 값이 출력되도록 빈칸을 채우세요.",
        code: `#include <stdio.h>

int main() {
    int scores[3] = {80, 90, 100};
    printf("%d\\n", scores[____]);

    return 0;
}`,
        answer: `0`
      }
    ]
  },
  {
    dayId: "day5",
    title: "Day 5 퀴즈",
    description: "함수 빈칸 완성",
    questions: [
      {
        id: "1",
        prompt: "add 함수가 두 수의 합을 반환하도록 빈칸을 채우세요.",
        code: `#include <stdio.h>

int add(int a, int b) {
    return ____;
}

int main() {
    printf("%d\\n", add(10, 20));

    return 0;
}`,
        answer: `a + b`
      }
    ]
  },
  {
    dayId: "day6",
    title: "Day 6 퀴즈",
    description: "포인터 빈칸 완성",
    questions: [
      {
        id: "1",
        prompt: "포인터 `ptr`이 `num`의 주소를 저장하도록 빈칸을 채우세요.",
        code: `#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = ____;

    printf("%d\\n", *ptr);

    return 0;
}`,
        answer: `&num`
      }
    ]
  },
  {
    dayId: "day7",
    title: "Day 7 퀴즈",
    description: "구조체 빈칸 완성",
    questions: [
      {
        id: "1",
        prompt: "Student 구조체 변수를 선언하도록 빈칸을 채우세요.",
        code: `#include <stdio.h>

struct Student {
    int age;
    int score;
};

int main() {
    ____ s1;
    s1.age = 20;

    printf("%d\\n", s1.age);

    return 0;
}`,
        answer: `struct Student`
      }
    ]
  },
  {
    dayId: "day8",
    title: "Day 8 퀴즈",
    description: "함수 포인터 빈칸 완성",
    questions: [
      {
        id: "1",
        prompt: "함수 포인터 `calc`가 add 함수를 가리키도록 빈칸을 채우세요.",
        code: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int (*calc)(int, int);
    calc = ____;

    printf("%d\\n", calc(10, 5));

    return 0;
}`,
        answer: `add`
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

export function getQuizOverview() {
  return quizData.map(quiz => ({
    dayId: quiz.dayId,
    title: quiz.title,
    description: quiz.description,
    questionCount: quiz.questions.length
  }));
}

export function getQuizData(dayId) {
  return quizData.find(q => q.dayId === dayId) || null;
}
