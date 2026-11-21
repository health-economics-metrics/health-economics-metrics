# Taun Urip Sing Disesuaikan Disabilitas (Disability-Adjusted Life Year, DALY)

DALY iku siji taun urip sehat sing ilang — pantulan sisi-beban saka [QALY](../taun-urip-sing-disesuaikan-kualitas/). Ing ngendi QALY ngetung kesehatan sing *dipikolehi*, DALY ngetung kesehatan sing *ilang* amarga penyakit; intervensi diregani nganggo DALY sing **dihindari**.

## Kenapa Iki Penting

DALY iku standar kesehatan global (WHO, studi Global Burden of Disease, lan umume kementerian kesehatan negara berpenghasilan rendah lan menengah ngrencanakake nganggo DALY). Yen piranti lunakmu ngarah menyang sistem kesehatan internasional, donor, utawa program selaras-WHO, basa nilaine yaiku DALY sing dihindari, dudu QALY sing dipikolehi. Tolok ukur historis WHO-CHOICE: intervensi sing ngindhari DALY kurang saka 1× PDB per kapita "sangat efektif-biaya," 1–3× PDB per kapita "efektif-biaya" (WHO saiki ora nyaranake panggunaan kaku pita iki, nanging isih ana ing endi-endi ing praktik).

## Matematikane

```
DALY = YLL + YLD

YLL (taun urip sing ilang)         = pati × pangarep-arep urip standar nalika umur mati
YLD (taun urip nganggo disabilitas) = prevalensi × bobot disabilitas

bobot disabilitas ∈ [0, 1], 0 = kesehatan kebak, 1 = padha karo pati
(bobot diterbitake studi Global Burden of Disease)
```

## Conto Petungan

Platform pangeling skrining ing sawijining wilayah nambah deteksi awal penyakit. Saben taun nyegah 10 pati prematur (saben siji ilang 20 taun marang pangarep-arep urip standar) lan nyegah 200 wong urip setaun nganggo kondisi kanthi bobot disabilitas 0.2.

```
YLL sing dihindari = 10 × 20        = 200
YLD sing dihindari = 200 × 0.2      = 40
DALY sing dihindari                = 240 saben taun
```

Yen platform biayane $600,000/taun kanggo mlaku, biaya saben DALY sing dihindari yaiku 600,000 / 240 = **$2,500**. Ing negara kanthi PDB per kapita $8,000, iku adoh ing ngisor tolok ukur 1× PDB — "sangat efektif-biaya" miturut istilah WHO-CHOICE.

## Sambungan karo Rékayasa Piranti Lunak

- Kesehatan digital sing ngarah marang pendana kesehatan global (Gavi, Global Fund, program nasional) kudu nyatakake dampak minangka **biaya saben DALY sing dihindari** — iku metrik sing wis dipikirake para reviewer hibah.
- DALY uga cithakan *akuntansi beban* sing migunani kanggo rékayasa: insiden, build flaky, lan gesekan warisan iku "taun urip nganggo disabilitas" kanggo basis kode — inventaris beban sing dibobot toil ngandhani ing ngendi remediasi tuku "taun rékayasa sehat" paling akeh, kaya tabel beban GBD ngarahake belanja kesehatan.

## Jebakan

- **QALY sing dipikolehi ≠ DALY sing dihindari sacara numerik** — bobot beda, tabel urip beda, konvensi beda (DALY historis nganggo pembobotan umur lan diskon ing njero ukuran). Aja ngowahi sembrono.
- **Nggunakake ambang PDB-kelipatan minangka stempel karet** — WHO dhewe ngelingake yen ngabaikake anggaran lan biaya peluang; deleng [ambang kesediaan-mbayar](../ambang-kesediaan-mbayar/).
- **Ngaku DALY skala populasi saka efikasi saben-pangguna** tanpa ngalikake liwat panampa lan kepatuhan — deleng [jangkauan lan keadilan](../jangkauan-lan-keadilan/).

## Sumber

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
