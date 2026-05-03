#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main() {
    char name[100];

    printf("이름을 입력하세요: ");
    scanf("%s", name);

    printf("안녕하세요, %s님!\n", name);
    printf("글자 수: %d\n", strlen(name));

    return 0;
}