const day5Quiz = {
  dayId: "day5",
  title: "Day 5 퀴즈",
  description: "포인터의 기초, 포인터 연산, 배열과 포인터, 이중 포인터 응용 문제",
  questions: [
    {
      id: "1",
      prompt: "정수형 변수 `target`의 주소를 포인터 변수 `p`에 저장하고, `p`를 역참조하여 `target`의 값을 500으로 변경한 후 출력하는 프로그램을 작성하세요.",
      starterCode: `#include <stdio.h>

int main() {
    int target = 10;
    // 1. 포인터 변수 p를 선언하고 target의 주소를 저장하세요.
    
    // 2. 포인터 p를 역참조하여 값을 500으로 변경하세요.
    
    printf("target의 값: %d\\n", target); // 500이 출력되어야 합니다.
    return 0;
}`,
      answerCode: `#include <stdio.h>

int main() {
    int target = 10;
    int *p = &target;
    
    *p = 500;
    
    printf("target의 값: %d\\n", target);
    return 0;
}`
    },
    {
      id: "2",
      prompt: "크기가 5인 정수형 배열 `arr`가 주어집니다. 포인터 변수 `ptr`을 사용하여 배열의 모든 요소에 10씩 더한 후, 배열의 요소들을 차례대로 출력하는 코드를 완성하세요. 대괄호 `[]` 대신 포인터 연산(`*(ptr + i)`)을 활용해 보세요.",
      starterCode: `#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int *ptr = arr;
    
    // 1. 포인터 연산을 이용하여 각 요소에 10을 더하세요.
    
    // 2. 변경된 배열을 출력하세요.
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    return 0;
}`,
      answerCode: `#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int *ptr = arr;
    
    for (int i = 0; i < 5; i++) {
        *(ptr + i) += 10;
    }
    
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    return 0;
}`
    },
    {
      id: "3",
      prompt: "문자열 포인터 `str`이 가리키는 문자열의 길이를 구하는 코드를 작성하세요. 널 문자(`\\0`)를 만날 때까지 포인터를 한 칸씩 이동(`str++` 또는 `*(str + i)`)시키며 길이를 세어야 합니다.",
      starterCode: `#include <stdio.h>

int main() {
    char *str = "Hello Pointer!";
    int length = 0;
    
    // 여기에 포인터를 이용하여 문자열의 길이를 구하는 코드를 작성하세요.
    
    printf("문자열 길이: %d\\n", length);
    
    return 0;
}`,
      answerCode: `#include <stdio.h>

int main() {
    char *str = "Hello Pointer!";
    int length = 0;
    
    for (int i = 0; *(str + i) != '\\0'; i++) {
        length++;
    }
    
    printf("문자열 길이: %d\\n", length);
    
    return 0;
}`
    },
    {
      id: "4",
      prompt: "이중 포인터를 활용하는 문제입니다. 변수 `num`의 주소를 저장하는 포인터 `p`, 그리고 `p`의 주소를 저장하는 이중 포인터 `pp`가 있습니다. 이중 포인터 `pp`를 역참조하여 `num`의 값을 999로 변경하는 코드를 작성하세요.",
      starterCode: `#include <stdio.h>

int main() {
    int num = 100;
    int *p = &num;
    int **pp = &p;
    
    // 이중 포인터 pp를 사용하여 num의 값을 999로 변경하세요.
    
    printf("변경된 num의 값: %d\\n", num); // 999가 출력되어야 합니다.
    
    return 0;
}`,
      answerCode: `#include <stdio.h>

int main() {
    int num = 100;
    int *p = &num;
    int **pp = &p;
    
    **pp = 999;
    
    printf("변경된 num의 값: %d\\n", num);
    
    return 0;
}`
    }
  ]
};

export default day5Quiz;
