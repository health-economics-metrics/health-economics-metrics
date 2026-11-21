# Nilai Informasi Sampurna sing Dikarepake (Expected Value of Perfect Information, EVPI)

EVPI iku jumlah maksimum sing kudu dibayar pangambil keputusan kanggo ngilangi ketidakpastian sadurunge mutusake — rega formal saka "ayo nglakoni studi dhisik."

## Kenapa Iki Penting

Sistem kesehatan terus ngadhepi pilihan: adopsi saiki ing bukti sing ora sampurna, utawa mbiayai riset luwih akeh dhisik. EVPI menehi angka kanggo pilihan kapindho. Yen EVPI £50,000 lan uji sing diusulake biayane £2 yuta, adopsi saiki. Yen EVPI £20 yuta, uji iku murah. Pitakon sing padha — "apa kita kudu pilot iki sadurunge diluncurake?" — muncul kanggo saben keputusan piranti perusahaan, lan meh ora ana sing ngregani. Kanggo ngregani opsi ngembangake proyek mengko, tinimbang opsi ngumpulake informasi dhisik, deleng [Valuasi Opsi Nyata](../valuasi-opsi-nyata/).

## Matematikane

EVPI iku jurang antarane mutusake kanthi pandeleng sampurna lan mutusake saiki ing pangarep-arep:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = parameter sing ora mesthi (kanthi distribusi gabungane)
NMB(j,θ) = manfaat moneter net saka pilihan j diwenehi θ
```

Suku pisanan: rata-rata hasil pilihan-paling-apik ing saben donya sing bisa kelakon (sampeyan tansah milih bener). Suku kapindho: hasil siji pilihan sing paling apik ing rata-rata (sampeyan kudu komit saiki). EVPI ≥ 0 tansah. EVPI populasi dikali cacah keputusan sing kena. Diitung langsung saka draw [PSA](../analisis-sensitivitas-probabilistik/).

## Conto Petungan

Luncurake asisten dokumentasi AI marang 5,000 dokter, utawa ora. Rong donya:

```
Donya A (p = 0.6): asisten ngirit 20 mnt/dina → NMB peluncuran = +£8M
Donya B (p = 0.4): asisten ngirit ~0 (gesekan alur kerja) → NMB peluncuran = −£3M
NMB "aja diluncurake" = £0 ing loro donya.
```

Mutusake saiki: E[NMB peluncuran] = 0.6 × 8 − 0.4 × 3 = **+£3.6M** → luncurake.

Kanthi informasi sampurna: ing donya A pilih peluncuran (+£8M), ing donya B pilih ora ana apa-apa (£0). Nilai sing dikarepake = 0.6 × 8 + 0.4 × 0 = **£4.8M**.

```
EVPI = 4.8M − 3.6M = £1.2M
```

Pilot 3-sasi sing ketat sing biayane £150,000 sing sacara substansial ngrampungake donya endi sing sampeyan ana iku jelas pantes — lan pilot apa wae sing biayane luwih saka £1.2M ora, sanajan teliti.

## Sambungan karo Rékayasa Piranti Lunak

EVPI iku ekonomi spike, pilot, A/B test, lan proof-of-concept. Ngasilake rong aturan praktis:

- **Pilot mung pantes didanai yen keputusan bisa bener-bener owah.** Yen sampeyan bakal ngluncurake preduli asil pilot, EVPI = 0 lan pilot iku teater.
- **Watesi belanja pilot ing EVPI.** Nilai informasi diwatesi nilai keputusan sing diinformasikake.

EVPI parsial (EVPPI) nambah iki menyang parameter tunggal: "apa regane nemtokake angka wektu-sing-dihemat khususe?" — sing ngandhani apa sing kudu diukur pilot. Kanggo ngregani studi *tartamtu* sing diusulake tinimbang ngilangi kabeh ketidakpastian, deleng [EVSI](../nilai-informasi-sampel-sing-dikarepake/).

## Jebakan

- **Mlakokake pilot tanpa aturan keputusan sing dilampirake** — informasi sing ora bisa ngowahi pilihan ora aji miturut definisi.
- **Ngabaikake biaya tundha ngumpulake informasi**: pilot 6-sasi nundha 6 sasi manfaat ([biaya keterlambatan](../biaya-keterlambatan/)); nilai net pilot = EVPI sing dirampungake − biaya tundha − biaya pilot.
- **Nganggep EVPI minangka ramalan.** Iku wates ndhuwur nilai informasi, dudu perkiraan apa sing bakal diwenehake studi tartamtu.

## Sumber

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
