Feature: ### EPIC 1 Sub Sistem Komunikasi

  Scenario: Mengirim data suhu lingkungan
    Given sistem memiliki modem 4G
    When data suhu lingkungan diukur
    Then sistem dapat mengirim data suhu ke subsistem back end

  Scenario: Mengirim data kelembaban lingkungan
    Given sistem memiliki modem 4G
    When data kelembaban lingkungan diukur
    Then sistem dapat mengirim data kelembaban ke subsistem back end

  Scenario: Mengirim data intensitas cahaya
    Given sistem memiliki modem 4G
    When data intensitas cahaya diukur
    Then sistem dapat mengirim data intensitas cahaya ke subsistem back end

  Scenario: Mengirim nomor pengenal perangkat IoT
    Given sistem memiliki nomor pengenal perangkat
    When sistem mengirim data
    Then sistem dapat mengirim nomor pengenal ke subsistem back end

  Scenario: Menerima perintah dari subsistem back end
    Given sistem menerima perintah
    When perintah untuk mengaktifkan sensor diterima
    Then sistem dapat mengaktifkan sensor lingkungan
