# Analisis Kepekaan

Analisis kepekaan deterministik (DSA) mengubah satu andaian pada satu masa merentas julat munasabah untuk melihat sama ada kesimpulan bertahan. Visualisasi piawai ialah gambar rajah tornado: parameter dipangkatkan mengikut seberapa banyak ia mengayunkan keputusan.

## Mengapa ia penting

Setiap model ekonomi dibina atas anggaran — masa dijimatkan, penerimaan, kos unit. Penilaian teknologi kesihatan enggan menerima anggaran titik ("ROI ialah 340%") tanpa bukti bahawa kesimpulan teguh terhadap ketidaksetujuan munasabah tentang input. Gambar rajah tornado memberitahu pembuat keputusan *andaian mana untuk disoal siasat*: jika kes hanya berfungsi apabila parameter paling dipertikaikan berada di hujung optimisnya, semua orang boleh melihatnya serta-merta.

Ini tabiat paling boleh dipindahkan daripada ekonomi kesihatan kepada kes perniagaan perisian.

## Matematiknya

Bagi setiap parameter p dengan julat munasabah [p_rendah, p_tinggi]:

```
Keputusan_rendah  = model(p = p_rendah,  semua yang lain pada kes asas)
Keputusan_tinggi  = model(p = p_tinggi,  semua yang lain pada kes asas)
Ayunan(p)         = |Keputusan_tinggi − Keputusan_rendah|
```

Pangkatkan parameter mengikut ayunan; plot palang mendatar di sekitar keputusan kes asas. Varian: DSA dua hala (ubah dua parameter pada grid), analisis ambang (cari nilai parameter di mana keputusan berbalik).

## Contoh penyelesaian

Pembantu pengekodan AI untuk 200 pembangun. Kes asas: lesen £39/pembangun/bulan; 30 min/pembangun/hari dijimatkan; kos termuat £60/jam; 220 hari bekerja.

```
Manfaat tahunan kes asas = 200 × 0.5j × 220 × £60 = £1,320,000
Kos tahunan              = 200 × £39 × 12         = £93,600
Bersih kes asas          = £1,226,400
```

Tornado (satu parameter pada satu masa):

```
Masa dijimatkan 0.1–1.0 j/hari: bersih = £170,400 … £2,546,400   (ayunan £2.38J) ← mendominasi
Kos termuat £40–£80/j:          bersih = £786,400 … £1,666,400   (ayunan £0.88J)
Hari bekerja 200–240:           bersih = £1,106,400 … £1,346,400 (ayunan £0.24J)
Lesen £30–£50/bln:              bersih = £1,248,000 … £1,200,000 (ayunan £48k)
```

Analisis ambang: manfaat bersih mencapai sifar pada kira-kira **2.1 minit/hari** dijimatkan. Keputusan tidak peka kepada harga lesen dan bergantung sepenuhnya pada anggaran masa-dijimatkan — jadi ukur itu, bukan yang lain. (Dan ingat keputusan ialah kapasiti, bukan tunai — lihat [melepaskan tunai lwn tidak melepaskan tunai](../penjimatan-melepaskan-tunai-lwn-tidak-melepaskan-tunai/).)

## Kaitan dengan kejuruteraan perisian

Jurutera sudah melakukan naluri ini sebagai "bagaimana jika kita salah tentang X?" — DSA sekadar menjadikannya sistematik dan kelihatan. Letakkan gambar rajah tornado dalam setiap cadangan alat, pelan kapasiti dan analisis bina-lwn-beli. Ia menukar pertikaian tentang gerak hati siapa betul kepada persetujuan tentang parameter mana untuk pergi ukur — selalunya melalui projek perintis, yang nilainya sendiri boleh dihargai (lihat [nilai jangkaan maklumat sempurna](../nilai-jangkaan-maklumat-sempurna/)).

## Perangkap

- **Julat dipilih untuk memuji**: ±10% di sekitar setiap input tanpa mengira ketidakpastian sebenar. Anggaran masa-dijimatkan wajar ±80%; harga lesen ±10%.
- **Satu-pada-satu-masa terlepas interaksi** — parameter berkorelasi (penerimaan dan masa dijimatkan) memerlukan analisis dua hala atau [analisis kepekaan probabilistik](../analisis-kepekaan-probabilistik/) penuh.
- **Melakukan analisis dan mengabaikannya**: jika tornado mengatakan kes bergantung pada satu nombor lembut, langkah seterusnya ialah pengukuran, bukan kelulusan.

## Sumber

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
