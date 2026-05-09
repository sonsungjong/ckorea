#include <stdio.h>

// 1. 값에 의한 호출 (Call by Value)
// 변수가 가지고 있는 '값'만 복사해서 전달합니다.
// 함수 안에서 매개변수의 값을 변경해도, main 함수에 있는 원본 변수에는 아무런 영향을 주지 않습니다.
void addOneValue(int num) {
    num = num + 1;
    printf("  [addOneValue 내부] num 값을 1 증가시켰습니다: %d\n", num);
}

// 2. 참조에 의한 호출 (Call by Reference)
// 포인터(*)를 사용하여 원본 변수가 있는 '메모리 주소'를 직접 전달받습니다.
// 함수 안에서 포인터를 타고 원본 위치에 접근하여 값을 변경하기 때문에, 
// main 함수에 있는 원본 변수의 값이 진짜로 변경됩니다!
void addOneReference(int *numPtr) {
    *numPtr = *numPtr + 1; // 포인터가 가리키는 원본 위치의 값을 1 증가시킴
    printf("  [addOneReference 내부] 원본 값을 1 증가시켰습니다: %d\n", *numPtr);
}

int main() {
    int a = 10;
    int b = 10;

    printf("=== 초기 상태 ===\n");
    printf("a = %d, b = %d\n\n", a, b);

    // Call by Value 테스트
    printf("=== 1. Call by Value (값만 복사해서 전달) ===\n");
    addOneValue(a); // a의 '값(10)'만 복사해서 넘겨줍니다.
    printf("-> 함수 호출 후 main의 a 값: %d (원본은 변경되지 않음!)\n\n", a);

    // Call by Reference 테스트
    printf("=== 2. Call by Reference (메모리 주소 전달) ===\n");
    // 변수 b의 '주소(&)'를 넘겨주어야 포인터로 받을 수 있습니다.
    addOneReference(&b); 
    printf("-> 함수 호출 후 main의 b 값: %d (원본이 진짜로 변경됨!)\n", b);

    return 0;
}
