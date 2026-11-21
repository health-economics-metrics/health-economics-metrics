# Taun Urip sing Disesuaikan Kualitas (Quality-Adjusted Life Year, QALY)

QALY iku siji taun urip sing dilakoni ing kesehatan sampurna. Nggabungake *sepira suwe* wong urip karo *sepira apik* uripe, mula sataun ing kesehatan elek diitung kurang saka siji QALY — ndadekake intervensi kesehatan sing babar pisan beda bisa dibandhingake ing siji skala.

## Kenapa Iki Penting

QALY iku mata uang umum penilaian teknologi kesehatan. NICE (Inggris) ngregani gain kesehatan ing **£20,000–£30,000 saben QALY**: intervensi sing tuku QALY luwih murah tinimbang ambang kuwi biasane disaranake; sing tuku luwih larang biasane ditolak. Siji angka iki carane layanan kesehatan nasional mbandhingake obat kanker, ganti pinggul, lan aplikasi triase ing sumbu sing padha. Yen piranti lunakmu bisa kredibel ngaku QALY — kanthi nyegah kemunduran, nyepetake perawatan, utawa nambah keslametan — sampeyan bisa ngregani nilai kesehatane ing mata uang sing padha karo kedokteran dhewe.

## Matematikane

```
QALY = Σ_i (durasi_i × utilitas_i)

durasi_i   = taun sing dilewati ing kahanan kesehatan i
utilitas_i = bobot kualitas kahanan i, dijangkar ing 1 = kesehatan sampurna, 0 = mati
             (nilai negatif diidini kanggo kahanan sing luwih elek tinimbang mati)
```

Bobot utilitas asale saka instrumen sing divalidasi, paling umum [EQ-5D](../eq-5d/). *Gain* QALY saka intervensi iku beda antarane aliran QALY kanthi lan tanpa iku, [didiskon](../diskon-lan-preferensi-wektu/) ing 3.5%/taun ing kasus acuan NICE.

## Conto Petungan

Pasien ngenteni perawatan jantung ing kahanan utilitas 0.6. Perawatan mulihake dheweke menyang utilitas 0.85.

- **Diobati saiki**: 1 taun ing 0.85 = 0.85 QALY taun iki.
- **Diobati sawise tundha 6 sasi**: 0.5 × 0.6 + 0.5 × 0.85 = 0.725 QALY.
- **Kerugian QALY saben pasien saka tundha**: 0.85 − 0.725 = **0.125 QALY**.

Dimonetisasi ing ambang NICE: 0.125 × £20,000–£30,000 = **£2,500–£3,750 nilai kesehatan ilang saben pasien saben tundha 6-sasi**. Yen piranti lunak sing nyepetake jalur nyingkirake tundha kuwi kanggo 400 pasien/taun, nilai kesehatan iku 50 QALY ≈ **£1.0–£1.5 yuta/taun** — sadurunge ngetung penghematan operasional apa wae.

## Sambungan karo Rékayasa Piranti Lunak

- **Jalur luwih cepet = QALY luwih awal.** Apa wae sing nyepetake [rujukan-menyang-perawatan](../rujukan-menyang-perawatan/) ngowahi disutilitas-wektu-ngenteni dadi gain kesehatan, diregani kaya ing ndhuwur.
- **Keslametan = QALY sing dijaga.** Kesalahan obat lan diagnosis sing kelalen sing dicegah iku kerugian QALY sing dihindari.
- **QALY uga cithakan desain-metrik**: komposit kuantitas × kualitas, kanthi bobot kualitas sing dielisitasi saka instrumen standar. "Taun-insinyur sing disesuaikan kualitas" (wektu × bobot survei DevEx) iku konstruksi sing padha — deleng [SPACE lan DevEx](../space-lan-devex/).
- Kanggo ngowahi QALY dadi dhuwit kanggo kasus bisnis, gunakake [manfaat moneter net](../manfaat-moneter-net/); kanggo ngowahi dadi keputusan, gunakake [ambang kesediaan-mbayar](../ambang-kesediaan-mbayar/).

## Jebakan

- **Nggawe bobot utilitas.** Bobot kudu asale saka instrumen sing divalidasi (EQ-5D) lan set nilai sing diterbitake, dudu intuisi.
- **Ngaku QALY tanpa jalur kausal.** "Aplikasi kita nambah kesejahteraan" dudu klaim QALY; "nyingkirake X minggu ngenteni ing utilitas kahanan 0.6" iku.
- **Ngetung ganda**: ngaku loro gain QALY lan penghematan biaya saka kemunduran sing dihindari padha mbutuhake ati-ati yen bener-bener kapisah.
- **Titik buta keadilan**: QALY ngregani perpanjangan setaun urip miturut utilitas dhasar, sing bisa ngrugekake wong kanthi disabilitas — alasan ICER (AS) uga nglaporake evLYG (deleng [taun urip sing dipikolehi](../taun-urip-sing-dipikolehi/)).

## Sumber

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
