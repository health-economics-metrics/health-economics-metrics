# Perbandingan ICER Lintas Mata Uang (Cross-Currency ICER Comparison)

Mbandhingake [ICER](../rasio-efektivitas-biaya-inkremental/) sing diitung ing mata uang siji negara marang [ambang kesediaan-mbayar](../ambang-kesediaan-mbayar/) negara liya — utawa nggabung data biaya sing dikumpulake ing uji multinasional — butuh langkah konversi mata uang sing eksplisit lan bisa diaudit. Yen cara konversi salah, bukti dhasar sing padha bisa mbalikake keputusan adopsi, sanajan ora ana sing owah ing data klinis utawa biaya.

## Kenapa Iki Penting

Pedoman metode ISPOR kanggo uji klinis multinasional (Willke et al., *Health Economics*, 1998) nyaranake ngowahi biaya sumber daya nganggo **paritas daya beli (PPP)** — dudu kurs pasar — nalika mbandhingake nilai ekonomi nyata sumber daya antarane negara, lan nyisihake kurs valuta asing pasar kanggo apa sing sejatine dienggo: nggawe model aliran pembayaran awis lintas wates sing nyata. Nyampur loro-lorone iku salah siji kesalahan metodologi HTA multinasional sing paling umum, persis amarga loro-lorone katon kaya "kurs" kanggo wong sing durung maca pedoman, lan spreadsheet ora nyegah sampeyan salah.

## Matematikane

```
icer_ing_mata_uang_lokal = konversi(icer_ing_mata_uang_sumber, faktor_konversi)

faktor_konversi kudu:
  faktor konversi PPP  — kanggo mbandhingake nilai ekonomi nyata sumber daya
                            antarane negara (disaranake ISPOR kanggo CEA
                            multinasional)
  kurs FX pasar        — mung kanggo pembayaran awis lintas wates nyata

adopsi yen icer_ing_mata_uang_lokal < ambang_lokal
```

Aturan keputusane dhewe iku [aturan ambang ICER](../ambang-kesediaan-mbayar/) biasa — `adopsi yen ICER < λ` — pitakon metodologis sing dibahas topik iki babar pisan bab *faktor konversi endi* sing ngasilake angka `icer_ing_mata_uang_lokal` sing ditrapake aturan kuwi.

## Conto Petungan

ICER obat saka uji AS yaiku $45,000/QALY. Negara pangimpor hipotetis nyetel ambang ilustratife dhewe £34,000/QALY (angka khusus-negara hipotetis kanggo conto iki wae — ambang nyata beda-beda miturut negara lan owah saka wektu menyang wektu, lan kudu tansah diwenehi sumber lan tanggal).

**Nganggo faktor konversi PPP 0.72** (ilustratif, kanggo conto iki wae): $45,000 × 0.72 = £32,400/QALY. £32,400 < £34,000 → **adopsi**.

**Nganggo kurs pasar 0.79** (ilustratif): $45,000 × 0.79 = £35,550/QALY. £35,550 > £34,000 → **tolak**.

ICER $45,000/QALY sing padha ngasilake keputusan adopsi ing konversi PPP lan keputusan tolak ing konversi FX-pasar. Iki ilustrasi konkret kenapa pedoman ISPOR nganggep pilihan faktor konversi iku penting sacara metodologis — dudu rincian pembulatan, lan dudu sing ditinggal implisit ing rumus spreadsheet sing ora ana sing mriksa maneh.

## Sambungan karo Rékayasa Piranti Lunak

Iki pantulan ekonomi kesehatan saka domain rékayasa sing wis dikenal: kabeneran rega multi-mata-uang i18n/l10n ing piranti lunak komersial, ing ngendi kaca rega SaaS ora kena meneng-meneng mbandhingake jumlah `$` karo rega `£`. Jaminan tingkat-tipe sing diwenehake tipe `Money` sing dibangun apik — metode perbandingan sing nolak mbandhingake mata uang sing ora cocog, meksa langkah konversi eksplisit dhisik — iku paralel rékayasa piranti lunak langsung saka titik metodologis ekonomi kesehatan ing kene: aja mbandhingake angka lintas mata uang tanpa konversi, lan aja ndadekake langkah konversi implisit utawa ora kadokumentasi.

## Jebakan

- **Mbandhingake jumlah ing mata uang beda meneng-meneng**: karya HTA spreadsheet ad hoc sing ngurangi utawa mbandhingake angka dolar lan pound tanpa langkah konversi dhisik — kelas bug sing ditangkep tipe `Money` sing ngerti mata uang kanthi desain tinimbang ditinggal minangka kesalahan meneng.
- **Nyampur kurs pasar karo PPP**: kesalahan metode HTA multinasional paling umum miturut pedoman ISPOR — loro angka bisa beda banget lan njawab pitakon beda (nilai ekonomi nyata vs aliran awis nyata).
- **Ora menehi tanggal kurs utawa indeks PPP sing digunakake**: loro-lorone obah saka wektu menyang wektu, mula faktor konversi apa wae sing dikutip kudu diwenehi tanggal kaya repositori iki menehi tanggal angka tolok ukur liyane (nilai karbon Green Book, nilai fatalitas sing dicegah, lsp.).

## Sumber

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
