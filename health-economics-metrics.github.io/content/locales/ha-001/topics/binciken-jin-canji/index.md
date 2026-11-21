# Binciken Jin Canji

Binciken jin canji na tabbatacce (DSA) yana canza zato ɗaya a lokaci guda a faɗin kewayon da zai yiwu don ganin ko ƙarshe zai tsira. Zane na ƙa'ida shi ne zanen guguwa: sigogi da aka jera bisa nawa suke girgiza sakamakon.

## Dalilin muhimmancinsa

Kowane samfurin tattalin arziki an gina shi a kan kiyasi — lokacin da aka ceta, karɓuwa, kuɗin naúra. Tantance fasahar lafiya ta ƙi karɓar kiyasin wuri ɗaya ("ROI 340% ne") ba tare da shaidar cewa ƙarshen yana da ƙarfi ga rashin yarjewa mai ma'ana kan shigarwa ba. Zanen guguwa yana gaya wa mai yanke shawara *wane zato ne za a bincika*: idan shari'ar tana aiki ne kawai idan mafi yawan sigar da ake jayayya a kai tana ƙarshen fata, kowa yana iya ganin hakan nan take.

Wannan ita ce al'ada mafi sauƙin canjawa daga tattalin arzikin lafiya zuwa shari'o'in kasuwanci na manhaja.

## Lissafin

Ga kowane sigar p tare da kewayon da zai yiwu [p_low, p_high]:

```
Result_low  = model(p = p_low,  all others at base case)
Result_high = model(p = p_high, all others at base case)
Swing(p)    = |Result_high − Result_low|
```

Jera sigogi bisa girgiza; zana sanduna a kwance kewaye da sakamakon tushe. Bambance-bambance: DSA ta hanyoyi biyu (canza sigogi biyu a grid), binciken ƙofa (nemo ƙimar sigar da shawara ke juyawa).

## Misali da aka lissafa

Mataimakin rubuta lamba na AI ga masu haɓakawa 200. Tushe: lasisi £39/mai haɓakawa/wata; mintuna 30/mai haɓakawa/rana da aka ceta; kuɗi mai kaya £60/sa'a; kwanakin aiki 220.

```
Base-case annual benefit = 200 × 0.5h × 220 × £60 = £1,320,000
Annual cost              = 200 × £39 × 12         = £93,600
Base-case net            = £1,226,400
```

Guguwa (sigar ɗaya a lokaci):

```
Time saved 0.1–1.0 h/day: net = £170,400 … £2,546,400   (swing £2.38M) ← dominates
Loaded cost £40–£80/h:    net = £786,400 … £1,666,400   (swing £0.88M)
Working days 200–240:     net = £1,106,400 … £1,346,400 (swing £0.24M)
Licence £30–£50/mo:       net = £1,248,000 … £1,200,000 (swing £48k)
```

Binciken ƙofa: riba net tana kaiwa sifili a kusan **mintuna 2.1/rana** da aka ceta. Shawarar ba ta damu da farashin lasisi ba kuma tana dogara gaba ɗaya da kiyasin lokacin da aka ceta — don haka auna wannan, ba sauran ba. (Kuma ka tuna sakamakon ƙarfi ne, ba kuɗi ba — duba [tanadi mai sakin kuɗi da wanda ba ya sakin kuɗi](../tanadi-mai-sakin-kuɗi-da-wanda-ba-ya-sakin-kuɗi/).)

## Alaƙa da injiniyancin manhaja

Injiniyoyi sun riga suna yin wannan da ilhami a matsayin "idan mun yi kuskure game da X fa?" — DSA kawai yana mai da shi na tsari kuma bayyananne. Sanya zanen guguwa a kowace shawarar kayan aiki, shirin ƙarfi, da binciken gina-ko-saya. Yana mayar da muhawara kan ra'ayin wane ne daidai zuwa yarjejeniya kan wace sigar za a je a auna — sau da yawa ta gwaji, wanda darajarsa kanta za a iya yi mata farashi (duba [darajar da ake tsammani ta cikakken bayani](../darajar-da-ake-tsammani-ta-cikakken-bayani/)).

## Tarkuna

- **Kewayo da aka zaɓa don yin sassauci**: ±10% a kowace shigarwa ba tare da la'akari da ainihin rashin tabbas ba. Kiyasin lokacin da aka ceta ya cancanci ±80%; farashin lasisi ±10%.
- **Ɗaya-a-lokaci yana rasa mu'amala** — sigogi masu alaƙa (karɓuwa da lokacin da aka ceta) suna buƙatar bincike ta hanyoyi biyu ko cikakken [binciken jin canji na yiwuwa](../binciken-jin-canji-na-yiwuwa/).
- **Yin bincike da watsi da shi**: idan guguwa ta ce shari'ar tana dogara da lamba mai laushi ɗaya, mataki na gaba shi ne aunawa, ba sa hannu ba.

## Tushe

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
