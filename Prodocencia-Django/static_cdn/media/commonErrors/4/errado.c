#include <stdio.h>

int main(){

    int v1 = 1;
    int v2 = 0;

    if(v1); // errado! "IF" "fechado" prematuramente
        printf("Hello-World! (1)\n"); // <- esse comando é visto como uma coisa independente do "IF", então roda de qualquer forma

    if(v1); // errado! "IF" "fechado" prematuramente antes do bloco de comando
    { // <- bloco começa aqui (mas como o "IF" já foi fechado, ele tambem é visto como independente)
        printf("Hello-World! (2)\n"); 
        printf("Hello-World! (3)\n");
    } // <- bloco acaba aqui (obs: alguns compiladores detectam & avisam, mas outros não questionam e executam ignorando a condição)

    do; // errado! "DO" "fechado" prematuramente antes do bloco de comandos, essa estrutura em especial quebra completamente
    {
        printf("Hello-World! (4)\n");
    }
    while(v2); // errado! a parte "WHILE", neste caso, ela PRECISA terminar em ";", ela só serve para controlar o "DO" e não pode ativar comandos depois dela

    do; // errado! "DO" "fechado" prematuramente antes do comando, essa estrutura em especial quebra completamente
        printf("Hello-World! (5)\n");
    while(v2); // a parte "WHILE", neste caso, ela PRECISA terminar em ";", ela só serve para controlar o "DO" e não pode ativar comandos depois dela

    return 0;
}