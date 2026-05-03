#include <stdio.h>

int main() {
    // 0 = 빈 자리, 1 = 앉은 자리
    int seats[3][4] = {
        {0, 1, 0, 0},
        {1, 1, 0, 0},
        {0, 0, 1, 0}
    };

    printf("교실 좌석표\n");
    printf("0: 빈 자리, 1: 앉은 자리\n\n");

    for (int row = 0; row < 3; row++) {
        for (int col = 0; col < 4; col++) {
            printf("%d ", seats[row][col]);
        }
        printf("\n");
    }

    return 0;
}