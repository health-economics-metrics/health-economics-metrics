# Economia do Rastreio

A economia do rastreio governa o valor de testar populações assintomáticas. O facto matemático central: **a baixa prevalência de doença, mesmo os testes excelentes geram maioritariamente falsos positivos** — e o custo a jusante de os perseguir pode afogar o benefício das verdadeiras descobertas.

## Porque é importante

Desde 1968, os critérios de Wilson–Jungner da OMS definiram a fasquia para o rastreio populacional: a condição tem de ser importante, o teste aceitável e preciso, o tratamento eficaz tem de existir, e a economia tem de ser equilibrada. O UK National Screening Committee aplica análise formal de custo-efetividade antes de aprovar qualquer programa nacional — e rejeita a maioria das propostas. Todo o discurso de "a IA vai rastrear toda a gente para tudo" bate nesta maquinaria, e normalmente perde face à aritmética abaixo.

## O cálculo

O valor preditivo positivo (VPP) — a probabilidade de um resultado positivo ser real — colapsa a baixa prevalência:

```
VPP = (sens × prev) / [sens × prev + (1 − espec) × (1 − prev)]

Exemplo: sensibilidade 90%, especificidade 95%, prevalência 0,5%:
VPP = (0,9 × 0,005) / (0,9 × 0,005 + 0,05 × 0,995)
    = 0,0045 / (0,0045 + 0,04975) ≈ 8,3%
```

Onze em doze positivos são falsos. Economia completa do programa:

```
Custo por caso verdadeiro encontrado = (custo de rastreio + custo de investigação × todos os positivos) / verdadeiros positivos
Depois: encontrar um caso vale esse custo? (valor de intervenção mais precoce por caso,
      menos o dano de sobrediagnóstico — casos encontrados que nunca teriam importado)
```

## Exemplo resolvido

Rastreio retiniano com IA para uma condição rara, 100.000 pessoas, prevalência 0,5%, sens 90%, espec 95%, exame £15, investigação confirmatória £400:

```
Verdadeiros positivos:  100.000 × 0,005 × 0,90 = 450
Falsos positivos: 100.000 × 0,995 × 0,05 = 4.975
Custo = 100.000 × 15 + (450 + 4.975) × 400 = 1,5M + 2,17M = £3,67M
Custo por caso verdadeiro ≈ £8.156
```

Se o tratamento precoce poupa £20.000 + 1 QALY por caso, o programa passa facilmente. Aumentar a especificidade para 99% (menos falsos alarmes): o custo de investigação cai para (450 + 995) × 400 = £0,58M, total £2,08M, custo por caso ≈ **£4.622** — a especificidade, não a sensibilidade, é onde a economia do rastreio se ganha a baixa prevalência.

## Ligação à engenharia de software

A análise estática, a deteção de segurança, e a deteção de anomalias são programas de rastreio sobre código-bases e telemetria, com a prevalência de verdadeiros defeitos frequentemente bem abaixo de 1% por oportunidade de alerta. A matemática idêntica explica a fadiga de alertas: um scanner 95%-específico em código de baixa prevalência afoga as equipas em falsos positivos, e cada falso positivo custa atenção e erode a confiança até os alertas reais serem ignorados (o termo clínico é *dano de rastreio*; o termo de engenharia é *dormência de pager*). Os remédios transferem-se da saúde: aumentar a especificidade antes da sensibilidade, rastrear subpopulações de maior prevalência (segmentação baseada em risco ↔ análise apenas de código alterado), e contar o custo de triagem na economia da ferramenta — ver [NNT](../número-necessário-para-tratar/) e [avaliação de IA clínica](../avaliação-de-ia-clínica/).

## Armadilhas

- **Citar sensibilidade/especificidade sem prevalência** — precisão sem VPP é marketing.
- **Ignorar o sobrediagnóstico**: encontrar "doença" indolente que nunca teria prejudicado desencadeia custos e danos reais de tratamento.
- **Viés de tempo de antecipação**: a deteção mais precoce sem resultados alterados infla a sobrevivência aparente — ver [intervenção mais precoce](../intervenção-mais-precoce/).

## Fontes

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
