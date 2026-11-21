# Lokacin Ma'aikaci

Lokacin ma'aikaci shi ne albarkatu mafi ƙaranci a yawancin tsarin lafiya. Auna darajar ceton likita mintuna a kowace rana yana buƙatar sauyawa daga lissafin albashi mai sauƙi zuwa **farashin damar da aka bari da ƙarfin tsari**: a cikin hidimar lafiya ta ƙasa, lokacin ma'aikaci cikas ne na aiki mai tsauri, ba layin kuɗi mai sassauci ba.

## Dalilin muhimmancinsa

Ba za ka iya samar da ƙarin GPs, likitocin ƙwararru, ko ma'aikatan jinya na musamman da sauri ba — hanyoyin horarwa suna ɗaukar shekaru 5–15, kuma guraben aiki suna dawwama. Saboda haka sa'ar ma'aikaci da aka ceta ba "albashin da aka kauce wa" ba ne (ana biyan ma'aikacin har yanzu); *ƙarfin cikas da aka saki* ne, kuma ƙarfin cikas yana da daraja daidai abin da cikas ɗin ke samarwa. Shi ya sa da'awar "yana ceton mintuna 10 ga kowace shawara" su ne a lokaci ɗaya mafi yawa kuma mafi kuskuren farashi a lafiyar dijital.

## Lissafin

Matakan kimantawa uku, ta ƙaruwar gaskiya:

```
1. Wage basis:        hours × loaded salary rate (PSSRU unit costs)
                      — what the time costs, not what it produces
2. Output basis:      hours → appointments/procedures enabled × scheme value
                      (see national-tariff-and-unit-costs.md)
3. Bottleneck basis:  if this role gates a whole pathway, hours × value of
                      pathway throughput released (theory of constraints)
```

Rangwamen wargajewa: lokacin da aka ceta a ɓangarori ƙasa da ma'auni mai amfani (misali mintuna 3 a watse a asibiti) ba a sake tura shi da kyau; yi amfani da ma'aunin amfani da aka bayyana.

## Misali da aka lissafa

Rubutun ɗaukar murya na kai-tsaye yana ceton GP mintuna 2 ga kowace shawara, shawarwari 30/rana: mintuna 60/rana, ko **sa'o'i 220/shekara ga kowane GP** a kwanakin aiki 220.

```
Wage basis:   220 × £80 (loaded GP hour, PSSRU-region) ≈ £17,600/GP/year
Output basis: 60 min/day = 5 extra 12-min consultations/day
              = 1,100 extra appointments/GP/year × £42 ≈ £46,200/GP/year
              — or the same appointments absorbed as reduced overtime and
              safer, unhurried consultations (qualitative line)
```

A faɗin ƙungiyar GP 50 ƙarfin tushen fitarwa yana da daraja ~£2.3M/shekara — muddin mintunan na gaske ne (an auna, ba da'awar mai siyarwa ba), an haɗa su (cikakkun shawarwari, ba ɓangarori ba), kuma an sake tura su (duba [tanadi mai sakin kuɗi da wanda ba ya sakin kuɗi](../tanadi-mai-sakin-kuɗi-da-wanda-ba-ya-sakin-kuɗi/)).

## Alaƙa da injiniyancin manhaja

Lokacin babban injiniya yana aiki iri ɗaya: shi ne cikas da ƙira, bita, da abubuwan da suka faru ke wucewa ta cikinsa, saboda haka a ƙididdige shi da abin da cikas ɗin ke ƙofa, ba da albashi ba. Kimantawa matakai uku ɗaya tana aiki ga kowace da'awar "AI tana ceton kowane mai haɓakawa mintuna X" — lissafin albashi yana wa ƙananan lambobi sassauƙa; tambayoyin gaskiya su ne ko mintuna suna haɗuwa zuwa tubalan masu amfani kuma abin da ƙarfin da aka saki yake samarwa da gaske. Duba [inganta albarkatu na ƙasa](../inganta-albarkatu-na-ƙasa/) don mai ninkawa idan sa'ar da aka ceta ta mutumin da kowa ke jira ne.

## Tarkuna

- **Mintuna × albashi = tanadi** — ƙarin ƙima na gargajiya; ƙarfi ne, kuma a ma'aunin amfani da aka bayyana kawai.
- **Watsi da matsalar ma'auni**: tanadin mintuna 5 sau 12 ≠ sa'a ɗaya kyauta.
- **Daraja duk ayyuka iri ɗaya**: sa'ar cikas na hanya tana da daraja ninkin sa'ar aikin da ba ya ƙofa sau da yawa.

## Tushe

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
