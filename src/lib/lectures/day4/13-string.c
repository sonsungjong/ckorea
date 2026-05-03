#include <stdio.h>
#include <string.h>

int main() {
    char arr[] = "hello";           // 문자배열 (char를 뭉쳐서 여러글자를 보관)
    char* ptr = "hello";            // 문자열 (문자의 시작주소부터 \0 까지)

    arr[0] = 'H';       // 배열은 개별요소를 수정할 수 있음
    // ptr[0] = 'H';       <-- 에러! 포인터는 배열이 아님

    printf("arr: %s\n", arr);
    printf("ptr: %s\n", ptr);

    ptr = "Apple";          // 가능
    // arr = "Apple";          // 불가능 (배열은 개별씩만 교체 가능)
    strcpy(arr, "Apple");       // 대신, 배열은 strcpy 로 교체

    printf("arr: %s\n", arr);
    printf("ptr: %s\n", ptr);

    return 0;
}