#include <stdio.h>

// 1. 전역 변수 (Global Variable)
// - 함수 밖에서 선언된 변수
// - 프로그램이 시작될 때 만들어지고, 프로그램이 종료될 때 파괴됩니다.
// - 어느 함수에서든 접근(사용)할 수 있습니다.
int global_count = 0;

void add_local() {
    // 2. 지역 변수 (Local Variable)
    // - 함수 안에서 선언된 변수
    // - 함수가 호출될 때 만들어지고, 함수가 끝날 때 파괴됩니다.
    // - 함수가 호출될 때마다 0으로 새로 초기화됩니다.
    int local_count = 0;
    local_count++;
    printf("지역 변수 (local_count) : %d\n", local_count);
}

void add_global() {
    // 전역 변수는 값을 계속 기억하고 있습니다.
    global_count++;
    printf("전역 변수 (global_count) : %d\n", global_count);
}

void add_static() {
    // 3. 정적 변수 (Static Variable)
    // - 함수 안에서 선언되지만, 변수 자료형 앞에 static 키워드가 붙습니다.
    // - 처음 함수가 호출될 때 딱 한 번만 만들어지고(초기화되고) 파괴되지 않습니다!
    // - 지역 변수처럼 함수 안에서만 쓸 수 있지만, 전역 변수처럼 값을 계속 기억합니다.
    static int static_count = 0;
    static_count++;
    printf("정적 변수 (static_count) : %d\n", static_count);
}

int main() {
    printf("=== 지역 변수(Local Variable) 테스트 ===\n");
    // 함수가 끝나면 변수가 사라지기 때문에, 매번 1이 출력됩니다.
    add_local();
    add_local();
    add_local();

    printf("\n=== 전역 변수(Global Variable) 테스트 ===\n");
    // 프로그램이 끝날 때까지 변수가 유지되므로, 값이 누적됩니다.
    add_global();
    add_global();
    add_global();

    printf("\n=== 정적 변수(Static Variable) 테스트 ===\n");
    // 함수 안에서만 쓰이지만 파괴되지 않아 값이 누적됩니다.
    add_static();
    add_static();
    add_static();

    return 0;
}
