#include <stdio.h>

int main(){
    // 배열 : [] , 변수들을 1열로 뭉쳐놓은 것
    char s;                 // 문자 1개
    char str[10];           // 문자 10개 뭉침 (문자열)

    int number;             // 변수
    int numbers[10];        // 배열

    double dnum[] = { 0.0, 1.0, 2.0 };          // 3칸 자동 생성

    // 배열사용이유1 : 정수변수 10개를 만들고자 한다
    int n1, n2, n3, n4, n5, n6, n7, n8, n9, n10;
    int nums[10];

    // 배열사용이유2 : 반복문 사용
    for(int i = 0; i < 10; i++){
        printf("%d ", nums[i]);        // 0 ~ 9 번방
    }

    printf("\n %d \n", nums[0]);		// 0번방은 첫번째방
	printf("\n %d \n", nums[9]);		// 9번방은 10번째방

    // 배열 : []를 통해서 변수를 붙여놓음

    return 0;
}