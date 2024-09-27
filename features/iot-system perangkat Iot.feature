Feature: ### EPIC 1 Sub Sistem Perangkat IoT

  Scenario: Deteksi suhu lingkungan
    Given sistem memiliki sensor suhu
    When sensor mengukur suhu lingkungan
    Then sistem dapat mendeteksi suhu lingkungan

  Scenario: Deteksi kelembaban lingkungan
    Given sistem memiliki sensor kelembaban
    When sensor mengukur kelembaban udara
    Then sistem dapat mendeteksi kelembaban udara

  Scenario: Deteksi intensitas cahaya lingkungan
    Given sistem memiliki sensor intensitas cahaya
    When sensor mengukur intensitas cahaya
    Then sistem dapat mendeteksi intensitas cahaya

  Scenario: Mengambil gambar kondisi perangkat serangga
    Given sistem memiliki kamera untuk mengambil gambar
    When sistem mengambil gambar kondisi perangkat serangga
    Then sistem dapat menyimpan gambar kondisi perangkat serangga

  Scenario: Pengisian daya dari solar panel
    Given sistem terhubung ke solar panel
    When solar panel menghasilkan daya
    Then sistem dapat mengisi daya dari solar panel
