# Értékteremtő kapacitás (működési fordulat)

Az értékteremtő kapacitás a felszabadított idő „lehetőség-haszna": amit a kórház most *elérhet* azokkal az órákkal, amelyeket a szoftvered felszabadít. Ez az a mutató, amely a legtöbbet számít az operatív igazgatóknak és az orvosigazgatóknak, mert abban a valutában beszél, amelyben őket menedzselik — tevékenység, célok és fordulat.

## Miért fontos

Az NHS hatalmas beutalástól-kezelésig elmaradásokkal szembesül, és azok a trösztök, amelyek elmulasztják az országos várakozási idő szabványokat, szabályozói vizsgálattal és beavatkozással néznek szembe (lásd [beutalástól a kezelésig](../beutalástól-a-kezelésig/)). A felvétel lassú és korlátozott; az ingatlanok rögzítettek. Az egyetlen gyors kar több értékteremtő tevékenység kihozása a meglévő személyzetből és térből. Az a szoftver, amely visszanyeri a szakemberidőt, nem csupán „pénzt takarít meg" — *kapacitást ver*: rendelőket, amelyek nem létezhettek volna, felméréseket, amelyeket nem lehetett volna ütemezni, felvétel és építkezés nélkül.

## A matematika

```
Hidden capacity created = time released → activity units enabled × scheme value

Activity units: outpatient attendances, pre-op assessments, monitoring reviews
Scheme value:   national tariff / NHS Payment Scheme prices
                (see national-tariff-and-unit-costs.md)
```

Ez a [szakemberidő](../szakemberidő/) kibocsátás-alapú értékelése, egy szolgáltatási vonalra skálázva és azokban a tevékenységegységekben kifejezve, amelyekben a működési csapat már tervez.

## Kidolgozott példa

A Band 6 szakápolók műtét előtti felmérő rendelőket vezetnek. A dokumentáció-automatizálás 25 ápolónként napi 1 órát nyer vissza; minden óra 2 felmérést tesz lehetővé.

```
Extra assessments = 25 nurses × 2/day × 250 days = 12,500/year
At ~£120 scheme value per pre-op assessment:
  12,500 × £120 = £1.5M/year of care capacity created
```

— egyetlen ápoló felvétele vagy egyetlen helyiség építése nélkül. (A széles körben idézett modell, amelyet ez a vázlat eredetileg idézett, egy kisebb kohorszra 766 920 £/évet adott meg; a számtani minta ugyanaz — a szám ápolók × ülések × tarifa szerint skálázódik.) Az operatív igazgatónak szóló keretezés: a műtét előtti felmérés megszűnik a műtői listák korlátja lenni — a napon lemondott műtétek csökkennek, a műtői kihasználtság nő, és itt kezdődik a *következő* előnysor (lásd [lefelé irányuló erőforrás-optimalizálás](../lefelé-irányuló-erőforrás-optimalizálás/)).

## Kapcsolat a szoftverfejlesztéssel

Ugyanez az újrakeretezés menti meg a fejlesztői termelékenységi állításokat a bérszámítástól: a felszabadult mérnöki idő, *szállított képességként* kifejezve, amelyet a szervezet másként nem engedhetne meg magának — funkciók, migrációk, megbízhatósági munka —, aszerint értékelve, amit a szervezet az ilyen képességért a határon fizet (vállalkozói ráták vagy halasztott felvételi egyenértékek). Az operatív igazgatói keretezés a platformmunka eladásáról is tanít valamit: fejezd ki az előnyt azokban az egységekben, amelyekben a közönséget menedzselik. A működési vezetők tevékenységben és célokban gondolkodnak, nem elvont órákban; a mérnöki vezetők útitervi tételekben és létszámban, nem megtakarított percekben.

## Buktatók

- **Kapacitásállítások kereslet nélkül**: 12 500 további felmérési időablak csak akkor számít, ha a sebészeti csővezeték betölti őket — ellenőrizd a lefelé irányuló korlátot.
- **Tarifaérték fizetési mechanizmus nélkül**: kevert fizetés alatt a többlettevékenység nem feltétlenül hoz többletbevételt; az érték inkább a várólista-csökkenés lehet (lásd [várólista-hatás](../várólista-hatás/)).
- **A kapacitás készpénzként bemutatása** — ez a zászlóshajó nem készpénzfelszabadító előny; címkézd (lásd [készpénzfelszabadító és nem készpénzfelszabadító](../készpénzfelszabadító-és-nem-készpénzfelszabadító-megtakarítások/)).

## Források

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
