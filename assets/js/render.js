/* 渲染层：导航 / 页脚 / KPI / 四问 / 表格 / 状态色 / 缺数标签 / 门店筛选
   数据全部来自 data.js 的 window.REPORT，本文件不含任何业务数值。 */

(function () {
  "use strict";

  var R = window.REPORT;
  var body = document.body;
  /* 单文件模式：页面里有一个 #app，六页骨架以 <template> 内嵌，用 hash 路由切换；
     多页模式：每个 html 各自用一个 view，行为与之前完全一致。 */
  var ONE_FILE = !!document.getElementById("app");
  var PAGE = ONE_FILE ? "home" : body.dataset.page || "home";
  var PAGE_STORE = ONE_FILE ? "" : body.dataset.store || "";
  var DATA_FILE = ONE_FILE
    ? window.REPORT_MD
      ? "data:text/markdown;charset=utf-8," + encodeURIComponent(window.REPORT_MD)
      : "#"
    : "assets/data/fabrique-offline-2026-09-monthly-review.md";
  var DATA_NAME = "Fabrique-国内线下门店-月报-20260901-20260930-复盘表.md";

  if (!R) {
    document.addEventListener("DOMContentLoaded", function () {
      var main = document.querySelector("main") || body;
      main.insertAdjacentHTML(
        "afterbegin",
        '<p style="padding:40px 20px">数据文件未加载：请确认 assets/js/data.js 存在。</p>'
      );
    });
    return;
  }

  /* ---------------------------------------------------------------- 工具 */

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function parseNum(text) {
    var raw = String(text).replace(/[,%]/g, "").replace(/pp/g, "").replace(/[+−\s]/g, "");
    var n = parseFloat(raw);
    return isNaN(n) ? null : n;
  }

  function stateClass(state) {
    if (state === "good") return ' class="state-good"';
    if (state === "warn") return ' class="state-warn"';
    if (state === "bad") return ' class="state-bad"';
    return "";
  }

  function growthState(n) {
    return n >= 20 ? "good" : n >= 0 ? "warn" : "bad";
  }
  function rateState(n) {
    return n >= 100 ? "good" : n >= 90 ? "warn" : "bad";
  }
  function diffState(n) {
    return n > 0 ? "good" : n === 0 ? "warn" : "bad";
  }

  /* 正文数值上色：只处理语义明确的写法，占比类不猜、不上色。
     - 带正负号的百分数 / pp  -> 增长率口径
     - 「达成率」后面跟的百分数 -> 达成率口径
     - 带正负号的金额（后接「元」） -> 差额口径 */
  function colorNumbers(text) {
    return text
      .replace(/(达成率\s*)(\d[\d,]*\.?\d*%)/g, function (all, lead, num) {
        return lead + '<span' + stateClass(rateState(parseNum(num))) + ">" + num + "</span>";
      })
      .replace(/([+\-−]\d[\d,]*\.?\d*\s*(?:%|pp))/g, function (all, num) {
        return "<span" + stateClass(growthState(parseNum(num))) + ">" + num + "</span>";
      })
      .replace(/([+\-−]\d[\d,]*(?:\.\d+)?)(?=\s*元)/g, function (all, num) {
        return "<span" + stateClass(diffState(parseNum(num))) + ">" + num + "</span>";
      });
  }

  function inline(text) {
    var parts = String(text == null ? "" : text).split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return parts
      .map(function (p) {
        if (p.length > 4 && p.slice(0, 2) === "**" && p.slice(-2) === "**") {
          return "<strong>" + colorNumbers(esc(p.slice(2, -2))) + "</strong>";
        }
        if (p.length > 2 && p[0] === "*" && p.slice(-1) === "*") {
          return "<em>" + colorNumbers(esc(p.slice(1, -1))) + "</em>";
        }
        return colorNumbers(esc(p));
      })
      .join("");
  }

  function cellHtml(cell) {
    if (cell.missing) {
      var why =
        cell.v === "待补"
          ? "复盘表标注：待补（数据源未接入或基期为 0）"
          : "复盘表原文：" + cell.v;
      return '<span class="miss" title="' + esc(why) + '">' + esc(cell.v) + "</span>";
    }
    if (cell.state) {
      return "<span" + stateClass(cell.state) + ">" + esc(cell.v) + "</span>";
    }
    return esc(cell.v);
  }

  function tag(kind) {
    var map = {
      "超预期": "tag tag-good",
      "缺口": "tag tag-bad",
      "结构判断": "tag tag-struct",
      "推断": "tag tag-note",
      "建议": "tag tag-suggest"
    };
    return map[kind] ? '<span class="' + map[kind] + '">' + kind + "</span>" : "";
  }

  /* ---------------------------------------------------------------- 导航 */

  var NAV = [
    { label: "首页", href: "index.html", route: "#/", key: "home" },
    { label: "深圳", href: "store-shenzhen.html", route: "#/store/shenzhen", key: "深圳万象天地精品店" },
    { label: "北京", href: "store-beijing.html", route: "#/store/beijing", key: "北京三里屯精品店" },
    { label: "上海", href: "store-shanghai.html", route: "#/store/shanghai", key: "上海太古汇精品店" },
    { label: "杭州", href: "store-hangzhou.html", route: "#/store/hangzhou", key: "杭州万象城精品店" }
  ];

  var STORE_ROUTE = {
    "深圳万象天地精品店": "#/store/shenzhen",
    "北京三里屯精品店": "#/store/beijing",
    "上海太古汇精品店": "#/store/shanghai",
    "杭州万象城精品店": "#/store/hangzhou"
  };

  function link(item) {
    return ONE_FILE ? item.route : item.href;
  }

  function analysisHref() {
    return ONE_FILE ? "#/analysis" : "analysis.html";
  }

  function storeHref(name) {
    var item = NAV.filter(function (n) { return n.key === name; })[0];
    return item ? link(item) : ONE_FILE ? "#/" : "index.html";
  }

  function navHtml() {
    var current = PAGE === "store" ? PAGE_STORE : "home";
    var links = NAV.map(function (item) {
      var isCurrent =
        (item.key === "home" && PAGE === "home") || (PAGE === "store" && item.key === current);
      return (
        '<a href="' + link(item) + '"' + (isCurrent ? ' aria-current="page"' : "") + ">" +
        item.label + "</a>"
      );
    }).join("");

    return (
      '<nav class="site-nav" aria-label="站点导航">' +
      '<a class="brand anim anim-down" style="animation-delay:0ms" href="index.html">' +
      '<img class="brand-svg" src="assets/brand/Fabrique-symbol-white-clearspace.svg" alt="Fabrique" />' +
      '<span class="brand-word">Fabrique</span>' +
      "</a>" +
      '<div class="nav-pill anim anim-down" style="animation-delay:100ms">' + links + "</div>" +
      '<div class="nav-auth anim anim-down" style="animation-delay:200ms">' +
      '<a class="ghost" href="' + analysisHref() + '">分析总结</a>' +
      '<a class="solid" href="' + DATA_FILE + '" download="' + DATA_NAME + '">下载数据</a>' +
      "</div>" +
      '<button class="nav-burger anim anim-down" style="animation-delay:100ms" type="button" aria-label="打开菜单" aria-expanded="false">' +
      '<span class="nav-burger-icons">' +
      '<svg class="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>' +
      '<svg class="icon-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
      "</span></button>" +
      "</nav>" +
      '<div class="mobile-menu" id="mobile-menu">' +
      '<div class="mobile-backdrop" data-close></div>' +
      '<div class="mobile-panel">' +
      '<div class="mobile-links">' +
      NAV.map(function (item, i) {
        return (
          '<a href="' + link(item) + '" style="transition-delay:' + (100 + i * 50) + 'ms">' +
          item.label +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" opacity=".5"><path d="M9 6l6 6-6 6"/></svg></a>'
        );
      }).join("") +
      "</div>" +
      '<div class="mobile-divider"></div>' +
      '<div class="mobile-ctas" style="transition-delay:350ms">' +
      '<a class="solid" href="' + analysisHref() + '">分析总结</a>' +
      '<a class="ghost" href="' + DATA_FILE + '" download="' + DATA_NAME + '">下载数据</a>' +
      "</div>" +
      "</div></div>"
    );
  }

  function bindMenu() {
    var burger = document.querySelector(".nav-burger");
    var menu = document.getElementById("mobile-menu");
    if (!burger || !menu) return;
    function setOpen(open) {
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
      menu.classList.toggle("is-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    }
    burger.addEventListener("click", function () {
      setOpen(burger.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (event) {
      if (event.target.hasAttribute("data-close") || event.target.closest("a")) setOpen(false);
    });
    if (window.__fabriqueEsc) document.removeEventListener("keydown", window.__fabriqueEsc);
    window.__fabriqueEsc = function (event) {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", window.__fabriqueEsc);
  }

  /* ---------------------------------------------------------------- 页脚 */

  function footerHtml() {
    var stamp =
      R.meta.channel + " · " + R.meta.period + " · " +
      R.meta.start.replace(/-/g, "") + "–" + R.meta.end.replace(/-/g, "");
    return (
      '<div class="narrow footer-grid">' +
      '<div class="footer-col"><h3>数据来源</h3><ul>' +
      R.sources.map(function (s) { return "<li>" + inline(s) + "</li>"; }).join("") +
      "</ul></div>" +
      '<div class="footer-col"><h3>口径与说明</h3><ul>' +
      R.context.map(function (row) {
        return "<li>" + esc(row[0]) + "：" + inline(row[1]) + "</li>";
      }).join("") +
      "</ul></div>" +
      "</div>" +
      '<p class="narrow footer-stamp">数据窗口 ' + esc(stamp) +
      " ｜ 页面只做呈现，未改写复盘表数值，未新增分析结论</p>"
    );
  }

  /* ---------------------------------------------------------------- KPI */

  function renderKpis(target) {
    var k = R.kpi;
    var tiles = [
      { label: "销售金额目标", value: k.target, hint: "口径：月度目标按天拆分" },
      {
        label: "销售金额达成",
        value: k.achieved,
        hint: "汇总行取 FBI",
        state: null
      },
      {
        label: "销售金额差额",
        value: (parseNum(k.diff) > 0 ? "+" : "") + k.diff,
        hint: "四店差额加总 " + (k.diffState === "good" ? "为正" : "为负"),
        state: k.diffState
      },
      {
        label: "销售金额达成率",
        value: k.rate,
        hint: "目标 " + k.target,
        state: k.rateState
      }
    ];
    target.innerHTML = tiles
      .map(function (t) {
        return (
          '<div class="kpi-tile reveal">' +
          '<p class="kpi-label">' + esc(t.label) + "</p>" +
          '<p class="kpi-value"' +
          (t.state ? stateClass(t.state) : "") + ">" + esc(t.value) + "</p>" +
          '<p class="kpi-hint">' + esc(t.hint) + "</p>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderLegend(target) {
    target.innerHTML =
      '<li><i class="dot-good"></i>达成率 ≥100% / 增长 ≥20% / 差额 &gt;0</li>' +
      '<li><i class="dot-warn"></i>达成率 90–100% / 增长 0–20% / 差额 =0</li>' +
      '<li><i class="dot-bad"></i>达成率 &lt;90% / 增长 &lt;0 / 差额 &lt;0</li>' +
      "<li>占比类与占比的百分点变化不上色</li>";
  }

  /* 首页门店入口卡 */
  function renderStoreCards() {
    var host = document.getElementById("store-cards");
    if (!host) return;
    host.innerHTML = R.stores
      .map(function (s) {
        var cls = s.state === "good" ? "state-good" : s.state === "warn" ? "state-warn" : "state-bad";
        return (
          '<a class="entry reveal" href="' + storeHref(s.name) + '">' +
          '<span class="tag ' + (s.state === "bad" ? "tag-bad" : "tag-good") + '">' +
          (s.state === "bad" ? "缺口" : "超预期") + "</span>" +
          '<p class="entry-body" style="margin-top:12px"><strong>' + esc(s.name) + "</strong><br />" +
          '销售金额达成 <span class="' + cls + '">' + esc(s.rate) + "</span>　差额 " +
          '<span class="' + cls + '">' + esc(s.diff) + "</span> 元<br />" +
          "同比 " + esc(s.yoy) + "　环比 " + esc(s.mom) + "</p></a>"
        );
      })
      .join("");
  }

  /* 首屏玻璃卡：数值全部取自 data.js */
  function renderHeroCard() {
    var k = R.kpi;
    var amount = document.getElementById("hero-amount");
    if (amount) amount.textContent = k.achieved;

    var rate = document.getElementById("hero-rate");
    if (rate) {
      rate.textContent = k.rate;
      rate.setAttribute("title", "复盘表标注：销售金额达成率");
    }

    var diff = document.getElementById("hero-diff");
    if (diff) {
      var positive = parseNum(k.diff) > 0;
      diff.textContent = (positive ? "+" : "") + k.diff;
    }

    var cap = document.getElementById("hero-caption");
    if (cap) cap.textContent = "达成率与对比目标 " + k.target;

    var axis = document.getElementById("hero-axis");
    if (axis) {
      axis.innerHTML = R.stores
        .map(function (s) {
          return "<span>" + esc(s.name.replace(/精品店$/, "").replace(/万象天地|三里屯|太古汇|万象城/, "")) + "</span>";
        })
        .join("");
    }
  }

  /* ---------------------------------------------------------------- 四问 */

  function leadHtml(text) {
    return text ? '<p class="gap-note">' + inline(text) + "</p>" : "";
  }

  function renderDiagnosis(target) {
    var q1 = R.questions.q1;
    var dims = q1.blocks || [];
    var storeBlock = dims.filter(function (b) { return b.dim === "场"; })[0];
    var html = leadHtml(q1.intro);
    html += '<div class="grid">';
    dims.forEach(function (block) {
      var label = block.dim === "人" || block.dim === "货" ? "结构判断" : "";
      html += '<article class="card dim-card reveal">';
      html += '<div class="dim-head"><span class="dim-title">' + esc(block.dim) + "</span>";
      html += '<span class="tag tag-struct">' +
        (block.dim === "员" ? "按个人目标判定" : "该维度无独立目标，按结构判断") + "</span>";
      html += "</div>";
      html += '<p class="dim-source">' + esc(block.source || "") + "</p>";
      if (block === storeBlock) {
        html += '<ul class="bar-list">' +
          R.stores
            .slice()
            .sort(function (a, b) { return parseNum(b.rate) - parseNum(a.rate); })
            .map(function (s) {
              var pct = Math.min(parseNum(s.rate) || 0, 200) / 2;
              return (
                '<li class="bar-item"><div class="bar-head"><span>' + esc(s.name) +
                '</span><span><span' + stateClass(s.state) + ">" + esc(s.rate) +
                "</span>　" + esc(s.diff) + " 元</span></div>" +
                '<div class="bar-track"><span class="bar-fill' +
                (s.state === "bad" ? " is-bad" : "") + '" data-width="' + pct + '%"></span></div></li>'
              );
            }).join("") + "</ul>";
      }
      html += '<ul class="dim-items">' +
        block.items.map(function (item) {
          return "<li>" + (item.tag ? tag(item.tag) : "") +
            (item.head ? "<strong>" + esc(item.head) + "</strong>" : "") +
            (item.sep ? "：" : "") +
            colorNumbers(esc(item.text || "")) + "</li>";
        }).join("") + "</ul>";
      html += "</article>";
    });
    html += "</div>";
    target.innerHTML = html;
    target.querySelectorAll(".bar-fill").forEach(function (el) {
      requestAnimationFrame(function () { el.style.width = el.dataset.width; });
    });
  }

  function renderEntries(target, question, kind) {
    var html = leadHtml(question.lead);
    html += '<div class="entry-list">';
    html += question.items.map(function (item) {
      var chip = kind === "opportunity" ? tag("超预期") : tag("缺口");
      return '<article class="entry reveal">' + chip +
        '<p class="entry-body" style="margin-top:12px">' + inline(item.text) + "</p></article>";
    }).join("");
    html += "</div>";
    target.innerHTML = html;
  }

  function renderAttribution(target) {
    var q4 = R.questions.q4;
    var html = leadHtml(q4.lead);
    html += '<div class="entry-list">';
    html += q4.items.map(function (item) {
      var suggests = (item.cause.match(/建议[^；。]*/g) || []);
      var cause = item.cause.replace(/(；?建议[^；。]*)/g, "").replace(/[；]\s*$/, "").trim();
      return (
        '<article class="entry reveal">' +
        '<div class="attr-head">' + tag("推断") +
        '<span class="attr-title">' + esc(item.head) + "</span></div>" +
        '<div class="attr-row"><span class="attr-key">表内证据</span>' +
        "<span>" + colorNumbers(esc(item.evidence)) + "</span></div>" +
        '<div class="attr-row"><span class="attr-key">可能成因</span>' +
        "<span>" + colorNumbers(esc(cause)) + "</span></div>" +
        (suggests.length
          ? '<div class="attr-row"><span class="attr-key">建议</span><span>' +
            suggests.map(function (s) {
              return '<span class="tag tag-suggest" style="margin-right:8px">建议</span>' +
                colorNumbers(esc(s.replace(/^建议/, "").trim()));
            }).join("<br />") + "</span></div>"
          : "") +
        "</article>"
      );
    }).join("");
    html += "</div>";
    target.innerHTML = html;
  }

  /* ---------------------------------------------------------------- 表格 */

  var SUMMARY_KEYS = [R.meta ? R.meta.summaryLabel : "", R.meta ? R.meta.ttlLabel : ""];

  function isSummaryRow(row) {
    return row.length && SUMMARY_KEYS.indexOf(row[0].v) !== -1;
  }

  function tablePrefix(key) {
    return key.slice(0, 2);
  }

  function renderTableBlock(block, store) {
    var rows = block.rows;
    if (store) {
      if (tablePrefix(block.key) === "t3") {
        rows = rows.filter(function (r) {
          return r[0].v === store || r[0].v === R.meta.ttlLabel;
        });
      } else if (block.key === "t4a") {
        rows = rows.filter(function (r) { return r[0].v === store; });
      } else {
        rows = rows.filter(function (r) {
          return r[0].v === store || r[0].v === R.meta.summaryLabel;
        });
      }
    }
    var head = "<tr>" + block.columns
      .map(function (c) { return "<th>" + esc(c.name) + "</th>"; })
      .join("") + "</tr>";
    var bodyRows = rows
      .map(function (row) {
        return '<tr class="' + (isSummaryRow(row) ? "is-summary" : "") + '">' +
          row.map(function (cell, i) {
            return "<td>" + (i === 0 ? esc(cell.v) : cellHtml(cell)) + "</td>";
          }).join("") + "</tr>";
      })
      .join("");
    return (
      '<section class="panel-block" data-points="' + esc(JSON.stringify(block.points)) + '">' +
      '<h4 class="panel-block-title">' + esc(block.title) + "</h4>" +
      (block.headNote ? '<p class="gap-note">' + inline(block.headNote) + "</p>" : "") +
      (block.points && block.points.length
        ? '<ul class="points">' + block.points.map(function (p) {
            return "<li>" + inline(p) + "</li>";
          }).join("") + "</ul>"
        : block.note
          ? ""
          : '<p class="panel-note">该表要点未生成</p>') +
      (block.note ? '<p class="panel-note">' + inline(block.note) + "</p>" : "") +
      '<div class="table-scroll"><table class="data"><thead>' + head +
      "</thead><tbody>" + bodyRows + "</tbody></table></div>" +
      "</section>"
    );
  }

  function renderTables(target, store) {
    var groups = [
      { n: 1, title: "表 1 · 业绩达成" },
      { n: 2, title: "表 2 · 流量转化（用户）" },
      { n: 3, title: "表 3 · 商品" },
      { n: 4, title: "表 4 · 门店导购目标达成拆解" }
    ];
    var html = "";
    groups.forEach(function (g) {
      var blocks = R.tables.filter(function (b) {
        return tablePrefix(b.key) === "t" + g.n;
      });
      if (!blocks.length) return;
      html +=
        '<section class="panel reveal">' +
        '<button class="panel-head" type="button" aria-expanded="false">' +
        "<span><h3>" + esc(g.title) + "</h3>" +
        '<span class="panel-meta">共 ' + blocks.length + " 个分块，点开查看</span></span>" +
        '<svg class="panel-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>' +
        "</button>" +
        '<div class="panel-body">' +
        blocks.map(function (b) { return renderTableBlock(b, store); }).join("") +
        "</div></section>";
    });
    target.innerHTML = html;

    target.querySelectorAll(".panel-head").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var panel = btn.closest(".panel");
        var open = panel.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  function bindStoreFilter() {
    var select = document.getElementById("store-filter");
    var host = document.getElementById("tables");
    if (!select || !host) return;
    select.addEventListener("change", function () {
      renderTables(host, select.value === "__all__" ? "" : select.value);
      host.querySelectorAll(".panel").forEach(function (p) {
        p.classList.add("is-open");
      });
    });
  }

  function buildStoreFilter() {
    var select = document.getElementById("store-filter");
    if (!select) return;
    select.innerHTML =
      '<option value="__all__">全部门店</option>' +
      R.stores.map(function (s) {
        return '<option value="' + esc(s.name) + '">' + esc(s.name) + "</option>";
      }).join("");
  }

  /* ---------------------------------------------------------------- 口径 */

  function renderContext(target) {
    target.innerHTML =
      '<div class="table-scroll"><table class="data"><tbody>' +
      R.context.map(function (row) {
        return "<tr><td>" + esc(row[0]) + "</td><td style=\"text-align:left;white-space:normal\">" +
          inline(row[1]) + "</td></tr>";
      }).join("") +
      "</tbody></table></div>";
  }

  /* ---------------------------------------------------------------- 滚动入场 */

  function observeReveal() {
    var items = document.querySelectorAll(".reveal");
    if (window.__fabriqueIO) {
      window.__fabriqueIO.disconnect();
      window.__fabriqueIO = null;
    }
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "-40px 0px" });
    items.forEach(function (el) { io.observe(el); });
    window.__fabriqueIO = io;
    window.__fabriqueDisposeReveal = function () {
      if (window.__fabriqueIO) {
        window.__fabriqueIO.disconnect();
        window.__fabriqueIO = null;
      }
    };
  }

  /* ---------------------------------------------------------------- 启动 */

  function boot() {
    var nav = document.getElementById("site-nav");
    if (nav) nav.innerHTML = navHtml();

    var foot = document.getElementById("site-footer");
    if (foot) foot.innerHTML = footerHtml();

    bindMenu();

    if (PAGE === "home") {
      renderHeroCard();
      renderStoreCards();
      var kpi = document.getElementById("kpi-grid");
      if (kpi) renderKpis(kpi);
      var legend = document.getElementById("kpi-legend");
      if (legend) renderLegend(legend);
    }

    if (PAGE === "analysis") {
      var ctx = document.getElementById("context-table");
      if (ctx) renderContext(ctx);
      var dx = document.getElementById("diagnosis-grid");
      if (dx) renderDiagnosis(dx);
      var opp = document.getElementById("opportunity-list");
      if (opp) renderEntries(opp, R.questions.q2, "opportunity");
      var risk = document.getElementById("risk-list");
      if (risk) renderEntries(risk, R.questions.q3, "risk");
      var attr = document.getElementById("attribution-list");
      if (attr) renderAttribution(attr);
      buildStoreFilter();
      var tables = document.getElementById("tables");
      if (tables) renderTables(tables, "");
      bindStoreFilter();
    }

    if (PAGE === "store") {
      var dxs = document.getElementById("diagnosis-grid");
      if (dxs) renderDiagnosisStore(dxs, PAGE_STORE);
      var ts = document.getElementById("tables");
      if (ts) renderTables(ts, PAGE_STORE);
    }

    observeReveal();
    if (window.FabriqueCharts) window.FabriqueCharts.mount(PAGE, PAGE_STORE);
  }

  /* ---------------------------------------------------------------- 单文件路由 */

  var ROUTES = {
    "": { view: "home", store: "", tpl: "view-home" },
    "home": { view: "home", store: "", tpl: "view-home" },
    "analysis": { view: "analysis", store: "", tpl: "view-analysis" }
  };

  function routeFor(hash) {
    var key = String(hash || "").replace(/^#\/?/, "").replace(/\/$/, "");
    if (ROUTES[key]) return ROUTES[key];
    var m = key.match(/^store\/([a-z]+)$/);
    if (m) {
      var item = NAV.filter(function (n) {
        return n.route === "#/store/" + m[1];
      })[0];
      if (item) return { view: "store", store: item.key, tpl: "view-store-" + m[1] };
    }
    return ROUTES[""];
  }

  function renderRoute() {
    var route = routeFor(window.location.hash);
    var tpl = document.getElementById(route.tpl);
    var app = document.getElementById("app");
    if (!tpl || !app) return;

    if (window.FabriqueCharts && window.FabriqueCharts.dispose) window.FabriqueCharts.dispose();
    if (typeof window.__fabriqueDisposeReveal === "function") window.__fabriqueDisposeReveal();

    app.innerHTML = tpl.innerHTML;
    PAGE = route.view;
    PAGE_STORE = route.store;
    boot();
    window.scrollTo(0, 0);
  }

  /* 门店页：只放该店相关与全店总览结论 */
  function renderDiagnosisStore(target, store) {
    var q1 = R.questions.q1;
    var html = leadHtml(q1.lead);
    html += '<div class="grid">';
    q1.blocks.forEach(function (block) {
      var items = block.items.filter(function (item) {
        if (block.dim === "场") return !item.head || item.head === store;
        return true;
      });
      html += '<article class="card dim-card reveal">';
      html += '<div class="dim-head"><span class="dim-title">' + esc(block.dim) + "</span>";
      html += '<span class="tag tag-struct">' +
        (block.dim === "员" ? "按个人目标判定" : "该维度无独立目标，按结构判断") + "</span></div>";
      html += '<p class="dim-source">' + esc(block.source || "") + "</p>";
      html += '<ul class="dim-items">' + items.map(function (item) {
        return "<li>" + (item.tag ? tag(item.tag) : "") +
          (item.head ? "<strong>" + esc(item.head) + "</strong>" : "") +
          (item.sep ? "：" : "") +
          colorNumbers(esc(item.text || "")) + "</li>";
      }).join("") + "</ul>";
      html += "</article>";
    });
    html += "</div>";
    target.innerHTML = html;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

  function start() {
    if (!ONE_FILE) {
      boot();
      return;
    }
    if (!window.location.hash) window.location.replace("#/");
    renderRoute();
    window.addEventListener("hashchange", renderRoute);
    document.addEventListener("click", function (event) {
      var anchor = event.target.closest && event.target.closest('a[href$=".html"]');
      if (!anchor) return;
      var href = anchor.getAttribute("href");
      var route =
        href === "index.html" ? "#/" :
        href === "analysis.html" ? "#/analysis" :
        /^store-([a-z]+)\.html$/.test(href) ? "#/store/" + href.replace(/^store-|\.html$/g, "") : null;
      if (route) {
        event.preventDefault();
        window.location.hash = route;
      }
    });
  }
})();
