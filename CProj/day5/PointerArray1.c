// PointerArray1.c
#include <stdio.h>

int main() {
	// 교재 174p
	int arr[5] = { 1,2,3,4,5 };

	printf("배열의 이름 : %p \n", arr);				// 배열의 주소는
	printf("첫번째 요소 : %p \n", &arr[0]);			// 배열의 0번방 주소와 같다
	printf("두번째 요소 : %p \n", &arr[1]);
	printf("세번째 요소 : %p \n", &arr[2]);

	printf("첫번째 요소 : %p \n", arr+0);			// 주소는 +1을 할때마다 옆칸으로 이동한다
	printf("두번째 요소 : %p \n", arr+1);			// +1의 규모는 자료형과 동일 (int 4칸, char1칸)
	printf("세번째 요소 : %p \n", arr+2);

	printf("첫번째 값 : %d \n", *(arr+0));		// 배열이 0번부터 시작하는 이유
	printf("첫번째 값 : %d \n", arr[0]);		// 줄인말

	printf("두번째 요소 : %p \n", (&*arr)+1);		// &참조자와 *역참조자는 서로 상쇄된다
	printf("네번째 값 : %d \n", *(arr+3));		// 4
	return 0;
}