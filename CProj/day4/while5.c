#include <stdio.h>

int main7() {
	// while문으로 1~10까지의 합 구하기
	int sum = 0;
	int num = 1;

	while (num <= 10) {
		sum += num;
		num++;
	}
	printf("1~10까지의 합: %d", sum);

	return 0;
}