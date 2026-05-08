#include <stdio.h>

int main() {
    // 포인터 연산 (Pointer Arithmetic)
    // 포인터에 +1을 하면, 주소값이 무조건 1 증가하는 것이 아니라
    // "포인터가 가리키는 자료형의 크기"만큼 증가함
    
    char c = 'A';
    int n = 10;
    double d = 3.14;
    
    char *pc = &c;
    int *pn = &n;
    double *pd = &d;
    
    printf("기본 주소:\n");
    printf("char*   pc: %p\n", (void*)pc);
    printf("int*    pn: %p\n", (void*)pn);
    printf("double* pd: %p\n", (void*)pd);
    
    // 각각 +1을 했을 때 메모리 주소가 얼마나 이동하는지 확인
    printf("\n+1 연산 후 주소 (+1 칸 이동):\n");
    printf("char*   (pc + 1): %p (1바이트 증가)\n", (void*)(pc + 1));
    printf("int*    (pn + 1): %p (4바이트 증가)\n", (void*)(pn + 1));
    printf("double* (pd + 1): %p (8바이트 증가)\n", (void*)(pd + 1));
    
    return 0;
}
