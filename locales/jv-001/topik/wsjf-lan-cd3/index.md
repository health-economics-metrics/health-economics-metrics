# WSJF lan CD3 (WSJF and CD3)

CD3 (Cost of Delay Divided by Duration) lan WSJF (Weighted Shortest Job First) iku aturan prioritisasi sing njadwalake karya miturut **kapadhetan nilai**: pira biaya tundha sing dibusak saben unit kapasitas langka sing dienggo. Ing kapasitas bareng lan tetep, CD3-paling-dhuwur-dhisik iku urutan optimal sacara matematis kanggo nyuda total biaya tundha.

## Kenapa Iki Penting

Saben backlog iku masalah jatah: akeh item pantes, siji pipeline. Ekonomi kesehatan ngrampungake masalah sing padha kanggo anggaran kesehatan nganggo tabel liga efektivitas-biaya — urutake intervensi miturut kesehatan sing dipikolehi saben pound, danai mudhun dhaptar nganti anggaran entek. CD3 iku logika identik kanggo kapasitas panyampaian: manfaat saben unit *sumber daya sing diwatesi*, didanai miturut urutan peringkat. Nggawe urutan bener iku dhuwit gratis — karya padha, kapasitas padha, total biaya tundha luwih sithik.

## Matematikane

```
CD3  = Cost of Delay (£/minggu) / Durasi (minggu)      — unit nyata (Black Swan Farming)

WSJF = (nilai pangguna-bisnis + kritis-wektu + pangurangan risiko/pemungkin
        kesempatan) / ukuran proyek                    — proksi skala-relatif SAFe,
                                                        skor Fibonacci sing dimodifikasi
```

CD3 kanthi mata uang sejati ([biaya keterlambatan](../biaya-keterlambatan/)) sacara ketat luwih kuwat tinimbang poin tanpa-unit WSJF — WSJF iku kanggo CD3 kaya skor multi-kriteria kanggo [analisis biaya-utilitas](../analisis-biaya-utilitas/) lengkap: bisa dienggo nalika monetisasi ora praktis, bisa dimainake nalika skor ora duwe jangkar.

## Conto Petungan

Telung fitur, siji tim:

```
Fitur   CoD (£/mgg)   Durasi    CD3
A       30,000        10 mgg    3,000
B       12,000        2 mgg     6,000
C       5,000         1 mgg     5,000
```

Urutan CD3: B, C, A. Bandhingake total biaya tundha karo "CoD paling gedhe dhisik" (A, B, C):

```
Urutan CD3 (B,C,A): A ngenteni 3 mgg, C ngenteni 2 → 30k×3 + 5k×2  = £100k biaya tundha
Urutan CoD (A,B,C): B ngenteni 10, C ngenteni 12   → 12k×10 + 5k×12 = £180k
```

Fitur padha, tim padha — urutan wae ngirit £80,000. Intuisine: item cilik lan urgen mlaku dhisik amarga ngeculake biaya tundhane kanthi murah; item gedhe ora kelangan akeh karo ngenteni sedhela.

## Sambungan karo Rékayasa Piranti Lunak

Kanggo portofolio piranti lunak kesehatan, denominasikan CoD ing unit sing diwulangake repositori iki: QALY/minggu × ambang + operasional £/minggu, lan backlog dadi langsung bisa dibandhingake karo cara sistem kesehatan ngurutake kabeh liyane sing dituku. Rong cathetan praktik: (1) durasi tegese *wektu kalender nempati kendala*, dudu usaha — item 2-minggu-trep sing butuh 2 dina tim bottleneck luwih murah tinimbang katon (deleng [optimalisasi sumber daya hilir](../optimalisasi-sumber-daya-hilir/)); (2) rumah sakit nglakokake aturan sing padha kanthi implisit nalika ngurutake dhaptar teater miturut throughput sing dibobot-urgensi — kategori prioritisasi klinis iku CD3 sing dibobot-keparahan (deleng [shortfall QALY lan pengubah keparahan](../shortfall-qaly-lan-pengubah-keparahan/)).

## Jebakan

- **Teater skor WSJF**: debat Fibonacci tanpa-unit konvergen marang sapa sing paling banter; jangkarake paling ora item ndhuwur-backlog ing CoD nyata.
- **Dolanan durasi**: mecah item kanggo nggedhekake peringkat CD3 — apik yen pecahan ngirim nilai mandhiri, penipuan yen ora.
- **Ngabaikake profil urgensi**: CoD wujud-tenggat (tanggal regulasi) ngrusak asumsi tingkat-tetep; jadwalake iku miturut kelayakan tanggal, banjur CD3 sisane.
- **Churn peringkat ulang**: CD3 iku kanggo keputusan urutan nalika komitmen, dudu kanggo ngacak ulang saben dina karya sing lagi mlaku (deleng [metrik aliran](../metrik-aliran/) babagan WIP).

## Sumber

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
