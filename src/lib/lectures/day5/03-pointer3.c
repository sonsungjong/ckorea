#include <stdio.h>

int main() {
    // 배열과 포인터
    int nums[3] = {1,2,3};
    printf("%d %d %d\n", nums[0], nums[1], nums[2]);

    printf("%d %d %d\n", *nums, *(nums + 1), *(nums+2));

    return 0;
}