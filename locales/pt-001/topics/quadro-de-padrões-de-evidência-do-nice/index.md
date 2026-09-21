# Quadro de Padrões de Evidência do NICE (ESF)

O ESF é o quadro do NICE que especifica **quanta evidência uma tecnologia de saúde digital precisa, proporcional ao seu risco**. É a coisa mais próxima de uma resposta oficial a "o que temos de provar antes de o NHS comprar a nossa aplicação?"

## Porque é importante

O ESF (lançado pela primeira vez em 2019, atualizado em 2022 para cobrir IA e algoritmos adaptativos) classifica as tecnologias de saúde digital em níveis por função clínica, com padrões de evidência **cumulativos** — 21 padrões em 5 grupos (fatores de design, valor, desempenho/efetividade, impacto económico, implementação):

```
Nível A — serviços de sistema, sem resultado direto no doente (ex.: escalonamento eletrónico)
         → padrões básicos: credibilidade, proteção de dados, garantia técnica
Nível B — informar, monitorização simples, comunicação (ex.: diário de sintomas)
         → + evidência de benefício ao utilizador, fiabilidade adequada
Nível C — tratar, diagnosticar, ou orientar ativamente a gestão clínica
         → + evidência de efetividade comparativa de alta qualidade (idealmente RCT)
           e análise económica
```

Para evidência económica, a [análise custo-consequência](../análise-custo-consequência/) é aceitável para a maioria dos níveis; a [análise custo-utilidade](../análise-custo-utilidade/) é esperada no risco mais elevado. O ESF define o seu **custo de evidência de entrada no mercado** — orce para isso como qualquer outro custo de construção.

## O cálculo

Sem fórmulas — uma tabela de decisão. O cálculo operativo é comercial:

```
Investimento em evidência necessário = f(nível)
  Nível A: documentação + garantia ≈ £10mil–50mil
  Nível B: estudo observacional/comparativo de benefício ao utilizador ≈ £50mil–250mil
  Nível C: estudo comparativo de grau RCT + modelo económico ≈ £250mil–£2M+

Posicione as alegações do seu produto deliberadamente: alegar "apoia decisões
clínicas" em vez de "informa doentes" move-o um nível e pode multiplicar por 10 a fatura.
```

## Exemplo resolvido

O fabricante de uma aplicação de lembrete de medicação considera acrescentar uma funcionalidade de recomendação de ajuste de dose.

- Como aplicação de lembrete: **Nível B** — um estudo de coorte mostrando melhoria de adesão é suficiente.
- Com recomendações de dose: **Nível C** — evidência de efetividade comparativa (provavelmente um RCT face aos cuidados habituais) mais análise económica.

Se o RCT custa £600mil e a receita incremental da funcionalidade de dose é £200mil/ano, a funcionalidade tem de manter valor durante 3+ anos antes de os custos de evidência atingirem o ponto de equilíbrio — uma decisão de produto que parece inteiramente diferente uma vez que o nível ESF é precificado. Muitas equipas lançam o produto de Nível B e faseiam a alegação de Nível C atrás do financiamento.

## Ligação à engenharia de software

O ESF é o padrão de governação único mais transferível neste repositório: **requisitos de evidência escalonados por risco para adoção de ferramentas**. Versão interna: um formatador de código precisa de uma demonstração (Nível A); uma ferramenta de produtividade que alega horas poupadas precisa de um piloto medido (Nível B); uma porta de IA que bloqueia automaticamente implantações ou escreve automaticamente código clínico precisa de evidência de grau ensaio-controlado antes de um lançamento em toda a organização (Nível C). A evidência proporcional para ambos os modos de falha — a burocracia a estrangular ferramentas triviais, e as vibrações a lançar ferramentas consequentes. Ver também [via rápida DiGA](../via-rápida-diga-da-alemanha/) para o complemento de "adoção provisória com prazo de evidência".

## Armadilhas

- **Classificação de nível errada por pensamento otimista** — os reguladores e compradores classificam pelo que o produto *faz*, não pelo que o marketing diz.
- **Evidência construída depois do produto**: retroajustar um RCT a um produto já lançado sem instrumentação ou equipoise é lento e frequentemente impossível.
- **Cumprir o ESF e esquecer o resto**: o ESF senta-se ao lado do DTAC (segurança clínica, proteção de dados, interoperabilidade) e, para IA, da autorização regulamentar — ver [avaliação regulamentar de IA](../avaliação-regulamentar-de-ia/).

## Fontes

- NICE Evidence Standards Framework (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
