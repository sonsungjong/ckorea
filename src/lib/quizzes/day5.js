const day5Quiz = {
  dayId: "day5",
  title: "Day 5 퀴즈",
  description: "포인터의 기초, 이중 포인터, 그리고 널 포인터 등 핵심 개념을 쉽게 복습해보세요.",
  questions: [
    {
      id: "1",
      prompt: "변수 `num`이 저장된 '메모리 주소'를 구하려고 합니다. 변수 이름 앞에 어떤 기호를 붙여야 할까요?",
      code: `#include <stdio.h>

int main() {
    int num = 10;
    // 변수 num의 주소를 포인터에 저장합니다.
    int *ptr = ____num;

    return 0;
}`,
      answer: `&`
    },
    {
      id: "2",
      prompt: "포인터 `p`가 가리키는 원본 위치로 찾아가서 값을 변경하려고 합니다. (역참조 기호)",
      code: `#include <stdio.h>

int main() {
    int a = 10;
    int *p = &a;
    
    // 포인터를 타고 원본으로 가서 값을 50으로 바꿉니다.
    ____p = 50;

    printf("%d\\n", a); // 50 출력

    return 0;
}`,
      answer: `*`
    },
    {
      id: "3",
      prompt: "배열의 이름 자체가 배열의 '시작 주소'입니다. 배열의 주소를 포인터에 바로 저장해보세요.",
      code: `#include <stdio.h>

int main() {
    int arr[3] = {10, 20, 30};
    
    // 대괄호 없이 배열의 이름만 적으면 시작 주소가 됩니다.
    int *p = ____;
    
    printf("%d\\n", p[0]); // 10 출력

    return 0;
}`,
      answer: `arr`
    },
    {
      id: "4",
      prompt: "포인터 덧셈 연산을 사용해 배열의 두 번째 요소(20)에 접근하려고 합니다. 몇 칸 이동해야 할까요?",
      code: `#include <stdio.h>

int main() {
    int arr[3] = {10, 20, 30};
    int *p = arr;
    
    // p에서 몇 칸 옆으로 이동해야 두 번째 값이 나올까요?
    printf("%d\\n", *(p + ____)); // 20 출력

    return 0;
}`,
      answer: `1`
    },
    {
      id: "5",
      prompt: "읽기 전용인 '문자열'을 가리키는 포인터를 만들려고 합니다. 올바른 포인터 기호를 채우세요.",
      code: `#include <stdio.h>

int main() {
    // "Hello"라는 문자열의 시작 주소를 저장합니다.
    char ____str = "Hello";
    
    printf("%s\\n", str); // Hello 출력

    return 0;
}`,
      answer: `*`
    },
    {
      id: "6",
      prompt: "포인터의 주소를 저장하는 '이중 포인터'를 선언하려고 합니다. 기호를 알맞게 채워주세요.",
      code: `#include <stdio.h>

int main() {
    int num = 100;
    int *p1 = &num;
    
    // p1 포인터 자체의 주소를 저장하는 이중 포인터 p2를 선언합니다.
    int ____p2 = &p1;
    
    printf("%d\\n", **p2); // 100 출력

    return 0;
}`,
      answer: `**`
    },
    {
      id: "7",
      prompt: "여러 개의 문자열을 묶어서 저장하기 위해 '포인터 배열'을 만들었습니다. 단어가 3개이니 배열의 크기를 맞춰주세요.",
      code: `#include <stdio.h>

int main() {
    // 문자열을 가리키는 포인터를 여러 개 담는 배열입니다.
    char *words[____] = {
        "Apple",
        "Banana",
        "Cherry"
    };
    
    printf("%s\\n", words[1]); // Banana 출력

    return 0;
}`,
      answer: `3`
    },
    {
      id: "8",
      prompt: "아무것도 가리키지 않는 빈 포인터(안전한 포인터)를 만들려고 합니다. 영문 대문자로 적어주세요.",
      code: `#include <stdio.h>

int main() {
    // 쓰레기값이 들어가지 않도록 비워줍니다.
    int *ptr = ____;
    
    if (ptr == NULL) {
        printf("안전한 널 포인터입니다.\\n");
    }

    return 0;
}`,
      answer: `NULL`
    }
  ]
};

export default day5Quiz;
