'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    { name: 'Danilo', phone: '+380457794753' },
    { name: 'Yurii', phone: '+380784523668' },
    { name: 'Oleksandra', phone: '+380924742654' },
    { name: 'Mikita', phone: '+380932577823' },
    { name: 'Andriy', phone: '+380634568745'},
];

const findPhoneByName = (name) => {
    for (const obj of phonebook) {
        if (obj.name === name) return obj.phone;
    }
};

module.exports = { phonebook, findPhoneByName };
