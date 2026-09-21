# Análise Custo-Benefício (ACB)

A ACB avalia tanto os custos *como* os resultados em dinheiro. É o único tipo de análise que consegue responder "vale mesmo a pena fazer isto?" — não apenas "qual opção é melhor?" — porque os benefícios monetizados podem ser comparados diretamente com os custos.

## Porque é importante

A ACB é o padrão do **Green Book** do HM Treasury do Reino Unido para toda a avaliação de despesa pública, incluindo saúde quando os resultados podem ser monetizados. Onde a [ACE](../análise-custo-efetividade/)/[ACU](../análise-custo-utilidade/) param em "custo por unidade de saúde", a ACB avalia a própria saúde (QALY × valor do limiar) e tudo o resto — tempo, deslocações, carbono — e reporta uma única cifra líquida. Todo o caso de negócio digital completo do NHS contém um caso económico em forma de ACB.

## O cálculo

```
VAL (valor social líquido presente) = Σ_t [ (Benefícios_t − Custos_t) / (1 + r)^t ]
RBC (rácio benefício-custo)         = VA(benefícios) / VA(custos)

Adote se VAL > 0 (equivalentemente RBC > 1); classifique por VAL, não por RBC.
r = 3,5% (taxa de preferência temporal social do Green Book)
```

Os efeitos na saúde podem entrar monetizados como QALYs × λ (ver [limiares de disposição para pagar](../limiares-de-disposição-para-pagar/)). O Green Book também exige **ajustes de viés de otimismo** — aumentar as estimativas de custo e reduzir os benefícios por percentagens baseadas em evidência, porque as avaliações são sistematicamente otimistas.

## Exemplo resolvido

Um sistema de referenciação eletrónica, horizonte de 5 anos, desconto de 3,5%:

```
Custos:    construção £1,2M (ano 0), funcionamento £300mil/ano (anos 1–5)
Benefícios: poupanças administrativas £250mil/ano, diagnósticos duplicados evitados £280mil/ano,
          tempo do doente poupado 40.000 horas/ano × £15 = £600mil/ano → £1.130mil/ano

VA custos    = 1.200mil + 300mil × 4,515 (fator de anuidade) = £2.555mil
VA benefícios = 1.130mil × 4,515                              = £5.102mil

VAL = 5.102 − 2.555 = +£2.547mil     RBC = 2,0
```

Aplique o viés de otimismo do Green Book (digamos +40% no custo de construção, −20% nos benefícios): VA custos ≈ £3.035mil, VA benefícios ≈ £4.082mil, VAL ≈ **+£1.047mil** — ainda positivo, que é o objetivo do ajuste: os casos devem sobreviver ao seu próprio otimismo.

## Ligação à engenharia de software

Os casos de negócio de engenharia são ACBs informais. As melhorias do Green Book que valem a pena copiar:

- **O viés de otimismo como um aumento padrão** — os engenheiros subestimam o custo de migração tão fiavelmente como os ministérios subestimam o custo de infraestrutura; aplique um aumento declarado em vez de fingir que desta vez é diferente.
- **Monetize o benefício dominante honestamente ou nem por isso** — o tempo do doente/utilizador é monetizado a taxas defensáveis; o "valor de marca" não é.
- **O VAL classifica, o RBC não**: um projeto pequeno com RBC 5 pode importar menos do que um grande com RBC 1,6.

## Armadilhas

- **Monetizar o não monetizável** para inflacionar benefícios (moral, "alinhamento estratégico") — mantenha-os qualitativos, conforme a [análise custo-consequência](../análise-custo-consequência/).
- **Contar transferências como benefícios**: o dinheiro que se move entre organismos públicos anula-se a zero na [perspetiva](../perspetiva-de-análise/) societal.
- **Sem contrafactual**: os benefícios são medidos face à opção do mínimo indispensável, não face a zero.

## Fontes

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
