//Soal No 11: tentukan user yang mempunyai teman bernama Grace dan favorit fruit nya apple atau banana
const data = require("./jsonFile/data.json");

// Fungsi untuk mencari user yang mempunyai teman bernama grace dan favorite fruit nya apple atau banana
function nameFavFruit(arr) {
  // Tempat untuk mengumpulkan array yang sesuai dengan kriteria diatas
  let result = [];

  // Perulangan untuk memeriksa data array satu persatu
  for (let i = 0; i < arr.length; i++) {
    // untuk mengambil object friends yang ada dalam array
    let friends = arr[i].friends;

    // melakukan perulangan yang kedua untuk mengecek array yang terdapat pada friends
    for (let j = 0; j < friends.length; j++) {
      let friend = friends[j];

      // Memeriksa setiap array yang memiliki friends bernama Grace dan memiliki favorite fruit appel atau banana dan memasukkan hasil pemeriksaan kedalam result
      if (
        friend.name === "Grace" &&
        (arr[i].favoriteFruit === "apple" || arr[i].favoriteFruit === "banana")
      ) {
        result.push(arr[i]);
        break;
      }
    }
  }

  //Memeriksa apakah ada data yang sesuai dengan kriteria
  if (result.length === 0) {
    console.log("Data pengguna tidak ditemukan.");
  } else {
    //Ngeprint data array yang memenuhi kriteria
    console.log(
      "Data user yang memiliki teman bernama Grace dan memiliki favorite fruit appel atau banana: "
    );
    for (let user of result) {
      console.log(user);
    }
  }
}

// Memanggil fungsi untuk mencari dan menampilkan data
nameFavFruit(data);
