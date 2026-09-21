# Resultados Relatados pelo Doente (PROMs, PREMs, MCID)

Os PROMs são instrumentos padronizados onde os doentes relatam o seu próprio estado de saúde (sintomas, função, qualidade de vida); os PREMs captam a *experiência* de cuidados. A **MCID** — diferença mínima clinicamente importante — é a menor mudança de pontuação que os doentes realmente percecionam como benéfica: a barra que qualquer melhoria alegada tem de ultrapassar.

## Porque é importante

Os PROMs são a moeda de eficácia primária para a saúde digital: as aplicações raramente movem a mortalidade, mas podem mover credivelmente pontuações de sintomas validadas. Os instrumentos que importam são poucos e padronizados — **PHQ-9** (depressão, 0–27; bandas de severidade a 5/10/15/20), **GAD-7** (ansiedade, 0–21; bandas a 5/10/15), **EQ-5D** (utilidade para [QALYs](../ano-de-vida-ajustado-pela-qualidade/)) — e os reguladores, organismos de HTA, e pagadores aceitam-nos precisamente porque são comparáveis entre produtos e ensaios. A MCID é a porta de honestidade: MCID do PHQ-9 ≈ 5 pontos, GAD-7 ≈ 4, índice EQ-5D comummente ~0,03–0,08 — uma mudança estatisticamente significativa de 1,5 pontos no PHQ-9 numa amostra grande é *real mas clinicamente sem significado*, e um revisor de evidência dirá isso.

## O cálculo

```
Pontuação PROM: somas específicas do instrumento (ex.: PHQ-9 = Σ 9 itens × 0–3)

Estimativa da MCID:
  baseada em âncora:      mudança de pontuação entre doentes que relatam "um pouco melhor"
  baseada em distribuição: ≈ 0,5 × DP das pontuações basais (heurística aproximada)

Enquadramento da taxa de resposta (para ensaios e dossiês):
  respondedor = doente que melhora ≥ MCID (ou ≥50% pela convenção do PHQ-9)
  NNT = 1 / (taxa de resposta_tratamento − taxa de resposta_controlo)
  — ver number-needed-to-treat.md
```

## Exemplo resolvido

Uma aplicação de apoio à depressão, RCT vs lista de espera, 12 semanas:

```
Mudança PHQ-9: aplicação −6,2 pontos, controlo −2,1 → diferença ajustada −4,1
Verificação MCID: 4,1 < 5 → diferença média abaixo da MCID; reporte respondedores em vez:
  respondedores (queda ≥5 pontos): aplicação 48%, controlo 22% → RRA 26%
  NNT = 1/0,26 ≈ 4 — quatro utilizadores tratados por resposta clínica adicional

Ponte económica: ganho EQ-5D dos respondedores 0,06 sustentado 6 meses
  = 0,03 QALYs; por 1.000 utilizadores: 260 respondedores extra × 0,03 = 7,8 QALYs
  ≈ £156.000–£234.000 de valor em saúde aos limiares do NICE
```

O enquadramento respondedor/NNT sobrevive à revisão onde a diferença média sub-MCID teria sido descartada.

## Ligação à engenharia de software

Os PROMs são um problema de recolha de dados que o software está unicamente posicionado para resolver: os instrumentos dentro da aplicação obtêm taxas de conclusão e densidade longitudinal que o papel nunca alcançou, transformando a telemetria de produto de rotina em evidência de grau HTA ([EQ-5D](../eq-5d/) são cinco ecrãs). Regras de engenharia: use o instrumento validado *ipsis verbis* (reformular invalida-o — aplica-se licenciamento); agende a medição por protocolo, não por conveniência de envolvimento (medir apenas os utilizadores ativos é viés de sobrevivência — ver [retenção](../retenção-e-abandono/)); e faça versionamento fixo dos dados do instrumento como qualquer esquema — uma mudança de redação a meio do estudo é corrupção de dados. Os PREMs mapeiam-se para instrumentos estilo CSAT/NPS, e a mesma lição aplica-se: o padronizado vence o caseiro sempre que a audiência é um pagador.

## Armadilhas

- **Significância estatística abaixo da MCID** apresentada como benefício clínico — a inflação mais comum do campo.
- **Regressão para a média**: os utilizadores inscrevem-se em picos de sintomas; o antes/depois de braço único sobrestima enormemente — os comparadores não são negociáveis.
- **Compras de instrumento**: correr o PHQ-9, GAD-7, e WHO-5, e depois reportar o que se moveu — pré-registe o primário.
- **Pressão de inquérito de consentimento digital**: empurrar os utilizadores para respostas favoráveis corrompe o instrumento (e os revisores conhecem as taxas base).

## Fontes

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
