# Construir vs Comprar

Construir-vs-comprar é uma comparação estruturada de desenvolvimento personalizado face à aquisição comercial, sobre [TCO](../custo-total-de-propriedade/) descontado, tempo de entrega, e risco. Os priores empíricos são unilaterais: **os custos reais de construção tipicamente excedem as projeções em 30–40%**, as soluções compradas implementam-se 40–60% mais rápido, e a investigação de IA generativa de 2025 do MIT constatou que as ferramentas de IA compradas foram bem-sucedidas ~67% das vezes enquanto as construções internas foram bem-sucedidas cerca de um terço dessa taxa.

## Porque é importante

Os sistemas de saúde enfrentam esta decisão constantemente ("fazer vs contratar" em linguagem do NHS), e as organizações de engenharia erram sistematicamente na direção de construir — porque quem constrói estima a construção, não o [TCO](../custo-total-de-propriedade/), e porque construir é mais divertido. O quadro económico força a comparação honesta: ambas as opções avaliadas ao longo do mesmo horizonte, ambas ajustadas ao risco, e a *diferença de tempo avaliada como [custo de atraso](../custo-de-atraso/)* — o termo que mais frequentemente decide a resposta e mais frequentemente é omitido.

## O cálculo

```
Compare ao longo do mesmo horizonte de 3–5 anos, descontado:

VAL_opção = VA(benefícios, deslocados pelo tempo-até-ao-valor) − VA(TCO)

Ajustes de risco (padrão de "viés de otimismo" do Green Book):
  custo de construção × 1,3–1,4        (prior de derrapagem)
  tempo-até-ao-valor de construção + 40–60% (prior de atraso de implementação)
  compra: acrescente antes a verificação de realidade de integração e custos de saída

Fatores de decisão, na ordem em que normalmente decidem:
  1. diferenciação — esta capacidade é o seu produto, ou canalização?
  2. tempo-até-ao-valor × CoD
  3. TCO ajustado ao risco
```

## Exemplo resolvido

Um hospital precisa de um sistema de consentimento eletrónico. Comprar: £150 mil/ano SaaS, ativo em 3 meses. Construir: estimado £600 mil + £120 mil/ano de manutenção, ativo em 12 meses.

```
Construção ajustada ao risco: 600mil × 1,35 = £810mil; tempo-até-ao-valor ≈ 18 meses
TCO a 5 anos:  comprar = 150mil × 5 = £750mil
               construir = 810mil + 120mil × 5 = £1.410mil
Termo de atraso: a digitalização do consentimento poupa £25mil/mês; a construção chega 15 meses
            depois → CoD = 15 × 25mil = £375mil

Comparação efetiva: £750mil vs £1.785mil — comprar vence por ~£1M, e o maior
termo único depois da própria construção é o custo de atraso que ninguém tinha avaliado.
```

Construir continua a ser correto quando a capacidade é diferenciadora (o algoritmo central do seu produto), quando nenhum fornecedor cumpre uma restrição rígida (segurança clínica, residência de dados), ou quando o risco de aprisionamento ao fornecedor é grave e avaliado.

## Ligação à engenharia de software

A disciplina de economia da saúde transferível é tripla: **ajuste de risco baseado em priores** (o aumento de 30–40% de derrapagem é o viés de otimismo do Green Book do software — aplique-o mecanicamente, argumente pelas exceções em vez de a partir delas); **honestidade do comparador** (a alternativa a construir não é "nada", é a melhor compra disponível — ver [custo de oportunidade](../custo-de-oportunidade/)); e **teste de equivalência antes da comparação de custos** (se comprar e construir genuinamente cumprem a mesma especificação, isto é [análise de minimização de custos](../análise-de-minimização-de-custos/) e a mais barata vence; se não, a diferença de resultado tem de ser avaliada, não afirmada).

## Armadilhas

- **Comparar o preço de tabela do fornecedor com estimativas de construção não ajustadas ao risco** — dupla lisonja para a construção.
- **Trabalho interno a custo zero** ("a equipa já cá está").
- **Aprisionamento não avaliado em ambas as direções**: custos de saída do fornecedor, mas também o fator de autocarro e a permanência de manutenção da construção.
- **Construções orientadas pela identidade**: "isto é central para nós" alegado para canalização — teste a diferenciação face a se os clientes notariam.

## Fontes

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
