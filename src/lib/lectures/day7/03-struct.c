#include <stdio.h>

struct 학생
{
    char* name;
    int grade;
    int classNumber;
    int favoriteNumber;
};

int main() {
    struct 학생 민준 = {"김민준", 1, 3, 7};
    struct 학생 서연 = {"박서연", 2, 5, 11};

    printf("이름: %s\n", 민준.name);
    printf("학년: %d학년\n", 민준.grade);
    printf("반: %d반\n", 민준.classNumber);
    printf("좋아하는 숫자: %d\n", 민준.favoriteNumber);

    printf("\n");

    printf("이름: %s\n", 서연.name);
    printf("학년: %d학년\n", 서연.grade);
    printf("반: %d반\n", 서연.classNumber);
    printf("좋아하는 숫자: %d\n", 서연.favoriteNumber);

    return 0;
}
