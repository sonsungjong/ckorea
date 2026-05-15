#include <stdio.h>

struct 자판기
{
    char* menu;
    int price;
    int count;
};

void printOrder(struct 자판기 order) {
    printf("메뉴: %s\n", order.menu);
    printf("가격: %d원\n", order.price);
    printf("개수: %d개\n", order.count);
    printf("총액: %d원\n", order.price * order.count);
    printf("\n");
}

void addOne(struct 자판기* order) {
    order->count = order->count + 1;
}

void discount(struct 자판기* order, int amount) {
    order->price = order->price - amount;
}

int main() {
    struct 자판기 stOrder = {"컵라면", 1800, 2};
    struct 자판기* pOrder = &stOrder;

    printf("처음 주문\n");
    printOrder(stOrder);

    addOne(pOrder);
    discount(pOrder, 300);

    printf("친구가 하나 더 사고, 할인까지 받은 후\n");
    printOrder(stOrder);

    return 0;
}
