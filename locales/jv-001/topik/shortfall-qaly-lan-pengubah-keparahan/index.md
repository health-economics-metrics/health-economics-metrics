# Shortfall QALY lan Pengubah Keparahan (QALY Shortfall and Severity Modifiers)

Shortfall QALY ngukur pira kesehatan ing mangsa ngarep sing dijupuk penyakit saka pasien dibandhingake populasi umum. NICE nggunakake iku kanggo nrapake **pengubah keparahan**: saya lara populasi, saya aji saben QALY sing dipikolehi — nganti 1.7× ambang standar.

## Kenapa Iki Penting

Wiwit manual NICE 2022, keparahan iku pengali eksplisit ing nilai gain kesehatan, ngganti premium end-of-life lawas. Teknologi kanggo kondisi abot dinilai marang ambang efektif nganti ~£51,000/QALY tinimbang £30,000. Yen piranti lunakmu ngladeni populasi sing kena abot (gagal jantung lanjut, penyakit jiwa abot), pengubah keparahan bisa dadi bedane antarane kasus ekonomi sing bisa didanai lan ora — lan sampeyan butuh matematika shortfall kanggo ngaku.

## Matematikane

Rong ukuran, diitung ing sisa umur kanthi standar perawatan saiki:

```
Shortfall absolut     = QALY_populasi_umum − QALY_karo_kondisi
Shortfall proporsional = Shortfall absolut / QALY_populasi_umum
```

Bobot NICE 2022 (ukuran endi sing menehi bobot luwih dhuwur sing ditrapake):

```
Bobot ×1.0: absolut < 12 lan proporsional < 0.85
Bobot ×1.2: absolut ≥ 12 utawa proporsional ≥ 0.85
Bobot ×1.7: absolut ≥ 18 utawa proporsional ≥ 0.95
```

Bobot ngalikake ΔE (utawa setara ambang): λ efektif dadi £24k–£36k ing ×1.2 lan £34k–£51k ing ×1.7.

## Conto Petungan

Pasien kanthi kondisi agresif, umur rata-rata 60. Populasi umum ing umur 60 ngarep-arep 14.2 QALY sing didiskon; kanthi kondisi ing perawatan saiki, 2.1.

```
Shortfall absolut      = 14.2 − 2.1 = 12.1  (≥ 12 → layak ×1.2)
Shortfall proporsional = 12.1 / 14.2 = 0.852 (≥ 0.85 → uga ×1.2)
```

ICER platform pemantauanmu £26,000/QALY — ing ndhuwur pertimbangan titik-tengah standar £20k–£30k, wates. Kanthi bobot ×1.2: ICER efektif = 26,000 / 1.2 ≈ **£21,700/QALY** — bisa didanai kanthi trep. Petungan shortfall mung nggeser keputusan.

## Sambungan karo Rékayasa Piranti Lunak

Pembobotan keparahan iku versi formal saka apa sing ditindakake organisasi rékayasa kanthi naluri: mbelanjakake luwih akeh saben unit perbaikan ing sistem sing paling kurang beruntung. Pola sing bisa dialihake — etungen "shortfall SLO" saben layanan (sepira ngisor baseline sehat sing diarep-arep, kanthi absolut lan proporsional), lan bobot nilai remediasi sarujuk. Iki mbenerake, nganggo aritmetika tinimbang argumen, kenapa sistem warisan sing kobong entuk investasi luwih akeh saben jam sing dihemat tinimbang sing sehat. Uga nggawa piwulang tata kelola sing padha: terbitake bobot *sadurunge* rapat prioritisasi, utawa saben tim ngaku keparahan.

## Jebakan

- **Ngitung shortfall marang baseline sing salah**: diukur ing *standar perawatan saiki*, dudu sejarah alami tanpa perawatan.
- **Sensitivitas umur**: shortfall gumantung banget marang umur populasi (pasien luwih enom duwe QALY luwih akeh kanggo ilang → shortfall absolut luwih dhuwur); gunakake distribusi umur populasi sing bener-bener diobati.
- **Nganggep pengubah ditrapake ing panggonan liya** — iku mekanisme NICE (Inggris); badan HTA liyane nangani keparahan beda (utawa babar pisan ora).

## Sumber

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
