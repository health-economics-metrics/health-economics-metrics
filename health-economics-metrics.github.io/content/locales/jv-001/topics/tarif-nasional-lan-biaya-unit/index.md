# Tarif Nasional lan Biaya Unit (National Tariff and Unit Costs)

NHS mbayar panyedhiya kanggo aktivitas miturut dhaptar rega nasional adhedhasar-aturan — historis National Tariff / Payment by Results, diganti **NHS Payment Scheme (NHSPS)** ing 1 April 2023. Ing mburi rega ana infrastruktur penghitungan-biaya-unit nasional: **National Cost Collection (NCC)** lan kompendium **PSSRU Unit Costs of Health and Social Care**.

## Kenapa Iki Penting

Iki denominator saben kasus bisnis NHS sing kredibel. Nalika klaim ngomong "kunjungan rawat jalan regane £160" utawa "jam perawat Band 6 biayane £31", angka-angka kuwi asale saka infrastruktur iki — lan nggunakake angka resmi tinimbang sing dikarang iku sing ndadekake evaluasi independen bisa dibandhingake lan tim keuangan kooperatif. Kanggo vendor, tarif uga nemtokake sisi *pendapatan*: aktivitas sing dimungkinake piranti lunakmu (klinik ekstra, amben sing diisi maneh) diregani ing rega skema.

## Matematikane

```
Rega tarif saben unit aktivitas (spell dikode-HRG, kunjungan rawat jalan)
  = biaya unit rata-rata nasional (saka NCC) × Market Forces Factor (penyesuaian lokal)
  ing NHSPS: unsur campuran tetep + variabel ("pambayaran selaras lan insentif")
Biaya unit NCC = total biaya sing dilaporake trust saka jinis aktivitas / volume aktivitas
                (dibangun ing Patient-Level Information and Costing Systems, PLICS)
Kompendium PSSRU: ~80 biaya unit standar (konsultasi dokter umum, jam-perawat miturut band,
kunjungan ED…) — sumber default ing evaluasi ekonomi UK.
```

## Conto Petungan

Piranti lunakmu mbebasake 1 jam/dina wektu perawat Band 6 ing taun kerja 250-dina:

```
Biaya Band 6 adhedhasar-PSSRU kalebu overhead ≈ £31/jam (priksa edisi saiki)
Nilai kapasitas = 250 × £31 = £7,750/perawat/taun (non-cash-releasing)
```

Utawa perawat nindakake 2 janji tindak lanjut rawat jalan ekstra/dina ing ~£160 nilai skema: 500 × £160 = **£80,000/taun aktivitas sing didanai** — beda sepuluh kali lipat ing nilai sing diklaim gumantung redeployment, kabeh saka biaya unit resmi. Loro klaim bisa diaudit amarga denominator diterbitake; iku titik kabeh.

## Sambungan karo Rékayasa Piranti Lunak

Iki pola **buku rega internal**. Ekonomi kesehatan UK bisa amarga saben evaluasi nganggo biaya unit sing diterbitake padha; organisasi rékayasa umume ora duwe iki, mula saben kasus bisnis nggawe biaya jam-insinyur, insiden, deploy dhewe. Tim platform bisa nerbitake buku kaya ngono — biaya sarat saben jam-insinyur miturut tingkat, saben insiden miturut keparahan, saben menit-build — lan mbutuhake panggunaane ing kabeh proposal. Sistem chargeback/showback uga niru mode kegagalan tarif sing wis dikenal: rega biaya-rata-rata ndorong dolanan volume, pambayaran tetep ndorong kurang-nyedhiyakake. Evolusi NHSPS saka pambayaran aktivitas murni dadi campuran tetep+variabel iku rong puluh taun piwulang ing desain insentif kanggo rega platform internal.

## Jebakan

- **Angka kadaluwarsa**: rega NCC, PSSRU, lan NHSPS dianyari saben taun — wenehana tanggal saben angka.
- **Rega tarif ≠ biaya**: rega iku rata-rata nasional kanthi penyesuaian; biaya marginal lokalmu beda (deleng [biaya marginal vs rata-rata](../biaya-marginal-vs-rata-rata/)).
- **Ngregani kapasitas ing tarif tanpa mekanisme** kanggo bener-bener ngirim lan dibayar kanggo aktivitas ekstra.

## Sumber

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
