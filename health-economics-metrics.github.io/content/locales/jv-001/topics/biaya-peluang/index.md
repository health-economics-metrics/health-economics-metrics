# Biaya Peluang (Opportunity Cost)

Biaya peluang iku nilai alternatif paling apik sing sampeyan lepasake nalika komit sumber daya. Ing sistem kesehatan kanthi anggaran tetep, mbelanjakake £1 yuta kanggo siji bab tegese £1 yuta kesehatan *ora* diprodhuksi ing panggonan liya.

## Kenapa Iki Penting

Biaya peluang iku gagasan paling jero ing ekonomi kesehatan, lan sing paling kerep dilewati insinyur piranti lunak. Anggaran kesehatan tetep ing taun apa wae, mula teknologi anyar ora tau didanai saka dhuwit "ekstra" — iku nggeser barang liya. Pitakon sing bener-bener ditakoni pembayar dudu "apa iki apik?" nanging "apa iki luwih apik tinimbang sing saiki dituku dhuwit sing padha?"

Iki sebabe ambang efektivitas-biaya ana babar pisan: ambang iku perkiraan kesehatan sing dituku dhuwit ing margin sistem saiki. Deleng [ambang kesediaan-mbayar](../ambang-kesediaan-mbayar/).

## Matematikane

Ora ana rumus tunggal; biaya peluang iku disiplin perbandingan:

```
Biaya peluang milih A = nilai alternatif B paling apik sing dilepasake
Gain net saka A = nilai(A) − nilai(B)
```

Tolok ukur empiris: Claxton et al. (2015) ngira NHS ngasilake siji QALY kira-kira **£13,000** ing margin. Dadi £13,000 sing dibelanjakake kanggo teknologi sing ngasilake kurang saka siji QALY ndadekake bangsa *kurang* sehat, sanajan teknologi "makarya."

## Conto Petungan

Anggaran transformasi trust NHS bisa mbiayai persis siji saka:

- **Pilihan A**: piranti lunak e-rostering — ngirit £400,000/taun ing belanja staf agensi.
- **Pilihan B**: piranti lunak koordinasi-pulang — ngirit 2,000 dina amben/taun. Ing biaya marginal kira-kira £150 saben dina amben sing bener-bener dibebasake, iku £300,000/taun, plus perawatan luwih awal kanggo pasien sing ngenteni.

Mbiayai A tegese nglepasake B. Biaya peluang A iku £300,000 B + manfaat pasien; kasus *net* kanggo A mung bedane, dudu £400,000 judhul A. Kasus bisnis apa wae sing mbandhingake usulan marang "ora ngapa-ngapa" tinimbang alternatif paling apik nggedhekake regane.

## Sambungan karo Rékayasa Piranti Lunak

Kapasitas rékayasa uga anggaran tetep — slot peta dalan, dudu pound. Tim platform sing mbiayai piranti A sing ngirit jam-insinyur ing £500/jam nalika piranti B ngirim sing padha ing £200/jam iku ngrusak kapasitas, persis kaya sistem kesehatan sing mbiayai obat £40,000/QALY nggeser perawatan £13,000/QALY. Disiplin pindhah langsung:

- Tansah jenengake pembanding ("versus apa?").
- Regani wektu insinyur ing apa sing bakal diasilake yen ora, dudu mung gaji.
- Anggep "kita isih duwe anggaran" minangka wiwitan analisis, dudu pungkasane.

## Jebakan

- **Mbandhingake karo ora ana.** Pembanding sing bener iku panggunaan dhuwit paling apik sabanjure, sing arang "ora ngapa-ngapa."
- **Nganggep wektu sing dihemat duwe biaya peluang nol.** Wektu sing dihemat mung aji yen dialihake menyang barang sing aji — deleng [penghematan cash-releasing vs non-cash-releasing](../penghematan-cash-releasing-vs-non-cash-releasing/).
- **Ngabaikake perpindahan.** "Anggaran bakal tuwuh nyukupi" meh ora tau bener ing layanan kesehatan nasional ing taun-berjalan.
- **Ngabaikake metode endi sing ngregani sumber daya sing dipindhah.** Kanggo produktivitas sing ilang khusus — saka lara, disabilitas, utawa karyawan sing lunga — deleng [pendekatan modal manungsa vs metode biaya gesekan](../pendekatan-modal-manungsa-vs-metode-biaya-gesekan/), versi khusus-biaya-produktivitas saka gagasan iki.

## Sumber

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/opportunity-cost/>
