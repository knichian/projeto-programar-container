#include <stdio.h>

int main() {

    int v1 = 1;
    int v2 = 0;

    // "IF" fechado prematuramente
    if (v1); // O comando abaixo é independente do "IF" e será executado de qualquer forma
        printf("Hello-World! (1)\n");

    // "IF" fechado antes do bloco de comandos
    if (v1); // O bloco abaixo é tratado como independente, alguns compiladores podem ignorar a condição
    { // <- Bloco começa aqui
        printf("Hello-World! (2)\n"); 
        printf("Hello-World! (3)\n");
    } // <- Bloco acaba aqui

    // "DO" fechado antes do bloco de comandos, quebra completamente a estrutura
    do; 
    { // <- Bloco começa aqui
        printf("Hello-World! (4)\n");
    } // <- Bloco acaba aqui
    while (v2); // A parte "WHILE" precisa terminar em ";" e só controla o "DO"

    do; printf("Hello-World! (5)\n"); // "DO" fechado antes do comando, quebra completamente a estrutura
    while (v2); // A parte "WHILE" controla o "DO" e precisa terminar em ";"

    return 0;
}
