# Desconto e Preferência Temporal

O desconto converte custos e benefícios futuros em valores presentes, porque um benefício hoje vale mais do que o mesmo benefício daqui a cinco anos.

## Porque é importante

Toda a avaliação de economia da saúde e todo o caso de negócio sério do setor público desconta fluxos plurianuais. O Green Book do HM Treasury do Reino Unido exige uma taxa de preferência temporal social anual de 3,5%; o caso de referência do NICE desconta tanto os custos como os efeitos na saúde a 3,5% ao ano (com uma taxa não-de-referência de 1,5% para terapias quase curativas com benefícios ao longo de 30+ anos). Se o caso de negócio do seu software alega "£5 milhões de poupanças ao longo de 10 anos", um revisor financeiro pedirá imediatamente a cifra descontada.

## O cálculo

Valor presente de uma quantia futura:

```
VP = VF / (1 + r)^t

VP = valor presente
VF = valor futuro no ano t
r  = taxa de desconto (NICE/Green Book: 0,035)
t  = anos a partir de agora
```

Para um benefício anual constante B ao longo de n anos (uma anuidade):

```
VP = B × [1 − (1 + r)^(−n)] / r
```

## Exemplo resolvido

O seu software poupa a um hospital do NHS £100.000 por ano durante 5 anos, começando um ano após o arranque.

Total não descontado: £500.000.

Descontado a 3,5%:

```
Ano 1: 100.000 / 1,035^1 = £96.618
Ano 2: 100.000 / 1,035^2 = £93.351
Ano 3: 100.000 / 1,035^3 = £90.194
Ano 4: 100.000 / 1,035^4 = £87.144
Ano 5: 100.000 / 1,035^5 = £84.197

VP Total ≈ £451.505
```

O título honesto é cerca de £451.000, aproximadamente 10% menos do que a soma ingénua. Suponha agora que a entrega atrasa um ano: cada termo desloca-se um ano mais tarde, e o VP cai para cerca de £436.000 — a perspetiva de desconto do [custo de atraso](../custo-de-atraso/).

## Ligação à engenharia de software

- **Os pagamentos de dívida técnica e as migrações de plataforma** prometem fluxos de benefício anos à frente; desconte-os antes de comparar com trabalho que se paga a si próprio neste trimestre.
- **Custos antecipados, benefícios tardios** é a forma padrão de uma migração. O desconto penaliza essa forma, corretamente: avalia o valor temporal sem risco de comprometer capacidade agora para valor mais tarde.
- **As alegações de "poupanças no ano 5"** merecem ceticismo duas vezes — estão tanto fortemente descontadas como altamente incertas (ver [análise de sensibilidade](../análise-de-sensibilidade/)).

## Armadilhas

- **Descontar custos mas não benefícios** (ou vice-versa) — o caso de referência desconta ambos, à mesma taxa.
- **Usar uma taxa comercial (8–12%) num caso do setor público**, ou 3,5% num apoiado por capital de risco. Faça corresponder a taxa ao decisor.
- **Confundir desconto com inflação.** O desconto aplica-se a valores *reais* (ajustados à inflação); não faça ambos implicitamente.

## Fontes

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
