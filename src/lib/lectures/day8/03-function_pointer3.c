#include <stdio.h>

struct Player
{
    char* name;
    int hp;
    int mp;
    int gold;
};

void printPlayer(struct Player* player) {
    printf("[%s]\n", player->name);
    printf("체력: %d\n", player->hp);
    printf("마나: %d\n", player->mp);
    printf("골드: %d\n", player->gold);
    printf("\n");
}

void usePotion(struct Player* player) {
    player->hp = player->hp + 30;
    player->gold = player->gold - 100;
}

void useMagic(struct Player* player) {
    player->mp = player->mp - 20;
    player->gold = player->gold + 200;
}

void runAction(struct Player* player, void (*action)(struct Player*)) {
    action(player);
}

int main() {
    struct Player player = {"민수", 70, 50, 500};
    struct Player* pPlayer = &player;
    void (*selectedAction)(struct Player*);

    printPlayer(pPlayer);

    selectedAction = usePotion;
    runAction(pPlayer, selectedAction);

    printPlayer(pPlayer);

    selectedAction = useMagic;
    runAction(pPlayer, selectedAction);

    printPlayer(pPlayer);

    return 0;
}
