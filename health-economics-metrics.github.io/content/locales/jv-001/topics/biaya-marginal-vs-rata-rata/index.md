# Biaya Marginal vs Rata-rata (Marginal vs Average Cost)

Biaya rata-rata iku total biaya dibagi unit sing diprodhuksi. Biaya marginal iku biaya ngasilake siji unit *tambahan*. Keputusan kudu digawe ing biaya marginal — nanging biaya unit sing diterbitake meh tansah rata-rata.

## Kenapa Iki Penting

Kesalahan paling umum ing kasus bisnis kesehatan digital yaiku ngregani sumber daya sing dihemat ing biaya **rata-rata** nalika penghematan nyata iku biaya **marginal**. Dina amben rumah sakit duwe biaya rata-rata (kebak-diserap) £400+, nanging mbebasake siji dina amben ora ngirit £400 — bangunan, pemanas, lan umume biaya staf terus. Awis sing bener-bener dibebasake mungkin £50–£150 kajaba cukup amben dibebasake kanggo nutup bangsal.

## Matematikane

```
Biaya rata-rata:  AC = TC / Q
Biaya marginal:   MC = dTC/dQ   (biaya siji unit luwih akeh/luwih sithik)

TC = total biaya, Q = kuantitas
```

Biaya tetep ndadekake MC < AC kanggo pangurangan kapasitas, lan MC bisa nyedhaki nol nalika ana kapasitas sisa. Klaim penghematan kudu nganggo:

```
Penghematan nyata = ΔQ × MC          (owah-owahan cilik)
Penghematan nyata = owah-owahan langkah ing TC (owah-owahan gedhe sing nyabrang ambang kapasitas, contone nutup bangsal)
```

## Conto Petungan

Piranti lunakmu nyuda rata-rata lama inap, mbebasake 1,000 dina amben/taun ing sawijining trust.

- **Klaim naif**: 1,000 × £400 biaya rata-rata = **£400,000 dihemat**. Salah.
- **Klaim marginal**: biaya variabel saben dina amben (panganan, laundry, bahan habis, sawetara fleksibilitas keperawatan) ≈ £120. Penghematan = 1,000 × £120 = **£120,000**, *plus* nilai kapasitas sing dibebasake yen amben diisi maneh karo pasien elektif sing ngenteni (penghasilan miturut pambayaran adhedhasar aktivitas, utawa pangurangan dhaptar tunggu).
- **Klaim owah-owahan-langkah**: yen trust mbebasake 7,300 dina amben/taun (bangsal 20-amben) bisa bener-bener nutup bangsal: staf + operasional ≈ £1.5 yuta/taun awis nyata. Saiki matematika biaya-rata-rata luwih cedhak bener.

Intervensi padha, telung angka sing bisa dipertahanake, gumantung apa owah-owahan nyabrang langkah kapasitas.

## Sambungan karo Rékayasa Piranti Lunak

Ekonomi cloud iku wilayah biaya-marginal asli:

- Biaya marginal siji run CI maneh ing kapasitas sing wis dipesen ≈ £0, dene biaya rata-rata saben run (total belanja platform ÷ run) bisa pound. Sistem chargeback sing nagih biaya rata-rata ndorong tim kurang nggunakake kapasitas bareng sing sejatine gratis ing margin.
- Kosok baline, "kita ngirit 30% komputasi" mung ngeculake awis yen instans bener-bener dihentikan utawa reservasi dikurangi — versi piranti lunak saka jebakan dina-amben. Deleng [penghematan cash-releasing vs non-cash-releasing](../penghematan-cash-releasing-vs-non-cash-releasing/).

## Jebakan

- **Ngregani kapasitas ing biaya rata-rata** lan nampilake minangka awis (klasik).
- **Nganggep biaya marginal konstan.** Iku mundhak ing wates kapasitas (penutupan bangsal, tingkat lisensi, komitmen instans-pesenan).
- **Nggunakake biaya marginal kanggo keputusan ekspansi nanging rata-rata kanggo kontraksi** ing kasus sing padha — pilih miturut keputusan sing nyata.

## Sumber

- York Health Economics Consortium glossary: marginal cost. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
