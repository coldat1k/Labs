'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = 
{
    Danilo: '+380457794753', 
    Yurii: '+380784523668', 
    Oleksandra: '+380924742654', 
    Mikita: '+380932577823', 
    Andriy: '+380634568745'
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };