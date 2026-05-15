const day7Quiz = {
  dayId: "day7",
  title: "Day 7 퀴즈",
  description: "여러 데이터를 묶는 구조체(struct)와 동적 메모리 할당(malloc)의 기초를 다집니다.",
  questions: [
    {
      id: "1",
      prompt: "이름, 학년, 반을 하나로 묶어서 관리하는 '학생' 구조체를 정의하려고 합니다. 알맞은 키워드를 채워주세요.",
      code: `____ 학생 {
    char* name;
    int grade;
    int classNumber;
};`,
      answer: `struct`
    },
    {
      id: "2",
      prompt: "구조체 변수 '민준'의 '학년(grade)' 데이터에 접근하려고 합니다. 일반 구조체 변수는 어떤 기호를 사용할까요?",
      code: `struct 학생 민준 = {"김민준", 1, 3};

printf("학년: %d\\n", 민준____grade);`,
      answer: `.`
    },
    {
      id: "3",
      prompt: "매번 'struct'를 쓰지 않기 위해 구조체에 'StudyRecord'라는 새로운 별명을 붙여주려고 합니다.",
      code: `____ struct {
    char* name;
    int score;
} StudyRecord;

StudyRecord record = {"하은", 100};`,
      answer: `typedef`
    },
    {
      id: "4",
      prompt: "구조체 '포인터'를 사용하여 멤버 변수에 접근할 때는 점(.) 대신 화살표 기호를 사용합니다.",
      code: `StudyRecord record = {"하은", 82};
StudyRecord* pRecord = &record;

// 하은이의 점수를 포인터를 통해 5점 올려줍니다.
pRecord____score = pRecord____score + 5;`,
      answer: `->`
    },
    {
      id: "5",
      prompt: "프로그램 실행 중에 필요한 만큼 메모리를 빌려오는(할당하는) 함수입니다.",
      code: `#include <stdlib.h>

// int 크기만큼 메모리를 동적으로 할당합니다.
int* pLevel = (int*)____(sizeof(int));`,
      answer: `malloc`
    },
    {
      id: "6",
      prompt: "빌려온 메모리를 다 사용한 후에는 반드시 운영체제에 반납해야 합니다. 메모리를 해제하는 함수를 채워주세요.",
      code: `int* pLevel = (int*)malloc(sizeof(int));
*pLevel = 99;

// 빌린 메모리 반납하기
____(pLevel);`,
      answer: `free`
    }
  ]
};

export default day7Quiz;
