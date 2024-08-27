#include <stdio.h>

int main(){

    int v1 = 32;
    float v2 = 5.6;
    double v3 = 16.56;

    printf("int:\t%c\n", v1); //      errado!  %d  -> int
    printf("float:\t%d\n", v2); //    errado!  %f  -> float
    printf("double:\t%f\n", v3); //   errado!  %lf -> double

    return 0;
}