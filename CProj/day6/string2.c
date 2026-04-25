#include <stdio.h>
#include <string.h>

int main3() {
	// 교재209p

	// #1
	// 두 개의 문자열을 입력받아 같은지 같지 않은지 알려주는 프로그램 scanf("%[^\n]s", str)
	/*
	리오넬 메시
	리오넬 메시
	==> 같습니다

	리오넬 메시
	호날두
	==> 같지 않습니다
	*/
	char str1[50] = { 0, };
	char str2[50] = { 0, };
	scanf("%[^\n]s", str1);
	rewind(stdin);			// 버퍼 비우기
	scanf("%[^\n]s", str2);
	if (strcmp(str1, str2) == 0) {
		printf("같습니다.");
	}
	else {
		printf("같지 않습니다.");
	}

	// #2
	// 위 입력받은 문자열 중 길이가 긴 문자열부터 출력하게 해주세요
	/*
	리오넬 메시
	호날두
	==> 리오넬 메시 호날두
	*/
	int len1 = strlen(str1);
	int len2 = strlen(str2);

	if (len1 > len2) {
		printf("%s %s", str1, str2);
	}
	else {
		printf("%s %s", str2, str1);
	}

	return 0;
}