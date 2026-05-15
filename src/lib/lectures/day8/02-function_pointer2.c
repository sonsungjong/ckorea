#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int main() {
    int (*calc)(int, int);
    int result;

    calc = add;
    result = calc(10, 3);
    printf("더하기 결과: %d\n", result);

    calc = subtract;
    result = calc(10, 3);
    printf("빼기 결과: %d\n", result);

    return 0;
}
