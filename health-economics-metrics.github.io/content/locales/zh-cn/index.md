# 健康经济学指标

一份全面介绍健康经济学数学、案例与推理方法的指南，面向为全球各国医疗服务机构开发软件的工程师。每篇文档涵盖一个指标或概念：定义、为何重要、数学计算、一个实例解析、与软件工程的关联、常见误区，以及参考来源。

刚接触这里？从[机会成本](locales/en-gb-oxendict/topics/opportunity-cost/)、[质量调整生命年](locales/en-gb-oxendict/topics/quality-adjusted-life-year/)和[延迟成本](locales/en-gb-oxendict/topics/cost-of-delay/)开始 —— 其余一切都建立在这三个概念之上。

## 经济推理基础

- [机会成本 (Opportunity Cost)](locales/en-gb-oxendict/topics/opportunity-cost/) — 被放弃的最佳替代方案的价值；为何固定预算让每一次选择都成为一种置换
- [贴现与时间偏好 (Discounting and Time Preference)](locales/en-gb-oxendict/topics/discounting-and-time-preference/) — 现值计算，Green Book/NICE 的 3.5% 折现率
- [分析视角 (Analysis Perspective)](locales/en-gb-oxendict/topics/analysis-perspective/) — 支付方 vs 提供方 vs 社会：谁的成本才算数
- [时间周期 (Time Horizon)](locales/en-gb-oxendict/topics/time-horizon/) — 成本与效果应计算多长时间，以及时间跨度上的博弈
- [边际成本与平均成本 (Marginal vs Average Cost)](locales/en-gb-oxendict/topics/marginal-vs-average-cost/) — 为何腾出一张病床并不能节省其平均成本
- [现金释放型 vs 非现金释放型节约 (Cash-Releasing vs Non-Cash-Releasing Savings)](locales/en-gb-oxendict/topics/cash-releasing-vs-non-cash-releasing/) — 对任何"节省时间"说法的诚实检验
- [敏感性分析 (Sensitivity Analysis)](locales/en-gb-oxendict/topics/sensitivity-analysis/) — 龙卷风图；哪个假设决定了你的论证
- [概率敏感性分析 (Probabilistic Sensitivity Analysis, PSA)](locales/en-gb-oxendict/topics/probabilistic-sensitivity-analysis/) — 蒙特卡洛模拟、CEAC、正确的概率
- [完全信息期望价值 (Expected Value of Perfect Information, EVPI)](locales/en-gb-oxendict/topics/expected-value-of-perfect-information/) — 在运行试点之前先为其定价
- [优势与效率前沿 (Dominance and the Efficiency Frontier)](locales/en-gb-oxendict/topics/dominance-and-efficiency-frontier/) — 剔除任何人都不应选择的方案

## 结果衡量指标

- [质量调整生命年 (Quality-Adjusted Life Year, QALY)](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) — 健康价值的通用货币
- [伤残调整生命年 (Disability-Adjusted Life Year，DALY)](locales/en-gb-oxendict/topics/disability-adjusted-life-year/) — 疾病负担一侧的镜像；全球卫生的指标
- [EQ-5D](locales/en-gb-oxendict/topics/eq-5d/) — 支撑大多数 QALY 效用权重的工具
- [增量成本效果比 (Incremental Cost-Effectiveness Ratio，ICER)](locales/en-gb-oxendict/topics/incremental-cost-effectiveness-ratio/) — 每多获得一单位健康所需的额外成本
- [支付意愿阈值 (Willingness-to-Pay Thresholds)](locales/en-gb-oxendict/topics/willingness-to-pay-thresholds/) — NICE 的每 QALY 2 万至 3 万英镑，以及世界其他地区的标准线
- [净货币效益 (Net Monetary Benefit，NMB)](locales/en-gb-oxendict/topics/net-monetary-benefit/) — 价值减去成本，正确地计算
- [生命年获益 (Life-Years Gained，LYG)](locales/en-gb-oxendict/topics/life-years-gained/) — 生存数学，以及体现公平性的 evLYG 变体
- [健康调整预期寿命 (Health-Adjusted Life Expectancy, HALE)](locales/en-gb-oxendict/topics/health-adjusted-life-expectancy/) — 人群层面的健康年数核算
- [QALY 短缺与严重程度修正系数 (QALY Shortfall and Severity Modifiers)](locales/en-gb-oxendict/topics/qaly-shortfall-and-severity-modifiers/) — 为何病情更重人群的 QALY 应计入更多权重

