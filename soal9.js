// Soal No 9: tentukan user yang company huruf belakang nya berawal E dan ada berapa jumlah user nya

// Import data dari file data.json
const data = require("./jsonFile/data.json");

// Fungsi untuk mencari user yang nama company-nya berakhiran huruf E dan menentukan jumlah user-nya
let userCompany = (arr) => {
  // Tempat untuk mengumpulkan array yang sesuai dengan kriteria diatas
  let result = [];

  // Perulangan untuk memeriksa data array satu persatu
  for (let i = 0; i < arr.length; i++) {
    // untuk mengambil object company yang ada dalam array
    let company = arr[i].company;
    // Memeriksa setiap array yang memiliki nama company berakhiran dengan huruf E dan memasukkan hasil pemeriksaan kedalam result
    if (company.charAt(company.length - 1) === "E") {
      result.push(arr[i]);
    }
  }
  //Memeriksa apakah ada data yang sesuai dengan kriteria
  if (result.length === 0) {
    console.log("Data pengguna tidak ditemukan.");
  } else {
    //Ngeprint data array yang memenuhi kriteria
    console.log(
      "Data user yang bekerja di company yang berakhiran dengan huruf E yaitu: "
    );
    for (let user of result) {
      console.log(user);
    }
  }

  // Ngeprint jumlah data yang memenuhi kriteria
  console.log(
    `Jumlah user yang bekerja di company yang berakhiran dengan huruf E yaitu: ${result.length}`
  );
};

// Memanggil fungsi untuk mencari dan menampilkan data
userCompany(data);
