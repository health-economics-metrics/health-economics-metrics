# Penghematan Cash-Releasing vs Non-Cash-Releasing (Cash-Releasing vs Non-Cash-Releasing Savings)

Penghematan cash-releasing nyuda belanja nyata — garis anggaran dadi luwih cilik. Penghematan non-cash-releasing mbebasake wektu utawa kapasitas sing *dienggo maneh* tinimbang disimpen. Direktur keuangan sistem kesehatan nganggep iki spesies beda, lan sampeyan uga kudu mangkono.

## Kenapa Iki Penting

Iki tes kajujuran paling landhep sing ditrapake ing kasus bisnis digital apa wae ing layanan kesehatan nasional. Kerangka manfaat NHS kanthi eksplisit nggolongake saben manfaat sing diklaim minangka cash-releasing, non-cash-releasing, utawa kualitatif. Umume "penghematan" kesehatan digital — menit dokter sing dihemat saben pasien, dokumentasi luwih cepet — iku non-cash-releasing: aji, nanging ora nyuda defisit. CFO trust sing ngadhepi jurang pendanaan mung bisa mbelanjakake awis. Deleng uga [penghematan hard cash-releasing](../penghematan-hard-cash-releasing/).

## Matematikane

```
Penghematan cash-releasing   = garis anggaran sadurunge − garis anggaran sawise
                          (kudu bisa dijupuk: kontrak dibatalake, bangsal ditutup,
                           belanja agensi suda, tuku sing dihindari)

Nilai non-cash-releasing = wektu sing dibebasake × biaya unit wektu kuwi
                          (diregani ing biaya peluang; dhuwit ORA bisa dijupuk)
```

Kedadean fisik sing padha (sajam dihemat) ndharat ing siji kategori utawa liyane gumantung apa sing kedadean sabanjure:

```
sajam dihemat → shift lembur/agensi dibatalake        → cash-releasing
sajam dihemat → dokter nulungi siji pasien tunggu maneh → non-cash-releasing (kapasitas)
sajam dihemat → diserap dadi kelonggaran, ora ana owah  → ora ana manfaat babar pisan
```

## Conto Petungan

Piranti lunak ngirit 30 menit saben shift kanggo saben 100 perawat. Iku 100 × 0.5 × 5 shift/minggu × 46 minggu ≈ 11,500 jam/taun. Ing biaya majikan Band 5 ~£25/jam, judhul sing nggodha yaiku £287,500/taun.

Pamilahan sing jujur:

- 20% wektu ndharat ing endi bangsal saiki mbayar premium bank/agensi kanggo nutupi kelebihan dokumentasi: 2,300 jam × £35 tarif agensi = **£80,500 cash-releasing** (shift pancen ora dipesen).
- 60% dialihake menyang perawatan pasien langsung: 6,900 jam × £25 = **£172,500 kapasitas non-cash-releasing** — nilai nyata, dilaporake kapisah, ora tau diarani "penghematan."
- 20% ilang ing istirahat lan gangguan: **£0**. Ngaku iku fiksi.

Kasus bisnis sing nampilake £80.5k awis + £172.5k kapasitas iku kredibel. Sing nampilake "penghematan" £287.5k ditolak dening akuntan pisanan sing maca.

## Sambungan karo Rékayasa Piranti Lunak

Logika sing padha ngatur ROI asisten coding AI: "30 menit saben pangembang saben dina" iku kapasitas non-cash-releasing kajaba headcount, belanja kontraktor, utawa biaya cloud bener-bener mudhun. Laporake kategori kanthi kapisah:

- Cash-releasing: keterlibatan kontraktor sing dibatalake, lisensi piranti sing dipateni, belanja cloud sing suda.
- Kapasitas: fitur dikirim luwih awal (nilai liwat [biaya keterlambatan](../biaya-keterlambatan/)), backlog diurangi.
- Ora ana: menit sing dihemat sing pecah dadi ganti-konteks.

Uga lacak *ing ngendi wektu sing dibebasake bener-bener lunga* — realisasi manfaat ([benefits-realization.md](../realisasi-manfaat/)) ana amarga keuntungan kapasitas sing diklaim asring nguap nalika diaudit.

## Jebakan

- **Ngalikake menit karo gaji lan nyebut penghematan** — dosa kanonik.
- **Ngregani wektu sing dibebasake ing biaya sarat rata-rata** nalika panggunaan marginal wektu kuwi nilai-rendah — deleng [biaya marginal vs rata-rata](../biaya-marginal-vs-rata-rata/).
- **Ngetung jam sing padha kaping pindho**: minangka awis (shift dihindari) lan minangka kapasitas (pasien tambahan ditulungi).

## Sumber

- NHS Digital connectivity business case guidance, economic case (benefit categories). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
