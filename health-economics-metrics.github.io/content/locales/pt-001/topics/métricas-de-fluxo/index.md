# Métricas de Fluxo

As métricas de fluxo medem como o trabalho se move através de um sistema de entrega: tempo de ciclo, tempo de espera, rendimento, trabalho em curso (WIP), e eficiência de fluxo. São governadas pela Lei de Little — a mesma matemática de filas que governa as camas de hospital e as listas de espera.

## Porque é importante

A maior parte do tempo de entrega não é trabalho — é espera. Os estudos de eficiência de fluxo do trabalho de conhecimento constatam rotineiramente que os itens estão a ser trabalhados ativamente apenas **5–15%** do seu tempo decorrido; o resto são filas. Isso significa que a aceleração mais barata é a remoção de filas, não a contratação — precisamente o insight que os programas de fluxo de doentes hospitalares descobriram sobre as camas. Para qualquer coisa com um [custo de atraso](../custo-de-atraso/), as métricas de fluxo localizam onde o custo de atraso se acumula.

## O cálculo

```
Tempo de ciclo   = t(terminado) − t(iniciado)
Tempo de espera  = t(entregue) − t(pedido)     (inclui a fila de pré-trabalho)
Rendimento       = itens concluídos / período
WIP              = itens iniciados mas não terminados
Eficiência de fluxo = tempo ativo / (tempo ativo + tempo de espera) × 100

Lei de Little:  WIP médio = rendimento × tempo de ciclo médio
               (equivalentemente: tempo de ciclo = WIP / rendimento)
```

A Lei de Little é a alavanca: a rendimento fixo, cortar o WIP corta o tempo de ciclo proporcionalmente. Também governa os hospitais: `camas ocupadas = admissões/dia × tempo de internamento`.

## Exemplo resolvido

Uma equipa tem 40 itens em curso e completa 10/semana: tempo de ciclo = 40/10 = 4 semanas. Impõem limites de WIP, cortando o WIP para 15: tempo de ciclo = 15/10 = **1,5 semanas** — as mesmas pessoas, o mesmo rendimento, entrega 62% mais rápida, puramente a partir da disciplina de filas.

Avaliado com CoD: se os itens têm em média £3.000/semana de custo de atraso, cada item passa agora 2,5 semanas a menos em fila: 10 itens/semana × 2,5 × 3.000 = **£75.000/semana de custo de atraso eliminado** — de uma mudança de política que não custa nada.

Espelho hospitalar: 40 admissões/dia × 6,0 dias de TI = 240 camas; corte a espera não-clínica dentro do TI para 5,6 dias e 16 camas libertam-se ([tempo de internamento](../tempo-de-internamento/)) — mesma lei, mesma alavanca.

## Ligação à engenharia de software

As métricas de fluxo são a linguagem partilhada entre a engenharia de entrega e as operações de saúde:

- **Referenciais de subfase de PR** (LinearB, ~8M PRs): tempo de recolha de elite < 7h, revisão < 6h, ciclo total < ~26h — o tempo de recolha é fila pura, a primeira coisa a atacar.
- As **[listas de espera](../impacto-na-lista-de-espera/)** são atrasos; o **[RTT](../referenciação-para-tratamento/)** é tempo de espera; a **[ocupação de camas](../dias-de-cama-poupados/)** é WIP. A melhoria transfere-se em ambas as direções: limites de WIP ↔ suavização de admissões; instrumentação de tempo de fila ↔ rastreio de fase de via.
- A eficiência de fluxo abaixo de 15% é normal em ambos os domínios, e ambos a escondem porque as *pessoas* estão ocupadas enquanto o *trabalho* espera — meça o relógio do trabalho, não o dos trabalhadores.

## Armadilhas

- **Culto da utilização**: conduzir a utilização dos trabalhadores para os 100% faz explodir os tempos de fila de forma não linear (M/M/1: espera ∝ ρ/(1−ρ)) — a razão pela qual hospitais 95% ocupados bloqueiam e equipas 95% alocadas param.
- **Médias sobre distribuições assimétricas**: os tempos de ciclo têm cauda pesada; preveja com percentis (p85), não médias.
- **Cortar o WIP rejeitando trabalho a montante** e chamar-lhe melhoria de fluxo — a procura não desapareceu, ficou em fila fora da fronteira de medição (a versão hospitalar: ambulâncias à espera fora do SU).

## Fontes

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
