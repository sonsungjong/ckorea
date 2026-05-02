#include <stdio.h>

int main(){
    int 숫자 = 0;

    while(1){
        printf("-1 입력시 종료: ");
        scanf("%d", &숫자);

        if(숫자 == -1){
            break;
        }
    }

    return 0;
}