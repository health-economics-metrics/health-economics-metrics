# Laiko kompromiso (TTO) naudingumo išgavimas

TTO yra standartinis metodas sveikatos būsenos naudingumo vertei išgauti tiesiai iš respondento, o ne ją išgalvoti. Tai vienas iš išgavimo metodų – kartu su standartiniu lošimu ir diskretaus pasirinkimo eksperimentais – kurie sukuria verčių rinkinius už tokių instrumentų kaip [EQ-5D](../eq-5d/), taigi ir už daugumos tolesnių [QALY](../kokybės-požiūriu-pakoreguoti-gyvenimo-metai/) skaičiavimų.

## Kodėl tai svarbu

Kiekvienas naudingumo svoris, patenkantis į QALY skaičiavimą, turėjo iš kažkur atsirasti. TTO yra kaip: būklei, laikomai geresne už mirtį, respondento klausiama, kiek metų `X` visiškoje sveikatoje jis laikytų lygiaverčiais `T` metų sutrikusioje būsenoje (`X < T`); naudingumas yra `X / T`. Būklei, kurią kai kurie respondentai laiko blogesne už mirtį, standartinė formulė žlunga (ji negali švariai atvaizduoti naudingumų žemiau nulio), todėl taikomas išplėstinis TTO. Programinės įrangos inžinierius ar analitikas, traktuojantis naudingumo svorį kaip duotą įvestį nežinodamas, kad jam sukurti reikėjo validuoto išgavimo protokolo, yra per vieną žingsnį nuo skaičiaus, kurio negali apginti, jei bus užginčytas.

## Matematika

```
Standard TTO (state better than death):
  utility = time_in_full_health / time_in_impaired_state

Extended TTO (state worse than death):
  utility = -time_traded_for_death / (total_duration - time_traded_for_death)
```

`time_in_full_health` / `time_in_impaired_state` – metai `X` visiškoje sveikatoje, laikomi lygiaverčiais `T` metų sutrikusioje būsenoje. `time_traded_for_death` / `total_duration` – blogesnės už mirtį formuluotėje, `a` metų iš `T` metų likusio gyvenimo, kuriuos respondentas iškeistų į tuojautinę mirtį, teikdamas pirmenybę `T − a` metų visiškoje sveikatoje, po kurių seka mirtis, o ne `T` metams blogesnėje už mirtį būsenoje. Rezultatas neigiamas, įtvirtintas taip, kad mirtis = 0.

## Išspręstas pavyzdys

**Standartinis**: respondentas yra sutrikusioje būsenoje 10 metų ir abejingas 7 metams visiškoje sveikatoje: naudingumas = 7 / 10 = **0,7**.

**Blogesnė už mirtį**: per 10 metų likusio gyvenimo respondentas iškeistų 2 metus į tuojautinę mirtį – jis teikia pirmenybę 8 metams visiškoje sveikatoje, po kurių seka mirtis, o ne 10 metų blogesnėje už mirtį būsenoje: naudingumas = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Ryšys su programinės įrangos inžinerija

Tas pats punktas, į kurį atsitrenkia DevEx ar įsitraukimo apklausa, prašydama žmonių įvertinti kažką neišnagrinėta 0–10 skale, čia taikomas atvirkščiai: TTO egzistuoja būtent todėl, kad „tiesiog paprašyti žmonių įvertinti“ pats savaime nėra validuotas išgavimo metodas. Prieš kuriant junginį indeksą – DevEx balą, įsitraukimo indeksą, perdegimo skalę – ant savęs įvertinto skaičiaus, paklauskite, kas jį išgavo ir ar tas metodas buvo validuotas – tą patį klausimą sveikatos ekonomistai užduoda naudingumo svoriui prieš jam patenkant į QALY.

## Spąstai

- **Individualios vertės apibendrinimas**: TTO vertės išgaunamos iš bendros visuomenės (ar pacientų) *imties*, o ne iš individo, kurio priežiūra sprendžiama – vieno respondento TTO vertės naudojimas tarsi ji apibendrinama yra atrankos klaida.
- **Netinkama formuluotė būsenai**: standartinė TTO formulė prielaidauja, kad būsena nedviprasmiškai geresnė už mirtį; taikant ją būsenai, kurią kai kurie respondentai laikytų blogesne už mirtį, nepereinant į išplėstinę formuluotę, tyliai gaunamas neteisingas (teigiamas) naudingumas.
- **Nepalyginamos trukmės**: TTO vertės, išgautos naudojant skirtingas likusio gyvenimo trukmes `T` blogesnio už mirtį palyginimui, nėra tiesiogiai palyginamos, nepatikrinus, ar tyrimo dizainas išlaikė `T` pastovų.

## Šaltiniai

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
