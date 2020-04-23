# Javasript recursive vs normal-loop

## Usage

```
$ node normal_sum.js
$ node recursive_sum.js
```

## Result
```
$ node recursive_sum.js
NUM: 10000, result: 166716670000
time: 248.981ms
$ node normal_sum.js
NUM: 10000, result: 166716670000
time: 38.098ms
```

`recursive_sum.js` isn't work at NUM = 100000.
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

Run at
```
MacBook Pro (13-inch, 2019, Four Thunderbolt 3 ports)
2.8 GHz Intel Core i7, 16 GB 2133 MHz LPDDR3.  
Node.js v13.7
```