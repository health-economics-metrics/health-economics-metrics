# AI监管评估 (AI Regulatory Evaluation)

规范医疗领域AI的各项监管框架——FDA的"软件作为医疗器械"（Software as a Medical Device，SaMD）制度及其**预先设定变更控制计划（Predetermined Change Control Plans，PCCP）**，以及诸如NHS AI in Health and Care Award之类的真实世界评估项目——及其带来的经济成本与效益。

## 为何重要

监管既决定了**进入市场所需承担的证据成本**，也决定了**此后每一次模型更新所需承担的成本**——对于AI产品而言，后者往往更为关键。FDA传统模式（锁定模型；每次变更均需重新审批）使持续改进在经济上变得异常艰难。**PCCP指南（于2024年12月定稿）**改变了这一经济格局：制造商可以为*特定*的未来模型更新预先获得授权——包括拟议修改内容的说明、修改协议（说明每次修改将如何验证）以及影响评估——这样一来，经批准的改进便无需重新提交申请即可上线。目前已有超过1,000款AI赋能医疗器械获得FDA授权；FDA现在也开始探究真实世界性能监测（预先设定的指标：基线假阳性/假阴性率、校准漂移、领域偏移指标）。

## 计算方法

PCCP本质上是将[DORA交付前置时间](../dora-metrics/)的经济学原理应用到受监管模型上：

```
每次模型更新成本（传统方式） = 重新提交成本 + 审查延迟时间 × 延迟成本
每次模型更新成本（PCCP方式） = 仅需协议执行成本

产品全生命周期内的更新经济学：
  N次更新 × (单次提交成本 + 审查月数 × 每月延迟成本)
  对比 一次性PCCP撰写成本 + N次协议执行成本
```

以NHS AI Award的模式为例，其指标体系比单纯的准确率要宽泛得多：独立的真实世界评估会评估临床性能、工作流程/落地实施效果以及经济影响——这正是完整的[效力 → 实效 → 成本效果](../ai-developer-productivity/)流水线被制度化的体现。

## 实例演算

某放射影像AI供应商计划在3年内每季度进行一次模型改进（共12次更新）：

```
传统方式：12 × (£8万提交费用 + 4个月 × 每月£5万的延迟收益延迟成本)
        = 12 × £28万 = £336万
PCCP路径：£25万PCCP撰写成本 + 12 × £3万协议执行成本 = £61万
节省约£275万——而且每一次改进都能让患者提早约4个月受益：
12 × 4个月 × 该次更新自身的临床收益，本身就是一条独立的QALY收益线。
```

PCCP是监管层面对"部署频率本身具有临床价值"这一命题的认可——正是本资料库贯穿始终的核心因果链，如今获得了监管机构的背书。

## 与软件工程的关联

要做好PCCP本身就是一个软件工程问题：预先设定的评测套件、版本化的数据集、自动化验证流水线、漂移监测——这些都是持续部署理念在受监管场景下的对应物，只是这里的"部署门槛"是经过验证的协议而非代码评审。拥有成熟评测基础设施（参见[AI质量指标](../ai-quality-metrics/)）的团队能够以较低成本获得PCCP授权；缺乏这类基础设施的团队则会发现，所谓的监管约束其实是工程成熟度不足的约束。对于要进入NHS体系的产品而言，与之并行的还有DTAC（临床安全、数据保护、互操作性）以及[NICE证据标准框架](../nice-evidence-standards-framework/)的证据分级要求——应将这些都纳入市场准入的[总拥有成本（TCO）](../total-cost-of-ownership/)预算。

## 常见陷阱

- **对PCCP适用范围的过度幻想**：只有*已明确列明*的修改类型才可获得预先授权；架构性变更或新的预期用途仍需完整审查。
- **未对真实世界的漂移进行监测**：以上市时的性能获得授权，人群却在悄然漂移，二者叠加会导致产品实际表现超出其获批的适用范围；监测既是监管期望，也是一种自我保护。
- **将获得批准与产生价值混为一谈**：FDA/UKCA批准≠会有人愿意为此付费——那是需要单独跨越的[卫生技术评估（HTA）](../health-technology-assessment/)门槛。

## 来源

- FDA，AI赋能设备软件/SaMD。<https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP落地指南解析。<https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England，AI in Health and Care Award真实世界评估的经验总结。<https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
