#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main(){
    // if : 조건문
    // if(){}
    // () 안에 조건이 맞으면 {} 의 코드를 실행해줘요
    // () 의 조건이 틀리면 {} 의 코드를 무시해요

    int age = 21;           // 20 보다 작으면? 20 이상이면?
    if(age >= 20){
        printf("성인입니다!");
    }


    int score = 0;
    printf("점수를 입력하세요>>")
    scanf("%d", &score);
    if(score >= 90){
        printf("A 등급");
    }
    if(score < 90 && score >= 60){
        printf("B 등급");
    }
    if(score < 60){
        printf("C 등급");
    }

    return 0;
}