## Hash Table

1. [What is a Hash Tables](#What-is-a-Hash-Tables?)
2. [Why Should I Care?](#Why-Should-I-Care?)
3. [What Makes for a Good Hash?](#What-Makes-for-a-Good-Hash?)

### What is a Hash Tables?
* Hash tables are used to store key-value pairs.

### Why Should I Care?
* Nearly every programming language has some sort of hash table data structure
* Because of their speed, hash tables are very commonly used!

### What Makes for a Good Hash?
1. Fast (i.e. constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly
3. Deterministic (same input yields same output)

### REFINING OUR HASH
1. Only hashes strings (we won't worry about this)
2. Not constant time - linear in key length
3. Could be a little more random

### Hashing Revisited

```javascript
function hash(key, arrayLen) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}
```

```javascript
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

```

### A HashTable Class

```javascript
class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}
```

### Set / Get

**set**
1. Accepts a key and a value
2. Hashes the key
3. Stores the key-value pair in the hash table array via separate chaining

**get**
1. Accepts a key
2. Hashes the key
3. Retrieves the key-value pair in the hash table
4. If the key isn't found, returns undefined

### Keys / Values

**keys**
1. Loops through the hash table array and returns an array of keys in the table

**values**
1. Loops through the hash table array and returns an array of values in the table

### BIG O of HASH TABLES
* Insert: O(1)
* Deletion: O(1)
* Access: O(1)

## Recap

* Hash tables are collections of key-value pairs

* Hash tables can find values quickly given a key

* Hash tables can add new key-values quickly

* Hash tables store data in a large array, and work by hashing the keys

* A good hash should be fast, distribute keys uniformly, and be deterministic

* Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index

* When in doubt, use a hash table!