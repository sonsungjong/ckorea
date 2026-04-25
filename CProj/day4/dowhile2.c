#include <stdio.h>

int main6() {
	// do~while문
	// 교재 133p
	int number = 0;
	int sum = 0;

	// 1~10까지의 합
	do {
		number++;
		sum += number;
	} while (number < 10);
	printf("1~10까지의 합: %d", sum);

	return 0;
}