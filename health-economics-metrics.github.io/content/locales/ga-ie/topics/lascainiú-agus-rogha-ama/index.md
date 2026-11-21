# Lascainiú agus rogha ama

Aistríonn lascainiú costais agus sochair amach anseo go luachanna láithreacha, mar go bhfuil sochar inniu ar luach níos mó ná an sochar céanna i gceann cúig bliana.

## Cén fáth a bhfuil tábhacht leis

Déanann gach measúnú eacnamaíochta sláinte agus gach cás gnó tromchúiseach san earnáil phoiblí sruthanna il-bhliana a lascainiú. Sainordaíonn Leabhar Glas Státchiste a Shoilse na RA ráta rogha ama sóisialta bliantúil de 3.5%; lascainíonn cás tagartha NICE costais agus éifeachtaí sláinte araon ag 3.5% in aghaidh na bliana (le ráta 1.5% neamh-chás-tagartha do theiripí beagnach-leighis a bhfuil sochair acu thar 30+ bliain). Má éilíonn do chás gnó bogearraí “£5 milliún coigilteas thar 10 mbliana,” iarrfaidh athbhreithneoir airgeadais an figiúr lascainithe láithreach.

## An mhatamaitic

Luach láithreach méid amach anseo:

```
PV = FV / (1 + r)^t

PV = luach láithreach
FV = luach amach anseo i mbliain t
r  = ráta lascaine (NICE/Leabhar Glas: 0.035)
t  = blianta ón lá inniu
```

I gcás sochar bliantúil seasmhach B thar n bliain (annuity):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Sampla oibrithe

Sábhálann do bhogearraí £100,000 in aghaidh na bliana d’iontaobhas NHS ar feadh 5 bliana, ag tosú bliain tar éis go-live.

Iomlán gan lascainiú: £500,000.

Lascainithe ag 3.5%:

```
Bliain 1: 100,000 / 1.035^1 = £96,618
Bliain 2: 100,000 / 1.035^2 = £93,351
Bliain 3: 100,000 / 1.035^3 = £90,194
Bliain 4: 100,000 / 1.035^4 = £87,144
Bliain 5: 100,000 / 1.035^5 = £84,197

PV iomlán ≈ £451,505
```

Is é an ceannlíne macánta thart ar £451,000, thart ar 10% níos lú ná an tsuim naive. Anois samhlaigh go sleamhnaíonn an seachadadh bliain: bogann gach téarma bliain níos déanaí, agus titeann an PV go thart ar £436,000 — radharc lascainithe an [chostais moille](../costas-moille/).

## An nasc le hinnealtóireacht bogearraí

- **Íocaíocht fiachais theicniúil agus imirce ardáin** geallann siad sruthanna sochair blianta amach; lascainigh iad sula gcuireann tú i gcomparáid le hobair a íocann ar ais an ráithe seo.
- **Costais tosaithe, sochair déanacha** is cruth caighdeánach imirce é. Pionósaíonn lascainiú an cruth sin, i gceart: cuireann sé praghas ar luach ama saor ó riosca tiomantas cumais anois do luach níos déanaí.
- **Éilimh “coigilteas i mbliain 5”** tuillteanas amhras faoi dhó — tá siad lascainithe go mór agus an-éiginnte (féach [anailís íogaireachta](../anailís-íogaireachta/)).

## Gaistí

- **Costais a lascainiú ach gan sochair** (nó vice versa) — lascainíonn an cás tagartha an dá cheann, ag an ráta céanna.
- **Ráta tráchtála (8–12%) a úsáid i gcás san earnáil phoiblí**, nó 3.5% in ceann a mhaoiníonn caipiteal fiontair. Meaitseáil an ráta leis an gcinnteoir.
- **Lascainiú a mhearbhall le boilsciú.** Baineann lascainiú le luachanna *fíor* (coigeartaithe do bhoilsciú); ná déan an dá cheann go hintuigthe.

## Foinsí

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
