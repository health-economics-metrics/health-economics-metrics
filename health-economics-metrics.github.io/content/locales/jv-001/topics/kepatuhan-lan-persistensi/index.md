# Kepatuhan lan Persistensi (Adherence and Persistence)

Kepatuhan (adherence) yaiku sepira cedhak panggunaan nyata karo panggunaan sing diresepake (intensitas); persistensi yaiku sepira suwe panggunaan terus sadurunge mandheg (durasi). Farmasi duwe ukuran baku — **MPR** lan **PDC**, kanthi ≥80% minangka watesan "patuh" konvensional — lan terapi digital nggawa konsep lan masalahe: kepatuhan iku pengali antarane efikasi lan nilai sing kasembadan.

## Kenapa Iki Penting

Para pembayar wis mlaku nganggo angka-angka iki: PDC ≥80% mlebu ing US Medicare Star Ratings, sing ngobahake pendapatan pembayar nyata — kepatuhan iku infrastruktur sing nanggung beban finansial, dudu metrik alus. Kanggo terapi digital polane padha: data DiGA nuduhake volume resep sing kuwat nanging kepatuhan lestari sing lemah, lan rega DTx adhedhasar asil (teka ing Jerman wiwit 2026) bakal mbayar adhedhasar asil sing diwatesi kepatuhan. Peningkatan konseptual saka riset kesehatan digital: **keterlibatan efektif** — keterlibatan *cukup* kanggo nggayuh asil sing dikarepake — lan akibate, **dosis efektif minimum**, sing ditetepake kanthi empiris saben intervensi, dudu dianggep "luwih akeh luwih apik."

## Matematikane

```
MPR = Σ pasokan dina sing disalurake / dina ing periode × 100   (bisa ngluwihi 100%;
      kegedhen amarga isi ulang awal)
PDC = dina sing katutup pasokan / dina ing periode × 100     (diwatesi 100%;
      estimator konservatif, sing disenengi CMS)
Kepatuhan digital = kedadean panggunaan nyata / kedadean panggunaan sing diresepake × 100
Persistensi       = dina saka wiwitan nganti mandheg
                    (laporake % persisten ing N sasi; metode survival)

Pambatesan nilai: asil sing kasembadan ≈ efikasi × g(kepatuhan)
  ing ngendi g iku fungsi dosis-respons; ing ngisor dosis efektif
  minimum, g ≈ 0 — biaya metu, manfaat ilang
```

## Conto Petungan

Produk CBT digital kanggo insomnia, diresepake minangka 6 modul sajrone 6 minggu; efikasi uji coba 0.025 QALY ing antarane sing ngrampungake ≥4 modul (dosis efektif minimum sing ditetepake kanthi empiris):

```
1,000 resep ing £250 → £250,000 belanja pembayar
Rampunge modul: ≥4 modul 38%; 1–3 modul 34%; nol modul 28%

QALY sing kasembadan = 1,000 × 0.38 × 0.025 = 9.5
Biaya saben QALY  = 250,000 / 9.5 ≈ £26,300 — wates ing ambang NICE

Rékayasa kepatuhan (desain ulang pangeling, nyepetake sesi) munggahake
rampunge ≥4-modul dadi 50%: 12.5 QALY → £20,000/QALY. Produk
nyabrang ambang pendanaan tanpa nggoleki isi terapine.
```

Ing rega adhedhasar kinerja gaya 2026, owah-owahan sing padha ngobahake *pendapatan* langsung — rékayasa kepatuhan dadi peta dalan komersial.

## Sambungan karo Rékayasa Piranti Lunak

Rong kosakata nyawiji ing siji konsep: analitik piranti lunak ([aktivasi](../aktivasi-lan-panampa/), [kelengketan](../metrik-keterlibatan/), [retensi](../retensi-lan-churn/)) lan farmasi klinis (MPR, PDC, persistensi) padha-padha ngukur paparan marang intervensi — petakake kedadean produkmu menyang kosakata klinis lan para pembayar bisa maca dasbormu. Rékayasa nguwasani tuas kepatuhan: logika pangeling (ping saben dina sing bodho nglatih wong ngilangi; wektu adaptif ora), biaya sesi (modul 20 menit luwih arang rampung tinimbang 3×7 menit), lan telemetri gesekan sing nemokake *ing ngendi* ing protokol pangguna mundur. Instrumenake dosis-respons wiwit dina pisanan — analisis dosis efektif minimum sing mbatesi kabeh model ekonomi butuh data panggunaan-sing-disambung-karo-asil sing mung bisa dikumpulake produk.

## Jebakan

- **Campur aduk MPR/PDC**: MPR nggedhekake; nyatakake estimator endi lan gunakake PDC kanggo apa wae sing madhep pembayar.
- **Patuh marang metrik, dudu terapi**: bukak-bukaan diitung minangka dosis (deleng [metrik keterlibatan](../metrik-keterlibatan/)).
- **Target keterlibatan "luwih akeh luwih apik"** ing ngendi intervensi nduweni dosis winates — lulus iku sukses, panggunaan tanpa kendhat dudu.
- **Klaim efikasi adhedhasar sing slamet**: asil ing antarane sing patuh nyakup efek seleksi (wong patuh beda); perkiraan kausal sing jujur butuh randomisasi utawa penyesuaian sing ngati-ati.

## Sumber

- MPR vs PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA adherence findings, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
