# Abordagem do Capital Humano vs Método do Custo de Fricção

São dois métodos concorrentes para valorizar a produtividade perdida por doença, incapacidade ou morte em estudos de custo da doença e de custo-benefício. A abordagem do capital humano (HCA) valoriza toda a produção perdida durante toda a duração da ausência à taxa salarial; o método do custo de fricção (FCM) valoriza apenas o período mais curto de que o empregador realmente precisa para restabelecer a produção. A escolha entre ambos altera a estimativa dos custos indiretos num fator de dois ou mais.

## Porque é importante

Os custos indiretos (de produtividade) são uma das rubricas mais contestadas da economia da saúde, precisamente porque os dois métodos padrão divergem tanto. O HCA trata cada dia de ausência como um dia de produção que a economia realmente perde, valorizado a salário inteiro durante toda a duração — ou durante o resto da vida ativa em caso de morte ou incapacidade permanente. O FCM sustenta que, numa economia com desemprego e folga no mercado de trabalho, a maior parte das ausências longas não reduz de fato a produção nacional, porque o empregador forma um substituto ou redistribui o trabalho; só o «período de fricção» (o tempo para restabelecer a produção ao nível anterior) é a perda real. O FCM dá, por isso, estimativas de custos indiretos sistematicamente mais baixas e mais conservadoras do que o HCA, e os dois não são notas de rodapé permutáveis: são teorias econômicas diferentes sobre o que significa «produtividade perdida». É também por isso que o [caso de referência do NICE](../avaliação-de-tecnologia-de-saúde/) exclui por omissão os custos de produtividade e, se for o caso, reporta-os como uma análise de sensibilidade separada de perspetiva social, em vez de os misturar no ICER do caso de referência — veja-se a [perspetiva de análise](../perspetiva-de-análise/).

## O cálculo

```
Abordagem do capital humano:
custo_HCA = salário_diário × dias_perdidos

Método do custo de fricção (simplificado, limitado pelo período de fricção):
custo_FCM = salário_diário × min(dias_perdidos, dias_período_de_fricção)

dias_período_de_fricção = estimativa específica de cada país/setor do tempo
                          para restabelecer a produção (historicamente ~85 dias
                          no guia de custos iMTA neerlandês; varia por país e
                          é reavaliada periodicamente)
```

Todo o desacordo entre os dois métodos está no `min()`: o HCA nunca limita `dias_perdidos`, pelo que o custo cresce durante toda a ausência; o FCM limita os dias contados ao período de fricção, por longa que seja a ausência real.

## Exemplo resolvido

Um trabalhador ausenta-se `dias_perdidos = 180` dias, com um `salário_diário = £150`.

**Abordagem do capital humano**:

```
custo_HCA = 150 × 180 = £27,000
```

**Método do custo de fricção**, com `dias_período_de_fricção = 85` (a referência histórica neerlandesa iMTA, segundo a reavaliação periódica do guia):

```
custo_FCM = 150 × min(180, 85) = 150 × 85 = £12,750
```

Os £12.750 do FCM são menos de metade dos £27.000 do HCA para a *mesma* ausência: só a escolha do método altera de forma substancial o argumento do custo da doença, antes de tocar em qualquer outro pressuposto.

## Ligação à engenharia de software

Corresponde diretamente à forma como uma equipe estima o custo da saída de um engenheiro:

- **Cálculo do custo de rotação ao estilo HCA**: valorizar a perda como o salário inteiro do engenheiro que saiu durante todo o tempo em que o posto fica vago. É a versão ingénua da maioria dos modelos de custo de rotação, e sobrestima pela mesma razão por que o HCA sobrestima a produtividade perdida: assume que a capacidade vaga era totalmente produtiva e que nada mais absorveu o vazio. Veja-se a [retenção da força de trabalho](../retenção-da-força-de-trabalho/), que quantifica a cadeia de recrutamento/integração/cobertura da vaga que este método alimenta.
- **Cálculo do custo de rotação ao estilo FCM**: valorizar a perda apenas pelo tempo real que custa encontrar e integrar um substituto — o «período de fricção» da engenharia. É um número mais defensável para um caso de negócio, tal como o FCM é a opção mais conservadora num estudo de custo da doença.
- A disciplina subjacente é a do [custo de oportunidade](../custo-de-oportunidade/): valorizar o recurso deslocado pelo que realmente se perde, e não pelo produto da duração de título e da taxa.

## Armadilhas

- **Misturar HCA e FCM numa mesma análise, ou reportar só um sem revelar a escolha.** Os mesmos dados de ausência podem dar um custo reportado que difere num fator de 2 ou mais conforme o método; a escolha deve ser nomeada, não escondida.
- **Usar o HCA num caso de perspetiva social sem o assinalar como análise de sensibilidade.** O caso de referência do NICE exclui explicitamente os custos de produtividade; uma estimativa HCA de perspetiva social pertence à análise de cenários, não ao ICER principal.
- **Aplicar qualquer dos métodos ao trabalho não remunerado ou fora do mercado (por exemplo, os cuidados) sem ajustar.** Ambos usam a taxa salarial como substituto do valor, o que não se transpõe limpamente para trabalho sem salário de mercado.

## Fontes

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — capítulo sobre custos de produtividade.
- NICE health technology evaluations manual (PMG36) — perspetiva do caso de referência e orientação opcional de perspetiva social. <https://www.nice.org.uk/process/pmg36>
