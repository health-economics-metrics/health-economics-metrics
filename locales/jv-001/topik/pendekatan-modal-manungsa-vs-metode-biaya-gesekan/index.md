# Pendekatan Modal Manungsa vs Metode Biaya Gesekan (Human Capital Approach vs Friction Cost Method)

Iki rong metode saingan kanggo ngregani produktivitas sing ilang — saka lara, disabilitas, utawa pati — ing studi biaya-penyakit lan biaya-manfaat. Pendekatan Modal Manungsa (HCA) ngregani kabeh output sing ilang kanggo durasi absen lengkap ing tarif upah; Metode Biaya Gesekan (FCM) ngregani mung kanggo periode luwih cendhak sing bener-bener dibutuhake majikan kanggo mulihake produksi. Milih antarane loro ngowahi perkiraan biaya-ora-langsung kanthi rong kali utawa luwih.

## Kenapa Iki Penting

Biaya ora-langsung (produktivitas) iku salah siji item garis sing paling dibantah ing ekonomi kesehatan persis amarga rong metode standar ora cocog banget. HCA nganggep saben dina absen minangka dina output sing bener-bener ilang saka ekonomi, diregani ing upah lengkap kanggo durasi lengkap — utawa, kanggo pati utawa disabilitas permanen, kanggo sisa umur kerja. FCM mbantah yen ing ekonomi kanthi pengangguran lan kelonggaran pasar tenaga kerja, umume absen dawa ora bener-bener nyuda output nasional sawise majikan nglatih panggantine utawa nyebar maneh karya; mung "periode gesekan" — wektu kanggo mulihake produksi menyang tingkat sadurunge — nggambarake kerugian nyata. FCM mula ngasilake perkiraan biaya-ora-langsung sing luwih murah, luwih konservatif tinimbang HCA, lan loro metode dudu catetan kaki sing bisa ditukar: iku teori ekonomi beda babagan apa tegese "produktivitas sing ilang." Iki uga sebabe [kasus acuan NICE](../penilaian-teknologi-kesehatan/) ngecualekake biaya produktivitas kanthi default, nglaporake, yen babar pisan, minangka analisis sensitivitas perspektif-masarakat kapisah tinimbang nyampur menyang ICER kasus-acuan — deleng [perspektif analisis](../perspektif-analisis/).

## Matematikane

```
Pendekatan Modal Manungsa:
biaya_HCA = upah_saben_dina × dina_ilang

Metode Biaya Gesekan (disederhanakake, wujud diwatesi-periode-gesekan):
biaya_FCM = upah_saben_dina × min(dina_ilang, dina_periode_gesekan)

dina_periode_gesekan = perkiraan khusus negara/sektor wektu-kanggo-mulihake
                        produksi (historis ~85 dina ing pedoman
                        penghitungan biaya Walanda iMTA; beda-beda miturut negara lan
                        diperkirakake maneh sacara periodik)
```

Kabeh ora cocog antarane rong metode urip ing `min()`: HCA ora tau mbatesi `dina_ilang`, mula biaya terus tuwuh kanggo kabeh absen, dene FCM mbatesi dina sing diitung ing periode gesekan, sepira suwe wae absen nyata.

## Conto Petungan

Karyawan libur kerja `dina_ilang = 180` dina, nampa `upah_saben_dina = £150`.

**Pendekatan Modal Manungsa**:

```
biaya_HCA = 150 × 180 = £27,000
```

**Metode Biaya Gesekan**, nganggo periode gesekan `dina_periode_gesekan = 85` (tolok ukur historis Walanda iMTA, kaya perkiraan ulang periodik pedoman):

```
biaya_FCM = 150 × min(180, 85) = 150 × 85 = £12,750
```

£12,750 FCM kurang saka setengah £27,000 HCA kanggo absen *sing padha* — pilihan metode wae sacara material ngowahi kasus biaya-penyakit, sadurunge asumsi liyane disenggol.

## Sambungan karo Rékayasa Piranti Lunak

Iki dipetakake langsung ing carane tim ngregani insinyur sing metu:

- **Penghitungan biaya attrisi gaya-HCA**: ngregani kerugian minangka gaji lengkap insinyur sing lunga kanggo sepira suwe wae peran kosong. Iki versi naif umume model biaya-attrisi, lan nggedhekake kerugian kanggo alasan sing padha HCA nggedhekake kerugian produktivitas — nganggep kapasitas kosong produktif kebak salawase lan ora ana liyane sing nyerep kelonggaran. Deleng [retensi tenaga kerja](../retensi-tenaga-kerja/), sing ngitung rantai rekrutmen/onboarding/cakupan-lowongan sing disuplai metode iki.
- **Penghitungan biaya attrisi gaya-FCM**: ngregani kerugian mung kanggo wektu-nganti-diganti-lan-ramp sing nyata saka penggantine — "periode gesekan" rékayasa. Iki angka sing luwih bisa dipertahanake kanggo kasus bisnis, persis kaya FCM pilihan sing luwih konservatif ing studi biaya-penyakit.
- Disiplin dhasar padha karo ing [biaya peluang](../biaya-peluang/): regani sumber daya sing dipindhah miturut apa sing bener-bener ilang, dudu durasi judhul dikali tarif.

## Jebakan

- **Nyampur HCA lan FCM ing siji analisis, utawa nglaporake mung siji tanpa ngumumake pilihan.** Data absen sing padha bisa ngasilake beda 2x+ ing biaya sing dilaporake gumantung metode; pilihan kudu dinyatakake, dudu dikubur.
- **Nganggo HCA kanggo kasus perspektif-masarakat tanpa menehi tandha minangka analisis sensitivitas.** Kasus acuan NICE kanthi eksplisit ngecualekake biaya produktivitas; perkiraan HCA perspektif-masarakat kalebu ing analisis skenario, dudu ICER judhul.
- **Nrapake salah siji metode ing karya ora dibayar utawa non-pasar (contone ngrawat) tanpa penyesuaian.** Loro metode nganggep proksi tarif-upah kanggo nilai, sing ora pindhah kanthi resik menyang karya tanpa upah pasar.

## Sumber

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — topic on productivity costs.
- NICE health technology evaluations manual (PMG36) — reference-case perspective and optional societal-perspective guidance. <https://www.nice.org.uk/process/pmg36>
