# Fraksi Atribut Populasi (Population Attributable Fraction, PAF)

PAF iku proporsi beban penyakit utawa asil ing populasi sing disebabake paparan faktor-risiko tartamtu — bagean sing bakal ilang yen paparan dibusak babar pisan. Ngowahi "faktor risiko iki nglipatganda peluangmu" dadi angka tingkat-populasi sing bisa dienggo komisioner kanggo ngrencanakake: pira kasus, lan pira biaya, paparan tartamtu pancen pantes diburu.

## Kenapa Iki Penting

Levin ngenalake PAF ing 1953 kanggo njawab pitakon sempit lan konkret: yen ora ana sing ngrokok, pira kanker paru sing bakal ilang? Aritmetika sing padha saiki ngukur perencanaan pencegahan nasional ing endi-endi saka strategi tembakau lan obesitas nganti peringkat faktor-risiko studi WHO Global Burden of Disease, amarga risiko relatif piyambak ora ngandhani apa-apa babagan dampak — faktor risiko bisa nglipatganda peluang kedadean langka lan meh ora ngobahake beban penyakit populasi, utawa mung munggahake peluang kedadean umum rada sithik nanging isih nyebabake bagean kasus sing gedhe banget. PAF iku sing ngowahi "faktor risiko X mbebayani" dadi "mbusak faktor risiko X bakal nyegah pira kasus saben taun," angka sing bener-bener dibutuhake kasus bisnis program pencegahan. Deleng [ekonomi pencegahan](../ekonomi-pencegahan/) kanggo pira biaya tumindak ing angka kuwi sawise sampeyan duwe.

## Matematikane

```
PAF = prevalensi_kapapar × (risiko_relatif − 1) / (1 + prevalensi_kapapar × (risiko_relatif − 1))

prevalensi_kapapar = pecahan populasi sing kapapar faktor risiko (0–1)
risiko_relatif     = risiko asil ing wong kapapar vs. ora kapapar (contone 2.5 = 2.5×)
Kasus sing disebabake = total_kasus × PAF
```

PAF mundhak karo prevalensi paparan lan risiko relatif — risiko relatif sing munggah sithik (umpamane 1.5×) sing nempel ing paparan sing umum banget bisa ngasilake PAF luwih gedhe tinimbang risiko relatif dramatis (umpamane 5×) sing nempel ing paparan langka. Iku kabeh alasan kenapa ana minangka angka beda saka risiko relatif.

## Conto Petungan

Faktor risiko ana ing 30% populasi (`prevalensi_kapapar = 0.3`) lan munggahake risiko asil 2.5-kali lipat (`risiko_relatif = 2.5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31.0%)

Karo 1,000 kasus/taun ing populasi:
Kasus sing disebabake = 1,000 × 0.3103 ≈ 310 kasus/taun
```

Mung kurang saka sapratelon beban taunan asil iki disebabake paparan — ngilangi babar pisan (langit-langit teoretis; ora ana intervensi nyata sing nggayuh 100% pambusakan paparan) bakal nyegah kira-kira 310 saka 1,000 kasus saben taun.

## Sambungan karo Rékayasa Piranti Lunak

PAF iku versi epidemiologis saka "pira volume insiden kita sing disebabake siji akar-masalah iki?" — wujud pitakon sing padha sing ditakoni tim nalika ngukur kelas deploy utawa dependensi tartamtu marang total insiden produksi, tinimbang nganggep saben insiden padha pantes didandani kanthi cara sing padha. Kategori akar-masalah sing ana ing bagean gedhe deploy kanthi risiko relatif sedheng nyebabake insiden bisa ngungkuli kategori langka kanthi risiko relatif dhuwur kanggo ngendi ngentekake usaha rékayasa dhisik — persis wawasan PAF, diterjemahake.

## Jebakan

- **Njumlahake PAF ing antarane faktor risiko**: PAF kanggo pirang-pirang faktor sing mengaruhi asil sing padha ora jumlah 100% — bisa ngluwihi ing total, amarga faktor-faktor interaksi lan nuduhake jalur kausal. Anggep saben PAF minangka "yen faktor iki wae dibusak," ora tau minangka pamisahan risiko total.
- **Mindhah risiko relatif ing antarane populasi**: risiko relatif sing dikira ing siji populasi (prevalensi paparan dhasar beda, confounder beda) ngitung PAF sing nyesatake yen ditrapake ing prevalensi paparan populasi liya.
- **Nyampur PAF karo risiko atribut ing sing kapapar**: PAF iku tingkat-populasi lan gumantung prevalensi paparan; risiko atribut ing sing kapapar iku tingkat-individu lan ora. Njawab pitakon beda — aja ngutip siji kanggo njawab liyane.

## Sumber

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
