# Nilai Jangkaan Maklumat Sempurna (EVPI)

EVPI ialah jumlah maksimum yang patut dibayar oleh pembuat keputusan untuk menghapuskan ketidakpastian sebelum memutuskan — harga formal bagi "mari jalankan kajian dahulu."

## Mengapa ia penting

Sistem kesihatan sentiasa menghadapi pilihan: terima sekarang atas bukti tidak sempurna, atau biayai lebih banyak penyelidikan dahulu. EVPI meletakkan nombor pada pilihan kedua. Jika EVPI £50,000 dan percubaan yang dicadangkan berharga £2 juta, terima sekarang. Jika EVPI £20 juta, percubaan itu murah. Soalan sama — "patutkah kita perintis ini sebelum pelancaran?" — timbul bagi setiap keputusan alat perusahaan, dan hampir tiada siapa menghargainya. Untuk menghargai opsyen mengembangkan projek kemudian, dan bukan opsyen mengumpul maklumat dahulu, lihat [Penilaian Opsyen Nyata](../penilaian-opsyen-nyata/).

## Matematiknya

EVPI ialah jurang antara memutuskan dengan pandangan jauh sempurna dan memutuskan sekarang atas jangkaan:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = parameter tidak pasti (dengan taburan bersama mereka)
NMB(j,θ) = manfaat monetari bersih pilihan j diberi θ
```

Sebutan pertama: purata pulangan pilihan terbaik merentas setiap dunia yang mungkin (anda sentiasa memilih betul). Sebutan kedua: pulangan satu pilihan yang terbaik secara purata (anda mesti komited sekarang). EVPI ≥ 0 sentiasa. EVPI populasi mendarab dengan bilangan keputusan terjejas. Dikira terus daripada cabutan [PSA](../analisis-kepekaan-probabilistik/).

## Contoh penyelesaian

Lancarkan pembantu dokumentasi AI kepada 5,000 klinisian, atau tidak. Dua dunia:

```
Dunia A (p = 0.6): pembantu menjimatkan 20 min/hari → NMB pelancaran = +£8J
Dunia B (p = 0.4): pembantu menjimatkan ~0 (geseran aliran kerja) → NMB pelancaran = −£3J
NMB "jangan lancarkan" = £0 dalam kedua-dua dunia.
```

Putuskan sekarang: E[NMB pelancaran] = 0.6 × 8 − 0.4 × 3 = **+£3.6J** → lancarkan.

Dengan maklumat sempurna: dalam dunia A pilih pelancaran (+£8J), dalam dunia B pilih tiada apa-apa (£0). Nilai jangkaan = 0.6 × 8 + 0.4 × 0 = **£4.8J**.

```
EVPI = 4.8J − 3.6J = £1.2J
```

Projek perintis ketat 3 bulan berharga £150,000 yang sebahagian besarnya menyelesaikan dunia mana anda berada jelas berbaloi — dan mana-mana projek perintis berharga lebih £1.2J tidak, walau betapa teliti.

## Kaitan dengan kejuruteraan perisian

EVPI ialah ekonomi spike, projek perintis, ujian A/B dan bukti-konsep. Ia menghasilkan dua peraturan praktikal:

- **Projek perintis hanya berbaloi dibiayai jika keputusan benar-benar boleh berubah.** Jika anda akan melancarkan tanpa mengira keputusan perintis, EVPI = 0 dan perintis itu teater.
- **Had perbelanjaan perintis pada EVPI.** Nilai maklumat dihadkan oleh nilai keputusan yang dimaklumkannya.

EVPI separa (EVPPI) memanjangkan ini kepada parameter tunggal: "apa nilai menetapkan nombor masa-dijimatkan secara khusus?" — yang memberitahu apa yang patut diukur oleh perintis. Untuk menghargai kajian *tertentu* yang dicadangkan dan bukan menghapuskan semua ketidakpastian, lihat [EVSI](../nilai-jangkaan-maklumat-sampel/).

## Perangkap

- **Menjalankan projek perintis tanpa peraturan keputusan dilampirkan** — maklumat yang tidak dapat mengubah pilihan tidak bernilai mengikut takrif.
- **Mengabaikan kos kelewatan mengumpul maklumat**: perintis 6 bulan melewatkan 6 bulan manfaat ([kos kelewatan](../kos-kelewatan/)); nilai bersih perintis = EVPI diselesaikan − kos kelewatan − kos perintis.
- **Menganggap EVPI sebagai ramalan.** Ia had atas nilai maklumat, bukan anggaran apa yang akan disampaikan kajian tertentu.

## Sumber

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
