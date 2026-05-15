#include <stdio.h>

int main() {
    int coin = 1;

    printf("처음 코인: %d\n", coin);

    coin = coin << 1;
    printf("왼쪽으로 1칸 이동: %d\n", coin);

    coin = coin << 2;
    printf("왼쪽으로 2칸 더 이동: %d\n", coin);

    coin = coin >> 1;
    printf("오른쪽으로 1칸 이동: %d\n", coin);

    printf("\n");

    printf("8 << 1 = %d\n", 8 << 1);
    printf("8 >> 1 = %d\n", 8 >> 1);

    return 0;
}
