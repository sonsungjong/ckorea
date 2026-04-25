#include <stdio.h>

/* 
    대입연산자 : =
    산술연산자 : +, -, *, /, %
    비교연산자 : <, >, <=, >=, ==, !=
    복합대입연산자 : +=, -=, *=, /=, %=
    관계연산자 : &&, ||, !
    비트연산자 : &, |, ^, ~
    쉬프트연산자 : <<, >>
    삼항연산자 : ?
*/

int main() {
    // 대입연산자
    int a = 10, b = 3;

    // 산술연산자
    printf("10 + 3 = %d\n", 10 + 3);
    printf("10 - 3 = %d\n", 10 - 3);
    printf("10 * 3 = %d\n", 10 * 3);
    printf("10 / 3 = %d (몫)\n", 10 / 3);
    printf("10 %% 3 = %d (나머지)\n", 10 % 3);

	printf("a + b = %d\n", a + b);
	printf("a - b = %d\n", a - b);
	printf("a * b = %d\n", a * b);
	printf("a / b = %d (몫)\n", a / b);
	printf("a %% b = %d (나머지)\n", a % b);

	// 비교연산자 : 참과 거짓을 판단해서 맞으면 1, 틀리면 0 으로 알려줘요
    printf("a == b : %d\n", a == b);
	printf("a != b : %d\n", a != b);
	printf("a > b : %d\n", a > b);
	printf("a < b : %d\n", a < b);
	printf("a >= b : %d\n", a >= b);
	printf("a <= b : %d\n", a <= b);
    
    return 0;
}