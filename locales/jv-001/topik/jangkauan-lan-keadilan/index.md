# Jangkauan lan Keadilan (Reach and Equity)

RE-AIM — Reach, Effectiveness, Adoption, Implementation, Maintenance — iku kerangka standar kanggo ngadili dampak *populasi* intervensi. Aritmetika pusate: **dampak kesehatan masarakat ≈ jangkauan × efektivitas**. Piranti digital nambah dimensi keadilan: jurang digital tegese jangkauan ora rata sacara sistematis, lan panyampaian digital-dhisik bisa nggedhekake jurang kesehatan sing arep ditutup.

## Kenapa Iki Penting

Tinjauan sistematis sing nrapake RE-AIM ing mHealth nemokake tandha konsisten: Jangkauan lan Adopsi kuwat, **Efektivitas lan Pangopènan lemah** — aplikasi gampang nyebar lan cepet sirna. Kanggo layanan kesehatan nasional, iki tegese produk saben-pangguna sing nyengsemake bisa dadi investasi populasi sing elek, lan kosok baline: piranti sing sederhana efektif nanging ngrambah jutaan bisa ngungkuli sing brilian sing ngrambah ewonan (deleng aritmetika [HALE](../pangarep-arep-urip-sing-disesuaikan-kesehatan/)). Keadilan dudu kendala sampingan nanging pendorong nilai: pengecualian digital nyusuri umur, kekurangan, disabilitas, lan basa — persis populasi sing nanggung beban paling bisa diobati — mula pangguna sing ora kalebu marginal asring duwe potensi manfaat *ing ndhuwur rata-rata*. Kanggo ukuran statistik formal ketimpangan kesehatan gegandhengan-sosial-ekonomi, deleng [Indeks Konsentrasi](../indeks-konsentrasi/).

## Matematikane

```
Dampak populasi ≈ jangkauan × efektivitas
  jangkauan     = peserta / populasi sing layak (deleng activation-and-uptake.md)
  efektivitas   = efek donya nyata ing antarane peserta (dibobot-retensi —
                  deleng retention-and-churn.md)

Versi stratifikasi-keadilan:
  dampak_kelompok_g = jangkauan_g × efektivitas_g, dilaporake saben kuintil
  kekurangan / pita umur / kelompok basa
  jurang keadilan = dampak_kuintil ndhuwur − dampak_kuintil ngisor

Efektivitas-biaya distributif: trapake bobot keadilan ing QALY miturut
kelompok panampa — QALY kanggo sing paling kurang beruntung diitung luwih
(ekstensi HTA sing saya umum).
```

## Conto Petungan

Program pencegahan diabetes digital, dilaporake kanthi rong cara:

```
Agregat: jangkauan 12%, efek 0.02 QALY/peserta → 0.0024 QALY/wong sing layak

Stratifikasi (kuintil kekurangan):
  Q1 (paling ora kekurangan): jangkauan 22%, efek 0.02 → 0.0044
  Q5 (paling kekurangan):     jangkauan 4%,  efek 0.025 → 0.0010

Program ngirim 4.4× luwih akeh kesehatan marang sing paling ora kekurangan —
nalika efek saben-peserta Q5 LUWIH DHUWUR (luwih akeh ruang). Lengen
digital-dibantu (coaching telpon + akses komunitas) sing biayane 20%
luwih akeh saben peserta Q5 sing munggahake jangkauan Q5 dadi 12% nglipatigakake
dampak Q5 lan nambah agregat — investasi keadilan IKU investasi
efisiensi ing kene.
```

## Sambungan karo Rékayasa Piranti Lunak

Jangkauan umume artefak rékayasa: syarat lantai piranti lan OS, asumsi bandwidth, dhukungan basa, kesesuaian aksesibilitas (WCAG), alangan verifikasi-identitas, lan distribusi mung-app-store saben siji ngukir populasi metu saka denominator — biasane ora katon, amarga pangguna sing dikecualekake ora tau muncul ing analitik. Praktik rékayasa sing ngobahake keadilan: ukur *denominator* (instrumenake populasi sing layak, dudu mung pangguna); anggarake kinerja kanggo piranti lawas lan sambungan elek; kirimake jalur digital-dibantu (telpon, SMS, kios) minangka alur kelas-siji tinimbang saluran isin; lan stratifikasi saben metrik dasbor miturut dimensi keadilan — rata-rata tanpa stratifikasi iku ing ngendi ketidakadilan ndhelik ([panampa GDS](../metrik-layanan-gds/) nggawa peringatan sing padha).

## Jebakan

- **Efektivitas dilaporake ing sing ngrampungake, dampak diklaim ing populasi** — suku jangkauan meneng-meneng dibuwang.
- **Keadilan minangka audit sawise kedadean** tinimbang input desain; nambah jangkauan sawise iku luwih larang tinimbang ngrancang kanggo iku.
- **Amnesia pangopènan**: dimensi mHealth paling lemah RE-AIM — klaim dampak ngluwihi cakrawala wektu bukti.
- **Penghematan saluran digital-wae** sing mindhah biaya marang pangguna sing dikecualekake lan staf ngarep (deleng [metrik layanan GDS](../metrik-layanan-gds/)).

## Sumber

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
