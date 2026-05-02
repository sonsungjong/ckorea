const day3Quiz = {
  dayId: "day3",
  title: "Day 3 퀴즈",
  description: "반복문 빈칸 완성 및 프로그램 작성",
  questions: [
    {
      id: "1",
      prompt: "while 문을 사용하여 '카운트 : 0'부터 '카운트 : 2'까지 출력하는 프로그램을 작성해 보세요.\n\n[실행 결과]\n카운트 : 0\n카운트 : 1\n카운트 : 2",
      starterCode: `#include <stdio.h>

int main() {
    int 카운트 = 0;

    // 여기에 while 문을 작성하세요.

    return 0;
}`,
      answerCode: `#include <stdio.h>

int main() {
    int 카운트 = 0;

    while(카운트 < 3) {
        printf("카운트 : %d\\n", 카운트);
        카운트++;
    }

    return 0;
}`
    },
    {
      id: "2",
      prompt: "for 문을 사용하여 1부터 5까지의 숫자를 한 줄씩 출력하는 프로그램을 작성해 보세요. (단순한 for 문 구조를 눈에 익혀봅시다!)\n\n[실행 결과]\n1\n2\n3\n4\n5",
      starterCode: `#include <stdio.h>

int main() {
    // 여기에 for 문을 작성하세요.

    return 0;
}`,
      answerCode: `#include <stdio.h>

int main() {
    for(int i = 1; i <= 5; i++) {
        printf("%d\\n", i);
    }

    return 0;
}`
    },
    {
      id: "3",
      prompt: "for 문 안에서 특정 조건일 때 반복을 건너뛰는 키워드와, 반복문을 즉시 종료하는 키워드를 각각 빈칸에 알맞게 채워보세요.",
      code: `#include <stdio.h>

int main() {
    for(int i = 1; i <= 10; i++) {
        if(i == 3) {
            ____; // i가 3일 때는 출력하지 않고 다음 반복으로 건너뜀
        }
        if(i == 6) {
            ____; // i가 6이 되면 반복문을 즉시 종료함
        }
        printf("%d\\n", i);
    }
    return 0;
}`,
      answerCode: `#include <stdio.h>

int main() {
    for(int i = 1; i <= 10; i++) {
        if(i == 3) {
            continue; // i가 3일 때는 출력하지 않고 다음 반복으로 건너뜀
        }
        if(i == 6) {
            break; // i가 6이 되면 반복문을 즉시 종료함
        }
        printf("%d\\n", i);
    }
    return 0;
}`
    },
    {
      id: "4",
      prompt: "사용자가 1 이상의 정수 n을 입력하면 1부터 n까지의 합을 구하여 출력하는 프로그램을 while 문을 사용해서 작성해 보세요.\n\n[실행 결과]\n정수를 입력하세요 : 5\n1부터 5까지의 합은 15 입니다.",
      starterCode: `#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    // 여기에 코드를 작성하세요.

    return 0;
}`,
      answerCode: `#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    int n;
    int sum = 0;
    int i = 1;

    printf("정수를 입력하세요 : ");
    scanf("%d", &n);

    while(i <= n) {
        sum += i;
        i++;
    }

    printf("1부터 %d까지의 합은 %d 입니다.\\n", n, sum);

    return 0;
}`
    },
    {
      id: "5",
      prompt: "1부터 100까지의 정수 중 6의 배수만을 출력하는 프로그램을 for문을 사용해서 작성해 보세요.\n\n[실행 결과]\n6 12 18 24 30 36 42 48 54 60 66 72 78 84 90 96",
      starterCode: `#include <stdio.h>

int main() {
    // 여기에 코드를 작성하세요.

    return 0;
}`,
      answerCode: `#include <stdio.h>

int main() {
    for(int i = 1; i <= 100; i++) {
        if(i % 6 == 0) {
            printf("%d ", i);
        }
    }
    printf("\\n");

    return 0;
}`
    }
  ]
};
export default day3Quiz;
