#include <stdio.h>

int main5() {
	// page 85
	// #2
	int num1 = 27;

	printf("%d \n", num1 > 10);		// 1
	printf("%d \n", num1 != 5);

	printf("%d \n", num1 >= 27);
	printf("%d \n", num1 == 27);		// 1

	printf("%d \n", num1 < 30);			// 1
	printf("%d \n", num1 <= 27);

	// #3
	// 국어=86, 영어=75, 수학=88, 사회=60, 과학=96
	// 평균을 구하세요 (소수점까지)
	int kor = 86, eng = 75, math = 88, social = 60, science = 96;
	int sum = 0;
	double avg = 0.0;
	sum = kor + eng + math + social + science;
	avg = (double)sum / 5.0;
	printf("평균은 %lf \n", avg);

	// #4
	// 증감연산자 사용
	int num = 5;
	// 각 num에 증감연산자를 적절히 사용하여 6 6 8 결과를 만들어보세요 ++, --
	printf("num의 값: %d \n", ++num);				// 6
	printf("num의 값: %d \n", num++);				// 6
	printf("num의 값: %d \n", ++num);				// 8

	return 0;
}