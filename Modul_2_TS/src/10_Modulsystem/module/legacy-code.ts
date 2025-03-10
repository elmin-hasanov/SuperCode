function twoPrint(end: number) {
  for (let i = 0; i < end; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

export { twoPrint as printOddNumbers };
