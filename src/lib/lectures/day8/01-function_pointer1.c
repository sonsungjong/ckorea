#include <stdio.h>

void hello() {
    printf("안녕하세요!\n");
}

void bye() {
    printf("다음에 또 만나요!\n");
}

int main() {
    void (*message)();

    message = hello;
    message();

    message = bye;
    message();

    return 0;
}
