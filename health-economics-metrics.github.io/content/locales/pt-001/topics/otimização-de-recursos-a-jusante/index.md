# Otimização de Recursos a Jusante

Poupar uma hora a um profissional sénior — um clínico geral, um interno sénior, um especialista — previne frequentemente atrasos de gargalo para uma equipa multidisciplinar inteira de enfermeiros, funcionários administrativos, e terapeutas que estão à espera de aprovações clínicas. O valor de desbloquear o gargalo é o rendimento de todos a jusante dele.

## Porque é importante

Os cuidados de saúde funcionam com cadeias de autorização: as altas esperam pela aprovação do especialista, os planos de tratamento esperam pela revisão da equipa multidisciplinar, os encaminhamentos esperam pela triagem. Quando a função de porta é atrasada, o custo não é a hora de uma pessoa — é tempo ocioso ou bloqueado em todas as funções dependentes, mais tempo do doente em limbo ([dias de cama](../dias-de-cama-poupados/) extra, [esperas de RTT](../referenciação-para-tratamento/) mais longas). Isto é a teoria das restrições aplicada às vias clínicas: uma hora poupada *na restrição* vale o rendimento marginal de todo o sistema; uma hora poupada noutro lugar vale muito menos.

## O cálculo

```
Valor de desbloqueio = Σ sobre funções a jusante (horas bloqueadas libertadas × custo unitário)
                    + ganho de rendimento da via × valor por conclusão de via

Contraste: o valor da mesma hora poupada numa função não-porta ≈ apenas o valor
de capacidade dessa função (ver practitioner-time.md).
```

Identifique a restrição empiricamente: onde é que o trabalho fica em fila mais tempo? A que caixa de entrada os atrasos remontam?

## Exemplo resolvido

As altas de uma enfermaria requerem revisão do especialista todas as manhãs. O especialista passa 90 minutos/dia a reunir informação dispersa por sistemas; as revisões terminam às 14:00, e 6 altas/dia completam-se tarde demais nesse dia — cada uma a custar um dia de cama evitável.

Um painel de resumo de alta (análises, medicação, sinalizadores numa única vista) reduz a reunião de informação para 20 minutos; as revisões terminam às 11:30:

```
Dias de cama evitados = 4 das 6 altas tardias × 365 ≈ 1.460 dias de cama/ano
Desbloqueio a jusante: 2 coordenadores de alta + farmácia + transporte
                       antes ociosos-e-depois-sobrecarregados todas as tardes —
                       ~3 horas-pessoal/dia de tempo bloqueado libertado ≈ 1.100 horas/ano
```

Os próprios 70 minutos do especialista são a *menor* parte do valor — o ponto desta métrica. Avalie os dias de cama por mecanismo (ver [dias de cama poupados](../dias-de-cama-poupados/)) e as horas de pessoal como capacidade.

## Ligação à engenharia de software

Isto é revisão de código, aprovação de arquitetura, e a caixa de entrada do engenheiro principal. Quando cinco engenheiros esperam um dia pela única pessoa que pode aprovar um design, o custo é cinco dias-engenheiro mais um dia de [custo de atraso](../custo-de-atraso/) sobre o próprio trabalho — não uma hora-revisor. Ferramentas que comprimem a tarefa da função de porta (melhor contexto de revisão, verificações automatizadas prévias, painéis que reúnem o que o aprovador precisa) compram rendimento de sistema, não conveniência individual. Meça o tempo de recolha/espera na restrição (ver [métricas de fluxo](../métricas-de-fluxo/)) — é o equivalente de software do precipício de alta das 14:00.

## Armadilhas

- **Otimizar uma não-restrição**: ferramentas maravilhosas para uma função sem fila atrás dela produzem valor de sistema próximo de zero.
- **Migração de restrição**: desbloqueie o especialista e a restrição move-se (para a farmácia, para o transporte) — modele a *próxima* restrição antes de alegar ganhos de rendimento completos.
- **Contar horas a jusante como tesouraria**: a libertação de tempo bloqueado é capacidade, sujeita ao [teste de redistribuição](../poupanças-libertadoras-de-tesouraria-vs-não-libertadoras/) habitual.

## Fontes

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
