# Biaya Outsourcing sing Bisa Dihindari (Avoidable Outsourcing Costs)

Nalika trust ora bisa nyukupi target nganggo kapasitas internal, dheweke tuku kapasitas ing tarif premium: lembur akhir minggu kanggo staf dhewe, utawa outsourcing prosedur menyang panyedhiya swasta. Nilai ekonomi piranti lunak pambebas-kapasitas kalebu **biaya sing bisa dihindari saka karya tarif premium kuwi**.

## Kenapa Iki Penting

Ing tekanan pemulihan elektif, trust rutin mbayar rega spot sektor swasta (asring 1.2–1.5× rega skema NHS) utawa tarif waiting-list-initiative premium marang konsultane dhewe kanggo daftar akhir minggu. Beda karo klaim kapasitas biasa, outsourcing sing dihindari iku **cash-releasing**: tagihan menyang panyedhiya swasta pancen ora digawe. Kuwi ndadekake siji saka garis manfaat paling kuwat kanggo piranti lunak sing nambah throughput internal — lan siji saka sing paling gampang dibuktekake, amarga belanja outsourcing wis dadi garis anggaran sing katon.

## Matematikane

```
Biaya outsourcing sing bisa dihindari = aktivitas sing dipindhah menyang internal × (rega unit outsourcing
                             − biaya marginal internal saben kasus)

Biaya marginal internal: bahan habis + staf variabel kanggo aktivitas ekstra
— estate tetep wis kebayar (deleng marginal-vs-average-cost.md).
```

Klaim mbutuhake kapasitas internal sing dibebasake bener-bener bisa nampung aktivitas: sesi teater, amben, lan staf kabeh kudu ana (kendala sing ngiket nguwasani — teori kendala maneh).

## Conto Petungan

Sawijining trust ngoutsource 800 prosedur katarak/taun ing £900 saben siji: £720,000/taun belanja eksternal, dibandhingake rega skema ~£750.

Piranti lunak penjadwalan teater (optimalisasi daftar, ngisi kekosongan saka pembatalan, pelacakan wektu pergantian) munggahake utilisasi teater internal cukup kanggo mbalekake 500 prosedur:

```
Biaya marginal internal saben kasus ≈ £350 (bahan habis + staf sesi)
Penghematan = 500 × (900 − 350) = £275,000/taun — cash-releasing
Outsourcing sing isih: 300 × £900 = £270,000 (biyen £720,000)
```

Biaya piranti lunak £90,000/taun → net ≈ **+£185,000/taun awujud awis sing bisa disimpen**, plus manfaat kualitas internal lan latihan saka njaga karya ing njero.

## Sambungan karo Rékayasa Piranti Lunak

Analog langsung iku **premium kontraktor lan konsultan**: nalika kapasitas rékayasa internal ora bisa nyukupi komitmen, organisasi tuku kapasitas eksternal ing 1.5–3× tarif internal sarat. Investasi platform lan produktivitas sing munggahake throughput internal kudu ngaku belanja kontraktor sing dihindari persis kaya ing ndhuwur — tarif dina eksternal dikurangi biaya marginal internal, dikalikan karya sing dibalekake — amarga iku siji saka sawetara garis sing pancen cash-releasing ing kasus bisnis produktivitas pangembang. Peringatan sing padha ditrapake: kapasitas internal kudu pancen ana lan dijadwalake menyang karya sing dibalekake, yen ora klaime fiksi.

## Jebakan

- **Ngaku repatriasi tanpa rantai kapasitas lengkap** — ahli bedah bebas nanging ora ana slot teater (utawa insinyur bebas nanging ora ana bandwidth manajemen produk) ora mbalekake apa-apa.
- **Mbandhingake rega outsourcing karo biaya rata-rata internal** tinimbang biaya marginal — nyepelekake penghematan, aneh ya; biaya tetep mlaku loro-lorone.
- **Asimetri kualitas/kompleksitas**: kasus outsourcing asring sing gampang; mbalekake kuwi ngowahi campuran kasus internal lan biaya unit.

## Sumber

- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
