#include <stdio.h>

int main2() {
	int num1, num2;

	// num1을 입력받자
	printf("num1의 값을 입력하세요>>");
	scanf("%d", &num1);			// 숫자는 &기호를 적어주고, 문자열은 &기호없이 그냥 적는다

	// num2를 입력받자
	// ToDo : 여러분들이 num2도 입력받아주세요
	printf("num2의 값을 입력하세요>>");
	scanf("%d", &num2);			// 숫자는 &기호를 적어주고, 문자열은 &기호없이 그냥 적는다

	// 산술 연산자 (수학 계산을 해주는 기호)
	printf("%d + %d = %d \n", num1, num2, num1 + num2);
	printf("%d - %d = %d \n", num1, num2, num1 - num2);
	printf("%d * %d = %d \n", num1, num2, num1 * num2);
	printf("%d / %d = %lf \n", num1, num2, num1 / (double)num2);
	printf("%d를 %d로 나눈 나머지는 = %d \n", num1, num2, num1 % num2);

	return 0;
}