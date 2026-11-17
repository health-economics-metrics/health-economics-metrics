# Valor de uma Vida Estatística (VSL)

O valor de uma vida estatística (VSL) — no uso britânico «valor de uma morte evitada» (VPF) — é a quantia que uma *população* está coletivamente disposta a pagar para reduzir o risco de uma morte estatística, derivada de estudos de compensação salário-risco (quanto salário adicional exigem os trabalhadores por um emprego mais perigoso) e de inquéritos de preferências declaradas. Não é o preço da vida de uma pessoa identificada; é uma construção de risco populacional, e um engenheiro de software que constrói sistemas que reduzem riscos (algoritmos de triagem, despacho de ambulâncias, monitorização de segurança) deve saber que vem de uma tradição teórica diferente dos [limiares de disposição para pagar](../limiares-de-disposição-para-pagar/).

## Porque é importante

O VSL/VPF é a ferramenta padrão para monetizar reduções do risco de mortalidade na análise custo-benefício regulatória: a segurança dos transportes, a regulação ambiental e algumas intervenções de saúde pública constroem os seus casos de negócio através dela. O Green Book do HM Treasury publica um valor de VPF derivado de dados do mercado de trabalho e de inquéritos do Reino Unido, e o Departamento dos Transportes usa-o diretamente na avaliação da segurança rodoviária. É uma tradição de avaliação realmente distinta da metodologia QALY × limiar de disposição para pagar: a abordagem do limiar valoriza o ganho de saúde face ao que o *orçamento da saúde* produz atualmente à margem, ao passo que o VSL/VPF valoriza a redução do risco face ao que as pessoas revelam, no mercado de trabalho ou num inquérito, que pagariam por ela. Os dois quadros nem sempre são compatíveis, e usar ambos num mesmo caso sem o reconhecer é um erro analítico comum.

## O cálculo

```
Mortes evitadas = população × redução_do_risco_por_pessoa
  (redução_do_risco_por_pessoa é uma probabilidade, p. ex., 0,000001 =
   uma redução de um em um milhão do risco anual de mortalidade)

Benefício_de_mortalidade_monetizado = mortes_evitadas × valor_de_uma_morte_evitada
```

## Exemplo resolvido

Uma região de 800.000 habitantes beneficia de uma intervenção digital de despacho/triagem em segurança rodoviária que reduz o risco anual de mortalidade de cada pessoa em um em um milhão (0,000001):

```
Mortes evitadas = 800,000 × 0.000001 = 0.8
```

Com o valor de uma morte evitada do Reino Unido de £2.180.000 (valor HM Treasury/DfT, preços de 2023/24; o Green Book atualiza-o anualmente, pelo que convém verificá-lo antes de o citar numa análise em curso):

```
Benefício de mortalidade monetizado = 0.8 × £2,180,000 = £1,744,000/ano
```

Pouco menos de £1,75 milhões por ano de benefício de mortalidade monetizado, a partir de uma redução do risco que a maioria da população afetada nunca notaria individualmente.

## Ligação à engenharia de software

As equipes de software crítico para a segurança (firmware de dispositivos médicos, software de veículos autónomos, sistemas de controlo industrial) enfrentam este mesmo problema de fixação de preços ao construir o caso de custo-benefício de um investimento em segurança: como dar preço a «evitar uma falha catastrófica» quando a falha é rara, grave e está repartida por uma grande população de usuários? O VSL/VPF oferece um precedente real, público e com décadas para pôr um número numa redução rara e grave do risco ao nível populacional: a mesma forma de argumento que dar preço a um investimento de SRE face a uma falha catastrófica pouco frequente, apenas com um resultado de mortalidade em vez de um de tempo de inatividade.

## Armadilhas

- **Tratar o VSL como o «preço de uma vida identificada»**: não é. O VSL/VPF é uma construção estatística populacional derivada de compensações de redução de risco entre muitas pessoas, não uma avaliação da vida ou da morte de um indivíduo concreto.
- **Dupla contagem com um cálculo de benefício monetário líquido baseado em QALY**: usar um valor de VSL/VPF e um cálculo à parte de QALY × limiar no mesmo caso, sem os conciliar, conta em silêncio duas vezes o valor das mesmas mortes evitadas. É preciso escolher um quadro por caso.
- **Transpor uma estimativa de VSL entre contextos sem ajustar**: um VSL derivado do mercado de trabalho ou de dados salário-risco da população ativa de um país, aplicado sem ajuste a outro contexto de rendimento ou a outra população (crianças, idosos), é uma questão metodológica realmente disputada e antiga — não resolvida.

## Fontes

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — orientação complementar sobre o Value of a Prevented Fatality (preços de 2023/24; os valores do Green Book são atualizados anualmente). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (para a tradição norte-americana do VSL, fornecida em contraste com o valor de VPF britânico acima). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
