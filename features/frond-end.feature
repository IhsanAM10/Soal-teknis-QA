Feature: ### 3 Sub Sistem Front End

  Scenario: Menampilkan data suhu
    Given subsistem front end menerima data suhu dari Subsistem Perangkat IOT
    When data suhu diterima
    Then sistem dapat menampilkan data suhu

  Scenario: Menampilkan data intensitas cahaya
    Given subsistem front end menerima data intensitas cahaya dari Subsistem Back End
    When data intensitas cahaya diterima
    Then sistem dapat menampilkan data intensitas cahaya

  Scenario: Menyimpan data kelembaban
    Given subsistem front end menerima data kelembaban dari Subsistem Back End
    When data kelembaban diterima
    Then sistem dapat menyimpan data kelembaban

  Scenario: Menyimpan gambar kondisi perangkat serangga
    Given subsistem front end menerima gambar dari Subsistem Back End
    When gambar diterima
    Then sistem dapat menyimpan gambar kondisi perangkat serangga

  Scenario: Menyimpan nomor pengenal perangkat IoT
    Given subsistem front end menerima nomor pengenal dari Subsistem Back End
    When nomor pengenal diterima
    Then sistem dapat menyimpan nomor pengenal perangkat IoT

  Scenario: Menyimpan status aktif perangkat IoT
    Given subsistem front end menerima status aktif dari Subsistem Back End
    When status aktif diterima
    Then sistem dapat menyimpan status aktif perangkat IoT

  Scenario: Mengaktifkan sensor dari Subsistem Back End
    Given subsistem front end menerima data untuk mengaktifkan sensor
    When data diterima
    Then sistem dapat mengaktifkan sensor-sensor lingkungan

  Scenario: Menerima data menggunakan protokol MQTT
    Given subsistem front end menerima data menggunakan protokol MQTT
    When data diterima
    Then sistem dapat menyimpan data dari Subsistem Back End

  Scenario: Menampilkan hasil olahan data sensor suhu
    Given subsistem front end memiliki data hasil olahan sensor suhu
    When data ditampilkan
    Then sistem dapat menampilkan hasil olahan data sensor suhu

  Scenario: Menampilkan hasil olahan data sensor kelembaban
    Given subsistem front end memiliki data hasil olahan sensor kelembaban
    When data ditampilkan
    Then sistem dapat menampilkan hasil olahan data sensor kelembaban

  Scenario: Menampilkan hasil olahan data sensor intensitas cahaya
    Given subsistem front end memiliki data hasil olahan sensor intensitas cahaya
    When data ditampilkan
    Then sistem dapat menampilkan hasil olahan data sensor intensitas cahaya

  Scenario: Menampilkan gambar dari Object Storage
    Given subsistem front end memiliki akses ke gambar dari Object Storage
    When gambar diminta
    Then sistem dapat menampilkan gambar dari Object Storage

  Scenario: Menampilkan data dari DataBase Postgres
    Given subsistem front end memiliki data dari DataBase Postgres
    When data diminta
    Then sistem dapat menampilkan data dari DataBase Postgres

  Scenario: Menampilkan grafik hasil sensor berdasarkan waktu
    Given subsistem front end memiliki data sensor
    When pengguna meminta grafik berdasarkan filter jangka waktu
    Then sistem dapat menampilkan grafik hasil sensor

  Scenario: Menampilkan grafik hasil sensor berdasarkan lokasi
    Given subsistem front end memiliki data sensor
    When pengguna meminta grafik berdasarkan filter lokasi
    Then sistem dapat menampilkan grafik hasil sensor dalam bentuk peta

  Scenario: Menampilkan grafik hasil sensor berdasarkan identitas pengangkat IoT
    Given subsistem front end memiliki data sensor
    When pengguna meminta grafik berdasarkan filter identitas pengangkat
    Then sistem dapat menampilkan grafik hasil sensor

  Scenario: Menampilkan notifikasi keaktifan perangkat IoT
    Given subsistem front end menerima notifikasi keaktifan perangkat
    When notifikasi diterima
    Then sistem dapat menampilkan notifikasi mengenai keaktifan perangkat

  Scenario: Menampilkan notifikasi data baru
    Given subsistem front end menerima notifikasi data baru
    When notifikasi diterima
    Then sistem dapat menampilkan notifikasi mengenai data baru

  Scenario: Mengirim data ke Subsistem Back End
    Given subsistem front end memiliki data untuk dikirim
    When data dikirim
    Then sistem dapat mengirim data ke Subsistem Back End

  Scenario: Mengatur jadwal pengiriman data
    Given subsistem front end memiliki jadwal pengiriman data
    When jadwal diatur
    Then sistem dapat mengatur pengiriman data ke Subsistem Back End

  Scenario: Menambahkan data perangkat IoT
    Given subsistem front end memiliki data perangkat IoT baru
    When data ditambahkan
    Then sistem dapat menambahkan data perangkat IoT ke Subsistem Back End

  Scenario: Mengelola koleksi foto serangga
    Given subsistem front end memiliki koleksi foto serangga
    When pengguna menambah, mengedit, atau menghapus foto
    Then sistem dapat memperbarui koleksi foto di Subsistem Back End

  Scenario: Mengatur hak akses berdasarkan Role Based Access Control
    Given subsistem front end memiliki pengaturan hak akses
    When hak akses diatur
    Then sistem dapat mengatur hak akses berdasar Role Based Access Control
