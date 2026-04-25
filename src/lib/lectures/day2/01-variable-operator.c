#include <stdio.h>

int main() {
	// 출력 printf
	printf("hello C 언어!\n");

	// 한줄 주석 (이 줄은 코드가 아니라 메모로 취급, ctrl+shift+/)
	/*
        여러줄 주석

		Ctrl + Z : 뒤로가기
		Ctrl + Y : 뒤로가기 취소
	*/
	
    // 변수 : 저장공간
    // 중요한 데이터를 컴퓨터 메모리(RAM) 에 저장하고 재사용하거나 일괄변경하기 위해서 사용해요
	// 자료형 변수명 = 초기값;
	char word;				// 문자형 변수 선언
	int number;				// 정수형 변수
	double dNumber;			// 실수형 변수

	// 변수에 값을 대입 (대입연산자)
	// 변수명 = 데이터값;
	word = 'q';
	number = -3;
	dNumber = 3.141592;
	
	// 변수 사용
	int 숫자 = number;		// number에 들어있는 값을 사용 (자료형없이 적어주기)
	printf("문자형: %c \n", word);
	printf("정수형: %d \n", 숫자);
	printf("실수형: %lf \n", dNumber);

	// + : 더하기
	// - : 빼기
	// * : 곱하기
	// / : 나누기
	// % : 나머지구하기

	// 정수형 또는 실수형 변수 2개를 만들고
	// +, -, *, /, % 계산하고 printf로 출력하기
	int num1 = 2, num2 = 3;

	printf("더하기 %d\n", num1 + num2);
	printf("빼기 %d\n", num1 - num2);
	printf("곱하기 %d\n", num1 * num2);
	printf("나누기 %f\n", num1 / (double)num2);
	printf("나머지구하기 %d\n", num1 % num2);

	return 0;
}