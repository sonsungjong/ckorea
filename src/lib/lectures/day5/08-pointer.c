#include <stdio.h>

int main() {
    // 포인터 배열 (배열의 각 칸이 포인터를 저장함)
    // 여러 개의 문자열을 다룰 때 매우 효율적임
    
    char *words[3] = {
        "Apple",
        "Banana",
        "Cherry"
    };
    
    printf("첫 번째 단어: %s\n", words[0]);
    printf("두 번째 단어: %s\n", words[1]);
    printf("세 번째 단어: %s\n", words[2]);
    
    // 특정 단어의 특정 글자에 접근하기
    // words[1]은 "Banana"를 가리키는 문자열 포인터(char*)이고
    // words[1][0]은 "Banana"의 첫 글자인 'B'를 의미함
    printf("\n두 번째 단어의 첫 글자: %c\n", words[1][0]);
    printf("세 번째 단어의 두 번째 글자: %c\n", words[2][1]);
    
    return 0;
}
