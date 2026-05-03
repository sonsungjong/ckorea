#include <stdio.h>

int main() {
    int prices[4] = {1500, 2000, 3500, 1000};
    int total = 0;

    for (int i = 0; i < 4; i++) {
        total += prices[i];
    }

    printf("총 결제 금액: %d원\n", total);

    return 0;
}