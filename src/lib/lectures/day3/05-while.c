#include <stdio.h>

int main(){
    int number = 0;
    int 합계 = 0;

    do{
        number++;
        합계 += number;
    }while(number < 10);

    printf("1부터 10까지의 합 : %d\n", 합계);

    return 0;
}