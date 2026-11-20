# 每 QALY 碳足迹 (Carbon Footprint per QALY)

每 QALY 碳排放是一个效率比率：某项干预的碳排放（或其避免的排放）除以它所产生的 QALY。它与每 QALY 成本直接对应，使碳效率可以与成本效率并列评估。“碳调整 NMB”再进一步：用英国 Green Book 官方的非市场碳价把碳影响货币化，再从标准的[净货币效益](../净货币效益/)中扣除。

## 为什么重要

NICE 和 NHS England 现在期望在成本和 QALY 之外同时考虑环境影响。NHS 有公开的净零排放承诺：2040 年前实现直接排放净零，2045 年前实现整个供应链足迹净零。NICE 的卫生技术评估手册（PMG36）把环境可持续性列为评估技术时正在出现的考虑因素。对数字健康产品而言，这意味着碳正在成为价值论证的第四根支柱，与成本、QALY 和[效率前沿上的优势](../优势与效率前沿/)并列：它不取代其中任何一项，而是一个好的商业论证越来越需要报告的维度。

## 计算方法

```
carbon_per_qaly = 总排放_吨_co2e / 总_qaly
  （负值表示每获得一个 QALY 所避免的净排放——
  双赢：健康更好，碳更少）

货币化碳影响 = 排放_吨_co2e × 每吨碳价
  （负排放 × 正价格 = 负成本，即收益）

碳调整_NMB = 净货币效益 − 货币化碳影响
```

这用第二条坐标轴——每 QALY 碳排放——扩展了成本/QALY 效率前沿的思路，沿用[优势与效率前沿](../优势与效率前沿/)中“把每个备选方案画出来，看哪个被支配”的逻辑，只是把成本换成了碳。

## 算例

一项远程医疗服务取代面诊，每年减少 5,000 次汽车出行，每次约 8 kg CO2e：避免 40 吨 CO2e，表示为负排放（−40.0 吨），并每年产生 25 个 QALY：

```
carbon_per_qaly = −40.0 / 25.0 = 每获得 1 个 QALY 避免 1.6 吨 CO2e
```

采用 Green Book 的非市场碳价（示意数字，2023 年非市场中心值约 £269/吨 CO2e；Green Book 每年更新碳价，在真实分析中引用前请重新核对）：

```
货币化碳影响 = −40.0 × £269 = −£10,760
```

负的“成本”−£10,760 就是 £10,760 的收益。若该干预自身的净货币效益为 £500,000：

```
碳调整_NMB = £500,000 − (−£10,760) = £510,760
```

碳节约增强而不是削弱论证——这正是负排放框架要让人看见的双赢。

## 与软件工程的关联

这是与 AI 和云经济学当下的交汇点：用于训练和运行 AI 模型的算力所产生的碳足迹，已经是 NHS 采购中的实际项目，因为超过一定门槛的 NHS 供应商合同要求提交碳减排计划（Carbon Reduction Plan）。[云单位经济学](../云单位经济学/)已经在追踪每单位算力产出的成本；每 QALY 碳排放是未来“每次推理碳成本”指标的天然模板，它会把该模块和推理的单位经济学延伸到环境维度，尽管这一指标目前尚不存在。

## 陷阱

- **玩弄系统边界**：只计直接排放（范围 1），排除供应链排放（范围 3），而后者往往是数字健康产品真实足迹的大头。
- **使用过时的碳价**：Green Book 每年更新非市场碳价，因此所引用的 £/吨数字必须注明日期，不能当作常数呈现。
- **把“碳节约”当作“成本效果”的替代**：低排放但价值低的干预依然是对 NHS 资源的糟糕使用。碳是与成本和 QALY 并列的第四根支柱，不是其中任何一项的替代品。

## 参考来源

- NHS England, "Delivering a Net Zero National Health Service" (2020, 2022 年更新). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance（每年更新；非市场中心值约 £269/tCO2e，2023——每次引用都应注明日期）. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
