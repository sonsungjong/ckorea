#include <stdio.h>

int main11() {
	// 제어문(control flow) : 조건문, 반복문, 분기문 ...
	// 조건문 : if, switch
	// 반복문 : while, for
	// 기타제어문 : break, continue, goto

	// break : 반복문 끝내기, switch문 끝내기
	// continue : 반복문 맨위로 돌아가기

	// 교재 140p break
	int num;

	while (1)
	{
		printf("-1 입력시 종료:");
		scanf("%d", &num);
		if (num == -1) {
			break;			// 얘를 만나면 반복문 즉시 종료
			printf("이 코드는 Dead Code 입니다.\n");
		}
	}

	// 교재 141p continue
	// 반복문 1회성 취소 (밑에 코드는 더이상 실행하지 않고 위로 올라감. skip)
	for (int n = 1; n <= 5; n++) {
		if (n == 3) {
			continue;		// 얘를 만나면 ()로 올라감
		}
		printf("%d ", n);
	}

	return 0;
}