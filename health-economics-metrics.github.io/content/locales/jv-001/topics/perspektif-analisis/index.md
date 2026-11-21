# Perspektif Analisis (Analysis Perspective)

Perspektif nemtokake biaya lan manfaat *sapa* sing diitung ing analisis ekonomi: pembayar, panyedhiya, utawa masarakat sakabehe. Intervensi sing padha bisa katon apik banget saka siji perspektif lan elek saka perspektif liyane.

## Kenapa Iki Penting

Saben evaluasi ekonomi kudu nyatakake perspektife ing wiwitan, amarga perspektif nemtokake item garis endi sing ana:

- **Perspektif pembayar** (contone, komisioner NHS, asuransi): mung biaya sing diganti pembayar.
- **Perspektif panyedhiya** (contone, trust rumah sakit): biaya panyampaian internal, staf, estate.
- **Perspektif masarakat**: kabeh — kalebu wektu pasien, lelungan, perawatan informal dening kulawarga, lan kerugian produktivitas kanggo majikan.

Kasus acuan NICE nganggo perspektif **NHS lan Personal Social Services (PSS)** kanggo biaya. US Second Panel on Cost-Effectiveness nyaranake nglaporake loro analisis, sektor-kesehatan lan masarakat, kanthi "inventaris dampak" sing nyathet apa sing kalebu.

## Matematikane

Ora ana rumus — aturan pambatesan sing ditrapake sadurunge matematika apa wae:

```
Kategori biaya/manfaat sing kalebu = f(perspektif)
```

Pamriksan migunani: gawe tabel inventaris dampak kanthi siji baris saben biaya/manfaat lan siji kolom saben perspektif, banjur tandhani sel endi sing diitung.

## Conto Petungan

Aplikasi pamriksa gejala ngalihake 10,000 kunjungan dokter umum saben taun menyang perawatan mandiri.

- **Pembayar (NHS)**: ngirit 10,000 × £42 saben konsultasi dokter umum = **£420,000/taun** — positif banget.
- **Panyedhiya (praktik dokter umum)**: yen praktik dibayar kanthi kapitasi, penghasilane ora owah nanging beban kerja mudhun — positif ringan.
- **Masarakat**: tambahake lelungan lan wektu ngenteni pasien sing dihemat, umpamane 10,000 × 2 jam × £15/jam = £300,000 nilai wektu; nanging kurangana cilaka yen 2% ditentremake palsu lan teka mengko, luwih lara, ing 200 × £3,000 = £600,000 perawatan tambahan. Net masarakat: 420,000 + 300,000 − 600,000 = **£120,000/taun** — positif, nanging didominasi asumsi keslametan.

Aplikasi sing padha, telung wangsulan beda. Pernyataan perspektif sing ndadekake angka-angka bisa dibandhingake lan jujur.

## Sambungan karo Rékayasa Piranti Lunak

ROI piranti lan platform uga duwe perspektif:

- **Anggaran tim ("pembayar")**: apa biaya lisensi cocog karo pusat biayaku?
- **Organisasi platform ("panyedhiya")**: total biaya kalebu integrasi, dhukungan, lan pangopènan.
- **Perusahaan ("masarakat")**: kalebu dampak pelanggan, eksternalitas keamanan, lan wektu saben tim sing kena.

Piranti CI sing murah kanggo tim sing tuku nanging nyurung gaweyan migrasi menyang 40 tim liyane iku versi piranti lunak saka pamindhahan biaya — mung katon saka perspektif sing luwih amba. Nyatakake perspektif ing saben kasus bisnis; reviewer ora bisa nantang asumsi sing ora bisa dideleng.

## Jebakan

- **Ngalih perspektif meneng-meneng**: ngetung manfaat masarakat nanging mung biaya pembayar gawe apa wae katon efektif-biaya.
- **Ngetung ganda** nalika perspektif digabung (contone, ngetung janji dokter umum sing dihemat minangka tabungan pembayar lan wektu pasien nalika angka pembayar wis nyakup wektu staf).
- **Ngabaikake pamindhahan biaya**: "tabungan" sing mung mindhah biaya menyang pasien, perawat keluarga, utawa departemen liya.

## Sumber

- Sanders GD, et al. "Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine." JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
