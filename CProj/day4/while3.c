#include <stdio.h>

int main3() {
	// while문
	// while(){}
	// 무한반복 ==> 내가 원하는 횟수반복(플래그, 기준점)
	int i = 0;		// 플래그(기준점)

	while (i < 5) {
		printf("홍길동 \n");
		i++;		// 플래그를 통해서 반복횟수를 조정
	}

	// 교재 127p
	int num = 0;		// 플래그

	while (num < 3) {
		printf("num is %d now \n", num);
		num++;
	}

	return 0;
}