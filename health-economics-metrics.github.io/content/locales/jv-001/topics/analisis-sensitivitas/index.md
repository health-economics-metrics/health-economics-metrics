# Analisis Sensitivitas (Sensitivity Analysis)

Analisis sensitivitas deterministik (DSA) ngowahi siji asumsi saben wektu ing kisaran sing masuk akal kanggo ndeleng apa kesimpulan slamet. Visualisasi standar iku diagram tornado: parameter diurutake miturut sepira akeh ngayunake asil.

## Kenapa Iki Penting

Saben model ekonomi dibangun ing perkiraan — wektu sing dihemat, panampa, biaya unit. Penilaian teknologi kesehatan nolak nampa perkiraan titik ("ROI-e 340%") tanpa bukti yen kesimpulan tahan marang ora setuju sing masuk akal babagan input. Diagram tornado ngandhani pangambil keputusan *asumsi endi sing kudu diinterogasi*: yen kasus mung makarya nalika parameter sing paling dibantah ing ujung optimistis, kabeh wong bisa ndeleng iku langsung.

Iki kebiasaan paling bisa dialihake saka ekonomi kesehatan menyang kasus bisnis piranti lunak.

## Matematikane

Kanggo saben parameter p kanthi kisaran masuk akal [p_rendah, p_dhuwur]:

```
Asil_rendah = model(p = p_rendah, kabeh liyane ing kasus dhasar)
Asil_dhuwur = model(p = p_dhuwur, kabeh liyane ing kasus dhasar)
Ayunan(p)   = |Asil_dhuwur − Asil_rendah|
```

Urutake parameter miturut ayunan; plot bar horizontal ing sekitar asil kasus-dhasar. Varian: DSA rong-arah (ngowahi rong parameter ing kisi), analisis ambang (temokake nilai parameter ing ngendi keputusan mbalik).

## Conto Petungan

Asisten coding AI kanggo 200 pangembang. Kasus dhasar: lisensi £39/pangembang/sasi; 30 mnt/pangembang/dina dihemat; biaya sarat £60/jam; 220 dina kerja.

```
Manfaat taunan kasus-dhasar = 200 × 0.5j × 220 × £60 = £1,320,000
Biaya taunan                = 200 × £39 × 12         = £93,600
Net kasus-dhasar            = £1,226,400
```

Tornado (siji parameter saben wektu):

```
Wektu dihemat 0.1–1.0 j/dina: net = £170,400 … £2,546,400   (ayunan £2.38M) ← nguwasani
Biaya sarat £40–£80/j:        net = £786,400 … £1,666,400   (ayunan £0.88M)
Dina kerja 200–240:           net = £1,106,400 … £1,346,400 (ayunan £0.24M)
Lisensi £30–£50/sasi:         net = £1,248,000 … £1,200,000 (ayunan £48k)
```

Analisis ambang: manfaat net tekan nol ing kira-kira **2.1 menit/dina** sing dihemat. Keputusan ora sensitif marang rega lisensi lan gumantung babar pisan marang perkiraan wektu-dihemat — mula ukuren iku, dudu liyane. (Lan elinga asile kapasitas, dudu awis — deleng [cash-releasing vs non-cash-releasing](../penghematan-cash-releasing-vs-non-cash-releasing/).)

## Sambungan karo Rékayasa Piranti Lunak

Insinyur wis nindakake naluri iki minangka "apa yen kita salah babagan X?" — DSA mung ndadekake sistematis lan katon. Lebokake diagram tornado ing saben usulan piranti, rencana kapasitas, lan analisis mbangun-vs-tuku. Iku ngowahi argumen babagan firasat sapa sing bener dadi persetujuan babagan parameter endi sing kudu diukur — asring liwat pilot, sing nilaine dhewe bisa diregani (deleng [nilai informasi sampurna sing dikarepake](../nilai-informasi-sampurna-sing-dikarepake/)).

## Jebakan

- **Kisaran sing dipilih kanggo ngelem**: ±10% ing saben input preduli ketidakpastian nyata. Perkiraan wektu-dihemat pantes ±80%; rega lisensi ±10%.
- **Siji-saben-wektu kelalen interaksi** — parameter berkorelasi (panampa lan wektu dihemat) butuh analisis rong-arah utawa [analisis sensitivitas probabilistik](../analisis-sensitivitas-probabilistik/) lengkap.
- **Nindakake analisis lan ngabaikake**: yen tornado ngomong kasus gumantung ing siji angka alus, langkah sabanjure pangukuran, dudu tandha tangan.

## Sumber

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
