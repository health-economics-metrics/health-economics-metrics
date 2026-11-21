# Broj potreban za probir (NNS)

NNS je broj ljudi koji moraju biti probirani — a ne samo liječeni — da bi se spriječio **jedan** štetan ishod kroz definirano razdoblje praćenja, uz zadani osnovni rizik populacije i relativno smanjenje rizika koje postižu rano otkrivanje i liječenje. To je analogon NNT-a na razini programa probira: NNT pita koliko ih mora biti *liječeno* da se spriječi jedan ishod; NNS pita koliko ih mora proći cijeli put *probira-pa-liječenja* da se do tamo stigne.

## Zašto je važno

Rembold je uveo NNS 1998. upravo da bi se programi probira mogli uspoređivati na istoj osnovi kao i liječenja, jer naslovno relativno smanjenje rizika testa probira skriva dvije stvari koje liječenje ne skriva: osnovni rizik populacije koja se stvarno poziva na probir i činjenicu da svi probirani snose trošak testa i teret lažno pozitivnih, a ne samo manjina koja na kraju ima koristi. Vrata isplativosti britanskog National Screening Committeeja (vidi [ekonomiju probira](../ekonomija-probira/)) izgrađena su upravo na toj razlici — program probira s dojmljivim relativnim smanjenjem rizika u populaciji niskog osnovnog rizika i dalje može imati NNS u tisućama, a tada trošak programa po spriječenom ishodu postaje pravo pitanje.

## Matematika

```
NNS = 1 / (osnovni_rizik × relativno_smanjenje_rizika)

osnovni_rizik                = vjerojatnost ishoda u probiranoj
                               populaciji kroz razdoblje praćenja (0–1)
relativno_smanjenje_rizika   = proporcionalno smanjenje rizika postignuto
                               ranim liječenjem omogućenim probirom (0–1)

Trošak programa po spriječenom ishodu = NNS × trošak_po_probiru
```

Usporedite izravno s [NNT](../broj-potreban-za-liječenje/): NNS ugrađuje učinkovitost cijelog lijevka probir → dijagnoza → liječenje u jedan broj, dok NNT već pretpostavlja da je pacijent dijagnosticiran i započinje liječenje.

## Riješeni primjer

Ciljna populacija programa probira ima osnovni rizik događaja od 2 % kroz razdoblje studije (`baseline_risk = 0.02`), a rano otkrivanje postiže relativno smanjenje rizika od 25 % (`relative_risk_reduction = 0.25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

200 ljudi mora biti probirano da se spriječi jedan ishod.

Uz £50 po probiru:
Trošak programa po spriječenom ishodu = 200 × £50 = £10,000
```

Tih 10.000 £ je broj koji treba vagati naspram troška samog ishoda i QALY-ja koje bi koštao — ista usporedba koju [ekonomija prevencije](../ekonomija-prevencije/) radi za programe prevencije općenito.

## Veza sa softverskim inženjerstvom

NNS je „koliko korisnika, događaja ili zahtjeva mora proći kroz tok detekcije ili trijaže da se uhvati jedan pravi pozitivni vrijedan djelovanja” — izravno relevantno za nadzor i trijažne sustave temeljene na upozorenjima, gdje niska prevalencija ciljnog stanja napuhuje NNS na isti način na koji kolabira pozitivnu prediktivnu vrijednost (vidi [ekonomiju probira](../ekonomija-probira/) i [kliničku evaluaciju AI-ja](../evaluacija-kliničkog-ai-ja/)). Pravilo nadzora koje mora obraditi 200 događaja po stvarnom hvatanju vrijedi pokretati samo ako hvatanje vrijedi barem 200 puta trošak trijaže po događaju — identična aritmetika kao u gornjem zdravstvenom primjeru.

## Zamke

- **Zanemarivanje ovisnosti o osnovnom riziku**: isti test ili program probira ima vrlo različit NNS — i isplativost — u visokorizičnoj naspram niskorizične populacije. Nikad ne navodite NNS bez navođenja populacije za koju je izračunan.
- **Brojanje pogrešnog nazivnika**: NNS broji ljude *probirane*, a ne ljude s pozitivnim testom ili koji započinju liječenje — već ugrađuje učinkovitost cijelog lijevka, pa se nikad ne smije uspoređivati s metrikom brojanom samo preko pozitivnih.
- **Uspoređivanje preko razdoblja praćenja**: kraće razdoblje praćenja općenito napuhuje NNS, jer se u prozoru opaža manje događaja. NNS brojke usporedive su samo kad su izračunane kroz isto trajanje praćenja.

## Izvori

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
