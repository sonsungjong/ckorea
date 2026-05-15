#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct GameProfile
{
    char* nickname;
    int level;
    double winRate;
};

int main() {
    int* pLevel;
    double* pWinRate;
    char* pGameName;
    struct GameProfile* pProfile;

    pLevel = (int*)malloc(sizeof(int));
    pWinRate = (double*)malloc(sizeof(double));
    pGameName = (char*)malloc(sizeof(char) * 20);
    pProfile = (struct GameProfile*)malloc(sizeof(struct GameProfile));

    if (pLevel == NULL || pWinRate == NULL || pGameName == NULL || pProfile == NULL) {
        printf("메모리 할당 실패\n");
        return 1;
    }

    *pLevel = 17;
    *pWinRate = 63.5;
    memcpy(pGameName, "League", sizeof("League"));

    pProfile->nickname = (char*)malloc(sizeof(char) * 20);

    if (pProfile->nickname == NULL) {
        printf("닉네임 메모리 할당 실패\n");

        free(pLevel);
        free(pWinRate);
        free(pGameName);
        free(pProfile);

        return 1;
    }

    memcpy(pProfile->nickname, "mid_master", sizeof("mid_master"));
    pProfile->level = 42;
    pProfile->winRate = 58.7;

    printf("int 동적 할당: %d레벨\n", *pLevel);
    printf("double 동적 할당: %.1f%%\n", *pWinRate);
    printf("char* 동적 할당: %s\n", pGameName);
    printf("\n");

    printf("[구조체 동적 할당]\n");
    printf("닉네임: %s\n", pProfile->nickname);
    printf("레벨: %d\n", pProfile->level);
    printf("승률: %.1f%%\n", pProfile->winRate);

    free(pLevel);
    free(pWinRate);
    free(pGameName);
    free(pProfile->nickname);
    free(pProfile);

    return 0;
}
