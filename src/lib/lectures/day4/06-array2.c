#include <stdio.h>

int main() {
    // 0 = 빈 자리, 1 = 예약된 자리
    int seats[3][4] = {
        {0, 0, 0, 0},
        {0, 0, 0, 0},
        {0, 0, 0, 0}
    };

    printf("예약 전 좌석표\n");

    for (int row = 0; row < 3; row++) {
        for (int col = 0; col < 4; col++) {
            printf("%d ", seats[row][col]);
        }
        printf("\n");
    }

    seats[1][2] = 1;            // 1행 2열 좌석 예약

    printf("\n예약 후 좌석표\n");

    for (int row = 0; row < 3; row++) {
        for (int col = 0; col < 4; col++) {
            printf("%d ", seats[row][col]);
        }
        printf("\n");
    }

    return 0;
}