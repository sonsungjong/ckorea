#include <stdio.h>

int main(){
    int i = 0;
    int odd[3];
    int even[5] = {2, 4, 6, 8, 10};

    odd[0] = 1;
    odd[1] = 3;
    odd[2] = 5;

    printf("%d %d %d\n", odd[0], odd[1], odd[2]);

    for(i = 0; i < 5; i++){
        printf("%d ", even[i]);
    }

    return 0;
}