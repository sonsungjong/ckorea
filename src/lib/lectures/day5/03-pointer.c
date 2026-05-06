#include <stdio.h>

int main() {
    // 배열과 포인터
    int nums[3] = {1,2,3};
    printf("%d %d %d\n", nums[0], nums[1], nums[2]);

    // [0] 의 정체 (왜 0번방부터 시작하는가?)
    printf("%d %d %d\n", *nums, *(nums + 1), *(nums + 2));

    *(nums + 0) = 100;
    printf("간략한 표현 nums[0] : %d\n", nums[0]);

    (*(nums + 1)) += 10;
    printf("간략한 표현 nums[1] : %d\n", nums[1]);

    return 0;
}