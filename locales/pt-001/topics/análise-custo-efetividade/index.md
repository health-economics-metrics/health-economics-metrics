# Análise Custo-Efetividade (ACE)

A ACE compara os custos de intervenções alternativas face a um único resultado medido em **unidades naturais** — anos de vida, casos detetados, internamentos evitados, mmHg de pressão arterial reduzidos. O seu resultado é um custo por unidade de resultado.

## Porque é importante

A ACE é a comparação cavalo de batalha quando todas as opções visam o mesmo resultado. Responde a "qual destas formas de alcançar X é o melhor uso do dinheiro?" — mas *não* "vale a pena alcançar X?" (isso precisa de [análise custo-benefício](../análise-custo-benefício/)) e *não* "como é que X se compara a prioridades não relacionadas?" (isso precisa de [análise custo-utilidade](../análise-custo-utilidade/) e de um resultado genérico como o QALY).

## O cálculo

A estatística de comparação é o [ICER](../rácio-de-custo-efetividade-incremental/) em unidades naturais:

```
ICER = (Custo_A − Custo_B) / (Efeito_A − Efeito_B)
     = £ por caso adicional detetado / internamento evitado / etc.
```

Procedimento: defina a unidade de resultado; custeie todas as opções a partir da mesma [perspetiva](../perspetiva-de-análise/) ao longo do mesmo [horizonte temporal](../horizonte-temporal/); elimine as opções dominadas ([fronteira de eficiência](../dominância-e-a-fronteira-de-eficiência/)); calcule rácios incrementais ao longo da fronteira.

## Exemplo resolvido

Três formas de encontrar fibrilhação auricular não diagnosticada numa população de 100.000:

```
Opção                      Custo       Casos encontrados
Verificações de pulso oportunistas £150.000       300
Eventos de rastreio em farmácias   £400.000       520
Rastreio baseado em wearables      £900.000       610

ICER farmácia vs pulso:  (400mil−150mil)/(520−300) = £1.136 por caso adicional
ICER wearable vs farmácia:(900mil−400mil)/(610−520) = £5.556 por caso adicional
```

Se £5.556 por caso adicional "vale a pena" depende do valor de um caso encontrado (prevenção de AVC a jusante) — a ACE classifica as opções mas a decisão de adoção precisa dessa avaliação externa. Note como o custo *médio* da opção wearable por caso (900mil/610 = £1.475) parece bem; o **incremental** £5.556 é o número honesto para a decisão de expansão.

## Ligação à engenharia de software

A ACE é o modelo certo sempre que as opções partilham um resultado: custo por teste instável eliminado entre três abordagens de correção; custo por incidente evitado entre fornecedores de observabilidade; custo por implantação bem-sucedida entre arquiteturas de CI. A disciplina que impõe — uma unidade de resultado declarada, rácios incrementais (não médios), opções dominadas eliminadas primeiro — mata a maioria das más comparações de fornecedores antes de a discussão de preços começar.

## Armadilhas

- **Comparar opções com resultados diferentes** ("casos encontrados" vs "satisfação") numa única ACE — isso precisa de [análise custo-consequência](../análise-custo-consequência/) ou de um resultado genérico.
- **Rácios de custo-efetividade médios** apresentados onde são necessários incrementais (o exemplo do wearable acima).
- **Unidades de resultado escolhidas por lisonja**: "alertas gerados" é um produto, não um resultado; insista em unidades que carregam valor.

## Fontes

- CDC POLARIS: cost-effectiveness analysis. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
