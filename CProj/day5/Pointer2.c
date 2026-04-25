#include <stdio.h>

int main6() {
	// &(앰퍼샌드) : 해당 공간의 주소를 알려줘
	// *(애스터리스크) : 해당 주소의 공간으로 이동해줘
	// 자료형 앞의 * : 포인터변수 만들어줘

	// 교재 163p
	//char cnum = 5;
	//int inum = 999;
	//double dnum = 3.14;

	//// 포인터 변수 초기화 (선언/주소대입)
	//char* cptr = &cnum;
	//int* iptr = &inum;
	//double* dptr = &dnum;

	//printf("%p \n", cptr);
	//printf("%p \n", iptr);
	//printf("%p \n", dptr);

	//// 포인터 변수 역참조 (원본 출력)
	//printf("%c \n", *cptr);
	//printf("%d \n", *iptr);
	//printf("%lf \n", *dptr);

	// 교재 166p
	int num = 10;
	int* pnum;			// 포인터 변수 선언
	pnum = &num;		// 포인터 변수에 주소값 대입
	
	*pnum = 20;			// pnum이 보관하고 있는 주소에 가서 20을 넣어라
	printf("%d \n", num);		// 20

	// 역참조하여 대입/누적연산
	(*pnum)++;
	(*pnum)++;
	printf("%d \n", num);
	printf("%d \n", *pnum);

	return 0;
}


