# Ativação e Adesão

A taxa de ativação é a proporção de inscritos que alcançam o primeiro valor significativo (a ação "aha" — primeira leitura registada, primeira lição concluída). A adesão é a versão populacional: a proporção da população *elegível* que adota em algum grau. Juntas, são as portas de entrada do funil de valor: aquisição → adesão → ativação → [retenção](../retenção-e-abandono/) → resultado.

## Porque é importante

Utilizadores não ativados são custo puro: gasto de aquisição, provisionamento, superfície de suporte — zero valor clínico. Os padrões de referência colocam a ativação do software de saúde *abaixo* da média intersectorial (≈24% vs ≈37% para ativação de novos utilizadores num conjunto de referência SaaS; conclusão de checklist de integração ~20%), refletindo uma integração mais pesada (identidade, consentimento, segurança clínica). A adesão carrega o peso populacional: na [estrutura RE-AIM](../alcance-e-equidade/), o impacto na saúde pública ≈ alcance × eficácia — uma aplicação excelente adotada por 3% da população elegível move o indicador populacional apenas 3%. Para terapêuticas digitais prescritas, a barreira de adesão é visível em dados nacionais: **~81% das prescrições alemãs de DiGA são ativadas** — um em cada cinco tratamentos prescritos e pagos nunca é iniciado (ver [via rápida DiGA](../via-rápida-diga-da-alemanha/)).

## O cálculo

```
Taxa de ativação = utilizadores que completam a ação-chave dentro do prazo / inscrições × 100
Taxa de adesão    = adotantes / população elegível × 100
Taxa de preenchimento DTx = códigos de prescrição ativados / prescrições emitidas × 100

Modelo de valor do funil:
  elegível × adesão × ativação × benefício ponderado por retenção = valor populacional
  — quatro multiplicações; melhorar o menor fator normalmente
  domina (teoria das restrições aplicada a funis)
```

## Exemplo resolvido

Um contratante oferece uma aplicação de prevenção de diabetes a 80.000 residentes elegíveis:

```
Convidados → registados:  80.000 → 12.000  (adesão 15%)
Registados → ativados (primeira sessão + objetivo definido, 7 dias): 12.000 → 5.400 (45%)
Ativados → completaram programa de 6 meses: 5.400 → 1.600 (30%)

Efeito do programa (ensaio, concluintes): 0,03 QALY + £180 de custos evitados
Valor populacional = 1.600 × (0,03 × £20.000 + £180) ≈ £1,25M
Valor por pessoa elegível = £15,6 — versus £780 se todas as pessoas
elegíveis completassem.

Onde investir? Duplicar a adesão (15→30%) duplica o valor; aumentar
a ativação de 45→65% acrescenta ~44%; ambos superam continuar a
polir o conteúdo do programa que as 1.600 já completam.
```

## Ligação à engenharia de software

A ativação é a fase mais tratável do funil do ponto de vista de engenharia: a fricção de verificação de identidade, os fluxos de consentimento, o design do estado vazio e o tempo até ao primeiro valor são código, não política (o tempo médio até ao valor em saúde ≈ 1 dia e 7 horas em dados de referência — cada hora dele é exposição ao abandono). A adesão é um problema de sistemas de distribuição: integração em vias de referenciação (o momento da prescrição), convites endossados pelo médico de família (transferência de confiança) e acessibilidade (língua, competências digitais — ver [alcance e equidade](../alcance-e-equidade/)). O modelo de valor do funil acima é o gerador do caso de negócio para ambos: multiplique os fatores, encontre a restrição, avalie a correção face ao valor populacional que liberta.

## Armadilhas

- **Ativação definida por conveniência** (email verificado) em vez de significado clínico (primeira ação terapêutica) — infla a métrica, quebra a cadeia de valor.
- **Jogos com o denominador de adesão**: "de quem visitou o site" vs a população verdadeiramente elegível — os contratantes importam-se com a segunda.
- **Efeitos de seleção**: os utilizadores fáceis de ativar são os menos doentes e menos desfavorecidos; melhorias no funil podem alargar as lacunas de equidade enquanto melhoram as médias.

## Fontes

- Activation benchmarks (healthcare SaaS). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- DiGA activation data, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- RE-AIM framework. <https://re-aim.org/>
