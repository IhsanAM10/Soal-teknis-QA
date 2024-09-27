const { Given, When, Then } = require("@cucumber/cucumber");

Given(
  "subsistem front end menerima data suhu dari subsistem perangkat IoT",
  function () {
    // Inisialisasi penerimaan data suhu dari subsistem perangkat IoT
  }
);

When("data suhu diterima", function () {
  // Simulasi penerimaan data suhu
});

Then("sistem dapat menampilkan data suhu", function () {
  // Verifikasi bahwa data suhu telah ditampilkan
});

Given(
  "subsistem front end menerima data intensitas cahaya dari subsistem back end",
  function () {
    // Inisialisasi penerimaan data intensitas cahaya dari subsistem back end
  }
);

When("data intensitas cahaya diterima", function () {
  // Simulasi penerimaan data intensitas cahaya
});

Then("sistem dapat menampilkan data intensitas cahaya", function () {
  // Verifikasi bahwa data intensitas cahaya telah ditampilkan
});

Given(
  "subsistem front end menerima data kelembaban dari subsistem back end",
  function () {
    // Inisialisasi penerimaan data kelembaban dari subsistem back end
  }
);

When("data kelembaban diterima", function () {
  // Simulasi penerimaan data kelembaban
});

Then("sistem dapat menyimpan data kelembaban", function () {
  // Verifikasi bahwa data kelembaban telah disimpan
});

Given(
  "subsistem front end menerima gambar kondisi perangkat serangga",
  function () {
    // Inisialisasi penerimaan gambar kondisi perangkat serangga
  }
);

When("gambar diterima", function () {
  // Simulasi penerimaan gambar
});

Then("sistem dapat menyimpan gambar kondisi perangkat serangga", function () {
  // Verifikasi bahwa gambar telah disimpan
});

Given("subsistem front end menerima nomor pengenal perangkat IoT", function () {
  // Inisialisasi penerimaan nomor pengenal perangkat IoT
});

When("nomor pengenal diterima", function () {
  // Simulasi penerimaan nomor pengenal
});

Then("sistem dapat menyimpan nomor pengenal perangkat", function () {
  // Verifikasi bahwa nomor pengenal telah disimpan
});

Given("subsistem front end menerima status aktif perangkat IoT", function () {
  // Inisialisasi penerimaan status aktif perangkat IoT
});

When("status diterima", function () {
  // Simulasi penerimaan status aktif
});

Then("sistem dapat menyimpan status aktif perangkat IoT", function () {
  // Verifikasi bahwa status aktif telah disimpan
});

Given(
  "subsistem front end menerima data untuk mengaktifkan sensor",
  function () {
    // Inisialisasi penerimaan data untuk mengaktifkan sensor
  }
);

When("perintah diterima", function () {
  // Simulasi penerimaan perintah
});

Then("sistem dapat mengaktifkan sensor-sensor lingkungan", function () {
  // Verifikasi bahwa sensor-sensor telah diaktifkan
});

Given("subsistem front end menerima data melalui protokol MQTT", function () {
  // Inisialisasi penerimaan data melalui MQTT
});

When("data diterima", function () {
  // Simulasi penerimaan data
});

Then("sistem dapat menyimpan data dari subsistem back end", function () {
  // Verifikasi bahwa data telah disimpan
});

Given("subsistem front end memiliki data sensor suhu", function () {
  // Inisialisasi data sensor suhu
});

When("data sensor suhu diolah", function () {
  // Simulasi pengolahan data sensor suhu
});

Then("sistem dapat menampilkan hasil olahan data suhu", function () {
  // Verifikasi bahwa hasil olahan data suhu ditampilkan
});

Given(
  "subsistem front end memiliki data sensor intensitas cahaya",
  function () {
    // Inisialisasi data sensor intensitas cahaya
  }
);

When("data intensitas cahaya ditampilkan", function () {
  // Simulasi menampilkan data intensitas cahaya
});

Then("sistem dapat menampilkan data intensitas cahaya", function () {
  // Verifikasi bahwa data intensitas cahaya ditampilkan
});

Given("subsistem front end memiliki data kelembaban", function () {
  // Inisialisasi data kelembaban
});

When("data kelembaban ditampilkan", function () {
  // Simulasi menampilkan data kelembaban
});

Then("sistem dapat menampilkan data kelembaban", function () {
  // Verifikasi bahwa data kelembaban ditampilkan
});

