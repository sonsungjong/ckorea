#define _CRT_NO_SECURE_WARNINGS
#include <stdio.h>

int main4() {
	// 교재 158p
	// #1
	// 길이가 5인 int형 배열을 선언하고 초기화한다. 이때 각 요소는 원하는 값을 담는다.
	// 해당 배열에 대해 다음 결과를 출력하기

	/*
	1. 총합
	2. 평균
	*/
	int num[5] = { 10,20,30,40,50 };
	int sum = 0;
	double avg = 0.0;
	sum = num[0] + num[1] + num[2] + num[3] + num[4];
	avg = (double)sum / 5.0;

	printf("총합 : %d \n", sum);
	printf("평균 : %lf \n", avg);

	// #2 영어단어를 하나 입력받아서 역순으로 출력하는 프로그램
	/*
	입력값 : hello
	출력값 : olleh
	*/

	// 반복문을 역으로 돌릴 수 있나
	char str[64] = { '\0', };		// 64칸 선언
	char reverse[64] = { 0, };

	scanf("%s", str);		// str[0] = 'h', str[1] = 'e', str[2] = 'l', ...
	int j = 0;
	for (int i = 63; i >= 0; i--)		// 64칸을 선언하면 63개까지 있다
	{
		if (str[i] == '\0') {
			continue;
		}
		reverse[j] = str[i];
		j++;
	}

	printf("%s", reverse);

	// NULL문자가 아닌 시점부터
	// reverse[0] = str[4];
	// reverse[1] = str[3];
	// reverse[2] = str[2];
	// reverse[3] = str[1];
	// reverse[4] = str[0];
	

	return 0;
}