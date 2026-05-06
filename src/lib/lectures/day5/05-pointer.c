#include <stdio.h>

int main() {
    // 이차원 배열
    int scores[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };

    printf("직접 출력\n");
    printf("%d %d %d\n", scores[0][0], scores[0][1], scores[0][2]);
    printf("%d %d %d\n", scores[1][0], scores[1][1], scores[1][2]);

    /*
        이차원 배열 이름 scores는
        'int 3개짜리 배열'을 가리키는 포인터처럼 사용할 수 있다.

        int (*p)[3] = scores;
        
        p는 한 칸 이동할 때 int 하나가 아니라
        int 3개짜리 한 행씩 이동한다.
    */

    int (*p)[3] = scores;

    printf("\n포인터로 출력\n");
    printf("%d %d %d\n", p[0][0], p[0][1], p[0][2]);
    printf("%d %d %d\n", p[1][0], p[1][1], p[1][2]);

    // 값을 바꿔보기
    p[1][1] = 500;

    printf("\n변경 후 scores[1][1]: %d\n", scores[1][1]);

    return 0;
}
