const day6Quiz = {
  dayId: "day6",
  title: "Day 6 퀴즈",
  description: "함수의 다양한 형태, 변수의 생명 주기, 매크로, 참조에 의한 호출 및 재귀 함수 이해하기",
  questions: [
    {
      id: "1",
      prompt: "두 정수를 더한 결과를 반환(return)하는 코드를 작성하세요.",
      code: `#include <stdio.h>

int add(int a, int b) {
    // a와 b를 더한 값을 반환하세요.
    ____;
}

int main() {
    printf("%d\\n", add(3, 5)); // 8 출력
    return 0;
}`,
      answer: `return a + b`
    },
    {
      id: "2",
      prompt: "함수가 호출될 때마다 값이 초기화되지 않고 계속 유지되도록 '정적 변수' 키워드를 빈칸에 채우세요.",
      code: `#include <stdio.h>

void add_static() {
    // 함수가 끝나도 파괴되지 않는 정적 변수 count를 선언합니다.
    ____ int count = 0;
    count++;
    printf("%d ", count);
}

int main() {
    add_static(); // 1 출력
    add_static(); // 2 출력
    return 0;
}`,
      answer: `static`
    },
    {
      id: "3",
      prompt: "컴파일 전에 MAX_HP 글자를 1000으로 바꾸도록 매크로 상수를 정의하는 전처리기 지시어를 빈칸에 채우세요.",
      code: `#include <stdio.h>

// 게임의 최대 체력을 1000으로 정의합니다.
____ MAX_HP 1000

int main() {
    printf("최대 체력: %d\\n", MAX_HP);
    return 0;
}`,
      answer: `#define`
    },
    {
      id: "4",
      prompt: "함수에서 배열을 매개변수로 받을 때 사용하는 기호를 빈칸에 채우세요.",
      code: `#include <stdio.h>

// 배열을 전달받는 함수입니다. (크기 정보도 함께 받습니다)
void printArray(int arr____, int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
}

int main() {
    int nums[3] = {1, 2, 3};
    printArray(nums, 3);
    return 0;
}`,
      answer: `[]`
    },
    {
      id: "5",
      prompt: "포인터를 사용해 원본 변수의 값을 변경하려고 합니다. 포인터가 가리키는 원본 위치에 접근하는 기호를 채우세요.",
      code: `#include <stdio.h>

void addOneReference(int *numPtr) {
    // 포인터가 가리키는 원본 값을 1 증가시킵니다.
    ____ = *numPtr + 1;
}

int main() {
    int a = 10;
    addOneReference(&a); // a의 주소를 넘겨줌
    printf("%d\\n", a);   // 11 출력 (원본이 변경됨)
    return 0;
}`,
      answer: `*numPtr`
    },
    {
      id: "6",
      prompt: "두 변수의 값을 바꾸는 Swap 함수입니다. a의 위치에 b의 값을 덮어쓰도록 빈칸을 채우세요.",
      code: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = ____; // a의 위치에 b의 값을 덮어씀
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    swap(&x, &y);
    printf("x=%d, y=%d\\n", x, y); // x=20, y=10
    return 0;
}`,
      answer: `*b`
    },
    {
      id: "7",
      prompt: "재귀 함수가 무한 루프에 빠지지 않도록 멈추는 '탈출 조건'을 작성하세요. count가 0과 같을 때 멈춰야 합니다.",
      code: `#include <stdio.h>

void countDown(int count) {
    // 1. 탈출 조건
    if (____) {
        printf("발사!\\n");
        return; 
    }
    printf("%d...\\n", count);
    countDown(count - 1);
}

int main() {
    countDown(3);
    return 0;
}`,
      answer: `count == 0`
    },
    {
      id: "8",
      prompt: "재귀 함수 내부에서 다음 단계를 진행하기 위해, 숫자를 1 줄여서 자기 자신(countDown)을 다시 호출하는 코드를 작성하세요.",
      code: `#include <stdio.h>

void countDown(int count) {
    if (count == 0) {
        printf("발사!\\n");
        return; 
    }
    printf("%d...\\n", count);
    
    // 2. 숫자를 1 줄여서 자기 자신을 부르기
    ____; 
}

int main() {
    countDown(3);
    return 0;
}`,
      answer: `countDown(count - 1)`
    }
  ]
};

export default day6Quiz;
