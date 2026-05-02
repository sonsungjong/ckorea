#include <stdio.h>

int main(){
    int numbers[3] = {1,2,3};
    double dnum[] = { 0.0, 1.0, 2.0 };          // 3칸

    char characters[] = {'a', 'b', 'c', 'd', 'e'};
    char 문자열[] = {'a', 'b', 'c', 'd', 'e', '\0'};
    char string[] = "abcde";        // '\0' 끝에 자동 추가
    
    printf("%c\n", characters[0]);
    printf("%c\n", string[0]);
    printf("%s\n", 문자열);
    printf("%s\n", string);

    char c;
    char str[50];

    scanf("%c", &c);            // 변수는 & 를 붙인다 (해당 위치만 딱 채움)
    scanf("%s", str);           // 문자열은 이름만 붙인다 (배열 시작위치부터 쭉~ 채우기 때문에)

    printf("%c\n %s\n", c, str);

    return 0;
}