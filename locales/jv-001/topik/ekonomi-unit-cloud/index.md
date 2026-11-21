# Ekonomi Unit Cloud (Cloud Unit Economics, FinOps)

Ekonomi unit cloud ngowahi belanja cloud mentah dadi **biaya saben unit output** — saben pelanggan, saben transaksi, saben kasus rampung, saben token. Iku kapabilitas FinOps sing ngowahi "tagihan AWS kita £400k/sasi" dadi "ngladeni siji pasien biayane £0.83."

## Kenapa Iki Penting

Angka total belanja ora bisa njawab pitakon sing penting: apa produk saya efisien utawa ora? Apa pertumbuhan nambah utawa ngrusak margin? Apa sing kudu kita tagih? Biaya unit njawab kabeh telu. Kanggo kesehatan digital khusus, "biaya saben kasus rampung" *iku* biaya unit layanan kesehatan — langsung bisa dibandhingake karo angka [National Cost Collection](../tarif-nasional-lan-biaya-unit/) sing digunakake komisioner kanggo saben layanan liyane, mula dadi basa alami kanggo ngregani jalur digital marang jalur tradisional.

## Matematikane

```
Biaya unit = total biaya sing dialokasi (kalebu biaya bareng/platform) / unit sing dikirim

Rong kulawarga:
  unit efisiensi-sumber daya: biaya/GB disimpen, biaya/vCPU-jam, biaya/token,
                             biaya/menit-build
  unit bisnis:               biaya/pelanggan, biaya/transaksi, biaya/konsultasi,
                             biaya/kasus-rampung

Disiplin marginal vs rata-rata ditrapake (marginal-vs-average-cost.md):
belanja sing dikomit/dipesen ndadekake biaya unit marginal ≈ 0 nganti
langkah komitmen sabanjure — regani keputusan ekspansi ing marginal,
tren efisiensi ing rata-rata.
```

## Conto Petungan

Layanan triase digital: belanja cloud £62,000/sasi (komputasi £30k, data £18k, alokasi platform bareng £14k), nangani 380,000 episode triase/sasi:

```
Biaya rata-rata saben episode = 62,000 / 380,000 ≈ £0.163

Perbandingan komisioner: triase telpon ≈ £8–12/telpon, konsultasi dokter umum ≈ £42
→ episode digital mlaku ing ~2% saka alternatif manungsa paling murah — ekonomi
pergeseran-saluran saka gds-service-metrics.md, saka sisi biaya.

Pamriksan tren: taun kepungkur £0.21/episode ing 240k episode → ekonomi skala
saya apik (biaya platform tetep diamortisasi), pantes dadi judhul ing QBR.
```

## Sambungan karo Rékayasa Piranti Lunak

Ekonomi unit iku ing endi pilihan rékayasa dadi bisa diwaca keuangan: arsitektur sing nyuda biaya-saben-episode setengah iku kaluwihan rega; sing skala super-linear iku bom wektu sing mung katon ing metrik iki. Praktik sing bisa dialihake saka penghitungan biaya kesehatan: **publikasi aturan alokasi** (biaya bareng ngrusak angka per-unit nganti PLICS nyeragamake penghitungan biaya tingkat-pasien — alokasi biaya platformmu butuh kaku sing padha); **pilih unit sing dipikirake pembeli** (komisioner tuku episode, dudu vCPU); lan umpanake biaya unit menyang saben model [ICER](../rasio-efektivitas-biaya-inkremental/) lan [dampak anggaran](../analisis-dampak-anggaran/) minangka denominator biaya sing otoritatif. Kanggo fitur AI, unite yaiku token — deleng [ekonomi unit inferensi](../ekonomi-unit-inferensi/).

## Jebakan

- **Ngabaikake biaya bareng**: biaya unit tanpa alokasi platform/keamanan/on-call nyepelekake 30–50% lan ambruk nalika diaudit.
- **Denominator vanity**: "biaya saben panggilan API" nyenengake; "biaya saben episode pasien rampung" menehi informasi.
- **Rega biaya-rata-rata kanggo keputusan marginal**: nagih tim biaya unit rata-rata kanggo panggunaan sing marginal gratis ndorong teater-ngindhari-limbah (deleng [tarif nasional](../tarif-nasional-lan-biaya-unit/) kanggo versi NHS saka bug insentif iki).

## Sumber

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
