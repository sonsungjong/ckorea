#include <stdio.h>

int main() {
    // 포인터를 이용한 값 교환 (Swap) 기본 원리
    // 나중에 "함수"를 배워서 매개변수로 포인터를 전달할 때 핵심이 되는 개념
    
    int a = 10;
    int b = 20;
    
    int *pa = &a;
    int *pb = &b;
    
    printf("교환 전:\n");
    printf("a = %d, b = %d\n", a, b);
    
    // a와 b라는 변수명을 직접 사용해서 값을 바꾸지 않고, 
    // 포인터 역참조를 통해 주소로 찾아가서 값을 교환
    int temp = *pa;   // temp에 pa가 가리키는 값(a의 값)을 임시 저장
    *pa = *pb;        // pa가 가리키는 곳(a)에 pb가 가리키는 값(b의 값)을 덮어씀
    *pb = temp;       // pb가 가리키는 곳(b)에 temp 값을 덮어씀
    
    printf("\n교환 후 (포인터 역참조 이용):\n");
    printf("a = %d, b = %d\n", a, b);
    
    return 0;
}
