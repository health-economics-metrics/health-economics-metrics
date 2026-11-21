# Elkerülhető kiszervezési költségek

Amikor egy tröszt belső kapacitással nem tudja teljesíteni a célokat, prémium áron vásárol kapacitást: hétvégi túlórát a saját személyzetének, vagy eljárások kiszervezését magánszolgáltatókhoz. A kapacitást felszabadító szoftver gazdasági értéke magában foglalja e prémium díjú munka **elkerülhető költségét**.

## Miért fontos

A tervezett ellátás helyreállítási nyomása alatt a trösztök rutinszerűen fizetnek magánszektorbeli azonnali árakat (gyakran az NHS-konstrukció árának 1,2–1,5-szeresét), vagy prémium várólista-kezdeményezési díjakat a saját szakorvosaiknak a hétvégi listákért. A hétköznapi kapacitásállításokkal ellentétben az elkerült kiszervezés **készpénzfelszabadító**: a magánszolgáltatónak szóló számla valóban nem keletkezik. Ez teszi az egyik legerősebb előnysorrá a belső áteresztőképességet növelő szoftver számára — és az egyik legkönnyebben bizonyíthatóvá, mert a kiszervezési kiadás már látható költségvetési sor.

## A matematika

```
Avoidable outsourcing cost = activity moved in-house × (outsourced unit price
                             − internal marginal cost per case)

Internal marginal cost: consumables + variable staffing for the extra activity
— the fixed estate is already paid for (see marginal-vs-average-cost.md).
```

Az állításhoz az kell, hogy a felszabadult belső kapacitás ténylegesen elnyelje a tevékenységet: a műtői ülések, az ágyak és a személyzet mind elérhetők legyenek (a kötött korlát irányít — ismét a korlátok elmélete).

## Kidolgozott példa

Egy tröszt évente 800 szürkehályog-műtétet szervez ki darabonként 900 £-ért: 720 000 £/év külső kiadás, szemben a ~750 £-os konstrukciós árral.

A műtői ütemezési szoftver (listaoptimalizálás, lemondásokból rések feltöltése, fordulóidő-követés) annyira növeli a belső műtői kihasználtságot, hogy 500 műtétet vissza lehet venni:

```
Internal marginal cost per case ≈ £350 (consumables + sessional staffing)
Saving = 500 × (900 − 350) = £275,000/year — cash-releasing
Remaining outsourcing: 300 × £900 = £270,000 (was £720,000)
```

A szoftver költsége 90 000 £/év → nettó ≈ **+185 000 £/év felhasználható készpénz**, plusz a munka házon belül tartásának belső minőségi és képzési előnyei.

## Kapcsolat a szoftverfejlesztéssel

A közvetlen analóg a **vállalkozói és tanácsadói prémium**: amikor a belső mérnöki kapacitás nem tudja teljesíteni a vállalásokat, a szervezetek a belső teljes ráta 1,5–3-szorosán vásárolnak külső kapacitást. A belső áteresztőképességet növelő platform- és termelékenységi befektetéseknek pontosan a fentiek szerint kell igényelniük az elkerült vállalkozói kiadást — külső napidíj mínusz belső határköltség, szorozva a visszavett munkával —, mert ez egyike a fejlesztői termelékenységi üzleti eset kevés valóban készpénzfelszabadító sorának. Ugyanaz a figyelmeztetés: a belső kapacitásnak ténylegesen léteznie kell, és be kell ütemezni a visszavett munkára, különben az állítás fikció.

## Buktatók

- **Visszavétel állítása a teljes kapacitáslánc nélkül** — felszabadított sebészek műtői időablakok nélkül (vagy felszabadított mérnökök termékmenedzsment-sávszélesség nélkül) semmit sem vesznek vissza.
- **A kiszervezett ár összehasonlítása a belső átlagköltséggel** a határköltség helyett — furcsa módon alábecsüli a megtakarítást; a fix költségek így is úgy is futnak.
- **Minőségi/összetettségi aszimmetria**: a kiszervezett esetek gyakran az egyszerűek; visszavételük megváltoztatja a belső esetösszetételt és egységköltségeket.

## Források

- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
