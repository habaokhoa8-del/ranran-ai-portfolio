import type { Module } from './portfolio';
import { beikeModules, beikeArchitecture } from './beike-refinement';

// Chapter-specific copy complements the shared project facts without repeating them.
export type CaseNarrative = {
  business: { title: string; before: string; target: string; analysis?: string; automation?: { ai: { title: string; text: string }[]; manual: string[] } };
  ai: { title: string; approach: string; decisions?: { title: string; text: string }[]; roles?: { title: string; text: string }[]; modules?: Module[] };
  data: { title: string; steps: { title: string; text: string }[]; definitions?: { name: string; formula: string; boundary: string }[]; note?: string };
  product: { title: string; output: string; boundary: string; next: string; delivery?: { title: string; status: '已实现' | '方案设计' | '后续规划'; text: string }[] };
  evidence: { chapter: 'context' | 'solution' | 'results' | 'implementation'; title: string; path: string | null; caption: string }[];
  results?: { title: string; text: string }[];
  loop?: string[];
  moduleDesign?: typeof beikeModules;
};

export const caseNarratives: Record<string, CaseNarrative> = {
  topify: {
    loop: ['每日抓取账号与笔记数据', '生成每日数据快照', '计算单日新增量', '更新动态账号基线', '识别数据异常与内容问题', '关联客资与 SDR 结果', '归因到选题、封面、Hook、正文、CTA', '反哺下一轮内容生成'],
    results: [
      { title: 'Agent 与执行脚本', text: '完成一个小红书批量数据导出 Agent、一个批量数据分析 Agent 及配套脚本，以及桌面批量数据识别脚本，支撑数据获取与分析处理。' },
      { title: '内容与账号 Skill', text: '沉淀内容 Skill 与账号检测 Skill，将内容生产规则和账号检查流程组织为可复用的任务。' },
      { title: '实验与归因知识沉淀', text: '建立实验台账与归因链路分析飞书知识库，记录内容实验、数据关联与分析逻辑，为后续复盘和迭代提供依据。' },
    ],
    business: { title: '先走进业务，再把问题转化为 AI 系统。', before: '内容生产、账号表现与线索记录分散，单看阅读量很难判断哪类内容真正值得继续做。', target: '拆解小红书团队的获客问题，用 AI Native 系统建立有序的内容实验、数据监控与线索归因，服务企业自然流获客。', analysis: '先与公司上下游沟通：从 CEO、CTO、COO 和部门负责人了解业务目标、技术条件与协作边界，再与小红书内容运营团队专员核对一线流程。随后亲自上手具体业务，识别内容生产与归因问题，设计 AI 化方案，将业务规则拆成可处理的结构化任务，再通过测试、反馈与迭代验证方案。' },
    ai: { title: '把内容生产与数据回收连接起来。', approach: '内容生产以 Skill 为载体，实验数据经过采集、快照、增量与归因形成反馈依据。自动反馈到内容生成仍处于方案设计，私信自动化属于后续规划。' },
    data: { title: '比较内容，也追踪线索。', steps: [
      { title: '实验分组', text: '15 个账号分为人工获客池、AI 测试池、AI 观察池，固定分工；比较岗位冲击、逆袭增长、非常规打法、红利催促、硬核战绩五类内容。各池数量与有效样本明细待补充。' },
      { title: '快照与增量', text: '按账号、笔记、日期保留每日快照，通过前后快照计算单日增量，检查缺失与采集异常。实际抓取方式与运行记录待补充。' },
      { title: '动态基线与归因', text: '结合账号历史均读比较内容表现，再关联客资与 SDR。动态基线和归因已完成；更新窗口、异常阈值与映射规则待补充，不把简单倍数演示等同于完整算法。' },
    ] },
    product: { title: '留下可持续运行的实验系统。', output: '账号分工、内容 Skill、实验台账与归因链路共同构成后续迭代的基础，而不是一次性的内容生成。', boundary: '人员仍负责样本有效性、补测安排、内容真实性与线索来源核对。自动生成建议不等于自动发布或自动获客。', next: '补齐实际运行材料与指标口径；验证内容反馈方案，私信自动化不计入本次交付。' },
    evidence: [
      { chapter: 'solution', title: '获客归因中台 · Demo 系统', path: '/ranran-ai-portfolio/assets/topify-demo.png', caption: '本人制作的 Demo 系统截图，展示账号监控、笔记诊断、客资 / SDR 关联与内容反馈的整体设计。截图中的数字和流程状态为 Demo 展示，不作为实际业务成果或生产交付状态的证明。' },
    ],
  },
  beike: {
    results: [
      { title: '生产效率：从 1 篇 / h 到 15 篇 / h', text: '原人工流程约 1 小时完成 1 篇图文；工具辅助后，约 1 小时产出 15 篇图文并进入人工审核，内容生产速率约提升 15 倍。按 80 套图文（每套 4 张，共 320 张）、15 套 / h 折算，文案与作图约需 5.3 小时；原人工流程约需 80 小时，相当于 10 个 8 小时工作日。5.3 小时不包含人工审核，也不作为返工、投放或完整交付周期的耗时。' },
      { title: '成本对照：112 元生图费用与约 3 万元人工成本', text: '按本项目记录，100 张图片生图费用约 35 元，即约 0.35 元 / 张；80 套共 320 张，生图费用测算约 112 元。原人工方案在该项目 10 天内的实际人工成本约 3 万元，并非月薪。两者分别是生图调用费用和人工方案成本，体现重复生产环节的降本空间，但不是同口径的项目总成本比较：文案调用、重试、工具及人工审核费用需另计，不能将差额直接认定为净节省。' },
      { title: '质量验证：满足交付要求，再比较投放表现', text: '以甲方交付标准为前提，部分核心 A/B 测试指标优于人工基准。这表明 AI 工作流在保留运营、甲方审核与人工投放决策的条件下，具备承接小型项目内容生产的能力；不等同于所有指标均改善，也不代表端到端无人值守交付。' },
      { title: '功能验证：实现机制与测试记录分开', text: '代码已确认包含接口失败重试、请求超时、字段写入、指标分母检查与看板生成。完整的故障注入、回归测试和运行通过率未提供，不将代码机制当成测试通过证明。后续优先核对缺失字段、空文件、零分母以及一篇笔记对应多个创意时的关联完整性。' },
    ],
    business: { title: '从完整业务链路，识别 AI 降本提效的机会。', before: '策略与客户需求 → 优化师搭建账户 → 内容选题与图文制作 → 客户审核 → 人工上线投放 → 导出数据 → 整理复盘。', target: '降本：将可 AI 化的环节 AI 化，以固定 Token 用量预算替代对应的重复人工投入。提效：目标是让 AI 提高整个生产链的效率，释放业务人员时间，帮助公司获得承接更多业务的时间与产能。', analysis: '我先梳理完整业务链路，识别需求信息残缺、不同节点格式不通、客户与内部数据口径不一致等障碍。由此提出需求结构化、统一中间格式与人工决策边界，并结合授权、接口和业务经验确定推进顺序。', automation: {
      ai: [
        { title: '客户需求收集', text: '用结构化表单或 AI Bot 将客户需求转成标准字段，辅助识别意图、更新需求并提供账户策略建议；首次建立信任保留人工。' },
        { title: '策略报告生成', text: '给定客户行业、KPI 与竞品信息，生成策略报告初稿；先固定输入格式，再由业务人员确认。' },
        { title: '内容批量生产', text: '批量生成图文素材，替代重复写作与制作工作；当前内容生产主线已跑通。' },
        { title: '数据处理与指标计算', text: '以固化 SOP 整理数据，自动计算激活成本、商机转化率等指标；文件输入后的处理流程已跑通。' },
        { title: '数据分析与迭代建议', text: '分析内容方向的涨跌与调整建议，以看板串联客户数据和内容建议，分别服务客户查看与内部优化。' },
        { title: '投放日报 / 周报生成', text: '将已整理数据按固定口径与模板生成报告，减少重复汇总和撰写。' },
      ],
      manual: ['客户关系维护与情绪承接', '平台审核应对', '账户冷启动期人工调优'],
    } },
    ai: { title: '从整体业务方案，到两条可执行链路。', approach: '整体方案覆盖需求识别、账户搭建、素材生成、审核投放与数据反馈。已运行部分采用 Python 脚本与文件式数据流水线：生产侧组织 Skill、模板、生图接口与飞书字段写入；分析侧处理投放、审核、商机与次留文件，生成汇总报表和看板，由业务人员审核并调整下一轮规则。企微 Bot 和自动策略反馈单独标注为方案设计。', decisions: [
      { title: '内容参考与规则组织', text: '调用小红书企业 API 查询租房、买房类帖子的表现与标题内容，为选题提供参考。通过 Claude Code 将账户目标、内容分类与审核规则组织为 Skill，使用 Excel 图片模板、正文拆分和变量替换构造分图 Prompt。' },
      { title: '生图接口与执行控制', text: 'Python Requests 调用生图服务，按封面、正文与尾图组织任务；脚本设置请求超时、最多 5 次尝试及失败跳过，并下载图片至本地。已核对版本通过第三方接口调用，具体模型标识未在请求中声明；该流程为顺序执行，不包装为异步并发系统。' },
      { title: '飞书认证、字段映射与台账', text: '调用飞书开放平台获取 tenant_access_token，以 Bearer Token 认证读写表格；映射账户、业务类型、文案、AI 来源与 Prompt，写入失败最多尝试 3 次，并用 OpenPyXL 同步 Excel 台账。当前核对脚本写入图片本地路径，图片本体自动上传的版本另待核对。' },
      { title: '分析与可视化链路', text: '投放 CSV、审核 Excel、商机和次留 CSV 经 Pandas 类型转换、缺失处理、分组聚合与关联后输出 Excel；Python 将趋势数据 JSON 序列化嵌入 HTML，由 Chart.js 展示 KPI、每日趋势、TOP10 与 AI / 人工描述性比较。这里没有数据库、实时采集或 SQL 数据管线。' },
    ], roles: [
      { title: '甲方需求识别 Agent', text: '识别企微沟通中的业务目标、内容要求与 KPI，将需求转为标准字段；不明确的信息交由人工确认。' },
      { title: '需求拆解与方案 Agent', text: '根据确认后的甲方需求，拆解策略、账户目标、内容方向与验收要求，为优化师和内容环节提供统一依据。' },
      { title: '结构化任务 Agent', text: '将原本模糊的业务流程拆成 AI 可处理的任务，明确每一步的输入、规则、输出以及人工确认节点。' },
      { title: 'Token 优化 Agent', text: '针对 Token 消耗过高的问题，优化 Prompt、上下文与调用策略，在内容质量和审核要求不变的前提下控制调用成本。' },
      { title: '安全负责 Agent', text: '围绕数据安全、权限管控与客户信息保护设置约束；敏感信息处理和访问授权由人工负责最终确认。' },
    ], modules: [
      { id: 'brief', title: 'AI · 企微需求识别', status: '方案设计', input: '甲方沟通、内容要求与 KPI', logic: 'AI Bot 识别意图并提取标准字段，标记缺失与冲突项。', output: '结构化需求与待确认事项', tools: '企微 AI Bot 接入方案', human: '客户授权、需求确认与关系维护由人工负责；Bot 接入尚未交付。' },
      { id: 'generation', title: '人工 · 审核与账户搭建', status: '已实现', input: '已确认的需求与策略', logic: '业务人员确认目标，优化师完成账户搭建及投放设置；这是现有人工业务环节。', output: '账户目标、内容任务与投放约束', tools: 'Brief、策略与投放平台', human: '账户操作、预算和平台合规由优化师负责，不计为 AI 自动化交付。' },
      { id: 'mapping', title: 'AI + 人工 · 素材与飞书', status: '已实现', input: '账户目标、需求与内容 Skill', logic: '以 Skill 和模板生成文案、生图任务并映射飞书字段；在本人环境跑通，个人工作表再人工复制至客户工作链，图片本地保存并人工补入。', output: '待审核图文、飞书记录与台账', tools: 'Claude Code、Skill、Prompt 模板、飞书、Excel', human: '运营与甲方审核事实、表达和合规；客户环境接入与图片回填保留人工。' },
      { id: 'delivery', title: '人工 · 审核与投放', status: '已实现', input: '图文素材与审核意见', logic: '根据运营与甲方反馈调整素材，确认后人工上线投放，并补齐笔记与创意标识。', output: '已投放素材与关联标识', tools: '飞书审核工作表、投放平台', human: '最终发布、平台审核应对和冷启动调优由人工负责。' },
      { id: 'cleaning', title: 'AI + 人工 · 数据分析', status: '已实现', input: '人工获取的投放、商机与次留文件', logic: '按 SOP 清洗、关联、汇总并计算业务指标，保留 AI / 人工来源用于对比。自动接入数据尚未交付。', output: '指标汇总与内容表现分析', tools: '数据处理 SOP、公式表、汇总模板', human: '人工获取数据、确认口径并核对异常；不把文件处理称为实时 API 接入。' },
      { id: 'review', title: 'AI + 人工 · 策略反馈', status: '方案设计', input: '投放分析、审核反馈与业务目标', logic: '整体方案将分析转为修改策略，反馈下一轮内容方向；现有人工复盘与规则回写作为基础，自动反馈闭环仍需验证。', output: '下一轮内容策略与 Skill 调整建议', tools: '分析报告、Skill 迭代方案', human: '业务人员审核建议，确认规则更新与下一轮投放决策。' },
    ] },
    data: { title: '用 Pandas 关联业务，再用看板验证结果。', steps: [
      { title: '文件接入与来源检查', text: '接收多账户聚光创意投放 CSV、笔记审核表、客户回传商机表与次留表，并以 SOP 和公式表作为规则依据。检查账户文件是否齐全、空文件与重复导入，记录来源、账户、批次和导入时间。源数据仍需人工下载或获取，不是定时 API 采集。' },
      { title: '笔记 ID 标注内容来源', text: '先以笔记 ID 将审核表中的人工 / AI 撰写信息带入投放数据，保留来源标记；同笔记的消费、展现、点击、激活和注册等基础量求和，再重算比率与成本，不能直接相加或沿用各行的成本字段。' },
      { title: '创意 ID 关联后端业务数据', text: '商机与次留按 creative_id 对应后再筛选和计算：新房、二手房商机合并为购房商机，租房单独分析，次留的 xinzeng 对应后端激活。内容分析用笔记粒度，后端关联用创意粒度；汇总时必须保留映射，避免错配或重复累计。商机采用项目规定的非 UV 口径。' },
      { title: '用质量指标诊断内容，而非只追 CTR', text: '同时看点击、激活 / 注册转化与商机质量。高点击低转化可能只是吸引了信息浏览者；租房占比偏高则可能偏离购房目标。Skill 将账户目标、选题与场景情绪坐标纳入判断，为下一批内容提供调整依据；不声称这已形成无人工干预的实时反馈。' },
    ], definitions: [
      { name: 'CTR / 激活 CVR', formula: '点击 ÷ 展现；APP 激活 ÷ 点击', boundary: '汇总基础量后重算；前端 APP 激活不等同于后端激活。' },
      { name: '激活 / 注册成本', formula: '现金消耗 ÷ APP 激活；现金消耗 ÷ 注册', boundary: '按已运行 SOP 采用现金消耗口径；业务折算系数不公开。' },
      { name: '7 日商机成本', formula: '现金消耗 ÷（7 日新房商机 + 7 日二手房商机）', boundary: '先按创意 ID 对应再汇总，不把租房商机加入购房商机分母。' },
      { name: '租房占比', formula: '当日租房商机 ÷ 当日全部房产商机', boundary: '当日口径，不混用 7 日租房与当日总量。' },
      { name: '商机转化率', formula: '7 日购房商机 ÷ 后端激活', boundary: '后端激活来自次留表 xinzeng；不同于激活 CVR。' },
    ], note: '以上为交接 SOP 与公式表中的实际业务口径摘要。四层需求文档另有展示与汇总定义，迁移时仍需统一成本分子、转化定义和聚合方式，不能把需求设计当成已验证的数据管线。' },
    product: { title: '交付可接手的流程，也说明不能直接复用的部分。', output: '除简历记录的 12 版 Skill 迭代外，交接包包含已跑通的 v5.6 规则、5 类图片 Prompt、标题台账、笔记汇总表、飞书写入说明、生图脚本、数据处理 SOP、公式表、全量汇总模板、HTML 看板模型与看板需求文档。六块结构指文案组成，不与五类图片模板混为一谈。', boundary: '调试阶段先确认批次坐标、账户与标题，再审核正文；写入飞书后暂停核对，确认后才生图。图片与客户修改意见经人工审核，修改后的规则回写 Skill 红线或黑名单。投放、权限授权与最终效果判断由人负责。', next: '优先验证换设备与换 Agent 的运行一致性、拆分 Skill 的回归测试，以及数据口径一致性。再评估自动数据接入与客户侧 Bot；这些不能因存在排期或设计文档就计入已完成交付。', delivery: [
      { title: '内容生产与文件数据分析', status: '已实现', text: '交接记录确认在本人 Claude 环境跑通图文流程，完成数据处理 SOP 和汇总模板。飞书先写入个人工作表，再人工复制至客户工作链；不是直接接入客户生产环境。' },
      { title: 'HTML 看板模型与需求文档', status: '已实现', text: '交接包已有 HTML 看板文件及 v2 需求表。页面提供指标、内容和 AI / 人工比较的呈现；文件存在不等于实时数据接入或上线生产，页面数值不直接作为新 A/B 证据。' },
      { title: '生成 / 迭代 Skill 拆分', status: '方案设计', text: '为降低长 Skill 的修改成本，拆成生成与迭代两个 Markdown 文件；交接文档明确尚未用拆分版本测试，不将其称为稳定版本。' },
      { title: 'ODS → DWD → DWS → ADS', status: '方案设计', text: 'v2 需求文档定义原始保留、明细清洗、维度汇总与看板应用四层，包含字段、聚合及异常规则。属于分层结构设计，不声称已经部署数据库、数仓或完整生产 ETL。' },
      { title: '客户 Bot 与端到端自动化', status: '后续规划', text: '客户 Bot、自动导出数据、账户投放操作与无人值守反馈闭环尚未确认交付；客户接入依赖授权与接口沟通，投放平台自动化仍需调研。' },
    ] },
    evidence: [
      { chapter: 'context', title: '整体业务链路与交付范围', path: '/ranran-ai-portfolio/assets/beike-business-map.png', caption: '依据本人《AI闭环链路图》与交接资料整理的方案图截图；已校正交付状态，非原系统运行截图。原始文件保持不变。' },
    ],
  },
  crossborder: {
    business: { title: '把时间留给选品，而不是重复整理。', before: '导入 ABS 搜索数据 → 人工整理字段 → 逐项比较 → 汇总分析结论。', target: '将高频操作整合为 CSV 导入、自动对比和报告输出；工具提供分析依据，选品判断仍由业务人员负责。' },
    ai: { title: '用 AI 辅助开发，把需求变成工具。', approach: 'GPT / Gemini 帮助形成方案与 Prompt，Claude 优化，Cursor 调试。AI 在这里辅助开发，并不意味着原工具的每一步分析都由大模型执行，也不代表独立掌握完整技术栈。' },
    data: { title: '看输入与输出，也看效率的归因边界。', steps: [
      { title: 'CSV 输入', text: '以 ABS 搜索数据作为入口，确认文件来源、周期与完整性。真实字段定义和文件限制待补充。' },
      { title: '处理与对比', text: '完成分析前处理与自动对比；原始清洗规则、排序权重和业务阈值未提供，不补造算法细节。' },
      { title: '报告核对', text: '输出选品分析报告，核对结论与原始数据的一致性，再结合市场、竞争与供应情况做业务判断。' },
    ] },
    product: { title: '把一条分析路径，做成可重复使用的工具。', output: '将导入、分析、报告集中到同一操作路径，减少每天重复整理。界面支持新旧日期选择，展示排名增长与新增词结果。', boundary: '自动分析不替代选品决策。业务人员结合市场、竞争与供应情况核对分析结论；界面截图不作为销售成果的直接证明。', next: '根据实际使用反馈迭代字段说明与结果呈现，持续核对输入数据和分析结果。' },
    evidence: [
      { chapter: 'implementation', title: 'ABS 选品工具界面', path: '/ranran-ai-portfolio/assets/crossborder-abs-tool.png', caption: '本人提供的工具截图：选择新旧日期进行对比，查看排名增长与新增词结果。截图日期不作为任职时间依据。' },
    ],
  },
};
const beike = caseNarratives.beike;
beike.ai.decisions = beikeArchitecture;
beike.ai.roles = undefined;
beike.moduleDesign = beikeModules;
beike.data.steps = [];
beike.data.definitions = undefined;
beike.data.note = undefined;
beike.business.analysis = undefined;
