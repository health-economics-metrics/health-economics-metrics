# Dominância e a Fronteira de Eficiência

Uma opção é **dominada** se outra opção custa menos *e* entrega mais. A **fronteira de eficiência** é o que resta depois de eliminar as opções dominadas: o conjunto de escolhas onde obter mais requer pagar mais.

## Porque é importante

Antes de qualquer debate sobre limiares ou orçamentos, a avaliação de tecnologia de saúde elimina primeiro as opções que ninguém deveria escolher. Traçar todas as opções num plano custo-vs-efeito e desenhar a fronteira é um exercício de cinco minutos que rotineiramente mata metade de uma lista restrita. As comparações incrementais ([ICERs](../rácio-de-custo-efetividade-incremental/)) são então calculadas apenas *ao longo da fronteira*, cada opção face à próxima não-dominada mais barata — nunca face a "não fazer nada" quando existem melhores opções intermédias.

## O cálculo

```
Dominância estrita:   A domina B se Custo_A ≤ Custo_B e Efeito_A ≥ Efeito_B
                    (com pelo menos uma desigualdade estrita)

Dominância estendida: B é excluído se uma mistura de A e C alcança mais efeito
                    por libra — detetado quando os ICERs diminuem à medida que sobe
                    a fronteira. Os ICERs de fronteira válidos têm de ser crescentes.
```

Procedimento: ordene as opções por efeito; remova as estritamente dominadas; calcule os ICERs por pares entre vizinhos; remova qualquer opção cujo ICER exceda o da próxima opção mais efetiva (dominância estendida); repita até os ICERs aumentarem monotonicamente.

## Exemplo resolvido

Quatro opções para reduzir faltas a consultas (efeito = consultas recuperadas/ano):

```
Opção            Custo/ano  Recuperadas
Nada             £0         0
Lembretes SMS    £20.000    2.000
Chamadas telefónicas £120.000   2.200
SMS + triagem IA £90.000    3.500
```

As chamadas telefónicas são **estritamente dominadas** pelo SMS + triagem IA (custa mais, recupera menos). Fronteira: nada → SMS → SMS + IA.

```
ICER(SMS vs nada)      = 20.000 / 2.000  = £10 por consulta recuperada
ICER(SMS+IA vs SMS)    = (90.000 − 20.000) / (3.500 − 2.000) = £46,67 por consulta
```

ICERs crescentes → fronteira válida. A ~£160 poupados por consulta hospitalar recuperada (ver [taxa de faltas](../taxa-de-faltas/)), ambos os passos da fronteira valem a pena; a proposta do banco telefónico nunca deveria chegar ao comité.

## Ligação à engenharia de software

Construa o mesmo gráfico para qualquer decisão de ferramentas: custo por ano num eixo, resultado medido (horas poupadas, incidentes evitados, implantações permitidas) no outro. Os pontos acima e à esquerda da fronteira são eliminados antes de alguém discutir orçamento. Isto reformula a seleção de fornecedores de debates de lista de funcionalidades para "está dominado; a reunião acabou." Também expõe o padrão empresarial comum de comprar a opção mais cara por um ganho marginal — legítimo apenas se o preço incremental por unidade incremental for um que a organização pagaria conscientemente.

## Armadilhas

- **Comparar tudo à linha de base** em vez de à próxima opção na fronteira — isto lisonjeia opções caras ao esconder quase-equivalentes mais baratos.
- **Pontuações de efeito de dimensão única** que escondem o que importa; se dois resultados contam, ou os combine defensavelmente (ver [análise custo-utilidade](../análise-custo-utilidade/)) ou mostre duas fronteiras.
- **Esquecer a incerteza**: as opções próximas da fronteira podem trocar de lugar sob [análise de sensibilidade](../análise-de-sensibilidade/).

## Fontes

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
