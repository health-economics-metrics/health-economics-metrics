# Alcance e Equidade

O RE-AIM — Reach, Effectiveness, Adoption, Implementation, Maintenance (Alcance, Efetividade, Adoção, Implementação, Manutenção) — é o quadro padrão para julgar o impacto *populacional* de uma intervenção. A sua aritmética central: **impacto na saúde pública ≈ alcance × efetividade**. As ferramentas digitais acrescentam uma dimensão de equidade: a exclusão digital significa que o alcance é sistematicamente desigual, e a entrega digital-primeiro pode alargar as lacunas de saúde que visa fechar.

## Porque é importante

As revisões sistemáticas que aplicam o RE-AIM à mHealth encontram uma assinatura consistente: Alcance e Adoção fortes, **Efetividade e Manutenção fracas** — as aplicações espalham-se facilmente e desvanecem-se rapidamente. Para um serviço nacional de saúde, isto significa que um produto impressionante por utilizador pode ser um mau investimento populacional, e vice-versa: uma ferramenta modestamente eficaz a alcançar milhões pode superar em produção uma brilhante a alcançar milhares (ver a aritmética [HALE](../esperança-de-vida-ajustada-pela-saúde/)). A equidade não é uma restrição secundária mas um motor de valor: a exclusão digital acompanha a idade, a privação, a incapacidade, e a língua — exatamente as populações que carregam o encargo mais tratável — pelo que o utilizador marginal excluído tem frequentemente um benefício potencial *acima da média*.

## O cálculo

```
Impacto populacional ≈ alcance × efetividade
  alcance         = participantes / população elegível (ver activation-and-uptake.md)
  efetividade     = efeito no mundo real entre os participantes (ponderado por retenção —
                  ver retention-and-churn.md)

Versão estratificada por equidade:
  impacto_grupo_g = alcance_g × efetividade_g, reportado por quintil
  de privação / faixa etária / grupo linguístico
  lacuna de equidade = impacto_quintil superior − impacto_quintil inferior

Custo-efetividade distributiva: aplicar pesos de equidade aos QALYs por
grupo recetor — um QALY para o mais desfavorecido conta mais (uma
extensão de HTA cada vez mais convencional).
```

## Exemplo resolvido

Um programa digital de prevenção de diabetes, reportado de duas formas:

```
Agregado: alcance 12%, efeito 0,02 QALYs/participante → 0,0024 QALYs/pessoa elegível

Estratificado (quintis de privação):
  Q1 (menos privado): alcance 22%, efeito 0,02 → 0,0044
  Q5 (mais privado):  alcance 4%,  efeito 0,025 → 0,0010

O programa entrega 4,4× mais saúde aos menos privados —
enquanto o efeito por participante do Q5 é MAIS ALTO (mais margem). Um
braço digital-assistido (coaching telefónico + acesso comunitário) que
custa 20% mais por participante do Q5 e eleva o alcance do Q5 para 12%
triplica o impacto do Q5 e melhora o agregado — o investimento em
equidade É o investimento em eficiência aqui.
```

## Ligação à engenharia de software

O alcance é substancialmente um artefacto de engenharia: os requisitos mínimos de dispositivo e SO, as suposições de largura de banda, o suporte linguístico, a conformidade de acessibilidade (WCAG), os obstáculos de verificação de identidade, e a distribuição apenas por loja de aplicações cortam cada um populações do denominador — normalmente de forma invisível, porque os utilizadores excluídos nunca aparecem na análise. As práticas de engenharia que movem a equidade: medir o *denominador* (instrumentar a população elegível, não apenas os utilizadores); orçamentar o desempenho para dispositivos antigos e conectividade fraca; enviar vias digital-assistidas (telefone, SMS, quiosque) como fluxos de primeira classe em vez de canais de vergonha; e estratificar cada métrica do painel pelas dimensões de equidade — uma média não estratificada é onde a desigualdade se esconde (a [adoção GDS](../métricas-de-serviço-gds/) carrega o mesmo aviso).

## Armadilhas

- **Efetividade reportada sobre os que completam, impacto alegado sobre populações** — os termos de alcance silenciosamente descartados.
- **Equidade como uma auditoria a posteriori** em vez de um input de design; reajustar o alcance é muito mais caro do que desenhar para ele.
- **Amnésia de manutenção**: a dimensão mais fraca do RE-AIM em mHealth — alegações de impacto para além do horizonte temporal da evidência.
- **Poupanças apenas em canal digital** que deslocam custos para utilizadores excluídos e pessoal de primeira linha (ver [métricas de serviço GDS](../métricas-de-serviço-gds/)).

## Fontes

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
