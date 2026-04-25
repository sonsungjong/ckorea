#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    int year = 2026;
    int month = 0;
    int day = 0;

    printf("월을 입력하세요>> ");
    scanf("%d", &month);

    if (month == 1) {
        day = 31;
    } else if (month == 2) {
        // 2월은 윤년인지 판단을 한번 더 해야해요
        // 4로 나누어떨어지고 100으로 나누어떨어지지 않거나, 400으로 나누어떨어지면 윤년
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            day = 29;
        } else {
            day = 28;
        }
    } else if (month == 3) {
        day = 31;
    } else if (month == 4) {
        day = 30;
    } else if (month == 5) {
        day = 31;
    } else if (month == 6) {
        day = 30;
    } else if (month == 7) {
        day = 31;
    } else if (month == 8) {
        day = 31;
    } else if (month == 9) {
        day = 30;
    } else if (month == 10) {
        day = 31;
    } else if (month == 11) {
        day = 30;
    } else if (month == 12) {
        day = 31;
    } else {
        printf("잘못된 월입니다.\n");
        return 0;
    }

    printf("%d년 %d월은 %d일까지 있습니다.\n", year, month, day);

    return 0;
}
