#include <stdio.h>

int main() {
	// page101 #3, #4, #5 (/, %, 삼항연산자)
	
	
	// #3
	// 바구니에 복숭아를 10개씩 담을 수 있다.
	// 복숭아 갯수를 사용자로부터 입력받고 바구니 수를 출력하자
	// 예를 들어, 복숭아 16개를 입력받으면 바구니 2개가 필요
	// 복숭아 157개를 입력받으면 바구니 16개가 필요

	// % : 나머지 구하기 기호를 통해서 나누어 떨어지면 값이 0과 같다
	// 9 % 3 == 0	(9는 3으로 나누어 떨어진다, 3의 배수이다)
	int peach = 0;
	int bracket = 0;
	printf("복숭아의 개수는:");
	scanf("%d", &peach);

	bracket = peach / 10;
	(peach % 10 == 0) ? bracket : bracket++;
	printf("필요한 바구니의 수: %d \n", bracket);

	// #4
	// 사용자로부터 실수형 변수에 값을 입력받고 1의 자리 숫자만 출력하는 프로그램 만들기 (나누기와 형변환을 적절히 사용)
	// 예를들어, 126.12		==>		6
	// 33.14	==>		3
	double dNum = 0.0;
	int result = 0;
	printf("NUM:");
	scanf("%lf", &dNum);

	result = (int)dNum % 10;
	printf("%d \n", result);

	// #5
	// 사용자로부터 초(Second)를 입력받아 [시,분,초] 형태로 변환해보세요
	// 예를들어, 3665		==>			1시간 1분 5초
	int time = 0;
	int hour = 0, min = 0, sec = 0;

	printf("초를 입력하세요:");
	scanf("%d", &time);

	hour = time / 60 / 60;
	min = time % 3600 / 60;
	sec = time % 60;

	printf("%d시간 %d분 %d초 \n", hour, min, sec);

	return 0;
}