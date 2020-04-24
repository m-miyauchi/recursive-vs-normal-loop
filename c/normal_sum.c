#include <stdio.h>
#include <time.h>
const long int NUM = 10000;

long int calcSum(long int num) {
  long int sum = 0;

  for (long int i = 1; i <= num; i++)
  {
    sum = sum + i;
  }

  return sum;
}

int main()
{
  clock_t start, end;
  start = clock();
  long int result = 0;

  for (long int i = 1; i <= NUM; i++)
  {
    result = result + calcSum(i);
  }

  
  printf("NUM: %ld, result: %ld \n", NUM, result);
  end = clock();
  printf( "time: %lu ms", end - start);
  return 0;
}