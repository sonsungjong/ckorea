#include <stdio.h>

#define AMERICANO_PRICE 2000
#define LATTE_PRICE 3500
#define STAMP_GOAL 10

int totalSales = 0;
int totalStamp = 0;

void orderCoffee(char* menu, int price) {
    static int orderNumber = 0;

    orderNumber = orderNumber + 1;
    totalSales = totalSales + price;
    totalStamp = totalStamp + 1;

    printf("[주문 번호 %d]\n", orderNumber);
    printf("메뉴: %s\n", menu);
    printf("가격: %d원\n", price);
    printf("현재 스탬프: %d개\n", totalStamp);
    printf("\n");
}

int main() {
    orderCoffee("아메리카노", AMERICANO_PRICE);
    orderCoffee("라떼", LATTE_PRICE);
    orderCoffee("아메리카노", AMERICANO_PRICE);

    printf("오늘 총 매출: %d원\n", totalSales);
    printf("무료 쿠폰까지 남은 스탬프: %d개\n", STAMP_GOAL - totalStamp);

    return 0;
}
