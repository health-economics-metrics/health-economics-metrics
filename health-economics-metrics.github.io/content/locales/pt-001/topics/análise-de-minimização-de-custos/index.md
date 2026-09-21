# Análise de Minimização de Custos (AMC)

A AMC compara apenas custos, e escolhe a opção mais barata — legítima *apenas* quando os resultados das alternativas foram demonstrados como equivalentes.

## Porque é importante

A AMC é a análise mais simples e a mais abusada. A alegação de equivalência é que faz todo o trabalho: se os resultados genuinamente não diferem (um biossimilar vs o seu originador; dois fornecedores do mesmo serviço a cumprir a mesma especificação), então o custo é a única questão e a AMC está correta. O rigor vive em *provar* a equivalência primeiro — tipicamente através de um estudo de não-inferioridade com uma margem pré-especificada — que é exatamente o passo que os compradores normalmente saltam.

## O cálculo

```
Dada evidência de que Efeito_A ≈ Efeito_B (dentro de uma margem pré-especificada δ):
Escolha min(Custo_A, Custo_B)

Custos medidos da mesma perspetiva, ao longo do mesmo horizonte,
incluindo custos de mudança/transição.
```

Se a equivalência não puder ser comprovada, a AMC é inválida — use antes [ACE](../análise-custo-efetividade/)/[ACU](../análise-custo-utilidade/).

## Exemplo resolvido

Um hospital escolhe entre duas plataformas de videoconsulta. Um piloto paralelo de 3 meses mostra taxas de conclusão de 94,1% vs 93,8%, satisfação do doente 4,4 vs 4,4 — diferenças dentro do δ pré-acordado de 2 pontos percentuais. Resultados: equivalentes. Custos ao longo de 3 anos:

```
                     Plataforma A   Plataforma B
Licenças             £360.000       £210.000
Integração           £80.000        £150.000
Formação/suporte     £60.000        £90.000
Total                £500.000       £450.000
```

A Plataforma B vence por £50.000 — *incluindo* o seu custo de integração mais elevado. Sem o piloto, a alegação de equivalência assentaria em brochuras de fornecedores, e uma diferença de 1 ponto na taxa de conclusão (≈ milhares de consultas falhadas/ano) ofuscaria £50.000.

## Ligação à engenharia de software

A AMC é a forma formal da aquisição de commodities: dois fornecedores de CI a cumprir SLOs idênticos, dois armazenamentos de objetos com a mesma especificação de durabilidade. A lição de economia da saúde é a *ordem das operações*: primeiro comprove a equivalência (referência face à sua carga de trabalho, piloto face aos seus SLOs, com a margem acordada antecipadamente), depois compare os custos totais incluindo a migração. "São basicamente iguais, B é mais barato" sem o primeiro passo é como as organizações compram a ferramenta que é 10% mais barata e 40% pior. Corolário: quando um fornecedor argumenta preço, faça-o estipular a equivalência — vincula-se também na outra direção.

## Armadilhas

- **Equivalência assumida** — o pecado que define a AMC; a ausência de evidência de diferença não é evidência de equivalência (pilotos subpotenciados "mostram" equivalência de graça).
- **Omitir custos de mudança** — a migração, a reformação e o funcionamento paralelo pertencem ao lado do custo.
- **Equivalência nos resultados errados**: equivalente na métrica medida, diferente numa que importa (acessibilidade, latência de cauda, saída de dados).

## Fontes

- York Health Economics Consortium glossary: cost-minimization analysis. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
