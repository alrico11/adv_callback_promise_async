const tambah = (a, b) => {
    return new Promise((resolve, reject) => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject("Input harus berupa angka!");
      } else {
        resolve(a + b);
      }
    });
  };
  
  const kurang = (a, b) => {
    return new Promise((resolve, reject) => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject("Input harus berupa angka!");
      } else {
        resolve(a - b);
      }
    });
  };
  
  const kali = (a, b) => {
    return new Promise((resolve, reject) => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject("Input harus berupa angka!");
      } else {
        resolve(a * b);
      }
    });
  };
  
  const bagi = (a, b) => {
    return new Promise((resolve, reject) => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject("Input harus berupa angka!");
      } else if (b === 0) {
        reject("Tidak bisa dibagi dengan 0!");
      } else {
        resolve(a / b);
      }
    });
  };
  
  const pangkat = (a, b) => {
    return new Promise((resolve, reject) => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject("Input harus berupa angka!");
      } else {
        resolve(a ** b);
      }
    });
  };
//a.(( 375 / 125) * (3 ** 2)) - 750 + (96 * 10 )* 84 / 12 = 5997
 bagi(375, 125)
.then((hasilBagi)=> pangkat(3,2)
.then((hasilPangkat)=> kali(hasilBagi,hasilPangkat)
.then((hasilKali1)=> kurang(hasilKali1,750)
.then((hasilKurang)=> kali(96,10)
.then((hasilKali)=> kali(hasilKali,84)
.then((hasilKali2)=> bagi(hasilKali2,12)
.then((hasilBagi1)=> tambah(hasilKurang,hasilBagi1))))
))))
  .then((res) => console.log("a. Hasil:", res))
  .catch((err) => console.log(err));

// b. 500 - 625 / 5 + 84 / 12 * 96 / 12 = 431
bagi(625, 5)
.then((hasilBagi)=> kurang(500,hasilBagi)
.then((res)=> bagi(84,12)
.then((res1)=> kali(res1,96)
.then((res1)=> bagi(res1,12)
.then((res2)=> tambah(res,res2))))))
.then((res) => console.log("b. Hasil:", res))
.catch((err) => console.log(err));

// // c. 750 / 2 + 125 / 5 * 96 / 12 + 375 * 84


bagi(750, 2)
.then((res) => bagi(125, 5)
.then((res1) => kali(res1, 96)
.then((res1) => bagi(res1, 12)
.then((res2) => kali(375, 84)
.then((res3) => tambah(res, res2)
.then((res4) => tambah(res4, res3)))))))
.then((res) => console.log("c. Hasil:", res))
.catch((err) => console.log(err));

// // d. 1000 - 750 / 125 - 12 + 96 * 10 * 500 / 250
bagi(750, 125)
.then((hasilBagi) => kali(96, 10)
.then((hasilKali1) => kali(hasilKali1, 500)
.then((hasilKali2) => bagi(hasilKali2, 250)
.then((hasilBagi1) => kurang(1000, hasilBagi)
.then((hasilKurang1) => kurang(hasilKurang1, 12)
.then((hasilKurang2) => tambah(hasilKurang2, hasilBagi1)))))))
.then((res) => console.log("d. Hasil:", res))
.catch((err) => console.log(err));

// Soal e
pangkat(36, 2)
.then((res) => bagi(res, 72)
.then((res1) => tambah(res1, 125 * 10)
.then((res2) => kurang(res2, 24 * 3))))
.then((res) => console.log("e. Hasil:", res))
.catch((err) => console.log(err));

kali(500, 0.01)
.then((hasilBagi)=> kali(hasilBagi, 20)
.then((hasilKali1)=> kali(84, 2)
.then((hasilKali2)=> bagi(125, 5)
.then((hasilBagi1)=> tambah(hasilKali1,hasilKali2)
.then((hasilTambah)=> tambah(hasilTambah,hasilBagi1))))))
.then((res) => console.log("f. Hasil:", res))
.catch((err) => console.log(err));

kali(375, 2)
.then((hasilKali1)=> bagi(750, 25)
.then((hasilBagi)=> kurang(hasilKali1, hasilBagi)
.then((hasilKurang)=> bagi(1000, 500)
.then((hasilBagi1)=> tambah(hasilKurang, hasilBagi1)
.then((hasilTambah)=> console.log("g. Hasil:", hasilTambah))))))
.catch((err) => console.log(err));

