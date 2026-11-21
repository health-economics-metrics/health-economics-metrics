# Penghematan Hard Cash-Releasing (Pertahanan Defisit) (Hard Cash-Releasing Savings, Deficit Defence)

Penghematan hard cash-releasing iku item garis sing bisa dening rumah sakit **dibusak kanthi aktif saka anggaran sasi ngarep** amarga piranti lunakmu. Kanggo akuntan finansial sing ketat — lan trust sing mlaku defisit — iki siji-sijine kelas manfaat sing diitung kanthi lengkap.

## Kenapa Iki Penting

Akeh trust NHS mlaku ing rencana pemulihan-defisit kanthi pengawasan ketat ing saben garis pengeluaran. Ing lingkungan kuwi, manfaat kapasitas lan perbaikan kualitas — sanajan nyata — ora nutup jurang; mung awis sing nutup. Produk piranti lunak sing bisa mbuktekake yen mbusak garis anggaran iku *mbiayai dhewe saka perspektif CFO*, sing ngowahi pengadaan: obrolane mandheg dadi "apa kita bisa nanggung iki?" lan dadi "apa kita bisa nanggung ora nindakake?". Dokumen iki sisi landhep-madhep-defisit saka [penghematan cash-releasing vs non-cash-releasing](../penghematan-cash-releasing-vs-non-cash-releasing/).

## Matematikane

Target awis keras NHS sing paling bisa dipercaya iku **staf sementara tarif-premium**. Trust nutupi kesenjangan nganggo staf "Bank" internal (dibayar tarif kira-kira standar) lan staf "Agency" eksternal (asring 2–3× tarif Agenda for Change, diwatesi nanging kerep dilanggar kanggo peran langka).

```
Penghematan keras = shift premium sing dihindari × (tarif premium − tarif substantif)
                  + jam lembur sing dihindari × premium lembur
                  + kontrak eksternal sing dibatalake × nilai kontrak

Syarat mekanisme: jenengake garis anggaran tartamtu lan manajer sing
bakal ngonfirmasi pangurangane. Yen ora ana sing bisa nuding garis kuwi, dudu awis keras.
```

## Conto Petungan

Perawat Band 6 ilang ~1 jam/shift marang overhead administratif; dokumentasi rutin tumpah ngluwihi pungkasan shift dadi lembur, lan bangsal mesen cakupan Bank ekstra kanggo ngejar dokumentasi.

Piranti lunak mulangake jam kuwi menyang shift sing dijadwalake ing 300 perawat:

```
Lembur sing dihindari: 300 perawat × 2.5 jam lembur dibayar/minggu × £8 premium × 46 minggu
                       ≈ £276,000/taun
Shift bank/agensi:     15 shift ngejar/minggu × £180 premium × 52
                       ≈ £140,400/taun
Total awis keras       ≈ £416,000/taun marang biaya lisensi ~£150,000
```

Saben pound bisa diaudit marang sistem e-rostering lan penggajian — persis kepriye manfaat kudu dibuktekake, saben sasi, liwat [realisasi manfaat](../realisasi-manfaat/). (Model tenaga kerja NHS sing diterbitake wis ngaku rasio nganti £11+ sing dihemat saben £1 sing dibelanjakake ing mekanisme iki; anggep rasio apa wae kaya ngono minangka hipotesis kanggo data rostering trust *mu*, dudu fakta sing bisa dipindhah.)

## Sambungan karo Rékayasa Piranti Lunak

Padha rékayasa saka premium agensi iku pembelian kesusahan organisasi dhewe: tarif-dina kontraktor sing nutupi kesenjangan panyampaian, lembur kanthi insiden, kontrak dhukungan dipercepat, lan panik rega spot cloud. Piranti lunak produktivitas sing ngaku awis keras kudu nyasar garis-garis kuwi kanthi disiplin sing padha — jenengake garis anggaran, pemilik, lan sasi nalika nyusut. Kabeh liyane sing dikirim yaiku kapasitas ([kapasitas penghasil nilai](../kapasitas-penghasil-nilai/)) utawa kualitas: nyata, aji, lan beda.

## Jebakan

- **Nyebut kapasitas "penghematan"** — pembunuh kredibilitas sakdurunge karo keuangan; deleng taksonomi ing [cash-releasing vs non-cash-releasing](../penghematan-cash-releasing-vs-non-cash-releasing/).
- **Rasio model-vendor diwenehake minangka fakta lokal** (masalah £11:£1) — bangun maneh model ing data rostering trust dhewe.
- **Bingung sepisan vs bola-bali**: kontrak sing dibatalake ngirit nilaine saben taun, dudu sepisan; jabatan sing dibusak ngirit gaji mung salawase tetep dibusak.

## Sumber

- NHS England, reducing agency spend in the NHS. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Digital business case guidance, economic case. <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
