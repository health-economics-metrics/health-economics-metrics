# Rollup Biaya Aman-Mata-Uang (Currency-Safe Cost Rollup)

Njumlahake akeh item garis dhuwit — tagihan saben sasi, biaya saben situs, angka dampak anggaran pirang-pirang taun — nganggo angka floating-point binar biasa (`f64`) ngumpulake kesalahan representasi cilik, amarga umume pecahan desimal ($1,234.56, contone) ora bisa diwakili persis ing floating point binar. Saben kesalahan individu cilik banget, nanging model gedhe sing njumlahake atusan utawa ewonan item garis sajrone pirang-pirang taun bisa nyimpang pecahan sen — lan penyimpangan gumantung *urutan* panambahan, sing ndadekake ora bisa direproduksi. Rollup mata uang sing ditindakake ing aritmetika desimal persis (utawa integer unit-minor) njumlahake persis, cocog karo cara sistem akuntansi lan buku besar entri-dobel kudu rekonsiliasi nganti sen.

## Kenapa Iki Penting

Iki kelas bug piranti lunak dhasar sing wis kadokumentasi apik: makalah ACM Computing Surveys Goldberg 1991 "What Every Computer Scientist Should Know About Floating-Point Arithmetic" iku rujukan standar kenapa floating point binar ora bisa makili umume nilai dhuwit desimal persis, lan kenapa njumlahake akeh kuwi nambah kesalahan. Model ekonomi kesehatan lan keuangan NHS rutin njumlahake pirang-pirang taun lan pirang-pirang kategori biaya — [total biaya kepemilikan](../total-biaya-kepemilikan/) lan [analisis dampak anggaran](../analisis-dampak-anggaran/) loro-lorone ngagregasi akeh item garis biaya `f64` ing cakrawala pirang-pirang taun. Nalika model kudu rekonsiliasi nganti sen — audit sing ngitung ulang total kanthi manual kudu entuk angka sing *identik* — aritmetika dhewe kudu desimal-persis, dudu floating point.

## Matematikane

```
Rollup naif:               total = Σ f64(item_garis_i)         — penyimpangan gumantung urutan
Rollup aman-mata-uang:     total = Σ Decimal(item_garis_i)      — persis, bisa direproduksi

Nrapake penyesuaian persentase (contone buffer kontingensi):
  disesuaikan = total × pengali                — asil Decimal persis, bisa nggawa
                                                  luwih akeh desimal tinimbang
                                                  eksponen unit-minor mata uang
  dibulatake  = round(disesuaikan, eksponen_mata_uang, aturan_pembulatan)  — aturan pembulatan
                                                  (half-up vs half-even/pembulatan
                                                  banker) kudu dinyatakake kanthi eksplisit
```

Elinga disiplin rong langkah: ngalikake jumlah `Decimal` persis karo pengali bisa ngasilake luwih akeh desimal tinimbang sing bener-bener digunakake mata uang (telung desimal saka jumlah rong-desimal kali pengali rong-desimal, contone) — presisi tengah kuwi *ora* otomatis dibulatake; mung langkah pembulatan eksplisit, kanthi aturan pembulatan sing dinyatakake, sing nurunake menyang eksponen unit-minor mata uang sing nyata.

## Conto Petungan

Rolas tagihan saben sasi identik $1,234.56 saben siji, dijumlahake nganggo aritmetika desimal persis: $1,234.56 × 12 = **$14,814.72**, persis. Bandhingake karo njumlahake literal `f64` `1234.56` rolas kali ing presisi dobel IEEE-754, sing bisa nyimpang pecahan sen gumantung urutan panjumlahan — kelas bug nyata sing kadokumentasi, dudu masalah kanggo model sing dibangun ing aritmetika `Money` desimal persis.

Saiki trapake buffer kontingensi dampak anggaran standar 5% (pengali 1.05×) ing total $14,814.72 kuwi: $14,814.72 × 1.05 = $15,555.456 — telung desimal, amarga perkalian iku persis lan ora otomatis dibulatake dadi rong desimal mata uang. Mbulatake kuwi kanthi eksplisit dadi 2 desimal nganggo pembulatan banker (half-even) menehi persis **$15,555.46**.

## Sambungan karo Rékayasa Piranti Lunak

Iki piwulang langsung lan dhasar ing mburi "piranti lunak finansial nganggo `Decimal`, dudu `float`" — nyambung kanthi eksplisit karo modul [total biaya kepemilikan](../total-biaya-kepemilikan/) lan [analisis dampak anggaran](../analisis-dampak-anggaran/) repositori iki, sing saiki loro-lorone njumlahake biaya floating-point biasa; argumen kabeneran ing kene ora nuntut migrasi model-model kuwi langsung, nanging nyatakake persis *kapan* sistem kudu rekonsiliasi nganti sen lan mula ora kena nganggo floating point binar kanggo aritmetika dhuwite. Deleng uga [alokasi biaya sen-pas](../alokasi-biaya-sen-pas/) kanggo masalah pendamping mecah (dudu njumlahake) total tanpa kelangan sen.

## Jebakan

- **Ngowahi dadi `float` ing tengah rantai**: njupuk nilai dhuwit dadi angka floating-point ing tengah petungan (sawetara pustaka `Money` malah menehi jeneng metode konversi iki kaya "lossy" minangka peringatan eksplisit) meneng-meneng mbuwang jaminan kepersisan kanggo saben petungan ing hilir titik kuwi.
- **"Decimal kakehan alon ora usah digatekake"**: nolak aritmetika desimal-persis minangka overhead sing ora perlu nalika kabeneran lan auditabilitas — dudu throughput mentah — sing penting kanggo laporan finansial.
- **Nrapake persentase kontingensi tanpa nyatakake aturan pembulatan**: mbulatake half-up versus half-even (pembulatan banker) bisa ngowahi sen pungkasan; konvensi pembulatan dhewe kudu dadi pilihan sing dinyatakake lan bisa diaudit — deleng [analisis biaya-manfaat](../analisis-biaya-manfaat/) kanggo pedoman Green Book HM Treasury ngenani penyesuaian kontingensi lan bias-optimisme, sing persis jinis angka sing dienggo langkah pembulatan iki.

## Sumber

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` pattern.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimism-bias and contingency guidance for budget-impact modelling. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
