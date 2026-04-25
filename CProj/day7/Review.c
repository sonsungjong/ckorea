癤?/ SDL寃??: ????#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

// ?⑥瑜?留?? 踰 (?⑥ ??) : ?愿?? 以愿??void MyFunction1() {
	printf("Hello");
	printf(", world!");
}

// ?⑥瑜??ъ⑺ ? ??댁쇳? 媛?????: ()瑜??댁?void MyFunction2(int number) {
	printf("Hello %d", number);
}

// 諛?媛???? ?⑥ : return, ?猷?
int MyFunction3() {
	return 333;
}

// 留ㅺ?蹂?? return媛???? ?⑥
double MyFunction4(int n1, int n2) {
	double result = (double)n1 / n2;

	return result;
}

int main0() {
	// ?⑥瑜??ъ⑺? 踰 : ?愿?멸?吏留
	MyFunction1();
	MyFunction1();    // 肄?瑜???ν대怨 

	MyFunction2(33);
	printf("\n");    // 諛蹂듬Ц???? ?⑥瑜??ъ⑺? ?댁 : 以媛? 肄? ?쎌
	MyFunction2(44);

	int num1 = MyFunction3();
	num1 = MyFunction3();
	printf("%d \n", MyFunction3());
	printf("%d \n", num1);

	double num2 = MyFunction4(3, 4);
	printf("寃곌낵? %lf \n", num2);

	num2 = MyFunction4(9, 3);
	printf("寃곌낵? %lf \n", num2);

	return 0;
}