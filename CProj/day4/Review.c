癤?/ git pull (??댁ㅺ린) -> ?濡??????肄? ???#include <stdio.h>

int main0() {
	// 議곌굔臾?if,switch
	// if ~ else if ~ else
	// () : 議곌굔
	// {} : 議곌굔??留??留 ?ㅽ? 肄?
	// ?몃? 議곌굔? ?곕쇱 ?濡洹몃⑥ ??? ?ㅻⅤ寃 ?湲???댁
	int num = 3;

	if (num == 2) {
		printf("state 1 \n");
	}
	else if (num > 2) {
		if (num < 4) {
			printf("state 2 \n");
		}
	}
	else if (num == 3) {
		printf("state 3 \n");
	}
	else {
		printf("state 4 \n");
	}

	return 0;
}