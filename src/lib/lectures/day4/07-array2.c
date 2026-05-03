#include <stdio.h>

int main() {
    // 3명의 학생, 4개의 과목 점수
    int scores[3][4] = {
        {80, 90, 70, 85},
        {60, 75, 80, 70},
        {95, 90, 100, 85}
    };

    for (int student = 0; student < 3; student++) {
        int sum = 0;

        for (int subject = 0; subject < 4; subject++) {
            sum += scores[student][subject];
        }

        double average = sum / 4.0;

        printf("%d번 학생 총점: %d, 평균: %.2f\n", student + 1, sum, average);
    }

    return 0;
}