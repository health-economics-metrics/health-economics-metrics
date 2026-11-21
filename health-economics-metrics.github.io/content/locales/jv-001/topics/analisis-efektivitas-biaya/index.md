# Analisis Efektivitas-Biaya (Cost-Effectiveness Analysis, CEA)

CEA mbandhingake biaya intervensi alternatif marang siji ukuran asil ing **unit alami** — taun-urip, kasus sing dideteksi, rawat inap sing dihindari, mmHg tekanan darah sing disuda. Output-e iku biaya saben unit asil.

## Kenapa Iki Penting

CEA iku perbandingan andalan nalika kabeh pilihan ngarah marang asil sing padha. Iku njawab "saka cara-cara nggayuh X iki, endi panggunaan dhuwit sing paling apik?" — nanging *dudu* "apa X pantes digayuh babar pisan?" (kuwi butuh [analisis biaya-manfaat](../analisis-biaya-manfaat/)) lan *dudu* "kepriye X dibandhingake karo prioritas sing ora gandheng?" (kuwi butuh [analisis biaya-utilitas](../analisis-biaya-utilitas/) lan asil generik kaya QALY).

## Matematikane

Statistik perbandingane iku [ICER](../rasio-efektivitas-biaya-inkremental/) ing unit alami:

```
ICER = (Biaya_A − Biaya_B) / (Efek_A − Efek_B)
     = £ saben kasus tambahan sing dideteksi / rawat inap sing dihindari / lsp.
```

Prosedur: tetepake unit asil; regani saben pilihan saka [perspektif](../perspektif-analisis/) sing padha sajrone [cakrawala wektu](../cakrawala-wektu/) sing padha; singkirake pilihan sing didominasi ([wates efisiensi](../dominansi-lan-wates-efisiensi/)); etung rasio inkremental ing sadawane wates.

## Conto Petungan

Telung cara nemokake fibrilasi atrium sing durung didiagnosis ing populasi 100,000:

```
Pilihan                   Biaya       Kasus ditemokake
Pamriksan nadi oportunistik £150,000       300
Acara skrining apotek       £400,000       520
Skrining adhedhasar wearable £900,000      610

ICER apotek vs nadi:  (400k−150k)/(520−300) = £1,136 saben kasus tambahan
ICER wearable vs apotek:(900k−400k)/(610−520) = £5,556 saben kasus tambahan
```

Apa £5,556 saben kasus tambahan "pantes" gumantung nilai kasus sing ditemokake (pencegahan stroke ing hilir) — CEA ngurutake pilihan nanging keputusan adopsi butuh penilaian njaba kuwi. Elinga biaya *rata-rata* saben kasus pilihan wearable (900k/610 = £1,475) katon apik; £5,556 *inkremental* iku angka jujur kanggo keputusan ekspansi.

## Sambungan karo Rékayasa Piranti Lunak

CEA iku cithakan sing bener nalika pilihan nuduhake siji asil: biaya saben flaky test sing disingkirake ing telung pendekatan remediasi; biaya saben insiden sing dihindari ing antarane vendor observabilitas; biaya saben deployment sukses ing arsitektur CI. Disiplin sing dipeksa — siji unit asil sing dinyatakake, rasio inkremental (dudu rata-rata), pilihan sing didominasi disingkirake dhisik — mateni umume perbandingan vendor sing elek sadurunge diskusi rega diwiwiti.

## Jebakan

- **Mbandhingake pilihan karo asil beda** ("kasus ditemokake" vs "kepuasan") ing siji CEA — kuwi butuh [analisis biaya-akibat](../analisis-biaya-akibat/) utawa asil generik.
- **Rasio efektivitas-biaya rata-rata** dituduhake ing ngendi sing inkremental dibutuhake (conto wearable ing ndhuwur).
- **Unit asil sing dipilih kanggo ngelem**: "peringatan sing digawe" iku output, dudu asil; keukeuh ing unit sing nggawa nilai.

## Sumber

- CDC POLARIS: cost-effectiveness analysis. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
