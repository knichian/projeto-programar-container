#include <stdio.h>

int main(){
    int v1;
    char v2[50];

    // errado! variaveis comuns precisam do caractere "&"(chamado de "e-comercial")
    scanf(" %d", v1);
    
    // errado! strings não podem ter o caractere "&"
    scanf(" %[^\n]", &v2);

    printf("digitado: %d\n", v1);
    printf("digitado: %s\n", v2);

    return 0;
}