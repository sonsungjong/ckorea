#include <stdio.h>

// 재귀 함수(Recursive Function)란?
// 자기 자신을 사용하는 함수를 말합니다.
// 재귀 함수를 만들 때는 반드시 '멈추는 조건'이 있어야 합니다. (while과 유사)

// 예시: 로켓 발사 카운트다운
void countDown(int count) {
    // 1. 탈출 조건 (언제 멈출 것인가?)
    if (count == 0) {
        printf("로켓 발사!!! 🚀\n");
        return; // 여기서 함수를 끝내고 돌아갑니다. (더 이상 자기 자신을 부르지 않아요)
    }

    // 2. 현재 할 일
    printf("카운트다운: %d...\n", count);

    // 3. 자기 자신을 다시 부르기 (숫자를 1 줄여서 다음 단계로 넘김)
    countDown(count - 1); 
}

int main() {
    printf("=== 우주선 발사 준비 ===\n");
    
    // 5부터 카운트다운 시작!
    countDown(5);

    /* 
    [컴퓨터 안에서는 이런 일이 일어나요]
    
    countDown(5) -> 5 출력하고 countDown(4) 부름
      countDown(4) -> 4 출력하고 countDown(3) 부름
        countDown(3) -> 3 출력하고 countDown(2) 부름
          countDown(2) -> 2 출력하고 countDown(1) 부름
            countDown(1) -> 1 출력하고 countDown(0) 부름
              countDown(0) -> 0이므로 탈출 조건 발동! "발사!" 출력하고 끝!
    */

    return 0;
}
