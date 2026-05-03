#include <stdio.h>

int main() {
    int scores[5] = {80, 90, 70, 85, 100};

    printf("1번 학생 점수: %d\n", scores[0]);
    printf("2번 학생 점수: %d\n", scores[1]);
    printf("3번 학생 점수: %d\n", scores[2]);
    printf("4번 학생 점수: %d\n", scores[3]);
    printf("5번 학생 점수: %d\n", scores[4]);

    for (int i = 0; i < 5; i++) {
        printf("%d번 학생 점수: %d\n", i + 1, scores[i]);
    }

    int sum = 0;
    double average = 0;
    for (int i = 0; i < 5; i++) {
        sum += scores[i];
    }

    average = sum / 5.0;

    printf("반 총점: %d\n", sum);
    printf("반 평균: %.2f\n", average);

    return 0;
}