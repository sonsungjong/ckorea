#include <stdio.h>

// 교재 144p
int main() {
	// #1
	// 100 ~ 200 숫자 중 3과 7의 공배수를 출력하는 프로그램
	
	for (int i = 100; i < 201; i++) {
		if (i % 3 == 0 && i % 7 == 0) {
			printf("%d ", i);
		}
	}
	printf("\n");

	// #2
	// 2~9 숫자 중 두개를 입력받아 구구단을 출력하는 프로그램
	// 만약 4와 8을 입력하면 4단~8단을 출력
	// 단, 8과 4를 입력해도 4단~8단을 출력
	int n1, n2;
	int start, end;
	printf("첫번째 숫자>>");
	scanf("%d", &start);
	printf("두번째 숫자>>");
	scanf("%d", &end);

	// start가 end보다 더 크면 서로 바꿔버리기(swap)
	int temp;
	if (start > end) {
		temp = start;
		start = end;
		end = temp;
	}

	for (n1 = 1; n1 < 10; n1++) {
		for (n2 = start; n2 <= end; n2++) {
			printf("%d x %d = %d\t", n2, n1, n1 * n2);
		}
		printf("\n");
	}

	return 0;
}