#include <stdio.h>

int main(){
    int num = -1;

    do{
        printf("숫자를 입력하세요(-1 입력시 종료): ");
        scanf("%d", &num);
    }while(num != -1);

    return 0;
}