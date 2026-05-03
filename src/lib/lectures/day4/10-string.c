#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main() {
    char name[20] = "kim";
    char phone[] = "010-0000-0000";     // 비권장: 글자수가 제한됨
    char* message = "Hello";

    printf("name: %s\n", name);
    printf("message: %s\n", message);

    printf("name[0]: %c\n", name[0]);
    printf("message[0]: %c\n", message[0]);

    return 0;
}