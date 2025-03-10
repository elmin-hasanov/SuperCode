//-> wir koennen alles, was in einer anderen Datei / Modul verwendet werden soll, mit dem Schluesselwort export kennzeichen

export const DISCOUNT = 5.8;

export function cacluatePrice(salesPrice: number) {
  return salesPrice - (salesPrice * DISCOUNT) / 100;
}

export const nochIrgendeineVar = "Lorem Ipsum,...";

export const automaticVar = "Ich wurde automatisch erkannt";
