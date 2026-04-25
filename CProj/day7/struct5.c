#include <stdio.h>
#include <string.h>

// 스타크래프트 유닛 (이름, 체력, 공격력, 방어력)
struct Unit
{
	char name[100];
	int hp;
	int atk;
	int def;
};

// typedef 으로 별명을 줘서 줄인말을 사용할 수 있다
// typedef : 자료형의 이름을 내가 원하는 키워드로 치환 (별명주기)
// 스타크래프트 건물
typedef struct Building
{
	char name[100];
	int hp;
} 건물;				// struct Building -> 건물

int main5() {
	struct Unit 저글링 = { "저글링", 35, 5, 0 };
	struct Unit 마린 = { "마린", 40, 6, 0 };
	struct Unit 질럿 = { "질럿", 160, 16, 1 };
	건물 베럭 = { "베럭", 1500 };			// struct Building ==> 건물
	
	printf("저글링의 체력은 %d \n", 저글링.hp);

	for (int i = 0; i < 100; i++) {
		저글링.hp -= 마린.atk;
		if (저글링.hp <= 0) {
			printf("%s die", 저글링.name);
			break;			// 죽으면 그만 때려
		}
		else {
			printf("저글링의 체력은 %d \n", 저글링.hp);
		}
	}

	return 0;
}