function parity(number) {

  if(number == 0) {
    return true;
  }
  else if (number == 1) {
    return false;
  }
  else 
    return parity(number - 2);
}

console.log(parity(6));