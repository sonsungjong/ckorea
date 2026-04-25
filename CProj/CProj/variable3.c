#include <stdio.h>

int main4()
{
	/*
	작성자 : OOO
	작성날짜 : 2023-02-18
	기능 : printf 로 문자열 출력
	*/
	// 이름, 년도, 월, 일, f  ==> 변수
	// 문자열[]변수 : 이름			%s
	// 정수변수 : 년도, 월, 일			%d
	// 문자변수 : f					%c

	char name[] = "홍길동";			// %s
	int year = 2023;			// %d
	int month = 2;			// %d
	int day = 18;				// %d
	char word = 'f';			// %c

	printf("작성자 : %s\n", name);
	printf("작성날짜 : %d-%d-%d\n", year, month, day);
	printf("기능 : print%c 로 문자열 출력", word);

	return 0;
}