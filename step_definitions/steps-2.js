const { Given, When, Then } = require("@cucumber/cucumber");

Given("sistem memiliki modem 4G", function () {
  // Inisialisasi kondisi sistem dengan modem 4G
});

When("data suhu lingkungan diukur", function () {
  // Simulasi pengukuran suhu lingkungan
});

Then("sistem dapat mengirim data suhu ke subsistem back end", function () {
  // Verifikasi pengiriman data suhu ke subsistem back end
});

Given("sistem memiliki nomor pengenal perangkat", function () {
  // Inisialisasi kondisi sistem dengan nomor pengenal
});

When("sistem mengirim data", function () {
  // Simulasi pengiriman data
});

Then("sistem dapat mengirim nomor pengenal ke subsistem back end", function () {
  // Verifikasi pengiriman nomor pengenal
});

Given("sistem menerima perintah", function () {
  // Simulasi penerimaan perintah
});

When("perintah untuk mengaktifkan sensor diterima", function () {
  // Simulasi proses penerimaan perintah
});

Then("sistem dapat mengaktifkan sensor lingkungan", function () {
  // Verifikasi bahwa sensor telah diaktifkan
});
