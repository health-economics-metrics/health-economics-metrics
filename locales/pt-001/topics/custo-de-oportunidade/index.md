# Custo de Oportunidade

O custo de oportunidade é o valor da melhor alternativa a que se renuncia ao comprometer um recurso. Num sistema de saúde com um orçamento fixo, gastar £1 milhão numa coisa significa £1 milhão de saúde *não* produzida noutro lugar.

## Porque é importante

O custo de oportunidade é a ideia mais profunda na economia da saúde, e a que os engenheiros de software mais frequentemente ignoram. Os orçamentos de saúde são fixos em qualquer ano dado, pelo que uma nova tecnologia nunca é financiada com dinheiro "extra" — desloca algo. A pergunta que um pagador realmente faz não é "isto é bom?" mas "isto é melhor do que o que o mesmo dinheiro compra atualmente?"

É por isto que os limiares de custo-efetividade existem: o limiar é uma estimativa da saúde que o dinheiro compra na margem do sistema atual. Ver [limiares de disposição para pagar](../limiares-de-disposição-para-pagar/).

## O cálculo

Não há uma fórmula única; o custo de oportunidade é uma disciplina de comparação:

```
Custo de oportunidade de escolher A = valor da melhor alternativa B a que se renuncia
Ganho líquido de A = valor(A) − valor(B)
```

O referencial empírico: Claxton et al. (2015) estimaram que o NHS produz um QALY por aproximadamente **£13.000** na margem. Assim, £13.000 gastos numa tecnologia que produz menos de um QALY torna a nação *menos* saudável, mesmo que a tecnologia "funcione".

## Exemplo resolvido

O orçamento de transformação de um hospital do NHS pode financiar exatamente um de:

- **Opção A**: software de escalonamento eletrónico — poupa £400.000/ano em gasto de pessoal de agência.
- **Opção B**: software de coordenação de alta — poupa 2.000 dias de cama/ano. A um custo marginal de cerca de £150 por dia de cama realmente libertado, isso é £300.000/ano, mais tratamento mais precoce para doentes em espera.

Financiar A significa renunciar a B. O custo de oportunidade de A é os £300.000 de B mais o benefício ao doente; o caso *líquido* para A é apenas a diferença, não o título de £400.000 de A. Qualquer caso de negócio que compare uma proposta face a "não fazer nada" em vez da melhor alternativa sobrestima o seu valor.

## Ligação à engenharia de software

A capacidade de engenharia também é um orçamento fixo — vagas de roteiro, não libras. Uma equipa de plataforma que financia a ferramenta A a poupar horas-engenheiro a £500/hora quando a ferramenta B entrega o mesmo a £200/hora está a destruir capacidade, exatamente como um sistema de saúde que financia um medicamento a £40.000/QALY desloca cuidados a £13.000/QALY. A disciplina transfere-se diretamente:

- Nomeie sempre o comparador ("versus o quê?").
- Avalie o tempo de engenheiro pelo que de outra forma produziria, não apenas pelo salário.
- Trate "temos orçamento sobrante" como o início da análise, não o fim.

## Armadilhas

- **Comparar face a nada.** O comparador correto é o próximo melhor uso do dinheiro, que raramente é "não fazer nada".
- **Assumir que o tempo poupado tem custo de oportunidade zero.** O tempo poupado só é valioso se redistribuído para algo valioso — ver [poupanças libertadoras de tesouraria vs não libertadoras](../poupanças-libertadoras-de-tesouraria-vs-não-libertadoras/).
- **Ignorar o deslocamento.** "O orçamento vai expandir-se para caber" quase nunca é verdade num sistema de saúde nacional dentro do ano.

## Fontes

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/opportunity-cost/>
