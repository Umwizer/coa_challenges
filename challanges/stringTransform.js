function transformString(word) {
    const length = word.length;

    if (length % 3 === 0 && length % 5 === 0) {
        word = word.split('').reverse().join('');
        return word.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        return word.split('').reverse().join('');
    } else if (length % 5 === 0) {
        return word.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        return word;
    }
}

console.log(transformString("Hello World")); 
console.log(transformString("HelloWorld"));  
console.log(transformString("Hello"));      
