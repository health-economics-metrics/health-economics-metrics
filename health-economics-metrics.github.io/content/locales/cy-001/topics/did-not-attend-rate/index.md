# Cyfradd Peidio â Mynychu (DNA)

Cyfradd DNA yw canran yr apwyntiadau a archebwyd lle nad yw'r claf yn mynychu nac yn canslo. Telir am y clinigwr, yr ystafell, a'r slot; ni ddigwydd dim. Dyma'r metrig gwastraff puraf mewn gofal iechyd — ac un o'r rhai hawsaf i'w drwsio â meddalwedd.

## Pam mae'n bwysig

Ffigurau NHS England (2019): mae apwyntiadau meddyg teulu a gollwyd yn fwy na 15 miliwn/flwyddyn ar ~£30 yr un — dros **£216M/flwyddyn** — ac mae DNAs cleifion allanol ysbytai'n rhedeg ar ~8M/flwyddyn (~6.4% o apwyntiadau) ar gyfartaledd o ~**£160** fesul slot a gollwyd. Am mai ceiniogau yw cost ymylol nodyn atgoffa, a'r gwerth a adferir yw slot clinigol â staff llawn, mae gan leihau DNA rai o'r symiau ROI gorau mewn iechyd digidol — dyna pam roedd nodiadau atgoffa SMS, ailfwcio hawdd, a gorfwcio rhagfynegol ymhlith y buddugoliaethau iechyd digidol cyntaf a brofwyd.

## Y fathemateg

```
Cyfradd DNA = DNAs / apwyntiadau a archebwyd × 100

Gwerth y gostyngiad = apwyntiadau × ΔCyfradd DNA × gwerth fesul slot a adferwyd

gwerth fesul slot a adferwyd: caiff y slot ei ailddefnyddio (gwerth gweithgarwch /
gostyngiad rhestr aros) neu ni chaiff (amser staff yn rhannol ailddefnyddiadwy) —
mae'r mecanwaith yn bwysig, fel gyda bed-days-saved.md.
```

## Enghraifft wedi'i datrys

Adran cleifion allanol: 200,000 o apwyntiadau/flwyddyn, cyfradd DNA 8%. Mae gwasanaeth nodyn-atgoffa-a-hailfwcio (SMS ag ailfwcio un-tap, gwybodaeth trafnidiaeth, fformatau hygyrch) yn torri DNAs i 5.5%.

```
Slotiau a adferwyd = 200,000 × 0.025 = 5,000/flwyddyn
Wedi'u hailddefnyddio o'r rhestr aros ar werth cleifion allanol cyfartalog ~£160:
  5,000 × £160 = £800,000/flwyddyn o weithgarwch a adferwyd
Cost gwasanaeth: 200,000 × £0.40 = £80,000/flwyddyn

Enillion ≈ 10:1, ynghyd â 5,000 o gleifion ar y rhestr aros yn cael eu gweld yn gynt
(gweler waiting-list-impact.md a referral-to-treatment.md).
```

Mae maint yr effaith (2.5 pwynt) yn realistig: mae treialon RCT ar nodiadau atgoffa yn dangos gostyngiad DNA cymharol o 25–40% yn gyson.

## Cysylltiad â pheirianneg meddalwedd

- **Mae hwn yn broblem systemau amserlennu**: nodiadau atgoffa, ailfwcio hunanwasanaeth, ail-lenwi rhestr aros yn awtomatig o ganslo, a modelau rhagfynegi peidio-â-dod sy'n gyrru dwbl-fwcio wedi'i dargedu. Mae pob un yn beirianneg meddalwedd gyffredin ag achos economaidd anarferol o glir.
- **Y cyfatebiaeth beirianneg**: peidio-â-dod ar gyfer capasiti a gadwyd — slotiau CI wedi'u harchebu ond segur, capasiti cwmwl wedi'i gadw, ystafelloedd cyfarfod, panelau cyfweld. Mae'r economeg yn trosglwyddo: mae symbyliad awtomataidd rhad (neu ryddhau awtomatig o gadwedigaethau na ddefnyddiwyd) yn adfer capasiti drud a ymrwymwyd.
- **Rhagolwg moeseg rhagfynegi**: mae modelau peidio-â-dod, wedi'u hyfforddi ar ddata mynychu, yn amgodio amddifadedd a rhwystrau mynediad; mae eu defnyddio i *ddadflaenoriaethu* rhai sy'n debygol o beidio â mynychu yn chwyddo anghydraddoldeb, ond mae eu defnyddio i *gefnogi* mynychu (cymorth trafnidiaeth, dewisiadau ffôn) yn ei leihau. Gweler [cyrhaeddiad a thegwch](../reach-and-equity/).

## Peryglon

- **Cyfrif canslo-ac-ailfwcio fel gwerth a adferwyd ddwywaith.**
- **Prisio slotiau a adferwyd nad ydynt wedi'u hailddefnyddio** — mae slot gwag ar ôl anfon nodyn atgoffa yn dal yn wag.
- **Ceisio gyrru DNA i sero**: mae'r pwyntiau olaf o DNA yn gleifion sy'n wynebu rhwystrau go iawn; mae dulliau cosbol (rhyddhau ar ôl N o DNAs) yn torri'r metrig trwy adael y cleifion.

## Ffynonellau

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- Crynodebau cost DNA. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
