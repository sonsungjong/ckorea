#include <stdio.h>

int main() {
    int num = 100;
    
    // num을 가리키는 포인터
    int *p1 = &num;     
    
    // p1을 가리키는 이중 포인터 (포인터의 포인터)
    int **p2 = &p1;     

    printf("num의 값: %d\n", num);
    printf("p1이 가리키는 값 (*p1): %d\n", *p1);
    printf("p2가 가리키는 포인터가 가리키는 값 (**p2): %d\n\n", **p2);

    printf("num의 주소 (&num): %p\n", (void*)&num);
    printf("p1의 값 (p1): %p\n", (void*)p1);
    printf("p2가 가리키는 값 (*p2): %p\n\n", (void*)*p2);

    printf("p1의 주소 (&p1): %p\n", (void*)&p1);
    printf("p2의 값 (p2): %p\n", (void*)p2);

    // 이중 포인터를 통한 값 변경
    **p2 = 200;
    printf("\n**p2 = 200 수행 후 num의 값: %d\n", num);

    return 0;
}
