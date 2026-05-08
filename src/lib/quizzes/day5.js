const day5Quiz = {
  dayId: "day5",
  title: "Day 5 퀴즈",
  description: "포인터의 기초부터 NULL 포인터까지 핵심 개념 확인",
  questions: [
    {
      id: "1",
      prompt: "포인터 `ptr`이 정수형 변수 `num`의 메모리 주소를 저장하도록 빈칸을 채우세요.",
      code: `#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = ____;

    printf("%d\\n", *ptr); // 10 출력

    return 0;
}`,
      answer: `&num`
    },
    {
      id: "2",
      prompt: "포인터 `p`를 역참조하여 `a`의 값을 50으로 변경하도록 빈칸을 채우세요.",
      code: `#include <stdio.h>

int main() {
    int a = 10;
    int *p = &a;
    
    ____ = 50;

    printf("%d\\n", a); // 50 출력

    return 0;
}`,
      answer: `*p`
    },
    {
      id: "3",
      prompt: "배열의 이름을 포인터처럼 사용하여 배열의 두 번째 요소를 출력하도록 빈칸을 채우세요. (단, 대괄호 [] 없이 포인터 연산 사용)",
      code: `#include <stdio.h>

int main() {
    int nums[3] = {10, 20, 30};
    
    // 배열의 시작 주소에서 1칸 이동하여 역참조합니다.
    printf("%d\\n", *(____)); // 20 출력

    return 0;
}`,
      answer: `nums + 1`
    },
    {
      id: "4",
      prompt: "길이가 4인 정수 배열 전체를 가리킬 수 있는 배열 포인터 `pArr`를 선언하도록 빈칸을 채우세요.",
      code: `#include <stdio.h>

int main() {
    int arr[4] = {0, 1, 2, 3};
    int (____)[4] = &arr;
    
    printf("%d\\n", (*pArr)[2]); // 2 출력

    return 0;
}`,
      answer: `*pArr`
    },
    {
      id: "5",
      prompt: "이차원 배열 `scores`를 가리키는 배열 포인터 `p`를 선언하도록 빈칸을 채우세요. (각 행은 3개의 정수를 가짐)",
      code: `#include <stdio.h>

int main() {
    int scores[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };
    
    int (____)[3] = scores;

    printf("%d\\n", p[1][1]); // 50 출력

    return 0;
}`,
      answer: `*p`
    },
    {
      id: "6",
      prompt: "이중 포인터 `p2`가 포인터 `p1`의 주소를 저장하도록 빈칸을 채우세요.",
      code: `#include <stdio.h>

int main() {
    int num = 100;
    int *p1 = &num;
    int **p2 = ____;
    
    printf("%d\\n", **p2); // 100 출력

    return 0;
}`,
      answer: `&p1`
    },
    {
      id: "7",
      prompt: "읽기 전용인 '문자열 포인터'가 \"World\"를 가리키도록 빈칸을 채우세요.",
      code: `#include <stdio.h>

int main() {
    char ____ = "World";
    
    printf("%s\\n", str2); // World 출력

    return 0;
}`,
      answer: `*str2`
    },
    {
      id: "8",
      prompt: "문자열 3개를 저장할 수 있는 '포인터 배열'의 크기를 선언하도록 빈칸을 채우세요.",
      code: `#include <stdio.h>

int main() {
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
      id: "9",
      prompt: "double형 포인터 `pd`에 1을 더했을 때, 메모리 주소는 몇 바이트 증가하는지 빈칸을 채우세요.",
      code: `#include <stdio.h>

int main() {
    double d = 3.14;
    double *pd = &d;
    
    // pd에 1을 더하면 주소는 ____ 바이트 증가합니다. (힌트: double의 크기)
    printf("%p\\n", (void*)(pd + 1));

    return 0;
}`,
      answer: `8`
    },
    {
      id: "10",
      prompt: "포인터 역참조를 통해 변수 `a`의 위치에 변수 `b`의 값을 저장하도록 빈칸을 채우세요. (Swap 알고리즘의 일부)",
      code: `#include <stdio.h>

int main() {
    int a = 10, b = 20;
    int *pa = &a, *pb = &b;
    
    int temp = *pa;
    ____ = *pb; // a의 위치에 b의 값을 덮어씀
    *pb = temp;
    
    printf("a = %d\\n", a); // 20 출력

    return 0;
}`,
      answer: `*pa`
    },
    {
      id: "11",
      prompt: "포인터 `ptr`이 아무것도 가리키지 않는 빈 포인터가 되도록 빈칸을 채우세요.",
      code: `#include <stdio.h>

int main() {
    int *ptr = ____;
    
    if (ptr == NULL) {
        printf("ptr은 아무것도 가리키지 않습니다.\\n");
    }

    return 0;
}`,
      answer: `NULL`
    }
  ]
};

export default day5Quiz;
