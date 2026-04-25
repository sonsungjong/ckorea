#include <stdio.h>
#include <string.h>

struct human
{
	char name[30];
	int age;
};

int main3() 
{
	// 일반 변수를 배열로 만들 수 있듯이
	// 구조체 변수도 배열로 만들 수 있다
	int numbers[5] = {0, 1, 2, 3, 4};
	struct human 스터디그룹[3] = {
		{"김소년", 12},
		{"유소년", 14},
		{"청소년", 16},
	};

	// 유소년의 나이를 바꾸고자 한다
	스터디그룹[1].age = 20;

	// 김소년의 이름을 김소녀로 바꾸고자 한다
	sprintf(스터디그룹[0].name, "%s", "김소녀");

	printf("이름은 %s, 나이는 %d세 \n", 스터디그룹[0].name, 스터디그룹[0].age);
	printf("이름은 %s, 나이는 %d세 \n", 스터디그룹[1].name, 스터디그룹[1].age);
	printf("이름은 %s, 나이는 %d세 \n", 스터디그룹[2].name, 스터디그룹[2].age);

	return 0;
}