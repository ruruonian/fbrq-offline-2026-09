/* 由 tools/build_report_site_data.py 从月报 md 生成；换一期只需替换本文件。 */
window.REPORT = {
  "meta": {
    "channel": "国内线下门店",
    "period": "月报",
    "start": "2026-09-01",
    "end": "2026-09-30",
    "storeCount": 4,
    "summaryLabel": "全部门店（正店 不包含快闪店）",
    "ttlLabel": "全部正店合计"
  },
  "context": [
    [
      "复盘窗口",
      "2026-09-01 至 2026-09-30"
    ],
    [
      "本次范围",
      "月报（整月），覆盖 4 家正店（深圳万象天地精品店、北京三里屯精品店、上海太古汇精品店、杭州万象城精品店）"
    ],
    [
      "销售口径",
      "表 1 汇总行取 FBI 销售金额达成；门店行取 QuickBI 线下区域看板 线下销售金额。表 2 / 表 3 均为 QuickBI SKU 全渠道口径"
    ],
    [
      "目标口径",
      "取《月度目标（按天拆分）》Sheet2 的 2026-09 月度目标，汇总行 = Σ 四家正店"
    ],
    [
      "同比基线",
      "2025-09-01 至 2025-09-30；同比仅北京有基期数据（三店去年同期未开业，基期为 0 → 待补）"
    ],
    [
      "标色规则",
      "达成率 ≥100% 绿 / 90–100% 黄 / <90% 红；增长率 ≥20% 绿 / 0–20% 黄 / <0% 红；差额 >0 绿 / =0 黄 / <0 红"
    ],
    [
      "数据来源",
      "FBI（目标进度，汇总行）+ QuickBI 线下区域看板（门店行、表 2 / 表 3）+ 月度目标按天拆分（目标）+ 导购业绩明细（表 4）"
    ]
  ],
  "kpi": {
    "label": "销售金额达成",
    "target": "7,415,877",
    "paid": "8,719,904",
    "achieved": "7,992,379",
    "diff": "576,502.00",
    "rate": "107.77%",
    "yoy": "746.80%",
    "mom": "10.39%",
    "diffState": "good",
    "rateState": "good"
  },
  "stores": [
    {
      "name": "深圳万象天地精品店",
      "target": "3,090,670",
      "achieved": "2,764,405.22",
      "diff": "-326,264.78",
      "rate": "89.44%",
      "yoy": "待补",
      "mom": "-3.52%",
      "state": "bad"
    },
    {
      "name": "北京三里屯精品店",
      "target": "2,019,460",
      "achieved": "2,242,778.09",
      "diff": "223,318.09",
      "rate": "111.06%",
      "yoy": "137.63%",
      "mom": "14.20%",
      "state": "good"
    },
    {
      "name": "上海太古汇精品店",
      "target": "1,956,307",
      "achieved": "2,380,187.30",
      "diff": "423,880.30",
      "rate": "121.67%",
      "yoy": "待补",
      "mom": "-1.27%",
      "state": "good"
    },
    {
      "name": "杭州万象城精品店",
      "target": "349,440",
      "achieved": "600,005.14",
      "diff": "250,565.14",
      "rate": "171.70%",
      "yoy": "待补",
      "mom": "待补",
      "state": "good"
    }
  ],
  "questions": {
    "q1": {
      "lead": "**结论**：整体达成率 107.77%，四店差额加总 +571,499 元。缺口完全来自深圳（达成率 89.44%，缺口 326,265 元），主因是客流环比 -31.86% 与目标分配缺口 412,304 元。上海贡献最大（超目标 423,880 元），杭州达成率最高（171.70%）。",
      "intro": "**整体**：全部门店 9 月销售金额目标 7,415,877，FBI 达成 7,992,379，差额 +576,502，达成率 107.77%。各门店差额加总：深圳 -326,264.78 + 北京 +223,318.09 + 上海 +423,880.30 + 杭州 +250,565.14 = +571,498.75，与 FBI 口径差额 5,003.25 为两套系统差异。",
      "blocks": [
        {
          "dim": "场",
          "source": "表 1、表 2 块 2-1",
          "items": [
            {
              "head": "上海",
              "text": "达成率最高 121.67%，超目标 423,880.30 元，是最大贡献店。",
              "tag": "超预期",
              "sep": false
            },
            {
              "head": "杭州",
              "text": "达成率 171.70%，超目标 250,565.14 元；因基数低（目标仅 349,440），绝对值贡献次于上海。",
              "tag": "超预期",
              "sep": false
            },
            {
              "head": "北京",
              "text": "达成率 111.06%，超目标 223,318.09 元，同比 +137.63%、环比 +14.20%，是三店中唯一有同比基期的门店。",
              "tag": "超预期",
              "sep": false
            },
            {
              "head": "深圳",
              "text": "是唯一缺口店，达成率 89.44%，缺口 326,264.78 元，环比 -3.52%。",
              "tag": "超预期",
              "sep": false
            },
            {
              "head": null,
              "text": "全部门店客流量 63,734，环比 -14.49%；深圳客流 28,275 环比 -31.86%，降幅最大。",
              "tag": null,
              "sep": false
            }
          ]
        },
        {
          "dim": "员",
          "source": "表 4 块 4-1、块 4-2，仅月报",
          "items": [
            {
              "head": null,
              "text": "表 4 口径下：深圳达成率 90.63%，缺口 289,595.78 元；北京 114.82%，上海 123.65%，杭州 172.00%。",
              "tag": "缺口",
              "sep": false
            },
            {
              "head": null,
              "text": "深圳缺口三层拆解：**未覆盖目标** +412,303.70 − **个人净差额** +144,122.70 + **口径差** +21,414.78 = 缺口 289,595.78 元（残差 0 元，闭合）。缺口主要来自目标分配（412,303.70 未落到人），而非导购个人未达标。",
              "tag": "缺口",
              "sep": false
            },
            {
              "head": null,
              "text": "深圳 4 名导购未达标，差额合计 101,419.50 元；北京 1 人差额 20,895.74 元；杭州 1 人差额 4,964.70 元；上海全员达标。",
              "tag": "缺口",
              "sep": false
            }
          ]
        },
        {
          "dim": "人",
          "source": "表 2 块 2-2",
          "items": [
            {
              "head": null,
              "text": "支付用户数 3,206 人，环比 +3.19%，用户规模基本持平。客单价 2,391.43 元环比 +6.10%。",
              "tag": "结构判断",
              "sep": false
            },
            {
              "head": null,
              "text": "新用户占比 73.46%，环比 -4.63 pp；老用户回购占比上升，用户粘性增强。",
              "tag": "结构判断",
              "sep": false
            },
            {
              "head": null,
              "text": "转化率 5.66%，环比 +1.01 pp，进店到购买的转化效率提升。",
              "tag": "结构判断",
              "sep": false
            },
            {
              "head": null,
              "text": "件单价 1,425.55 元环比 +9.22%，连带率 1.69 环比 -2.94%；件单价提升弥补了连带的下滑。",
              "tag": "结构判断",
              "sep": false
            }
          ]
        },
        {
          "dim": "货",
          "source": "表 3 块 3-1 至块 3-6",
          "items": [
            {
              "head": "块 3-1 新老品",
              "text": "新品 85.97%（6,866,527.98），老品 14.03%（1,120,847.77）。全店新品环比 +7.04%，老品环比 +35.88%。深圳新品环比 -4.37%，上海新品环比 -6.36%，新品动销在两个大店下滑。",
              "tag": "结构判断",
              "sep": true
            },
            {
              "head": "块 3-2 一级品类",
              "text": "外套 29.31% > 裙装 23.40% > 上装 21.75% > 包袋 15.45%。外套环比 +145.31%、包袋 +45.58%，裙装 -38.44%。",
              "tag": "结构判断",
              "sep": true
            },
            {
              "head": "块 3-3 品类 Top10",
              "text": "连衣裙居首（1,431,344.77），环比 -43.66%；肩背包第二（1,016,837.69），环比 +40.00%。",
              "tag": "结构判断",
              "sep": true
            },
            {
              "head": "块 3-4 年季",
              "text": "26 秋占 50.83%，26 夏占 22.28%，26 春占 9.97%。秋季品为绝对主力。",
              "tag": "结构判断",
              "sep": true
            },
            {
              "head": "块 3-5 TOP 汇总",
              "text": "TOP100 覆盖 743 款，合计 7,987,375.75 元。TOP1 款均 305,862.50 元（占 3.83%），头部集中度不高。",
              "tag": "结构判断",
              "sep": true
            },
            {
              "head": "块 3-6 客单价分布",
              "text": "数据源未接入，整块待补。",
              "tag": "结构判断",
              "sep": true
            }
          ]
        }
      ]
    },
    "q2": {
      "lead": "**核心亮点**：北京同比 +137.63% 进入稳定期；杭州开业即超目标 171.70%；包袋品类环比 +45.58% 增长显著；转化率与客单价双升，进店质量改善。",
      "items": [
        {
          "text": "**北京同比 +137.63%**：去年同期仅 943,828.98 元（开业初期），本期 2,242,778.09 元，进入稳定期后大幅增长。"
        },
        {
          "text": "**杭州达成率 171.70%**：目标 349,440 元，达成 600,005.14 元，超目标 250,565.14 元；9 月中旬开业即实现整月超额。"
        },
        {
          "text": "**上海达成率 121.67%，绝对贡献最大**：超目标 423,880.30 元，四店中最高。"
        },
        {
          "text": "**转化率环比 +1.01 pp**（5.66%）：在客流环比 -14.49% 的情况下，转化率提升，进店质量或销售能力改善。"
        },
        {
          "text": "**客单价环比 +6.10%**（2,391.43）：件单价环比 +9.22%（1,425.55），高单价商品销售占比提升。"
        },
        {
          "text": "**老品销售额环比 +35.88%**（1,120,847.77）：库存消化加速，老品动销改善。"
        },
        {
          "text": "**包袋品类环比 +45.58%**（1,233,660.00）：包袋作为高单价品类增长显著，北京包袋占比 17.59% 为四店最高。"
        },
        {
          "text": "**北京连带率同比 +27.50%**（1.6441）：跨品类搭配销售能力提升。"
        }
      ]
    },
    "q3": {
      "lead": "**核心风险**：深圳是唯一缺口店（89.44%），客流环比 -31.86% 是主因，且目标分配缺口 412,304 元（未落到人）。裙装品类环比 -38.44% 拖累货端。三店同比与杭州环比均为待补。",
      "items": [
        {
          "text": "**深圳是唯一缺口店**：达成率 89.44%，缺口 326,264.78 元；环比 -3.52%。深圳占四店目标 41.7%，其缺口对整体影响最大。"
        },
        {
          "text": "**深圳客流环比 -31.86%**（28,275）：降幅远超其他门店，是深圳销售下滑的核心拖累。"
        },
        {
          "text": "**深圳目标分配缺口大**：未覆盖目标 412,303.70 元（门店目标 3,090,670 vs 个人目标合计 2,678,366.30），目标未充分分解到个人。"
        },
        {
          "text": "**全店客流环比 -14.49%**（63,734）：四店全部环比下滑（深圳 -31.86%、上海 -19.27%、北京 -8.05%）。"
        },
        {
          "text": "**裙装品类环比 -38.44%**（1,869,039.45）：第二大品类下降幅度大；连衣裙 TOP 品类环比 -43.66%。"
        },
        {
          "text": "**新用户占比环比 -4.63 pp**（73.46%）：新客获取环比下降，深圳新用户占比 80.36% 环比 -5.33 pp。"
        },
        {
          "text": "**深圳 4 名导购未达标**：差额合计 101,419.50 元，其中薛雨欣差额 -41,038.50 元最大。"
        },
        {
          "text": "**缺数盲区**：三店同比待补（去年同期未开业）；杭州环比待补（基期为 0）；块 3-6 客单价分布整块待补。"
        }
      ]
    },
    "q4": {
      "lead": "**归因方向**：深圳缺口主因为客流下降（表内证据 -31.86%），转化率提升部分对冲；品类切换（裙装→外套）为季节性需求变化；客单价上升由高单价秋装驱动。",
      "items": [
        {
          "head": "深圳缺口",
          "evidence": "客流环比 -31.86%，销售环比 -3.52%，转化率环比 +1.30 pp",
          "cause": "客流大幅下降是缺口主因，但转化率提升部分对冲了客流损失。客流下降可能与商场引流变化或周边竞争有关；建议排查商场活动与客流数据。",
          "raw": "**深圳缺口** → 表内证据：客流环比 -31.86%，销售环比 -3.52%，转化率环比 +1.30 pp → 【推断】客流大幅下降是缺口主因，但转化率提升部分对冲了客流损失。客流下降可能与商场引流变化或周边竞争有关；建议排查商场活动与客流数据。"
        },
        {
          "head": "深圳未覆盖目标 412,303.70",
          "evidence": "有个人目标 12 人、无个人目标 5 人（库管 / 咖啡师 / 咖啡店长）",
          "cause": "无目标岗位占比高，门店目标分配时未能将全部目标落到导购个人；建议核查目标分配逻辑。",
          "raw": "**深圳未覆盖目标 412,303.70** → 表内证据：有个人目标 12 人、无个人目标 5 人（库管 / 咖啡师 / 咖啡店长） → 【推断】无目标岗位占比高，门店目标分配时未能将全部目标落到导购个人；建议核查目标分配逻辑。"
        },
        {
          "head": "全店客流环比下滑",
          "evidence": "四店客流全部环比下降，深圳 -31.86% 最严重，北京 -8.05% 最轻",
          "cause": "8 月为暑期旺季，9 月开学季后客流自然回落属季节性规律；北京降幅最小可能与其商圈客群稳定有关。",
          "raw": "**全店客流环比下滑** → 表内证据：四店客流全部环比下降，深圳 -31.86% 最严重，北京 -8.05% 最轻 → 【推断】8 月为暑期旺季，9 月开学季后客流自然回落属季节性规律；北京降幅最小可能与其商圈客群稳定有关。"
        },
        {
          "head": "裙装 / 连衣裙品类环比大幅下滑",
          "evidence": "裙装环比 -38.44%，连衣裙环比 -43.66%，但外套环比 +145.31%",
          "cause": "9 月入秋，消费偏好从轻薄裙装转向外套类，品类切换是季节性需求变化驱动；建议关注秋装外套的补货与陈列。",
          "raw": "**裙装 / 连衣裙品类环比大幅下滑** → 表内证据：裙装环比 -38.44%，连衣裙环比 -43.66%，但外套环比 +145.31% → 【推断】9 月入秋，消费偏好从轻薄裙装转向外套类，品类切换是季节性需求变化驱动；建议关注秋装外套的补货与陈列。"
        },
        {
          "head": "客单价与件单价同步提升",
          "evidence": "客单价环比 +6.10%，件单价环比 +9.22%，连带率环比 -2.94%",
          "cause": "高单价秋装上市拉升了件单价，但顾客单次购买件数略降；消费者可能倾向购买少量高价应季品。",
          "raw": "**客单价与件单价同步提升** → 表内证据：客单价环比 +6.10%，件单价环比 +9.22%，连带率环比 -2.94% → 【推断】高单价秋装上市拉升了件单价，但顾客单次购买件数略降；消费者可能倾向购买少量高价应季品。"
        },
        {
          "head": "新用户占比下降",
          "evidence": "新用户占比环比 -4.63 pp，支付用户数环比 +3.19%",
          "cause": "总用户数增加但新客占比下降，老客回流增加、新客拉新速度放缓；9 月非大促期，新客引流力度可能弱于 8 月。",
          "raw": "**新用户占比下降** → 表内证据：新用户占比环比 -4.63 pp，支付用户数环比 +3.19% → 【推断】总用户数增加但新客占比下降，老客回流增加、新客拉新速度放缓；9 月非大促期，新客引流力度可能弱于 8 月。"
        }
      ]
    }
  },
  "tables": [
    {
      "key": "t1",
      "title": "表 1 · 业绩达成",
      "columns": [
        {
          "name": "门店名称"
        },
        {
          "name": "销售金额目标"
        },
        {
          "name": "支付金额达成"
        },
        {
          "name": "销售金额达成"
        },
        {
          "name": "销售金额差额"
        },
        {
          "name": "销售金额达成率"
        },
        {
          "name": "销售金额同比"
        },
        {
          "name": "销售金额环比"
        }
      ],
      "rows": [
        [
          {
            "v": "全部门店（正店 不包含快闪店）",
            "state": null,
            "missing": false
          },
          {
            "v": "7,415,877",
            "state": null,
            "missing": false
          },
          {
            "v": "8,719,904",
            "state": null,
            "missing": false
          },
          {
            "v": "7,992,379",
            "state": null,
            "missing": false
          },
          {
            "v": "576,502.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "107.77%",
            "state": "good",
            "missing": false
          },
          {
            "v": "746.80%",
            "state": "good",
            "missing": false
          },
          {
            "v": "10.39%",
            "state": "warn",
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "3,090,670",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "2,764,405.22",
            "state": null,
            "missing": false
          },
          {
            "v": "-326,264.78",
            "state": "bad",
            "missing": false
          },
          {
            "v": "89.44%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-3.52%",
            "state": "bad",
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "2,019,460",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "2,242,778.09",
            "state": null,
            "missing": false
          },
          {
            "v": "223,318.09",
            "state": "good",
            "missing": false
          },
          {
            "v": "111.06%",
            "state": "good",
            "missing": false
          },
          {
            "v": "137.63%",
            "state": "good",
            "missing": false
          },
          {
            "v": "14.20%",
            "state": "warn",
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "1,956,307",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "2,380,187.30",
            "state": null,
            "missing": false
          },
          {
            "v": "423,880.30",
            "state": "good",
            "missing": false
          },
          {
            "v": "121.67%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-1.27%",
            "state": "bad",
            "missing": false
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "349,440",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "600,005.14",
            "state": null,
            "missing": false
          },
          {
            "v": "250,565.14",
            "state": "good",
            "missing": false
          },
          {
            "v": "171.70%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ]
      ],
      "headNote": null,
      "points": [
        "汇总行销售金额达成取 FBI（7,992,379），门店行取 QuickBI（四店合计 7,987,375.75），差额 5,003.25 为系统口径差。",
        "门店按目标降序：深圳 3,090,670 > 北京 2,019,460 > 上海 1,956,307 > 杭州 349,440。",
        "达成率色标：上海 121.67%、杭州 171.70%、北京 111.06%、深圳 89.44%。"
      ],
      "note": null
    },
    {
      "key": "t2a",
      "title": "块 2-1 流量",
      "columns": [
        {
          "name": "门店名称"
        },
        {
          "name": "客流量"
        },
        {
          "name": "同比"
        },
        {
          "name": "环比"
        }
      ],
      "rows": [
        [
          {
            "v": "全部门店",
            "state": null,
            "missing": false
          },
          {
            "v": "63,734",
            "state": null,
            "missing": false
          },
          {
            "v": "1466.33%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-14.49%",
            "state": "bad",
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "28,275",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-31.86%",
            "state": "bad",
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "19,218",
            "state": null,
            "missing": false
          },
          {
            "v": "372.30%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-8.05%",
            "state": "bad",
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "9,800",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-19.27%",
            "state": "bad",
            "missing": false
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "6,441",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ]
      ],
      "headNote": "**人 · 缺口归属**：人维度无独立目标。恒等式：销售额 = 客流量 × 转化率 × 同口径客单价。环比口径：客流量 -14.49%（基期 74,533），转化率 +1.01 pp（基期 4.65%），同口径客单价 ≈ 2,218 元。客流下降的拖累被转化率和客单价提升部分对冲，最终销售额环比 +10.33%。",
      "points": [
        "深圳客流 28,275 环比 -31.86%（基期 41,495），降幅四店最大。",
        "北京客流 19,218 同比 +372.30%（基期 4,069），是唯一有同比数据的门店。"
      ],
      "note": null
    },
    {
      "key": "t2b",
      "title": "块 2-2 转化",
      "columns": [
        {
          "name": "门店名称"
        },
        {
          "name": "支付用户数"
        },
        {
          "name": "同比"
        },
        {
          "name": "环比"
        },
        {
          "name": "新用户占比"
        },
        {
          "name": "同比"
        },
        {
          "name": "环比"
        },
        {
          "name": "转化率"
        },
        {
          "name": "同比"
        },
        {
          "name": "环比"
        },
        {
          "name": "客单价"
        },
        {
          "name": "同比"
        },
        {
          "name": "环比"
        },
        {
          "name": "件单价"
        },
        {
          "name": "同比"
        },
        {
          "name": "环比"
        },
        {
          "name": "连带率"
        },
        {
          "name": "同比"
        },
        {
          "name": "环比"
        },
        {
          "name": "包袋销售额占比"
        },
        {
          "name": "同比"
        },
        {
          "name": "环比"
        }
      ],
      "rows": [
        [
          {
            "v": "全部门店",
            "state": null,
            "missing": false
          },
          {
            "v": "3,206",
            "state": null,
            "missing": false
          },
          {
            "v": "582.13%",
            "state": "good",
            "missing": false
          },
          {
            "v": "3.19%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "73.46%",
            "state": null,
            "missing": false
          },
          {
            "v": "-12.08 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "-4.63 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "5.66%",
            "state": null,
            "missing": false
          },
          {
            "v": "-7.24 pp",
            "state": "bad",
            "missing": false
          },
          {
            "v": "+1.01 pp",
            "state": "bad",
            "missing": false
          },
          {
            "v": "2,391.43",
            "state": null,
            "missing": false
          },
          {
            "v": "16.05%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "6.10%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "1,425.55",
            "state": null,
            "missing": false
          },
          {
            "v": "-8.32%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "9.22%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "1.6935",
            "state": null,
            "missing": false
          },
          {
            "v": "31.32%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-2.94%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "15.46%",
            "state": null,
            "missing": false
          },
          {
            "v": "-2.01 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+3.75 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "1,217",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-8.36%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "80.36%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-5.33 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "4.85%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+1.30 pp",
            "state": "bad",
            "missing": false
          },
          {
            "v": "2,183.57",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "3.80%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "1,347.18",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "5.79%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "1.6312",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-2.19%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "13.64%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+4.09 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "899",
            "state": null,
            "missing": false
          },
          {
            "v": "91.28%",
            "state": "good",
            "missing": false
          },
          {
            "v": "5.02%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "67.30%",
            "state": null,
            "missing": false
          },
          {
            "v": "-18.23 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "-2.45 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "5.23%",
            "state": null,
            "missing": false
          },
          {
            "v": "-7.67 pp",
            "state": "bad",
            "missing": false
          },
          {
            "v": "+0.70 pp",
            "state": "bad",
            "missing": false
          },
          {
            "v": "2,422.01",
            "state": null,
            "missing": false
          },
          {
            "v": "17.53%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "10.13%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "1,498.18",
            "state": null,
            "missing": false
          },
          {
            "v": "-3.65%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "12.98%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "1.6441",
            "state": null,
            "missing": false
          },
          {
            "v": "27.50%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-2.32%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "17.59%",
            "state": null,
            "missing": false
          },
          {
            "v": "+0.12 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+1.28 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "842",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-8.78%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "69.36%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-5.51 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "9.66%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+1.05 pp",
            "state": "bad",
            "missing": false
          },
          {
            "v": "2,662.40",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "5.69%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "1,452.22",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "9.40%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "1.8596",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-2.59%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "14.25%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+3.72 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "248",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "75.81%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "4.21%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "2,362.22",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "1,445.80",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "1.6384",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "20.73%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ]
      ],
      "headNote": null,
      "points": [
        "深圳转化率 4.85% 环比 +1.30 pp，上海 9.66% 环比 +1.05 pp，两店转化率提升幅度接近。",
        "北京客单价 2,422.01 环比 +10.13%，件单价 1,498.18 环比 +12.98%，两项增幅均为四店最高。",
        "杭州转化率 4.21% 为四店最低，包袋占比 20.73% 为四店最高。",
        "新用户占比同比仅北京可算（67.30% vs 去年 85.53%），下降 -18.23 pp。"
      ],
      "note": "注：新用户占比、转化率、包袋销售额占比的同比 / 环比是百分点（pp），其余四列是增长率。"
    },
    {
      "key": "t3a",
      "title": "块 3-1 新老品",
      "columns": [
        {
          "name": "门店名称"
        },
        {
          "name": "新老品"
        },
        {
          "name": "销售件数"
        },
        {
          "name": "销售件数同比"
        },
        {
          "name": "销售件数环比"
        },
        {
          "name": "销售额"
        },
        {
          "name": "销售额占比"
        },
        {
          "name": "销售额同比"
        },
        {
          "name": "销售额环比"
        }
      ],
      "rows": [
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "TTL",
            "state": null,
            "missing": false
          },
          {
            "v": "5,603",
            "state": null,
            "missing": false
          },
          {
            "v": "+823.06%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+1.01%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "7,987,375.75",
            "state": null,
            "missing": false
          },
          {
            "v": "100.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "+746.27%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+10.33%",
            "state": "warn",
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "新品",
            "state": null,
            "missing": false
          },
          {
            "v": "4,949",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-1.22%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "6,866,527.98",
            "state": null,
            "missing": false
          },
          {
            "v": "85.97%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+7.04%",
            "state": "warn",
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "老品",
            "state": null,
            "missing": false
          },
          {
            "v": "654",
            "state": null,
            "missing": false
          },
          {
            "v": "+7.74%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+21.79%",
            "state": "good",
            "missing": false
          },
          {
            "v": "1,120,847.77",
            "state": null,
            "missing": false
          },
          {
            "v": "14.03%",
            "state": null,
            "missing": false
          },
          {
            "v": "+18.76%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+35.88%",
            "state": "good",
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TTL",
            "state": null,
            "missing": false
          },
          {
            "v": "2,052",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-8.80%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "2,764,405.22",
            "state": null,
            "missing": false
          },
          {
            "v": "100.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-3.52%",
            "state": "bad",
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "新品",
            "state": null,
            "missing": false
          },
          {
            "v": "1,774",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-10.27%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "2,374,885.92",
            "state": null,
            "missing": false
          },
          {
            "v": "85.91%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-4.37%",
            "state": "bad",
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "老品",
            "state": null,
            "missing": false
          },
          {
            "v": "278",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+1.83%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "389,519.30",
            "state": null,
            "missing": false
          },
          {
            "v": "14.09%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+2.01%",
            "state": "warn",
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TTL",
            "state": null,
            "missing": false
          },
          {
            "v": "1,639",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-9.75%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "2,380,187.30",
            "state": null,
            "missing": false
          },
          {
            "v": "100.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-1.27%",
            "state": "bad",
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "新品",
            "state": null,
            "missing": false
          },
          {
            "v": "1,478",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-12.96%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "2,069,401.53",
            "state": null,
            "missing": false
          },
          {
            "v": "86.94%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-6.36%",
            "state": "bad",
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "老品",
            "state": null,
            "missing": false
          },
          {
            "v": "161",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+36.44%",
            "state": "good",
            "missing": false
          },
          {
            "v": "310,785.77",
            "state": null,
            "missing": false
          },
          {
            "v": "13.06%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+54.91%",
            "state": "good",
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TTL",
            "state": null,
            "missing": false
          },
          {
            "v": "1,497",
            "state": null,
            "missing": false
          },
          {
            "v": "+146.62%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+1.08%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "2,242,778.09",
            "state": null,
            "missing": false
          },
          {
            "v": "100.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "+137.63%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+14.20%",
            "state": "warn",
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "新品",
            "state": null,
            "missing": false
          },
          {
            "v": "1,328",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-0.52%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "1,913,702.81",
            "state": null,
            "missing": false
          },
          {
            "v": "85.33%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+11.16%",
            "state": "warn",
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "老品",
            "state": null,
            "missing": false
          },
          {
            "v": "169",
            "state": null,
            "missing": false
          },
          {
            "v": "-72.16%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "+15.75%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "329,075.28",
            "state": null,
            "missing": false
          },
          {
            "v": "14.67%",
            "state": null,
            "missing": false
          },
          {
            "v": "-65.13%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "+35.75%",
            "state": "good",
            "missing": false
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TTL",
            "state": null,
            "missing": false
          },
          {
            "v": "415",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "600,005.14",
            "state": null,
            "missing": false
          },
          {
            "v": "100.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "新品",
            "state": null,
            "missing": false
          },
          {
            "v": "369",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "508,537.72",
            "state": null,
            "missing": false
          },
          {
            "v": "84.76%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "老品",
            "state": null,
            "missing": false
          },
          {
            "v": "46",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "91,467.42",
            "state": null,
            "missing": false
          },
          {
            "v": "15.24%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ]
      ],
      "headNote": "**货 · 缺口归属**：货维度无独立目标。块 3-1 量价分解（全店段环比）：TTL 销售额 7,987,375.75 环比 +10.33%（基期 7,239,878.83），销售件数 5,603 环比 +1.01%（基期 5,547），款均销售额 = 10,750.44 元/款。量贡献约 +74,000 元，价贡献约 +673,000 元，**价格因素是环比增长的主要驱动力**。",
      "points": [
        "全店段新品 85.97%（6,866,527.98），老品 14.03%（1,120,847.77）。",
        "深圳老品占比 14.09% 环比基本持平；上海老品占比 13.06% 环比销售额 +54.91%，老品动销最快。"
      ],
      "note": null
    },
    {
      "key": "t3bc",
      "title": "块 3-2 一级品类",
      "columns": [
        {
          "name": "门店名称"
        },
        {
          "name": "一级品类"
        },
        {
          "name": "销售件数"
        },
        {
          "name": "销售件数同比"
        },
        {
          "name": "销售件数环比"
        },
        {
          "name": "销售额"
        },
        {
          "name": "销售额占比"
        },
        {
          "name": "销售额同比"
        },
        {
          "name": "销售额环比"
        },
        {
          "name": "销售额占比变化"
        }
      ],
      "rows": [
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "外套",
            "state": null,
            "missing": false
          },
          {
            "v": "1,330",
            "state": null,
            "missing": false
          },
          {
            "v": "+429.88%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+126.58%",
            "state": "good",
            "missing": false
          },
          {
            "v": "2,341,195.87",
            "state": null,
            "missing": false
          },
          {
            "v": "29.31%",
            "state": null,
            "missing": false
          },
          {
            "v": "+434.58%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+145.31%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+16.13 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "包袋",
            "state": null,
            "missing": false
          },
          {
            "v": "489",
            "state": null,
            "missing": false
          },
          {
            "v": "+728.81%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+44.25%",
            "state": "good",
            "missing": false
          },
          {
            "v": "1,233,660.00",
            "state": null,
            "missing": false
          },
          {
            "v": "15.45%",
            "state": null,
            "missing": false
          },
          {
            "v": "+648.19%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+45.58%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+3.74 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "裙装",
            "state": null,
            "missing": false
          },
          {
            "v": "1,345",
            "state": null,
            "missing": false
          },
          {
            "v": "+3439.47%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-36.01%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "1,869,039.45",
            "state": null,
            "missing": false
          },
          {
            "v": "23.40%",
            "state": null,
            "missing": false
          },
          {
            "v": "+3575.83%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-38.44%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-18.55 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "上装",
            "state": null,
            "missing": false
          },
          {
            "v": "1,648",
            "state": null,
            "missing": false
          },
          {
            "v": "+815.56%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-3.51%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "1,737,183.64",
            "state": null,
            "missing": false
          },
          {
            "v": "21.75%",
            "state": null,
            "missing": false
          },
          {
            "v": "+725.10%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+13.90%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+0.68 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "下装",
            "state": null,
            "missing": false
          },
          {
            "v": "746",
            "state": null,
            "missing": false
          },
          {
            "v": "+881.58%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+11.01%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "752,328.60",
            "state": null,
            "missing": false
          },
          {
            "v": "9.42%",
            "state": null,
            "missing": false
          },
          {
            "v": "+893.94%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+10.05%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "-0.03 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "套装",
            "state": null,
            "missing": false
          },
          {
            "v": "39",
            "state": null,
            "missing": false
          },
          {
            "v": "+1200.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-71.53%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "50,542.12",
            "state": null,
            "missing": false
          },
          {
            "v": "0.63%",
            "state": null,
            "missing": false
          },
          {
            "v": "+1192.33%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-73.56%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-2.01 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "配饰",
            "state": null,
            "missing": false
          },
          {
            "v": "6",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+500.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "3,426.07",
            "state": null,
            "missing": false
          },
          {
            "v": "0.04%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+660.71%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+0.04 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "外套",
            "state": null,
            "missing": false
          },
          {
            "v": "287",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+109.49%",
            "state": "good",
            "missing": false
          },
          {
            "v": "482,942.76",
            "state": null,
            "missing": false
          },
          {
            "v": "17.47%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+126.77%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+10.04 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "包袋",
            "state": null,
            "missing": false
          },
          {
            "v": "161",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+40.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "376,015.32",
            "state": null,
            "missing": false
          },
          {
            "v": "13.60%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+37.33%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+4.05 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "裙装",
            "state": null,
            "missing": false
          },
          {
            "v": "691",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-29.70%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "947,432.87",
            "state": null,
            "missing": false
          },
          {
            "v": "34.27%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-32.27%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-14.55 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "上装",
            "state": null,
            "missing": false
          },
          {
            "v": "620",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-10.79%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "645,069.94",
            "state": null,
            "missing": false
          },
          {
            "v": "23.33%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+3.30%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+1.54 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "下装",
            "state": null,
            "missing": false
          },
          {
            "v": "265",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+11.34%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "278,784.70",
            "state": null,
            "missing": false
          },
          {
            "v": "10.08%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+13.58%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+1.52 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "套装",
            "state": null,
            "missing": false
          },
          {
            "v": "26",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-68.29%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "33,015.65",
            "state": null,
            "missing": false
          },
          {
            "v": "1.19%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-69.94%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-2.64 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "配饰",
            "state": null,
            "missing": false
          },
          {
            "v": "2",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "1,143.98",
            "state": null,
            "missing": false
          },
          {
            "v": "0.04%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+0.04 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "外套",
            "state": null,
            "missing": false
          },
          {
            "v": "381",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+91.46%",
            "state": "good",
            "missing": false
          },
          {
            "v": "692,804.08",
            "state": null,
            "missing": false
          },
          {
            "v": "29.11%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+101.06%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+14.81 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "包袋",
            "state": null,
            "missing": false
          },
          {
            "v": "124",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+31.91%",
            "state": "good",
            "missing": false
          },
          {
            "v": "339,194.66",
            "state": null,
            "missing": false
          },
          {
            "v": "14.25%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+33.88%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+3.74 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "裙装",
            "state": null,
            "missing": false
          },
          {
            "v": "424",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-39.51%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "617,414.20",
            "state": null,
            "missing": false
          },
          {
            "v": "25.94%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-40.63%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-17.20 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "上装",
            "state": null,
            "missing": false
          },
          {
            "v": "484",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-13.73%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "499,790.87",
            "state": null,
            "missing": false
          },
          {
            "v": "21.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+1.11%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+0.49 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "下装",
            "state": null,
            "missing": false
          },
          {
            "v": "212",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-3.64%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "212,823.59",
            "state": null,
            "missing": false
          },
          {
            "v": "8.94%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-3.97%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-0.25 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "套装",
            "state": null,
            "missing": false
          },
          {
            "v": "13",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-67.50%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "17,526.47",
            "state": null,
            "missing": false
          },
          {
            "v": "0.74%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-68.93%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-1.60 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "配饰",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+0.00%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "633.43",
            "state": null,
            "missing": false
          },
          {
            "v": "0.03%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+40.64%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+0.01 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "外套",
            "state": null,
            "missing": false
          },
          {
            "v": "546",
            "state": null,
            "missing": false
          },
          {
            "v": "+117.53%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+117.53%",
            "state": "good",
            "missing": false
          },
          {
            "v": "968,647.91",
            "state": null,
            "missing": false
          },
          {
            "v": "43.19%",
            "state": null,
            "missing": false
          },
          {
            "v": "+121.18%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+144.08%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+22.97 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "包袋",
            "state": null,
            "missing": false
          },
          {
            "v": "155",
            "state": null,
            "missing": false
          },
          {
            "v": "+162.71%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+19.23%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "394,093.26",
            "state": null,
            "missing": false
          },
          {
            "v": "17.57%",
            "state": null,
            "missing": false
          },
          {
            "v": "+139.01%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+23.06%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+1.25 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "裙装",
            "state": null,
            "missing": false
          },
          {
            "v": "174",
            "state": null,
            "missing": false
          },
          {
            "v": "+357.89%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-58.37%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "230,300.82",
            "state": null,
            "missing": false
          },
          {
            "v": "10.27%",
            "state": null,
            "missing": false
          },
          {
            "v": "+352.93%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-61.46%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-20.18 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "上装",
            "state": null,
            "missing": false
          },
          {
            "v": "404",
            "state": null,
            "missing": false
          },
          {
            "v": "+124.44%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-10.62%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "439,082.53",
            "state": null,
            "missing": false
          },
          {
            "v": "19.58%",
            "state": null,
            "missing": false
          },
          {
            "v": "+108.55%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+8.04%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "-1.13 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "下装",
            "state": null,
            "missing": false
          },
          {
            "v": "215",
            "state": null,
            "missing": false
          },
          {
            "v": "+182.89%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+0.47%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "209,004.91",
            "state": null,
            "missing": false
          },
          {
            "v": "9.32%",
            "state": null,
            "missing": false
          },
          {
            "v": "+176.13%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-3.50%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-1.72 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "套装",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "-100.00%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-100.00%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "-100.00%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-100.00%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-1.27 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "配饰",
            "state": null,
            "missing": false
          },
          {
            "v": "3",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "1,648.66",
            "state": null,
            "missing": false
          },
          {
            "v": "0.07%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+0.07 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "外套",
            "state": null,
            "missing": false
          },
          {
            "v": "116",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "196,801.12",
            "state": null,
            "missing": false
          },
          {
            "v": "32.80%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "包袋",
            "state": null,
            "missing": false
          },
          {
            "v": "49",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "124,356.76",
            "state": null,
            "missing": false
          },
          {
            "v": "20.73%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "裙装",
            "state": null,
            "missing": false
          },
          {
            "v": "56",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "73,891.56",
            "state": null,
            "missing": false
          },
          {
            "v": "12.32%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "上装",
            "state": null,
            "missing": false
          },
          {
            "v": "140",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "153,240.30",
            "state": null,
            "missing": false
          },
          {
            "v": "25.54%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "下装",
            "state": null,
            "missing": false
          },
          {
            "v": "54",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "51,715.40",
            "state": null,
            "missing": false
          },
          {
            "v": "8.62%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "套装",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "配饰",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ]
      ],
      "headNote": null,
      "points": [
        "一级品类差额榜（全店段环比）：外套 +1,384,967.87，包袋 +386,441.25，上装 +211,906.21，下装 +122,741.22，配饰 +35,109.22，套装 -38,385.78，裙装 -1,165,279.27。",
        "北京包袋占比 17.59% 为四店最高，深圳 13.64% 最低。"
      ],
      "note": null
    },
    {
      "key": "t3bc",
      "title": "块 3-3 品类 Top10",
      "columns": [
        {
          "name": "门店名称"
        },
        {
          "name": "二级品类"
        },
        {
          "name": "销售件数"
        },
        {
          "name": "销售件数占比"
        },
        {
          "name": "销售件数同比"
        },
        {
          "name": "销售件数环比"
        },
        {
          "name": "销售额"
        },
        {
          "name": "销售额占比"
        },
        {
          "name": "销售额同比"
        },
        {
          "name": "销售额环比"
        }
      ],
      "rows": [
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "连衣裙",
            "state": null,
            "missing": false
          },
          {
            "v": "906",
            "state": null,
            "missing": false
          },
          {
            "v": "16.17%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+18020.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-43.38%",
            "state": null,
            "missing": false
          },
          {
            "v": "1,431,344.77",
            "state": null,
            "missing": false
          },
          {
            "v": "17.92%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+11194.79%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-43.66%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "风衣",
            "state": null,
            "missing": false
          },
          {
            "v": "628",
            "state": null,
            "missing": false
          },
          {
            "v": "11.21%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+748.65%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+218.78%",
            "state": null,
            "missing": false
          },
          {
            "v": "1,138,286.17",
            "state": null,
            "missing": false
          },
          {
            "v": "14.25%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+819.89%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+216.12%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "肩背包",
            "state": null,
            "missing": false
          },
          {
            "v": "409",
            "state": null,
            "missing": false
          },
          {
            "v": "7.30%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+829.55%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+53.18%",
            "state": null,
            "missing": false
          },
          {
            "v": "1,029,260.73",
            "state": null,
            "missing": false
          },
          {
            "v": "12.89%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+851.62%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+58.63%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "针织开衫",
            "state": null,
            "missing": false
          },
          {
            "v": "652",
            "state": null,
            "missing": false
          },
          {
            "v": "11.64%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+695.12%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+109.65%",
            "state": null,
            "missing": false
          },
          {
            "v": "845,433.76",
            "state": null,
            "missing": false
          },
          {
            "v": "10.58%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+673.97%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+161.24%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "短外套",
            "state": null,
            "missing": false
          },
          {
            "v": "423",
            "state": null,
            "missing": false
          },
          {
            "v": "7.55%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+271.05%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+107.35%",
            "state": null,
            "missing": false
          },
          {
            "v": "656,159.98",
            "state": null,
            "missing": false
          },
          {
            "v": "8.21%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+274.65%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+129.03%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "牛仔裤",
            "state": null,
            "missing": false
          },
          {
            "v": "498",
            "state": null,
            "missing": false
          },
          {
            "v": "8.89%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+857.69%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+21.76%",
            "state": null,
            "missing": false
          },
          {
            "v": "524,619.86",
            "state": null,
            "missing": false
          },
          {
            "v": "6.57%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+901.34%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+17.43%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "半裙",
            "state": null,
            "missing": false
          },
          {
            "v": "439",
            "state": null,
            "missing": false
          },
          {
            "v": "7.84%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+1230.30%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-12.55%",
            "state": null,
            "missing": false
          },
          {
            "v": "437,694.68",
            "state": null,
            "missing": false
          },
          {
            "v": "5.48%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+1046.58%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-11.70%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "毛衫",
            "state": null,
            "missing": false
          },
          {
            "v": "286",
            "state": null,
            "missing": false
          },
          {
            "v": "5.10%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+297.22%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+191.84%",
            "state": null,
            "missing": false
          },
          {
            "v": "300,983.46",
            "state": null,
            "missing": false
          },
          {
            "v": "3.77%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+283.59%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+216.78%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "上衣",
            "state": null,
            "missing": false
          },
          {
            "v": "289",
            "state": null,
            "missing": false
          },
          {
            "v": "5.16%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+14350.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-50.34%",
            "state": null,
            "missing": false
          },
          {
            "v": "277,506.65",
            "state": null,
            "missing": false
          },
          {
            "v": "3.47%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+23618.52%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-51.23%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "衬衫",
            "state": null,
            "missing": false
          },
          {
            "v": "258",
            "state": null,
            "missing": false
          },
          {
            "v": "4.60%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+1257.89%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-39.29%",
            "state": null,
            "missing": false
          },
          {
            "v": "229,088.72",
            "state": null,
            "missing": false
          },
          {
            "v": "2.87%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+1064.18%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-38.93%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "连衣裙",
            "state": null,
            "missing": false
          },
          {
            "v": "497",
            "state": null,
            "missing": false
          },
          {
            "v": "24.22%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-34.52%",
            "state": null,
            "missing": false
          },
          {
            "v": "760,558.71",
            "state": null,
            "missing": false
          },
          {
            "v": "27.51%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-35.53%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "肩背包",
            "state": null,
            "missing": false
          },
          {
            "v": "130",
            "state": null,
            "missing": false
          },
          {
            "v": "6.34%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+47.73%",
            "state": null,
            "missing": false
          },
          {
            "v": "316,062.69",
            "state": null,
            "missing": false
          },
          {
            "v": "11.43%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+55.81%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "针织开衫",
            "state": null,
            "missing": false
          },
          {
            "v": "222",
            "state": null,
            "missing": false
          },
          {
            "v": "10.82%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+109.43%",
            "state": null,
            "missing": false
          },
          {
            "v": "267,405.30",
            "state": null,
            "missing": false
          },
          {
            "v": "9.67%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+157.98%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "风衣",
            "state": null,
            "missing": false
          },
          {
            "v": "146",
            "state": null,
            "missing": false
          },
          {
            "v": "7.12%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+403.45%",
            "state": null,
            "missing": false
          },
          {
            "v": "255,870.37",
            "state": null,
            "missing": false
          },
          {
            "v": "9.26%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+375.04%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "牛仔裤",
            "state": null,
            "missing": false
          },
          {
            "v": "196",
            "state": null,
            "missing": false
          },
          {
            "v": "9.55%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+40.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "205,348.53",
            "state": null,
            "missing": false
          },
          {
            "v": "7.43%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+33.29%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "半裙",
            "state": null,
            "missing": false
          },
          {
            "v": "194",
            "state": null,
            "missing": false
          },
          {
            "v": "9.45%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-13.39%",
            "state": null,
            "missing": false
          },
          {
            "v": "186,874.16",
            "state": null,
            "missing": false
          },
          {
            "v": "6.76%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-14.70%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "上衣",
            "state": null,
            "missing": false
          },
          {
            "v": "151",
            "state": null,
            "missing": false
          },
          {
            "v": "7.36%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-50.81%",
            "state": null,
            "missing": false
          },
          {
            "v": "153,976.44",
            "state": null,
            "missing": false
          },
          {
            "v": "5.57%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-48.17%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "短外套",
            "state": null,
            "missing": false
          },
          {
            "v": "95",
            "state": null,
            "missing": false
          },
          {
            "v": "4.63%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+163.89%",
            "state": null,
            "missing": false
          },
          {
            "v": "140,115.79",
            "state": null,
            "missing": false
          },
          {
            "v": "5.07%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+200.63%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "衬衫",
            "state": null,
            "missing": false
          },
          {
            "v": "119",
            "state": null,
            "missing": false
          },
          {
            "v": "5.80%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-22.22%",
            "state": null,
            "missing": false
          },
          {
            "v": "109,558.65",
            "state": null,
            "missing": false
          },
          {
            "v": "3.96%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-19.51%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "毛衫",
            "state": null,
            "missing": false
          },
          {
            "v": "77",
            "state": null,
            "missing": false
          },
          {
            "v": "3.75%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+148.39%",
            "state": null,
            "missing": false
          },
          {
            "v": "79,939.22",
            "state": null,
            "missing": false
          },
          {
            "v": "2.89%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+183.29%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "连衣裙",
            "state": null,
            "missing": false
          },
          {
            "v": "301",
            "state": null,
            "missing": false
          },
          {
            "v": "18.36%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-44.26%",
            "state": null,
            "missing": false
          },
          {
            "v": "489,555.82",
            "state": null,
            "missing": false
          },
          {
            "v": "20.57%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-44.29%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "风衣",
            "state": null,
            "missing": false
          },
          {
            "v": "164",
            "state": null,
            "missing": false
          },
          {
            "v": "10.01%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+100.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "315,837.55",
            "state": null,
            "missing": false
          },
          {
            "v": "13.27%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+113.58%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "肩背包",
            "state": null,
            "missing": false
          },
          {
            "v": "101",
            "state": null,
            "missing": false
          },
          {
            "v": "6.16%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+40.28%",
            "state": null,
            "missing": false
          },
          {
            "v": "255,335.33",
            "state": null,
            "missing": false
          },
          {
            "v": "10.73%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+43.36%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "针织开衫",
            "state": null,
            "missing": false
          },
          {
            "v": "182",
            "state": null,
            "missing": false
          },
          {
            "v": "11.10%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+47.97%",
            "state": null,
            "missing": false
          },
          {
            "v": "237,803.09",
            "state": null,
            "missing": false
          },
          {
            "v": "9.99%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+77.02%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "短外套",
            "state": null,
            "missing": false
          },
          {
            "v": "125",
            "state": null,
            "missing": false
          },
          {
            "v": "7.63%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+104.92%",
            "state": null,
            "missing": false
          },
          {
            "v": "192,014.63",
            "state": null,
            "missing": false
          },
          {
            "v": "8.07%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+109.08%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "牛仔裤",
            "state": null,
            "missing": false
          },
          {
            "v": "142",
            "state": null,
            "missing": false
          },
          {
            "v": "8.66%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+5.19%",
            "state": null,
            "missing": false
          },
          {
            "v": "150,874.35",
            "state": null,
            "missing": false
          },
          {
            "v": "6.34%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+3.82%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "半裙",
            "state": null,
            "missing": false
          },
          {
            "v": "123",
            "state": null,
            "missing": false
          },
          {
            "v": "7.50%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-23.60%",
            "state": null,
            "missing": false
          },
          {
            "v": "127,858.38",
            "state": null,
            "missing": false
          },
          {
            "v": "5.37%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-20.72%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "毛衫",
            "state": null,
            "missing": false
          },
          {
            "v": "101",
            "state": null,
            "missing": false
          },
          {
            "v": "6.16%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+197.06%",
            "state": null,
            "missing": false
          },
          {
            "v": "105,686.17",
            "state": null,
            "missing": false
          },
          {
            "v": "4.44%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+220.05%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "上衣",
            "state": null,
            "missing": false
          },
          {
            "v": "82",
            "state": null,
            "missing": false
          },
          {
            "v": "5.00%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-49.38%",
            "state": null,
            "missing": false
          },
          {
            "v": "73,400.48",
            "state": null,
            "missing": false
          },
          {
            "v": "3.08%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-52.24%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "皮衣",
            "state": null,
            "missing": false
          },
          {
            "v": "38",
            "state": null,
            "missing": false
          },
          {
            "v": "2.32%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+280.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "62,405.90",
            "state": null,
            "missing": false
          },
          {
            "v": "2.62%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+291.33%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "风衣",
            "state": null,
            "missing": false
          },
          {
            "v": "245",
            "state": null,
            "missing": false
          },
          {
            "v": "16.37%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+231.08%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+184.88%",
            "state": null,
            "missing": false
          },
          {
            "v": "448,055.05",
            "state": null,
            "missing": false
          },
          {
            "v": "19.98%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+262.09%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+182.97%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "肩背包",
            "state": null,
            "missing": false
          },
          {
            "v": "135",
            "state": null,
            "missing": false
          },
          {
            "v": "9.02%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+206.82%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+26.17%",
            "state": null,
            "missing": false
          },
          {
            "v": "353,854.20",
            "state": null,
            "missing": false
          },
          {
            "v": "15.78%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+227.16%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+32.09%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "短外套",
            "state": null,
            "missing": false
          },
          {
            "v": "182",
            "state": null,
            "missing": false
          },
          {
            "v": "12.16%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+59.65%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+70.09%",
            "state": null,
            "missing": false
          },
          {
            "v": "288,596.05",
            "state": null,
            "missing": false
          },
          {
            "v": "12.87%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+64.78%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+94.94%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "针织开衫",
            "state": null,
            "missing": false
          },
          {
            "v": "174",
            "state": null,
            "missing": false
          },
          {
            "v": "11.62%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+112.20%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+112.20%",
            "state": null,
            "missing": false
          },
          {
            "v": "238,175.97",
            "state": null,
            "missing": false
          },
          {
            "v": "10.62%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+118.04%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+178.14%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "牛仔裤",
            "state": null,
            "missing": false
          },
          {
            "v": "125",
            "state": null,
            "missing": false
          },
          {
            "v": "8.35%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+140.38%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-6.72%",
            "state": null,
            "missing": false
          },
          {
            "v": "133,044.17",
            "state": null,
            "missing": false
          },
          {
            "v": "5.93%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+153.94%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-9.71%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "连衣裙",
            "state": null,
            "missing": false
          },
          {
            "v": "75",
            "state": null,
            "missing": false
          },
          {
            "v": "5.01%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+1400.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-75.08%",
            "state": null,
            "missing": false
          },
          {
            "v": "129,704.51",
            "state": null,
            "missing": false
          },
          {
            "v": "5.78%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+923.50%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-73.10%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "半裙",
            "state": null,
            "missing": false
          },
          {
            "v": "99",
            "state": null,
            "missing": false
          },
          {
            "v": "6.61%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+200.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-15.38%",
            "state": null,
            "missing": false
          },
          {
            "v": "100,596.31",
            "state": null,
            "missing": false
          },
          {
            "v": "4.49%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+163.52%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-12.78%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "皮衣",
            "state": null,
            "missing": false
          },
          {
            "v": "60",
            "state": null,
            "missing": false
          },
          {
            "v": "4.01%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+2900.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+233.33%",
            "state": null,
            "missing": false
          },
          {
            "v": "98,972.42",
            "state": null,
            "missing": false
          },
          {
            "v": "4.41%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+3476.91%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+239.22%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "毛衫",
            "state": null,
            "missing": false
          },
          {
            "v": "86",
            "state": null,
            "missing": false
          },
          {
            "v": "5.74%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+19.44%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+160.61%",
            "state": null,
            "missing": false
          },
          {
            "v": "92,017.05",
            "state": null,
            "missing": false
          },
          {
            "v": "4.10%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+17.27%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+172.46%",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "大衣",
            "state": null,
            "missing": false
          },
          {
            "v": "30",
            "state": null,
            "missing": false
          },
          {
            "v": "2.00%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+50.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "77,026.24",
            "state": null,
            "missing": false
          },
          {
            "v": "3.43%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+26.70%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "风衣",
            "state": null,
            "missing": false
          },
          {
            "v": "73",
            "state": null,
            "missing": false
          },
          {
            "v": "17.59%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "118,523.20",
            "state": null,
            "missing": false
          },
          {
            "v": "19.75%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "肩背包",
            "state": null,
            "missing": false
          },
          {
            "v": "43",
            "state": null,
            "missing": false
          },
          {
            "v": "10.36%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "104,008.51",
            "state": null,
            "missing": false
          },
          {
            "v": "17.33%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "针织开衫",
            "state": null,
            "missing": false
          },
          {
            "v": "74",
            "state": null,
            "missing": false
          },
          {
            "v": "17.83%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "102,049.40",
            "state": null,
            "missing": false
          },
          {
            "v": "17.01%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "连衣裙",
            "state": null,
            "missing": false
          },
          {
            "v": "33",
            "state": null,
            "missing": false
          },
          {
            "v": "7.95%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "51,525.73",
            "state": null,
            "missing": false
          },
          {
            "v": "8.59%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "短外套",
            "state": null,
            "missing": false
          },
          {
            "v": "21",
            "state": null,
            "missing": false
          },
          {
            "v": "5.06%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "35,433.51",
            "state": null,
            "missing": false
          },
          {
            "v": "5.91%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "牛仔裤",
            "state": null,
            "missing": false
          },
          {
            "v": "35",
            "state": null,
            "missing": false
          },
          {
            "v": "8.43%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "35,352.81",
            "state": null,
            "missing": false
          },
          {
            "v": "5.89%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "毛衫",
            "state": null,
            "missing": false
          },
          {
            "v": "22",
            "state": null,
            "missing": false
          },
          {
            "v": "5.30%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "23,341.02",
            "state": null,
            "missing": false
          },
          {
            "v": "3.89%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "半裙",
            "state": null,
            "missing": false
          },
          {
            "v": "23",
            "state": null,
            "missing": false
          },
          {
            "v": "5.54%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "22,365.83",
            "state": null,
            "missing": false
          },
          {
            "v": "3.73%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "皮衣",
            "state": null,
            "missing": false
          },
          {
            "v": "13",
            "state": null,
            "missing": false
          },
          {
            "v": "3.13%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "22,055.96",
            "state": null,
            "missing": false
          },
          {
            "v": "3.68%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "大衣",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "1.20%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "14,851.73",
            "state": null,
            "missing": false
          },
          {
            "v": "2.48%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ]
      ],
      "headNote": null,
      "points": [
        "全店段 Top1 连衣裙 1,431,344.77 元环比 -43.66%，Top2 肩背包 1,016,837.69 元环比 +40.00%。",
        "深圳 Top1 连衣裙 364,887.91；上海 Top1 连衣裙 383,316.33；北京 Top1 肩背包 278,809.06；杭州 Top1 连衣裙 148,544.43。"
      ],
      "note": null
    },
    {
      "key": "t3d",
      "title": "块 3-4 年季",
      "columns": [
        {
          "name": "门店名称"
        },
        {
          "name": "年季"
        },
        {
          "name": "销售件数"
        },
        {
          "name": "销售件数占比"
        },
        {
          "name": "销售件数同比"
        },
        {
          "name": "销售件数环比"
        },
        {
          "name": "销售额"
        },
        {
          "name": "销售额占比"
        },
        {
          "name": "销售额同比"
        },
        {
          "name": "销售额环比"
        },
        {
          "name": "销售额占比变化"
        }
      ],
      "rows": [
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "26秋",
            "state": null,
            "missing": false
          },
          {
            "v": "2,946",
            "state": null,
            "missing": false
          },
          {
            "v": "52.58%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+17.89%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "3,858,920.88",
            "state": null,
            "missing": false
          },
          {
            "v": "48.31%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+24.73%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+5.58 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "26夏",
            "state": null,
            "missing": false
          },
          {
            "v": "1,082",
            "state": null,
            "missing": false
          },
          {
            "v": "19.31%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-52.56%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "1,580,344.13",
            "state": null,
            "missing": false
          },
          {
            "v": "19.79%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-48.02%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-22.20 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "26冬",
            "state": null,
            "missing": false
          },
          {
            "v": "680",
            "state": null,
            "missing": false
          },
          {
            "v": "12.14%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+11233.33%",
            "state": "good",
            "missing": false
          },
          {
            "v": "1,132,012.90",
            "state": null,
            "missing": false
          },
          {
            "v": "14.17%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+10509.36%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+14.03 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "25冬",
            "state": null,
            "missing": false
          },
          {
            "v": "164",
            "state": null,
            "missing": false
          },
          {
            "v": "2.93%",
            "state": null,
            "missing": false
          },
          {
            "v": "+115.79%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+43.86%",
            "state": "good",
            "missing": false
          },
          {
            "v": "396,652.22",
            "state": null,
            "missing": false
          },
          {
            "v": "4.97%",
            "state": null,
            "missing": false
          },
          {
            "v": "+141.89%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+36.13%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+0.94 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "26春",
            "state": null,
            "missing": false
          },
          {
            "v": "241",
            "state": null,
            "missing": false
          },
          {
            "v": "4.30%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+7.59%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "295,250.07",
            "state": null,
            "missing": false
          },
          {
            "v": "3.70%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+9.18%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "-0.04 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "25夏",
            "state": null,
            "missing": false
          },
          {
            "v": "150",
            "state": null,
            "missing": false
          },
          {
            "v": "2.68%",
            "state": null,
            "missing": false
          },
          {
            "v": "+233.33%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-31.82%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "270,414.10",
            "state": null,
            "missing": false
          },
          {
            "v": "3.39%",
            "state": null,
            "missing": false
          },
          {
            "v": "+146.02%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-22.63%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-1.44 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "25秋",
            "state": null,
            "missing": false
          },
          {
            "v": "160",
            "state": null,
            "missing": false
          },
          {
            "v": "2.86%",
            "state": null,
            "missing": false
          },
          {
            "v": "-56.28%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "+321.05%",
            "state": "good",
            "missing": false
          },
          {
            "v": "244,900.18",
            "state": null,
            "missing": false
          },
          {
            "v": "3.07%",
            "state": null,
            "missing": false
          },
          {
            "v": "-53.28%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "+406.18%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+2.40 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "24秋",
            "state": null,
            "missing": false
          },
          {
            "v": "46",
            "state": null,
            "missing": false
          },
          {
            "v": "0.82%",
            "state": null,
            "missing": false
          },
          {
            "v": "-4.17%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "61,890.28",
            "state": null,
            "missing": false
          },
          {
            "v": "0.77%",
            "state": null,
            "missing": false
          },
          {
            "v": "+6.68%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "25春",
            "state": null,
            "missing": false
          },
          {
            "v": "71",
            "state": null,
            "missing": false
          },
          {
            "v": "1.27%",
            "state": null,
            "missing": false
          },
          {
            "v": "+36.54%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-34.86%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "56,858.46",
            "state": null,
            "missing": false
          },
          {
            "v": "0.71%",
            "state": null,
            "missing": false
          },
          {
            "v": "-2.66%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-26.43%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-0.36 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "24春",
            "state": null,
            "missing": false
          },
          {
            "v": "25",
            "state": null,
            "missing": false
          },
          {
            "v": "0.45%",
            "state": null,
            "missing": false
          },
          {
            "v": "+212.50%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-13.79%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "34,168.43",
            "state": null,
            "missing": false
          },
          {
            "v": "0.43%",
            "state": null,
            "missing": false
          },
          {
            "v": "+294.23%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-12.39%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-0.11 pp",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "其他",
            "state": null,
            "missing": false
          },
          {
            "v": "38",
            "state": null,
            "missing": false
          },
          {
            "v": "0.68%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "55,964.10",
            "state": null,
            "missing": false
          },
          {
            "v": "0.70%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "26秋",
            "state": null,
            "missing": false
          },
          {
            "v": "916",
            "state": null,
            "missing": false
          },
          {
            "v": "44.64%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+15.80%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "1,205,532.77",
            "state": null,
            "missing": false
          },
          {
            "v": "43.61%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+25.58%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "26夏",
            "state": null,
            "missing": false
          },
          {
            "v": "591",
            "state": null,
            "missing": false
          },
          {
            "v": "28.80%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-47.00%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "827,633.28",
            "state": null,
            "missing": false
          },
          {
            "v": "29.94%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-42.97%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "26冬",
            "state": null,
            "missing": false
          },
          {
            "v": "123",
            "state": null,
            "missing": false
          },
          {
            "v": "5.99%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+12200.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "194,274.72",
            "state": null,
            "missing": false
          },
          {
            "v": "7.03%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+10166.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "26春",
            "state": null,
            "missing": false
          },
          {
            "v": "144",
            "state": null,
            "missing": false
          },
          {
            "v": "7.02%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+105.71%",
            "state": "good",
            "missing": false
          },
          {
            "v": "147,445.15",
            "state": null,
            "missing": false
          },
          {
            "v": "5.33%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+109.32%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "25夏",
            "state": null,
            "missing": false
          },
          {
            "v": "100",
            "state": null,
            "missing": false
          },
          {
            "v": "4.87%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-27.01%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "141,412.52",
            "state": null,
            "missing": false
          },
          {
            "v": "5.12%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-34.60%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "25冬",
            "state": null,
            "missing": false
          },
          {
            "v": "41",
            "state": null,
            "missing": false
          },
          {
            "v": "2.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+32.26%",
            "state": "good",
            "missing": false
          },
          {
            "v": "99,648.61",
            "state": null,
            "missing": false
          },
          {
            "v": "3.60%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+31.31%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "25秋",
            "state": null,
            "missing": false
          },
          {
            "v": "34",
            "state": null,
            "missing": false
          },
          {
            "v": "1.66%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+161.54%",
            "state": "good",
            "missing": false
          },
          {
            "v": "48,925.71",
            "state": null,
            "missing": false
          },
          {
            "v": "1.77%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+186.85%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "25春",
            "state": null,
            "missing": false
          },
          {
            "v": "58",
            "state": null,
            "missing": false
          },
          {
            "v": "2.83%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-12.12%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "46,776.76",
            "state": null,
            "missing": false
          },
          {
            "v": "1.69%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+2.74%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "24春",
            "state": null,
            "missing": false
          },
          {
            "v": "18",
            "state": null,
            "missing": false
          },
          {
            "v": "0.88%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+5.88%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "25,599.35",
            "state": null,
            "missing": false
          },
          {
            "v": "0.93%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+11.02%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "24夏",
            "state": null,
            "missing": false
          },
          {
            "v": "19",
            "state": null,
            "missing": false
          },
          {
            "v": "0.93%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+111.11%",
            "state": "good",
            "missing": false
          },
          {
            "v": "14,449.42",
            "state": null,
            "missing": false
          },
          {
            "v": "0.52%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+252.59%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "其他",
            "state": null,
            "missing": false
          },
          {
            "v": "8",
            "state": null,
            "missing": false
          },
          {
            "v": "0.39%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "12,706.93",
            "state": null,
            "missing": false
          },
          {
            "v": "0.46%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "26秋",
            "state": null,
            "missing": false
          },
          {
            "v": "879",
            "state": null,
            "missing": false
          },
          {
            "v": "53.63%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-3.93%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "1,147,669.80",
            "state": null,
            "missing": false
          },
          {
            "v": "48.22%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-1.26%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "26夏",
            "state": null,
            "missing": false
          },
          {
            "v": "308",
            "state": null,
            "missing": false
          },
          {
            "v": "18.79%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-55.49%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "460,415.96",
            "state": null,
            "missing": false
          },
          {
            "v": "19.34%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-50.96%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "26冬",
            "state": null,
            "missing": false
          },
          {
            "v": "253",
            "state": null,
            "missing": false
          },
          {
            "v": "15.44%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+12550.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "413,464.19",
            "state": null,
            "missing": false
          },
          {
            "v": "17.37%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+11454.41%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "25冬",
            "state": null,
            "missing": false
          },
          {
            "v": "64",
            "state": null,
            "missing": false
          },
          {
            "v": "3.90%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+60.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "155,551.97",
            "state": null,
            "missing": false
          },
          {
            "v": "6.54%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+37.61%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "25秋",
            "state": null,
            "missing": false
          },
          {
            "v": "47",
            "state": null,
            "missing": false
          },
          {
            "v": "2.87%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+327.27%",
            "state": "good",
            "missing": false
          },
          {
            "v": "66,133.07",
            "state": null,
            "missing": false
          },
          {
            "v": "2.78%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+381.61%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "25夏",
            "state": null,
            "missing": false
          },
          {
            "v": "25",
            "state": null,
            "missing": false
          },
          {
            "v": "1.53%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-19.35%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "61,375.57",
            "state": null,
            "missing": false
          },
          {
            "v": "2.58%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+33.66%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "26春",
            "state": null,
            "missing": false
          },
          {
            "v": "38",
            "state": null,
            "missing": false
          },
          {
            "v": "2.32%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-57.30%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "47,851.58",
            "state": null,
            "missing": false
          },
          {
            "v": "2.01%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-54.54%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "24冬",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "0.24%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "9,287.73",
            "state": null,
            "missing": false
          },
          {
            "v": "0.39%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "24春",
            "state": null,
            "missing": false
          },
          {
            "v": "7",
            "state": null,
            "missing": false
          },
          {
            "v": "0.43%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+16.67%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "8,923.83",
            "state": null,
            "missing": false
          },
          {
            "v": "0.37%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+16.62%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "25春",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "0.61%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-50.00%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "7,265.91",
            "state": null,
            "missing": false
          },
          {
            "v": "0.31%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-53.39%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "其他",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "0.24%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "2,247.69",
            "state": null,
            "missing": false
          },
          {
            "v": "0.09%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "26秋",
            "state": null,
            "missing": false
          },
          {
            "v": "914",
            "state": null,
            "missing": false
          },
          {
            "v": "61.06%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+15.26%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "1,204,644.82",
            "state": null,
            "missing": false
          },
          {
            "v": "53.71%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+23.98%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "26冬",
            "state": null,
            "missing": false
          },
          {
            "v": "229",
            "state": null,
            "missing": false
          },
          {
            "v": "15.30%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+7533.33%",
            "state": "good",
            "missing": false
          },
          {
            "v": "394,112.24",
            "state": null,
            "missing": false
          },
          {
            "v": "17.57%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+7480.35%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "26夏",
            "state": null,
            "missing": false
          },
          {
            "v": "150",
            "state": null,
            "missing": false
          },
          {
            "v": "10.02%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-68.35%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "239,913.94",
            "state": null,
            "missing": false
          },
          {
            "v": "10.70%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-63.09%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "25冬",
            "state": null,
            "missing": false
          },
          {
            "v": "46",
            "state": null,
            "missing": false
          },
          {
            "v": "3.07%",
            "state": null,
            "missing": false
          },
          {
            "v": "-39.47%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "+6.98%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "110,274.77",
            "state": null,
            "missing": false
          },
          {
            "v": "4.92%",
            "state": null,
            "missing": false
          },
          {
            "v": "-32.75%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "+7.63%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "25秋",
            "state": null,
            "missing": false
          },
          {
            "v": "61",
            "state": null,
            "missing": false
          },
          {
            "v": "4.07%",
            "state": null,
            "missing": false
          },
          {
            "v": "-83.33%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "+335.71%",
            "state": "good",
            "missing": false
          },
          {
            "v": "103,748.29",
            "state": null,
            "missing": false
          },
          {
            "v": "4.63%",
            "state": null,
            "missing": false
          },
          {
            "v": "-80.21%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "+489.66%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "26春",
            "state": null,
            "missing": false
          },
          {
            "v": "35",
            "state": null,
            "missing": false
          },
          {
            "v": "2.34%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-46.15%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "75,031.81",
            "state": null,
            "missing": false
          },
          {
            "v": "3.35%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-20.78%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "24秋",
            "state": null,
            "missing": false
          },
          {
            "v": "28",
            "state": null,
            "missing": false
          },
          {
            "v": "1.87%",
            "state": null,
            "missing": false
          },
          {
            "v": "-41.67%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "40,557.27",
            "state": null,
            "missing": false
          },
          {
            "v": "1.81%",
            "state": null,
            "missing": false
          },
          {
            "v": "-30.09%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "25夏",
            "state": null,
            "missing": false
          },
          {
            "v": "15",
            "state": null,
            "missing": false
          },
          {
            "v": "1.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "-66.67%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-71.15%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "39,352.96",
            "state": null,
            "missing": false
          },
          {
            "v": "1.75%",
            "state": null,
            "missing": false
          },
          {
            "v": "-64.20%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "-54.96%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "24冬",
            "state": null,
            "missing": false
          },
          {
            "v": "11",
            "state": null,
            "missing": false
          },
          {
            "v": "0.73%",
            "state": null,
            "missing": false
          },
          {
            "v": "+37.50%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+266.67%",
            "state": "good",
            "missing": false
          },
          {
            "v": "23,725.29",
            "state": null,
            "missing": false
          },
          {
            "v": "1.06%",
            "state": null,
            "missing": false
          },
          {
            "v": "+45.94%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+235.52%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "23秋",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "0.33%",
            "state": null,
            "missing": false
          },
          {
            "v": "+150.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+400.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "8,955.66",
            "state": null,
            "missing": false
          },
          {
            "v": "0.40%",
            "state": null,
            "missing": false
          },
          {
            "v": "+223.66%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+429.92%",
            "state": "good",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "其他",
            "state": null,
            "missing": false
          },
          {
            "v": "3",
            "state": null,
            "missing": false
          },
          {
            "v": "0.20%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "2,461.04",
            "state": null,
            "missing": false
          },
          {
            "v": "0.11%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "26秋",
            "state": null,
            "missing": false
          },
          {
            "v": "237",
            "state": null,
            "missing": false
          },
          {
            "v": "57.11%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "301,073.49",
            "state": null,
            "missing": false
          },
          {
            "v": "50.18%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "26冬",
            "state": null,
            "missing": false
          },
          {
            "v": "75",
            "state": null,
            "missing": false
          },
          {
            "v": "18.07%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "130,161.75",
            "state": null,
            "missing": false
          },
          {
            "v": "21.69%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "26夏",
            "state": null,
            "missing": false
          },
          {
            "v": "33",
            "state": null,
            "missing": false
          },
          {
            "v": "7.95%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "52,380.95",
            "state": null,
            "missing": false
          },
          {
            "v": "8.73%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "25冬",
            "state": null,
            "missing": false
          },
          {
            "v": "13",
            "state": null,
            "missing": false
          },
          {
            "v": "3.13%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "31,176.87",
            "state": null,
            "missing": false
          },
          {
            "v": "5.20%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "25夏",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "2.41%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "28,273.05",
            "state": null,
            "missing": false
          },
          {
            "v": "4.71%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "25秋",
            "state": null,
            "missing": false
          },
          {
            "v": "18",
            "state": null,
            "missing": false
          },
          {
            "v": "4.34%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "26,093.11",
            "state": null,
            "missing": false
          },
          {
            "v": "4.35%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "26春",
            "state": null,
            "missing": false
          },
          {
            "v": "24",
            "state": null,
            "missing": false
          },
          {
            "v": "5.78%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "24,921.53",
            "state": null,
            "missing": false
          },
          {
            "v": "4.15%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "24秋",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "1.20%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "5,924.39",
            "state": null,
            "missing": false
          },
          {
            "v": "0.99%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "23秋",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "25春",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "其他",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ]
      ],
      "headNote": null,
      "points": [
        "全店段 26 秋占 50.83%，26 夏占 22.28%，26 春占 9.97%。秋季品为绝对主力。",
        "杭州 26 秋占比 55.01% 为四店最高（开业即上秋季新品），深圳 47.42% 最低。"
      ],
      "note": null
    },
    {
      "key": "t3e",
      "title": "块 3-5 TOP 汇总",
      "columns": [
        {
          "name": "门店名称"
        },
        {
          "name": "TOP 分级"
        },
        {
          "name": "款数"
        },
        {
          "name": "销售件数"
        },
        {
          "name": "销售额"
        },
        {
          "name": "销售额占比"
        },
        {
          "name": "款均销售件数"
        },
        {
          "name": "款均销售额"
        },
        {
          "name": "去年同期款数"
        },
        {
          "name": "去年同期销售件数"
        },
        {
          "name": "去年同期销售额"
        },
        {
          "name": "去年同期销售额占比"
        },
        {
          "name": "去年同期款均销售额"
        },
        {
          "name": "上期款数"
        },
        {
          "name": "上期销售件数"
        },
        {
          "name": "上期销售额"
        },
        {
          "name": "上期销售额占比"
        },
        {
          "name": "上期款均销售额"
        },
        {
          "name": "销售额占比同比"
        },
        {
          "name": "销售额占比环比"
        },
        {
          "name": "销售件数同比"
        },
        {
          "name": "销售件数环比"
        },
        {
          "name": "款数同比"
        },
        {
          "name": "款数环比"
        },
        {
          "name": "款均销售额同比"
        },
        {
          "name": "款均销售额环比"
        },
        {
          "name": "本期款均销售额"
        },
        {
          "name": "对比期款均销售额"
        }
      ],
      "rows": [
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP1",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "181",
            "state": null,
            "missing": false
          },
          {
            "v": "305,862.50",
            "state": null,
            "missing": false
          },
          {
            "v": "3.83%",
            "state": null,
            "missing": false
          },
          {
            "v": "181.0",
            "state": null,
            "missing": false
          },
          {
            "v": "305,862.50",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "23",
            "state": null,
            "missing": false
          },
          {
            "v": "35,892.28",
            "state": null,
            "missing": false
          },
          {
            "v": "3.80%",
            "state": null,
            "missing": false
          },
          {
            "v": "35,892.28",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "76",
            "state": null,
            "missing": false
          },
          {
            "v": "171,100.06",
            "state": null,
            "missing": false
          },
          {
            "v": "2.36%",
            "state": null,
            "missing": false
          },
          {
            "v": "171,100.06",
            "state": null,
            "missing": false
          },
          {
            "v": "+0.03 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+1.47 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+686.96%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+138.16%",
            "state": "good",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+752.17%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+78.76%",
            "state": "good",
            "missing": false
          },
          {
            "v": "305,862.50",
            "state": null,
            "missing": false
          },
          {
            "v": "35,892.28",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP2-5",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "237",
            "state": null,
            "missing": false
          },
          {
            "v": "539,847.76",
            "state": null,
            "missing": false
          },
          {
            "v": "6.76%",
            "state": null,
            "missing": false
          },
          {
            "v": "59.2",
            "state": null,
            "missing": false
          },
          {
            "v": "134,961.94",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "47",
            "state": null,
            "missing": false
          },
          {
            "v": "112,038.10",
            "state": null,
            "missing": false
          },
          {
            "v": "11.87%",
            "state": null,
            "missing": false
          },
          {
            "v": "28,009.52",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "272",
            "state": null,
            "missing": false
          },
          {
            "v": "533,134.16",
            "state": null,
            "missing": false
          },
          {
            "v": "7.36%",
            "state": null,
            "missing": false
          },
          {
            "v": "133,283.54",
            "state": null,
            "missing": false
          },
          {
            "v": "-5.11 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "-0.61 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+404.26%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-12.87%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+381.84%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+1.26%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "134,961.94",
            "state": null,
            "missing": false
          },
          {
            "v": "28,009.52",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP6-10",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "195",
            "state": null,
            "missing": false
          },
          {
            "v": "458,620.94",
            "state": null,
            "missing": false
          },
          {
            "v": "5.74%",
            "state": null,
            "missing": false
          },
          {
            "v": "39.0",
            "state": null,
            "missing": false
          },
          {
            "v": "91,724.19",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "48",
            "state": null,
            "missing": false
          },
          {
            "v": "98,180.99",
            "state": null,
            "missing": false
          },
          {
            "v": "10.40%",
            "state": null,
            "missing": false
          },
          {
            "v": "19,636.20",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "282",
            "state": null,
            "missing": false
          },
          {
            "v": "439,385.53",
            "state": null,
            "missing": false
          },
          {
            "v": "6.07%",
            "state": null,
            "missing": false
          },
          {
            "v": "87,877.11",
            "state": null,
            "missing": false
          },
          {
            "v": "-4.66 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "-0.33 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+306.25%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-30.85%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+367.12%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+4.38%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "91,724.19",
            "state": null,
            "missing": false
          },
          {
            "v": "19,636.20",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP11-20",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "413",
            "state": null,
            "missing": false
          },
          {
            "v": "671,045.69",
            "state": null,
            "missing": false
          },
          {
            "v": "8.40%",
            "state": null,
            "missing": false
          },
          {
            "v": "41.3",
            "state": null,
            "missing": false
          },
          {
            "v": "67,104.57",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "91",
            "state": null,
            "missing": false
          },
          {
            "v": "156,175.17",
            "state": null,
            "missing": false
          },
          {
            "v": "16.55%",
            "state": null,
            "missing": false
          },
          {
            "v": "15,617.52",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "372",
            "state": null,
            "missing": false
          },
          {
            "v": "611,472.74",
            "state": null,
            "missing": false
          },
          {
            "v": "8.45%",
            "state": null,
            "missing": false
          },
          {
            "v": "61,147.27",
            "state": null,
            "missing": false
          },
          {
            "v": "-8.15 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "-0.04 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+353.85%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+11.02%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+329.68%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+9.74%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "67,104.57",
            "state": null,
            "missing": false
          },
          {
            "v": "15,617.52",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP20-50",
            "state": null,
            "missing": false
          },
          {
            "v": "30",
            "state": null,
            "missing": false
          },
          {
            "v": "849",
            "state": null,
            "missing": false
          },
          {
            "v": "1,432,557.98",
            "state": null,
            "missing": false
          },
          {
            "v": "17.94%",
            "state": null,
            "missing": false
          },
          {
            "v": "28.3",
            "state": null,
            "missing": false
          },
          {
            "v": "47,751.93",
            "state": null,
            "missing": false
          },
          {
            "v": "30",
            "state": null,
            "missing": false
          },
          {
            "v": "157",
            "state": null,
            "missing": false
          },
          {
            "v": "245,229.03",
            "state": null,
            "missing": false
          },
          {
            "v": "25.98%",
            "state": null,
            "missing": false
          },
          {
            "v": "8,174.30",
            "state": null,
            "missing": false
          },
          {
            "v": "30",
            "state": null,
            "missing": false
          },
          {
            "v": "876",
            "state": null,
            "missing": false
          },
          {
            "v": "1,263,882.51",
            "state": null,
            "missing": false
          },
          {
            "v": "17.46%",
            "state": null,
            "missing": false
          },
          {
            "v": "42,129.42",
            "state": null,
            "missing": false
          },
          {
            "v": "-8.05 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+0.48 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+440.76%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-3.08%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+484.17%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+13.35%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "47,751.93",
            "state": null,
            "missing": false
          },
          {
            "v": "8,174.30",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP50-100",
            "state": null,
            "missing": false
          },
          {
            "v": "50",
            "state": null,
            "missing": false
          },
          {
            "v": "1,064",
            "state": null,
            "missing": false
          },
          {
            "v": "1,464,809.25",
            "state": null,
            "missing": false
          },
          {
            "v": "18.34%",
            "state": null,
            "missing": false
          },
          {
            "v": "21.3",
            "state": null,
            "missing": false
          },
          {
            "v": "29,296.19",
            "state": null,
            "missing": false
          },
          {
            "v": "50",
            "state": null,
            "missing": false
          },
          {
            "v": "154",
            "state": null,
            "missing": false
          },
          {
            "v": "198,054.61",
            "state": null,
            "missing": false
          },
          {
            "v": "20.98%",
            "state": null,
            "missing": false
          },
          {
            "v": "3,961.09",
            "state": null,
            "missing": false
          },
          {
            "v": "50",
            "state": null,
            "missing": false
          },
          {
            "v": "1,089",
            "state": null,
            "missing": false
          },
          {
            "v": "1,378,386.13",
            "state": null,
            "missing": false
          },
          {
            "v": "19.04%",
            "state": null,
            "missing": false
          },
          {
            "v": "27,567.72",
            "state": null,
            "missing": false
          },
          {
            "v": "-2.65 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "-0.70 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+590.91%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-2.30%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+639.60%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+6.27%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "29,296.19",
            "state": null,
            "missing": false
          },
          {
            "v": "3,961.09",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "全部正店合计",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP100 汇总",
            "state": null,
            "missing": false
          },
          {
            "v": "100",
            "state": null,
            "missing": false
          },
          {
            "v": "2,939",
            "state": null,
            "missing": false
          },
          {
            "v": "4,872,744.12",
            "state": null,
            "missing": false
          },
          {
            "v": "61.01%",
            "state": null,
            "missing": false
          },
          {
            "v": "29.4",
            "state": null,
            "missing": false
          },
          {
            "v": "48,727.44",
            "state": null,
            "missing": false
          },
          {
            "v": "100",
            "state": null,
            "missing": false
          },
          {
            "v": "520",
            "state": null,
            "missing": false
          },
          {
            "v": "845,570.18",
            "state": null,
            "missing": false
          },
          {
            "v": "89.59%",
            "state": null,
            "missing": false
          },
          {
            "v": "8,455.70",
            "state": null,
            "missing": false
          },
          {
            "v": "100",
            "state": null,
            "missing": false
          },
          {
            "v": "2,967",
            "state": null,
            "missing": false
          },
          {
            "v": "4,397,361.13",
            "state": null,
            "missing": false
          },
          {
            "v": "60.74%",
            "state": null,
            "missing": false
          },
          {
            "v": "43,973.61",
            "state": null,
            "missing": false
          },
          {
            "v": "-28.58 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+0.27 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+465.19%",
            "state": "good",
            "missing": false
          },
          {
            "v": "-0.94%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+476.27%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+10.81%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "48,727.44",
            "state": null,
            "missing": false
          },
          {
            "v": "8,455.70",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP1",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "46",
            "state": null,
            "missing": false
          },
          {
            "v": "78,299.18",
            "state": null,
            "missing": false
          },
          {
            "v": "2.83%",
            "state": null,
            "missing": false
          },
          {
            "v": "46.0",
            "state": null,
            "missing": false
          },
          {
            "v": "78,299.18",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "37",
            "state": null,
            "missing": false
          },
          {
            "v": "83,617.02",
            "state": null,
            "missing": false
          },
          {
            "v": "2.92%",
            "state": null,
            "missing": false
          },
          {
            "v": "83,617.02",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-0.09 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+24.32%",
            "state": "good",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-6.36%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "78,299.18",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP2-5",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "111",
            "state": null,
            "missing": false
          },
          {
            "v": "187,630.43",
            "state": null,
            "missing": false
          },
          {
            "v": "6.79%",
            "state": null,
            "missing": false
          },
          {
            "v": "27.8",
            "state": null,
            "missing": false
          },
          {
            "v": "46,907.61",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "139",
            "state": null,
            "missing": false
          },
          {
            "v": "235,665.22",
            "state": null,
            "missing": false
          },
          {
            "v": "8.23%",
            "state": null,
            "missing": false
          },
          {
            "v": "58,916.30",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-1.44 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-20.14%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-20.38%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "46,907.61",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP6-10",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "77",
            "state": null,
            "missing": false
          },
          {
            "v": "172,609.24",
            "state": null,
            "missing": false
          },
          {
            "v": "6.24%",
            "state": null,
            "missing": false
          },
          {
            "v": "15.4",
            "state": null,
            "missing": false
          },
          {
            "v": "34,521.85",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "142",
            "state": null,
            "missing": false
          },
          {
            "v": "200,743.79",
            "state": null,
            "missing": false
          },
          {
            "v": "7.01%",
            "state": null,
            "missing": false
          },
          {
            "v": "40,148.76",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-0.76 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-45.77%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-14.02%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "34,521.85",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP11-20",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "157",
            "state": null,
            "missing": false
          },
          {
            "v": "269,773.24",
            "state": null,
            "missing": false
          },
          {
            "v": "9.76%",
            "state": null,
            "missing": false
          },
          {
            "v": "15.7",
            "state": null,
            "missing": false
          },
          {
            "v": "26,977.32",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "221",
            "state": null,
            "missing": false
          },
          {
            "v": "289,066.12",
            "state": null,
            "missing": false
          },
          {
            "v": "10.09%",
            "state": null,
            "missing": false
          },
          {
            "v": "28,906.61",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-0.33 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-28.96%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-6.67%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "26,977.32",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP20-50",
            "state": null,
            "missing": false
          },
          {
            "v": "30",
            "state": null,
            "missing": false
          },
          {
            "v": "430",
            "state": null,
            "missing": false
          },
          {
            "v": "566,681.66",
            "state": null,
            "missing": false
          },
          {
            "v": "20.50%",
            "state": null,
            "missing": false
          },
          {
            "v": "14.3",
            "state": null,
            "missing": false
          },
          {
            "v": "18,889.39",
            "state": null,
            "missing": false
          },
          {
            "v": "30",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "30",
            "state": null,
            "missing": false
          },
          {
            "v": "442",
            "state": null,
            "missing": false
          },
          {
            "v": "594,868.11",
            "state": null,
            "missing": false
          },
          {
            "v": "20.76%",
            "state": null,
            "missing": false
          },
          {
            "v": "19,828.94",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-0.26 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-2.71%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-4.74%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "18,889.39",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP50-100",
            "state": null,
            "missing": false
          },
          {
            "v": "50",
            "state": null,
            "missing": false
          },
          {
            "v": "456",
            "state": null,
            "missing": false
          },
          {
            "v": "617,630.56",
            "state": null,
            "missing": false
          },
          {
            "v": "22.34%",
            "state": null,
            "missing": false
          },
          {
            "v": "9.1",
            "state": null,
            "missing": false
          },
          {
            "v": "12,352.61",
            "state": null,
            "missing": false
          },
          {
            "v": "50",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "50",
            "state": null,
            "missing": false
          },
          {
            "v": "474",
            "state": null,
            "missing": false
          },
          {
            "v": "623,522.12",
            "state": null,
            "missing": false
          },
          {
            "v": "21.76%",
            "state": null,
            "missing": false
          },
          {
            "v": "12,470.44",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+0.58 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-3.80%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-0.94%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "12,352.61",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP100 汇总",
            "state": null,
            "missing": false
          },
          {
            "v": "100",
            "state": null,
            "missing": false
          },
          {
            "v": "1,277",
            "state": null,
            "missing": false
          },
          {
            "v": "1,892,624.31",
            "state": null,
            "missing": false
          },
          {
            "v": "68.46%",
            "state": null,
            "missing": false
          },
          {
            "v": "12.8",
            "state": null,
            "missing": false
          },
          {
            "v": "18,926.24",
            "state": null,
            "missing": false
          },
          {
            "v": "100",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "100",
            "state": null,
            "missing": false
          },
          {
            "v": "1,455",
            "state": null,
            "missing": false
          },
          {
            "v": "2,027,482.38",
            "state": null,
            "missing": false
          },
          {
            "v": "70.76%",
            "state": null,
            "missing": false
          },
          {
            "v": "20,274.82",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-2.30 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-12.23%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-6.65%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "18,926.24",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP1",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "18",
            "state": null,
            "missing": false
          },
          {
            "v": "62,004.18",
            "state": null,
            "missing": false
          },
          {
            "v": "2.61%",
            "state": null,
            "missing": false
          },
          {
            "v": "18.0",
            "state": null,
            "missing": false
          },
          {
            "v": "62,004.18",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "24",
            "state": null,
            "missing": false
          },
          {
            "v": "57,126.18",
            "state": null,
            "missing": false
          },
          {
            "v": "2.37%",
            "state": null,
            "missing": false
          },
          {
            "v": "57,126.18",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+0.24 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-25.00%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+8.54%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "62,004.18",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP2-5",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "93",
            "state": null,
            "missing": false
          },
          {
            "v": "185,913.07",
            "state": null,
            "missing": false
          },
          {
            "v": "7.81%",
            "state": null,
            "missing": false
          },
          {
            "v": "23.2",
            "state": null,
            "missing": false
          },
          {
            "v": "46,478.27",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "96",
            "state": null,
            "missing": false
          },
          {
            "v": "181,600.31",
            "state": null,
            "missing": false
          },
          {
            "v": "7.53%",
            "state": null,
            "missing": false
          },
          {
            "v": "45,400.08",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+0.28 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-3.12%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+2.37%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "46,478.27",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP6-10",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "85",
            "state": null,
            "missing": false
          },
          {
            "v": "153,415.28",
            "state": null,
            "missing": false
          },
          {
            "v": "6.45%",
            "state": null,
            "missing": false
          },
          {
            "v": "17.0",
            "state": null,
            "missing": false
          },
          {
            "v": "30,683.06",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "109",
            "state": null,
            "missing": false
          },
          {
            "v": "158,673.56",
            "state": null,
            "missing": false
          },
          {
            "v": "6.58%",
            "state": null,
            "missing": false
          },
          {
            "v": "31,734.71",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-0.14 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-22.02%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-3.31%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "30,683.06",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP11-20",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "116",
            "state": null,
            "missing": false
          },
          {
            "v": "229,160.67",
            "state": null,
            "missing": false
          },
          {
            "v": "9.63%",
            "state": null,
            "missing": false
          },
          {
            "v": "11.6",
            "state": null,
            "missing": false
          },
          {
            "v": "22,916.07",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "142",
            "state": null,
            "missing": false
          },
          {
            "v": "237,362.91",
            "state": null,
            "missing": false
          },
          {
            "v": "9.85%",
            "state": null,
            "missing": false
          },
          {
            "v": "23,736.29",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-0.22 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-18.31%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-3.46%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "22,916.07",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP20-50",
            "state": null,
            "missing": false
          },
          {
            "v": "30",
            "state": null,
            "missing": false
          },
          {
            "v": "332",
            "state": null,
            "missing": false
          },
          {
            "v": "486,675.83",
            "state": null,
            "missing": false
          },
          {
            "v": "20.45%",
            "state": null,
            "missing": false
          },
          {
            "v": "11.1",
            "state": null,
            "missing": false
          },
          {
            "v": "16,222.53",
            "state": null,
            "missing": false
          },
          {
            "v": "30",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "30",
            "state": null,
            "missing": false
          },
          {
            "v": "345",
            "state": null,
            "missing": false
          },
          {
            "v": "514,574.62",
            "state": null,
            "missing": false
          },
          {
            "v": "21.35%",
            "state": null,
            "missing": false
          },
          {
            "v": "17,152.49",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-0.90 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-3.77%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-5.42%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "16,222.53",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP50-100",
            "state": null,
            "missing": false
          },
          {
            "v": "50",
            "state": null,
            "missing": false
          },
          {
            "v": "352",
            "state": null,
            "missing": false
          },
          {
            "v": "504,720.92",
            "state": null,
            "missing": false
          },
          {
            "v": "21.21%",
            "state": null,
            "missing": false
          },
          {
            "v": "7.0",
            "state": null,
            "missing": false
          },
          {
            "v": "10,094.42",
            "state": null,
            "missing": false
          },
          {
            "v": "50",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "50",
            "state": null,
            "missing": false
          },
          {
            "v": "371",
            "state": null,
            "missing": false
          },
          {
            "v": "494,733.68",
            "state": null,
            "missing": false
          },
          {
            "v": "20.52%",
            "state": null,
            "missing": false
          },
          {
            "v": "9,894.67",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+0.68 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-5.12%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "+2.02%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "10,094.42",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP100 汇总",
            "state": null,
            "missing": false
          },
          {
            "v": "100",
            "state": null,
            "missing": false
          },
          {
            "v": "996",
            "state": null,
            "missing": false
          },
          {
            "v": "1,621,889.95",
            "state": null,
            "missing": false
          },
          {
            "v": "68.14%",
            "state": null,
            "missing": false
          },
          {
            "v": "10.0",
            "state": null,
            "missing": false
          },
          {
            "v": "16,218.90",
            "state": null,
            "missing": false
          },
          {
            "v": "100",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "100",
            "state": null,
            "missing": false
          },
          {
            "v": "1,087",
            "state": null,
            "missing": false
          },
          {
            "v": "1,644,071.26",
            "state": null,
            "missing": false
          },
          {
            "v": "68.20%",
            "state": null,
            "missing": false
          },
          {
            "v": "16,440.71",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-0.06 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-8.37%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "-1.35%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "16,218.90",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP1",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "75",
            "state": null,
            "missing": false
          },
          {
            "v": "127,508.53",
            "state": null,
            "missing": false
          },
          {
            "v": "5.69%",
            "state": null,
            "missing": false
          },
          {
            "v": "75.0",
            "state": null,
            "missing": false
          },
          {
            "v": "127,508.53",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "23",
            "state": null,
            "missing": false
          },
          {
            "v": "35,892.28",
            "state": null,
            "missing": false
          },
          {
            "v": "3.80%",
            "state": null,
            "missing": false
          },
          {
            "v": "35,892.28",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "25",
            "state": null,
            "missing": false
          },
          {
            "v": "59,406.36",
            "state": null,
            "missing": false
          },
          {
            "v": "3.02%",
            "state": null,
            "missing": false
          },
          {
            "v": "59,406.36",
            "state": null,
            "missing": false
          },
          {
            "v": "+1.88 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+2.66 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+226.09%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+200.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+255.25%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+114.64%",
            "state": "good",
            "missing": false
          },
          {
            "v": "127,508.53",
            "state": null,
            "missing": false
          },
          {
            "v": "35,892.28",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP2-5",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "85",
            "state": null,
            "missing": false
          },
          {
            "v": "199,987.04",
            "state": null,
            "missing": false
          },
          {
            "v": "8.92%",
            "state": null,
            "missing": false
          },
          {
            "v": "21.2",
            "state": null,
            "missing": false
          },
          {
            "v": "49,996.76",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "47",
            "state": null,
            "missing": false
          },
          {
            "v": "112,038.10",
            "state": null,
            "missing": false
          },
          {
            "v": "11.87%",
            "state": null,
            "missing": false
          },
          {
            "v": "28,009.52",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "69",
            "state": null,
            "missing": false
          },
          {
            "v": "152,570.80",
            "state": null,
            "missing": false
          },
          {
            "v": "7.77%",
            "state": null,
            "missing": false
          },
          {
            "v": "38,142.70",
            "state": null,
            "missing": false
          },
          {
            "v": "-2.95 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+1.15 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+80.85%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+23.19%",
            "state": "good",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+78.50%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+31.08%",
            "state": "good",
            "missing": false
          },
          {
            "v": "49,996.76",
            "state": null,
            "missing": false
          },
          {
            "v": "28,009.52",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP6-10",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "81",
            "state": null,
            "missing": false
          },
          {
            "v": "189,916.12",
            "state": null,
            "missing": false
          },
          {
            "v": "8.47%",
            "state": null,
            "missing": false
          },
          {
            "v": "16.2",
            "state": null,
            "missing": false
          },
          {
            "v": "37,983.22",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "48",
            "state": null,
            "missing": false
          },
          {
            "v": "98,180.99",
            "state": null,
            "missing": false
          },
          {
            "v": "10.40%",
            "state": null,
            "missing": false
          },
          {
            "v": "19,636.20",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "72",
            "state": null,
            "missing": false
          },
          {
            "v": "142,553.74",
            "state": null,
            "missing": false
          },
          {
            "v": "7.26%",
            "state": null,
            "missing": false
          },
          {
            "v": "28,510.75",
            "state": null,
            "missing": false
          },
          {
            "v": "-1.93 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+1.21 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+68.75%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+12.50%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+93.43%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+33.22%",
            "state": "good",
            "missing": false
          },
          {
            "v": "37,983.22",
            "state": null,
            "missing": false
          },
          {
            "v": "19,636.20",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP11-20",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "130",
            "state": null,
            "missing": false
          },
          {
            "v": "240,701.65",
            "state": null,
            "missing": false
          },
          {
            "v": "10.73%",
            "state": null,
            "missing": false
          },
          {
            "v": "13.0",
            "state": null,
            "missing": false
          },
          {
            "v": "24,070.16",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "91",
            "state": null,
            "missing": false
          },
          {
            "v": "156,175.17",
            "state": null,
            "missing": false
          },
          {
            "v": "16.55%",
            "state": null,
            "missing": false
          },
          {
            "v": "15,617.52",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "105",
            "state": null,
            "missing": false
          },
          {
            "v": "181,552.08",
            "state": null,
            "missing": false
          },
          {
            "v": "9.24%",
            "state": null,
            "missing": false
          },
          {
            "v": "18,155.21",
            "state": null,
            "missing": false
          },
          {
            "v": "-5.81 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+1.49 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+42.86%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+23.81%",
            "state": "good",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+54.12%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+32.58%",
            "state": "good",
            "missing": false
          },
          {
            "v": "24,070.16",
            "state": null,
            "missing": false
          },
          {
            "v": "15,617.52",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP20-50",
            "state": null,
            "missing": false
          },
          {
            "v": "30",
            "state": null,
            "missing": false
          },
          {
            "v": "324",
            "state": null,
            "missing": false
          },
          {
            "v": "502,133.82",
            "state": null,
            "missing": false
          },
          {
            "v": "22.39%",
            "state": null,
            "missing": false
          },
          {
            "v": "10.8",
            "state": null,
            "missing": false
          },
          {
            "v": "16,737.79",
            "state": null,
            "missing": false
          },
          {
            "v": "30",
            "state": null,
            "missing": false
          },
          {
            "v": "157",
            "state": null,
            "missing": false
          },
          {
            "v": "245,229.03",
            "state": null,
            "missing": false
          },
          {
            "v": "25.98%",
            "state": null,
            "missing": false
          },
          {
            "v": "8,174.30",
            "state": null,
            "missing": false
          },
          {
            "v": "30",
            "state": null,
            "missing": false
          },
          {
            "v": "301",
            "state": null,
            "missing": false
          },
          {
            "v": "401,021.24",
            "state": null,
            "missing": false
          },
          {
            "v": "20.42%",
            "state": null,
            "missing": false
          },
          {
            "v": "13,367.37",
            "state": null,
            "missing": false
          },
          {
            "v": "-3.59 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+1.97 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+106.37%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+7.64%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+104.76%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+25.21%",
            "state": "good",
            "missing": false
          },
          {
            "v": "16,737.79",
            "state": null,
            "missing": false
          },
          {
            "v": "8,174.30",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP50-100",
            "state": null,
            "missing": false
          },
          {
            "v": "50",
            "state": null,
            "missing": false
          },
          {
            "v": "345",
            "state": null,
            "missing": false
          },
          {
            "v": "463,766.71",
            "state": null,
            "missing": false
          },
          {
            "v": "20.68%",
            "state": null,
            "missing": false
          },
          {
            "v": "6.9",
            "state": null,
            "missing": false
          },
          {
            "v": "9,275.33",
            "state": null,
            "missing": false
          },
          {
            "v": "50",
            "state": null,
            "missing": false
          },
          {
            "v": "154",
            "state": null,
            "missing": false
          },
          {
            "v": "198,054.61",
            "state": null,
            "missing": false
          },
          {
            "v": "20.98%",
            "state": null,
            "missing": false
          },
          {
            "v": "3,961.09",
            "state": null,
            "missing": false
          },
          {
            "v": "50",
            "state": null,
            "missing": false
          },
          {
            "v": "327",
            "state": null,
            "missing": false
          },
          {
            "v": "410,000.34",
            "state": null,
            "missing": false
          },
          {
            "v": "20.88%",
            "state": null,
            "missing": false
          },
          {
            "v": "8,200.01",
            "state": null,
            "missing": false
          },
          {
            "v": "-0.31 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "-0.20 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+124.03%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+5.50%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+134.16%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+13.11%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "9,275.33",
            "state": null,
            "missing": false
          },
          {
            "v": "3,961.09",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP100 汇总",
            "state": null,
            "missing": false
          },
          {
            "v": "100",
            "state": null,
            "missing": false
          },
          {
            "v": "1,040",
            "state": null,
            "missing": false
          },
          {
            "v": "1,724,013.87",
            "state": null,
            "missing": false
          },
          {
            "v": "76.87%",
            "state": null,
            "missing": false
          },
          {
            "v": "10.4",
            "state": null,
            "missing": false
          },
          {
            "v": "17,240.14",
            "state": null,
            "missing": false
          },
          {
            "v": "100",
            "state": null,
            "missing": false
          },
          {
            "v": "520",
            "state": null,
            "missing": false
          },
          {
            "v": "845,570.18",
            "state": null,
            "missing": false
          },
          {
            "v": "89.59%",
            "state": null,
            "missing": false
          },
          {
            "v": "8,455.70",
            "state": null,
            "missing": false
          },
          {
            "v": "100",
            "state": null,
            "missing": false
          },
          {
            "v": "899",
            "state": null,
            "missing": false
          },
          {
            "v": "1,347,104.56",
            "state": null,
            "missing": false
          },
          {
            "v": "68.59%",
            "state": null,
            "missing": false
          },
          {
            "v": "13,471.05",
            "state": null,
            "missing": false
          },
          {
            "v": "-12.72 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+8.28 pp",
            "state": null,
            "missing": false
          },
          {
            "v": "+100.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+15.68%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "+103.89%",
            "state": "good",
            "missing": false
          },
          {
            "v": "+27.98%",
            "state": "good",
            "missing": false
          },
          {
            "v": "17,240.14",
            "state": null,
            "missing": false
          },
          {
            "v": "8,455.70",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP1",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "24",
            "state": null,
            "missing": false
          },
          {
            "v": "40,125.99",
            "state": null,
            "missing": false
          },
          {
            "v": "6.69%",
            "state": null,
            "missing": false
          },
          {
            "v": "24.0",
            "state": null,
            "missing": false
          },
          {
            "v": "40,125.99",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "40,125.99",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP2-5",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "38",
            "state": null,
            "missing": false
          },
          {
            "v": "63,404.77",
            "state": null,
            "missing": false
          },
          {
            "v": "10.57%",
            "state": null,
            "missing": false
          },
          {
            "v": "9.5",
            "state": null,
            "missing": false
          },
          {
            "v": "15,851.19",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "15,851.19",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP6-10",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "25",
            "state": null,
            "missing": false
          },
          {
            "v": "54,602.60",
            "state": null,
            "missing": false
          },
          {
            "v": "9.10%",
            "state": null,
            "missing": false
          },
          {
            "v": "5.0",
            "state": null,
            "missing": false
          },
          {
            "v": "10,920.52",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "5",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "10,920.52",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP11-20",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "48",
            "state": null,
            "missing": false
          },
          {
            "v": "86,268.42",
            "state": null,
            "missing": false
          },
          {
            "v": "14.38%",
            "state": null,
            "missing": false
          },
          {
            "v": "4.8",
            "state": null,
            "missing": false
          },
          {
            "v": "8,626.84",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "10",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "8,626.84",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP20-50",
            "state": null,
            "missing": false
          },
          {
            "v": "30",
            "state": null,
            "missing": false
          },
          {
            "v": "116",
            "state": null,
            "missing": false
          },
          {
            "v": "160,231.14",
            "state": null,
            "missing": false
          },
          {
            "v": "26.70%",
            "state": null,
            "missing": false
          },
          {
            "v": "3.9",
            "state": null,
            "missing": false
          },
          {
            "v": "5,341.04",
            "state": null,
            "missing": false
          },
          {
            "v": "30",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "30",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "5,341.04",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP50-100",
            "state": null,
            "missing": false
          },
          {
            "v": "50",
            "state": null,
            "missing": false
          },
          {
            "v": "102",
            "state": null,
            "missing": false
          },
          {
            "v": "135,237.83",
            "state": null,
            "missing": false
          },
          {
            "v": "22.54%",
            "state": null,
            "missing": false
          },
          {
            "v": "2.0",
            "state": null,
            "missing": false
          },
          {
            "v": "2,704.76",
            "state": null,
            "missing": false
          },
          {
            "v": "50",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "50",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "2,704.76",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "TOP100 汇总",
            "state": null,
            "missing": false
          },
          {
            "v": "100",
            "state": null,
            "missing": false
          },
          {
            "v": "353",
            "state": null,
            "missing": false
          },
          {
            "v": "539,870.75",
            "state": null,
            "missing": false
          },
          {
            "v": "89.98%",
            "state": null,
            "missing": false
          },
          {
            "v": "3.5",
            "state": null,
            "missing": false
          },
          {
            "v": "5,398.71",
            "state": null,
            "missing": false
          },
          {
            "v": "100",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "100",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "0",
            "state": "warn",
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "5,398.71",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ]
      ],
      "headNote": null,
      "points": [
        "全店段 TOP100 汇总 743 款合计 7,987,375.75 元。TOP1 款均 305,862.50 元，TOP2-5 款均 67,649.86 元，头部集中度低。",
        "深圳 TOP1 款均 116,479.14 元为四店最低，北京 TOP1 款均 93,884.86 元（受限于款数 441）。"
      ],
      "note": "对比期为各期独立排名后的同档位合计，非同款追踪。"
    },
    {
      "key": "t3f",
      "title": "块 3-6 客单价分布",
      "columns": [
        {
          "name": "门店"
        },
        {
          "name": "低于 1,000"
        },
        {
          "name": "1,000–2,000"
        },
        {
          "name": "2,000–5,000"
        },
        {
          "name": "5,000 及以上"
        },
        {
          "name": "大单占比"
        },
        {
          "name": "大单金额占比"
        }
      ],
      "rows": [
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          },
          {
            "v": "待补",
            "state": null,
            "missing": true
          }
        ]
      ],
      "headNote": null,
      "points": [],
      "note": "该块数据源（FBI 订单明细）未接入，全部数值标待补。"
    },
    {
      "key": "t4a",
      "title": "块 4-1 门店层",
      "columns": [
        {
          "name": "门店名称"
        },
        {
          "name": "门店销售目标"
        },
        {
          "name": "门店销售达成"
        },
        {
          "name": "门店达成率"
        },
        {
          "name": "门店差额"
        },
        {
          "name": "有个人目标人数"
        },
        {
          "name": "无个人目标人数"
        },
        {
          "name": "个人目标合计"
        },
        {
          "name": "个人业绩合计"
        },
        {
          "name": "未覆盖目标"
        },
        {
          "name": "个人净差额"
        },
        {
          "name": "口径差"
        },
        {
          "name": "未达标差额合计"
        },
        {
          "name": "未达标人数"
        }
      ],
      "rows": [
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "3,090,670",
            "state": null,
            "missing": false
          },
          {
            "v": "2,801,074.22",
            "state": null,
            "missing": false
          },
          {
            "v": "90.63%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "-289,595.78",
            "state": "bad",
            "missing": false
          },
          {
            "v": "11",
            "state": null,
            "missing": false
          },
          {
            "v": "6",
            "state": null,
            "missing": false
          },
          {
            "v": "2,678,366.30",
            "state": null,
            "missing": false
          },
          {
            "v": "2,822,489.00",
            "state": null,
            "missing": false
          },
          {
            "v": "412,303.70",
            "state": "bad",
            "missing": false
          },
          {
            "v": "144,122.70",
            "state": "good",
            "missing": false
          },
          {
            "v": "21,414.78",
            "state": null,
            "missing": false
          },
          {
            "v": "101,419.50",
            "state": null,
            "missing": false
          },
          {
            "v": "4",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "2,019,460",
            "state": null,
            "missing": false
          },
          {
            "v": "2,318,743.97",
            "state": null,
            "missing": false
          },
          {
            "v": "114.82%",
            "state": "good",
            "missing": false
          },
          {
            "v": "299,283.97",
            "state": "good",
            "missing": false
          },
          {
            "v": "6",
            "state": null,
            "missing": false
          },
          {
            "v": "2",
            "state": null,
            "missing": false
          },
          {
            "v": "1,693,740.69",
            "state": null,
            "missing": false
          },
          {
            "v": "2,290,444.00",
            "state": null,
            "missing": false
          },
          {
            "v": "325,719.31",
            "state": "bad",
            "missing": false
          },
          {
            "v": "596,703.31",
            "state": "good",
            "missing": false
          },
          {
            "v": "-28,299.97",
            "state": null,
            "missing": false
          },
          {
            "v": "20,895.74",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "1,956,307",
            "state": null,
            "missing": false
          },
          {
            "v": "2,418,973.61",
            "state": null,
            "missing": false
          },
          {
            "v": "123.65%",
            "state": "good",
            "missing": false
          },
          {
            "v": "462,666.61",
            "state": "good",
            "missing": false
          },
          {
            "v": "6",
            "state": null,
            "missing": false
          },
          {
            "v": "2",
            "state": null,
            "missing": false
          },
          {
            "v": "1,956,312.00",
            "state": null,
            "missing": false
          },
          {
            "v": "2,408,482.00",
            "state": null,
            "missing": false
          },
          {
            "v": "-5.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "452,170.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "-10,491.61",
            "state": null,
            "missing": false
          },
          {
            "v": "0.00",
            "state": null,
            "missing": false
          },
          {
            "v": "0",
            "state": null,
            "missing": false
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "349,440",
            "state": null,
            "missing": false
          },
          {
            "v": "601,036.80",
            "state": null,
            "missing": false
          },
          {
            "v": "172.00%",
            "state": "good",
            "missing": false
          },
          {
            "v": "251,596.80",
            "state": "good",
            "missing": false
          },
          {
            "v": "9",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          },
          {
            "v": "345,761.70",
            "state": null,
            "missing": false
          },
          {
            "v": "570,627.00",
            "state": null,
            "missing": false
          },
          {
            "v": "3,678.30",
            "state": "bad",
            "missing": false
          },
          {
            "v": "224,865.30",
            "state": "good",
            "missing": false
          },
          {
            "v": "-30,409.80",
            "state": null,
            "missing": false
          },
          {
            "v": "4,964.70",
            "state": null,
            "missing": false
          },
          {
            "v": "1",
            "state": null,
            "missing": false
          }
        ]
      ],
      "headNote": "**员 · 缺口归属**：深圳缺口三层拆解：未覆盖目标 +412,303.70 − 个人净差额 +144,122.70 + 口径差 +21,414.78 = 缺口 289,595.78 元，残差 0.00 元。**缺口主要来自目标分配而非个人未达标。**",
      "points": [
        "深圳无个人目标人数 5 人（库管 / 咖啡师 / 咖啡店长），是四店最多的。",
        "上海全员达标，个人净差额 +452,170.00 元，为四店最高。",
        "未达标名单：深圳 4 人（薛雨欣 -41,038.50、崔琦 0.00、李润芳 -3,320.00、陈斯凡 -29,263.00），北京 1 人（郭延宁 -20,895.74），杭州 1 人（鄂思宇 -4,964.70）。"
      ],
      "note": null
    },
    {
      "key": "t4b",
      "title": "块 4-2 导购明细",
      "columns": [
        {
          "name": "门店名称"
        },
        {
          "name": "姓名"
        },
        {
          "name": "岗位"
        },
        {
          "name": "在职情况"
        },
        {
          "name": "个人业绩目标"
        },
        {
          "name": "个人销售业绩"
        },
        {
          "name": "个人差额"
        },
        {
          "name": "个人达成率"
        },
        {
          "name": "是否达标"
        },
        {
          "name": "提成比例"
        },
        {
          "name": "提成金额"
        },
        {
          "name": "门店内目标占比"
        },
        {
          "name": "门店内业绩占比"
        },
        {
          "name": "个人差额排序"
        }
      ],
      "rows": [
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "庄漫漫",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "295,000.00",
            "state": null,
            "missing": false
          },
          {
            "v": "356,702.00",
            "state": null,
            "missing": false
          },
          {
            "v": "61,702.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "120.92%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "3.50%",
            "state": null,
            "missing": false
          },
          {
            "v": "11,048.29",
            "state": null,
            "missing": false
          },
          {
            "v": "11.01%",
            "state": null,
            "missing": false
          },
          {
            "v": "12.64%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "李晓君",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "284,944.50",
            "state": null,
            "missing": false
          },
          {
            "v": "331,951.00",
            "state": null,
            "missing": false
          },
          {
            "v": "47,006.50",
            "state": "good",
            "missing": false
          },
          {
            "v": "116.50%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "3.20%",
            "state": null,
            "missing": false
          },
          {
            "v": "9,436.79",
            "state": null,
            "missing": false
          },
          {
            "v": "10.64%",
            "state": null,
            "missing": false
          },
          {
            "v": "11.76%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "钟彬君",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "284,944.50",
            "state": null,
            "missing": false
          },
          {
            "v": "322,091.00",
            "state": null,
            "missing": false
          },
          {
            "v": "37,146.50",
            "state": "good",
            "missing": false
          },
          {
            "v": "113.04%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "3.20%",
            "state": null,
            "missing": false
          },
          {
            "v": "9,121.16",
            "state": null,
            "missing": false
          },
          {
            "v": "10.64%",
            "state": null,
            "missing": false
          },
          {
            "v": "11.41%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "罗馨",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "295,000.00",
            "state": null,
            "missing": false
          },
          {
            "v": "331,166.00",
            "state": null,
            "missing": false
          },
          {
            "v": "36,166.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "112.26%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "3.20%",
            "state": null,
            "missing": false
          },
          {
            "v": "9,382.31",
            "state": null,
            "missing": false
          },
          {
            "v": "11.01%",
            "state": null,
            "missing": false
          },
          {
            "v": "11.73%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "黄桂萍",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "被动离职",
            "state": null,
            "missing": false
          },
          {
            "v": "104,326.00",
            "state": null,
            "missing": false
          },
          {
            "v": "133,655.00",
            "state": null,
            "missing": false
          },
          {
            "v": "29,329.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "128.11%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "3.50%",
            "state": null,
            "missing": false
          },
          {
            "v": "4,139.76",
            "state": null,
            "missing": false
          },
          {
            "v": "3.90%",
            "state": null,
            "missing": false
          },
          {
            "v": "4.74%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "铁金丽",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "主动离职",
            "state": null,
            "missing": false
          },
          {
            "v": "104,326.00",
            "state": null,
            "missing": false
          },
          {
            "v": "122,452.00",
            "state": null,
            "missing": false
          },
          {
            "v": "18,126.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "117.37%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "3.20%",
            "state": null,
            "missing": false
          },
          {
            "v": "3,467.67",
            "state": null,
            "missing": false
          },
          {
            "v": "3.90%",
            "state": null,
            "missing": false
          },
          {
            "v": "4.34%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "张晓彤",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "298,513.80",
            "state": null,
            "missing": false
          },
          {
            "v": "314,580.00",
            "state": null,
            "missing": false
          },
          {
            "v": "16,066.20",
            "state": "good",
            "missing": false
          },
          {
            "v": "105.38%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "3.20%",
            "state": null,
            "missing": false
          },
          {
            "v": "8,908.46",
            "state": null,
            "missing": false
          },
          {
            "v": "11.15%",
            "state": null,
            "missing": false
          },
          {
            "v": "11.15%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "李润芳",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "被动离职",
            "state": null,
            "missing": false
          },
          {
            "v": "156,478.00",
            "state": null,
            "missing": false
          },
          {
            "v": "153,158.00",
            "state": null,
            "missing": false
          },
          {
            "v": "-3,320.00",
            "state": "bad",
            "missing": false
          },
          {
            "v": "97.88%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "未达标",
            "state": null,
            "missing": false
          },
          {
            "v": "2.80%",
            "state": null,
            "missing": false
          },
          {
            "v": "3,795.07",
            "state": null,
            "missing": false
          },
          {
            "v": "5.84%",
            "state": null,
            "missing": false
          },
          {
            "v": "5.43%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "何莹",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "284,944.50",
            "state": null,
            "missing": false
          },
          {
            "v": "257,147.00",
            "state": null,
            "missing": false
          },
          {
            "v": "-27,797.50",
            "state": "bad",
            "missing": false
          },
          {
            "v": "90.24%",
            "state": "warn",
            "missing": false
          },
          {
            "v": "未达标",
            "state": null,
            "missing": false
          },
          {
            "v": "2.80%",
            "state": null,
            "missing": false
          },
          {
            "v": "6,388.75",
            "state": null,
            "missing": false
          },
          {
            "v": "10.64%",
            "state": null,
            "missing": false
          },
          {
            "v": "9.11%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "陈斯凡",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "284,944.50",
            "state": null,
            "missing": false
          },
          {
            "v": "255,681.00",
            "state": null,
            "missing": false
          },
          {
            "v": "-29,263.50",
            "state": "bad",
            "missing": false
          },
          {
            "v": "89.73%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "未达标",
            "state": null,
            "missing": false
          },
          {
            "v": "2.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "4,525.33",
            "state": null,
            "missing": false
          },
          {
            "v": "10.64%",
            "state": null,
            "missing": false
          },
          {
            "v": "9.06%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "深圳万象天地精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "薛雨欣",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "284,944.50",
            "state": null,
            "missing": false
          },
          {
            "v": "243,906.00",
            "state": null,
            "missing": false
          },
          {
            "v": "-41,038.50",
            "state": "bad",
            "missing": false
          },
          {
            "v": "85.60%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "未达标",
            "state": null,
            "missing": false
          },
          {
            "v": "2.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "4,316.92",
            "state": null,
            "missing": false
          },
          {
            "v": "10.64%",
            "state": null,
            "missing": false
          },
          {
            "v": "8.64%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "李丽媛",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "325,719.35",
            "state": null,
            "missing": false
          },
          {
            "v": "618,258.00",
            "state": null,
            "missing": false
          },
          {
            "v": "292,538.65",
            "state": "good",
            "missing": false
          },
          {
            "v": "189.81%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "4.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "21,966.07",
            "state": null,
            "missing": false
          },
          {
            "v": "19.23%",
            "state": null,
            "missing": false
          },
          {
            "v": "26.99%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "王成玉",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "325,719.35",
            "state": null,
            "missing": false
          },
          {
            "v": "478,697.00",
            "state": null,
            "missing": false
          },
          {
            "v": "152,977.65",
            "state": "good",
            "missing": false
          },
          {
            "v": "146.97%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "4.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "16,971.54",
            "state": null,
            "missing": false
          },
          {
            "v": "19.23%",
            "state": null,
            "missing": false
          },
          {
            "v": "20.90%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "武建萍",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "325,719.35",
            "state": null,
            "missing": false
          },
          {
            "v": "401,737.00",
            "state": null,
            "missing": false
          },
          {
            "v": "76,017.65",
            "state": "good",
            "missing": false
          },
          {
            "v": "123.34%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "4.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "14,374.81",
            "state": null,
            "missing": false
          },
          {
            "v": "19.23%",
            "state": null,
            "missing": false
          },
          {
            "v": "17.54%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "陈骏宇",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "325,719.35",
            "state": null,
            "missing": false
          },
          {
            "v": "376,555.00",
            "state": null,
            "missing": false
          },
          {
            "v": "50,835.65",
            "state": "good",
            "missing": false
          },
          {
            "v": "115.61%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "3.50%",
            "state": null,
            "missing": false
          },
          {
            "v": "11,715.87",
            "state": null,
            "missing": false
          },
          {
            "v": "19.23%",
            "state": null,
            "missing": false
          },
          {
            "v": "16.44%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "贾鑫",
            "state": null,
            "missing": false
          },
          {
            "v": "带班",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "228,003.55",
            "state": null,
            "missing": false
          },
          {
            "v": "273,233.00",
            "state": null,
            "missing": false
          },
          {
            "v": "45,229.45",
            "state": "good",
            "missing": false
          },
          {
            "v": "119.84%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "3.50%",
            "state": null,
            "missing": false
          },
          {
            "v": "8,524.03",
            "state": null,
            "missing": false
          },
          {
            "v": "13.46%",
            "state": null,
            "missing": false
          },
          {
            "v": "11.93%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "北京三里屯精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "郭延宁",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "162,859.74",
            "state": null,
            "missing": false
          },
          {
            "v": "141,964.00",
            "state": null,
            "missing": false
          },
          {
            "v": "-20,895.74",
            "state": "bad",
            "missing": false
          },
          {
            "v": "87.17%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "未达标",
            "state": null,
            "missing": false
          },
          {
            "v": "2.30%",
            "state": null,
            "missing": false
          },
          {
            "v": "2,889.53",
            "state": null,
            "missing": false
          },
          {
            "v": "9.62%",
            "state": null,
            "missing": false
          },
          {
            "v": "6.20%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "姚瑶",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "326,052.00",
            "state": null,
            "missing": false
          },
          {
            "v": "470,528.00",
            "state": null,
            "missing": false
          },
          {
            "v": "144,476.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "144.31%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "4.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "16,668.69",
            "state": null,
            "missing": false
          },
          {
            "v": "16.67%",
            "state": null,
            "missing": false
          },
          {
            "v": "19.54%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "唐发聪",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "326,052.00",
            "state": null,
            "missing": false
          },
          {
            "v": "415,493.00",
            "state": null,
            "missing": false
          },
          {
            "v": "89,441.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "127.43%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "4.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "14,726.91",
            "state": null,
            "missing": false
          },
          {
            "v": "16.67%",
            "state": null,
            "missing": false
          },
          {
            "v": "17.25%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "张丽娜",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "326,052.00",
            "state": null,
            "missing": false
          },
          {
            "v": "397,660.00",
            "state": null,
            "missing": false
          },
          {
            "v": "71,608.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "121.96%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "4.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "14,095.58",
            "state": null,
            "missing": false
          },
          {
            "v": "16.67%",
            "state": null,
            "missing": false
          },
          {
            "v": "16.51%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "刘力玮",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "326,052.00",
            "state": null,
            "missing": false
          },
          {
            "v": "394,995.00",
            "state": null,
            "missing": false
          },
          {
            "v": "68,943.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "121.14%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "4.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "14,000.58",
            "state": null,
            "missing": false
          },
          {
            "v": "16.67%",
            "state": null,
            "missing": false
          },
          {
            "v": "16.40%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "夏美妙",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "326,052.00",
            "state": null,
            "missing": false
          },
          {
            "v": "394,273.00",
            "state": null,
            "missing": false
          },
          {
            "v": "68,221.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "120.92%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "4.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "13,989.06",
            "state": null,
            "missing": false
          },
          {
            "v": "16.67%",
            "state": null,
            "missing": false
          },
          {
            "v": "16.37%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "上海太古汇精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "罗丽",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "326,052.00",
            "state": null,
            "missing": false
          },
          {
            "v": "335,533.00",
            "state": null,
            "missing": false
          },
          {
            "v": "9,481.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "102.91%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "3.50%",
            "state": null,
            "missing": false
          },
          {
            "v": "10,392.62",
            "state": null,
            "missing": false
          },
          {
            "v": "16.67%",
            "state": null,
            "missing": false
          },
          {
            "v": "13.93%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "张可欣",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "44,140.00",
            "state": null,
            "missing": false
          },
          {
            "v": "82,773.00",
            "state": null,
            "missing": false
          },
          {
            "v": "38,633.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "187.52%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "4.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "2,930.02",
            "state": null,
            "missing": false
          },
          {
            "v": "12.77%",
            "state": null,
            "missing": false
          },
          {
            "v": "14.51%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "朱胡叶",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "44,140.00",
            "state": null,
            "missing": false
          },
          {
            "v": "81,137.00",
            "state": null,
            "missing": false
          },
          {
            "v": "36,997.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "183.82%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "4.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "2,872.11",
            "state": null,
            "missing": false
          },
          {
            "v": "12.77%",
            "state": null,
            "missing": false
          },
          {
            "v": "14.22%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "岳坤娇",
            "state": null,
            "missing": false
          },
          {
            "v": "带班",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "25,748.00",
            "state": null,
            "missing": false
          },
          {
            "v": "56,650.00",
            "state": null,
            "missing": false
          },
          {
            "v": "30,902.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "220.02%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "4.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "2,005.31",
            "state": null,
            "missing": false
          },
          {
            "v": "7.45%",
            "state": null,
            "missing": false
          },
          {
            "v": "9.93%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "郑冰倩",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "36,783.00",
            "state": null,
            "missing": false
          },
          {
            "v": "67,639.00",
            "state": null,
            "missing": false
          },
          {
            "v": "30,856.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "183.89%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "4.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "2,394.30",
            "state": null,
            "missing": false
          },
          {
            "v": "10.64%",
            "state": null,
            "missing": false
          },
          {
            "v": "11.85%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "吴青青",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "36,783.00",
            "state": null,
            "missing": false
          },
          {
            "v": "66,077.00",
            "state": null,
            "missing": false
          },
          {
            "v": "29,294.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "179.64%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "4.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "2,339.01",
            "state": null,
            "missing": false
          },
          {
            "v": "10.64%",
            "state": null,
            "missing": false
          },
          {
            "v": "11.58%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "路远",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "44,140.00",
            "state": null,
            "missing": false
          },
          {
            "v": "67,816.00",
            "state": null,
            "missing": false
          },
          {
            "v": "23,676.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "153.64%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "4.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "2,400.57",
            "state": null,
            "missing": false
          },
          {
            "v": "12.77%",
            "state": null,
            "missing": false
          },
          {
            "v": "11.88%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "叶培君",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "36,783.00",
            "state": null,
            "missing": false
          },
          {
            "v": "59,276.00",
            "state": null,
            "missing": false
          },
          {
            "v": "22,493.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "161.15%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "4.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "2,098.27",
            "state": null,
            "missing": false
          },
          {
            "v": "10.64%",
            "state": null,
            "missing": false
          },
          {
            "v": "10.39%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "蒋银",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "44,140.00",
            "state": null,
            "missing": false
          },
          {
            "v": "61,119.00",
            "state": null,
            "missing": false
          },
          {
            "v": "16,979.00",
            "state": "good",
            "missing": false
          },
          {
            "v": "138.47%",
            "state": "good",
            "missing": false
          },
          {
            "v": "达标",
            "state": null,
            "missing": false
          },
          {
            "v": "4.00%",
            "state": null,
            "missing": false
          },
          {
            "v": "2,163.50",
            "state": null,
            "missing": false
          },
          {
            "v": "12.77%",
            "state": null,
            "missing": false
          },
          {
            "v": "10.71%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ],
        [
          {
            "v": "杭州万象城精品店",
            "state": null,
            "missing": false
          },
          {
            "v": "鄂思宇",
            "state": null,
            "missing": false
          },
          {
            "v": "销售",
            "state": null,
            "missing": false
          },
          {
            "v": "在职",
            "state": null,
            "missing": false
          },
          {
            "v": "33,104.70",
            "state": null,
            "missing": false
          },
          {
            "v": "28,140.00",
            "state": null,
            "missing": false
          },
          {
            "v": "-4,964.70",
            "state": "bad",
            "missing": false
          },
          {
            "v": "85.00%",
            "state": "bad",
            "missing": false
          },
          {
            "v": "未达标",
            "state": null,
            "missing": false
          },
          {
            "v": "2.30%",
            "state": null,
            "missing": false
          },
          {
            "v": "572.76",
            "state": null,
            "missing": false
          },
          {
            "v": "9.57%",
            "state": null,
            "missing": false
          },
          {
            "v": "4.93%",
            "state": null,
            "missing": false
          },
          {
            "v": "—",
            "state": null,
            "missing": true
          }
        ]
      ],
      "headNote": null,
      "points": [
        "全店 32 名有个人目标的导购中，26 人达标（达标率 81.25%），6 人未达标。",
        "业绩最高：李丽媛（北京，销售）618,258 元，达成率 189.81%。",
        "杭州导购人均目标较低（36,783–44,140 元），但达成率普遍 >150%。"
      ],
      "note": null
    }
  ],
  "missing": [
    {
      "table": "t1",
      "title": "表 1 · 业绩达成",
      "row": "深圳万象天地精品店",
      "column": "支付金额达成"
    },
    {
      "table": "t1",
      "title": "表 1 · 业绩达成",
      "row": "深圳万象天地精品店",
      "column": "销售金额同比"
    },
    {
      "table": "t1",
      "title": "表 1 · 业绩达成",
      "row": "北京三里屯精品店",
      "column": "支付金额达成"
    },
    {
      "table": "t1",
      "title": "表 1 · 业绩达成",
      "row": "上海太古汇精品店",
      "column": "支付金额达成"
    },
    {
      "table": "t1",
      "title": "表 1 · 业绩达成",
      "row": "上海太古汇精品店",
      "column": "销售金额同比"
    },
    {
      "table": "t1",
      "title": "表 1 · 业绩达成",
      "row": "杭州万象城精品店",
      "column": "支付金额达成"
    },
    {
      "table": "t1",
      "title": "表 1 · 业绩达成",
      "row": "杭州万象城精品店",
      "column": "销售金额同比"
    },
    {
      "table": "t1",
      "title": "表 1 · 业绩达成",
      "row": "杭州万象城精品店",
      "column": "销售金额环比"
    },
    {
      "table": "t2a",
      "title": "块 2-1 流量",
      "row": "深圳万象天地精品店",
      "column": "同比"
    },
    {
      "table": "t2a",
      "title": "块 2-1 流量",
      "row": "上海太古汇精品店",
      "column": "同比"
    },
    {
      "table": "t2a",
      "title": "块 2-1 流量",
      "row": "杭州万象城精品店",
      "column": "同比"
    },
    {
      "table": "t2a",
      "title": "块 2-1 流量",
      "row": "杭州万象城精品店",
      "column": "环比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "深圳万象天地精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "深圳万象天地精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "深圳万象天地精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "深圳万象天地精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "深圳万象天地精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "深圳万象天地精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "深圳万象天地精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "上海太古汇精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "上海太古汇精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "上海太古汇精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "上海太古汇精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "上海太古汇精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "上海太古汇精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "上海太古汇精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "杭州万象城精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "杭州万象城精品店",
      "column": "环比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "杭州万象城精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "杭州万象城精品店",
      "column": "环比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "杭州万象城精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "杭州万象城精品店",
      "column": "环比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "杭州万象城精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "杭州万象城精品店",
      "column": "环比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "杭州万象城精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "杭州万象城精品店",
      "column": "环比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "杭州万象城精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "杭州万象城精品店",
      "column": "环比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "杭州万象城精品店",
      "column": "同比"
    },
    {
      "table": "t2b",
      "title": "块 2-2 转化",
      "row": "杭州万象城精品店",
      "column": "环比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "全部正店合计",
      "column": "销售件数同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "全部正店合计",
      "column": "销售额同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "北京三里屯精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "北京三里屯精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3a",
      "title": "块 3-1 新老品",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "全部正店合计",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "全部正店合计",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "深圳万象天地精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "深圳万象天地精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "北京三里屯精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "北京三里屯精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "北京三里屯精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "北京三里屯精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-2 一级品类",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "北京三里屯精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "北京三里屯精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3bc",
      "title": "块 3-3 品类 Top10",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "全部正店合计",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "全部正店合计",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "全部正店合计",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "全部正店合计",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "全部正店合计",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "全部正店合计",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "全部正店合计",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "全部正店合计",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "全部正店合计",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "全部正店合计",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "全部正店合计",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "全部正店合计",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "全部正店合计",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "全部正店合计",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "全部正店合计",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "全部正店合计",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "深圳万象天地精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "上海太古汇精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "北京三里屯精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额同比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额环比"
    },
    {
      "table": "t3d",
      "title": "块 3-4 年季",
      "row": "杭州万象城精品店",
      "column": "销售额占比变化"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "深圳万象天地精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "上海太古汇精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "上期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售额占比环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "款均销售额环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "上期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售额占比环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "款均销售额环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "上期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售额占比环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "款均销售额环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "上期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售额占比环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "款均销售额环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "上期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售额占比环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "款均销售额环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "上期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售额占比环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "款均销售额环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "去年同期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "上期销售额占比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售额占比同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售额占比环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售件数同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "销售件数环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "款均销售额同比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "款均销售额环比"
    },
    {
      "table": "t3e",
      "title": "块 3-5 TOP 汇总",
      "row": "杭州万象城精品店",
      "column": "对比期款均销售额"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "深圳万象天地精品店",
      "column": "低于 1,000"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "深圳万象天地精品店",
      "column": "1,000–2,000"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "深圳万象天地精品店",
      "column": "2,000–5,000"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "深圳万象天地精品店",
      "column": "5,000 及以上"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "深圳万象天地精品店",
      "column": "大单占比"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "深圳万象天地精品店",
      "column": "大单金额占比"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "北京三里屯精品店",
      "column": "低于 1,000"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "北京三里屯精品店",
      "column": "1,000–2,000"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "北京三里屯精品店",
      "column": "2,000–5,000"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "北京三里屯精品店",
      "column": "5,000 及以上"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "北京三里屯精品店",
      "column": "大单占比"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "北京三里屯精品店",
      "column": "大单金额占比"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "上海太古汇精品店",
      "column": "低于 1,000"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "上海太古汇精品店",
      "column": "1,000–2,000"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "上海太古汇精品店",
      "column": "2,000–5,000"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "上海太古汇精品店",
      "column": "5,000 及以上"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "上海太古汇精品店",
      "column": "大单占比"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "上海太古汇精品店",
      "column": "大单金额占比"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "杭州万象城精品店",
      "column": "低于 1,000"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "杭州万象城精品店",
      "column": "1,000–2,000"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "杭州万象城精品店",
      "column": "2,000–5,000"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "杭州万象城精品店",
      "column": "5,000 及以上"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "杭州万象城精品店",
      "column": "大单占比"
    },
    {
      "table": "t3f",
      "title": "块 3-6 客单价分布",
      "row": "杭州万象城精品店",
      "column": "大单金额占比"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "深圳万象天地精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "深圳万象天地精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "深圳万象天地精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "深圳万象天地精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "深圳万象天地精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "深圳万象天地精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "深圳万象天地精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "深圳万象天地精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "深圳万象天地精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "深圳万象天地精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "深圳万象天地精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "北京三里屯精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "北京三里屯精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "北京三里屯精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "北京三里屯精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "北京三里屯精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "北京三里屯精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "上海太古汇精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "上海太古汇精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "上海太古汇精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "上海太古汇精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "上海太古汇精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "上海太古汇精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "杭州万象城精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "杭州万象城精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "杭州万象城精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "杭州万象城精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "杭州万象城精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "杭州万象城精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "杭州万象城精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "杭州万象城精品店",
      "column": "个人差额排序"
    },
    {
      "table": "t4b",
      "title": "块 4-2 导购明细",
      "row": "杭州万象城精品店",
      "column": "个人差额排序"
    }
  ],
  "sources": [
    "覆盖门店：4 家正店（深圳万象天地精品店、北京三里屯精品店、上海太古汇精品店、杭州万象城精品店）。排除：四家快闪店（上海、北京、杭州万象城、深圳万象天地）、南京德基店、成都太古里店。",
    "表 1 汇总行的销售金额达成取 FBI（7,992,379.00），门店行取 QuickBI 线下区域看板线下销售金额（四店合计 7,987,375.75），差额 5,003.25 为两套系统口径差异。",
    "表 1 汇总行的支付金额达成取 FBI（8,719,904），门店行该列无数据源，标为 待补。",
    "销售金额目标取《月度目标（按天拆分）》Sheet2 的 2026-09 月度目标（仅有月值，未按天拆分），四家正店之和为 7,415,877。南京德基店（1,322,528）和成都太古里店（0）未纳入。",
    "同比基期（2025年9月）：仅北京有数据（943,828.98），深圳 / 上海 / 杭州去年同期基期为 0（未开业），同比标 待补。",
    "环比基期（2026年8月）：深圳（2,865,225.38）、上海（2,410,684.19）、北京（1,963,932.88）有数据；杭州基期为 0（9 月中旬开业），环比标 待补。",
    "表 4 的门店达成率取《导购业绩明细》的店铺当月目标完成情况，与表 1 的 QuickBI 口径不同：深圳 90.63% vs 89.44%、北京 114.82% vs 111.06%、上海 123.65% vs 121.67%、杭州 172.00% vs 171.70%。",
    "块 3-6 客单价分布数据源为 FBI 订单明细，当前未接入，整块标 待补。",
    "对比期为各期独立排名后的同档位合计，非同款追踪。"
  ]
};
