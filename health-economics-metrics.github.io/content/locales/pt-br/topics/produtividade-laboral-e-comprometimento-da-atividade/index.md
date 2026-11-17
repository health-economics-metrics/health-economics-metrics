# Produtividade Laboral e Comprometimento da Atividade (WPAI)

O WPAI é um questionário autodeclarado validado (Reilly, Zbrozek, Dasbach, 1993) que mede em que medida um problema de saúde afeta o trabalho remunerado e as atividades diárias, normalmente nos últimos 7 dias. Divide a perda em *absentismo* (absenteeism) — tempo de trabalho perdido em sentido literal — e *presentismo* (presenteeism) — produtividade reduzida enquanto se está fisicamente no trabalho —, sendo este último normalmente o componente de custo maior e mais oculto.

## Porque é importante

Uma simples contagem de dias de baixa só vê o absentismo. Um médico ou trabalhador do conhecimento que nunca falta mas trabalha a 60 % da sua capacidade por causa de uma doença crônica não acrescenta nada ao registo de ausências e, ainda assim, gera uma perda de produtividade grande e real; o WPAI foi concebido precisamente para tornar visível esse custo invisível. Por ser um instrumento validado e não um inquérito ad hoc, as suas pontuações podem usar-se nos pacotes de evidência de [resultados relatados pelo paciente](../resultados-relatados-pelo-paciente/) e nos estudos de custo da doença sem que o avaliador tenha de revalidar a medida. Como instrumento autodeclarado, é ele próprio uma forma de PROM, que se distingue sobretudo por se centrar no trabalho e na atividade em vez dos sintomas ou da qualidade de vida.

## O cálculo

```
Absentismo % = horas_perdidas_por_saúde / (horas_perdidas_por_saúde + horas_trabalhadas) × 100

Presentismo % = comprometimento autodeclarado 0–10 durante o trabalho × 10
                  (retirado diretamente do questionário, não derivado aqui)

Comprometimento laboral total % =
    Absentismo% + (1 − Absentismo%/100) × Presentismo%
    (combina as duas partes para que a soma nunca ultrapasse 100 %)

custo_de_produtividade = Comprometimento_laboral_total% / 100 × rendimento_do_período
```

A fórmula do comprometimento total não é, deliberadamente, uma soma simples: somar diretamente as duas percentagens poderia ultrapassar 100 %, pelo que o presentismo se aplica apenas à fração *restante* (não ausente) do tempo de trabalho.

## Exemplo resolvido

Um trabalhador com enxaqueca tem um horário de 40 horas semanais mas falta a 4 delas:

```
horas_perdidas = 4, horas_trabalhadas = 36
Absentismo% = 4 / (4 + 36) × 100 = 10 %
```

Avalia em separado, no questionário WPAI, o impacto na produtividade enquanto trabalha com 3 em 10, ou seja, `Presentismo% = 30 %` (este passo é a resposta em bruto do questionário, não derivada dos restantes valores):

```
Comprometimento_laboral_total% = 10 + (1 − 10/100) × 30
                               = 10 + 0.9 × 30
                               = 10 + 27
                               = 37 %
```

Numa semana de trabalho de 5 dias com um rendimento de £800 (£160/dia):

```
custo_de_produtividade = 37/100 × 800 = £296
```

Note-se que uma contagem ingénua de dias de baixa teria registado apenas as 4 horas perdidas (10 %); o componente de presentismo quase triplica o comprometimento real quando é tido em conta.

## Ligação à engenharia de software

Corresponde diretamente às métricas de saúde de uma equipe de engenharia:

- **O absentismo** são as baixas por doença e as férias pagas: a parte visível, já acompanhada e fácil.
- **O presentismo** é o engenheiro esgotado ou exausto pelas mudanças de contexto que está em todos os stand-ups mas rende a capacidade reduzida: normalmente o custo maior e mais oculto, invisível nos dados de efetivos ou de assiduidade. Aparece, em vez disso, como menor débito em [DORA](../métricas-dora/) e nas [métricas de fluxo](../métricas-de-fluxo/), ou como resolução mais lenta dessa mesma [dívida técnica](../dívida-técnica/) cujos «juros» agravam o comprometimento.
- A lição de engenharia é a mesma que a clínica: medir apenas o absentismo e chamar-lhe «perda de produtividade» subavalia de forma sistemática o custo real, porque deixa escapar todos os que estão presentes mas diminuídos.

## Armadilhas

- **Viés de memória no autorrelato.** A janela de memória de 7 dias está sujeita às mesmas distorções de reporte que qualquer autoavaliação retrospetiva.
- **Tratar a escala 0–10 como uma medição física real.** É uma escala ordinal derivada de uma autoavaliação, não uma grandeza física validada; tratar as diferenças sobre ela como estritamente lineares ou de intervalo é uma comodidade de modelação, não um fato físico validado.
- **Agregar pontuações entre variantes do WPAI.** O WPAI tem várias versões específicas por situação (WPAI:GH, de saúde geral; WPAI:SHP, de um problema de saúde específico, e variantes específicas de doença), e não se devem agregar nem comparar pontuações de variantes diferentes sem verificar primeiro que são a mesma versão do instrumento.

## Fontes

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- Documentação do instrumento WPAI, Reilly Associates — a referência oficial de pontuação. <https://www.reillyassociates.net/>
