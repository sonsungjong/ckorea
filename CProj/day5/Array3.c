#include <stdio.h>

int main3() {
	// 교재 152p
	int i;
	int odd[3];			// 초기화되지 않은 배열
	int even[5] = { 2,4,6,8,10 };

	// 배열의 개별 요소 초기화
	odd[0] = 1;
	odd[1] = 3;
	odd[2] = 5;

	// 개별 요소 접근 및 출력
	printf("%d %d %d\n", odd[0], odd[1], odd[2]);

	// for문을 통한 배열 요소 출력
	for (i = 0; i < 5; i++) 
	{
		printf("%d ", even[i]);
	}
	printf("\n");


	// 교재 156p
	char mind[30] = "I Love programing!";
	printf("%s \n", mind);

	mind[7] = '\0';		// 8번째 요소로 NULL 문자 대입
	printf("%s \n", mind);

	mind[1] = '\0';		// 2번째 요소로 NULL 문자 대입
	printf("%s \n", mind);

	// 교재 157p
	char str[50] = { 0, };			// 50칸 모두 NULL 문자로 초기화
	printf("문자열을 입력하세요: ");
	scanf("%s", str);		// 문자열은 & 기호가 필요없음 (원래는 필요)

	printf("입력된 문자열: %s \n", str);

	return 0;
}