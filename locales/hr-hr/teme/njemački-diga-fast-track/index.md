# Njemački DiGA fast-track

DiGA (Digitale Gesundheitsanwendungen) je njemački zakonski put „aplikacija na recept” — prvi nacionalni sustav na svijetu u kojem liječnici propisuju odobrene zdravstvene aplikacije, a obvezno osiguranje mora ih nadoknaditi. To je vodeći aktivni eksperiment plaćanja digitalnih terapija u nacionalnom opsegu.

## Zašto je važno

DiGA je na pitanje koje postavlja svaka digitalna zdravstvena tvrtka — „tko će stvarno platiti?” — odgovorila zakonodavstvom (DVG, 2019.). Dizajn je izvanredan:

- **Brza odluka**: BfArM (regulator) mora odlučiti unutar 3 mjeseca.
- **Privremeni popis**: aplikacije mogu biti na popisu 12 mjeseci *dok još generiraju dokaze* — zarađujući tijekom svoje ključne studije.
- **Rok za dokaze**: dokažite „pozitivan učinak na zdravstvenu skrb” (medicinska korist ili pacijentu relevantno strukturno/proceduralno poboljšanje) komparativnom studijom — obično RCT-om — ili ispadate s popisa. Otprilike polovica privremenih unosa ne uspije prijeći u trajne.
- **Cijene**: proizvođač slobodno određuje cijenu u 1. godini; zatim se pregovara s udruženjem osiguravatelja. Medijan početnih tromjesečnih cijena oko 500 €; elementi cijena temeljenih na učinku stižu od 2026.

Provjera stvarnosti tržišta (istraživanje do kraja 2024.): ~68 aplikacija na popisu, >1 milijun kumulativnih recepata, ~81 % recepata aktivirano, ~234 mil. € kumulativne potrošnje osiguravatelja — stvarno tržište, ali skromno naspram buke, a pridržavanje nakon aktivacije ostaje slaba točka.

## Matematika

Komercijalni model koji vodi svaki DiGA osnivač:

```
Prihod = recepti × stopa aktivacije × cijena po razdoblju recepta
Trošak dokaza = ključni RCT (tipično 1–3 mil. €) unutar 12-mjesečnog prozora
Očekivana vrijednost = P(dokazi uspiju) × prihod stabilnog stanja − trošak dokaza

Uz ~50 % neuspjeha prijelaza, P se mora pošteno procijeniti — pola polja
potroši novac za RCT i izgubi popis.
```

## Riješeni primjer

Aplikacija za upravljanje depresijom privremeno se uvrštava po 450 €/kvartalu:

```
Godina 1: 20,000 recepata × 81% aktivacija × €450 ≈ €7.3M prihoda
Trošak RCT-a: €2M, paralelno
Ishod A (dokazi pozitivni): trajni popis, pregovorena cijena ~€380,
  stabilno stanje 60,000 recepata/god ≈ €18.5M/god
Ishod B (dokazi ne uspiju): uklonjena s popisa u 12. mjesecu; prihod staje.
```

Privremena godina financira generiranje dokaza — temeljna inovacija puta. Usporedite s tradicionalnim slijedom (prvo dokazi, prihod godinama kasnije), koji izgladnjuje upravo proizvode koje DiGA želi da postoje.

## Veza sa softverskim inženjerstvom

DiGA-in obrazac — **privremeno usvajanje s unaprijed registriranom metrikom uspjeha i automatskim zalaskom** — izravno je kopirljiv za upravljanje inženjerskim alatima: isporučite alat produkcijskim korisnicima na 12 mjeseci, unaprijed registrirajte metriku (izmjereno ušteđeno vrijeme, smanjenje incidenata), automatski istek osim ako dokazi stignu. Rješava paradoks pilota (alati kojima treba opseg da dokažu vrijednost nikad ne dobiju opseg) bez dodjeljivanja trajnog mandata nedokazanoj tehnologiji. Podaci o 81 % aktivacije/niskom pridržavanju nose i lekciju za proizvod: recept (ili izvršni mandat) donosi instalacije; samo kvaliteta proizvoda donosi održivu uporabu — vidi [pridržavanje i postojanost](../pridržavanje-i-postojanost/).

## Zamke

- **Tretiranje popisa kao cilja** — recepti traže povjerenje propisivača; mnogi popisani DiGA-i bilježe zanemariv opseg.
- **Premala snaga ključne studije** radi uštede novca tijekom godine prihoda — lažna ušteda koja objašnjava velik dio stope neuspjeha od 50 %.
- **Presađivanje modela bez platitelja**: DiGA radi jer je nadoknada zakonska; kopija bez obveznog plaćanja samo je pilot-program.

## Izvori

- Analysis of the DiGA market, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- DiGA pricing trends, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>
