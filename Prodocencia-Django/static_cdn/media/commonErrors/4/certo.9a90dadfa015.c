#include <stdio.h>

int main(){

    int v1 = 1;
    int v2 = 0;

    // Essa estrutura só vai rodar o proximo comando
    if(v1) 
        printf("Hello-World! (1)\n"); // <- esse aqui

    // Essa estrutura  vai rodar o bloco de comando (demarcado com chaves "{}")
    if(v1) 
    { // <- bloco começa aqui
        printf("Hello-World! (2)\n"); 
        printf("Hello-World! (3)\n");
    } // <- bloco acaba aqui

    do // Estrutura especial em 2 partes, parte "DO"
    {
        printf("Hello-World! (4)\n");
    }
    // Neste caso, a parte "WHILE" PRECISA do ";", ela serve apenas para controlar o "DO" e não pode executar comandos depois dela
    while(v2); 

    do // Estrutura especial em 2 partes, parte "DO" pode funcionar com comando único (não recomendado, mas funciona)
        printf("Hello-World! (5)\n");
    // A parte "WHILE", neste caso, ela PRECISA terminar em ";", ela só serve para controlar o "DO" e não pode executar comandos depois dela
    while(v2); 

    return 0;
}