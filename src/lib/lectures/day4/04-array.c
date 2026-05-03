#include <stdio.h>

int main() {
    // 0 = 결석, 1 = 출석
    int attendance[5] = {0, 0, 0, 0, 0};

    attendance[0] = 1;
    attendance[2] = 1;
    attendance[4] = 1;

    for (int i = 0; i < 5; i++) {
        printf("%d번 학생 출석 상태: %d\n", i + 1, attendance[i]);
    }

    return 0;
}