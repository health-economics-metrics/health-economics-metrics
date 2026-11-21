# Alokasi Biaya Sen-Pas (Exact-Cents Cost Allocation)

Mecah jumlah dhuwit total — hibah bareng, tagihan infrastruktur, angka dampak anggaran — marang pirang-pirang panampa nganggo aritmetika persentase naif rutin ngasilake bagean sing ora cocog maneh karo total asli. Alokasi sen-pas iku pangowahe: cara integer/desimal, makarya ing unit mata uang minor (sen), sing njamin bagean-bagean cocog *persis* karo kabeh, sanajan dibagi ora rata. Insinyur piranti lunak apa wae sing kudu rekonsiliasi total pecahan nganti sen — penggajian, penyaluran hibah, chargeback layanan-bareng — butuh pola iki, dudu persentase floating-point.

## Kenapa Iki Penting

Iki pola dhasar sing dijenengi ing rékayasa piranti lunak perusahaan: *Patterns of Enterprise Application Architecture* Martin Fowler (2002) nyathet `Money` lan `Allocate` persis amarga "bagi $100 dadi telu" iku masalah sing kode naif salah terus, lan salah meneng-meneng — kesalahan mung muncul nalika ana sing rekonsiliasi buku lan nemokake bagean kurang (utawa lebih) sen saka total. Ing karya ekonomi kesehatan lan keuangan NHS iki dudu akademis: total dampak anggaran dipecah ing situs, taun, utawa direktorat; biaya infrastruktur lan lisensi bareng dibagi ing departemen miturut headcount utawa bagean aktivitas. Saben pamecahan kudu rekonsiliasi persis, amarga direktur keuangan sing diwenehi bagean sing ora jumlah total mandheg percaya karo kabeh model.

## Matematikane

```
Cara naif (rusak):
  bagean_i = round(total × bagean_i / Σ bagean)     — mbulatake saben bagean mandhiri

Cara persis (sisa paling gedhe / "alokasi sisa paling gedhe"):
  1. dhasar_i = floor(total_unit_minor × bagean_i / Σ bagean)   — mung unit minor (sen) utuh
  2. sisa = total_unit_minor − Σ dhasar_i                        — sen kelebon, tansah < cacah panampa
  3. bagekake 1 unit minor ekstra marang `sisa` panampa kanthi
     sisa pecahan paling gedhe saka langkah 1, nganti kelebon entek

Asil: Σ bagean_i == total, tansah, kanthi desain.
```

Cara persis ora tau mbulatake bagean kanthi mandhiri — mbulatake *kabeh alokasi* minangka siji operasi, sing ndadekake invarian jumlah tetep.

## Conto Petungan

Bagi $100.00 dadi telu padha (`bagean = [1, 1, 1]`).

Cara naif: $100.00 ÷ 3 = $33.333…, dibulatake mandhiri menyang sen paling cedhak menehi $33.33 kanggo saben panampa. Dijumlah: $33.33 × 3 = $99.99 — siji sen ilang, lan ora ana item garis siji sing "salah" cukup kanggo dideteksi kanthi pamriksan.

Cara persis: `dhasar` = $33.33 kanggo telu kabeh (9,999 unit minor total saka `floor(10,000 / 3) = 3,333` sen saben siji), nyisakake 1 sen (10,000 − 9,999). Sen kelebon siji kuwi menyang panampa sing duwe sisa pecahan paling gedhe ing pambagian — panampa tartamtu iku rincian tie-break internal, dudu sing kudu diandelake caller. Loro panampa entuk $33.33 lan siji entuk $33.34, lan telu bagean jumlah persis $100.00.

Iki persis aritmetika sing dibutuhake [analisis dampak anggaran](../analisis-dampak-anggaran/) nalika angka total dampak anggaran kudu dipecah ing situs, kohort, utawa taun fiskal lan direkonsiliasi bali menyang total sing diterbitake — deleng [rollup biaya aman-mata-uang](../rollup-biaya-aman-mata-uang/) kanggo masalah pendamping njumlahake akeh item garis kaya ngono tanpa drift.

## Sambungan karo Rékayasa Piranti Lunak

Iki secara harfiah "pola Money" saka arsitektur piranti lunak perusahaan — pola dhasar sing dijenengi kanggo persis kelas bug iki, dudu trik sepisan. Kegagalan rekonsiliasi finansial nyata wis dikirim saka persis kelas bug iki: pamecahan persentase sing diitung ing `f64`, dibulatake saben-panampa, lan ora tau dipriksa marang total asli. Nyambung langsung karo modul [total biaya kepemilikan](../total-biaya-kepemilikan/) repositori iki, sing saiki njumlahake biaya floating-point biasa ing taun lan pilihan — disiplin kepersisan sing padha ditrapake nalika total TCO utawa dampak anggaran kudu dialokasi, dudu mung dijumlahake.

## Jebakan

- **Persentase-banjur-bulat tinimbang sisa-paling-gedhe**: ngalokasi nganggo persentase floating-point lan mbulatake saben panampa mandhiri, sing nambah kesalahan pembulatan lan arang cocog bali menyang total, utamane ing akeh panampa.
- **Ngabaikake eksponen unit-minor mata uang**: nganggep saben mata uang duwe 2 desimal — Yen Jepang duwe 0, sawetara mata uang duwe 3 — pamecahan persentase gawe-dhewe biasane hard-code 2 lan rusak meneng-meneng kanggo mata uang liya; rutin alokasi-persis maca eksponen saka mata uang dhewe (ISO 4217).
- **Ngalokasi ulang sisa sing wis dialokasi**: mlakokake rutin alokasi maneh ing sing isih ana saka alokasi sadurunge, tanpa pamriksan idempotensi, sing bisa menehi kredit ganda sen sing padha marang panampa sing padha.

## Sumber

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` and `Allocate` patterns.
- ISO 4217 — currency and funds code standard, which defines each currency's minor-unit exponent.
