#include <stdio.h>

int main() {
    // 변수(저장공간) 을 처음 생성할 때는 변수이름 앞에 type 을 적어줘요
    // char, int, float, double
    int age = 20;               // 숫자 [%d]
    double height = 175.5;      // 소수점있는 숫자 [%f]
    char grade = 'C';           // 문자 [%c]
    
    printf("나이: %d\n", age);
    printf("키: %f\n", height);
    printf("등급: %c\n", grade);


    // 값 변경
    age = 21;
    grade = 'A';
    printf("%d", age);
    
    return 0;
}