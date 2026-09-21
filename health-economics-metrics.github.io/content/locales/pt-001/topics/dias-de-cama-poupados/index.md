# Dias de Cama Poupados

Um dia de cama é um doente a ocupar uma cama de hospital durante um dia. "Dias de cama poupados" — através de alta mais precoce, evitação de internamento, ou enfermarias virtuais — é o benefício cavalo de batalha dos casos de negócio digitais do NHS, e o mais comummente sobrevalorizado.

## Porque é importante

As camas são a restrição vinculativa dos cuidados agudos: quando as camas enchem, a cirurgia eletiva é cancelada, as ambulâncias fazem fila, e o serviço de urgência acumula. As intervenções que libertam dias de cama carregam, portanto, valor real — mas o *tipo* de valor depende inteiramente do que acontece à cama libertada. Os diretores financeiros aprenderam a descontar fortemente as alegações ingénuas de dias de cama; acertar nesta aritmética é um teste de credibilidade.

## O cálculo

```
Dias de cama poupados = doentes afetados × Δ tempo de internamento (ou internamentos evitados × TI médio)

O valor depende do uso da capacidade libertada:
  reabastecida com atividade eletiva → valor = rendimento de atividade ou benefício de lista de espera
  enfermaria fechada / reduzida      → valor = pessoal + custo de funcionamento libertado (tesouraria)
  absorvida como folga               → valor ≈ apenas custo marginal (hotel), £50–£150/dia
```

O custo totalmente absorvido médio de um dia de cama agudo é frequentemente citado em £400+ (National Cost Collection historicamente ~£350 para dias de cama em excesso) — mas ver [custo marginal vs médio](../custo-marginal-vs-médio/): a média quase nunca é a poupança.

## Exemplo resolvido

Uma "enfermaria virtual" de monitorização remota permite que 600 doentes/ano vão para casa 2 dias mais cedo: 1.200 dias de cama poupados.

- **Alegação ingénua**: 1.200 × £400 = £480.000. Errado a menos que uma enfermaria feche.
- **Alegação honesta**: o hospital preenche as camas com doentes ortopédicos eletivos. 1.200 dias de cama ÷ 3 dias de estadia média = 400 episódios eletivos adicionais a ~£6.000 de rendimento cada sob pagamento baseado em atividade = **£2,4M de atividade financiada adicional** (menos o custo marginal de tratar esses doentes), *mais* 400 doentes fora da lista de espera. O custo de funcionamento da enfermaria virtual (£350.000) é líquido face a isto.

A capacidade libertada que é *reutilizada* vale frequentemente mais do que a alegação ingénua em dinheiro — mas é um tipo de valor diferente e tem de ser rotulada como tal ([libertador de tesouraria vs não libertador](../poupanças-libertadoras-de-tesouraria-vs-não-libertadoras/)).

## Ligação à engenharia de software

"Dias de servidor poupados" comporta-se de forma idêntica. Desativar ambientes sempre ligados só liberta tesouraria quando as instâncias são terminadas ou as reservas caducam; a capacidade absorvida de volta na reserva vale o seu custo marginal (~0 sobre gasto comprometido). A disciplina paralela: para cada poupança alegada, nomeie o *mecanismo* — terminada, reabastecida com trabalho valioso, ou evaporada. O software que reduz o tempo de internamento hospitalar (coordenação de alta, monitorização remota, tempo de resposta de diagnósticos) deve modelar os três cenários e deixar o hospital escolher por enfermaria.

## Armadilhas

- **Avaliação a custo médio** de capacidade marginal — o erro canónico.
- **Dupla contagem**: dias de cama poupados *e* internamentos evitados *e* redução de lista de espera da mesma cama libertada.
- **Assumir que os dias poupados são os dias caros**: os dias poupados no fim da estadia são os dias mais baratos (baixa acuidade).

## Fontes

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, NHS cost calculator. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
