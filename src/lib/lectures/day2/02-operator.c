#include <stdio.h>

int main() {
    // 대입연산자는 = 이고 오른쪽의 값을 왼쪽에 저장해요.
    int a = 10;
    int b = 20;
    int c;
    c = a + b;
    printf("%d\n", c);


    // 복합대입연산자
    int score = 100;
    score + 10;             // 단순히 더하기만 한다고 해서 변수에 저장되는건 아니에요. 대입을 따로 해줘야해요.

    score = score + 10;     // 더하기 하고 저장까지
    score += 10;            // 줄인 표현 (복합대입연산자)
    score -= 10;
    score *= 10;
    score /= 10;
    
    printf("결과 : %d\n", score);

    // 복합대입연산자의 더하기나 빼기 값이 1 일때는 더 줄여서 사용할 수 있어요
    // 주로 횟수를 체크할 때 많이 사용해요
    int count = 0;
    count += 1;
    count++;    // +1 해서 저장 (증가연산자)
    count -= 1;
    count--;    // -1 해서 저장 (감소연산자)

    ++count;    // 앞 또는 뒤에 ++, --
    --count;

    printf("증감연산자 : %d\n", count);

    // 비교연산자 : ==, !=, <, >, <=, >=

    // 관계연산자, 비트연산자, 쉬프트연산자

    // 삼항연산자
    // 변수 = (조건) ? 조건이참일때값 : 조건이거짓일때값
    int age = 20;
    int result = (age >= 19) ? 1 : 0;
    printf("결과 : %d\n", result);

	return 0;
}