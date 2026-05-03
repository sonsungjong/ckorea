#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main() {
    char word[50];
    char copy1[50];
    char copy2[50];
    char sentence[100] = "Hello ";
    char* title = "C Language";

    int len = 0;

    printf("단어를 입력하세요: ");
    scanf("%s", word);          // apple

    printf("\n===== 기본 출력 =====\n");
    printf("입력한 단어: %s\n", word);
    printf("포인터 문자열: %s\n", title);

    printf("\n===== strlen =====\n");
    len = strlen(word);
    printf("단어 길이: %d\n", len);

    printf("\n===== sizeof =====\n");
    printf("word 배열 전체 크기: %d바이트\n", sizeof(word));
    printf("word[0] 한 칸 크기: %d바이트\n", sizeof(word[0]));
    printf("word 배열 칸 수: %d칸\n", sizeof(word) / sizeof(word[0]));
    printf("title 포인터 크기: %d바이트\n", sizeof(title));

    printf("\n===== strcpy =====\n");
    strcpy(copy1, word);
    printf("copy1: %s\n", copy1);

    printf("\n===== strncpy =====\n");
    strncpy(copy2, word, 3);
    copy2[3] = '\0';
    printf("copy2 앞 3글자: %s\n", copy2);

    printf("\n===== strcat =====\n");
    strcat(sentence, word);
    printf("sentence: %s\n", sentence);

    printf("\n===== strncat =====\n");
    strncat(sentence, "!!!", 2);
    printf("sentence: %s\n", sentence);

    printf("\n===== strcmp =====\n");
    if (strcmp(word, "apple") == 0) {
        printf("apple과 같습니다.\n");
    } else {
        printf("apple과 다릅니다.\n");
    }

    printf("\n===== strncmp =====\n");
    if (strncmp(word, "app", 3) == 0) {
        printf("앞 3글자가 app입니다.\n");
    } else {
        printf("앞 3글자가 app이 아닙니다.\n");
    }

    printf("\n===== 반복문으로 한 글자씩 출력 =====\n");
    for (int i = 0; i < len; i++) {
        printf("%c", word[i]);
    }
    printf("\n");

    printf("\n===== 역순 출력 =====\n");
    for (int i = len - 1; i >= 0; i--) {
        printf("%c", word[i]);
    }
    printf("\n");

    return 0;
}