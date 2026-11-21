# Valuasi Opsi Nyata (Real Options Valuation)

Valuasi opsi nyata nrapake logika penentuan rega opsi finansial ing keputusan investasi nyata (non-pasar-finansial) — khusus, *opsi kanggo ngembangake* proyek mengko yen sukses, tanpa kewajiban. Model binomial siji-periode sing disederhanakake (Cox, Ross, Rubinstein, 1979) ngregani fleksibilitas iki langsung, ngowahi "ayo ngirim cilik lan ndeleng" saka firasat dadi angka sing wis diregani.

## Kenapa Iki Penting

Petungan NPV statis ngregani proyek minangka taruhan kabeh-utawa-ora: danai utawa ora, ing skala dina iki, salawase. Proyek nyata — lan utamane peluncuran kesehatan digital bertahap — arang ditaruhake kaya ngono: sistem kesehatan bisa mbiayai pilot cilik, ndeleng apa sing kedadean, lan mung komit dhuwit luwih akeh yen makarya. Fleksibilitas kuwi nduweni nilai nyata, lan ngabaikake nyepelekake investasi bertahap relatif marang sepisan-wae sacara sistematis, sing persis kosok balene kanggo proses pengadaan sing ngganjar usulan bertahap sing katon luwih aman. Valuasi opsi nyata ngregani fleksibilitas dhewe, mula usulan bertahap bisa dibandhingake kanthi adil marang alternatif komitmen-lengkap tinimbang dihukum amarga katon luwih cilik ing garis NPV naif.

## Matematikane

```
Probabilitas risiko-netral kanggo kahanan "munggah":
  p = ((1 + tingkat_bebas_risiko) − faktor_mudhun) / (faktor_munggah − faktor_mudhun)

Payoff ekspansi ing saben kahanan (dilantai ing nol — ngembangake iku opsional):
  payoff_munggah = max(nilai_proyek × faktor_munggah − biaya_ekspansi, 0)
  payoff_mudhun  = max(nilai_proyek × faktor_mudhun  − biaya_ekspansi, 0)

Nilai opsi (payoff sing dikarepake didiskon):
  nilai_opsi = (p × payoff_munggah + (1 − p) × payoff_mudhun) / (1 + tingkat_bebas_risiko)

NPV sing dikembangake = npv_statis + nilai_opsi
```

Nilai proyek bisa munggah (`faktor_munggah`) utawa mudhun (`faktor_mudhun`) ing titik keputusan sabanjure. Ngembangake mung dilakokake yen nguntungake ing kahanan kuwi — lantai payoff ing nol sing ndadekake iki *opsi* sejati tinimbang kewajiban. Kanggo ngregani opsi ngumpulake informasi dhisik, dudu opsi ngembangake mengko, deleng [nilai informasi sampurna sing dikarepake](../nilai-informasi-sampurna-sing-dikarepake/). Kanggo biaya ngenteni nggawe keputusan kuwi, deleng [biaya keterlambatan](../biaya-keterlambatan/).

## Conto Petungan

Pilot layanan digital kanthi `nilai_proyek = £1,000,000`, kemungkinan munggah dadi 1.5× utawa mudhun dadi 0.5× ing titik keputusan sabanjure, tingkat bebas-risiko 8%, lan biaya ekspansi £600,000:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

payoff_munggah = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
payoff_mudhun  = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

Lantai penting: opsi ora bakal dilakokake yen pasar nguciwani —
biaya ekspansi £600,000 ngluwihi £500,000 sing bakal dadi nilai
proyek ing kahanan mudhun.

nilai_opsi = (0.58 × 900,000 + 0.42 × 0) / 1.08
           = 522,000 / 1.08
           ≈ £483,333.33
```

Nambah nilai opsi marang baseline NPV-statis £200,000: NPV sing dikembangake = 200,000 + 483,333.33 ≈ **£683,333.33**. Nglaporake NPV statis £200,000 wae, tanpa nilai opsi iki, bakal nyepelekake regane proyek bertahap sing sejati luwih saka kaping pindho.

## Sambungan karo Rékayasa Piranti Lunak

Iki versi formal saka "kirimake versi minimum saiki, njaga opsi kanggo investasi luwih yen sukses" — langsung relevan karo peluncuran produk kesehatan digital bertahap, sacara struktural paralel karo pigura urutan-ing-ketidakpastian [biaya keterlambatan](../biaya-keterlambatan/) lan [WSJF/CD3](../wsjf-lan-cd3/), lan pelengkap [nilai informasi sampurna sing dikarepake](../nilai-informasi-sampurna-sing-dikarepake/) lan [nilai informasi sampel sing dikarepake](../nilai-informasi-sampel-sing-dikarepake/) — katelu-telune ngregani fleksibilitas utawa informasi ing ketidakpastian, saka sudut beda.

## Jebakan

- **Nginjam rega risiko-netral tanpa asumsi aset-didagangake sing didhasarake**: model opsi nyata nginjam probabilitas risiko-netral saka penentuan rega opsi finansial, sing nganggep nilai dhasar iku aset *didagangake* — kanggo proyek nyata sing pancen ora didagangake iki kenyamanan pemodelan, dudu fakta pasar harfiah.
- **Nganggep `faktor_munggah`/`faktor_mudhun` minangka parameter bebas**: input munggah/mudhun binomial dhewe iku asumsi sing butuh pembenaran, dudu parameter bebas sing dipilih kanggo ngasilake wangsulan sing dikarepake.
- **Nglaporake nilai opsi piyambak**: nilai opsi nyata iku *aditif* marang NPV statis proyek mandhiri — kesalahan umum yaiku nglaporake nilai opsi wae lan ninggalake kasus dhasar, sing nggedhekake kasus yen NPV statis negatif lan nyepelekake (kaya ing conto petungan ing ndhuwur) nalika NPV statis ditinggal babar pisan.

## Sumber

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — ties real options directly to a health-economics decision context. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
