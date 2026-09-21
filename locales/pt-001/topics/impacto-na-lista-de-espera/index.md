# Impacto na Lista de Espera

O impacto na lista de espera converte a capacidade clínica poupada em doentes removidos da (ou movidos mais rapidamente através da) lista de espera. Converter horas poupadas em vagas de clínica extra reduz diretamente o tamanho da lista de espera de um hospital — a forma mais tangível de mostrar a um sistema de saúde para que serve a capacidade libertada.

## Porque é importante

A lista de espera eletiva é o desafio pós-pandémico definidor do NHS (o seu tamanho é uma métrica política nacional), e todo o hospital executa um programa de recuperação eletiva contra ela. Um caso de negócio que diz "poupa 2.000 horas de enfermeiro" é abstrato; um que diz "cria 4.000 vagas de consulta adicionais, vê 3.800 doentes em espera, corta a lista da especialidade em 9%" é uma história que um Diretor de Operações pode levar ao seu conselho. O impacto na lista de espera é a *unidade de conta* natural para a [capacidade não libertadora de tesouraria](../poupanças-libertadoras-de-tesouraria-vs-não-libertadoras/).

## O cálculo

```
Vagas extra        = horas libertadas / duração da vaga × utilização
Doentes vistos      = vagas extra × (1 − taxa de DNA)
Redução da lista    = doentes vistos − nova procura induzida
Ganho de tempo de espera = melhoria de fila a partir de taxa de serviço mais alta
                     (para filas estáveis, cortar o atraso N em ΔN à
                     taxa de serviço μ puxa toda a gente para a frente ~ΔN/μ)
```

Valor em saúde de esperas mais curtas: os doentes passam menos semanas no estado de utilidade mais baixa pré-tratamento — a aritmética QALY em [referenciação para tratamento](../referenciação-para-tratamento/).

## Exemplo resolvido

O software de documentação ambiente poupa a cada uma de 20 enfermeiras de clínica 45 min/dia. Ao longo de 250 dias: 20 × 0,75 × 250 = 3.750 horas/ano.

```
Vagas (30 min, 85% utilizável) = 3.750 / 0,5 × 0,85 = 6.375 vagas
Doentes vistos (7% de DNA)     = 6.375 × 0,93       ≈ 5.929/ano
```

Para uma especialidade com uma lista de 12.000 doentes e 24.000 consultas/ano de capacidade equiparada à procura, ~5.900 consultas adicionais cortam as esperas médias em aproximadamente um quarto — movendo o hospital materialmente em direção ao padrão das 18 semanas sem contratação. A ~£160 de valor de esquema por consulta, a atividade vale ~£949.000/ano (ver [tarifa nacional e custos unitários](../tarifa-nacional-e-custos-unitários/)) — mas apresente primeiro o enquadramento da *lista de espera*; é aquele em que o sistema é gerido.

## Ligação à engenharia de software

Uma lista de espera é um atraso, e a economia de redução de atraso transfere-se em ambas as direções. Da saúde para o software: avalie a redução de atraso por quanto tempo os *utilizadores* esperam pelo valor, não por itens fechados ([custo de atraso](../custo-de-atraso/) por item em fila). Do software para a saúde: a Lei de Little diz que a lista só encolhe se a taxa de serviço exceder a taxa de chegada — os ganhos de capacidade absorvidos por referenciações crescentes deixam as esperas inalteradas, pelo que modele também as chegadas. E em ambos os domínios, priorize por valor ponderado por severidade (categorias de urgência clínica ↔ [modificadores de severidade](../défice-de-qaly-e-modificadores-de-severidade/)), não por primeiro-a-entrar-primeiro-a-sair.

## Armadilhas

- **Vagas ≠ doentes**: esquecer as taxas de DNA e os fragmentos inutilizáveis do tempo libertado.
- **Procura induzida**: a capacidade extra visível atrai referenciações; o impacto líquido na lista é menor do que o bruto.
- **Alegar tesouraria**: o impacto na lista de espera é valor de capacidade; a alegação de tesouraria (externalização evitada de trabalho de atraso) é uma linha diferente — ver [custos de externalização evitáveis](../custos-de-externalização-evitáveis/).

## Fontes

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
