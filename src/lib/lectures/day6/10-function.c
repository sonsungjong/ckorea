#include <stdio.h>

// 1. 배열을 전달받는 함수 만들기
// 배열을 매개변수로 받을 때는 변수 이름 뒤에 대괄호 [] 를 사용합니다.
// [중요] C언어에서 배열을 함수로 넘길 때는 배열의 '길이' 정보가 같이 넘어가지 않습니다.
// 따라서 배열과 함께 그 배열의 길이(크기)를 알려주는 매개변수(size)도 같이 넘겨주는 것이 필수적입니다.
void printArray(int arr[], int size) {
    printf("배열 요소 출력: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

// 2. 배열을 전달받은 함수에서 값을 변경한다면?
// 일반 변수는 함수에 넘겨줄 때 숫자 '값'만 복사되지만, (값에 의한 호출, Call by Value)
// 배열은 데이터가 있는 메모리의 '위치(주소)'가 넘어가기 때문에 
// 함수 안에서 배열의 값을 바꾸면 원본 배열의 값도 진짜로 함께 바뀝니다!
void doubleArrayValues(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] = arr[i] * 2; // 각 요소를 2배로 변경
    }
    printf("-> 함수 안에서 배열의 값들을 모두 2배로 변경했습니다!\n");
}

// 3. 포인터로 배열 전달받기
// C언어에서 배열의 이름은 주소이므로 포인터로 받을 수 있습니다.
void printArrayWithPointer(int *arr, int size) {
    printf("포인터로 배열 요소 출력: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", *(arr + i));
    }
    printf("\n");
}

void doubleArrayWithPointer(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        *(arr + i) = *(arr + i) * 2;
    }
    printf("-> 포인터 연산으로 원본 배열의 값을 모두 2배로 변경했습니다!\n");
}

int main() {
    // 5개의 정수를 담은 배열 선언
    int myNumbers[5] = {10, 20, 30, 40, 50};
    int length = 5; // 배열의 길이

    printf("--- 초기 배열 상태 ---\n");
    // 함수를 호출할 때 배열을 넘겨주려면 배열의 '이름'만 적어주면 됩니다. (대괄호 빼고)
    printArray(myNumbers, length);

    printf("\n--- 배열 값 변경 함수 호출 ---\n");
    // 함수를 호출해서 배열의 값을 2배로 변경해봅니다.
    doubleArrayValues(myNumbers, length);

    printf("\n--- 변경 후 원본 배열 상태 확인 ---\n");
    // 함수 밖(main 함수)에 있는 원본 배열의 값이 진짜로 바뀌었는지 확인해봅시다.
    printArray(myNumbers, length);

    // 결과: 20 40 60 80 100 으로 변경되어 출력됩니다.
    // 결론: 함수에게 배열을 넘겨주면, 함수 안에서 원본 배열 데이터를 직접 건드릴 수 있습니다.

    printf("\n--- 포인터로 배열 전달 테스트 ---\n");
    printArrayWithPointer(myNumbers, length);
    doubleArrayWithPointer(myNumbers, length);
    printArrayWithPointer(myNumbers, length);

    return 0;
}
