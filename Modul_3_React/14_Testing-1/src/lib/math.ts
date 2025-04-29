export const add = (a: number | string, b: number | string): number => {
  if (isNaN(Number(a))) {
    throw new Error("First argument is not parseable as a number");
  }
  if (isNaN(Number(b))) {
    throw new Error("Second argument is not parseable as a number");
  }

  return Number(a) + Number(b);
};