pangkat(96, 2)
.then((hasilPangkat)=> kali(12,12)
.then((hasilKali1)=> kali(hasilKali1,2)
.then((hasilKali2)=> kurang(hasilKali2,84)
.then((hasilKurang)=> tambah(hasilKurang,hasilPangkat)
.then((hasilTambah)=> console.log("h. Hasil:", hasilTambah))))))
.catch((err) => console.log(err));

bagi(750,25)
.then((hasilBagi)=> bagi(375,125)
.then((hasilBagi1)=> kali(hasilBagi,hasilBagi1)
.then((hasilKali1)=> bagi(72,12)
.then((hasilBagi2)=> kali(hasilKali1,hasilBagi2)
.then((hasilKali2)=> kali(84,12)
.then((hasilKali3)=> tambah(hasilKali2,hasilKali3)
.then((hasilTambah)=> tambah(hasilKali1,hasilTambah)))))
)))
.then((res) => console.log("i. Hasil:", res))
.catch((err) => console.log(err));



bagi(96,12)
.then((hasilBagi)=>pangkat(hasilBagi,2))
.then((hasilPangkat)=>bagi(625,5)
.then((hasilBagi2)=> kali(375,84)
.then((hasilKali)=>tambah(hasilPangkat,hasilBagi2)
.then((hasilTambah)=>kurang(hasilTambah,hasilKali)
.then((res) => console.log("j. Hasil:", res))))))
.catch((err) => console.log(err));
// Output: j. Hasil: -4986.666666666667

bagi(250, 25)
.then((hasilBagi1) => kali(hasilBagi1, 10)
.then((hasilKali1) => pangkat(36, 2)
.then((hasilPangkat) => bagi(hasilPangkat, 72)
.then((hasilBagi2) => kali(125, 10)
.then((hasilKali2) => kurang(hasilKali1, hasilBagi2)
.then((hasilKurang) => kurang(hasilKurang, hasilPangkat)
.then((hasilKurang) => tambah(hasilKurang, hasilBagi1))
)))
)))
.then((res) => console.log("k. Hasil:", res))
.catch((err) => console.log(err));

bagi(375, 125)
.then((hasilBagi)=> kali(hasilBagi, 100)
.then((hasilKali1)=> bagi(500, 250)
.then((hasilBagi1)=> kali(hasilBagi1, 50)
.then((hasilKali2)=> kurang(hasilKali1, hasilKali2)
.then((hasilKurang)=> kali(96, 10)
.then((hasilKali3)=> kurang(hasilKurang, hasilKali3))))
)))
.then((res) => console.log("l. Hasil:", res))
.catch((err) => console.log(err));

bagi(750, 25)
.then((hasilBagi1)=> bagi(375, 125)
.then((hasilBagi2)=> kurang(hasilBagi1, hasilBagi2)
.then((hasilKurang1)=> pangkat(96, 2)
.then((hasilPangkat)=> pangkat(12, 2)
.then((hasilPangkat2)=> bagi(hasilPangkat, hasilPangkat2)
.then((hasilBagi3)=> tambah(hasilKurang1, hasilBagi3))))
)))
.then((res) => console.log("m. Hasil:", res))
.catch((err) => console.log(err));


bagi(1000, 500)
.then((hasilBagi1)=> bagi(375, 125)
.then((hasilBagi2)=> kali(hasilBagi1, hasilBagi2)
.then((hasilKali1)=> bagi(72, 12)
.then((hasilBagi3)=> kurang(hasilKali1, hasilBagi3)
.then((hasilKurang)=> kali(84, 12)
.then((hasilKali2)=> kurang(hasilKurang, hasilKali2))))
)))
.then((res) => console.log("n. Hasil:", res))
.catch((err) => console.log(err));


pangkat(12, 2)
.then((hasilPangkat)=> bagi(96, hasilPangkat)
.then((hasilBagi1)=> bagi(500, 250)
.then((hasilBagi2)=> bagi(375, 125)
.then((hasilBagi3)=> kali(hasilBagi2, hasilBagi3)
.then((hasilKali1)=> tambah(hasilBagi1, hasilKali1)
.then((hasilTambah)=> kali(84, 2)
.then((hasilKali2)=> kurang(hasilTambah, hasilKali2))))
))))
.then((res) => console.log("o. Hasil:", res))
.catch((err) => console.log(err));