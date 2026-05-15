#include <stdio.h>

typedef struct 
{
    char* name;
    int age;
    int hourlyPay;
    int workHours;
} Worker;

int printWorkers(Worker* workers, int count) {
    int totalPay = 0;

    for (int i = 0; i < count; i++) {
        int pay = workers[i].hourlyPay * workers[i].workHours;

        printf("[%s]\n", workers[i].name);
        printf("나이: %d살\n", workers[i].age);
        printf("시급: %d원\n", workers[i].hourlyPay);
        printf("근무 시간: %d시간\n", workers[i].workHours);
        printf("오늘 급여: %d원\n", pay);
        printf("\n");

        totalPay = totalPay + pay;
    }

    return totalPay;
}

int main() {
    Worker workers[3] = {
        {"민수", 18, 10000, 5},
        {"서연", 19, 11000, 4},
        {"지훈", 17, 9860, 6}
    };

    Worker* pWorkers = workers;
    int workerCount = sizeof(workers) / sizeof(workers[0]);
    int totalPay = printWorkers(pWorkers, workerCount);

    printf("오늘 전체 알바비: %d원\n", totalPay);

    return 0;
}
