# Narušenost radne produktivnosti i aktivnosti (WPAI)

WPAI je validiran upitnik samoprocjene (Reilly, Zbrozek, Dasbach, 1993) koji mjeri koliko zdravstveni problem utječe na plaćeni rad i svakodnevne aktivnosti, obično tijekom posljednjih 7 dana. Gubitak dijeli na *apsentizam* — doslovno propušteno radno vrijeme — i *prezentizam* — smanjena produktivnost dok je osoba fizički na poslu, a drugo je obično veća, skrivenija komponenta troška.

## Zašto je važno

Jednostavno brojanje bolovanja vidi samo apsentizam. Kliničar ili zaposlenik znanja koji nikad ne uzima slobodan dan, ali radi na 60 % kapaciteta zbog kroničnog stanja, ne doprinosi ništa evidenciji izostanaka, a ipak stvara velik, stvaran gubitak produktivnosti — WPAI je osmišljen upravo da izvuče na vidjelo taj nevidljivi trošak. Budući da je validiran instrument, a ne prilagođena anketa, njegovi se rezultati mogu koristiti u paketima dokaza o [ishodima koje prijavljuju pacijenti](../ishodi-koje-prijavljuju-pacijenti/) i u studijama troška bolesti bez potrebe da recenzent ponovno validira mjeru. Kao instrument samoprocjene i sam je oblik PROM-a, razlikuje se uglavnom fokusom na rad i aktivnost, a ne na simptome ili kvalitetu života.

## Matematika

```
Apsentizam % = sati_propušteni_zbog_zdravlja / (sati_propušteni_zbog_zdravlja + odrađeni_sati) × 100

Prezentizam %  = samoocijenjena narušenost 0–10 tijekom rada, × 10
                 (prikuplja se izravno upitnikom, ne izvodi se ovdje)

Ukupna narušenost rada % =
    Apsentizam% + (1 − Apsentizam%/100) × Prezentizam%
    (kombinira oboje tako da ukupno nikad ne može premašiti 100%)

Trošak produktivnosti = Ukupna narušenost rada% / 100 × zarada_u_razdoblju
```

Formula ukupne narušenosti namjerno nije jednostavan zbroj: izravno zbrajanje dvaju postotaka moglo bi premašiti 100 %, pa se prezentizam primjenjuje samo na *preostali* (neodsutni) udio radnog vremena.

## Riješeni primjer

Zaposlenik s migrenom prijavljuje da je za 40-satni tjedan raspoređen, ali propušta 4 sata:

```
hours_missed = 4, hours_worked = 36
Apsentizam% = 4 / (4 + 36) × 100 = 10%
```

Zasebno samoocjenjuje utjecaj na produktivnost tijekom rada kao 3 od 10 na WPAI upitniku, tj. `Prezentizam% = 30%` (ovaj korak je sirov odgovor upitnika, a ne izveden iz drugih brojeva):

```
Ukupna narušenost rada% = 10 + (1 − 10/100) × 30
                        = 10 + 0.9 × 30
                        = 10 + 27
                        = 37%
```

Kroz 5-dnevni tjedan uz zaradu od 800 £ (160 £/dan):

```
Trošak produktivnosti = 37/100 × 800 = £296
```

Primijetite da bi naivno brojanje bolovanja zabilježilo samo propuštena 4 sata (10 %) — komponenta prezentizma gotovo utrostručuje pravu narušenost kad se uračuna.

## Veza sa softverskim inženjerstvom

Ovo se izravno preslikava na metrike zdravlja inženjerskih timova:

- **Apsentizam** su bolovanje i godišnji odmor — vidljivi, već praćeni i lagani dio.
- **Prezentizam** je izgorjeli inženjer ili inženjer preopterećen promjenom konteksta koji je prisutan na svakom stand-upu, a radi smanjenim kapacitetom — obično veći i skriveniji trošak, nevidljiv u podacima o broju zaposlenih ili prisutnosti. Pojavljuje se umjesto toga kao smanjena propusnost u [DORA](../dora-metrike/) i [metrikama toka](../metrike-toka/) ili kao sporije rješavanje upravo onog [tehničkog duga](../tehnički-dug/) čija „kamata” dodatno pogoršava narušenost.
- Inženjerska lekcija ista je kao klinička: mjerenje samo izostanka i nazivanje toga „gubitkom produktivnosti” sustavno podcjenjuje pravi trošak, jer propušta sve koji su prisutni, ali narušeni.

## Zamke

- **Pristranost prisjećanja pri samoprocjeni.** Prozor prisjećanja od 7 dana podložan je istim izobličenjima izvješćivanja kao i svaka retrospektivna samoprocjena.
- **Tretiranje ljestvice prezentizma 0–10 kao prave fizičke mjere.** Ordinalna je, prikupljena samoprocjenom, a ne validirana fizička veličina — tretiranje razlika na njoj kao strogo linearnih ili intervalnih modelska je pogodnost, a ne validirana fizička činjenica.
- **Udruživanje rezultata među varijantama WPAI.** WPAI ima nekoliko varijanti specifičnih za stanje — WPAI:GH (opće zdravlje), WPAI:SHP (specifičan zdravstveni problem) i varijante specifične za bolest — i rezultate različitih varijanti ne treba udruživati ni uspoređivati bez prethodne provjere da je riječ o istoj verziji instrumenta.

## Izvori

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI instrument documentation, Reilly Associates — the official scoring reference. <https://www.reillyassociates.net/>
