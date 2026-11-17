# Número Necessário para Rastrear (NNS)

O NNS é o número de pessoas que é preciso rastrear (e não apenas tratar) para evitar **um** resultado adverso durante um seguimento definido, dado o risco de base da população e a redução relativa do risco que a deteção e o tratamento precoces alcançam. É o análogo, ao nível do programa de rastreio, do NNT: o NNT pergunta a quantos é preciso *tratar* para evitar um resultado; o NNS pergunta quantas pessoas têm de percorrer todo o caminho de *rastreio e depois tratamento* para lá chegar.

## Porque é importante

Rembold introduziu o NNS em 1998 precisamente para que os programas de rastreio pudessem ser comparados em pé de igualdade com o tratamento, porque o valor de redução relativa do risco de um teste de rastreio esconde duas coisas que o tratamento não esconde: o risco de base da população realmente convidada para rastreio, e o fato de toda a pessoa rastreada suportar o custo do teste e o peso dos falsos positivos, e não apenas a minoria que mais tarde beneficia. O critério de custo-efetividade do Comité Nacional de Rastreio do Reino Unido (veja-se a [economia do rastreio](../economia-do-rastreio/)) assenta nesta mesma distinção: um programa de rastreio com uma redução relativa do risco impressionante numa população de baixo risco de base pode ter ainda assim um NNS de milhares, e então o custo do programa por resultado evitado passa a ser a verdadeira questão.

## O cálculo

```
NNS = 1 / (risco_de_base × redução_relativa_do_risco)

risco_de_base                = probabilidade do resultado na população rastreada
                               durante o seguimento (0–1)
redução_relativa_do_risco    = redução proporcional do risco alcançada pelo
                               tratamento precoce que o rastreio possibilita (0–1)

custo_do_programa_por_resultado_evitado = NNS × custo_por_rastreio
```

Compare-se diretamente com o [NNT](../número-necessário-para-tratar/): o NNS dobra a eficácia de todo o funil rastreio → diagnóstico → tratamento num único número, ao passo que o NNT pressupõe que o paciente já está diagnosticado e iniciou o tratamento.

## Exemplo resolvido

A população-alvo de um programa de rastreio tem um risco de base do evento de 2 % durante o período de estudo (`risco_de_base = 0,02`) e a deteção precoce alcança uma redução relativa do risco de 25 % (`redução_relativa_do_risco = 0,25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

É preciso rastrear 200 pessoas para evitar um resultado.

A £50 por rastreio:
Custo do programa por resultado evitado = 200 × £50 = £10,000
```

Estes £10.000 devem ser confrontados com o custo do próprio resultado e com os QALY que teria custado — a mesma comparação que a [economia da prevenção](../economia-da-prevenção/) faz para os programas de prevenção em geral.

## Ligação à engenharia de software

O NNS é «quantos usuários, eventos ou pedidos têm de passar por um fluxo de deteção ou triagem para apanhar um verdadeiro positivo acionável» — diretamente relevante para os sistemas de monitorização e triagem baseados em alertas, em que uma condição-alvo de baixa prevalência infla o NNS da mesma forma que faz colapsar o valor preditivo positivo (veja-se a [economia do rastreio](../economia-do-rastreio/) e a [avaliação de IA clínica](../avaliação-de-ia-clínica/)). Uma regra de monitorização que tenha de processar 200 eventos por cada captura real só vale a pena executar se essa captura valer pelo menos 200 vezes o custo de triagem por evento — a mesma aritmética do exemplo de saúde acima.

## Armadilhas

- **Ignorar a dependência do risco de base**: o mesmo teste ou programa de rastreio tem um NNS — e uma custo-efetividade — muito diferente em populações de risco alto e baixo. Nunca apresente um NNS sem nomear a população para a qual foi calculado.
- **Ler mal o denominador**: o NNS conta as pessoas *rastreadas*, não as que dão positivo ou iniciam tratamento; já incorpora a eficácia de todo o funil, pelo que nunca deve ser comparado com uma medida que conte apenas os positivos.
- **Comparar entre períodos de seguimento**: um seguimento mais curto costuma inflar o NNS porque se observam menos eventos nessa janela. Os valores de NNS só são comparáveis quando calculados para a mesma duração de seguimento.

## Fontes

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
