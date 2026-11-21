# Populacijski pripisivi udio (PAF)

PAF je udio tereta bolesti ili ishoda u populaciji koji se može pripisati izloženosti određenom čimbeniku rizika — dio koji bi nestao kad bi se izloženost potpuno uklonila. Pretvara „ovaj čimbenik rizika udvostručuje vaše izglede” u broj na razini populacije oko kojeg naručitelj zaista može planirati: koliko slučajeva i koliko troška određena izloženost doista vrijedi progoniti.

## Zašto je važno

Levin je uveo PAF 1953. da odgovori na usko, konkretno pitanje: kad nitko ne bi pušio, koliko bi raka pluća nestalo? Ista aritmetika danas određuje opseg nacionalnog planiranja prevencije svugdje, od strategija o duhanu i pretilosti do ljestvica čimbenika rizika studije WHO Global Burden of Disease, jer relativni rizik sam po sebi ne govori ništa o utjecaju — čimbenik rizika može udvostručiti izglede za rijedak događaj i jedva pomaknuti populacijski teret bolesti, ili tek neznatno povisiti izglede čestog događaja i ipak činiti ogroman udio slučajeva. PAF pretvara „čimbenik rizika X je opasan” u „uklanjanje čimbenika rizika X spriječilo bi toliko slučajeva godišnje”, što je broj koji poslovni slučaj programa prevencije zapravo treba. Vidi [ekonomiju prevencije](../ekonomija-prevencije/) za to koliko košta djelovati na taj broj kad ga imate.

## Matematika

```
PAF = prevalencija_izloženih × (relativni_rizik − 1) / (1 + prevalencija_izloženih × (relativni_rizik − 1))

prevalencija_izloženih = udio populacije izložen čimbeniku rizika (0–1)
relativni_rizik        = rizik ishoda kod izloženih naspram neizloženih (npr. 2.5 = 2.5×)

Pripisivi slučajevi = ukupni_slučajevi × PAF
```

PAF raste i s prevalencijom izloženosti i s relativnim rizikom — skromno povišen relativni rizik (recimo 1,5×) vezan uz vrlo čestu izloženost može dati veći PAF od dramatičnog relativnog rizika (recimo 5×) vezanog uz rijetku. To je cijeli razlog zašto postoji kao poseban broj od relativnog rizika.

## Riješeni primjer

Čimbenik rizika prisutan je u 30 % populacije (`prevalence_exposed = 0.3`) i povisuje rizik ishoda 2,5 puta (`relative_risk = 2.5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31.0%)

Uz 1,000 slučajeva/godišnje u populaciji:
Pripisivi slučajevi = 1,000 × 0.3103 ≈ 310 slučajeva/godišnje
```

Nešto manje od trećine godišnjeg tereta ovog ishoda pripisivo je izloženosti — njezino potpuno uklanjanje (teoretski strop; nijedna stvarna intervencija ne postiže 100 % uklanjanje izloženosti) spriječilo bi otprilike 310 od 1.000 slučajeva svake godine.

## Veza sa softverskim inženjerstvom

PAF je epidemiološka inačica „koliki je dio našeg volumena incidenata pripisiv ovom jednom osnovnom uzroku?” — isti oblik pitanja koje timovi postavljaju kad određuju opseg određene klase puštanja u rad ili ovisnosti naspram ukupnih produkcijskih incidenata, umjesto tretiranja svakog incidenta kao jednako vrijednog popravka na isti način. Kategorija osnovnog uzroka prisutna u velikom udjelu puštanja u rad sa samo skromnim relativnim rizikom izazivanja incidenta može nadmašiti rijetku kategoriju s visokim relativnim rizikom pri odlučivanju gdje prvo uložiti inženjerski napor — upravo PAF-ova spoznaja, prevedena.

## Zamke

- **Zbrajanje PAF-ova preko čimbenika rizika**: PAF-ovi za više čimbenika koji utječu na isti ishod ne zbrajaju se u 100 % — ukupno mogu i premašiti, jer čimbenici međusobno djeluju i dijele uzročne putove. Svaki PAF tretirajte kao „kad bi se samo ovaj čimbenik uklonio”, nikad kao podjelu ukupnog rizika.
- **Presađivanje relativnog rizika među populacije**: relativni rizik procijenjen u jednoj populaciji (druga osnovna prevalencija izloženosti, drugi zbunjujući čimbenici) daje zavaravajući PAF kad se primijeni na prevalenciju izloženosti druge populacije.
- **Brkanje PAF-a s pripisivim rizikom kod izloženih**: PAF je na razini populacije i ovisi o prevalenciji izloženosti; pripisivi rizik kod izloženih je na razini pojedinca i ne ovisi. Odgovaraju na različita pitanja — ne navodite jedno da odgovorite na drugo.

## Izvori

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
