// operator1.c
#include <stdio.h>

int main6()
{
	// 프로그래밍 언어에는 연산 기호가 제공됨 (연산자)
	// +, -, *, /, %, ...
	3 + 4;		// 연산 기호는 각 기능을 제공해주고 사용법이 정해져있음 (더하기는 양옆에 숫자를 적어줘야함)
	
	int num1, num2;
	num1 = 1, num2 = 2;

	num1 + num2;			// 변수를 통해서 계산을 하면 변수 안에 들어있는 값이 사용되서 계산됨
	printf("합은 : %d", num1 + num2);

	int num3 = 0;
	num3 = num1 - num2;			// 연산 결과를 변수에 저장할 수 있음
	printf("\n 결과는 : %d \n", num3);

	return 0;
}