#include <stdio.h>

int main1() {
	// 이차원 배열 : 배열 안에 배열
	// 삼차원 배열 : 배열 안에 배열 안에 배열
	int arr[3][2] = { {1,2},{3,4},{5,6} };
	int arr2[3] = { 1,3,5 };

	printf("%d \n", arr2[1]);		// 3
	printf("%d \n", arr[0][0]);		// 1

	char str1[] = "abcd";		// 5칸짜리 char : 초기화해준만큼 알아서 배열 크기 잡음
	char* str1_1 = "abcd";		// 포인터로 초기화를 통해 5칸짜리 배열을 생성
	char str2[5] = "abcd";
	char str3[5][5] = {"커피","라면","우유","물","빵"};		// 한글은 char 2칸
	// 5, 5, 5, 3, 3

	// 이차원 배열 전부출력 == 이중반복문
	for (int i = 0; i < 3;i++) {		// 바깥 for문은 바깥 배열 쪼개기
		for (int j = 0; j < 2;j++) {		// 안쪽 for문은 안쪽 배열 쪼개기
			printf("%d ", arr[i][j]);
		}
		printf("\n");
	}

	// str3 전부출력
	for (int i = 0; i < 5; i++) {
		if (i == 4) {
			printf("%s\n", str3[i]);
			break;
		}
		printf("%s, ", str3[i]);
	}

	return 0;
}