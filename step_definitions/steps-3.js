const { Given, When, Then } = require("@cucumber/cucumber");

Given("subsistem back end siap menerima data", function () {
  // Inisialisasi subsistem back end untuk menerima data
});

When("data suhu lingkungan diterima", function () {
  // Simulasi penerimaan data suhu
});

Then("sistem dapat menyimpan data suhu", function () {
  // Verifikasi bahwa data suhu telah disimpan
});

Given("subsistem back end siap menerima gambar", function () {
  // Inisialisasi subsistem back end untuk menerima gambar
});

When("gambar kondisi perangkat serangga diterima", function () {
  // Simulasi penerimaan gambar
});

Then("sistem dapat menyimpan gambar ke Object Storage", function () {
  // Verifikasi bahwa gambar telah disimpan
});

Given("subsistem back end siap menerima data nomor pengenal", function () {
  // Inisialisasi subsistem back end untuk menerima nomor pengenal
});

When("nomor pengenal perangkat IoT diterima", function () {
  // Simulasi penerimaan nomor pengenal
});

Then("sistem dapat menyimpan data nomor pengenal perangkat", function () {
  // Verifikasi bahwa nomor pengenal telah disimpan
});

Given("subsistem back end siap menerima status perangkat", function () {
  // Inisialisasi subsistem back end untuk menerima status
});

When("status aktif perangkat IoT diterima", function () {
  // Simulasi penerimaan status aktif
});

Then("sistem dapat menyimpan status aktif perangkat IoT", function () {
  // Verifikasi bahwa status aktif telah disimpan
});

Given(
  "subsistem back end menerima perintah untuk mengaktifkan sensor",
  function () {
    // Inisialisasi subsistem back end untuk menerima perintah
  }
);

When("perintah diterima", function () {
  // Simulasi penerimaan perintah
});

Then("sistem dapat mengaktifkan sensor-sensor lingkungan", function () {
  // Verifikasi bahwa sensor-sensor telah diaktifkan
});

Given("subsistem back end menerima data melalui protokol MQTT", function () {
  // Inisialisasi subsistem back end untuk menerima data MQTT
});

When("data diterima", function () {
  // Simulasi penerimaan data
});

Then("sistem dapat menyimpan data dari sensor-sensor", function () {
  // Verifikasi bahwa data dari sensor telah disimpan
});

Given("subsistem back end memiliki data sensor", function () {
  // Inisialisasi subsistem back end dengan data sensor
});

When("data sensor diolah", function () {
  // Simulasi pengolahan data sensor
});

Then(
  "sistem dapat mengirim data yang diolah ke subsistem front end",
  function () {
    // Verifikasi bahwa data telah dikirim ke front end
  }
);

Given("subsistem back end memiliki data untuk disimpan", function () {
  // Inisialisasi subsistem back end dengan data
});

When("data diterima", function () {
  // Simulasi penerimaan data untuk disimpan
});

Then("sistem dapat menyimpan data ke DataBase Postgres", function () {
  // Verifikasi bahwa data telah disimpan ke Postgres
});
