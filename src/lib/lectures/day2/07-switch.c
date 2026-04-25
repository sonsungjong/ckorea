#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    int year = 2026;
    int month = 0;
    int day = 0;

    printf("월을 입력하세요>> ");
    scanf("%d", &month);

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            printf("%d년 %d월은 %d일까지 있습니다.\n", year, month, day);
            break;      // break; 중요
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            printf("%d년 %d월은 %d일까지 있습니다.\n", year, month, day);
            break;
        case 2:
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                day = 29;
            } else {
                day = 28;
            }
            printf("%d년 %d월은 %d일까지 있습니다.\n", year, month, day);
            break;
        default:
            printf("잘못된 월입니다.\n");
            return 0;
    }

    return 0;
}
