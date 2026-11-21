# Dalgh Teknegel

Dalgh teknegel yw kost dhe-dheu kuntellys a dhewisyansow skonya kyns y'n kodhva: an ober dasdhrehevel dalgh (**pennsom**) ha'n lettya pesys war delivrans (**dheweth**). Fordhow musur kepar ha SQALE a dreylya hemma dhort kedrysyans dhe dhalgh talvosys.

## Perag yth yw posek

Heb niveryans, dalgh teknegel yw klamdyr; niveryes, kas busnes yw. Linennow-bonn ynkresek (CAST Appmarq, 1,400 app / 550M LOC): yn istorek ≈ **$3.61 a bennsom dalgh teknegel rag pub linenn kodh**, gans kodhvow kemmyn a dhegrys ratyo dalgh a 15–20% a gost dasdhrehevel, erbynn bar yeghes ervirys a ≤5% (gradh "A" SonarQube). An framya ekonomek yeghes a dal yn ewn: dalgh yw *kondysyon kronek* — heb tretyans, a gressa, y *dheweth* a dhasglusenn avel delivrans lent ha ratyo defekt uhelha, ha dasdhrehevel a gesstrivya rag kapasita erbynn ober feyturyow kepar ha ragweres a gesstrivya erbynn tretyans.

## An Matematik

```
Pennsom SQALE   = Σ dres terghyansow (termyn dasdhrehevel) × ratyo kost displegyer
Ratyo dalgh teknegel (TDR) = kost dasdhrehevel / kost dasdhrehevel-leun × 100
                    (gradhow SonarQube: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Dheweth (an niver a justyf paydya):
  dheweth/bledhen = Δ fystynans delivrans × talvos rag unys fystynans
                  + Δ ratyo defekt × kost rag defekt
Kas paydya   = PV(dheweth avoydys dres horizon) − kost dasdhrehevel
               (diskontys — gwelewgh discounting-and-time-preference.md)
```

Pennsom a dherivas an dalgh; **dheweth** a wra an kas investyans. Paydya £500k a bennsom rag avoydya £40k/bledhen a dheweth yw gwari drog; rag avoydya £400k/bledhen, ragorrel.

## Ensampel gwrys

Gorher kesunnans lyvrow-klinikel a 400k-LOC: pennsom SQALE 3,800 our × £75 = **£285k**; TDR ≈ 12% (gradh C). Dheweth musurys: skuadronow ow tuchya an gorher na a dhiskwedh termynnow kelgh 40% hirha ha ratyoyow fyll-chanj 2× erbynn an linenn-vonn. An gorher a lenw 6,000 our displegyer/bledhen:

```
Dheweth ≈ 6,000 × 0.40 × £75         = £180,000/bledhen (tardh fystynans)
         + 12 fyll ekstra × £8,000    = £96,000/bledhen (dasober/hwarvosow)
         ≈ £276,000/bledhen

Dasdhrehevewgh an 30% gwettha a bennsom (£85k) ow tyghtya poyntow tobm →
leha dheweth modellys 60%: a sav ~£166k/bledhen. Dehweles ≈ 6 mis.
```

An tyghtyans poyntow tobm a dal: dheweth dalgh a gesklapp ple may re-ughkhe frekwens chanj × dewder dalgh — dasdhrehevel dalgh tuchys nebes a brena tra vyth, kepar ha tretya kondysyon na wrussa bythkweth progressya ([ekonomek ragweres](../ekonomek-lettyans/)).

## Kolm gans ynjynnyans medhelweyth

An dhefelmow ekonomek yeghes a wellha argyansow dalgh teknegel: derivewgh an stad avel **rol-ber** (kehaval [DALY](../bledhen-bewnans-addasys-anabalder/) — ple ma an bledhynyow ynjynnyer yagh kellys?); jystyfewgh paydya gans matematik progressya, yn onest (fenowgh kost-effeythus, na ny yw kost-sawyans); pwyssewgh dasdhrehevel an systemow gwettha dre [diffyk ankevri](../diffyk-qaly-ha-chanjyoryon-ankevri/); ha skoodhewgh dasdhrehevel meur gans analys gorreth a dhal gans rewlyow [kostow a-dhelergh avoydys](../kostow-a-dhelergh-hwithys/) — pwyssys herwydh probabilita, diskontys, kontys unn wydh.

## Fowtys Kemmyn

- **Derivans pennsom yn unnik**: niver bras skyus heb ervir dheweth a jystyf tra vyth.
- **Figurow dalgh gwrys dre arf kemerys yn lyterel**: SQALE a gont terghyansow rewl; ny wel dalgh arkitektek (an par kostek) ha kont banalyta.
- **Utopiya dalgh-sifra**: an nivel dalgh gwella nyns yw sifra — dalgh yw lever; an gwestyon yw an ratyo dheweth.
- **"An dasskrif a avoyd oll"**: arghyansow dasskrif a res tremena an keth rewlyow gorreth — kost kontrovys, probabilita, diskontya.

## Fontynnow

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
