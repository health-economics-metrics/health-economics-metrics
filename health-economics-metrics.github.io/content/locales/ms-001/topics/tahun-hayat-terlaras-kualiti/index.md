# Tahun Hayat Terlaras Kualiti (QALY)

QALY ialah satu tahun hayat yang dijalani dalam kesihatan sempurna. Ia menggabungkan *berapa lama* orang hidup dengan *betapa baik* mereka hidup, supaya setahun dalam kesihatan buruk dikira kurang daripada satu QALY — menjadikan intervensi kesihatan yang sama sekali berbeza boleh dibandingkan pada satu skala.

## Mengapa ia penting

QALY ialah mata wang sepunya penilaian teknologi kesihatan. NICE (England) menilai keuntungan kesihatan pada **£20,000–£30,000 bagi setiap QALY**: intervensi yang membeli QALY lebih murah daripada ambang itu lazimnya disyorkan; yang membelinya lebih mahal lazimnya ditolak. Satu nombor ini ialah cara perkhidmatan kesihatan kebangsaan membandingkan ubat kanser, penggantian pinggul dan aplikasi triaj pada paksi sama. Jika perisian anda boleh menuntut QALY secara boleh dipercayai — dengan mencegah kemerosotan, mempercepat rawatan atau meningkatkan keselamatan — anda boleh menghargai nilai kesihatannya dalam mata wang sama seperti perubatan sendiri.

## Matematiknya

```
QALY = Σ_i (tempoh_i × utiliti_i)

tempoh_i = tahun yang dihabiskan dalam keadaan kesihatan i
utiliti_i = pemberat kualiti keadaan i, bersauh pada 1 = kesihatan sempurna, 0 = mati
            (nilai negatif dibenarkan bagi keadaan lebih teruk daripada mati)
```

Pemberat utiliti datang daripada instrumen yang disahkan, paling lazim [EQ-5D](../eq-5d/). *Keuntungan* QALY daripada intervensi ialah perbezaan antara aliran QALY dengan dan tanpanya, [didiskaun](../diskaun-dan-keutamaan-masa/) pada 3.5%/tahun dalam kes rujukan NICE.

## Contoh penyelesaian

Pesakit menunggu rawatan jantung dalam keadaan berutiliti 0.6. Rawatan memulihkan mereka kepada utiliti 0.85.

- **Dirawat sekarang**: 1 tahun pada 0.85 = 0.85 QALY tahun ini.
- **Dirawat selepas kelewatan 6 bulan**: 0.5 × 0.6 + 0.5 × 0.85 = 0.725 QALY.
- **Kehilangan QALY setiap pesakit daripada kelewatan**: 0.85 − 0.725 = **0.125 QALY**.

Dimonetisasi pada ambang NICE: 0.125 × £20,000–£30,000 = **£2,500–£3,750 nilai kesihatan hilang bagi setiap pesakit bagi setiap kelewatan 6 bulan**. Jika perisian yang mempercepat laluan menghapuskan kelewatan itu bagi 400 pesakit/tahun, nilai kesihatan ialah 50 QALY ≈ **£1.0–£1.5 juta/tahun** — sebelum mengira sebarang penjimatan operasi.

## Kaitan dengan kejuruteraan perisian

- **Laluan lebih pantas = QALY lebih awal.** Apa-apa yang memendekkan [rujukan-ke-rawatan](../rujukan-ke-rawatan/) menukar ketidakgunaan masa menunggu kepada keuntungan kesihatan, dinilai seperti di atas.
- **Keselamatan = QALY dipelihara.** Ralat ubat dan diagnosis terlepas yang dicegah ialah kehilangan QALY yang dielakkan.
- **QALY juga templat reka bentuk metrik**: komposit kuantiti × kualiti, dengan pemberat kualiti dielisit daripada instrumen piawai. "Tahun jurutera terlaras kualiti" (masa × pemberat tinjauan DevEx) ialah binaan sama — lihat [SPACE dan DevEx](../space-dan-devex/).
- Untuk menukar QALY kepada wang bagi kes perniagaan, gunakan [manfaat monetari bersih](../manfaat-monetari-bersih/); untuk menukarnya kepada keputusan, gunakan [ambang kesanggupan membayar](../ambang-kesanggupan-membayar/).

## Perangkap

- **Mereka-reka pemberat utiliti.** Pemberat mesti datang daripada instrumen yang disahkan (EQ-5D) dan set nilai diterbitkan, bukan gerak hati.
- **Menuntut QALY tanpa laluan sebab.** "Aplikasi kami meningkatkan kesejahteraan" bukan tuntutan QALY; "menghapuskan X minggu menunggu dalam keadaan utiliti 0.6" ialah.
- **Pengiraan berganda**: menuntut kedua-dua keuntungan QALY dan penjimatan kos daripada kemerosotan dielakkan yang sama memerlukan penjagaan bahawa keduanya benar-benar berasingan.
- **Titik buta ekuiti**: QALY menilai pemanjangan hayat setahun mengikut utiliti garis asas, yang boleh merugikan orang kurang upaya — sebab ICER (AS) juga melaporkan evLYG (lihat [tahun hayat diperoleh](../tahun-hayat-diperoleh/)).

## Sumber

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
