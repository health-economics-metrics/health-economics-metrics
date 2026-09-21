# Retorno Social do Investimento (SROI)

O SROI estende o [ROI](../retorno-do-investimento/) a resultados que os mercados não precificam — bem-estar, ligação social, impacto ambiental — monetizando-os com proxies financeiros, para *todas* as partes interessadas afetadas.

## Porque é importante

Grande parte do que as intervenções de saúde e comunitárias produzem nunca toca numa linha orçamental: solidão reduzida, alívio para cuidadores, ganhos de emprego, dignidade. O SROI, governado pelos sete princípios do Social Value International (envolver as partes interessadas, valorizar o que importa, não sobrealegar, ser transparente, verificar…), produz declarações como "£3,20 de valor social por £1 investido". Os requisitos de valor social da aquisição pública do Reino Unido tornam a evidência estilo SROI comercialmente relevante: as propostas para contratos públicos (incluindo o NHS) pontuam pontos por valor social demonstrado.

## O cálculo

```
Rácio SROI = VA(resultados sociais monetizados) / VA(investimento)

Para cada resultado:
  valor = quantidade × proxy financeiro × atribuição × (1 − peso morto) × (1 − deslocamento)

peso morto    = teria acontecido de qualquer forma
atribuição    = quota causada por outros
deslocamento  = benefício movido de outro lugar em vez de criado
decaimento    = decadência do resultado ao longo dos anos
```

Os fatores de ajuste são a integridade do método: sem eles, o SROI é ficção com um símbolo de moeda.

## Exemplo resolvido

Uma aplicação de amizade que liga adultos idosos isolados a voluntários; custo do programa £200.000/ano; 1.500 pares ativos.

```
Resultado: solidão reduzida para 1.500 pessoas
  proxy: avaliação de bem-estar de "alívio da solidão" ≈ £1.800/pessoa/ano
  peso morto 25% (alguns teriam encontrado ligação de qualquer forma)
  atribuição 80% (algum crédito a outros serviços)

Valor = 1.500 × 1.800 × 0,80 × 0,75 = £1.620.000

Resultado: consultas de clínico geral reduzidas, 1.500 × 1,2 consultas × £42 = £75.600 (real para o pagador)

SROI = (1.620.000 + 75.600) / 200.000 ≈ 8,5 : 1
```

Note que o rácio é 96% de bem-estar avaliado por proxy e 4% de dinheiro real. Isso é SROI legítimo — mas tem de ser apresentado como valor social, nunca permitindo implicar que £1,7M é bancável.

## Ligação à engenharia de software

O SROI é o quadro honesto para trabalho de engenharia cujos beneficiários estão fora da equipa pagadora: manutenção de código aberto, melhorias de acessibilidade, trabalho de plataforma consumido por outras equipas, investimento em comunidade de programadores. A mecânica transferível: identifique todas as partes interessadas, monetize com proxies declaradas, e aplique descontos de peso morto/atribuição (essa correção de OSS teria acontecido de qualquer forma? quanto do ganho é o seu trabalho vs o do ecossistema?). A disciplina de *descontar as suas próprias alegações de impacto* é o que separa o SROI de um número de marketing.

## Armadilhas

- **Compras de proxy**: escolher a avaliação de bem-estar mais generosa disponível.
- **Saltar o peso morto/atribuição** — a inflação mais comum, frequentemente duplicando o rácio.
- **Comparação de rácios entre estudos**: os rácios de SROI são sensíveis ao método; compare apenas dentro de um quadro consistente.
- **Apresentar o valor social como poupanças em dinheiro** a um detentor de orçamento.

## Fontes

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
