# Economia Unitária de Inferência

A economia unitária de inferência precifica as funcionalidades de IA pela sua computação marginal: **custo por token**, acumulado até custo por transação, por utilizador, por episódio clínico. A dinâmica definidora: os preços de LLM caíram aproximadamente **uma ordem de magnitude a cada 1–2 anos** a capacidade constante — uma taxa de deflação sem precedentes no custeio de tecnologia de saúde.

## Porque é importante

Duas consequências decorrem do colapso de preços. Comercialmente, uma funcionalidade de IA que é marginal hoje pode ser trivialmente lucrativa dentro de 18 meses — e um concorrente precificado nos custos de hoje será subcotado. Para a avaliação económica, qualquer modelo de custo-efetividade para um serviço clínico habilitado para IA que congele os preços de inferência de 2024 **sobrestima materialmente o custo contínuo** — a análise precisa de cenários de declínio de preços da mesma forma que os modelos de medicamentos lidam com a expiração de patentes e a entrada de genéricos. (Pontos de referência da investigação: tokens de saída de ponta ~$15–75/M em meados de 2026, modelos de nível médio uma ordem mais baratos, capacidade nível GPT-4 caiu de ~$20/M em 2022 para ~$0,40/M; a Epoch AI mediu declínios de 9×–900×/ano dependendo do marco de capacidade.)

## O cálculo

```
Custo por chamada     = tokens de entrada × taxa de entrada + tokens de saída × taxa de saída
Custo por unidade     = Σ chamadas por unidade de resultado de negócio (por episódio de
                    triagem, por carta redigida, por resumo de consulta)

Realidade mista        = chamada base + repetições + contexto RAG (intensivo em entrada)
                    + chamadas de avaliação/guarda-corpos (frequentemente 20–50% de sobrecarga)

Cenário de declínio de preço para modelos plurianuais:
  custo_t = custo_0 × d^t, teste d ∈ {0,3, 0,5, 0,7}/ano na análise de sensibilidade
```

## Exemplo resolvido

Um serviço de resumo de alta com IA: o resumo médio usa 12.000 tokens de entrada (contexto do registo) + 1.200 de saída, mais uma passagem de verificação (6.000 entrada / 300 saída). A $3/M entrada, $15/M saída:

```
Rascunho: 12.000 × 3/1M + 1.200 × 15/1M  = $0,036 + $0,018 = $0,054
Verificação: 6.000 × 3/1M +   300 × 15/1M  = $0,018 + $0,0045 ≈ $0,023
Por resumo ≈ $0,077 → por 100.000 resumos/ano ≈ $7.700

Face a ~20 minutos-clínico poupados por resumo (≈ £25), a inferência é
0,25% do valor criado — a economia é dominada por tudo
EXCETO os tokens: integração, avaliação, governação, adoção.
```

Essa conclusão — o custo de inferência raramente é a restrição vinculativa, aos preços atuais, para tarefas clínicas de alto valor — é em si a descoberta que vale a pena levar para as reuniões de preços.

## Ligação à engenharia de software

Isto é [economia unitária da nuvem](../economia-unitária-da-nuvem/) especializada para IA, com três notas de prática: **meça por unidade de negócio**, não por chamada API, para que o número se encaixe diretamente nos modelos [ICER](../rácio-de-custo-efetividade-incremental/)/[impacto orçamental](../análise-de-impacto-orçamental/); **observe a assimetria entrada/saída** (a saída custa tipicamente ~4× o preço da entrada; as arquiteturas RAG são intensivas em entrada — as escolhas de arquitetura são escolhas de preço); e **encaminhe por nível de tarefa** — fazer corresponder a capacidade do modelo à dificuldade da tarefa (modelos baratos para classificação, de ponta para síntese) reduz rotineiramente o custo misto 5–10× à mesma qualidade, a versão de software de usar a intervenção eficaz mais barata ([minimização de custos](../análise-de-minimização-de-custos/), equivalência comprovada).

## Armadilhas

- **Modelos plurianuais de preço congelado** — sobrestima o custo; mas também **modelos de receita de deflação assumida** — uma guerra de preços não é um contrato; faça cenários de ambos.
- **Ignorar a sobrecarga de avaliação**: guarda-corpos, juízes, e repetições são tokens reais, frequentemente a maioria em contextos regulados.
- **Miopia por token**: a latência, os limites de taxa, e as restrições de janela de contexto carregam custos que nenhum preço por token capta.

## Fontes

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
