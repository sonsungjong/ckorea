#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    // printf : 화면에 출력
    // scanf : 키보드 입력받기

    int age = 0;
    int price = 0;
    scanf("%d", &age);
    
    price = (age >= 20) ? 1200 : 850;
	printf("당신의 버스 요금은 %d원 입니다!", price);

	return 0;
}