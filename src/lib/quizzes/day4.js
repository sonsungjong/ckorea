const day4Quiz = {
  dayId: "day4",
  title: "Day 4 퀴즈",
  description: "배열 활용 및 프로그램 작성",
  questions: [
    {
      id: "1",
      prompt: "배열 `nums`의 모든 요소를 순서대로 출력하도록 반복문의 조건식을 채워보세요.",
      code: `#include <stdio.h>

int main() {
    int nums[5] = {10, 20, 30, 40, 50};
    
    for(int i = 0; ____; i++) {
        printf("%d ", nums[i]);
    }
    
    return 0;
}`,
      answer: `i < 5`
    },
    {
      id: "2",
      prompt: "문자열을 입력받을 때는 일반 변수와 달리 배열의 이름만 적습니다. scanf 빈칸을 알맞게 채워보세요.",
      code: `#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    char str[50];
    
    printf("이름을 입력하세요: ");
    scanf("%s", ____);
    
    printf("입력된 이름: %s\\n", str);
    
    return 0;
}`,
      answer: `str`
    },
    {
      id: "3",
      prompt: "배열 요소들의 총합을 구하는 코드를 작성해 보세요.\n\n[실행 결과]\n총합 : 150",
      starterCode: `#include <stdio.h>

int main() {
    int num[5] = { 10, 20, 30, 40, 50 };
    int sum = 0;

    // 여기에 배열 요소의 합을 구하는 코드를 작성하세요.

    printf("총합 : %d\\n", sum);

    return 0;
}`,
      answerCode: `#include <stdio.h>

int main() {
    int num[5] = { 10, 20, 30, 40, 50 };
    int sum = 0;

    for(int i = 0; i < 5; i++) {
        sum += num[i];
    }

    printf("총합 : %d\\n", sum);

    return 0;
}`
    },
    {
      id: "4",
      prompt: "2차원 배열 `arr`의 모든 요소를 출력하도록 중첩 반복문의 빈칸(행, 열의 크기)을 알맞게 채워보세요.",
      code: `#include <stdio.h>

int main() {
    int arr[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    for(int i = 0; i < ____; i++) {
        for(int j = 0; j < ____; j++) {
            printf("%d ", arr[i][j]);
        }
        printf("\\n");
    }

    return 0;
}`,
      answerCode: `#include <stdio.h>

int main() {
    int arr[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 3; j++) {
            printf("%d ", arr[i][j]);
        }
        printf("\\n");
    }

    return 0;
}`
    }
  ]
};

export default day4Quiz;
