#include <stdio.h>

// 함수 만들기 종합 연습
// 다양한 형태의 함수를 직접 만들고 사용해보세요.

// 1. 매개변수 X, 반환값 X
// 함수 이름: printMenu
// 기능: "1. 게임시작 2. 설정 3. 종료" 를 화면에 줄바꿈하여 출력하는 함수를 완성하세요.
void printMenu() {
    // 여기에 코드를 작성하세요
    
}

// 2. 매개변수 O, 반환값 X
// 함수 이름: printStars
// 기능: 정수 1개를 입력받아, 그 숫자만큼 '*'을 출력하는 함수를 완성하세요. (반복문 사용)
void printStars(int count) {
    // 여기에 코드를 작성하세요
    
}

// 3. 매개변수 X, 반환값 O
// 함수 이름: getPi
// 기능: 원주율 3.14 (double형) 를 반환하는 함수를 직접 선언부터 만들어보세요.
// (여기에 직접 함수를 만들어보세요)



// 4. 매개변수 O, 반환값 O
// 함수 이름: isEven
// 기능: 정수 1개를 입력받아, 짝수면 1, 홀수면 0을 반환하는 함수를 직접 만들어보세요.
// (여기에 직접 함수를 만들어보세요)



// 5. 매개변수 2개 이상, 반환값 O
// 함수 이름: getMax
// 기능: 정수 2개를 입력받아, 둘 중 더 큰 숫자를 반환하는 함수를 직접 만들어보세요.
// (여기에 직접 함수를 만들어보세요)



int main(){
    // 위에서 만든 함수들이 잘 작동하는지 메인 함수에서 호출(사용)해 보세요.
    // 주석(//)을 해제하고 테스트해볼 수 있습니다.
    
    printf("--- 1. printMenu 테스트 ---\n");
    printMenu();
    
    printf("\n--- 2. printStars 테스트 ---\n");
    printStars(5);
    printf("\n");
    
    printf("\n--- 3. getPi 테스트 ---\n");
    double pi = getPi();
    printf("원주율: %f\n", pi);
    
    printf("\n--- 4. isEven 테스트 ---\n");
    int check1 = isEven(10);
    int check2 = isEven(7);
    printf("10은 짝수인가? (1:맞음, 0:아님) -> %d\n", check1);
    printf("7은 짝수인가? (1:맞음, 0:아님) -> %d\n", check2);
    
    printf("\n--- 5. getMax 테스트 ---\n");
    int maxVal = getMax(10, 20);
    printf("10과 20중 더 큰 수: %d\n", maxVal);

    return 0;
}