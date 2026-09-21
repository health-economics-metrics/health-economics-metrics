# Capacidade Geradora de Valor (Recuperação Operacional)

A capacidade geradora de valor é o "benefício de oportunidade" do tempo libertado: o que o hospital pode agora *alcançar* com as horas que o seu software liberta. Esta é a métrica que mais importa aos Diretores de Operações e Diretores Médicos, porque fala na moeda em que são geridos — atividade, objetivos, e recuperação.

## Porque é importante

O NHS enfrenta atrasos massivos na referenciação para tratamento, e os hospitais que não cumprem os padrões nacionais de tempo de espera enfrentam escrutínio regulamentar e intervenção (ver [referenciação para tratamento](../referenciação-para-tratamento/)). A contratação é lenta e limitada; as instalações são fixas. A única alavanca rápida é obter mais atividade geradora de valor do pessoal e espaço existentes. O software que recupera tempo de especialista não apenas "poupa dinheiro" — *cunha capacidade*: clínicas que não poderiam existir, avaliações que não poderiam ser agendadas, sem contratar ou construir.

## O cálculo

```
Capacidade oculta criada = tempo libertado → unidades de atividade permitidas × valor de esquema

Unidades de atividade: consultas externas, avaliações pré-operatórias, revisões de monitorização
Valor de esquema:      preços da tarifa nacional / NHS Payment Scheme
                (ver national-tariff-and-unit-costs.md)
```

Esta é a avaliação em base de resultado do [tempo do profissional](../tempo-do-profissional/), escalada para uma linha de serviço e expressa nas unidades de atividade em que a equipa de operações já planeia.

## Exemplo resolvido

Enfermeiras especialistas de nível 6 gerem clínicas de avaliação pré-operatória. A automação de documentação recupera 1 hora/dia para cada uma de 25 enfermeiras; cada hora cabe 2 avaliações.

```
Avaliações extra = 25 enfermeiras × 2/dia × 250 dias = 12.500/ano
A ~£120 de valor de esquema por avaliação pré-operatória:
  12.500 × £120 = £1,5M/ano de capacidade de cuidados criada
```

— sem contratar uma única enfermeira ou construir uma única sala. (O modelo amplamente citado que este esboço originalmente referiu colocou a cifra em £766.920/ano para uma coorte menor; o padrão aritmético é o mesmo — o número escala com enfermeiras × sessões × tarifa.) O enquadramento operacional para o Diretor de Operações: a avaliação pré-operatória deixa de ser a restrição nas listas de bloco operatório — as operações canceladas no dia caem, e a utilização do bloco operatório sobe, que é onde a *próxima* linha de benefício começa (ver [otimização de recursos a jusante](../otimização-de-recursos-a-jusante/)).

## Ligação à engenharia de software

A mesma reformulação resgata as alegações de produtividade de programadores da aritmética salarial: tempo de engenharia libertado, expresso como *capacidade entregue que a organização não poderia de outra forma pagar* — funcionalidades, migrações, trabalho de fiabilidade — avaliado pelo que a organização paga por tal capacidade na margem (taxas de contratantes, ou equivalentes de contratação diferida). O enquadramento do Diretor de Operações também ensina algo sobre apresentar trabalho de plataforma: expresse o benefício nas unidades em que a audiência é gerida. Os líderes de operações pensam em atividade e objetivos, não em horas abstratas; os líderes de engenharia pensam em itens de roteiro e número de pessoal, não em minutos poupados.

## Armadilhas

- **Alegações de capacidade sem procura**: 12.500 vagas de avaliação extra só importam se o pipeline cirúrgico as preenche — verifique a restrição a jusante.
- **Valor de tarifa sem um mecanismo de pagamento**: sob pagamento misto, a atividade extra pode não trazer receita extra; o valor pode ser antes a redução de lista de espera (ver [impacto na lista de espera](../impacto-na-lista-de-espera/)).
- **Apresentar capacidade como tesouraria** — este é o benefício emblemático não libertador de tesouraria; rotule-o (ver [libertador de tesouraria vs não libertador](../poupanças-libertadoras-de-tesouraria-vs-não-libertadoras/)).

## Fontes

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
