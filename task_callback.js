// fungsi callback untuk menjumlahkan
function tambah(a, b, callback) {
  callback(a + b);
}

// fungsi callback untuk mengurangi
function kurang(a, b, callback) {
  callback(a - b);
}

// fungsi callback untuk mengalikan
function kali(a, b, callback) {
  callback(a * b);
}

// fungsi callback untuk membagi
function bagi(a, b, callback) {
  callback(a / b);
}

// fungsi callback untuk mempangkatkan
function pangkat(a, b, callback) {
  callback(Math.pow(a, b));
}
console.log("====================================CALLBACK================================================");
// a. 375 / 125 * 3 ** 2 - 750 + 96 * 10 * 84 / 12
bagi(375, 125, function(result1) {
  pangkat(3, 2, function(result2) {
    kali(result1, result2, function(result3) {
      kurang(result3, 750, function(result4) {
        kali(96, 10, function(result5) {
          bagi(result5 * 84, 12, function(result6) {
            tambah(result4, result6, function(result7) {
              console.log("a. 375 / 125 * 3 ** 2 - 750 + 96 * 10 * 84 / 12= "+result7);
            });
          });
        });
      });
    });
  });
});

// b. 500 - 625 / 5 + 84 / 12 * 96 / 12
bagi(625, 5, function(result1) {
  kurang(500, result1, function(result2) {
    bagi(84, 12, function(result3) {
      bagi(96, 12, function(result4) {
        kali(result3, result4, function(result5) {
          tambah(result2, result5, function(result6) {
            console.log("b. 500 - 625 / 5 + 84 / 12 * 96 / 12= "+result6);
          });
        });
      });
    });
  });
});

// c. 750 / 2 + 125 / 5 * 96 / 12 + 375 * 84
bagi(750, 2, function(result1) {
  bagi(125, 5, function(result2) {
    bagi(96, 12, function(result3) {
      kali(result2, result3, function(result4) {
        kali(375, 84, function(result5) {
          tambah(result1, result4, function(result6) {
            tambah(result6, result5, function(result7) {
              console.log("c. 750 / 2 + 125 / 5 * 96 / 12 + 375 * 84= "+result7);
            });
          });
        });
      });
    });
  });
});

// d. 1000 - 750 / 125 - 12 + 96 * 10 * 500 / 250
bagi(750, 125, function(result1) {
  kurang(1000, result1, function(result2) {
    kurang(result2, 12, function(result3) {
      kali(96, 10, function(result4) {
        bagi(500, 250, function(result5) {
          kali(result4, result5, function(result6) {
            kurang(result3, result6, function(result7) {
              console.log("d. 1000 - 750 / 125 - 12 + 96 * 10 * 500 / 250= "+result7);
            });
          });
        });
      });
    });
  });
});

// e. 36 ** 2 / 72 + 125 * 10 - 24 * 3
pangkat(36, 2, function(result1) {
  bagi(result1, 72, function(result2) {
    kali(125, 10, function(result3) {
      kali(24, 3, function(result4) {
        kurang(result2 + result3, result4, function(result5) {
          console.log("e. 36 ** 2 / 72 + 125 * 10 - 24 * 3= "+result5);
        });
      });
    });
  });
});

// f. 500 / 100 * 20 + 84 * 2 - 125 / 5
bagi(500, 100, function(result1) {
  kali(result1, 20, function(result2) {
    kali(84, 2, function(result3) {
      bagi(125, 5, function(result4) {
        kurang(result2 + result3, result4, function(result5) {
          console.log("f. 500 / 100 * 20 + 84 * 2 - 125 / 5= "+result5);
        });
      });
    });
  });
});

// g. 375 * 2 - 750 / 25 + 1000 / 500
kali(375, 2, function(result1) {
  bagi(750, 25, function(result2) {
    bagi(1000, 500, function(result3) {
      tambah(result1 - result2, result3, function(result4) {
        console.log("g. 375 * 2 - 750 / 25 + 1000 / 500= "+result4);
      });
    });
  });
});

