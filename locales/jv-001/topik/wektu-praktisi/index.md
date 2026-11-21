# Wektu Praktisi (Practitioner Time)

Wektu praktisi iku sumber daya paling langka ing umume sistem kesehatan. Ngukur nilai ngirit menit-menit dokter saben dina mbutuhake owah saka matematika upah prasaja menyang **biaya peluang lan kapasitas sistem**: ing layanan kesehatan nasional, wektu praktisi iku bottleneck operasional kaku, dudu garis biaya sing lentur.

## Kenapa Iki Penting

Sampeyan ora bisa cepet nggawe luwih akeh dokter umum, konsultan, utawa perawat spesialis — pipeline latihan mlaku 5–15 taun, lan lowongan kronis. Dadi sajam wektu praktisi sing dihemat dudu "upah sing dihindari" (praktisi isih dibayar); iku *kapasitas bottleneck sing dibebasake*, lan kapasitas bottleneck regane apa sing diprodhuksi bottleneck. Iki sebabe klaim "ngirit 10 menit saben konsultasi" iku garis sing paling umum lan paling salah rega ing kesehatan digital.

## Matematikane

Telung tingkat valuasi, kanthi kajujuran mundhak:

```
1. Dhasar upah:       jam × tarif gaji sarat (biaya unit PSSRU)
                      — apa biaya wektu, dudu apa sing diprodhuksi
2. Dhasar output:     jam → janji/prosedur sing dimungkinake × nilai skema
                      (deleng national-tariff-and-unit-costs.md)
3. Dhasar bottleneck: yen peran iki nggerbangi kabeh jalur, jam × nilai
                      throughput jalur sing dibebasake (teori kendala)
```

Diskon fragmentasi: wektu sing dihemat ing serpihan ing ngisor kuantum sing bisa dienggo (contone, 3 menit sing kasebar ing klinik) dialihake kanthi elek; trapake faktor utilisasi sing dinyatakake.

## Conto Petungan

Ambient scribing ngirit dokter umum 2 menit saben konsultasi, 30 konsultasi/dina: 60 menit/dina, utawa **220 jam/taun saben dokter umum** ing 220 dina kerja.

```
Dhasar upah:   220 × £80 (jam dokter umum sarat, wilayah-PSSRU) ≈ £17,600/dokter/taun
Dhasar output: 60 mnt/dina = 5 konsultasi 12-mnt ekstra/dina
               = 1,100 janji ekstra/dokter/taun × £42 ≈ £46,200/dokter/taun
               — utawa janji sing padha diserap minangka lembur sing suda lan
               konsultasi sing luwih aman, ora kesusu (garis kualitatif)
```

Ing federasi 50-dokter kapasitas dhasar-output regane ~£2.3M/taun — yen menit nyata (diukur, dudu diklaim vendor), dikonsolidasi (konsultasi utuh, dudu serpihan), lan dialihake (deleng [cash-releasing vs non-cash-releasing](../penghematan-cash-releasing-vs-non-cash-releasing/)).

## Sambungan karo Rékayasa Piranti Lunak

Wektu insinyur senior tumindak padha: iku bottleneck sing dilewati desain, review, lan insiden, mula regani miturut apa sing digerbangi bottleneck, dudu miturut gaji. Valuasi telung tingkat sing padha ditrapake ing klaim "AI ngirit saben pangembang X menit" apa wae — matematika upah nyenengake angka cilik; pitakon jujur yaiku apa menit kumpul dadi blok sing bisa dienggo lan apa sing bener-bener diprodhuksi kapasitas sing dibebasake. Deleng [optimalisasi sumber daya hilir](../optimalisasi-sumber-daya-hilir/) kanggo pengali nalika jam sing dihemat iku duweke wong sing ditunggu kabeh wong liya.

## Jebakan

- **Menit × gaji = penghematan** — inflasi kanonik; iku kapasitas, lan mung ing utilisasi sing dinyatakake.
- **Ngabaikake masalah kuantum**: 12 × penghematan 5-menit ≠ siji jam gratis.
- **Ngregani kabeh peran padha**: sajam bottleneck jalur regane pirang-pirang kali sajam peran non-gerbang.

## Sumber

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
