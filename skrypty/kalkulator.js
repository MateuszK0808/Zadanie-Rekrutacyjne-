exports.zakres = function (suma){
  if (suma >= 100 && suma <= 1000)
  {
    stawka = 20;
    return stawka;
  }
  else if (suma > 1000 && suma <= 3000)
  {
    stawka = 70;
    return stawka;
  }
  else if (suma > 3000 && suma <= 6000){
    stawka = 130;
    return stawka;
  }
  else if (suma > 6000 && suma <= 9000){
    stawka = 180;
    return stawka;
  }
  else if (suma > 9000 && suma <= 10000){
    stawka = 200;
    return stawka;
  }
};

exports.czySzkoda = function (bezszkodowa){
  if (bezszkodowa) {
    szkoda = 0.95;
    return szkoda;
  }
  else
  {
    szkoda = 1.08;
    return szkoda;
  }
};

exports.ileRat = function (ile) {
  if (ile === 1) {
    rata = 0.98;
    return rata;
  }
  else if (ile === 2) {
    rata = 1;
    return rata;
  }
  else if (ile === 4) {
    rata = 1.04;
    return rata;
  }
};

exports.obliczanieSkladki = function (stawka, szkoda, rata) {
  skladka = Math.ceil((stawka*szkoda)*rata);
  return skladka;
};
