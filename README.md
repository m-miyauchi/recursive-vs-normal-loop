# Recursive function vs For loop

## Usage
### C
GCC required.
```
$ gcc  -foptimize-sibling-calls -o normal_sum.o normal_sum.c
$ gcc  -foptimize-sibling-calls -o recursive_sum.o recursive_sum.c
$ ./normal_sum.o
$ ./recursive_sum.o
```

### Javascript
Node.js requied.

```
$ node normal_sum.js
$ node recursive_sum.js
```

## Result
### C (clang-1001.0.46.4)
`recursive_sum.c` is 2% slower than `normal_sum.c`.
```
$ ./normal_sum.o
NUM: 100000, result: 166671666700000
time: 13387781 ms%
$ ./recursive_sum.o
NUM: 100000, result: 166671666700000
time: 13697251 ms%
```

### Javascript(Node.js v13.7)

`normal_sum.js` is over 6.5x faster than `recursive_sum.js` at NUM = 10000.
```
$ node recursive_sum.js
NUM: 10000, result: 166716670000
time: 248.981ms
$ node normal_sum.js
NUM: 10000, result: 166716670000
time: 38.098ms
```

`recursive_sum.js` isn't work at NUM = 100000(stack overflow).
```
$ node normal_sum.js
NUM: 100000, result: 166671666700000
time: 3.859s
$ node recursive_sum.js
/Users/mmiyauchi/Develop/private/recursive/recursive_sum.js:3
const calcSum = (num) => {
                ^

RangeError: Maximum call stack size exceeded
    at calcSum (/Users/mmiyauchi/Develop/private/recursive/recursive_sum.js:3:17)
    at calcSum (/Users/mmiyauchi/Develop/private/recursive/recursive_sum.js:7:16)
    at calcSum (/Users/mmiyauchi/Develop/private/recursive/recursive_sum.js:7:16)
    at calcSum (/Users/mmiyauchi/Develop/private/recursive/recursive_sum.js:7:16)
    at calcSum (/Users/mmiyauchi/Develop/private/recursive/recursive_sum.js:7:16)
    at calcSum (/Users/mmiyauchi/Develop/private/recursive/recursive_sum.js:7:16)
    at calcSum (/Users/mmiyauchi/Develop/private/recursive/recursive_sum.js:7:16)
    at calcSum (/Users/mmiyauchi/Develop/private/recursive/recursive_sum.js:7:16)
    at calcSum (/Users/mmiyauchi/Develop/private/recursive/recursive_sum.js:7:16)
    at calcSum (/Users/mmiyauchi/Develop/private/recursive/recursive_sum.js:7:16)
```


### Run at
```
- MacBook Pro (13-inch, 2019, Four Thunderbolt 3 ports)
2.8 GHz Intel Core i7, 16 GB 2133 MHz LPDDR3.  

- Node.js v13.7

- Apple LLVM version 10.0.1 (clang-1001.0.46.4)
  Target: x86_64-apple-darwin18.7.0
  Thread model: posix
```