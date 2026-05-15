#include <stdio.h>

struct Node
{
    int data;
    struct Node* next;
};

int main() {
    struct Node node1;
    struct Node node2;
    struct Node node3;

    struct Node* current;

    node1.data = 10;
    node1.next = &node2;

    node2.data = 20;
    node2.next = &node3;

    node3.data = 30;
    node3.next = NULL;

    current = &node1;

    while (current != NULL) {
        printf("데이터: %d\n", current->data);
        current = current->next;
    }

    return 0;
}
