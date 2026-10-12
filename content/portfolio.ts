export type Delivery = '已实现' | '方案设计' | '后续规划';
export type Module = { id: string; title: string; status: Delivery; input: string; logic: string; output: string; tools: string; human: string };
export type Project = {
  slug: string; number: string; company: string; role: string; date: string;
  title: string; subtitle: string; categories: string[]; tags: string[];
  color: string; headline: string; summary: string; background: string;
  problems: string[]; responsibility: string; solution: string[];
  metrics: { value: string; label: string; note: string }[];
  modules: Module[]; implementation: { title: string; text: string; status: Delivery }[];
  validation: string; lessons: string[];
  assets: { title: string; path: string | null; caption: string }[];
};

export const profile = {
  name: '王冉冉', english: 'RANRAN WANG', role: 'AI 解决方案工程师 / FDE',
  city: '深圳', email: 'habaokhoa8@gmail.com', phone: '13116578669',
  portrait: '/ranran-ai-portfolio/assets/portrait.jpg', resume: '/ranran-ai-portfolio/assets/resume.pdf',
  siteUrl: 'https://ranran-ai-portfolio.fondrhino32.chatgpt.site',
  education: '北华航天工业学院', major: '国际经济与贸易', graduation: '2026 届本科',
};

export const projects: Project[] = [
  {
    slug: 'topify', number: '01', company: 'Topify.ai', role: 'FDE', date: '2026.07 — 2026.09',
    title: '小红书 AI 获客系统', subtitle: '把内容实验，连接到真实的业务线索。',
    categories: ['AI 工作流', '数据分析'], tags: ['账号矩阵', '内容实验', '业务归因'], color: 'blue',
    headline: '不只生产内容。\n更要知道，为什么有效。',
    summary: '从 0 到 1 搭建获客系统，以 15 个账号开展内容实验，完成数据抓取、快照、增量、动态基线与客资 / SDR 归因，并设计数据到内容生成的反馈。',
    background: '公司是美国斯坦福硅谷创业团队的深圳分部，面向中高端人群，通过小红书自然流获客。团队面临内容生产无序、数据分散与归因混乱的问题。我的工作是拆解小红书团队的业务障碍，设计并搭建 AI Native 获客系统，让内容生产、实验监控与业务线索有序连接，帮助企业获客。',
    problems: ['账号基础不同，绝对阅读量容易误导内容判断。', '生产与获客数据分散，难以追溯到具体内容环节。', '持续生产需要与实验采样、补测和人工获客同时进行。'],
    responsibility: '负责账号矩阵与内容实验、内容 Skill 化、指标体系，以及数据抓取、快照、增量、动态基线和客资 / SDR 归因的设计与落地；同时参与人工内容生产以保障获客。',
    solution: ['设置人工获客池、AI 测试池与 AI 观察池，固定账号分工，尽量控制人设和赛道变量。', '比较岗位冲击、逆袭增长、非常规打法、红利催促、硬核战绩五类内容，并管理有效样本与补测。', '用历史均读与相对基线倍数比较表现，设计抓取、快照、增量、归因与内容反馈链路。'],
    metrics: [
      { value: '15', label: '实验账号', note: '三个实验池组成账号矩阵' },
      { value: '136', label: '单月内容', note: '人工生产与 Skill 化共同支持' },
      { value: '500+', label: '私信', note: '对应项目单月获客记录' },
      { value: '51', label: '客资', note: '客资不等于成交客户' },
    ],
    modules: [
      { id: 'experiment', title: '账号矩阵与内容实验', status: '已实现', input: '15 个账号、5 种内容类型', logic: '按人工获客 / AI 测试 / AI 观察分池；固定账号分工并管理有效样本。', output: '内容实验记录与分组结果', tools: '内容 Skill、实验台账', human: '确认账号分工、样本有效性与补测安排。' },
      { id: 'snapshots', title: '采集与每日快照', status: '已实现', input: '笔记表现及账号数据', logic: '按日期保留快照，通过前后快照计算单日增量；项目本人确认已完成，抓取方式和运行截图待补充。', output: '按账号 / 笔记 / 日期组织的快照与增量', tools: '数据抓取与每日快照；具体工具待补充', human: '检查缺失、口径变化和采集异常。' },
      { id: 'baseline', title: '动态基线评估', status: '已实现', input: '历史均读、内容阅读量、有效样本', logic: '以相对账号基线归一化排名，减少账号基础差异造成的偏差。动态基线已完成；具体更新窗口和异常阈值待补充。', output: '动态账号基线、相对倍数与类型比较', tools: '实验指标与分析台账', human: '判断有效样本，避免把描述性差异解释为统计显著性。' },
      { id: 'attribution', title: '客资 / SDR 关联', status: '已实现', input: '内容记录、客资与 SDR 记录', logic: '将客资与 SDR 记录关联到内容，支持获客归因。项目本人确认已完成；具体映射规则、归因粒度和脱敏截图待补充。', output: '获客归因与内容反馈建议', tools: '业务数据关联；具体工具待补充', human: '确认线索来源、重复客资与归因可靠性。' },
      { id: 'feedback', title: '反馈内容生成', status: '方案设计', input: '类型表现与归因结论', logic: '设计将实验结论反哺下一轮内容；内容生产已 Skill 化，自动反馈闭环待确认。', output: '下一轮选题与内容候选', tools: '内容生成 Skill', human: '审核内容真实性、品牌表达与发布策略。' },
      { id: 'future', title: '私信自动化', status: '后续规划', input: '未来的互动与私信场景', logic: '规划私信自动化和互动模拟，未作为已交付功能。', output: '待验证的自动化路线', tools: '尚未确定', human: '需先确认平台规则、业务需求与人工接管机制。' },
    ],
    implementation: [
      { title: '三池实验，五类内容', text: '人工获客池保障业务，AI 测试池验证类型，AI 观察池辅助观察。每个账号固定分工，减少人设与赛道变化对比较的干扰。未提供各池数量，因此不补造分配。', status: '已实现' },
      { title: '历史均读与相对基线', text: '相对基线倍数 = 内容阅读量 ÷ 对应账号历史均读。先按账号归一化，再比较内容类型。历史均读为 0 时不计算倍数；实际窗口、加权方式和异常排除规则待补充。', status: '已实现' },
      { title: '动态基线与客资归因', text: '数据抓取、每日快照、单日增量、动态基线、客资 / SDR 归因已完成。动态基线的更新窗口、异常阈值、SDR 映射规则及实际运行截图待补充；私信自动化仍属于后续规划。', status: '已实现' },
    ],
    validation: '简历记录红利催促型与非常规打法型相对基线分别为 1.33 倍与 1.19 倍，岗位冲击型偏弱。原始样本量、置信区间和明细未提供，因此呈现为项目观察结论，不声称统计显著。',
    lessons: ['把账号基础纳入评估，内容比较才更有解释力。', '客资质量与归因可信度，比单一阅读量更接近业务目标。', '先验证实验与数据口径，再逐步连接自动化模块。'],
    assets: [
      { title: '实际工作流 / 飞书截图', path: null, caption: '待补充脱敏截图；当前架构为业务逻辑示意。' },
      { title: '实验结果与归因明细', path: null, caption: '待补充有效样本数、分组台账和指标口径。' },
    ],
  },
  {
    slug: 'beike', number: '02', company: '北京秦点科技', role: 'AI 管培生 / FDE', date: '2026.02 — 2026.07',
    title: '贝壳广告内容生产与数据分析', subtitle: '把业务规则变成工作流，把投放数据变成迭代依据。',
    categories: ['AI 工作流', 'AI 自动化', '数据分析'], tags: ['Claude Code', 'Skill 迭代', '人工审核'], color: 'mint',
    headline: '从一篇图文，\n到一个可迭代的流程。',
    summary: '围绕激活、注册、搜索三类广告账户，将内容策略结构化为 Skill，借助 Claude Code 跑通分批图文生成、台账去重与飞书字段写入；以笔记和创意两类关联键处理投放、审核、商机与次留数据，交付 SOP、公式与 HTML 看板模型，明确人工审核和后续自动化边界。',
    background: '在业务中，甲方和业务人员沟通内容以及数据 KPI 要求。业务人员需要撰写相应的 brief 和策略，并按数量和质量要求生产内容，再将月 / 周 KPI 汇总后交付甲方。整个流程存在多个可由 AI 优化的环节，部分重复性任务可直接由 AI 替代人工执行。',
    problems: ['区分 AI 可优化的需求收集、策略初稿、内容生产、数据处理、分析建议与报告生成环节。', '识别必须保留人工的客户关系维护、平台审核应对与账户冷启动调优环节。'],
    responsibility: '梳理业务链路与改造机会，设计账户分类、内容结构、批次约束和审核点；借助 Claude Code 组织生成、去重、飞书映射与图片流程。整理多源数据 SOP 与指标公式，完成看板模型和分层需求文档，并将运行条件、已知问题与未验证方案写入交接材料。',
    solution: ['建立 3 账户 / 3 项目 / 3 业务 / 6 笔记类型的分类和中间数据格式。', '用结构化输入、AI 生成、飞书字段映射和分阶段人工审核组织生产。', '合并投放、审核、商机和次留等数据，通过笔记 ID / creative_id 关联，持续复盘与 A/B 测试。'],
    metrics: [
      { value: '12', label: 'Skill 版本', note: '内容生产工作流的迭代记录' },
      { value: '5', label: '图片模板', note: '六块结构另指文案组成' },
      { value: '15×', label: '内容生产效率', note: '约 1 篇/h → 15 篇/h，非整体业务效率' },
      { value: '分阶段', label: '人工审核', note: '生成、入库与投放保留人工边界' },
    ],
    modules: [
      { id: 'brief', title: '业务输入与批次规划', status: '已实现', input: '账户、项目、业务、笔记类型与内容规则', logic: '每批 5 篇，先列账户、子类型、句式、句尾和选题等规划，检查比例、多样性与重复，再开始生成。', output: '通过约束检查的批次规划', tools: 'Claude Code、内容 Skill v5.6、标题台账', human: '先确认坐标、账户与标题，再允许继续写作。' },
      { id: 'generation', title: '六块文案与模板选择', status: '已实现', input: '批次规划、历史台账、图片 Prompt 库', logic: '按六块正文结构生成内容并核对台账；写入脚本按标题、子类型与账户选取 5 类图片模板，拆分正文并替换占位符。', output: '文案候选与组装后的生图 Prompt', tools: 'Claude Code、内容 Skill、模板选择与正文拆分脚本', human: '审核事实、重复度、表达、CTA 与合规；Skill 自查不替代人工。' },
      { id: 'mapping', title: '飞书写入与本地生图', status: '已实现', input: '确认后的文案、映射字段与图片任务', logic: '文案和 Prompt 写入个人飞书工作表并同步本地备份；核对后调用生图流程，图片保存在本地目录。审核后人工补图并复制到客户工作链。', output: '飞书内容记录、台账与待审核图片', tools: '飞书写入脚本、本地 Excel、标题台账、生图 API 脚本', human: '写入后暂停核对，确认后才生图；图片审核与客户工作链同步保留人工。' },
      { id: 'delivery', title: '人工投放与文件获取', status: '已实现', input: '客户审核通过的图文', logic: '业务人员上线投放；人工导出聚光数据、获取审核表及客户回传商机 / 次留文件。该节点描述实际人工业务衔接，不代表自动投放或定时采集。', output: '多账户投放 CSV、审核表与业务回传文件', tools: '聚光后台、飞书表格、客户回传文件', human: '客户审核、账户操作、预算决策、下载权限与数据导出由人负责。' },
      { id: 'cleaning', title: '来源标注与指标重算', status: '已实现', input: '多源文件、数据整理 SOP 与公式表', logic: '笔记 ID 标注人工 / AI 来源；基础量汇总后重算比率和成本，creative_id 对应商机与次留，区分新房、二手房与租房。现金消耗口径与后端激活定义按执行文档核对。', output: '全量汇总表与可供复盘的指标', tools: 'AI 辅助数据处理、SOP、公式表、Excel 模板', human: '核对关联粒度与口径，自查输出；不将分层需求文档等同生产数仓。' },
      { id: 'review', title: '看板模型与人工复盘', status: '已实现', input: '分析汇总、内容来源与业务指标', logic: '交付 HTML 看板模型与需求说明，支持指标呈现和 AI / 人工比较；结合复盘调整内容规则。未确认实时接入，静态页面数值不能单独证明实验效果。', output: '看板模型、规则调整与下一批任务依据', tools: 'HTML 看板文件、需求文档、Skill 规则', human: '审核实验可比性和客户修改意见，回写规则；自动闭环与客户 Bot 未交付。' },
    ],
    implementation: [
      { title: 'Skill 与分批生产', text: '已核对 v5.6 的批次规划、六块文案与合规检查。5 类图片模板由写入脚本按规则选择；12 版迭代数量依据简历，不推导为 12 份可运行版本。', status: '已实现' },
      { title: '多源关联与口径重算', text: '笔记 ID 区分 AI / 人工，creative_id 关联后端业务；先求和基础量再重算比率，以现金消耗计算成本，购房与租房商机分别处理。', status: '已实现' },
      { title: '四层数据结构', text: 'ODS / DWD / DWS / ADS 已形成字段、清洗、汇总与展示需求文档，未据此认定生产数仓或自动 ETL 已部署。', status: '方案设计' },
    ],
    validation: '简历记录人工约 8 小时生产 8 篇，AI 辅助约 1 小时 15 篇，约 15 倍仅指内容生产效率。交接文档证明生产路径、规则与交付范围，不是新的效率测量。简历记录部分核心 A/B 指标优于人工；看板模型同时呈现不同指标的优劣，但缺少完整原始样本与统一测试说明，不新增百分比改善或统计显著结论。',
    lessons: ['同质化不能只靠提示词去重：批次规划、历史台账、模板库与人工审核需要共同约束。', '口径比图表更重要：笔记与创意粒度、现金消耗与平台消费、前端与后端激活必须分开说明。', '能在本人环境跑通不等于可直接交接：路径、凭据和 Agent 差异需重新验证，拆分 Skill 先测试再替换。'],
    assets: [
      { title: '图文生成与 Skill 版本', path: null, caption: '待补充脱敏的实际生成内容和版本差异。' },
      { title: 'HTML 看板 / A/B 结果', path: null, caption: '待补充看板截图、测试样本和人工基准表。' },
    ],
  },
  {
    slug: 'crossborder', number: '03', company: '廊坊光辉熠熠电子商务', role: '独立产品设计与 AI 辅助开发', date: '2025.09 — 2026.02',
    title: '跨境选品数据分析工具', subtitle: '把三个小时的整理，变成十五分钟的判断。',
    categories: ['独立产品', '数据分析', 'AI 自动化'], tags: ['CSV 分析', 'AI 辅助开发', '报告生成'], color: 'peach',
    headline: '减少重复操作。\n把时间，留给选品判断。',
    summary: '针对大量 ABS 搜索数据的日常分析需求，通过 AI 辅助开发实现 CSV 导入、自动对比分析和报告生成，缩短单日分析耗时。',
    background: '跨境运营每日面对大量 ABS 搜索数据，原始人工选品流程冗杂，单日分析耗时超过 3 小时。需要把数据整理和重复比较转化为可复用工具。',
    problems: ['大批数据需要反复导入、整理与对比。', '人工流程耗时，分析输出难以保持一致。', '工具需要服务选品决策，而不替代业务判断。'],
    responsibility: '识别选品需求，设计 CSV 输入和分析结果，通过 GPT / Gemini 形成方案、Claude 优化、Cursor 调试，完成工具功能并用于运营分析。',
    solution: ['将 CSV 数据导入、对比分析和报告生成整合为一个操作流程。', '通过多轮 Prompt 迭代和 AI 辅助开发调整方案并调试。', '让自动化处理承担重复操作，选品与市场判断保留人工决策。'],
    metrics: [
      { value: '3h+', label: '原人工耗时', note: '单日选品数据分析流程' },
      { value: '15min', label: '工具辅助耗时', note: '同一业务场景的单日分析' },
      { value: 'CSV', label: '数据入口', note: '导入、对比分析与报告输出' },
      { value: '$6,000+', label: '辅助业务成果', note: '美国站首月销售额，非工具直接创造' },
    ],
    modules: [
      { id: 'csv', title: 'CSV 数据导入', status: '已实现', input: 'ABS 搜索数据 CSV', logic: '将业务数据导入工具。原始字段表与大小限制待补充。', output: '可分析的数据集合', tools: 'AI 辅助开发的 CSV 工具', human: '确认文件来源、周期与完整性。' },
      { id: 'prepare', title: '数据处理', status: '已实现', input: '导入的数据', logic: '对输入数据执行分析前处理；原始代码与具体清洗规则未提供，不虚构实现细节。', output: '用于对比的数据', tools: 'GPT / Gemini 方案、Claude 优化', human: '检查字段解释和异常记录。' },
      { id: 'compare', title: '自动对比分析', status: '已实现', input: '处理后的搜索数据', logic: '自动执行选品对比分析。排序权重与业务阈值待补充。', output: '候选与分析结果', tools: '分析工具、Cursor 调试', human: '结合需求、竞争与供应情况判断。' },
      { id: 'report', title: '报告生成', status: '已实现', input: '对比结果', logic: '将分析结果整理为报告，减少重复整理。', output: '选品分析报告', tools: '报告生成功能', human: '核对结论与原始数据的一致性。' },
      { id: 'decision', title: '人工选品决策', status: '已实现', input: '分析报告与市场信息', logic: '业务人员基于分析结果确定选品，后续销售还受运营、价格、产品等因素影响。', output: '业务选品与运营决策', tools: '业务判断', human: '最终决策由人负责；销售额不直接归因工具。' },
    ],
    implementation: [
      { title: '围绕真实需求做工具', text: '从日常耗时操作定义产品需求，将 CSV 导入、自动对比与报告生成作为核心路径。原始 PRD、字段说明与产品截图待补充。', status: '已实现' },
      { title: '多模型辅助开发', text: 'GPT / Gemini 形成方案，Claude 优化，Cursor 调试。这里呈现的是 AI 辅助开发能力，不代表独立掌握完整技术栈。', status: '已实现' },
      { title: '演示与原产品边界', text: '下方演示是为作品集重新构建的交互示意，使用合成样例，不是原项目系统，不复现未提供的分析算法。真实产品演示与原始代码待补充。', status: '方案设计' },
    ],
    validation: '单日分析由 3 小时以上缩短至约 15 分钟，为项目记录中的效率结果，未提供重复测量明细。美国站首月销售额 6,000+ 美元属于工具辅助下的业务成果，不能视为工具直接创造的销售额。',
    lessons: ['从高频耗时步骤开始，能更快找到可验证的产品价值。', 'AI 辅助开发需要持续核对需求、输出与实际使用。', '效率变化可以单独观察，销售结果需要审慎归因。'],
    assets: [
      { title: '原工具界面 / 操作录屏', path: null, caption: '待补充原项目截图或脱敏操作视频。' },
      { title: '真实报告与字段说明', path: null, caption: '待补充输入样例与真实生成报告。' },
    ],
  },
];