## 经济分析类型

- [成本效果分析 (Cost-Effectiveness Analysis，CEA)](locales/en-gb-oxendict/topics/cost-effectiveness-analysis/) — 每一自然结果单位的成本
- [成本效用分析 (Cost-Utility Analysis，CUA)](locales/en-gb-oxendict/topics/cost-utility-analysis/) — 每 QALY 的成本；比较不同类型的干预措施
- [成本效益分析 (Cost-Benefit Analysis，CBA)](locales/en-gb-oxendict/topics/cost-benefit-analysis/) — 一切折算为金钱；Green Book 净现值
- [成本最小化分析 (Cost-Minimization Analysis，CMA)](locales/en-gb-oxendict/topics/cost-minimization-analysis/) — 在证明等效性之后选择最便宜的方案
- [成本后果分析 (Cost-Consequence Analysis，CCA)](locales/en-gb-oxendict/topics/cost-consequence-analysis/) — 分项列示的表格；NICE 对数字健康的偏好方法
- [预算影响分析 (Budget Impact Analysis, BIA)](locales/en-gb-oxendict/topics/budget-impact-analysis/) — 可负担性，有别于价值本身
- [投资回报率 (Return on Investment, ROI)](locales/en-gb-oxendict/topics/return-on-investment/) — 共用的指标，附带明确声明的参数
- [社会投资回报率 (Social Return on Investment，SROI)](locales/en-gb-oxendict/topics/social-return-on-investment/) — 为市场未定价的事物赋予货币价值

## 卫生系统运营经济学

- [节省的床位天数 (Bed Days Saved)](locales/en-gb-oxendict/topics/bed-days-saved/) — 最主要的收益类型，及其估值陷阱
- [住院时长 (Length of Stay，LOS)](locales/en-gb-oxendict/topics/length-of-stay/) — 医院的周期时间
- [再入院率 (Readmission Rate)](locales/en-gb-oxendict/topics/readmission-rate/) — 卫生系统的变更失败率
- [爽约率 (Did-Not-Attend，DNA Rate)](locales/en-gb-oxendict/topics/did-not-attend-rate/) — 爽约的预约；最纯粹的浪费指标
- [急诊就诊规避 (Emergency Attendance Avoidance)](locales/en-gb-oxendict/topics/emergency-attendance-avoidance/) — 上游干预的经济学
- [国家统一收费标准与单位成本 (National Tariff and Unit Costs)](locales/en-gb-oxendict/topics/national-tariff-and-unit-costs/) — NHS 价目表与成本核算基础设施
- [转诊至治疗 (Referral to Treatment, RTT)](locales/en-gb-oxendict/topics/referral-to-treatment/) — 作为等待时间指标的 18 周标准
- [候诊名单影响 (Waiting List Impact)](locales/en-gb-oxendict/topics/waiting-list-impact/) — 将节省的时间转化为已就诊的患者
- [医疗从业者时间 (Practitioner Time)](locales/en-gb-oxendict/topics/practitioner-time/) — 评估瓶颈产能的价值，而非工资
- [员工留任 (Workforce Retention)](locales/en-gb-oxendict/topics/workforce-retention/) — 人员流失成本与职业倦怠经济学
- [可避免的外包成本 (Avoidable Outsourcing Costs)](locales/en-gb-oxendict/topics/avoidable-outsourcing-costs/) — 将溢价外包工作收回自营
- [下游资源优化 (Downstream Resource Optimization)](locales/en-gb-oxendict/topics/downstream-resource-optimization/) — 疏通人人都在等待的那个环节
- [更早干预 (Earlier Intervention)](locales/en-gb-oxendict/topics/earlier-intervention/) — 在病情进展前介入的经济学
- [创造价值的产能（运营周转）(Value-Generating Capacity，Operational Turnaround)](locales/en-gb-oxendict/topics/value-generating-capacity-operational-turnaround/) — 无需招聘即可铸造产能
- [硬性现金释放节省(赤字防御) (Hard Cash-Releasing Savings, Deficit Defence)](locales/en-gb-oxendict/topics/hard-cash-releasing-savings-deficit-defence/) — 删除预算科目；财务总监的指标

