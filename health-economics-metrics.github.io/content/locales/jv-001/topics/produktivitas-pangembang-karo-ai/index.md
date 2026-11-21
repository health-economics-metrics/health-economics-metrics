# Produktivitas Pangembang karo AI (AI Developer Productivity)

Metrik kanggo apa sing bener-bener ditindakake bantuan coding AI marang output rékayasa: tingkat panampa saran, percepatan ing studi kontrol, throughput PR, lan retensi kode. Basis bukti iku pancen bertentangan — saengga dadi studi kasus sing sampurna kanggo bedane efikasi-lawan-efektivitas sing digawe ekonomi kesehatan kanggo ngatasi.

## Kenapa Iki Penting

Rong studi kontrol sing paling akeh dikutip nuduhake arah sing mbalikan:

- **Peng et al. 2023 (RCT GitHub Copilot)**: pangembang ngrampungake tugas server HTTP greenfield **55.8% luwih cepet** nganggo Copilot (1j11m lawan 2j41m, n=95).
- **RCT METR 2025**: pangembang open-source pengalaman sing makarya ing *repositori mature kagungane dhewe* **19% luwih alon** nganggo piranti AI awal-2025 (16 pangembang, 246 tugas) — nalika *percaya* yen dheweke 20% luwih cepet.

Loro-lorone studi sing apik. Kontradiksi kuwi temuane: efikasi tugas greenfield ora pindhah menyang efektivitas basis-kode mature, lan manfaat sing *dirasakake* ora bisa nggantèni manfaat sing diukur. Kedokteran duwe jeneng kanggo loro fenomena kuwi (uji coba eksplanatoris vs pragmatis; masalah plasebo) lan piranti kanggo nanganinya.

## Matematikane

```
Tingkat panampa  = saran sing ditampa / saran sing ditampilake
                   (telemetri GitHub ~30% rata-rata; beda-beda: SQL 45%, Python 35%, JS 28%)
Tingkat retensi  = kode AI sing slamet nganti merge / kode AI sing ditampa (~88% dilaporake)
Percepatan       = (t_kontrol − t_AI) / t_kontrol  (saka perbandingan kontrol WAE)
Delta throughput = Δ PR sing di-merge/pangembang/minggu (data lapangan GitHub/Accenture: +8.7%)

Model nilai     = pangembang × wektu sing dihemat × tarif sarat × faktor utilisasi
                  — saben suku butuh pangukuran lokal; deleng tornado ing
                  sensitivity-analysis.md, ing ngendi wektu-sing-dihemat nguwasani kabeh
                  parameter liyane digabung
```

## Conto Petungan

Sawijining organisasi 500 pangembang nyoba asisten kanthi kontrol sing bener (tim sing dicocokake, 3 sasi, metrik sing wis didaftarake sadurunge):

```
Asil pilot: wektu siklus PR −18%; PR sing di-merge +6%; CFR ora owah;
            wektu sing dihemat dilaporake dhewe 45 mnt/dina; sing diukur tingkat tugas ≈ 15 mnt/dina

Nilai angka sing DIUKUR: 500 × 0.25j × 220d × £60 × 0.6 utilisasi
                        ≈ £990,000/taun kapasitas (non-cash-releasing)
Biaya: 500 × £39/sasi × 12 ≈ £234,000/taun
Rasio kapasitas bersih ≈ 4:1 — bisa didanai, kanthi sapratelon saka klaim sing dilaporake dhewe.
```

Jurang 3× antarane sing dirasakake lan sing diukur iku temuan METR sing makarya ing donya nyata; nganggarake adhedhasar laporan dhewe bakal nglipatigakake garis manfaat.

## Sambungan karo Rékayasa Piranti Lunak

Impor ekonomi kesehatan kanggo sapa wae sing ngevaluasi piranti AI: jalanake **uji coba pragmatis** (basis kodemu, rékayasamu, tiket nyata — dudu tugas demo vendor); anggep **tingkat panampa minangka proksi, dudu asil** (iku [PPV](../evaluasi-ai-klinis/) saka saran saka sudut pandang pangembang — panampa dhuwur karo retensi kurang iku overdiagnosis); pasangake saben gain throughput karo **pamriksan stabilitas** (DORA 2025: AI munggahake throughput, ngrusak stabilitas — intervensi sing duwe efek samping butuh analisis manfaat bersih, miturut [metrik DORA](../metrik-dora/)); lan klasifikasi manfaat kanthi jujur minangka kapasitas ([cash-releasing vs non-cash-releasing](../penghematan-cash-releasing-vs-non-cash-releasing/)).

## Jebakan

- **Transplantasi studi vendor**: angka RCT greenfield ditrapake ing karya basis-kode warisan — kesalahan sing kapacak ing studi METR.
- **Laporan dhewe minangka pangukuran**: jurang persepsi 20-poin persentase iku bias paling gedhe sing dikenal ing literatur iki.
- **Inflasi aktivitas**: luwih akeh PR lan luwih akeh kode iku Aktivitas, dudu asil ([SPACE](../space-lan-devex/)); pasangake karo rework lan CFR.
- **Ngabaikake kurva sinau**: pangukuran minggu-2 nangkep efek anyar ing arah endi wae; ukuren ing kahanan mapan ([cakrawala wektu](../cakrawala-wektu/)).

## Sumber

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>
