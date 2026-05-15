#include <stdio.h>

int main() {
    // 우리집 강아지
    int age = 3;
    char* name = "멍멍이";
    double weight = 2.3;

    // 옆집 강아지
    int age_yepjip = 1;
    char* name_yepjip = "옆집개";
    double weight_yepjip = 1.3;

    // 동네 강아지
    int age_dongne = 2;
    char* name_dongne = "동네개";
    double weight_dongne = 1.2;

    printf("나이: %d, 이름: %s, 몸무게: %.1fkg\n", age, name, weight);
    printf("나이: %d, 이름: %s, 몸무게: %.1fkg\n", age_yepjip, name_yepjip, weight_yepjip);
    printf("나이: %d, 이름: %s, 몸무게: %.1fkg\n", age_dongne, name_dongne, weight_dongne);

    return 0;
}
