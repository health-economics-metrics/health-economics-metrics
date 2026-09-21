# Número Necessário para Tratar (NNT)

O NNT é o número de doentes que têm de receber uma intervenção para **um** doente adicional beneficiar, ao longo de um período de tempo declarado. Converte as reduções de risco percentuais — que induzem em erro — em unidades de esforço-por-benefício que qualquer pessoa consegue raciocinar.

## Porque é importante

"Reduz os ataques cardíacos em 25%!" soa decisivo. Se o risco basal é 4% ao longo de 5 anos, a redução absoluta é 1 ponto percentual, pelo que **100 pessoas têm de tomar o medicamento durante 5 anos para 1 beneficiar** — e todas as 100 pagam os custos e os efeitos secundários. O NNT é o antídoto para o marketing de risco relativo, razão pela qual a medicina baseada em evidência lidera com ele. Estatinas para prevenção primária: NNT ≈ 50–100 ao longo de 5 anos por ataque cardíaco evitado. O seu espelho, o **NNH** (número necessário para prejudicar), conta quantos são tratados por pessoa prejudicada.

## O cálculo

```
RRA = taxa de eventos de controlo − taxa de eventos de tratamento   (redução absoluta de risco)
NNT = 1 / RRA

NNH = 1 / (taxa de dano_tratamento − taxa de dano_controlo)

Ponte económica:
custo por evento prevenido = NNT × custo do curso de tratamento
```

Declare sempre o período de tempo e a população basal — o NNT não significa nada sem ambos.

## Exemplo resolvido

Um sistema de previsão de quedas num hospital sinaliza doentes de alto risco para intervenção (sensores de cama, revisão, supervisão). Ensaio: as quedas com lesão caem de 3,2% para 2,4% das admissões.

```
RRA = 0,8 pontos percentuais → NNT = 1/0,008 = 125
   (125 doentes têm de receber o pacote de intervenção para prevenir 1 queda com lesão)

Custo da intervenção ≈ £40/doente → custo por queda prevenida = 125 × 40 = £5.000
Custo de uma queda hospitalar com lesão (estadia extra, imagiologia, litígio) ≈ £12.000
Líquido: a prevenção paga-se ~2,4:1 — e o ganho de QALY está por cima.
```

Note como o NNT mantém a alegação honesta: "reduz as quedas em 25%" e "previne uma queda por cada 125 doentes tratados" são o mesmo resultado, persuasivo de forma diferente.

## Ligação à engenharia de software

O NNT é a unidade certa para qualquer porta ou verificação que atua sobre muitos itens para apanhar poucos: **"número de PRs que têm de passar pela porta de revisão de IA para apanhar um defeito com destino à produção".** Se a porta revê 400 PRs por cada apanha real (NNT = 400) a 4 minutos de atenção do programador cada, uma apanha custa ~27 horas-programador — agora compare isso com o custo do incidente que previne. O NNH mapeia-se para falsos positivos: quantos PRs por sinalização *falsa*, e quanto custa cada um em atenção e confiança? As ferramentas estilo rastreio (linters, scanners de segurança, deteção de anomalias) deveriam vir com aritmética NNT/NNH — ver [economia do rastreio](../economia-do-rastreio/) para saber por que a baixa prevalência torna estes números brutais.

## Armadilhas

- **Sem período de tempo**: "NNT = 50" não significa nada; "NNT = 50 ao longo de 5 anos" é uma alegação.
- **Transplante de risco basal**: o NNT calculado numa população de ensaio de alto risco colapsa numa população de implementação de baixo risco.
- **Ignorar o NNH** — uma porta com NNT 400 e NNH 3 é um gerador de incómodo, não um sistema de segurança.

## Fontes

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
