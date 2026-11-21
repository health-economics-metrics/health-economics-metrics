# Digitalni ishodi i biomarkeri

Digitalni biomarker je objektivna fiziološka ili ponašajna mjera prikupljena senzorima (brzina hoda s telefona, spavanje s nosivog uređaja, tremor iz akcelerometrije). Digitalni ishod (endpoint) je takva mjera uzdignuta u **ishod ispitivanja** — koristi se za dokazivanje učinka liječenja. Promicanje od „podataka koje uređaj emitira” do „dokaza koji regulator prihvaća” ide kroz definiranu ljestvicu validacije.

## Zašto je važno

Tradicionalni ishodi ispitivanja su epizodni (posjeti ambulanti svaka 3 mjeseca) i skupi; digitalni ishodi su kontinuirani, ekološki (stvaran život, a ne učinak u ambulanti) i jeftini po opažanju — mogu smanjiti ispitivanja, ranije otkriti učinke i omogućiti decentralizirane studije. Kvaka je validacija: prihvaćeni okvir (usklađen s FDA, tri stupa) zahtijeva **verifikaciju/analitičku validaciju** (senzor točno mjeri fizičku veličinu), **kliničku validaciju** (mjera odražava kliničko stanje koje tvrdi) i dokazan **značajan aspekt zdravlja** (pacijentima je stalo do onoga što bilježi). Ishod bez sva tri je telemetrija, a ne dokaz.

## Matematika

```
Analitička validacija: slaganje s referencom (vidi wearable-validation.md —
                       MAPE, CCC, Bland-Altman)
Klinička validacija:   korelacija/diskriminacija naspram kliničkih sidara
                       (valjanost poznatih skupina, osjetljivost na promjenu)
Ekonomija ishoda:
  događaji otkriveni po pacijentogodini (kontinuirano) naspram uzorkovanja po posjetu
  snaga ispitivanja: kontinuirane mjere smanjuju veličinu uzorka kad varijanca
  između posjeta dominira — N ∝ σ²/Δ², a σ² pada s gustim uzorkovanjem
```

## Riješeni primjer

Ispitivanje Parkinsonove bolesti razmatra brzinu hoda sa senzora na zapešću naspram tromjesečnih rezultata koje ocjenjuje ambulanta:

```
Klinički ishod:    4 mjerenja/pacijentu/godišnje, visok dnevni šum
Digitalni ishod:   ~200 pasivnih mjerenja/pacijentu/godišnje

Varijanca procjene godišnje promjene pada ~5× s gustim uzorkovanjem →
otkriva se veličina učinka pri fiksnoj snazi poboljšana ~√5 ≈ 2.2×, ili
ekvivalentno veličina uzorka se smanjuje ~40–60% za istu hipotezu.
Uz £25,000 po uključenom pacijentu, rezanje 200 pacijenata ≈ £5M ušteđeno
po ispitivanju — komercijalni slučaj za ulaganje u validaciju
(samo možda £1–2M) kroz pipeline sponzora.
```

## Veza sa softverskim inženjerstvom

Digitalni ishodi su disciplina inženjerstva podataka u kliničkoj odjeći: **provenijencija i verzioniranje** (ažuriranja algoritma usred studije ugrožavaju usporedivost — problem [PCCP](../regulatorna-evaluacija-ai-ja/)-a u obliku ispitivanja; verzijski zaključajte i premosnica-validirajte); **dizajn nedostajućih podataka** (praznine u nošenju su informativne, ne slučajne — vidi [validaciju nosivih uređaja](../validacija-nosivih-uređaja/); izbori imputacije su znanstvene tvrdnje); i **odluke o podjeli rub/oblak** koje mijenjaju koji se sirovi signal uopće može kasnije povratiti. Timovi koji cjevovod mjerenja tretiraju kao reguliran softver od prvog dana — testiran, verzioniran, dokumentiran — jeftino kupuju vjerodostojnost svojih ishoda; naknadno kačenje validacije na brzo građen cjevovod je mjesto gdje programi digitalnih ishoda umiru.

## Zamke

- **Korelacija s ambulantom kao puna validacija**: poklapanje s manjkavom kliničkom mjerom dokazuje nasljeđe, a ne istinu; validirajte naspram značajnog aspekta zdravlja.
- **Regulatorni rizik novog ishoda**: neviđeni ishod može biti znanstveno superioran i ipak potopiti prijavu — uključite regulatore rano (postoje programi kvalifikacije).
- **Neusklađenost populacije senzora**: validacija na mladim zdravim zapešćima, uvođenje kod starijih pacijenata s tremorom i razlikama u pigmentaciji koje PPG nikad nije vidio.
- **Pomak značajki**: ponovno treniranje algoritma hoda na novim podacima tiho redefinira ishod usred studije.

## Izvori

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
