# Kos Penyumberluaran yang Boleh Dielakkan

Apabila sesebuah trust tidak dapat mencapai sasaran dengan kapasiti dalaman, ia membeli kapasiti pada kadar premium: kerja lebih masa hujung minggu untuk kakitangan sendiri, atau menyumberluarkan prosedur kepada penyedia swasta. Nilai ekonomi perisian yang melepaskan kapasiti termasuk **kos yang boleh dielakkan bagi kerja berkadar premium itu**.

## Mengapa ia penting

Di bawah tekanan pemulihan elektif, trust lazimnya membayar harga spot sektor swasta (selalunya 1.2–1.5× harga skim NHS) atau kadar inisiatif senarai menunggu premium kepada perunding sendiri untuk senarai hujung minggu. Tidak seperti tuntutan kapasiti biasa, penyumberluaran yang dielakkan **melepaskan tunai**: invois kepada penyedia swasta benar-benar tidak dikeluarkan. Itu menjadikannya salah satu baris manfaat terkuat bagi perisian yang meningkatkan daya pemprosesan dalaman — dan salah satu yang paling mudah dibuktikan, kerana perbelanjaan penyumberluaran sudah menjadi baris bajet yang kelihatan.

## Matematiknya

```
Kos penyumberluaran yang boleh dielakkan = aktiviti dipindahkan ke dalam × (harga unit
                             sumber luar − kos marginal dalaman setiap kes)

Kos marginal dalaman: bahan guna habis + kakitangan berubah bagi aktiviti tambahan
— harta tanah tetap sudah dibayar (lihat marginal-vs-average-cost.md).
```

Tuntutan ini memerlukan kapasiti dalaman yang dilepaskan benar-benar dapat menyerap aktiviti itu: sesi teater, katil dan kakitangan semuanya mesti tersedia (kekangan yang mengikat menguasai — teori kekangan sekali lagi).

## Contoh penyelesaian

Sebuah trust menyumberluarkan 800 prosedur katarak/tahun pada £900 setiap satu: £720,000/tahun perbelanjaan luar, berbanding harga skim ~£750.

Perisian penjadualan teater (pengoptimuman senarai, pengisian semula slot daripada pembatalan, penjejakan masa pusing ganti) menaikkan penggunaan teater dalaman cukup untuk membawa pulang 500 prosedur:

```
Kos marginal dalaman setiap kes ≈ £350 (bahan guna habis + kakitangan bersesi)
Penjimatan = 500 × (900 − 350) = £275,000/tahun — melepaskan tunai
Penyumberluaran berbaki: 300 × £900 = £270,000 (dahulu £720,000)
```

Kos perisian £90,000/tahun → bersih ≈ **+£185,000/tahun tunai yang boleh diperoleh**, serta manfaat kualiti dalaman dan latihan daripada mengekalkan kerja di dalam.

## Kaitan dengan kejuruteraan perisian

Analogi langsungnya ialah **premium kontraktor dan perundingan**: apabila kapasiti kejuruteraan dalaman tidak dapat memenuhi komitmen, organisasi membeli kapasiti luar pada 1.5–3× kadar dalaman termuat. Pelaburan platform dan produktiviti yang meningkatkan daya pemprosesan dalaman patut menuntut perbelanjaan kontraktor yang dielakkan seperti di atas — kadar harian luar tolak kos marginal dalaman, darab kerja yang dibawa pulang — kerana ia salah satu daripada beberapa baris yang benar-benar melepaskan tunai dalam kes perniagaan produktiviti pembangun. Amaran yang sama terpakai: kapasiti dalaman mesti benar-benar wujud dan dijadualkan pada kerja yang dibawa pulang, jika tidak tuntutan itu rekaan.

## Perangkap

- **Menuntut pemulangan tanpa rantaian kapasiti penuh** — pakar bedah dibebaskan tetapi tiada slot teater (atau jurutera dibebaskan tetapi tiada lebar jalur pengurusan produk) tidak memulangkan apa-apa.
- **Membandingkan harga sumber luar dengan kos purata dalaman** dan bukan kos marginal — memperkecilkan penjimatan, anehnya; kos tetap berjalan tidak kira apa.
- **Ketidaksimetrian kualiti/kerumitan**: kes yang disumberluarkan selalunya yang mudah; memulangkannya mengubah campuran kes dalaman dan kos unit.

## Sumber

- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
