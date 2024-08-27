#include <stdio.h>
#include <locale.h> // (biblioteca opcional para incluir acentuações)

int main(){
    // (função opcional para selecionar Português)
    setlocale(LC_CTYPE, "Portuguese"); 

    int v1 = 0, v2 = 0;

    if (v1 == v2) // Certo! ele compara (0 == 0) -> verdadeiro
    {
        printf("(operação super importante)");
    }

    return 0;
}