Given(
  "subsistem front end menerima gambar dari subsistem back end",
  function () {
    // Inisialisasi penerimaan gambar dari subsistem back end
  }
);

When("gambar diterima", function () {
  // Simulasi penerimaan gambar
});

Then("sistem dapat menampilkan gambar dari Object Storage", function () {
  // Verifikasi bahwa gambar ditampilkan dari Object Storage
});

Given("subsistem front end memiliki data dari DataBase Postgres", function () {
  // Inisialisasi data dari DataBase Postgres
});

When("data diterima", function () {
  // Simulasi penerimaan data
});

Then("sistem dapat menampilkan data dari DataBase Postgres", function () {
  // Verifikasi bahwa data ditampilkan dari DataBase Postgres
});

Given("subsistem front end memiliki data sensor", function () {
  // Inisialisasi data sensor
});

When("pengguna memilih filter jangka waktu", function () {
  // Simulasi pemilihan filter jangka waktu
});

Then("sistem dapat menampilkan grafik hasil sensor", function () {
  // Verifikasi bahwa grafik hasil sensor ditampilkan
});

Given("subsistem front end memiliki data sensor", function () {
  // Inisialisasi data sensor
});

When("pengguna memilih filter lokasi", function () {
  // Simulasi pemilihan filter lokasi
});

Then(
  "sistem dapat menampilkan grafik hasil sensor dalam bentuk peta",
  function () {
    // Verifikasi bahwa grafik hasil sensor dalam bentuk peta ditampilkan
  }
);

Given("subsistem front end memiliki data sensor", function () {
  // Inisialisasi data sensor
});

When("pengguna memilih filter identitas pengangkat", function () {
  // Simulasi pemilihan filter identitas pengangkat
});

Then("sistem dapat menampilkan grafik hasil sensor", function () {
  // Verifikasi bahwa grafik hasil sensor ditampilkan
});

Given("subsistem front end menerima notifikasi keaktifan", function () {
  // Inisialisasi penerimaan notifikasi keaktifan
});

When("notifikasi diterima", function () {
  // Simulasi penerimaan notifikasi
});

Then(
  "sistem dapat menampilkan notifikasi mengenai keaktifan perangkat IoT",
  function () {
    // Verifikasi bahwa notifikasi keaktifan ditampilkan
  }
);

Given("subsistem front end menerima notifikasi data baru", function () {
  // Inisialisasi penerimaan notifikasi data baru
});

When("notifikasi diterima", function () {
  // Simulasi penerimaan notifikasi
});

Then("sistem dapat menampilkan notifikasi mengenai data baru", function () {
  // Verifikasi bahwa notifikasi data baru ditampilkan
});

Given(
  "subsistem front end mengatur data untuk mengaktifkan sensor",
  function () {
    // Inisialisasi pengaturan data untuk mengaktifkan sensor
  }
);

When("data dikirim", function () {
  // Simulasi pengiriman data
});

Then("sistem dapat mengirim data ke subsistem back end", function () {
  // Verifikasi bahwa data telah dikirim ke subsistem back end
});

Given("subsistem front end memiliki jadwal pengiriman data", function () {
  // Inisialisasi jadwal pengiriman data
});

When("jadwal diatur", function () {
  // Simulasi pengaturan jadwal
});

Then(
  "sistem dapat mengatur jadwal pengiriman data ke subsistem back end",
  function () {
    // Verifikasi bahwa jadwal pengiriman data telah diatur
  }
);

Given("subsistem front end memiliki data perangkat IoT", function () {
  // Inisialisasi data perangkat IoT
});

When("data ditambahkan", function () {
  // Simulasi penambahan data
});

Then(
  "sistem dapat menambahkan data perangkat IoT ke subsistem back end",
  function () {
    // Verifikasi bahwa data perangkat IoT telah ditambahkan
  }
);

Given("subsistem front end memiliki data foto serangga", function () {
  // Inisialisasi data foto serangga
});

When("foto ditambahkan, diedit, atau dihapus", function () {
  // Simulasi pengelolaan foto
});

Then("sistem dapat mengelola foto untuk koleksi serangga", function () {
  // Verifikasi bahwa foto telah dikelola
});

Given("subsistem front end memiliki pengaturan hak akses", function () {
  // Inisialisasi pengaturan hak akses
});

When("hak akses diatur", function () {
  // Simulasi pengaturan hak akses
});

Then(
  "sistem dapat mengatur hak akses berdasarkan Role Based Access Control",
  function () {
    // Verifikasi bahwa hak akses telah diatur
  }
);
