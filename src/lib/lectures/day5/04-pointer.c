#include <stdio.h>

int main() {
    // 포인터 (변수의 주소를 저장한다)
    int 변수 = 0;
    int* 포인터변수 = &변수;

    // 배열포인터 (배열의 주소를 저장한다)
    int 배열[4] = {0, 1, 2, 3};
    int (*pArr)[4] = &배열;     // 배열 칸수는 똑같이 맞춰준다
    
    (*pArr)[2] = 300;
    
    printf("0번방 : %d\n", (*pArr)[0]);
    printf("1번방 : %d\n", (*pArr)[1]);
    printf("2번방 : %d\n", (*pArr)[2]);
    printf("3번방 : %d\n", (*pArr)[3]);

    return 0;
}