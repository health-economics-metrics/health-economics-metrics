# WSJF e CD3

O CD3 (Custo de Atraso Dividido pela Duração) e o WSJF (Weighted Shortest Job First) são regras de priorização que agendam trabalho pela **densidade de valor**: quanto custo de atraso é removido por unidade de capacidade escassa consumida. Sob uma capacidade partilhada e fixa, o CD3-mais-alto-primeiro é a sequência matematicamente ótima para minimizar o custo total de atraso.

## Porque é importante

Todo o atraso é um problema de racionamento: muitos itens dignos, um pipeline. A economia da saúde resolveu o mesmo problema para orçamentos de saúde com tabelas de liga de custo-efetividade — classificar intervenções por saúde ganha por libra, financiar a lista abaixo até o orçamento se esgotar. O CD3 é a lógica idêntica para a capacidade de entrega: benefício por unidade do *recurso restrito*, financiado por ordem de classificação. Acertar a sequenciação é dinheiro grátis — o mesmo trabalho, a mesma capacidade, menos custo total de atraso.

## O cálculo

```
CD3  = Custo de Atraso (£/semana) / Duração (semanas)      — unidades reais (Black Swan Farming)

WSJF = (valor utilizador-negócio + criticidade temporal + redução de risco/
        possibilitação de oportunidade) / tamanho do trabalho    — proxy de escala relativa
                                                        do SAFe, pontuações de Fibonacci modificado
```

O CD3 com moeda genuína ([custo de atraso](../custo-de-atraso/)) é estritamente mais forte do que os pontos sem unidade do WSJF — o WSJF está para o CD3 como a pontuação multicritério está para a [análise custo-utilidade](../análise-custo-utilidade/) completa: utilizável quando a monetização é impraticável, manipulável quando as pontuações não têm âncora.

## Exemplo resolvido

Três funcionalidades, uma equipa:

```
Funcionalidade  CoD (£/sem)   Duração    CD3
A               30.000        10 sem     3.000
B               12.000        2 sem      6.000
C               5.000         1 sem      5.000
```

Ordem CD3: B, C, A. Compare o custo total de atraso face a "maior CoD primeiro" (A, B, C):

```
Ordem CD3  (B,C,A): A espera 3 sem, C espera 2 → 30mil×3 + 5mil×2  = £100mil de custo de atraso
Ordem CoD  (A,B,C): B espera 10, C espera 12   → 12mil×10 + 5mil×12 = £180mil
```

Mesmas funcionalidades, mesma equipa — a sequenciação sozinha poupa £80.000. A intuição: os itens pequenos e urgentes vão primeiro porque libertam o seu custo de atraso barato; o item grande perde pouco ao esperar brevemente.

## Ligação à engenharia de software

Para portefólios de software de saúde, expresse o CoD nas unidades que este repositório ensina: QALYs/semana × limiar + £/semana operacional, e o atraso torna-se diretamente comensurável com o resto que o sistema de saúde compra. Duas notas práticas: (1) duração significa *tempo de calendário a ocupar a restrição*, não esforço — um item de 2 semanas decorridas que precisa de 2 dias da equipa de gargalo é mais barato do que parece (ver [otimização de recursos a jusante](../otimização-de-recursos-a-jusante/)); (2) os hospitais executam a mesma regra implicitamente quando ordenam listas de bloco operatório por rendimento ponderado pela urgência — as categorias de priorização clínica são CD3 ponderado por severidade (ver [défice de QALY e modificadores de severidade](../défice-de-qaly-e-modificadores-de-severidade/)).

## Armadilhas

- **Teatro de pontuação WSJF**: os debates de Fibonacci sem unidades convergem para quem argumenta mais alto; ancore pelo menos os itens do topo do atraso em CoD real.
- **Manipulação de duração**: dividir itens para inflacionar a classificação CD3 — bem quando as divisões entregam valor independentemente, fraude quando não entregam.
- **Ignorar perfis de urgência**: o CoD em forma de prazo (datas regulamentares) quebra a suposição de taxa constante; agende esses por viabilidade de data, depois CD3 o resto.
- **Hesitação de reclassificação**: o CD3 é para decisões de sequenciação no momento do compromisso, não para reorganização diária do trabalho em curso (ver [métricas de fluxo](../métricas-de-fluxo/) sobre WIP).

## Fontes

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