## 卫生技术评估框架与预防经济学

- [卫生技术评估 (Health Technology Assessment，HTA)](locales/en-gb-oxendict/topics/health-technology-assessment/) — NICE、ICER（美国）、CADTH：谁来决定什么值得购买
- [NICE 证据标准框架 (NICE Evidence Standards Framework，ESF)](locales/en-gb-oxendict/topics/nice-evidence-standards-framework/) — 面向数字健康、按风险分级的证据要求
- [德国 DiGA 快速通道 (Germany's DiGA Fast-Track)](locales/en-gb-oxendict/topics/diga-fast-track/) — 可凭处方使用的应用；附带证据截止日期的临时收录
- [需要治疗人数 (Number Needed to Treat，NNT)](locales/en-gb-oxendict/topics/number-needed-to-treat/) — 让说法保持诚实的单位效益投入量
- [预防经济学 (Prevention Economics)](locales/en-gb-oxendict/topics/prevention-economics/) — 为何预防具有成本效益，却很少能真正节省开支
- [筛查经济学 (Screening Economics)](locales/en-gb-oxendict/topics/screening-economics/) — Wilson–Jungner 标准、低患病率下阳性预测值的崩塌、警报疲劳
- [避免的下游成本 (Avoided Downstream Costs)](locales/en-gb-oxendict/topics/avoided-downstream-costs/) — 成本抵消及使其可信的规则

## 软件工程与数字化交付

- [延迟成本 (Cost of Delay，CoD)](locales/en-gb-oxendict/topics/cost-of-delay/) — 未交付的每周英镑成本或每周 QALY 损失；核心的桥接指标
- [DORA 指标 (DORA Metrics)](locales/en-gb-oxendict/topics/dora-metrics/) — 交付绩效，转译为健康经济学术语
- [流程指标 (Flow Metrics)](locales/en-gb-oxendict/topics/flow-metrics/) — 利特尔法则、在制品（WIP）、流动效率；医院与研发流水线共用的排队数学
- [WSJF 与 CD3](locales/en-gb-oxendict/topics/wsjf-and-cd3/) — 按价值密度排定优先级；将待办事项列表变成 QALY 排行榜
- [SPACE 与 DevEx](locales/en-gb-oxendict/topics/space-and-devex/) — 多维度的生产力；EQ-5D 给工程指标的启示
- [技术债 (Technical Debt)](locales/en-gb-oxendict/topics/technical-debt/) — 本金、利息，以及适用于代码库的慢性病经济学
- [总拥有成本 (Total Cost of Ownership，TCO)](locales/en-gb-oxendict/topics/total-cost-of-ownership/) — 维护成本占 50%–80%；将药品定价的天真误区套用到软件上
- [云单位经济学 (Cloud Unit Economics，FinOps)](locales/en-gb-oxendict/topics/cloud-unit-economics/) — 每单位产出的成本；数字服务的参考成本
- [自建与外购 (Build vs Buy)](locales/en-gb-oxendict/topics/build-vs-buy/) — 计入延迟成本项的风险调整比较
- [收益实现 (Benefits Realization)](locales/en-gb-oxendict/topics/benefits-realization/) — 审计预测的收益是否真正实现
- [GDS 服务指标 (GDS Service Metrics)](locales/en-gb-oxendict/topics/gds-service-metrics/) — 每笔交易成本、满意度、完成率、使用率

## 人工智能加速

- [AI与开发者生产力 (AI Developer Productivity)](locales/en-gb-oxendict/topics/ai-developer-productivity/) — Copilot 的随机对照试验 vs METR 的随机对照试验；效力与实际效果的差异
- [AI投资回报率 (AI Return on Investment)](locales/en-gb-oxendict/topics/ai-return-on-investment/) — 95% 无回报的结论，以及那 5% 做对了什么
- [推理单位经济学 (Inference Unit Economics)](locales/en-gb-oxendict/topics/inference-unit-economics/) — 每 token 的成本，以及对价格持续下跌的建模
- [AI质量指标 (AI Quality Metrics)](locales/en-gb-oxendict/topics/ai-quality-metrics/) — 将幻觉率视为一种有价格的伤害率
- [临床 AI 评估 (Clinical AI Evaluation)](locales/en-gb-oxendict/topics/clinical-ai-evaluation/) — 敏感度、特异度、AUROC，以及为何患病率主导着经济学结果
- [AI监管评估 (AI Regulatory Evaluation)](locales/en-gb-oxendict/topics/ai-regulatory-evaluation/) — FDA 的 SaMD、PCCP，以及模型更新的经济学

## 消费者健康应用与设备

- [参与度指标 (Engagement Metrics)](locales/en-gb-oxendict/topics/engagement-metrics/) — 把参与度当作一种临床剂量
- [留存与流失 (Retention and Churn)](locales/en-gb-oxendict/topics/retention-and-churn/) — 流失法则；将留存曲线视为治疗窗口
- [激活与采纳 (Activation and Uptake)](locales/en-gb-oxendict/topics/activation-and-uptake/) — 价值漏斗的前端入口
- [依从性与持续性 (Adherence and Persistence)](locales/en-gb-oxendict/topics/adherence-and-persistence/) — MPR、PDC、有效参与度、最小有效剂量
- [患者报告结局 (Patient-Reported Outcomes，PROMs, PREMs, MCID)](locales/en-gb-oxendict/topics/patient-reported-outcomes/) — PROM、PREM，以及 MCID 这道诚实门槛
- [数字终点与生物标志物 (Digital Endpoints and Biomarkers)](locales/en-gb-oxendict/topics/digital-endpoints-and-biomarkers/) — 从传感器遥测数据到达到监管级别的证据
- [可穿戴设备验证 (Wearable Validation)](locales/en-gb-oxendict/topics/wearable-validation/) — MAPE、一致性统计、佩戴时长、数据完整性
- [远程患者监测经济学 (Remote Patient Monitoring Economics)](locales/en-gb-oxendict/topics/remote-patient-monitoring-economics/) — CPT 编码组合与居家医院替代方案
- [健康应用单位经济学 (Health App Unit Economics)](locales/en-gb-oxendict/topics/health-app-unit-economics/) — CAC、LTV、PMPM，以及 ROI 与 VOI 的对比
- [覆盖面与公平性 (Reach and Equity)](locales/en-gb-oxendict/topics/reach-and-equity/) — RE-AIM；人群影响 = 覆盖率 × 有效性

## 基准数据的时效性

许多引用的数字每年都会更新（NHS 单位成本、支付方案价格、DORA 分组、DiGA 数量、LLM 价格）。每篇文档都在正文中标注了其基准数据的日期；在实际业务案例中使用前请重新核实。

## Claude 技能

本仓库提供两个 [Claude 技能](https://code.claude.com/docs/en/skills) —— 将其中任意一个放入项目的 `.claude/skills/`（或让 Claude 指向本仓库的 `skills/`），即可在智能体编程会话中直接调用本书：

- [health-economics-metrics-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-skill/SKILL.md) —— 用于一般用途：解释一个概念、根据你自己的数字计算某个指标，或组建一个多指标的业务案例，依据的是本书的公式、实例解析和常见误区，而非泛泛的记忆。
- [health-economics-metrics-maintainer-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-maintainer-skill/SKILL.md) —— 用于本仓库的维护者：按主题的模板、README 索引规范，以及添加或编辑主题时的链接/同步校验清单。
