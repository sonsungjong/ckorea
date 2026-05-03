#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main() {
    char id[20];
    char password[20];

    printf("아이디 입력: ");
    scanf("%s", id);

    printf("비밀번호 입력: ");
    scanf("%s", password);

    printf("\n===== 회원 정보 =====\n");
    printf("아이디: %s\n", id);
    printf("아이디 길이: %d\n", strlen(id));

    if (strcmp(password, "1234") == 0) {
        printf("로그인 성공\n");
    } else {
        printf("로그인 실패\n");
    }

    return 0;
}