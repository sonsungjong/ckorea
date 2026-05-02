#define _CRT_NO_SECURE_WARNINGS
#include <stdio.h>

int main() {
	// #1
	// 길이가 5인 int형 배열을 선언하고 초기화한다. 이때 각 요소는 원하는 값을 담는다.
	// [총합과 평균]
	int num[5] = { 10, 20, 30, 40, 50 };
	int sum = 0;
	double avg = 0.0;
	sum = num[0] + num[1] + num[2] + num[3] + num[4];
	avg = (double)sum / 5.0;

	printf("총합 : %d \n", sum);
	printf("평균 : %lf \n", avg);

	return 0;
}