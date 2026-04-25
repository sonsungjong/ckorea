#include <stdio.h>

int main8()
{
	// 산술 연산자
	// +, -, *, /, %
	// + : 왼쪽값과 오른쪽값을 더하기
	// - : 왼쪽값에서 오른쪽값을 빼기
	// * : 왼쪽 곱하기 오른쪽
	// / : 왼쪽값을 오른쪽값으로 나누기
	// % : 왼쪽값을 오른쪽값으로 나눈 나머지를 구해줌

	// page74
	int num1 = 7, num2 = 3;
	printf("%d + %d = %d\n", num1, num2, num1+num2);
	printf("%d - %d = %d\n", num1, num2, num1-num2);
	printf("%d * %d = %d\n", num1, num2, num1*num2);
	printf("%d / %d = %d\n", num1, num2, num1/num2);
	printf("%d %% %d = %d\n", num1, num2, num1%num2);

	return 0;
}