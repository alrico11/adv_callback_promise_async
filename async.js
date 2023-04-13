function tambahPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject(new Error("Input harus berupa angka"));
        }
        resolve(a + b);
    });
}

function kurangPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject(new Error("Input harus berupa angka"));
        }
        resolve(a - b);
    });
}

function kaliPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject(new Error("Input harus berupa angka"));
        }
        resolve(a * b);
    });
}

function bagiPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject(new Error("Input harus berupa angka"));
        } else if (b === 0) {
            reject(new Error("Tidak bisa dibagi dengan 0"));
        }
        resolve(a / b);
    });
}

function pangkatPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject(new Error("Input harus berupa angka"));
        }
        resolve(Math.pow(a, b));
    });
}


async function hitungA() {
try {
const hasilBagi = await bagiPromise(375, 125);
const hasilPangkat = await pangkatPromise(3, 2);
const hasilKali = await kaliPromise(hasilBagi, hasilPangkat);
const hasilKurang1 = await kurangPromise(hasilKali, 750);
const hasilKali2 = await kaliPromise(96, 10);
const hasilKali3 = await kaliPromise(hasilKali2, 84);
const hasilBagi2 = await bagiPromise(hasilKali3, 12);
const hasilAkhir = await tambahPromise(hasilKurang1, hasilBagi2);
console.log("HASIL A = ",hasilAkhir);
} catch (error) {
console.log(error.message);
}
}
hitungA();


async function hitungB() {
try {
const hasilBagi = await bagiPromise(625, 5);
const hasilKali = await kaliPromise(84, 96);
const hasilBagi2 = await bagiPromise(hasilKali, 12);
const hasilKali2 = await kaliPromise(hasilBagi2, 96);
const hasilKurang = await kurangPromise(500, hasilBagi);
const hasilAkhir = await tambahPromise(hasilKali2, hasilKurang);
console.log("HASIL B = ",hasilAkhir);
} catch (error) {
console.log(error.message);
}
}
hitungB();


async function hitungC() {
try {
const hasilBagi = await bagiPromise(750, 2);
const hasilBagi2 = await bagiPromise(125, 5);
const hasilKali = await kaliPromise(96, hasilBagi2);
const hasilKali2 = await kaliPromise(375, 84);
const hasilAkhir = await tambahPromise(hasilKali, hasilKali2, hasilBagi);
console.log("HASIL C = ",hasilAkhir);
} catch (error) {
console.log(error.message);
}
}
hitungC();


async function hitungD() {
try {
const hasilBagi = await bagiPromise(750, 125);
const hasilKali = await kaliPromise(96, 10);
const hasilBagi2 = await bagiPromise(500, 250);
const hasilKali2 = await kaliPromise(hasilKali, hasilBagi2);
const hasilKurang = await kurangPromise(1000, hasilBagi);
const hasilAkhir = await tambahPromise(hasilKali2, hasilKurang, 12);
console.log("HASIL D = ",hasilAkhir);
} catch (error) {
console.log(error.message);
}
}
hitungD();


async function hitungE() {
try {
const hasilPangkat = await pangkatPromise(36, 2);
const hasilBagi = await bagiPromise(hasilPangkat, 72);
const hasilKali = await kaliPromise(125, 10);
const hasilKali2 = await kaliPromise(24, 3);
const hasilKurang = await kurangPromise(hasilKali, hasilKali2);
const hasilAkhir = await tambahPromise(hasilBagi, hasilKurang);
console.log("HASIL E = ",hasilAkhir);
} catch (error) {
console.log(error.message);
}
}
hitungE();


async function hitungF() {
try {
const hasilBagi = await bagiPromise(500, 100);
const hasilKali = await kaliPromise(hasilBagi, 20);
const hasilKali2 = await kaliPromise(84, 2);
const hasilBagi2 = await bagiPromise(125, 5);
const hasilKurang = await kurangPromise(hasilKali, hasilBagi2);
const hasilAkhir = await tambahPromise(hasilKali2, hasilKurang);
console.log("HASIL F = ",hasilAkhir);
} catch (error) {
console.log(error.message);
}
}
hitungF();


async function hitungG() {
try {
const hasilKali = await kaliPromise(375, 2);
const hasilBagi = await bagiPromise(750, 25);
const hasilBagi2 = await bagiPromise(1000, 500);
const hasilKali2 = await kaliPromise(hasilBagi2, hasilBagi);
const hasilAkhir = await tambahPromise(hasilKali, hasilKali2);
console.log("HASIL G = ",hasilAkhir);
} catch (error) {
console.log(error.message);
}
}
hitungG();


