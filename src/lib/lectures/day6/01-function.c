#include <stdio.h>

// 변수 : 값을 저장하는 공간
// 함수 : 코드를 저장하는 공간 (function, 기능)

// 숫자 2개를 넣으면 더해서 주는 기능(add 함수)
int add(int a, int b){
    return a + b;
}

// main 함수 (프로그램을 시작하는 기능)
int main(){
    int result = 0;

    result = add(3, 5);
    printf("함수가 반환한 값 : %d\n", result);

    // 반복문과 함수의 차이
    // 반복문 : 특정 코드를 일정횟수 반복
    // 함수 : 특정 코드를 원할때마다 재사용/재활용

    return 0;
}