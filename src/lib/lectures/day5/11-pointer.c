#include <stdio.h>

int main() {
    // NULL 포인터
    // 아무것도 가리키지 않는 포인터를 의미 (메모리 주소 0번지)
    
    int *ptr1 = NULL;
    int a = 100;
    int *ptr2 = &a;
    
    // 포인터가 정상적인 주소를 가리키고 있는지 검사할 때 주로 사용됨
    if (ptr1 == NULL) {
        printf("ptr1은 아무것도 가리키지 않습니다.\n");
    } else {
        // ptr1이 NULL일 때 *ptr1 처럼 역참조하면 프로그램이 튕김(오류 발생)
        printf("ptr1의 값: %d\n", *ptr1);
    }
    
    if (ptr2 != NULL) {
        printf("ptr2는 값을 가리킵니다: %d\n", *ptr2);
    }
    
    // ptr1 = &a; 처럼 나중에 정상적인 주소를 채워넣고 사용
    ptr1 = ptr2; // ptr2가 가지고 있는 주소를 ptr1에 대입
    
    printf("\n정상적인 주소 할당 후 ptr1의 값: %d\n", *ptr1);
    
    return 0;
}
