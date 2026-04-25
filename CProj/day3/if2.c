#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main2() {
	// if문
	// if(){} else{}
	int age;
	printf("나이를 입력하세요>>");
	scanf("%d", &age);
	if (age < 20) {
		// ()의 조건이 맞을때 실행할 코드;
		printf("미성년자");
	}
	else {
		// ()의 조건이 틀릴때 실행할 코드;
		printf("성인");
	}
	printf("\n");		// if밖에 있으니까 무조건 실행될 코드

	return 0;
}