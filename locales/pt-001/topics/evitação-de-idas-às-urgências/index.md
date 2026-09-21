# Evitação de Idas às Urgências

A evitação de idas às urgências conta as visitas ao SU (A&E) e internamentos de emergência prevenidos por intervenção a montante — aplicações de triagem, monitorização remota, enfermarias virtuais, redirecionamento de cuidados urgentes. Converte "apanhámos isto mais cedo" numa alegação com custo determinado.

## Porque é importante

Os cuidados de emergência são o contexto rotineiro mais caro do sistema (os custos unitários de ida ao SU na gama de £250–£400 segundo cifras do National Cost Collection / PSSRU; um internamento de emergência é milhares), e a sobrelotação do SU cai em cascata sobre atrasos de ambulâncias e cirurgias eletivas canceladas. Qualquer coisa que resolva com segurança a procura a montante — conselho de autocuidado, cuidados primários no mesmo dia, resposta comunitária — compra capacidade ao sistema no seu ponto mais tenso. Esta é a linha de benefício padrão para verificadores de sintomas, serviços de triagem estilo 111, e [monitorização remota de doentes](../economia-da-monitorização-remota-de-doentes/).

## O cálculo

```
Idas evitadas = população × (taxa de referência − taxa de intervenção)
Poupança bruta = idas evitadas × custo unitário por ida
                      (+ internamentos evitados × custo de internamento, contado separadamente)

Poupança líquida = poupança bruta − custo da intervenção − custo de uso da nova via
                      (a procura redirecionada não é grátis: uma chamada 111, uma vaga de
                       clínico geral, um dia de enfermaria virtual têm todos custos unitários)
```

A alegação causal precisa de um comparador: as taxas de idas têm tendências e variam sazonalmente, pelo que o antes/depois sozinho não prova nada.

## Exemplo resolvido

Um serviço de monitorização remota de DPOC para 3.000 doentes de alto risco. A avaliação com controlo emparelhado mostra que as idas ao SU relacionadas com exacerbação caem de 0,9 para 0,7 por doente-ano, e os internamentos de emergência de 0,5 para 0,42.

```
Idas evitadas = 3.000 × 0,2  = 600 × £300   = £180.000
Internamentos evitados = 3.000 × 0,08 = 240 × £3.800 = £912.000
Bruto                                                £1.092.000/ano

Custos: serviço de monitorização £600.000; respostas extra de enfermagem comunitária £150.000
Líquido ≈ +£342.000/ano — mais os ganhos de QALY de exacerbações tratadas mais cedo.
```

Note que a linha de internamentos domina: a evitação de idas sozinha raramente paga por um serviço de monitorização; é a evitação de *internamentos* onde está o dinheiro.

## Ligação à engenharia de software

Isto é **economia de evitação de incidentes**. O valor da observabilidade, das implantações canário, e dos sistemas de aviso precoce são "idas às urgências" evitadas — pages, salas de guerra, sev-1s — cada uma com um custo carregado (horas-engenheiro × taxa + impacto no cliente). Aplicam-se as mesmas regras de modelação: líquido do custo da nova via a montante (a triagem de alertas não é grátis), cuidado com a substituição (alertas que criam trabalho sem prevenir incidentes são ansiedade de saúde, não saúde), e prove o contrafactual com um controlo (as taxas de incidentes das equipas têm tendências e regridem para a média, exatamente como as idas ao SU).

## Armadilhas

- **Regressão para a média**: coortes de alto risco selecionadas num mau ano melhoram sem tratamento; controlos emparelhados ou designs de cunha escalonada são essenciais.
- **Procura induzida pela oferta**: a triagem digital fácil pode *aumentar* os contactos totais (menor limiar para procurar ajuda) enquanto diminui a quota do SU — conte o custo total do sistema.
- **Avaliar idas a custo médio** quando os custos fixos do SU não caem — ver [custo marginal vs médio](../custo-marginal-vs-médio/).

## Fontes

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
