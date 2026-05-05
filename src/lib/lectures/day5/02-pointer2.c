#include <stdio.h>

int main() {
    int a = 10;
    int *p = &a;

    // 역참조해서 사용한다
    *p = 20;        // a = 20;
    printf("%d\n", a);

    *p = 50;
    printf("%d\n", a);
    printf("a의 값 : %d\n", *p);

    int b = 30;
    p = &b;         // 교체한다

    printf("b의 값 : %d\n", *p);
    (*p)++;         // 이제는 b 를 늘린다
    printf("%d\n", b);      // 31

    return 0;
}