function hash(key, arrayLen) {
    let total = 0;
    for(let i =0; i < key.length; i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

module.exports = hash;