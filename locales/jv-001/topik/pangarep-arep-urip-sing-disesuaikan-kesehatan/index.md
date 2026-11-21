# Pangarep-arep Urip Sing Disesuaikan Kesehatan (Health-Adjusted Life Expectancy, HALE)

HALE iku ringkesan tingkat populasi: cacah taun sing bisa diarep-arep wong urip *ing kesehatan kebak*, ngurangi taun sing dilewati ing lara utawa disabilitas. HALE global nalika lahir kira-kira 61.9 taun dibandhingake pangarep-arep urip 73.3 (WHO, data 2019) — manungsa urip dasawarsa pungkasane, rata-rata, ing kesehatan sing kurang saka kebak.

## Kenapa Iki Penting

HALE iku metrik bintang-lor kabijakan kesehatan nasional lan global — pembilang target "tuwa sehat" lan jurang sing dituduhake (pangarep-arep urip dikurangi HALE) iku beban sing arep ditutup pencegahan, intervensi awal, lan manajemen penyakit kronis. Strategi kesehatan digital tingkat kementerian dibenerake ing istilah HALE; portofolio aplikasi, layanan skrining, lan program pemantauan pungkasane nggulung ing kene.

## Matematikane

Petungan standar yaiku **metode Sullivan**:

```
HALE_umur_x = Σ (taun-wong tabel-urip ing saben umur ≥ x × proporsi ing kesehatan kebak)
              / sing slamet ing umur x

"proporsi ing kesehatan kebak" = 1 − Σ (prevalensi_kondisi × bobot disabilitas)
```

Input: tabel urip standar plus prevalensi lan bobot disabilitas kanggo kahanan kesehatan (saka data Global Burden of Disease). HALE gegandhengan karo [DALY](../taun-urip-sing-disesuaikan-disabilitas/) — beban DALY populasi lan jurang HALE iku rong pandangan saka kesehatan sing ilang padha.

## Conto Petungan

Program hipertensi digital nasional: 500,000 kadaftar, kontrol tekanan darah rata-rata mundhak cukup kanggo nyuda insidensi stroke 0.2 poin persentase/taun. Dimodelake ing sepanjang umur kohort, stroke sing dihindari ngirit 15,000 taun sing dibobot-disabilitas (YLD ing bobot 0.32 plus YLL saka stroke fatal).

```
Kontribusi HALE ≈ 15,000 taun sehat / 500,000 wong
                ≈ 0.03 taun (≈ 11 dina) HALE saben wong sing kadaftar
```

Sewelas dina katon cilik — nanging ing skala populasi iku carane metrik nasional bener-bener obah: kementerian tuku jutaan gain cilik saben-wong. Aritmetika iki uga nuduhake kenapa **jangkauan nguwasani**: intervensi kaping pindho luwih efektif kanthi sapratelon pendaftaran ngobahake HALE lima kali kurang. Deleng [jangkauan lan keadilan](../jangkauan-lan-keadilan/).

## Sambungan karo Rékayasa Piranti Lunak

HALE iku pola metrik kesehatan-armada: **umur layanan sing dikarepake × proporsi umur kuwi sing dienggo sehat**. Tim platform bisa ngitung "pangarep-arep umur layanan sehat" ing saindhenge estate — taun layanan diarep-arep mlaku, didiskon wektu ing kahanan degradasi, deprecated, utawa insiden (bobot saka kekurangan SLO). Iku ngowahi keandalan saka ketersediaan titik dadi kesehatan sakumur, lan ngarahake remediasi marang sistem sing nyeret HALE estate mudhun.

## Jebakan

- **HALE obah alon lan multi-sebab** — ora ana intervensi tunggal sing "ngobahake HALE" kanthi bisa diukur; klaim kontribusi sing dimodelake, dudu statistik nasional.
- **Data prevalensi telat** pirang-pirang taun; gain anyar ora bakal katon ing HALE resmi.
- **Mbandhingake HALE antarane negara** kanthi pangukuran kahanan-kesehatan beda iku mbebayani; gunakake kanthi longitudinal ing siji sistem.

## Sumber

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
