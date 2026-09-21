# Perspetiva de Análise

A perspetiva define *cujos* custos e benefícios contam numa análise económica: os do pagador, os do prestador, ou os da sociedade como um todo. A mesma intervenção pode parecer brilhante de uma perspetiva e terrível de outra.

## Porque é importante

Toda a avaliação económica tem de declarar a sua perspetiva antecipadamente, porque a perspetiva determina que linhas existem:

- **Perspetiva do pagador** (ex.: contratante do NHS, seguradora): apenas custos que o pagador reembolsa.
- **Perspetiva do prestador** (ex.: um hospital): custos internos de prestação, pessoal, instalações.
- **Perspetiva societal**: tudo — incluindo tempo do doente, deslocações, cuidados informais por familiares, e perdas de produtividade para empregadores.

O caso de referência do NICE utiliza a perspetiva **NHS e Serviços Sociais Pessoais (PSS)** para custos. O Segundo Painel de Custo-Efetividade dos EUA recomenda reportar tanto uma análise do setor de saúde como uma societal, com um "inventário de impacto" a listar o que está incluído.

## O cálculo

Sem fórmula — uma regra de delimitação aplicada antes de qualquer cálculo:

```
Categorias de custo/benefício incluídas = f(perspetiva)
```

Uma verificação útil: construa uma tabela de inventário de impacto com uma linha por custo/benefício e uma coluna por perspetiva, e marque quais células contam.

## Exemplo resolvido

Uma aplicação de verificação de sintomas desvia 10.000 consultas de clínico geral por ano para autocuidado.

- **Pagador (NHS)**: poupa 10.000 × £42 por consulta de clínico geral = **£420.000/ano** — fortemente positivo.
- **Prestador (consultório de clínico geral)**: se os consultórios são pagos por capitação, o seu rendimento mantém-se mas a carga de trabalho cai — ligeiramente positivo.
- **Societal**: acrescente o tempo de deslocação e espera poupado pelos doentes, digamos 10.000 × 2 horas × £15/hora = £300.000 de valor de tempo; mas subtraia o dano se 2% forem falsamente tranquilizados e se apresentarem mais tarde, mais doentes, a 200 × £3.000 = £600.000 de tratamento extra. Líquido societal: 420.000 + 300.000 − 600.000 = **£120.000/ano** — positivo, mas dominado pela suposição de segurança.

Mesma aplicação, três respostas diferentes. A declaração da perspetiva é o que torna os números comparáveis e honestos.

## Ligação à engenharia de software

O ROI de ferramentas e plataformas também tem perspetivas:

- **Orçamento da equipa ("pagador")**: a taxa de licença cabe no meu centro de custo?
- **Organização da plataforma ("prestador")**: custo total incluindo integração, suporte e manutenção.
- **Empresa ("societal")**: incluir o impacto no cliente, externalidades de segurança e o tempo de todas as equipas afetadas.

Uma ferramenta de CI que é barata para a equipa compradora mas empurra trabalho de migração para 40 outras equipas é a versão de software da transferência de custos — visível apenas a partir da perspetiva mais ampla. Declare a perspetiva em cada caso de negócio; os revisores não conseguem contestar suposições que não conseguem ver.

## Armadilhas

- **Mudança silenciosa de perspetiva**: contar benefícios societais mas apenas custos do pagador faz qualquer coisa parecer custo-efetiva.
- **Dupla contagem** quando as perspetivas são misturadas (ex.: contar uma consulta de clínico geral poupada tanto como poupança do pagador como poupança de tempo do doente quando o valor do pagador já inclui o tempo de pessoal).
- **Ignorar a transferência de custos**: "poupanças" que apenas movem custo para doentes, cuidadores ou outro departamento.

## Fontes

- Sanders GD, et al. "Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine." JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
