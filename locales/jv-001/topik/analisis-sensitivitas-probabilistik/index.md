# Analisis Sensitivitas Probabilistik (Probabilistic Sensitivity Analysis, PSA)

PSA menehi distribusi probabilitas marang saben parameter sing ora mesthi, nyampling kabeh bebarengan ewonan kali (Monte Carlo), lan nglaporake *probabilitas* yen pilihan iku pilihan paling apik — tinimbang siji perkiraan titik.

## Kenapa Iki Penting

Kasus acuan NICE *mbutuhake* PSA. Analisis deterministik njawab "apa yen siji input salah?"; PSA njawab "diwenehi kabeh sing ora kita ngerti bebarengan, sepira kemungkinan kita nggawe keputusan sing bener?" Output khasé, **kurva akseptabilitas efektivitas-biaya (CEAC)**, nggambar probabilitas pilihan iku efektif-biaya marang ambang kesediaan-mbayar — ngowahi "ICER-e £24,000/QALY" dadi "ana 78% kemungkinan iki pilihan sing bener ing £30,000/QALY."

## Matematikane

```
Kanggo saben N draw (N ≈ 10,000):
  sampling saben parameter θ saka distribusine
    (biaya ~ Gamma, probabilitas ~ Beta, utilitas ~ Beta, efek ~ Normal/logNormal)
  etung NMB_j(θ) = λ × Efek_j(θ) − Biaya_j(θ) kanggo saben pilihan j

CEAC_j(λ) = pecahan draw ing ngendi pilihan j duwe NMB paling dhuwur ing ambang λ
```

Deleng [manfaat moneter net](../manfaat-moneter-net/) kanggo NMB lan [ambang kesediaan-mbayar](../ambang-kesediaan-mbayar/) kanggo λ.

## Conto Petungan

Kasus bisnis migrasi platform. Telung input sing ora mesthi:

```
Biaya migrasi        ~ Gamma,   mean £800k, sd £200k
Manfaat taunan       ~ Normal,  mean £350k, sd £150k
Durasi manfaat       ~ Uniform, 3–6 taun
```

Kanggo saben 10,000 draw etung manfaat net = durasi × taunan − biaya (diskon dilewati kanggo kajelasan). Asil ilustratif:

```
Mean manfaat net:       £775k
Probabilitas net > 0:   0.86
Persentil 5–95:        −£180k … +£1.9M
```

Perkiraan titik ngomong "mesthi ya." PSA ngomong "86% ya, kanthi buntut nyata ing ngendi kita kelangan £180k+" — sing bener-bener dibutuhake pemilik portofolio, lan ngregani kasus kanggo mlakokake spike discovery dhisik (deleng [EVPI](../nilai-informasi-sampurna-sing-dikarepake/)).

## Sambungan karo Rékayasa Piranti Lunak

Insinyur wis percaya Monte Carlo kanggo ramalan panyampaian (sampling throughput ngungkuli perkiraan titik). Nambah mesin sing padha menyang dhuwit: distribusi ing adopsi, wektu sing dihemat, lan gaji, banjur laporake "probabilitas investasi platform iki net-positif" tinimbang ROI presisi-palsu. Kurva gaya-CEAC — probabilitas dadi pilihan paling apik minangka fungsi saka carane organisasi ngregani jam-insinyur — iku artefak sing luwih apik kanggo komite pendanaan tinimbang angka tunggal apa wae.

## Jebakan

- **Distribusi sampah**: PSA kanthi deviasi standar karangan iku analisis deterministik nganggo jas lab. Adhedhasar sebaran ing data utawa elisitasi ahli sing terstruktur.
- **Ngabaikake korelasi** antarane parameter (adopsi dhuwur biasane berkorelasi karo wektu-dihemat dhuwur); sampling mandhiri nyepelekake risiko buntut.
- **Nglaporake mean simulasi wae** — kabeh titik iku distribusi lan probabilitas keputusan.

## Sumber

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
