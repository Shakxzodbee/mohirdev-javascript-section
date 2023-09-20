function raqamlarniYigindisi(son) {
    var raqamlar = son.toString().split('');
    var yigindi = 0;

    for (var i = 0; i < raqamlar.length; i++) {
      yigindi += parseInt(raqamlar[i]);
    }
  
    return yigindi;
  }
  var son = 12345;
  var yigindi = raqamlarniYigindisi(son);
  console.log('Yigindi:', yigindi);