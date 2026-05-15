#include <stdio.h>

struct 강아지
{
    int age;
    char* name;
    double weight;
};

int main() {
    // 우리집 강아지
    struct 강아지 우리집개 = {3, "멍멍이", 2.3};

    // 옆집 강아지
    struct 강아지 옆집강아지 = {1, "옆집개", 1.3};

    // 동네 강아지
    struct 강아지 동네개 = {2, "동네개", 1.2};

    printf("나이: %d, 이름: %s, 몸무게: %.1fkg\n", 우리집개.age, 우리집개.name, 우리집개.weight);
    printf("나이: %d, 이름: %s, 몸무게: %.1fkg\n", 옆집강아지.age, 옆집강아지.name, 옆집강아지.weight);
    printf("나이: %d, 이름: %s, 몸무게: %.1fkg\n", 동네개.age, 동네개.name, 동네개.weight);

    return 0;
}
