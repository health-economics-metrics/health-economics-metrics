# Economia da Prevenção

A economia de intervir antes de a doença ocorrer ou progredir. A conclusão principal é contraintuitiva: **a maioria da prevenção não poupa dinheiro** — compra saúde a um bom preço. A análise histórica de Cohen, Neumann e Weinstein na NEJM constatou que menos de 20% das intervenções preventivas são líquidas em poupança de custos; o resto é, na melhor das hipóteses, custo-efetivo.

## Porque é importante

"A prevenção poupa dinheiro" é a alegação falsa mais repetida na política de saúde, e os casos de negócio construídos sobre ela são demolidos pelos economistas da saúde. A estrutura honesta: a prevenção custa dinheiro agora (rastreio de populações inteiras, tratamento de fatores de risco em pessoas que nunca teriam adoecido) e devolve saúde mais tarde — normalmente a um *bom* custo por QALY, ocasionalmente com uma poupança, por vezes a um preço terrível. Saber em que regime se está é a análise. A distinção importa comercialmente: um produto de prevenção vendido como "poupa dinheiro ao NHS" convida a uma auditoria que vai falhar; vendido como "compra QALYs a £4.000" pode vencer com os mesmos factos. Ver [intervenção mais precoce](../intervenção-mais-precoce/) para a versão dentro-da-via.

## O cálculo

```
Custo líquido da prevenção (por pessoa) =
    custo da intervenção × todos os tratados
  − custos a jusante evitados × os poucos que teriam progredido
  (ambos descontados — os custos evitados estão anos à frente; ver
   discounting-and-time-preference.md)

A poupança de custos requer: custo da intervenção < P(progressão) × custo evitado × fator de desconto
A custo-efetividade requer apenas: custo líquido / QALYs ganhos < limiar
```

O paradoxo da prevenção: o custo da intervenção multiplica-se por toda a população; os benefícios acumulam-se apenas nos poucos contrafactuais.

## Exemplo resolvido

Uma aplicação de gestão de hipertensão oferecida a 100.000 adultos em risco, £25/pessoa/ano. Ao longo de 10 anos previne 400 AVCs (cada um a custar £45.000 descontados, e 3 QALYs perdidos).

```
Custo:    100.000 × £25 × 10 anos (descontado ≈ ×8,3) ≈ £20,8M
Compensações: 400 × £45.000 = £18,0M
Custo líquido ≈ £2,8M — NÃO poupa custos

QALYs ganhos = 400 × 3 = 1.200
Custo por QALY = 2,8M / 1.200 ≈ £2.300/QALY — excecionalmente custo-efetivo
```

Mesmo programa, ambas as verdades: perde £2,8M em dinheiro e compra saúde a um décimo do limiar do NICE. Financie-o com base no segundo número; nunca prometa o primeiro.

## Ligação à engenharia de software

A qualidade "shift-left" é economia de prevenção, ressalva incluída. As revisões, testes, e análise estática aplicam custo a *cada* alteração para apanhar problemas nos poucos que teriam progredido para incidentes de produção. A curva de custo de defeitos (10–100× por fase) desempenha o papel dos custos de AVC — e a conclusão honesta espelha a saúde: o shift-left é normalmente custo-*efetivo*, não automaticamente custo-*poupador*, porque a maioria dos problemas sinalizados nunca teria progredido para incidentes (o problema dos poucos contrafactuais). Calcule-o: custo total da porta por período vs incidentes realmente evitados × custo do incidente — a mesma estrutura do exemplo resolvido, com o [NNT](../número-necessário-para-tratar/) como a unidade por apanha.

## Armadilhas

- **Alegar poupanças de custo quando a evidência apoia a custo-efetividade** — o erro definidor da advocacia da prevenção em ambos os domínios.
- **Compensações futuras não descontadas**: benefícios daqui a 15 anos ao valor nominal.
- **Ignorar custos de sobrediagnóstico/sobretratamento**: a prevenção também encontra pseudo-doença — ver [economia do rastreio](../economia-do-rastreio/).

## Fontes

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
