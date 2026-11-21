# Društveni povrat ulaganja (SROI)

SROI proširuje [ROI](../povrat-ulaganja/) na ishode koje tržišta ne cijene — dobrobit, društvena povezanost, utjecaj na okoliš — unovčavajući ih financijskim zamjenama, za *sve* pogođene dionike.

## Zašto je važno

Velik dio onoga što zdravstvene i društvene intervencije proizvode nikad ne dotakne proračunsku stavku: smanjena usamljenost, rasterećenje njegovatelja, dobici u zapošljavanju, dostojanstvo. SROI, uređen sa sedam načela Social Value International (uključite dionike, vrednujte ono što je važno, ne preuveličavajte, budite transparentni, provjeravajte…), proizvodi izjave poput „3,20 £ društvene vrijednosti na 1 £ uloženog.” Zahtjevi britanske javne nabave za društvenu vrijednost čine dokaze u stilu SROI-ja komercijalno relevantnima: ponude za javne ugovore (uključujući NHS) dobivaju bodove za dokazanu društvenu vrijednost.

## Matematika

```
SROI omjer = PV(unovčeni društveni ishodi) / PV(ulaganje)

Za svaki ishod:
  vrijednost = količina × financijska zamjena × pripisivanje × (1 − deadweight) × (1 − istiskivanje)

deadweight   = bi se dogodilo i inače
pripisivanje = udio koji su uzrokovali drugi
istiskivanje = korist premještena odnekud drugdje umjesto stvorena
drop-off     = slabljenje ishoda tijekom godina
```

Faktori prilagodbe su integritet metode: bez njih je SROI fikcija s oznakom valute.

## Riješeni primjer

Aplikacija za druženje koja povezuje izolirane starije osobe s volonterima; trošak programa 200.000 £/godišnje; 1.500 aktivnih parova.

```
Ishod: smanjena usamljenost za 1,500 ljudi
  zamjena: vrednovanje dobrobiti „olakšanja od usamljenosti” ≈ £1,800/osobi/god
  deadweight 25% (neki bi pronašli povezanost i inače)
  pripisivanje 80% (dio zasluge pripada drugim službama)

Vrijednost = 1,500 × 1,800 × 0.80 × 0.75 = £1,620,000

Ishod: manje posjeta liječniku opće prakse, 1,500 × 1.2 posjeta × £42 = £75,600 (stvarno za platitelja)

SROI = (1,620,000 + 75,600) / 200,000 ≈ 8.5 : 1
```

Primijetite da je omjer 96 % vrednovane dobrobiti putem zamjena, a 4 % tvrde gotovine. To je legitiman SROI — ali mora se predstaviti kao društvena vrijednost, nikad dopustiti da implicira kako je 1,7 mil. £ moguće unovčiti.

## Veza sa softverskim inženjerstvom

SROI je pošten okvir za inženjerski rad čiji su korisnici izvan tima koji plaća: održavanje otvorenog koda, poboljšanja pristupačnosti, platformski rad koji troše drugi timovi, ulaganje u zajednicu programera. Prenosiva mehanika: identificirajte sve dionike, unovčite navedenim zamjenama i primijenite popuste deadweight/pripisivanja (bi li se taj OSS popravak dogodio i inače? koliki je dio dobitka vaš rad, a koliko ekosustava?). Disciplina *umanjivanja vlastitih tvrdnji o utjecaju* ono je što razlikuje SROI od marketinškog broja.

## Zamke

- **Kupovina zamjena**: biranje najizdašnijeg dostupnog vrednovanja dobrobiti.
- **Preskakanje deadweighta/pripisivanja** — najčešće napuhavanje, često udvostručuje omjer.
- **Usporedba omjera među studijama**: SROI omjeri su osjetljivi na metodu; uspoređujte samo unutar dosljednog okvira.
- **Prikaz društvene vrijednosti kao ušteda koje se mogu unovčiti** nositelju proračuna.

## Izvori

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
