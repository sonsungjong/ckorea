#include <stdio.h>

// 함수의 4가지 형태
// 1. 매개변수 x, 반환값 x : void func(){}
// 2. 매개변수 o, 반환값 x : void func(int a){}
// 3. 매개변수 x, 반환값 o : int func(){ return 1; }
// 4. 매개변수 o, 반환값 o : int func(int a){ return a+1; }

// 1. 코드 재사용 목적
void sayHello(){
    printf("Hello!\n");
}

// 2. 코드 재활용 목적 (특정 부위만 바꾸면서 재활용)
void printNumber(int num){
    printf("숫자는 %d 이에요\n", num);
}

// 3. 코드 재사용 후 결과 보관 목적
int giveYou3(){
    printf("3을 반환할게요\n");
    return 3;
}

// 4. 코드 재활용 후 결과 보관 목적
int plus1(int num){
    int result = num + 1;
    return result;      // 1을 더하고 결과를 돌려준다 (바깥에서 변수로 받아야한다!)
}

int main(){
    // 1번
    sayHello();
    sayHello();

    // 2번
    printNumber(10);
    printNumber(20);

    // 3번
    int 받아1 = giveYou3();
    printf("함수가 반환한 값 : %d\n", 받아1);

    // 4번
    int 받아2 = plus1(10);
    printf("함수가 반환한 값 : %d\n", 받아2);

    return 0;
}