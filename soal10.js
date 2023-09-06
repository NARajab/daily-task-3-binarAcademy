//Soal No 10: tentukan user yang berumur dibawah 30 dan registered sesudah tahun 2018 dan berapa jumlah nya
const data = require("./jsonFile/data.json");

// Fungsi untuk mencari user yang umurnya dibawah 30 dan registerednya sesudah 2018
function filterAgeRegistered(arr) {
  // Tempat untuk mengumpulkan array yang sesuai dengan kriteria diatas
  let result = [];

  // Perulangan untuk memeriksa data array satu persatu
  for (let i = 0; i < arr.length; i++) {
    // Memeriksa setiap array yang memiliki age dibwah 30 dan regitered sesudah 2018 dan memasukkan hasil pemeriksaan kedalam result
    if (arr[i].age < 30 && arr[i].registered > "2018") {
      result.push(arr[i]);
    }
  }

  //Memeriksa apakah ada data yang sesuai dengan kriteria
  if (result.length === 0) {
    console.log("Data pengguna tidak ditemukan.");
  } else {
    //Ngeprint data array yang memenuhi kriteria
    console.log(
      "Data user yang berumur dibawah 30 dan registred nya sesudah tahun 2018: "
    );
    for (let user of result) {
      console.log(user);
    }
  }

  // Ngeprint jumlah data yang memenuhi kriteria
  console.log(
    `Jumlah user berumur dibawah 30 dan registred nya sesudah tahun 2018: ${result.length}`
  );
}

// Memanggil fungsi untuk mencari dan menampilkan data
filterAgeRegistered(data);
