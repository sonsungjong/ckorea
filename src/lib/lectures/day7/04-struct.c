#include <stdio.h>

struct 캐릭터
{
    char* nickname;
    int level;
    int hp;
    int attack;
};

void printCharacter(struct 캐릭터 character) {
    printf("[%s]\n", character.nickname);
    printf("레벨: %d\n", character.level);
    printf("체력: %d\n", character.hp);
    printf("공격력: %d\n", character.attack);
    printf("\n");
}

int main() {
    struct 캐릭터 warrior = {"검사민수", 12, 150, 35};
    struct 캐릭터 wizard = {"마법서연", 10, 90, 55};

    printCharacter(warrior);
    printCharacter(wizard);

    return 0;
}
