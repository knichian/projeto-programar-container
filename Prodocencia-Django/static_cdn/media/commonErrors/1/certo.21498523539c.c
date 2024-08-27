#include <stdio.h>

int main(){

    int v1 = 32;
    float v2 = 5.6;
    double v3 = 16.56;

    printf("int:\t%d\n", v1); //       certo!  %d  -> int
    printf("float:\t%f\n", v2); //     certo!  %f  -> float
    printf("double:\t%lf\n", v3); //   certo!  %lf -> double

    return 0;
}