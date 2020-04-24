#include <stdio.h>
#include <time.h>
const long int NUM = 100000;

long int calcSum(long int num) {
  long int sum = 0;
  if (num == 0) {
    return 0;
  }
  return (num + calcSum(num -1));
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

  end = clock();
  printf("NUM: %ld, result: %ld \n", NUM, result);
  printf( "time: %lu ms", end - start);
  return 0;
}