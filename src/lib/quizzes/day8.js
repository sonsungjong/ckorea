const day8Quiz = {
  dayId: "day8",
  title: "Day 8 퀴즈",
  description: "함수 포인터의 원리와 비트 이동(Shift) 연산자의 기초 개념을 확인합니다.",
  questions: [
    {
      id: "1",
      prompt: "함수의 메모리 주소를 저장하는 '함수 포인터'를 선언하려고 합니다. 포인터 기호를 채워주세요.",
      code: `void hello() {
    printf("안녕하세요!\\n");
}

int main() {
    // 매개변수와 반환값이 없는 함수를 담는 포인터 'message' 선언
    void (____message)();
    return 0;
}`,
      answer: `*`
    },
    {
      id: "2",
      prompt: "함수 포인터 'message'에 'hello' 함수의 주소를 저장하려고 합니다. C언어에서 함수의 이름은 곧 주소입니다.",
      code: `void (*message)();

// hello 함수의 시작 주소를 message 포인터에 저장합니다.
message = ____;`,
      answer: `hello`
    },
    {
      id: "3",
      prompt: "구조체 포인터를 매개변수로 받는 함수 포인터 `selectedAction`을 선언하려고 합니다. 매개변수 부분의 기호를 채우세요.",
      code: `// 매개변수로 struct Player의 포인터를 받는 함수 포인터
void (*selectedAction)(struct Player____);`,
      answer: `*`
    },
    {
      id: "4",
      prompt: "비트 이동 연산자를 사용해 숫자 1을 왼쪽으로 1칸 이동(Shift)하려고 합니다. (값이 2배가 됨)",
      code: `int coin = 1;

// 왼쪽으로 1칸 비트 이동
coin = coin ____ 1;`,
      answer: `<<`
    },
    {
      id: "5",
      prompt: "숫자 8을 오른쪽으로 1칸 비트 이동하려고 합니다. (값이 절반이 됨)",
      code: `// 오른쪽으로 1칸 비트 이동
printf("8 >> 1 = %d\\n", 8 ____ 1);`,
      answer: `>>`
    }
  ]
};

export default day8Quiz;
