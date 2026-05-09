#include <stdio.h>

// 값에 의한 호출 (Call by Value) 방식의 swap 함수 -> 참조에 의한 호출 (Call by Reference) 방식의 swap 함수 만들기
// 두 변수의 값을 서로 바꾸려고 시도하지만, '값'만 복사되어 넘어오기 때문에 함수 내부에서만 바뀌고 main 함수의 원본 데이터는 절대 바뀌지 않습니다.
// [실습] 포인터를 사용하여 원본 변수의 '메모리 주소'를 전달받고, 포인터를 타고 들어가 직접 원본 변수의 값을 서로 바꾸는 swap 함수를 완성해보세요!
void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    printf("  [swap 내부] 값을 서로 바꿨습니다! a = %d, b = %d\n", a, b);
}

int main() {
    int num1 = 10;
    int num2 = 20;

    printf("=== 초기 상태 ===\n");
    printf("num1 = %d, num2 = %d\n\n", num1, num2);

    printf("=== swap 호출 ===\n");
    swap(num1, num2);
    printf("-> 함수 호출 결과: num1 = %d, num2 = %d", num1, num2);

    return 0;
}
