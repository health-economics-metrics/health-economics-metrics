# Realisasi Manfaat (Benefits Realization)

Manajemen realisasi manfaat (BRM) iku disiplin ngenali, nyetel baseline, nglacak, lan *mbuktekake* manawa manfaat sing dijanjekake ing kasus bisnis bener-bener kelakon sawise panyampaian. Ing investasi umum Inggris, iku ana ing **Five Case Model** Green Book HM Treasury; ing kedokteran, sedulure yaiku pengawasan pasca-pasar.

## Kenapa Iki Penting

Kasus bisnis iku janji; realisasi manfaat iku audit. Evaluasi program digital NHS gedhe bola-bali nemokake manfaat prakiraan sing ora tau kelakon — lan nalika manfaat ora cash-releasing, ora ana gunane kanggo garis ngisor trust. Wangsulan Green Book: saben kasus belanja kudu lulus **limang kasus** (strategis, ekonomi, komersial, finansial, manajemen), kanthi realisasi manfaat direncanakake ing kasus manajemen *sadurunge persetujuan* — pemilik dijenengi, baseline dicathet, tanggal pangukuran ditetepake. Tanpa iki, "piranti lunak ngirit 30 menit saben perawat" tetep fiksi vendor salawase.

## Matematikane

```
Tingkat realisasi = manfaat sing diwujudake / manfaat prakiraan   (saben manfaat, saben periode)

Mekanisme sing ndadekake bisa dietung:
  baseline dicathet SADURUNGE go-live (yen ora delta ora bisa diukur)
  saben manfaat: pemilik, metrik, sumber data, jadwal pangukuran
  prakiraan disesuaikan kanggo bias optimisme nalika penilaian (mandat Green Book)
  manfaat digolongake awis / non-awis / kualitatif lan dilacak kapisah
  (deleng cash-releasing-vs-non-cash-releasing.md)
```

## Conto Petungan

Kasus bisnis e-rostering njanjekake, saben taun: pangurangan belanja agensi £450k (awis), 8,000 jam manajer bangsal (kapasitas), kepatuhan fill-rate sing luwih apik (kualitatif). Rolas sasi sawise go-live:

```
Manfaat            Prakiraan   Kasembadan  Tingkat  Bukti
Belanja agensi     £450,000    £287,000    64%      buku besar vs taun baseline
Jam manajer        8,000       5,100       64%      sampel time-motion
Kepatuhan fill     +10pp       +12pp       120%     data sistem rostering

Tindakan saka review (tujuane BRM):
kekurangan agensi dilacak menyang rong bangsal sing ora tau di-onboard → onboard-en;
kesalahan optimisme 30% model prakiraan dicathet → ditrapake ing kasus sabanjure.
```

Realisasi 64% dudu gagal — iku *kawruh*. Kasus sing ora diukur ngaku 100% salawase.

## Sambungan karo Rékayasa Piranti Lunak

Organisasi rékayasa nyetujoni investasi platform adhedhasar manfaat prakiraan lan meh ora tau ngaudit — patologi persis sing didandani BRM. Port entheng: saben proposal ing ndhuwur ambang nyebutake pemilik manfaat, metrik baseline, lan tanggal review T+6-sasi; tingkat realisasi mlebu maneh menyang sepira organisasi ngurangi prakiraan sabanjure saka tim (utawa vendor) kuwi. Iki uga wangsulan kanggo skeptisisme piranti AI: [temuan MIT yen ~95% pilot GenAI ora nuduhake asil P&L sing bisa diukur](../return-on-investment-ai/) iku asil realisasi-manfaat — pilot sing *ngasilake* duwe garis manfaat sing bisa dilacak lan duwe pemilik. Prakiraan → ukur → kalibrasi ulang iku daur sing padha karo pilot sing diregani [EVPI](../nilai-informasi-sampurna-sing-dikarepake/), sing mlaku ing skala portofolio.

## Jebakan

- **Ora ana baseline sadurunge go-live** — omission fatal sing ora bisa didandani.
- **Manfaat yatim**: ora ana pemilik sing dijenengi ateges ora ana sing ngumpulake data lan saben review ngomong "umume ing jalur."
- **Manfaat sing diitung ganda ing antarane program** sing ngaku kapasitas bebas sing padha — jaga register manfaat ing portofolio.
- **Teater realisasi**: ngukur kemenangan kualitatif sing gampang nalika garis awis ora diperiksa.

## Sumber

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
