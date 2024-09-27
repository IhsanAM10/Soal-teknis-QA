Feature:  ### EPIC 2 Sub Sistem Back End

  Scenario: Menerima data dari sensor suhu
    Given subsistem back end siap menerima data
    When data suhu lingkungan diterima
    Then sistem dapat menyimpan data suhu

  Scenario: Menerima data dari sensor kelembaban
    Given subsistem back end siap menerima data
    When data kelembaban lingkungan diterima
    Then sistem dapat menyimpan data kelembaban

  Scenario: Menerima data dari sensor intensitas cahaya
    Given subsistem back end siap menerima data
    When data intensitas cahaya diterima
    Then sistem dapat menyimpan data intensitas cahaya

  Scenario: Menerima data gambar dari sensor
    Given subsistem back end siap menerima gambar
    When gambar kondisi perangkat serangga diterima
    Then sistem dapat menyimpan gambar ke Object Storage

  Scenario: Menerima nomor pengenal perangkat IoT
    Given subsistem back end siap menerima data nomor pengenal
    When nomor pengenal perangkat IoT diterima
    Then sistem dapat menyimpan data nomor pengenal perangkat

  Scenario: Menerima status aktif perangkat IoT
    Given subsistem back end siap menerima status perangkat
    When status aktif perangkat IoT diterima
    Then sistem dapat menyimpan status aktif perangkat IoT

  Scenario: Mengaktifkan sensor dari subsistem back end
    Given subsistem back end menerima perintah untuk mengaktifkan sensor
    When perintah diterima
    Then sistem dapat mengaktifkan sensor-sensor lingkungan

  Scenario: Menerima data menggunakan protokol MQTT
    Given subsistem back end menerima data melalui protokol MQTT
    When data diterima
    Then sistem dapat menyimpan data dari sensor-sensor

  Scenario: Mengirim data ke Sub Sistem Aplikasi Front End
    Given subsistem back end memiliki data sensor
    When data sensor diolah
    Then sistem dapat mengirim data yang diolah ke subsistem front end

  Scenario: Menyimpan data ke DataBase Postgres
    Given subsistem back end memiliki data untuk disimpan
    When data diterima
    Then sistem dapat menyimpan data ke DataBase Postgres
