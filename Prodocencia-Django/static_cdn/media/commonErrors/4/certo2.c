#include <stdio.h>

int main() {

    int v1 = 1;
    int v2 = 0;

    // Roda o próximo comando
    if (v1) printf("Hello-World! (1)\n"); // <- esse aqui

    // Roda o bloco de comando
    if (v1) { // <- bloco começa aqui
        printf("Hello-World! (2)\n"); 
        printf("Hello-World! (3)\n");
    } // <- bloco acaba aqui

    do { // Estrutura especial: "DO" controla um comando
        printf("Hello-World! (4)\n");
    }
    
    while (v2); // "WHILE" controla o "DO" sem comandos posteriores

    do // Estrutura especial: "DO" com comando único (não recomendado)
        printf("Hello-World! (5)\n");
    while (v2); // "WHILE" controla o "DO" sem comandos posteriores

    return 0;
}