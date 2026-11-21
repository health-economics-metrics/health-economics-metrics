# Doseg i pravednost

RE-AIM — Reach (doseg), Effectiveness (učinkovitost), Adoption (usvajanje), Implementation (provedba), Maintenance (održavanje) — standardni je okvir za procjenu *populacijskog* utjecaja intervencije. Središnja aritmetika: **javnozdravstveni utjecaj ≈ doseg × učinkovitost**. Digitalni alati dodaju dimenziju pravednosti: digitalni jaz znači da je doseg sustavno neujednačen, a digitalno-prvo pružanje može proširiti zdravstvene jazove koje želi zatvoriti.

## Zašto je važno

Sustavni pregledi koji primjenjuju RE-AIM na mHealth nalaze dosljedan potpis: snažan doseg i usvajanje, **slaba učinkovitost i održavanje** — aplikacije se lako šire i brzo blijede. Za nacionalnu zdravstvenu službu to znači da dojmljiv proizvod po korisniku može biti loše populacijsko ulaganje, i obrnuto: skromno učinkovit alat koji dopire do milijuna može nadmašiti briljantan koji dopire do tisuća (vidi aritmetiku [HALE-a](../očekivani-životni-vijek-prilagođen-zdravlju/)). Pravednost nije sporedno ograničenje nego pokretač vrijednosti: digitalna isključenost prati dob, deprivaciju, invaliditet i jezik — upravo populacije koje nose najviše izlječivog tereta — pa granični isključeni korisnik često ima *natprosječnu* potencijalnu korist. Za formalnu statističku mjeru nejednakosti zdravlja povezane sa socioekonomskim statusom vidi [Koncentracijski indeks](../koncentracijski-indeks/).

## Matematika

```
Populacijski utjecaj ≈ doseg × učinkovitost
  doseg         = sudionici / prihvatljiva populacija (vidi activation-and-uptake.md)
  učinkovitost  = stvarni učinak među sudionicima (ponderiran zadržavanjem —
                  vidi retention-and-churn.md)

Verzija stratificirana prema pravednosti:
  utjecaj_skupina_g = doseg_g × učinkovitost_g, iskazano po kvintilu
  deprivacije / dobnom pojasu / jezičnoj skupini
  jaz pravednosti = utjecaj_gornji kvintil − utjecaj_donji kvintil

Distribucijska isplativost: primijenite težine pravednosti na QALY-je po
skupini primatelja — QALY najugroženijima vrijedi više (sve uobičajenije
HTA proširenje).
```

## Riješeni primjer

Digitalni program prevencije dijabetesa, iskazan na dva načina:

```
Agregirano: doseg 12%, učinak 0.02 QALY-ja/sudioniku → 0.0024 QALY-ja/prihvatljivoj osobi

Stratificirano (kvintili deprivacije):
  Q1 (najmanje deprivirani): doseg 22%, učinak 0.02 → 0.0044
  Q5 (najviše deprivirani):  doseg 4%,  učinak 0.025 → 0.0010

Program isporučuje 4.4× više zdravlja najmanje depriviranima —
dok je učinak po sudioniku u Q5 VIŠI (više prostora). Asistirana digitalna
grana (telefonski coaching + pristup u zajednici) koja košta 20% više po Q5
sudioniku i podiže doseg Q5 na 12% utrostručuje utjecaj Q5 i poboljšava
agregat — ulaganje u pravednost JEST ulaganje u učinkovitost ovdje.
```

## Veza sa softverskim inženjerstvom

Doseg je u velikoj mjeri inženjerski artefakt: zahtjevi minimuma uređaja i OS-a, pretpostavke o propusnosti, jezična podrška, sukladnost s pristupačnošću (WCAG), prepreke provjere identiteta i distribucija samo preko trgovine aplikacija svaki izdvaja populacije iz nazivnika — obično nevidljivo, jer se isključeni korisnici nikad ne pojave u analitici. Inženjerske prakse koje pomiču pravednost: mjerite *nazivnik* (instrumentirajte prihvatljivu populaciju, a ne samo korisnike); budžetirajte performanse za stare uređaje i lošu povezanost; isporučite asistirane digitalne puteve (telefon, SMS, kiosk) kao prvoklasne tokove, a ne kanale srama; i stratificirajte svaku metriku nadzorne ploče po dimenzijama pravednosti — nestratificirani prosjek je mjesto gdje se nejednakost skriva (isto upozorenje nosi [GDS prihvaćanje](../gds-metrike-usluga/)).

## Zamke

- **Učinkovitost iskazana na dovršiteljima, utjecaj tvrđen na populacijama** — članovi dosega tiho izostavljeni.
- **Pravednost kao naknadna revizija** umjesto ulaza u dizajn; naknadno ugrađivanje dosega je daleko skuplje od projektiranja za njega.
- **Amnezija održavanja**: najslabija dimenzija RE-AIM-a u mHealthu — tvrdnje o utjecaju izvan vremenskog horizonta dokaza.
- **Uštede samo-digitalnog kanala** koje prebacuju troškove na isključene korisnike i osoblje prve linije (vidi [GDS metrike usluga](../gds-metrike-usluga/)).

## Izvori

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
