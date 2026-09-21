# Anos de Vida Ganhos (LYG)

Os anos de vida ganhos são a sobrevivência adicional atribuível a uma intervenção, sem ajuste de qualidade: a área entre as curvas de sobrevivência com e sem ela. O ano de vida ganho de valor igual (evLYG) é uma variante moderna que credita toda a extensão de vida igualmente.

## Porque é importante

O LYG é o resultado de saúde mais bruto: quanto tempo mais as pessoas vivem? Importa quando faltam dados de qualidade, ao comparar face a audiências céticas quanto ao QALY, e em oncologia onde as curvas de sobrevivência são o resultado primário do ensaio. O **evLYG** (usado pelo instituto ICER dos EUA ao lado do custo/QALY) existe por uma razão ética: os QALYs avaliam um ano de vida prolongada pela utilidade do doente, pelo que prolongar a vida de alguém com uma incapacidade "conta menos" — o evLYG avalia cada ano prolongado a uma utilidade fixa, removendo essa discriminação.

## O cálculo

```
LYG = sobrevivência média_novo − sobrevivência média_comparador
    = área entre as curvas de sobrevivência (restrita ao horizonte temporal)

Vista de QALY da extensão de vida:  extensão × utilidade do doente
Vista de evLYG da extensão de vida: extensão × utilidade fixa (o ICER usa ~0,851,
                              a utilidade média da população dos EUA)
```

Ambos são [descontados](../desconto-e-preferência-temporal/) em modelos económicos.

## Exemplo resolvido

Um algoritmo de aviso precoce de sépsis num hospital: a modelação mostra que antibióticos mais precoces previnem 12 mortes/ano; a idade média desses doentes dá 8 anos de vida restantes cada um a utilidade 0,7.

```
LYG   = 12 × 8            = 96 anos de vida/ano
QALYs = 96 × 0,7          = 67,2
evLYG = 96 × 0,851        = 81,7
```

A £20.000 por QALY, o enquadramento QALY avalia a sobrevivência em £1,34M/ano; o enquadramento evLYG em £1,63M. A lacuna é exatamente o julgamento ético sobre se um ano de vida a utilidade 0,7 vale 70% de um "pleno". Os dossiês sérios reportam ambos.

## Ligação à engenharia de software

- A análise de sobrevivência é o kit de ferramentas partilhado: as curvas de Kaplan-Meier para doentes e para *serviços* (tempo-até-à-falha, tempo-até-ao-abandono) são a mesma matemática. "Anos-serviço ganhos" a partir de um investimento em fiabilidade = área entre as curvas de sobrevivência com/sem do sistema — um enquadramento mais honesto do que alegações pontuais de MTTF.
- O evLYG carrega também um aviso de design de métricas para a engenharia: qualquer métrica de produtividade que pondere o resultado por um fator de "qualidade da equipa" subvalorizará sistematicamente as melhorias para equipas limitadas ou em dificuldades — às vezes quer-se a variante de valor igual de propósito.

## Armadilhas

- **Sobrevivência mediana vs média**: os modelos económicos precisam da média (área sob a curva); os ensaios frequentemente destacam a mediana. Diferem muito em distribuições assimétricas.
- **Extrapolação para além do seguimento do ensaio** domina o LYG modelado em doença crónica — declare o modelo de extrapolação e teste-o em [análise de sensibilidade](../análise-de-sensibilidade/).
- **Alegar mortes prevenidas a partir de dados observacionais antes/depois** sem ajustar para a combinação de casos e tendências seculares.

## Fontes

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
