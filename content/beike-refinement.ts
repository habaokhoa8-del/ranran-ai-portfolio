export const beikeHandoff = [
  { title: '内容规则', text: '12 版 Skill 迭代；已跑通的 v5.6 规则、5 类图片 Prompt、标题与笔记台账。' },
  { title: '生产脚本', text: '批量生图脚本、飞书字段写入说明与 Excel 台账。' },
  { title: '数据分析', text: '数据处理 SOP、指标公式、全量汇总模板与 HTML 看板模型。' },
  { title: '接手文档', text: '运行步骤、审核节点与看板需求文档。' },
];

export const beikeReviewOwners = [
  { title: '业务人员', text: '确认客户需求、账户目标与批次信息；核对指标口径和分析结论。' },
  { title: '运营与甲方', text: '审核文案、图片与修改意见；确认事实、表达和合规。' },
  { title: '优化师', text: '负责账户搭建、投放设置、素材上线与投放调整。' },
];

export const beikeModules = [
  { name: '内容参考', input: '租房、买房类帖子查询条件', processing: '小红书企业 API 查询，分析表现较好的标题与内容', output: '选题与模板迭代参考', boundary: '人工判断内容适用性' },
  { name: '规则与模板', input: '账户目标、内容需求、历史台账', processing: 'Skill 约束、Excel 模板读取、正文拆分与变量替换', output: '文案与封面 / 正文 / 尾图 Prompt', boundary: '确认需求、事实与合规' },
  { name: '生图执行', input: '分图 Prompt', processing: 'Requests 调用生图接口、超时控制、失败重试与文件下载', output: '本地图片文件', boundary: '人工审核图片；模型版本另核对' },
  { name: '飞书与台账', input: '文案、Prompt、账户分类与图片路径', processing: '应用认证、Bearer Token、字段映射、接口写入与 OpenPyXL 同步', output: '飞书记录与 Excel 台账', boundary: '当前代码写入图片路径，图片本体上传另核对' },
  { name: '数据处理', input: '投放 CSV、审核 Excel、商机与次留 CSV', processing: 'Pandas 类型转换、缺失处理、groupby 聚合、创意 ID 关联与指标重算', output: '带 AI 来源标记的汇总 Excel', boundary: '核对业务口径及多创意关联完整性' },
  { name: '可视化', input: '汇总 Excel', processing: 'Python、JSON 序列化、HTML / CSS / JavaScript 与 Chart.js', output: 'KPI、每日趋势、TOP10、AI / 人工比较', boundary: '文件式看板，不是实时数据平台' },
];

export const beikeArchitecture = [
  { title: '内容生产链路', text: '小红书 API 内容参考 → 结构化需求 → Skill / 模板 → 文案与生图任务 → 本地图片、飞书字段写入与 Excel 台账 → 运营及甲方审核 → 人工投放。' },
  { title: '数据分析链路', text: '投放、审核、商机与次留文件 → Pandas 清洗、聚合与关联 → 指标重算 → Excel 汇总 → Python + Chart.js 看板 → 人工复盘与下一轮规则调整。' },
];
