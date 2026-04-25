#include <stdio.h>
#include <string.h>

// 원산지, 가격, 바리스타이름 을 멤버변수를 갖는 coffee 구조체를 정의해보세요
struct coffee {
	char 원산지[50];
	char 바리스타이름[50];
	int 가격;	
};

int main4() {
	// 교재 295p (1)
	// 구조체 사용
	struct coffee 커피1 = {"케냐", "홍길동", 5000};
	sprintf(커피1.원산지, "케나다");
	// 홍길동은 OOO커피를 OO원에 판매합니다.
	printf("%s는 %s커피를 %d원에 팝니다", 커피1.바리스타이름, 커피1.원산지, 커피1.가격);

	return 0;
}