export const categories = ['全部', 'AI 工作流', 'AI 自动化', '数据分析', '独立产品'];
export const aiCommunityIntro = '热爱 AI，也愿意走进真实的交流现场。曾参与 ha7ch 大会、AI 原点社区「硅基朋友请回答」、FDE 小社群线下沙龙，以及美国斯坦福硅谷创业项目。在与开发者和创业者的交流中，持续关注 AI 前沿，探索技术如何转化为有价值的产品与业务实践。';
export const skills = [
  { group: 'AI 工具与辅助开发', items: [
    { name: 'Claude', slug: 'beike', detail: 'Claude Code 辅助搭建图文批量生成工作流，迭代 Skill 与模板。' },
    { name: 'GPT', slug: 'crossborder', detail: '跨境 CSV 工具的方案与 Prompt 迭代。' },
    { name: 'Gemini', slug: 'crossborder', detail: '参与跨境分析工具的方案探索与 Prompt 迭代。' },
    { name: 'Cursor', slug: 'crossborder', detail: '跨境分析工具的 AI 辅助调试。' },
    { name: 'Coze', slug: null, detail: '简历中的职业规划 AI 助手 MVP；实际截图、工作流与交付范围待补充。' },
    { name: 'Codex', slug: null, detail: '本作品集的 AI 辅助开发工具；不回填为历史项目技术。' },
    { name: 'Obsidian', slug: null, detail: '个人工具清单；具体使用方式与项目应用尚未展开。' },
    { name: 'Hermes', slug: null, detail: '个人工具清单；具体产品版本与应用案例尚未展开。' },
    { name: 'Git / GitHub', slug: null, detail: '代码版本管理与项目仓库维护；具体仓库链接与协作案例待补充。' },
  ] },
  { group: 'AI 解决方案', items: [
    { name: 'Prompt Engineering', slug: 'beike', detail: '将账户目标、批次规划、六块文案结构与合规约束写入 Skill；5 类图片模板通过规则选择与占位符替换组装 Prompt。' },
    { name: 'AI Workflow', slug: 'beike', detail: '结构化输入、生成、飞书映射、人工审核与反馈。' },
    { name: '需求分析', slug: 'crossborder', detail: '从人工选品分析的耗时步骤定义工具需求。' },
    { name: '方案设计', slug: 'topify', detail: '账号实验、相对基线与客资归因反馈方案。' },
    { name: 'PRD', slug: 'beike', detail: '梳理业务分类、指标口径和需求文档。' },
  ] },
  { group: '数据分析', items: [
    { name: 'Excel', slug: 'beike', detail: '对应多源业务表格整理与汇总；具体 Excel 功能和文件待补充。' },
    { name: 'CTR / CVR', slug: 'beike', detail: '投放 A/B 复盘；CVR 需按实际转化事件确定口径。' },
    { name: 'CPA', slug: 'beike', detail: '以转化成本参与效果比较，和 7 日商机成本分开观察。' },
    { name: 'ACoS / TACoS', slug: 'crossborder', detail: '简历列出的跨境业务指标知识；具体应用案例未提供，待补充。' },
    { name: 'SPSS', slug: null, detail: '简历列出的数据工具；项目使用依据未提供，待补充案例。' },
  ] },
];

export const more = [
  { title: '搜狐新媒体运营', label: '内容与用户理解', text: '新媒体运营实习，简历记录涨粉 3.3w+。具体周期与个人贡献明细待补充。' },
  { title: '校园销售负责人', label: '团队与业务协作', text: '团队销售额 118 万，为团队成果，不作为个人独立创造的销售额。' },
  { title: '职业规划 AI 助手', label: 'Coze MVP', text: '探索 AI 产品原型。实际界面、用户反馈与功能范围待补充。' },
];
