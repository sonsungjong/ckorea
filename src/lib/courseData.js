import fs from "node:fs";
import path from "node:path";
import day1Quiz from "./quizzes/day1";
import day2Quiz from "./quizzes/day2";
import day3Quiz from "./quizzes/day3";
import day4Quiz from "./quizzes/day4";

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


export const courseData = [
  {
    dayId: "day1",
    title: "Day 1",
    description: "변수와 연산자",
    steps: getDynamicSteps("day1")
  },
  {
    dayId: "day2",
    title: "Day 2",
    description: "조건문",
    steps: getDynamicSteps("day2")
  },
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
    steps: getDynamicSteps("day4")
  },
  {
    dayId: "day5",
    title: "Day 5",
    description: "함수",
    steps: getDynamicSteps("day5")
  },
  {
    dayId: "day6",
    title: "Day 6",
    description: "포인터",
    steps: getDynamicSteps("day6")
  },
  {
    dayId: "day7",
    title: "Day 7",
    description: "구조체",
    steps: getDynamicSteps("day7")
  },
  {
    dayId: "day8",
    title: "Day 8",
    description: "함수 포인터",
    steps: getDynamicSteps("day8")
  }
];

export const quizData = [
  day1Quiz,
  day2Quiz,
  day3Quiz,
  day4Quiz,
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
