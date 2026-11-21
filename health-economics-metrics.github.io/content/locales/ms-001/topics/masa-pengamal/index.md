# Masa Pengamal

Masa pengamal ialah sumber paling terhad dalam kebanyakan sistem kesihatan. Mengukur nilai menjimatkan beberapa minit klinisian sehari memerlukan peralihan daripada matematik upah mudah kepada **kos peluang dan kapasiti sistem**: dalam perkhidmatan kesihatan kebangsaan, masa pengamal ialah kesesakan operasi yang tegar, bukan baris kos yang melentur.

## Mengapa ia penting

Anda tidak boleh dengan cepat menghasilkan lebih ramai GP, perunding atau jururawat pakar — saluran latihan berjalan 5–15 tahun, dan kekosongan kronik. Jadi sejam masa pengamal yang dijimatkan bukan "upah dielakkan" (pengamal masih dibayar); ia *kapasiti kesesakan yang dilepaskan*, dan kapasiti kesesakan bernilai apa yang dihasilkan kesesakan itu. Inilah sebabnya tuntutan "menjimatkan 10 minit setiap konsultasi" serentak yang paling lazim dan paling salah harga dalam kesihatan digital.

## Matematiknya

Tiga tahap penilaian, dengan kejujuran meningkat:

```
1. Asas upah:       jam × kadar gaji termuat (kos unit PSSRU)
                    — apa kos masa itu, bukan apa yang dihasilkannya
2. Asas output:     jam → temujanji/prosedur dibolehkan × nilai skim
                    (lihat national-tariff-and-unit-costs.md)
3. Asas kesesakan:  jika peranan ini memagari seluruh laluan, jam × nilai
                    daya pemprosesan laluan dilepaskan (teori kekangan)
```

Diskaun pemecahan: masa dijimatkan dalam serpihan di bawah kuantum boleh guna (cth., 3 minit bertaburan merentas klinik) diagihkan semula dengan buruk; gunakan faktor penggunaan yang dinyatakan.

## Contoh penyelesaian

Penulisan ambien menjimatkan GP 2 minit setiap konsultasi, 30 konsultasi/hari: 60 minit/hari, atau **220 jam/tahun bagi setiap GP** atas 220 hari bekerja.

```
Asas upah:   220 × £80 (jam GP termuat, rantau-PSSRU) ≈ £17,600/GP/tahun
Asas output: 60 min/hari = 5 konsultasi 12-min tambahan/hari
             = 1,100 temujanji tambahan/GP/tahun × £42 ≈ £46,200/GP/tahun
             — atau temujanji sama diserap sebagai lebih masa dikurangkan dan
             konsultasi lebih selamat, tidak tergesa-gesa (baris kualitatif)
```

Merentas persekutuan 50-GP kapasiti asas-output bernilai ~£2.3J/tahun — dengan syarat minit itu sebenar (diukur, bukan dituntut vendor), disatukan (konsultasi penuh, bukan serpihan) dan diagihkan semula (lihat [melepaskan tunai lwn tidak melepaskan tunai](../penjimatan-melepaskan-tunai-lwn-tidak-melepaskan-tunai/)).

## Kaitan dengan kejuruteraan perisian

Masa jurutera kanan berkelakuan serupa: ia kesesakan yang dilalui reka bentuk, semakan dan insiden, jadi nilaikannya mengikut apa yang dipagarinya, bukan mengikut gaji. Penilaian tiga-tahap sama terpakai kepada mana-mana tuntutan "AI menjimatkan setiap pembangun X minit" — matematik upah memuji nombor kecil; soalan jujur ialah sama ada minit disatukan menjadi blok boleh guna dan apa yang sebenarnya dihasilkan kapasiti yang dilepaskan. Lihat [pengoptimuman sumber hiliran](../pengoptimuman-sumber-hiliran/) untuk pengganda apabila sejam yang dijimatkan milik orang yang ditunggu semua orang lain.

## Perangkap

- **Minit × gaji = penjimatan** — penggembungan kanonik; ia kapasiti, dan hanya pada penggunaan yang dinyatakan.
- **Mengabaikan masalah kuantum**: 12 × penjimatan 5-minit ≠ satu jam percuma.
- **Menilai semua peranan sama rata**: sejam kesesakan laluan bernilai berkali ganda sejam peranan bukan-pemintu.

## Sumber

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
