function returnOne () {
    return 9;
}

const x: number = 9;

const y: number = returnOne();

if (x === y) {
console.log('Wird das gedruckt?');
}
