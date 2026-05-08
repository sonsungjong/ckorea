const day5Quiz = {
  dayId: "day5",
  title: "Day 5 퀴즈",
  description: "포인터의 기초, 포인터 연산, 이중 포인터",
  questions: [
    {
      id: "1",
      prompt: "포인터 `ptr`이 변수 `num`의 주소를 저장하도록 빈칸을 채우세요.",
      code: `#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = ____;

    printf("%d\\n", *ptr);

    return 0;
}`,
      answer: `&num`
    },
    {
      id: "2",
      prompt: "배열의 이름을 포인터처럼 사용하여 배열의 두 번째 요소를 출력하도록 빈칸을 채우세요. (단, 대괄호 [] 없이 포인터 연산 사용)",
      code: `#include <stdio.h>

int main() {
    int arr[3] = {10, 20, 30};
    
    printf("%d\\n", *(____));

    return 0;
}`,
      answer: `arr + 1`
    },
    {
      id: "3",
      prompt: "문자열 포인터 `str`을 사용하여 문자열의 세 번째 문자인 'l'을 출력하도록 빈칸을 채우세요.",
      code: `#include <stdio.h>

int main() {
    char *str = "Hello";
    
    printf("%c\\n", str[____]);

    return 0;
}`,
      answer: `2`
    },
    {
      id: "4",
      prompt: "이중 포인터 `pp`를 역참조하여 변수 `value`의 값을 출력하도록 빈칸을 채우세요.",
      code: `#include <stdio.h>

int main() {
    int value = 42;
    int *p = &value;
    int **pp = &p;
    
    printf("%d\\n", ____);

    return 0;
}`,
      answer: `**pp`
    }
  ]
};

export default day5Quiz;
