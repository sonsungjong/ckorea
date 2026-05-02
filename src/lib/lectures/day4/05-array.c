#define _CRT_NO_SECURE_WARNINGS
#include <stdio.h>

int main() {
    int numbers[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    for(int i=0; i<10; i++){
        printf("%d ", numbers[i]);
    }
    printf("\n");

    // 역순으로 출력
    for(int i=9; i>=0; i--){
        printf("%d ", numbers[i]);
    }
    printf("\n");

	return 0;
}