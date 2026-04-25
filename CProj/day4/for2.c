#include <stdio.h>

int main9() {
	// 교재 135p
	for (int i = 0; i < 3; i++) {
		printf("i is %d now \n", i);
	}

	// 교재 136p
	int num;		// for문 바깥에 선언 (for문 종료되어도 값 유지)

	// for안에서 변수를 선언하면 for문 종료와 동시에 변수(저장공간)가 없어짐
	for (num = 0; num != -1;) {
		printf("숫자를 입력하세요(-1 입력시 종료):");
		scanf("%d", &num);
	}

	/*
	for(초기값;조건식;증감량){
		조건이 맞으면 반복할 코드;
	}
	*/

	return 0;
}