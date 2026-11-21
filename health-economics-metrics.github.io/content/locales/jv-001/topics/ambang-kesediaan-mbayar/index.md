# Ambang Kesediaan-Mbayar (Willingness-to-Pay Thresholds)

Ambang kesediaan-mbayar (WTP) iku maksimum sing gelem dibayar pangambil keputusan saben unit gain kesehatan — garis sing ngowahi [ICER](../rasio-efektivitas-biaya-inkremental/) dadi keputusan adopsi/tolak.

## Kenapa Iki Penting

Ambang iku ing ngendi ekonomi kesehatan mandheg dadi pangukuran lan dadi kabijakan. Saben sistem nasional duwe siji, eksplisit utawa implisit, lan ngerti angka lokal ngandhani persis carane ngregani klaim nilai-kesehatan:

| Badan | Ambang (miturut riset, 2024–2025) |
|---|---|
| NICE (Inggris) | £20,000–£30,000 saben QALY; ambang keputusan rata-rata empiris ≈ £24,400 (2022–24); pengubah keparahan munggahake langit-langit efektif dadi ~£36k–£51k; teknologi khusus banget nganti £100k+ |
| ICER (AS, non-pemerintah) | tolok ukur rega $100,000–$150,000 saben QALY/evLYG; nglaporake kisaran $50k–$200k |
| Kanada (CADTH / CDA-AMC) | ≈ CAD$50,000 saben QALY minangka ambang kerja |
| WHO-CHOICE (historis, global) | 1–3× PDB per kapita saben DALY sing dihindari (saiki ora disaranake amarga kakehan kasar) |
| Sisi pasokan empiris UK (Claxton et al.) | ≈ £13,000 saben QALY sing bener-bener dipindhah ing margin NHS |

## Matematikane

Ambang λ mlebu ing saben aturan keputusan:

```
Adopsi yen ICER = ΔC/ΔE < λ
Setara: adopsi yen NMB = λ×ΔE − ΔC > 0
```

Rong teori babagan apa λ *iku*:

- **Sisi permintaan**: apa sing gelem dibayar masarakat kanggo kesehatan (pertimbangan nilai).
- **Sisi pasokan**: kesehatan sing saiki diprodhuksi anggaran ing margin (kuantitas empiris — ~£13k/QALY Claxton). Yen λ sing dienggo kanggo keputusan ngluwihi tingkat sisi-pasokan, nyetujoni teknologi anyar nggeser luwih akeh kesehatan tinimbang sing ditambah.

## Conto Petungan

Terapi digitalmu ngirim 0.05 QALY saben pasien sing diobati ing biaya net (rega dikurangi offset) £800.

```
ICER = 800 / 0.05 = £16,000 saben QALY
```

- Inggris: ing ngisor £20k → bisa didanai. Rega maksimum sing bisa dipertahanake: ing λ = £20,000, rega_max = 0.05 × 20,000 + offset = £1,000 + offset.
- Pigura komersial AS ing $150k/QALY: rega adhedhasar-nilai luwih dhuwur banget.
- Ambang negara PDB-per-kapita $4,000: produk sing padha kudu biaya ing ngisor ~$200 net.

Produk padha, telung pasar, telung rega — ambang *iku* model penentuan rega. Iki penentuan rega adhedhasar-nilai, dijalanake kosok balene saka λ.

## Sambungan karo Rékayasa Piranti Lunak

Saben organisasi rékayasa duwe λ implisit: alangan ing ngendi mbiayai piranti saben jam-insinyur sing dihemat. Nggawe eksplisit — "kita mbiayai apa wae ing ngisor £40 saben jam-insinyur kredibel sing dihemat" — ngidini perbandingan tabel-liga investasi platform, persis kaya tabel liga biaya-saben-QALY ngurutake belanja kesehatan. Piwulang sisi-pasokan uga pindhah: λ internal sejatimu iku apa sing diprodhuksi backlog *saiki* mu ing margin, dudu apa sing dikandhakake pimpinan babagan regane wektu.

## Jebakan

- **Blanja ambang** ing yurisdiksi utawa ngutip langit-langit HST kanggo produk biasa.
- **Nganggep λ minangka lantai rega**: nglewati ambang perlu, ora cukup — [dampak anggaran](../analisis-dampak-anggaran/) isih bisa klelep produk sing kejangkau-saben-unit.
- **Ngabaikake yen ambang obah**: pengubah keparahan NICE (2022) lan review periodik ngowahi λ efektif; wenehana tanggal klaimmu.
- **Mbandhingake ICER marang ambang ing mata uang beda tanpa konversi dhisik**: deleng [perbandingan ICER lintas mata uang](../perbandingan-icer-lintas-mata-uang/) — metode konversi (paritas daya beli vs kurs pasar) penting sacara metodologis, dudu rincian pembulatan.
- **Nyampur valuasi adhedhasar-λ karo tradisi VSL/VPF pasar-tenaga-kerja**: iki asale saka tradisi teoretis beda (metodologi diwatesi-anggaran-kesehatan vs preferensi sing diungkapake saka trade-off upah-risiko) lan ora tansah bisa dirukunake — kanggo pendekatan preferensi-sing-diungkapake alternatif kanggo ngregani urip, deleng [Nilai Nyawa Statistik](../nilai-nyawa-statistik/).

## Sumber

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