async function hitungH() {
try {
const hasilPangkat = await pangkatPromise(96, 2);
const hasilKali = await kaliPromise(12, 12);
const hasilKali2 = await kaliPromise(hasilKali, 2);
const hasilKurang = await kurangPromise(hasilPangkat, 84);
const hasilAkhir = await tambahPromise(hasilKali2, hasilKurang);
console.log("HASIL H = ",hasilAkhir);
} catch (error) {
console.log(error.message);
}
}
hitungH();


async function hitungI() {
try {
const hasilBagi = await bagiPromise(750, 25);
const hasilBagi2 = await bagiPromise(375, 125);
const hasilBagi3 = await bagiPromise(72, 12);
const hasilKali = await kaliPromise(84, 12);
const hasilKali2 = await kaliPromise(hasilBagi, hasilBagi2);
const hasilKali3 = await kaliPromise(hasilBagi3, hasilKali2);
const hasilAkhir = await tambahPromise(hasilKali, hasilKali3);
console.log("HASIL I = ",hasilAkhir);
} catch (error) {
console.log(error.message);
}
}
hitungI();


async function hitungJ() {
try {
const hasilBagi = await bagiPromise(625, 5);
const hasilPangkat = await pangkatPromise(12, 2);
const hasilBagi2 = await bagiPromise(375, 125);
const hasilKali = await kaliPromise(375, 84);
const hasilKurang = await kurangPromise(hasilBagi, hasilKali);
const hasilAkhir = await tambahPromise(hasilPangkat, hasilBagi2, hasilKurang);
console.log("HASIL J = ",hasilAkhir);
} catch (error) {
console.log(error.message);
}
}
hitungJ();


async function hitungK() {
try {
const hasilBagi = await bagiPromise(250, 25);
const hasilKali = await kaliPromise(36, 2);
const hasilBagi2 = await bagiPromise(hasilKali, 72);
const hasilKali2 = await kaliPromise(125, 10);
const hasilKurang = await kurangPromise(hasilBagi, hasilKali2);
const hasilAkhir = await tambahPromise(hasilBagi2, hasilKurang);
console.log("HASIL K = ",hasilAkhir);
} catch (error) {
console.log(error.message);
}
}
hitungK();


async function hitungL() {
try {
const hasilBagi = await bagiPromise(375, 125);
const hasilKali = await kaliPromise(hasilBagi, 100);
const hasilBagi2 = await bagiPromise(500, 250);
const hasilKali2 = await kaliPromise(hasilBagi2, 50);
const hasilKali3 = await kaliPromise(96, 10);
const hasilKurang = await kurangPromise(hasilKali3, hasilKali);
const hasilAkhir = await tambahPromise(hasilKali2, hasilKurang);
console.log("HASIL L = ",hasilAkhir);
} catch (error) {
console.log(error.message);
}
}
hitungL();


async function hitungM() {
try {
const hasilBagi = await bagiPromise(750, 25);
const hasilBagi2 = await bagiPromise(375, 125);
const hasilPangkat = await pangkatPromise(96, 2);
const hasilPangkat2 = await pangkatPromise(12, 2);
const hasilBagi3 = await bagiPromise(hasilPangkat, hasilPangkat2);
const hasilKurang = await kurangPromise(hasilBagi, hasilBagi2);
const hasilAkhir = await tambahPromise(hasilKurang, hasilBagi3);
console.log("HASIL M = ",hasilAkhir);
} catch (error) {
console.log(error.message);
}
}
hitungM();

async function hitungN() {
try {
const hasilBagi = await bagiPromise(1000, 500);
const hasilBagi2 = await bagiPromise(375, 125);
const hasilBagi3 = await bagiPromise(72, 12);
const hasilKali = await kaliPromise(hasilBagi, hasilBagi2);
const hasilKali2 = await kaliPromise(hasilBagi3, hasilKali);
const hasilKali3 = await kaliPromise(84, 12);
const hasilAkhir = await kurangPromise(hasilKali2, hasilKali3);
console.log("HASIL N = ",hasilAkhir);
} catch (error) {
console.log(error.message);
}
}
hitungN();

async function hitungO() {
try {
const hasilPangkat = await pangkatPromise(12, 2);
const hasilBagi = await bagiPromise(500, 250);
const hasilBagi2 = await bagiPromise(375, 125);
const hasilKali = await kaliPromise(hasilBagi, hasilBagi2);
const hasilKurang = await kurangPromise(96, hasilPangkat);
const hasilKali2 = await kaliPromise(hasilBagi, hasilKurang);
const hasilKali3 = await kaliPromise(84, 2);
const hasilAkhir = await kurangPromise(hasilKali2, hasilKali3);
console.log("HASIL O = ",hasilAkhir);
} catch (error) {
console.log(error.message);
}
}
hitungO();