# Diskaun dan Keutamaan Masa

Diskaun menukar kos dan manfaat masa depan kepada nilai kini, kerana manfaat hari ini bernilai lebih daripada manfaat sama dalam lima tahun.

## Mengapa ia penting

Setiap penilaian ekonomi kesihatan dan setiap kes perniagaan sektor awam yang serius mendiskaun aliran berbilang tahun. Green Book HM Treasury UK mewajibkan kadar keutamaan masa sosial tahunan 3.5%; kes rujukan NICE mendiskaun kedua-dua kos dan kesan kesihatan pada 3.5% setahun (dengan kadar bukan-kes-rujukan 1.5% bagi terapi hampir-sembuh dengan manfaat lebih 30 tahun). Jika kes perniagaan perisian anda menuntut "penjimatan £5 juta dalam 10 tahun," penyemak kewangan serta-merta akan meminta angka didiskaun.

## Matematiknya

Nilai kini jumlah masa depan:

```
PV = FV / (1 + r)^t

PV = nilai kini
FV = nilai masa depan pada tahun t
r  = kadar diskaun (NICE/Green Book: 0.035)
t  = tahun dari sekarang
```

Bagi manfaat tahunan malar B selama n tahun (anuiti):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Contoh penyelesaian

Perisian anda menjimatkan trust NHS £100,000 setahun selama 5 tahun, bermula setahun selepas go-live.

Jumlah tidak didiskaun: £500,000.

Didiskaun pada 3.5%:

```
Tahun 1: 100,000 / 1.035^1 = £96,618
Tahun 2: 100,000 / 1.035^2 = £93,351
Tahun 3: 100,000 / 1.035^3 = £90,194
Tahun 4: 100,000 / 1.035^4 = £87,144
Tahun 5: 100,000 / 1.035^5 = £84,197

Jumlah PV ≈ £451,505
```

Tajuk jujur ialah kira-kira £451,000, lebih kurang 10% kurang daripada jumlah naif. Sekarang andaikan penyampaian tergelincir setahun: setiap sebutan beralih setahun lebih lewat, dan PV jatuh kepada kira-kira £436,000 — pandangan diskaun tentang [kos kelewatan](../kos-kelewatan/).

## Kaitan dengan kejuruteraan perisian

- **Pembayaran hutang teknikal dan migrasi platform** menjanjikan aliran manfaat bertahun ke hadapan; diskaunkannya sebelum membandingkan dengan kerja yang membayar balik suku tahun ini.
- **Kos di hadapan, manfaat di belakang** ialah bentuk piawai migrasi. Diskaun menghukum bentuk itu, dengan betul: ia menghargai nilai masa bebas risiko bagi memperuntukkan kapasiti sekarang untuk nilai kemudian.
- **Tuntutan "penjimatan pada tahun 5"** wajar disyaki dua kali ganda — ia didiskaun berat dan sangat tidak pasti (lihat [analisis kepekaan](../analisis-kepekaan/)).

## Perangkap

- **Mendiskaun kos tetapi bukan manfaat** (atau sebaliknya) — kes rujukan mendiskaun kedua-duanya, pada kadar sama.
- **Menggunakan kadar komersial (8–12%) dalam kes sektor awam**, atau 3.5% dalam kes yang dibiayai modal teroka. Padankan kadar dengan pembuat keputusan.
- **Mengelirukan diskaun dengan inflasi.** Diskaun terpakai pada nilai *sebenar* (terlaras inflasi); jangan lakukan kedua-duanya secara tersirat.

## Sumber

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
