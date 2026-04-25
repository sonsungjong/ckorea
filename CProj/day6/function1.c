// function1.c
#include <stdio.h>

// 함수 add
int add(int n1, int n2) {
	return n1 + n2;
}

int AbsAdd(int num1, int num2)
{
	if (num1 < 0) {
		num1 = num1 * -1;
	}
	if (num2 < 0) {
		num2 = num2 * -1;
	}
	int result = num1 + num2;
	return result;
}

int main4() {
	// 함수 : 연산 기호에 한계가 있으니 사용자가 직접 만드는 연산자, 코드를 저장하는 기술
	// (){}
	
	// +, -, *, /, % : 각각의 기능들이 있음, 수가 제한
	int num1 = -3 + 5;			// 내가 원하는건 절댓값을 해준다음 더하는 것을 원한다
	printf("%d \n", num1);

	// 내가 직접 더하기를 만들어보자!
	int num2 = add(-3, 5);
	printf("%d \n", num2);

	// 절댓값으로 만들어 더해주는 기능을 만들어보자!
	int num3 = AbsAdd(-3, 5);
	printf("%d \n", num3);			// 2

	AbsAdd(1, 2);
	AbsAdd(3, -1);
	AbsAdd(-1, -2);


	return 0;
}