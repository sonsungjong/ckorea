#include <stdio.h>

int main(){
    int 카운트 = 0;

    for(; 카운트 != -1;){
        printf("숫자를 입력하세요(-1 입력시 종료): ");
        scanf("%d", &카운트);
    }


    return 0;
}