# Zadržavanje radne snage

Ekonomija zadržavanja radne snage kvantificira koliko fluktuacija osoblja košta zdravstveni sustav — zapošljavanje, uvođenje, pokrivanje upražnjenih mjesta — a time i koliko vrijedi softver koji smanjuje administrativno sagorijevanje. Sagorijevanje zbog ponavljajućih administrativnih zadataka s podacima primarni je pokretač fluktuacije osoblja i bolovanja u NHS-u.

## Zašto je važno

Kad kliničar ode, trust plaća triput: za zapošljavanje zamjene (oglašavanje, agencijske naknade, intervjui), za njezino uvođenje (mjeseci smanjene produktivnosti, nadzor) i za pokrivanje upražnjenog mjesta u međuvremenu — obično agencijskim ili zamjenskim osobljem po 2–3× višim stopama od stalnih Agenda for Change (vidi [izbjegive troškove eksternalizacije](../izbjegivi-troškovi-eksternalizacije/) i [tvrde uštede koje oslobađaju gotovinu](../tvrde-uštede-koje-oslobađaju-gotovinu/)). Budući da su troškovi fluktuacije stvarna gotovina, poboljšanja zadržavanja među rijetkim su koristima radne snage koje financijski direktor može pohraniti. Administrativno trenje dosljedno je među najčešće navođenim pokretačima kliničkog sagorijevanja, što ga čini troškom koji se može adresirati softverom.

## Matematika

```
Trošak po odlasku = trošak zapošljavanja + trošak uvođenja/uhodavanja produktivnosti
                  + premija pokrivanja upražnjenog mjesta × trajanje upražnjenosti

Godišnji trošak fluktuacije = broj zaposlenih × stopa fluktuacije × trošak po odlasku

Vrijednost softvera = broj zaposlenih × Δstopa fluktuacije × trošak po odlasku
                    + smanjenje bolovanja × trošak pokrivanja/dan
```

Uzročni lanac ima dvije procijenjene karike — softver → sagorijevanje/trenje i sagorijevanje → fluktuacija — pa dokažite obje (ankete osoblja prije/poslije; objavljene povezanosti sagorijevanja i odlaska) i držite tvrđeni Δ skromnim.

## Riješeni primjer

Trust zapošljava 1.200 medicinskih sestara; fluktuacija 11 %/godišnje. Trošak po odlasku:

```
Zapošljavanje ≈ £4,500;  uvođenje/uhodavanje ≈ £6,000
Pokrivanje upražnjenog mjesta: 4 mjeseca × 0.6 WTE pokriveno agencijskom premijom ≈ £8,000
Ukupno ≈ £18,500 po odlasku
Osnovni trošak fluktuacije = 1,200 × 0.11 × 18,500 ≈ £2.44M/godišnje
```

Softver za rasterećenje dokumentacije (automatski popunjene procjene, jedinstvena prijava, diktiranje) uvjerljivo pomiče fluktuaciju za 1 postotni bod:

```
Vrijednost = 1,200 × 0.01 × 18,500 = £222,000/godišnje relevantno za gotovinu
```

Tvrdnja od 1 boda potkrijepljena ocjenama trenja iz anketa osoblja je vjerodostojna; tvrdnja od 4 boda nije. Provedite [tornado](../analiza-osjetljivosti/) na Δfluktuacije: dominira nad svime ostalim u modelu.

## Veza sa softverskim inženjerstvom

Matematika inženjerskog zadržavanja je identična, a slabije dokumentirana: zamjena višeg inženjera košta 6–12 mjeseci pune plaće (zapošljavanje, uhodavanje, izgubljeni kontekst), pa organizacija od 200 ljudi s 15 % odljeva godišnje troši milijune na fluktuaciju. Ulaganje u iskustvo programera ([SPACE i DevEx](../space-i-devex/)) izravna je analogija rasterećenju dokumentacijom za medicinske sestre — i treba ga opravdati na isti način: izmjerene ocjene trenja, skroman tvrđeni učinak na odljev, trošak po odlasku iz vaših vlastitih financijskih podataka. Disciplina zdravstvene ekonomije koju treba kopirati je *pošteno troškovanje odlaska* umjesto prepirke o tome odlaze li ljudi „zaista” zbog alata.

## Zamke

- **Pripisivanje svakog pomaka fluktuacije vašoj intervenciji** — tržišta rada pomiču fluktuaciju mnogo više od softvera; koristite kontrolne skupine ili barem prilagodbu sektorskom trendu.
- **Dvostruko brojanje**: uštede zadržavanja i uštede agencijske potrošnje preklapaju se (pokrivanje upražnjenog mjesta *jest* agencijska potrošnja); uskladite stavke.
- **Zanemarivanje odgode**: odljev uzrokovan sagorijevanjem reagira na promjene trenja kroz 1–2 godine, a ne idući kvartal.

## Izvori

- NHS England, reducing agency spend. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Staff Survey (burnout and intention-to-leave data). <https://www.nhsstaffsurveys.com/>
