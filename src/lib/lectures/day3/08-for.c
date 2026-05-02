#include <stdio.h>

int main(){
    int 구구단 = 2;
    int 카운트 = 1;

    for(구구단 = 2; 구구단 <= 9; 구구단++){
        for(카운트 = 1; 카운트 <= 9; 카운트++){
            printf("%d × %d = %d\n", 구구단, 카운트, 구구단*카운트);
        }
        printf("\n");
    }

    return 0;
}