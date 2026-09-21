# Economia da Monitorização Remota de Doentes

A economia de reembolso e compensação de custos de monitorizar doentes em casa: nos EUA, uma pilha de receita definida por código CPT; nos serviços nacionais de saúde, economia de evitação de admissão e enfermaria virtual até à substituição completa por **hospital em casa**.

## Porque é importante

A RPM é onde os dados de dispositivo se tornam cuidados de saúde faturáveis. A estrutura Medicare dos EUA (médias nacionais de 2025) é invulgarmente explícita:

```
99453  configuração e educação do doente     ~$19,73  único (após 16 dias de dados)
99454  fornecimento de dispositivo + transmissão ~$43,03  por 30 dias — REQUER ≥16 dias
                                              de leituras nos 30
99457  primeiros 20 min/mês de gestão        ~$47,87  requer ≥20 minutos registados
99458  cada 20 min adicionais                ~$38,49
```

Um mês-doente em conformidade acumula aproximadamente **$90–130 PMPM**. No lado da compensação de custo, os programas de hospital em casa (isenção CMS Acute Hospital Care at Home: 300+ hospitais) mostram ~$1.800–$3.000 poupados por episódio face aos cuidados de internamento com menos reinternamentos e infeções — a demonstração mais clara de que a monitorização mais os cuidados virtuais podem substituir o recurso mais caro do sistema, a cama com pessoal.

## O cálculo

```
Receita RPM (EUA)  = inscritos × fração em conformidade de faturação × pilha de código PMPM
  — a regra dos 16 dias torna a conformidade de tempo de uso (wearable-validation.md)
    uma variável de receita, e a regra dos 20 minutos torna o registo de
    tempo clínico um requisito de engenharia

Valor estilo NHS   = admissões evitadas × custo marginal de admissão
                  + dias de cama substituídos × (custo dia internamento − custo dia enfermaria virtual)
                  − custo do serviço (dispositivos, plataforma, pessoal de monitorização)
  (ver emergency-attendance-avoidance.md e bed-days-saved.md para as regras
   de atribuição e custo marginal)
```

## Exemplo resolvido

Uma prática dos EUA inscreve 400 doentes com hipertensão; 70% cumprem o limiar de 16 dias num mês típico; minutos de gestão registados para 60%:

```
Receita mensal ≈ 400 × [0,70 × 43,03 + 0,60 × 47,87] = 400 × 58,84 ≈ $23.500
Anual ≈ $282.000; custo do serviço (dispositivos $12/mês, pessoal 0,8 ETC) ≈ $180.000
Margem ≈ $100mil/ano — e note que as alavancas são alavancas de engenharia:
elevar a conformidade dos 16 dias de 70% → 85% acrescenta ~$31mil/ano
(conforto do dispositivo, fiabilidade de sincronização, design de lembretes).
```

Espelho NHS: uma enfermaria virtual de 50 camas a 80% de ocupação a substituir dias de internamento a £150 de poupança líquida/dia ≈ 50 × 0,8 × 365 × 150 ≈ **£2,19M/ano** bruto — face à plataforma, aos dispositivos, e à equipa de enfermagem comunitária que a equipa.

## Ligação à engenharia de software

As plataformas de RPM são o produto raro onde o **tempo de atividade e a fiabilidade de sincronização se convertem diretamente em receita** (uma semana de sincronizações falhadas quebra a porta dos 16 dias para uma coorte) e onde o rastreio de tempo de grau de auditoria (a regra dos 20 minutos) é uma funcionalidade de primeira classe, não uma reflexão tardia. Construa para: painéis de conformidade por doente que expõem meses de faturação em risco enquanto recuperáveis; trilhos de dados com timestamp e à prova de adulteração (as auditorias de pagador são rotina); e afinação da economia de alertas — cada alerta consome os minutos da equipa de monitorização, que são tanto a unidade faturável como o recurso escasso ([economia do rastreio](../economia-do-rastreio/) governa a escolha do limiar).

## Armadilhas

- **Inscrição ≠ receita**: a fração em conformidade é o número; modele-a, não a assuma.
- **Códigos dos EUA transplantados para casos do NHS** — os serviços nacionais de saúde compram evitação de admissão, não pilhas de CPT; execute o segundo modelo.
- **Alegações de compensação a custo médio** para admissões cujos custos fixos permanecem (ver [custo marginal vs médio](../custo-marginal-vs-médio/)).
- **Saturação da equipa de monitorização**: o volume de alertas escala com a inscrição; a linha de pessoal é a restrição vinculativa que a maioria dos modelos omite.

## Fontes

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
