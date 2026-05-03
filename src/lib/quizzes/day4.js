const day4Quiz = {
  dayId: "day4",
  title: "Day 4 퀴즈",
  description: "배열과 문자열 핵심 개념 복습",
  questions: [
    {
      id: "1",
      prompt: "배열 요소들의 총합과 평균을 구하는 코드를 작성해 보세요. 평균은 실수(double) 형태로 출력해야 합니다.\n\n[실행 결과]\n총합 : 150\n평균 : 30.000000",
      starterCode: `#include <stdio.h>

int main() {
    int num[5] = { 10, 20, 30, 40, 50 };
    int sum = 0;
    double avg = 0.0;

    // 여기에 배열 요소의 합과 평균을 구하는 코드를 작성하세요.

    printf("총합 : %d\\n", sum);
    printf("평균 : %lf\\n", avg);

    return 0;
}`,
      answerCode: `#include <stdio.h>

int main() {
    int num[5] = { 10, 20, 30, 40, 50 };
    int sum = 0;
    double avg = 0.0;

    for(int i = 0; i < 5; i++) {
        sum += num[i];
    }
    avg = (double)sum / 5.0;

    printf("총합 : %d\\n", sum);
    printf("평균 : %lf\\n", avg);

    return 0;
}`
    },
    {
      id: "2",
      prompt: "입력받은 영단어를 거꾸로 출력하세요.\n\n[실행 결과]\n단어를 입력하세요: hello\n역순 출력: olleh",
      starterCode: `#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    char word[50] = {'\\0'};
    int len = 0;

    printf("단어를 입력하세요: ");
    scanf("%s", word);

    // 1. while 문을 사용하여 문자열의 길이(len)를 직접 구해보세요. (널 문자를 만날 때까지)
    

    printf("역순 출력: ");

    // 2. 구한 길이(len)를 바탕으로 for 문을 사용하여 단어를 역순으로 출력하세요.
    

    printf("\\n");

    return 0;
}`,
      answerCode: `#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    char word[50] = {'\\0'};
    int len = 0;

    printf("단어를 입력하세요: ");
    scanf("%s", word);

    while (1) {
        if (word[len] == '\\0') {
            break;
        }
        len++;
    }

    printf("역순 출력: ");

    for (int i = len - 1; i >= 0; i--) {
        printf("%c", word[i]);
    }

    printf("\\n");

    return 0;
}`
    },
    {
      id: "3",
      prompt: "0은 빈 자리, 1은 앉은 자리를 나타내는 교실 좌석표가 2차원 배열로 주어졌습니다. 중첩 for문을 이용해 좌석표를 화면에 출력하는 프로그램을 완성해보세요.\n\n[실행 결과]\n교실 좌석표\n0 1 0 0 \n1 1 0 0 \n0 0 1 0 ",
      starterCode: `#include <stdio.h>

int main() {
    int seats[3][4] = {
        {0, 1, 0, 0},
        {1, 1, 0, 0},
        {0, 0, 1, 0}
    };

    printf("교실 좌석표\\n");

    // 여기에 중첩 for문을 작성하여 좌석표를 출력하세요.

    return 0;
}`,
      answerCode: `#include <stdio.h>

int main() {
    int seats[3][4] = {
        {0, 1, 0, 0},
        {1, 1, 0, 0},
        {0, 0, 1, 0}
    };

    printf("교실 좌석표\\n");

    for (int row = 0; row < 3; row++) {
        for (int col = 0; col < 4; col++) {
            printf("%d ", seats[row][col]);
        }
        printf("\\n");
    }

    return 0;
}`
    },
    {
      id: "4",
      prompt: "사용자로부터 비밀번호를 입력받습니다. 비밀번호가 4글자 미만이라면 '비밀번호는 4글자 이상이어야 합니다.'를 출력하고, 4글자 이상일 때만 \`strcmp\`를 사용하여 \"1234\"와 일치하는지 확인하는 프로그램을 작성해보세요.\n\n[실행 결과 1]\n비밀번호를 입력하세요: 12\n비밀번호는 4글자 이상이어야 합니다.\n\n[실행 결과 2]\n비밀번호를 입력하세요: 1234\n비밀번호가 일치합니다.",
      starterCode: `#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main() {
    char pw[50];

    printf("비밀번호를 입력하세요: ");
    scanf("%[^\\n]", pw); // 띄어쓰기를 포함하여 문자열을 입력받습니다.

    // 1. strlen을 사용하여 길이가 4 미만인지 확인하세요.
    // 2. 4 이상이라면 strcmp를 사용하여 "1234"와 비교하세요.
    

    return 0;
}`,
      answerCode: `#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main() {
    char pw[50];

    printf("비밀번호를 입력하세요: ");
    scanf("%[^\\n]", pw); // 띄어쓰기를 포함하여 문자열을 입력받습니다.

    if (strlen(pw) < 4) {
        printf("비밀번호는 4글자 이상이어야 합니다.\\n");
    } else {
        if (strcmp(pw, "1234") == 0) {
            printf("비밀번호가 일치합니다.\\n");
        } else {
            printf("비밀번호가 틀렸습니다.\\n");
        }
    }

    return 0;
}`
    }
  ]
};

export default day4Quiz;
