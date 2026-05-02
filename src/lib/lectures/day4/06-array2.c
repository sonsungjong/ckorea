#include <stdio.h>

int main(){
    int arr[2][3] = {
        {1,2,3},
        {4,5,6}
    };

    printf("%d\n", arr[0][0]);      // 1
    printf("%d\n", arr[0][1]);      // 2
    printf("%d\n", arr[0][2]);      // 3
    printf("%d\n", arr[1][0]);      // 4
    printf("%d\n", arr[1][1]);      // 5
    printf("%d\n", arr[1][2]);      // 6

    for(int i = 0; i < 2; i++){
        for(int j = 0; j < 3; j++){
            printf("%d ", arr[i][j]);
        }
        printf("\n");
    }

    for(int i = 0; i < 2; i++){
        for(int j = 0; j < 3; j++){
            arr[i][j] = 10;         // 10으로 모두 변경
        }
    }

    for(int i = 0; i < 2; i++){
        for(int j = 0; j < 3; j++){
            printf("%d ", arr[i][j]);
        }
        printf("\n");
    }

    return 0;
}