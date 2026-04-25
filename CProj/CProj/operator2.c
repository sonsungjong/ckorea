#include <stdio.h>

int main7() {
	// 연산자
	// 1. 대입연산자
	// =
	// 오른쪽에 있는 데이터값을 왼쪽에 있는 공간에 대입한다
	int num1;
	num1 = 3;

	int num2 = 4;		// 선언과 동시에 사용도 가능 (초기화)

	num1 = num2;		// 왼쪽은 공간, 오른쪽은 값

	num1 = num1;		// 왼쪽의 num1과 오른쪽의 num1이 다름 (왼쪽은 공간, 오른쪽은 값)
	// num1 = 4;
	return 0;
}