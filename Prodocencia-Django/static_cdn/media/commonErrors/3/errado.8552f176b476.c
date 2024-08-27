#include <stdio.h>
#include <locale.h> // (biblioteca opcional para incluir acentuações)

int main(){
    // (função opcional para selecionar Português)
    setlocale(LC_CTYPE, "Portuguese"); 

    int v1 = 0, v2 = 0;

    // Errado! ele atribui o valor & testa só a variável à esquerda
    if (v1 = v2) 
    {
        printf("(operação super importante)");
    }

    return 0;
}