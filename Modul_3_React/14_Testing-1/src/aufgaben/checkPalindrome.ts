const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const checkPalindrome = (phrase: string): boolean => {
  // const cleanPhrase = phrase.toLowerCase().replace(/[^a-z]/g, "")
  const cleanPhrase = phrase
    .toLowerCase()
    .split("")
    .filter((letter) => alphabet.includes(letter))
    .join("");
  const reversed = cleanPhrase.split("").reverse().join("");

  console.log({ cleanPhrase, reversed });
  return cleanPhrase === reversed;
};
