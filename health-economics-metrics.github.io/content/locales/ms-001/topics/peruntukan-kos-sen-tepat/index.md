# Peruntukan Kos Sen Tepat

Memisahkan jumlah wang — geran dikongsi, bil infrastruktur, angka impak bajet — merentas beberapa penerima dengan aritmetik peratusan naif lazimnya menghasilkan bahagian yang tidak berjumlah semula kepada jumlah asal. Peruntukan sen tepat ialah pembetulannya: kaedah integer/perpuluhan, bekerja dalam unit mata wang minor (sen), yang menjamin bahagian berjumlah *tepat* keseluruhan, tidak kira betapa tidak sekata ia dibahagi. Mana-mana jurutera perisian yang perlu mendamaikan jumlah terbahagi hingga ke sen — gaji, pembayaran geran, caj balik perkhidmatan dikongsi — memerlukan corak ini, bukan peratusan titik terapung.

## Mengapa ia penting

Ini corak asas bernama dalam kejuruteraan perisian perusahaan: *Patterns of Enterprise Application Architecture* (2002) Martin Fowler mendokumenkan `Money` dan `Allocate` tepat kerana "bahagi $100 tiga cara" ialah masalah yang kod naif sentiasa salah, dan salah secara senyap — ralat muncul hanya apabila seseorang mendamaikan buku dan mendapati bahagian kurang (atau lebih) satu sen daripada jumlah. Dalam kerja ekonomi kesihatan dan kewangan NHS ini bukan akademik: jumlah impak bajet dipecahkan merentas tapak, tahun atau direktorat; kos infrastruktur dan pelesenan dikongsi diperuntukkan merentas jabatan mengikut bilangan kakitangan atau bahagian aktiviti. Setiap pecahan itu mesti berdamai tepat, kerana pengarah kewangan yang diserahkan bahagian yang tidak berjumlah kepada jumlah berhenti mempercayai seluruh model.

## Matematiknya

```
Kaedah naif (rosak):
  bahagian_i = round(jumlah × saham_i / Σ saham)   — membundar setiap bahagian secara bebas

Kaedah tepat (baki terbesar / "peruntukan baki terbesar"):
  1. asas_i = floor(jumlah_unit_minor × saham_i / Σ saham)   — hanya unit minor (sen) bulat
  2. baki = jumlah_unit_minor − Σ asas_i                     — sen berlebihan, sentiasa < bilangan penerima
  3. agihkan 1 unit minor tambahan kepada setiap `baki` penerima dengan
     baki pecahan terbesar daripada langkah 1, sehingga lebihan habis

Hasil: Σ bahagian_i == jumlah, sentiasa, secara pembinaan.
```

Kaedah tepat tidak pernah membundar bahagian secara terasing — ia membundar *keseluruhan peruntukan* sebagai satu operasi, itulah yang menjadikan invarian jumlah terpegang.

## Contoh penyelesaian

Pisahkan $100.00 tiga cara sama (`saham = [1, 1, 1]`).

Kaedah naif: $100.00 ÷ 3 = $33.333…, dibundar secara bebas ke sen terdekat memberi $33.33 bagi setiap penerima. Dijumlah: $33.33 × 3 = $99.99 — satu sen lenyap, dan tiada butiran baris tunggal yang cukup "salah" untuk dikesan secara pemeriksaan.

Kaedah tepat: `asas` = $33.33 untuk ketiga-tiganya (9,999 unit minor keseluruhan daripada `floor(10,000 / 3) = 3,333` sen setiap satu), meninggalkan baki 1 sen (10,000 − 9,999). Sen lebihan tunggal itu diberikan kepada penerima yang mempunyai baki pecahan terbesar dalam pembahagian — penerima khusus ialah butiran pemutus seri dalaman, bukan sesuatu yang penelefon patut bergantung. Dua penerima berakhir dengan $33.33 dan satu dengan $33.34, dan ketiga-tiga bahagian berjumlah tepat $100.00.

Ini tepat aritmetik yang diperlukan [analisis impak bajet](../analisis-impak-bajet/) setiap kali angka impak bajet keseluruhan perlu dipisahkan merentas tapak, kohort atau tahun kewangan dan didamaikan kembali dengan jumlah diterbitkan — lihat [rollup kos selamat mata wang](../rollup-kos-selamat-mata-wang/) untuk masalah pasangan menjumlahkan banyak butiran baris sedemikian tanpa hanyutan.

## Kaitan dengan kejuruteraan perisian

Ini secara literal "corak Money" daripada seni bina perisian perusahaan — corak asas bernama untuk kelas pepijat tepat ini, bukan helah sekali pakai. Kegagalan pendamaian kewangan sebenar telah dihantar daripada kelas pepijat tepat ini: pecahan peratusan dikira dalam `f64`, dibundar bagi setiap penerima, dan tidak pernah disemak terhadap jumlah asal. Ia berkait terus dengan modul [jumlah kos pemilikan](../jumlah-kos-pemilikan/) repositori ini, yang kini menjumlahkan kos titik terapung biasa merentas tahun dan pilihan — disiplin ketepatan sama terpakai apabila jumlah TCO atau impak bajet mesti diperuntukkan dan bukan sekadar dijumlahkan.

## Perangkap

- **Peratusan-kemudian-bundar dan bukan baki-terbesar**: memperuntukkan dengan peratusan titik terapung dan membundar setiap penerima secara bebas, yang mengumpul ralat pembundaran dan jarang berjumlah semula kepada jumlah, terutama merentas banyak penerima.
- **Mengabaikan eksponen unit minor mata wang**: mengandaikan setiap mata wang mempunyai 2 tempat perpuluhan — Yen Jepun 0, sesetengah mata wang 3 — pecahan peratusan buatan tangan biasanya mengeraskan 2 dan rosak senyap bagi mata wang lain; rutin peruntukan tepat membaca eksponen daripada mata wang itu sendiri (ISO 4217).
- **Memperuntukkan semula baki yang telah diperuntukkan**: menjalankan rutin peruntukan sekali lagi pada baki daripada peruntukan terdahulu, tanpa semakan idempotensi, yang boleh mengkredit sen sama dua kali kepada penerima sama.

## Sumber

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` and `Allocate` patterns.
- ISO 4217 — currency and funds code standard, which defines each currency's minor-unit exponent.
