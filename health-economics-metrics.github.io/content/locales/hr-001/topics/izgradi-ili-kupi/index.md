# Izgradi ili kupi

Izgradi-ili-kupi je strukturirana usporedba prilagođenog razvoja i komercijalne nabave prema diskontiranom [TCO-u](../ukupni-trošak-vlasništva/), vremenu isporuke i riziku. Empirijski priori su jednostrani: **stvarni troškovi izgradnje obično premašuju projekcije za 30–40 %**, kupljena rješenja uvode se 40–60 % brže, a MIT-ovo istraživanje GenAI-ja iz 2025. pokazalo je da su kupljeni AI alati uspjeli ~67 % vremena, dok su interne izgradnje uspijevale otprilike tri puta rjeđe.

## Zašto je važno

Zdravstveni sustavi stalno se suočavaju s ovom odlukom („make vs commission” na NHS-ovu jeziku), a inženjerske organizacije je sustavno pogrešno rješavaju u smjeru izgradnje — jer graditelji procjenjuju izgradnju, a ne [TCO](../ukupni-trošak-vlasništva/), i jer je gradnja zabavnija. Ekonomski okvir prisiljava na poštenu usporedbu: obje opcije cijenjene kroz isti horizont, obje prilagođene riziku, a *razlika u vremenu cijenjena kao [trošak odgode](../trošak-odgode/)* — izraz koji najčešće odlučuje odgovor i najčešće se izostavlja.

## Matematika

```
Usporedite kroz isti horizont od 3–5 godina, diskontirano:

NPV_opcija = PV(koristi, pomaknute za vrijeme do vrijednosti) − PV(TCO)

Prilagodbe riziku (obrazac „pristranosti optimizma” Green Booka):
  trošak izgradnje × 1.3–1.4        (prior prekoračenja)
  vrijeme do vrijednosti izgradnje + 40–60% (prior odgode uvođenja)
  kupnja: dodajte provjeru stvarnosti integracije i troškove izlaska umjesto toga

Pokretači odluke, redom kojim obično odlučuju:
  1. diferencijacija — je li ova sposobnost vaš proizvod ili instalacija?
  2. vrijeme do vrijednosti × CoD
  3. TCO prilagođen riziku
```

## Riješeni primjer

Trustu treba sustav e-pristanka. Kupnja: 150 tis. £/godišnje SaaS, u radu za 3 mjeseca. Izgradnja: procijenjeno 600 tis. £ + 120 tis. £/godišnje održavanja, u radu za 12 mjeseci.

```
Izgradnja prilagođena riziku: 600k × 1.35 = £810k; vrijeme do vrijednosti ≈ 18 mjeseci
5-god TCO:  kupnja = 150k × 5 = £750k
            izgradnja = 810k + 120k × 5 = £1,410k
Član odgode: digitalizacija pristanka štedi £25k/mjesečno; izgradnja stiže 15 mjeseci
             kasnije → CoD = 15 × 25k = £375k

Efektivna usporedba: £750k naspram £1,785k — kupnja pobjeđuje za ~£1M, a najveći
pojedinačni član nakon same izgradnje je trošak odgode koji nitko nije cijenio.
```

Izgradnja ostaje ispravna kad je sposobnost diferencirajuća (temeljni algoritam vašeg proizvoda), kad nijedan dobavljač ne zadovoljava tvrdo ograničenje (klinička sigurnost, rezidentnost podataka) ili kad je rizik zaključavanja dobavljača težak i cijenjen.

## Veza sa softverskim inženjerstvom

Prenosiva disciplina zdravstvene ekonomije je trostruka: **prilagodba riziku temeljena na prioru** (uvećanje prekoračenja od 30–40 % je softverska pristranost optimizma Green Booka — primijenite ga mehanički, argumentirajte izuzetke umjesto polazeći od njih); **poštenje komparatora** (alternativa izgradnji nije „ništa”, nego najbolja dostupna kupnja — vidi [oportunitetni trošak](../oportunitetni-trošak/)); i **testiranje ekvivalentnosti prije usporedbe troškova** (ako kupnja i izgradnja doista zadovoljavaju istu specifikaciju, to je [analiza minimizacije troškova](../analiza-minimizacije-troškova/) i pobjeđuje jeftinija; ako ne, razliku u ishodima treba vrednovati, a ne tvrditi).

## Zamke

- **Usporedba cjenikove cijene dobavljača s izgradnjom bez prilagodbe riziku** — dvostruko laskanje izgradnji.
- **Interni rad cijenjen na nulu** („tim je ionako ovdje”).
- **Neocijenjeno zaključavanje u oba smjera**: troškovi izlaska od dobavljača, ali i faktor autobusa i trajanje održavanja izgradnje.
- **Izgradnje vođene identitetom**: „ovo je ključno za nas” tvrđeno za instalaciju — testirajte diferencijaciju naspram toga bi li kupci primijetili.

## Izvori

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
