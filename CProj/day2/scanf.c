// operator1.c
#include <stdio.h>

int main1() {
	char str[100];
	int num;
	double dnum;
	char chr;

	printf("정수를 입력하세요>>");			// 출력 printf
	scanf("%d", &num);						// 입력 scanf
	printf("입력한 값은 %d 입니다. \n", num);
	
	printf("문자열을 입력하세요>>");
	scanf("%s", str);				// 문자열은 &기호 없이
	printf("입력한 값은 %s 입니다. \n", str);

	printf("실수를 입력하세요>>");						// 출력 printf
	scanf("%lf", &dnum);								// 입력 scanf
	printf("입력한 값은 %lf 입니다. \n", dnum);
	
	rewind(stdin);		// scanf 문자입력 버그때문에 버퍼비우기
	printf("문자를 입력하세요>>");						// 출력 printf
	scanf("%c", &chr);									// 입력 scanf
	printf("입력한 값은 %c 입니다. \n", chr);	// char는 한글이 불가능 (한글은 공간 2개 차지함)

	return 0;
}
