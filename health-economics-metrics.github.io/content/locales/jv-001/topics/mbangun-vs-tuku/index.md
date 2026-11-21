# Mbangun vs Tuku (Build vs Buy)

Build-vs-buy iku perbandingan kanthi struktur antarane pangembangan khusus lan akuisisi komersial, adhedhasar [TCO](../total-biaya-kepemilikan/) sing didiskon, wektu panyampaian, lan risiko. Prior empiris iku sisi siji: **biaya mbangun sing nyata biasane ngluwihi proyeksi 30–40%**, solusi sing dituku disebar 40–60% luwih cepet, lan riset GenAI MIT 2025 nemokake piranti AI sing dituku sukses ~67% wektu dene build internal sukses kira-kira sapratelone.

## Kenapa Iki Penting

Sistem kesehatan ngadhepi keputusan iki terus ("make vs commission" ing basa NHS), lan organisasi rékayasa sacara sistematis salah ing arah mbangun — amarga sing mbangun ngira build-e, dudu [TCO](../total-biaya-kepemilikan/), lan amarga mbangun luwih nyenengake. Kerangka ekonomi meksa perbandingan sing jujur: loro pilihan diregani ing cakrawala sing padha, loro-lorone disesuaikan risiko, lan *bedane wektu diregani minangka [biaya keterlambatan](../biaya-keterlambatan/)* — suku sing paling kerep nemtokake wangsulan lan paling kerep kelalen.

## Matematikane

```
Bandhingake ing cakrawala 3–5 taun sing padha, didiskon:

NPV_pilihan = PV(manfaat, digeser kanthi wektu-menyang-nilai) − PV(TCO)

Penyesuaian risiko (pola "bias optimisme" Green Book):
  biaya build × 1.3–1.4        (prior kelebihan)
  wektu-menyang-nilai build + 40–60% (prior tundha deployment)
  tuku: tambahake pamriksan realitas integrasi lan biaya metu

Pendorong keputusan, miturut urutan sing biasane nemtokake:
  1. diferensiasi — apa kapabilitas iki produkmu, utawa pipa?
  2. wektu-menyang-nilai × CoD
  3. TCO sing disesuaikan risiko
```

## Conto Petungan

Sawijining trust butuh sistem e-consent. Tuku: SaaS £150k/taun, urip ing 3 sasi. Mbangun: kira-kira £600k + £120k/taun pangopènan, urip ing 12 sasi.

```
Build sing disesuaikan risiko: 600k × 1.35 = £810k; wektu-menyang-nilai ≈ 18 sasi
TCO 5-taun:  tuku = 150k × 5 = £750k
             mbangun = 810k + 120k × 5 = £1,410k
Suku tundha: digitalisasi consent ngirit £25k/sasi; build teka 15 sasi
             mengko → CoD = 15 × 25k = £375k

Perbandingan efektif: £750k vs £1,785k — tuku menang kanthi ~£1M, lan suku
paling gedhe sawise build dhewe iku biaya tundha sing ora ana sing ngregani.
```

Mbangun tetep bener nalika kapabilitas iku mbedakake (algoritma inti produkmu), nalika ora ana vendor sing nyukupi kendala keras (keslametan klinis, residensi data), utawa nalika risiko lock-in vendor abot lan wis diregani.

## Sambungan karo Rékayasa Piranti Lunak

Disiplin ekonomi kesehatan sing bisa dialihake ana telu: **penyesuaian risiko adhedhasar prior** (kenaikan kelebihan 30–40% iku bias optimisme Green Book versi piranti lunak — trapake kanthi mekanis, mbantah pengecualian tinimbang miwiti saka pengecualian); **kajujuran pembanding** (alternatif saka mbangun dudu "ora ana," iku pilihan tuku paling apik sing ana — deleng [biaya peluang](../biaya-peluang/)); lan **tes ekuivalensi sadurunge perbandingan biaya** (yen tuku lan mbangun bener-bener nyukupi spesifikasi sing padha, iki [analisis minimalisasi biaya](../analisis-minimalisasi-biaya/) lan sing murah menang; yen ora, bedane asil kudu diregani, dudu mung ditegesake).

## Jebakan

- **Mbandhingake rega dhaptar vendor karo perkiraan build tanpa penyesuaian risiko** — pujian ganda marang build.
- **Tenaga kerja internal diregani nol** ("tim wis ana kene").
- **Lock-in sing ora diregani ing loro arah**: biaya metu vendor, nanging uga bus-factor build lan umur pangopènan.
- **Build sing didorong identitas**: "iki inti kanggo kita" diklaim kanggo pipa — uji diferensiasi marang apa pelanggan bakal ngerteni.

## Sumber

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
