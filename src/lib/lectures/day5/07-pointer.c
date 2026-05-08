#include <stdio.h>

int main() {
    // 문자열 포인터와 문자 배열의 차이점
    
    // 1. 문자 배열: 배열 공간에 문자열을 복사해서 넣음
    // 읽기, 쓰기 모두 가능
    char str1[] = "Hello";
    
    // 2. 문자열 포인터: 문자열 상수가 저장된 메모리(읽기 전용) 주소를 가리킴
    // 읽기만 가능, 변경 시도 시 프로그램이 종료될 수 있음
    char *str2 = "World";
    
    printf("문자 배열 (str1): %s\n", str1);
    printf("문자열 포인터 (str2): %s\n", str2);
    
    // 배열의 값 변경은 가능
    str1[0] = 'h';
    printf("변경 후 (str1): %s\n", str1);
    
    // 주의: str2[0] = 'w'; // 이 코드는 실행 중 오류(Segmentation Fault)를 일으킬 수 있음
    
    // 하지만, 포인터 자체가 다른 문자열 주소를 가리키도록 변경하는 것은 가능
    str2 = "C Language";
    printf("다른 문자열을 가리키는 포인터 (str2): %s\n", str2);
    
    return 0;
}
