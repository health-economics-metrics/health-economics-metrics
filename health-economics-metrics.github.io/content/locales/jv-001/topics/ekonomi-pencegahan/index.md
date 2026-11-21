# Ekonomi Pencegahan (Prevention Economics)

Ekonomi intervensi sadurunge penyakit dumadi utawa berkembang. Temuan judhul kuwi nglawan intuisi: **umume pencegahan ora ngirit dhuwit** — tuku kesehatan ing rega apik. Analisis NEJM landmark Cohen, Neumann lan Weinstein nemokake kurang saka 20% intervensi pencegahan sing ngirit-biaya net; sisane efektif-biaya paling apik.

## Kenapa Iki Penting

"Pencegahan ngirit dhuwit" iku klaim palsu sing paling kerep dibaleni ing kabijakan kesehatan, lan kasus bisnis sing dibangun ing iku dirobohake ekonom kesehatan. Struktur jujur: pencegahan mbutuhake dhuwit saiki (skrining kabeh populasi, ngobati faktor risiko ing wong sing ora bakal lara) lan ngasilake kesehatan mengko — biasane ing biaya saben QALY sing *apik*, kadhang ing penghematan, kadhang ing rega elek. Ngerti rezim endi sing sampeyan alami iku analisis. Bedane penting sacara komersial: produk pencegahan sing didol minangka "ngirit dhuwit NHS" ngundang audit sing bakal gagal; didol minangka "tuku QALY ing £4,000" bisa menang ing fakta sing padha. Deleng [intervensi luwih awal](../intervensi-luwih-awal/) kanggo versi njero-jalur. Sadurunge ngregani program pencegahan, [fraksi atribut populasi](../fraksi-atribut-populasi/) njawab pitakon ukuran dhisik — pira beban penyakit sing disasar faktor risiko sing ditangani program kuwi bisa dibusak.

## Matematikane

```
Biaya net pencegahan (saben wong) =
    biaya intervensi × kabeh sing diobati
  − biaya hilir sing dihindari × sawetara sing bakal berkembang
  (loro-lorone didiskon — biaya sing dihindari taun-taun adoh; deleng
   discounting-and-time-preference.md)

Ngirit-biaya mbutuhake: biaya intervensi < P(perkembangan) × biaya sing dihindari × faktor diskon
Efektif-biaya mung mbutuhake: biaya net / QALY sing dipikolehi < ambang
```

Paradoks pencegahan: biaya intervensi dikali ing kabeh populasi; manfaat mung nambah marang sawetara kontrafaktual.

## Conto Petungan

Aplikasi manajemen hipertensi ditawakake marang 100,000 wong diwasa risiko, £25/wong/taun. Sajrone 10 taun nyegah 400 stroke (saben siji biayane £45,000 didiskon, lan 3 QALY ilang).

```
Biaya:   100,000 × £25 × 10 taun (didiskon ≈ ×8.3) ≈ £20.8M
Offset:  400 × £45,000 = £18.0M
Biaya net ≈ £2.8M — DUDU ngirit-biaya
QALY sing dipikolehi = 400 × 3 = 1,200
Biaya saben QALY = 2.8M / 1,200 ≈ £2,300/QALY — efektif-biaya banget
```

Program sing padha, loro kabeh bener: kelangan £2.8M awis lan tuku kesehatan ing sapuluhan ambang NICE. Danai ing angka nomer loro; aja njanjekake sing nomer siji.

## Sambungan karo Rékayasa Piranti Lunak

Kualitas shift-left iku ekonomi pencegahan, kanthi catetan kalebu. Review, tes, lan analisis statis nrapake biaya ing *saben* owah-owahan kanggo nangkep masalah ing sawetara sing bakal berkembang dadi insiden produksi. Kurva biaya-cacat (10–100× miturut tahap) nduweni peran biaya stroke — lan kesimpulan jujur nyerupai kesehatan: shift-left biasane efektif-*biaya*, ora otomatis ngirit-*biaya*, amarga umume masalah sing dikibarake ora bakal dadi insiden (masalah kontrafaktual-sawetara). Etungen: total biaya gerbang saben periode vs insiden sing bener-bener dihindari × biaya insiden — struktur conto petungan sing padha, kanthi [NNT](../jumlah-sing-perlu-diobati/) minangka unit saben-tangkapan.

## Jebakan

- **Ngaku penghematan biaya nalika bukti ndhukung efektivitas-biaya** — kesalahan sing nemtokake advokasi pencegahan ing loro domain.
- **Offset mbesuk sing ora didiskon**: manfaat 15 taun maneh ing nilai nominal.
- **Ngabaikake biaya overdiagnosis/overtreatment**: pencegahan nemokake pseudo-penyakit uga — deleng [ekonomi skrining](../ekonomi-skrining/).

## Sumber

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
