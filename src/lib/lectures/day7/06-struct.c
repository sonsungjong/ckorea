#include <stdio.h>

typedef struct
{
    char* name;
    int mathScore;
    int englishScore;
} StudyRecord;

void printRecord(StudyRecord record) {
    printf("[%s의 시험 점수]\n", record.name);
    printf("수학: %d점\n", record.mathScore);
    printf("영어: %d점\n", record.englishScore);
    printf("평균: %.1f점\n", (record.mathScore + record.englishScore) / 2.0);
    printf("\n");
}

void addBonus(StudyRecord* record, int bonus) {
    record->mathScore = record->mathScore + bonus;
    record->englishScore = record->englishScore + bonus;

    if (record->mathScore > 100) {
        record->mathScore = 100;
    }

    if (record->englishScore > 100) {
        record->englishScore = 100;
    }
}

int main() {
    StudyRecord record = {"하은", 82, 91};
    StudyRecord* pRecord = &record;

    printRecord(record);

    addBonus(pRecord, 5);

    printRecord(record);

    return 0;
}