// h. 12 * 12 * 2 - 84 + 96 ** 2
kali(12, 12, function(result1) {
  pangkat(96, 2, function(result2) {
    tambah(result1 * 2, result2 - 84, function(result3) {
      console.log("h. 12 * 12 * 2 - 84 + 96 ** 2= "+result3);
    });
  });
});

// i. 750 / 25 * 375 / 125 * 72 / 12 + 84 * 12
bagi(750, 25, function(result1) {
  bagi(375, 125, function(result2) {
    bagi(72, 12, function(result3) {
      kali(result1, result2, function(result4) {
        kali(result4, result3, function(result5) {
          kali(84, 12, function(result6) {
            tambah(result5, result6, function(result7) {
              console.log("i. 750 / 25 * 375 / 125 * 72 / 12 + 84 * 12= "+result7);
            });
          });
        });
      });
    });
  });
});

// j. 96 / 12 ** 2 + 625 / 5 - 375 * 84
pangkat(12, 2, function(result1) {
  bagi(96, result1, function(result2) {
    bagi(625, 5, function(result3) {
      kali(375, 84, function(result4) {
        kurang(result2 + result3, result4, function(result5) {
          console.log("j. 96 / 12 ** 2 + 625 / 5 - 375 * 84= "+result5);
        });
      });
    });
  });
});

// k. 250 / 25 * 10 + 36 ** 2 / 72 - 125 * 10
bagi(250, 25, function(result1) {
  kali(result1, 10, function(result2) {
    pangkat(36, 2, function(result3) {
      bagi(result3, 72, function(result4) {
        kali(125, 10, function(result5) {
          kurang(result2 + result4, result5, function(result6) {
            console.log("k. 250 / 25 * 10 + 36 ** 2 / 72 - 125 * 10= "+result6);
          });
        });
      });
    });
  });
});

// l. 375 / 125 * 100 + 500 / 250 * 50 - 96 * 10
bagi(375, 125, function(result1) {
  kali(result1, 100, function(result2) {
    bagi(500, 250, function(result3) {
      kali(result3, 50, function(result4) {
        kali(96, 10, function(result5) {
          kurang(result2 + result4, result5, function(result6) {
            console.log("l. 375 / 125 * 100 + 500 / 250 * 50 - 96 * 10= "+result6);
          });
        });
      });
    });
  });
});

// m. 750 / 25 - 375 / 125 + 96 ** 2 / 12 ** 2
bagi(750, 25, function(result1) {
  bagi(375, 125, function(result2) {
    pangkat(96, 2, function(result3) {
      pangkat(12, 2, function(result4) {
        kurang(result1 - result2, result3 / result4, function(result5) {
          console.log("m. 750 / 25 - 375 / 125 + 96 ** 2 / 12 ** 2= "+result5);
        });
      });
    });
  });
});

// n. 1000 / 500 * 375 / 125 * 72 / 12 - 84 * 12
bagi(1000, 500, function(result1) {
  bagi(375, 125, function(result2) {
    bagi(72, 12, function(result3) {
      kali(result1, result2, function(result4) {
        kali(result4, result3, function(result5) {
          kali(84, 12, function(result6) {
            kurang(result5, result6, function(result7) {
              console.log("n. 1000 / 500 * 375 / 125 * 72 / 12 - 84 * 12= "+result7);
            });
          });
        });
      });
    });
  });
});

// o. 96 / 12 ** 2 - 500 / 250 * 375 / 125 + 84 * 2
pangkat(12, 2, function(result1) {
  bagi(500, 250, function(result2) {
    bagi(375, 125, function(result3) {
      kurang(96 / result1 - result2 * result3, 84 * 2, function(result4) {
        console.log("o. 96 / 12 ** 2 - 500 / 250 * 375 / 125 + 84 * 2= "+result4);
      });
    });
  });
});