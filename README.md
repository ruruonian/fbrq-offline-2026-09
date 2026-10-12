# Fabrique 国内线下门店月报网站

Apogee 结构 + Fabrique 品牌色的静态站点，展示 2026 年 9 月月报。无构建步骤，双击即可打开。

## 文件结构

| 路径 | 说明 |
| --- | --- |
| `index.html` | 首屏 + 四个关键数字 + 四家门店入口 |
| `analysis.html` | 口径说明 → 四问 → 页末全部门店汇总数据 |
| `store-*.html` | 四家门店各一页：该店相关结论、图表与该店数据 |
| `Fabrique-国内线下门店-2026-09-复盘.html` | **单文件版**，六页合一，可直接发送或离线打开 |
| `assets/js/data.js` | 唯一数据源（换一期只改这个文件） |
| `assets/js/render.js` | 渲染：导航、KPI、四问、表格、状态色、缺数标签、门店筛选 |
| `assets/js/charts.js` | ECharts 封装（达成率、品类、年季） |
| `assets/css/main.css` | 全部样式（首屏像素值照 Apogee 规格，主色为品牌色） |
| `assets/brand/` | Fabrique 符号、字标 SVG、Montserrat 字体、品牌循环动效 |
| `assets/data/` | 原始复盘表 md，供页面「下载数据」按钮使用 |
| `robots.txt` | 屏蔽搜索引擎收录 |

## 线上地址

- 站点：https://ruruonian.github.io/fbrq-offline-2026-09/
- 仓库：https://github.com/ruruonian/fbrq-offline-2026-09

## 换一期数据怎么做

1. 把新的月报 md 覆盖到 `assets/data/`（或改 `tools/build_report_site_data.py` 里的 `SRC` 指向新文件）
2. 跑 `python tools/build_report_site_data.py` 重新生成 `assets/js/data.js`
3. 跑 `node tools/build_single_file.js` 重新生成单文件版
4. 跑 `python tools/check_report_site_data.py` 与 `node tools/check_report_site.js` 自检
5. 跑 `pwsh -File tools/github-publish.ps1` 重新发布

## 数据规则

页面上的每个数字都能在复盘表原文找到同值写法，未改写、未重算、未新增结论。
`待补 / 缺货 / —` 统一渲染为弱化标签，不参与合计。

状态色三档（阈值取自 `月周报复盘工程/10-共享层/11-输出表规范.md`）：

- 绿：达成率 ≥100% / 增长 ≥20% / 差额 >0
- 黄：达成率 90–100% / 增长 0–20% / 差额 =0
- 红：达成率 <90% / 增长 <0 / 差额 <0

占比类指标、占比的百分点变化、提成比例、人数与件数等绝对值不上色。

## 已知依赖

首屏背景为纯色毛玻璃（品牌深色底 + 磨砂颗粒），不依赖任何外部素材。
只有图表走 jsDelivr 的 ECharts CDN；断网时图表区显示提示文案，表格与文字完全不受影响。

页脚只保留「数据来源」与「口径与说明」两栏；缺数不单列清单，仍以 `待补` 弱化标签出现在对应表格单元格里。
