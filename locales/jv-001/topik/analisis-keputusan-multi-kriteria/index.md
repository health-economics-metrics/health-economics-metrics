# Analisis Keputusan Multi-Kriteria (Multi-Criteria Decision Analysis, MCDA)

Analisis keputusan multi-kriteria (MCDA) iku model skor jumlah-dibobot sing dienggo ing penilaian teknologi kesehatan nalika siji ambang ICER/kesediaan-mbayar ora nangkep kabeh sing dipeduli pangambil keputusan: keadilan, kabutuhan sing durung kapenuhan, inovasi, dampak anggaran, keparahan penyakit. Saben kriteria entuk bobot sing nggambarake pentinge (dielisitasi saka pemangku kepentingan, bobot jumlah 1), saben pilihan entuk skor ternormalisasi saben kriteria (biasane 0–1), lan skor sakabehe iku jumlah dibobot — wujud matematika sing padha karo scorecard pilihan vendor piranti lunak.

## Kenapa Iki Penting

MCDA dienggo ing kerangka kaya EVIDEM, lan dening sawetara badan HTA kanggo penilaian orphan/penyakit-langka ing ngendi pendekatan ambang biaya-saben-QALY sing ketat dianggep kakehan sempit kanggo nangkep kabeh sing penting babagan keputusan. ISPOR MCDA Emerging Good Practices Task Force ngresmekake pedoman praktik apik kanggo elisitasi bobot lan skor kanthi bisa dipertahanake, persis amarga keputusan sing dibobot informal gampang dibangun lan gampang dimainake. Nalika teknologi kesehatan pancen duwe dimensi nilai sing ora bisa diwakili siji [ambang kesediaan-mbayar](../ambang-kesediaan-mbayar/) — keparahan, inovasi, keadilan — MCDA menehi pangambil keputusan struktur eksplisit lan bisa diaudit kanggo nggabungake, tinimbang pertimbangan sing ora dinyatakake.

## Matematikane

```
Skor MCDA = Σ_i (bobot_i × skor_i)
bobot kudu jumlah 1 (dielisitasi liwat metode pemangku kepentingan kaya
swing weighting utawa Analytic Hierarchy Process)
```

## Conto Petungan

Komite HTA ngskor terapi digital ing papat kriteria:

```
Kriteria                           Bobot    Skor    Bobot × Skor
Manfaat klinis                     0.4      0.8     0.32
Dampak biaya                       0.3      0.5     0.15
Keparahan penyakit / kabutuhan     0.2      0.9     0.18
Inovasi                            0.1      0.6     0.06
                                    ─────                ─────
                                    1.0                  0.71
```

Bobot jumlah 1.0 (0.4 + 0.3 + 0.2 + 0.1), lan skor MCDA 0.71 (0.32 + 0.15 + 0.18 + 0.06). Komite mbandhingake 0.71 karo ambang sing wis disepakati sadurunge, utawa ngurutake marang teknologi saingan sing diskor kanthi cara sing padha.

## Sambungan karo Rékayasa Piranti Lunak

Iki persis matematika sing padha karo scorecard pilihan-vendor dibobot, matriks evaluasi RFP, utawa model skor prioritisasi-fitur — deleng [mbangun vs tuku](../mbangun-vs-tuku/), kasus panggunaan scorecard-dibobot klasik ing pengadaan piranti lunak. Uga pantes dikontraskan karo [WSJF lan CD3](../wsjf-lan-cd3/): WSJF/CD3 iku metode prioritisasi adhedhasar *rasio* (biaya keterlambatan dibagi ukuran proyek utawa durasi), dene MCDA iku *jumlah* dibobot. MCDA lan WSJF/CD3 iku rong jawaban struktural beda kanggo "kepriye kita ngurutake pilihan saingan," lan ngerti endi sing bener-bener dibutuhake keputusan tartamtu — nilai aditif ing kriteria mandhiri, versus kapadhetan nilai saben unit kapasitas langka — luwih penting tinimbang rumus endi sing katon luwih ketat.

## Jebakan

- **Bias elisitasi bobot**: sapa sing nyetel bobot efektif nemtokake urutan sadurunge, mula "rumus" bisa nyucikake keputusan politik utawa komersial minangka petungan objektif. Dokumentasi sapa sing nyetel bobot lan kepriye.
- **Ngetung ganda kriteria sing wis ditangkep ing panggonan liya**: ngskor "efektivitas-biaya" minangka siji kriteria nalika *uga* ngskor "dampak biaya" kapisah nambah bobot dhuwit relatif marang kriteria liyane tanpa ana sing nyengaja.
- **Presisi palsu**: skor dibobot rong-desimal (0.71) ngimplikasikake kaku luwih akeh tinimbang rating pemangku kepentingan 0–10 sing dhasar bener-bener ndhukung, lan variabilitas antar-penilai ing rating kuwi asring ora dilaporake babar pisan.

## Sumber

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
