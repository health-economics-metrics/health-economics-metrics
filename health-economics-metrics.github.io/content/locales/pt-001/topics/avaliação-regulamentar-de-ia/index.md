# Avaliação Regulamentar de IA

Os quadros regulamentares que regem a IA nos cuidados de saúde — o regime Software as a Medical Device (SaMD) da FDA com **Planos de Controlo de Alteração Predeterminados (PCCP)**, e programas de avaliação no mundo real como o NHS AI in Health and Care Award — e o que custam e permitem economicamente.

## Porque é importante

A regulação determina tanto o **custo de evidência da entrada no mercado** como o **custo de cada atualização subsequente do modelo** — para produtos de IA, o segundo é frequentemente mais importante. O modo tradicional da FDA (bloquear o modelo; reautorizar para alterações) tornava a melhoria contínua economicamente brutal. A **orientação PCCP (finalizada em dezembro de 2024)** mudou a economia: um fabricante pode pré-autorizar atualizações futuras *especificadas* do modelo — uma descrição das modificações planeadas, um protocolo de modificação (como cada uma será validada), e uma avaliação de impacto — para que as melhorias sancionadas sejam lançadas sem nova submissão. Mais de 1.000 dispositivos habilitados para IA têm autorização da FDA; a FDA agora também investiga a monitorização de desempenho no mundo real (métricas pré-especificadas: taxas basais de FP/FN, deriva de calibração, indicadores de mudança de domínio).

## O cálculo

O PCCP é a economia de [tempo de espera DORA](../métricas-dora/) aplicada a modelos regulados:

```
Custo por atualização de modelo (tradicional) = custo de resubmissão + atraso de revisão × CoD
Custo por atualização de modelo (âmbito PCCP) = apenas custo de execução do protocolo

Economia de atualização ao longo da vida do produto:
  N atualizações × (custo de submissão + meses de revisão × custo de atraso por mês)
  vs custo único de elaboração do PCCP + N × execuções de protocolo
```

Para o padrão do NHS AI Award, o conjunto de métricas é mais amplo do que a precisão: avaliações independentes no mundo real avaliam o desempenho clínico, os efeitos no fluxo de trabalho/implementação, e o impacto económico — o pipeline completo [eficácia → efetividade → custo-efetividade](../produtividade-dos-programadores-com-ia/) institucionalizado.

## Exemplo resolvido

Um fornecedor de IA de radiologia planeia melhorias trimestrais do modelo ao longo de 3 anos (12 atualizações):

```
Tradicional: 12 × (£80mil de submissão + 4 meses × £50mil/mês de CoD de benefício atrasado)
           = 12 × £280mil = £3,36M
Via PCCP:    £250mil de elaboração do PCCP + 12 × £30mil de execução do protocolo = £610mil
Poupança ≈ £2,75M — e os doentes recebem cada melhoria ~4 meses mais cedo:
12 × 4 meses × o benefício clínico da atualização, uma linha de QALY por direito próprio.
```

O PCCP é o reconhecimento regulamentar de que **a frequência de implantação tem valor clínico** — a cadeia causal mestre do repositório, endossada por um regulador.

## Ligação à engenharia de software

Elaborar bem o PCCP é um problema de software: conjuntos de avaliação pré-especificados, conjuntos de dados versionados, pipelines de validação automatizados, monitorização de deriva — o primo regulado da implementação contínua, onde a "porta de implantação" é um protocolo validado em vez de uma revisão de código. Equipas com infraestrutura de avaliação madura ([métricas de qualidade da IA](../métricas-de-qualidade-da-ia/)) obtêm PCCPs a baixo custo; equipas sem ela descobrem que a restrição regulamentar é na verdade uma restrição de maturidade de engenharia. Para produtos que entram no NHS, a pilha paralela é o DTAC (segurança clínica, proteção de dados, interoperabilidade) mais os níveis de evidência [NICE ESF](../quadro-de-padrões-de-evidência-do-nice/) — orce todos eles como [TCO](../custo-total-de-propriedade/) de entrada no mercado.

## Armadilhas

- **Sonhos de expansão de âmbito do PCCP**: apenas os tipos de modificação *especificados* estão pré-autorizados; alterações de arquitetura ou novos usos pretendidos ainda precisam de revisão completa.
- **Deriva no mundo real não monitorizada**: autorização no desempenho de lançamento + deriva populacional silenciosa = um produto a funcionar fora do seu envelope autorizado; a monitorização é tanto uma expetativa regulamentar como autodefesa.
- **Confundir autorização com valor**: a autorização FDA/UKCA ≠ alguém vai pagar — essa é a barreira do [HTA](../avaliação-de-tecnologia-de-saúde/), gerida separadamente.

## Fontes

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
