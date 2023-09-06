//Soal No 12: tentukan user yang mempunyai nama kurang dari 10 karakter dan umur nya diatas 30 atau gender nya Male dan eyeColor nya brown
const data = require("./jsonFile/data.json");

// Fungsi untuk mencari user yang mempunyai nama kurang dari 10 karakter dan umur nya 30 atau gender nya Male dan eyeColor nya brown
function filterNameAgeGander(arr) {
  // Tempat untuk mengumpulkan array yang sesuai dengan kriteria diatas
  result = [];

  // Perulangan untuk memeriksa data array satu persatu
  for (let i = 0; i < arr.length; i++) {
    // Menginisialisasi nama setiap object pada array
    let shortName = arr[i].name.length;
    let age = arr[i].age;
    let gender = arr[i].gender;
    let eyeColor = arr[i].eyeColor;

    // Memeriksa setiap array yang memiliki nama kurang dari 10 karakter dan umur nya diatas 30 atau gender nya Male dan eyeColor nya brown dan memasukkan hasil pemeriksaan kedalam result
    if (
      shortName < 10 &&
      (age > 30 || (gender === "male" && eyeColor === "brown"))
    ) {
      result.push(arr[i]);
    }
  }

  //Memeriksa apakah ada data yang sesuai dengan kriteria
  if (result.length === 0) {
    console.log("Data pengguna tidak ditemukan.");
  } else {
    //Ngeprint data array yang memenuhi kriteria
    console.log(
      "Data user yang memiliki nama kurang dari 10 karakter dan umur nya diatas 30 atau gender nya Male dan eyeColor nya brown: "
    );
    for (let user of result) {
      console.log(user);
    }
  }
}

// Memanggil fungsi untuk mencari dan menampilkan data
filterNameAgeGander(data);
