癤?include <stdio.h>

int main0() {
	// ?濡???day6 ?고대┃ -> ???-> C/C++ -> SDL寃??: No
	int array[5] = {0,};		// 諛곗?	int arr1[3] = { 1,2,3 };		// ~2

	int num = 10;
	int* pnum = &num;		// 蹂?? 二쇱瑜???ν? 怨듦? : ?ъ명?蹂?
	*pnum = 30;			// ?李몄“
	printf("%d \n", num);			// 30

	// 諛곗댁? ?遺 異??	for (int i = 0; i < sizeof(arr1)/sizeof(int); i++) {
		printf("%d ", arr1[i]);
	}

	array[1] = 4;
	array[2] = 4;
	array[3] = 4;
	array[4] = 4;		// 5媛 留?ㅼ?쇰㈃ 4踰源吏 ???	array[0] = 4;
	printf("\n %d \n", array[3]);

	// 0.0 ~ 9.0源吏 蹂닿??怨 ?? 諛곗?留?ㅺ린(1.0??利媛)
	double arr2[10] = { 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 };
	// ?遺異??	for (int i = 0; i < 10; i++) {
		printf("%lf ", arr2[i]);
	}

	return 0;
}