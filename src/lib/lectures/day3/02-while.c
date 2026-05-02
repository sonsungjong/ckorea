#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main(){
    int i = 0;

    while(i != -1){
        printf("숫자를 입력하세요(-1 입력시 종료): ");
        scanf("%d", &i);

        if(i == -1){
            printf("종료합니다.");
        }
        else{
            printf("%d을(를) 입력하셨네요.\n", i);
        }
    }

    return 0;
}