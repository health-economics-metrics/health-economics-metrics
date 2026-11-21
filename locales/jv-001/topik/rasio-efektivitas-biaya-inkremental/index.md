# Rasio Efektivitas-Biaya Inkremental (Incremental Cost-Effectiveness Ratio, ICER)

ICER iku biaya tambahan saben unit efek kesehatan tambahan nalika milih siji pilihan tinimbang alternatif paling apik sabanjure. Iku angka judhul penilaian teknologi kesehatan. (Nalika unit efek yaiku QALY, uga diarani rasio biaya-utilitas inkremental, ICUR.)

## Kenapa Iki Penting

Sistem kesehatan ora tau ngevaluasi teknologi ing kasunyatan — tansah *kanthi inkremental*, marang apa sing bakal ditindakake yen ora. NICE mbandhingake ICER teknologi karo ambang **£20,000–£30,000 saben QALY**; institut ICER AS nglaporake ing $50,000–$200,000/QALY; Kanada makarya kira-kira CAD$50,000/QALY. Apa produkmu "pantes" kanggo layanan kesehatan nasional, sacara formal, yaiku apa ICER-e nglewati ambang lokal. Deleng [ambang kesediaan-mbayar](../ambang-kesediaan-mbayar/).

## Matematikane

```
ICER = (Biaya_anyar − Biaya_pembanding) / (Efek_anyar − Efek_pembanding)
     = ΔC / ΔE
```

Aturan interpretasi:

- ΔC < 0, ΔE > 0: pilihan anyar **ndominasi** — luwih murah lan luwih apik; ora butuh rasio.
- ΔC > 0, ΔE > 0: etung ICER, bandhingake karo ambang λ; adopsi yen ICER < λ.
- ΔC > 0, ΔE < 0: pilihan anyar didominasi — tolak.
- Rasio tumindak elek cedhak ΔE = 0 — luwih pilih [manfaat moneter net](../manfaat-moneter-net/) kanggo ngurutake.

Pembanding kudu *pilihan paling apik sabanjure sing ora didominasi*, dudu "ora ngapa-ngapa" — deleng [dominansi lan wates efisiensi](../dominansi-lan-wates-efisiensi/).

## Conto Petungan

Layanan pemantauan jarak adoh kanggo pasien gagal jantung, saben 1,000 pasien/taun, versus perawatan biasa:

```
Biaya:   layanan £900,000; rawat inap sing dihindari ngirit £600,000
         ΔC = 900,000 − 600,000 = £300,000
Efek:    intervensi luwih awal entuk 25 QALY
         ΔE = 25

ICER = 300,000 / 25 = £12,000 saben QALY
```

£12,000/QALY kanthi trep ing ngisor ambang £20,000 NICE — kasus sing kuwat. Catet kepriye biaya *net* penting: tanpa offset £600,000 ICER bakal £36,000/QALY lan kasus bakal mungkin gagal. Offset biaya lan kualitas bukti iku ing ngendi analisis iki menang lan kalah (deleng [biaya hilir sing dihindari](../biaya-hilir-sing-dihindari/)).

## Sambungan karo Rékayasa Piranti Lunak

Disiplin ICER pindhah kabeh menyang keputusan rékayasa:

```
(biaya pilihan B − biaya pilihan A) / (asil B − asil A)
```

— biaya inkremental saben deploy tambahan, saben jam-insinyur sing dihemat, saben insiden sing dihindari — tansah marang alternatif paling apik sabanjure, dudu marang ora nindakake apa-apa. Rong pakulinan sing pantes dicolong: (1) *jenengake pembanding kanthi eksplisit*; umume klaim ROI piranti meneng-meneng mbandhingake karo boneka-jerami; (2) *netake biaya dhisik* — piranti sing biayane £100k nanging ngganti £80k belanja sing ana duwe ΔC = £20k.

## Jebakan

- **Mbandhingake ICER lintas mata uang tanpa langkah konversi eksplisit**: ICER sing diitung ing mata uang siji negara kudu dikonversi nganggo metode sing dinyatakake sadurunge dibandhingake karo ambang negara liya — deleng [perbandingan ICER lintas mata uang](../perbandingan-icer-lintas-mata-uang/) kenapa pilihan faktor konversi (paritas daya beli vs kurs pasar) bisa mbalikake keputusan adopsi.
- **Dolanan pembanding**: mbandhingake karo baseline sing wis kadaluwarsa utawa dibuat elek nggedhekake ΔE lan ngelem ICER.
- **Rata-rata tinimbang inkremen**: biaya saben QALY saka kabeh program dudu ICER ngembangake utawa nampa kuwi.
- **Nyembah-perkiraan-titik**: ICER iku rasio rong beda sing ora mesthi; laporake ketidakpastian liwat [PSA lan CEAC](../analisis-sensitivitas-probabilistik/).
- **ICER negatif ambigu** (luwih-murah-lan-luwih-apik vs luwih-larang-lan-luwih-elek menehi tandha sing padha) — aja nglaporake ICER negatif tanpa ngomong kuadran endi.

## Sumber

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
