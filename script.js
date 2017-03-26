function parity(number) {

  if (number < 0) {     // dzięki temu zabiegowi będziemy mogli
    number *= -1;       // badać liczby ujemne nie powodując błędu polegającego na  
  }                     // nieskończonej ilości wywołań funkcji przez samą siebie


  if (number == 0) {
    return true;
  }
  else if (number == 1) {
    return false;
  }
  else 
    return parity(number - 2);    // tu tworzymy rekurencje korzystając z własności parzystości liczb
}

console.log(parity(-15));         // tu wywołujemy funkcję sprawdzania parzystości liczby -15