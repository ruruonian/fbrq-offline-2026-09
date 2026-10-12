/* 图表层：全部数值取自 window.REPORT，不重算、不补数。
   ECharts 走 CDN；未加载时降级为提示文案，表格与文字不受影响。 */

(function () {
  "use strict";

  var R = window.REPORT;
  var SHORT = {
    "深圳万象天地精品店": "深圳",
    "北京三里屯精品店": "北京",
    "上海太古汇精品店": "上海",
    "杭州万象城精品店": "杭州"
  };
  var INK = "#ffffff";
  var SOFT = "rgba(255,255,255,.55)";
  var HAIR = "rgba(255,255,255,.10)";
  var ACCENT = "#e88c73";
  var GOOD = "#7fbf8a";
  var WARN = "#d9b15c";
  var BAD = "#e0896f";

  function toNum(text) {
    var n = parseFloat(String(text).replace(/[,%]/g, "").replace(/[+−\s]/g, ""));
    return isNaN(n) ? null : n;
  }

  function stateColor(state) {
    return state === "bad" ? BAD : state === "warn" ? WARN : state === "good" ? GOOD : ACCENT;
  }

  function short(name) {
    return SHORT[name] || name;
  }

  function baseGrid(extra) {
    var g = {
      backgroundColor: "transparent",
      textStyle: { fontFamily: "Montserrat, PingFang SC, Microsoft YaHei, sans-serif" },
      grid: { left: 8, right: 8, top: 26, bottom: 4, containLabel: true },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow", shadowStyle: { color: "rgba(255,255,255,.06)" } },
        backgroundColor: "rgba(3,28,36,.94)",
        borderColor: "rgba(255,255,255,.12)",
        borderWidth: 1,
        textStyle: { color: INK, fontSize: 12 }
      }
    };
    Object.keys(extra || {}).forEach(function (k) { g[k] = extra[k]; });
    return g;
  }

  function axisLabel(extra) {
    var o = { color: SOFT, fontSize: 11 };
    Object.keys(extra || {}).forEach(function (k) { o[k] = extra[k]; });
    return o;
  }

  /* 首屏：四店达成率，逐根生长，起始 1100ms、间隔 30ms（照 Apogee 时间轴） */
  function heroStores(el) {
    var stores = R.stores;
    var chart = window.echarts.init(el, null, { renderer: "canvas" });
    chart.setOption(
      baseGrid({
        grid: { left: 0, right: 0, top: 6, bottom: 0 },
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" },
          backgroundColor: "rgba(3,28,36,.94)",
          borderColor: "rgba(255,255,255,.12)",
          textStyle: { color: INK, fontSize: 12 },
          formatter: function (params) {
            var s = stores[params[0].dataIndex];
            return short(s.name) + "<br/>达成率 " + s.rate + "<br/>差额 " + s.diff + " 元";
          }
        },
        xAxis: {
          type: "category",
          data: stores.map(function (s) { return short(s.name); }),
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false }
        },
        yAxis: { type: "value", show: false, max: 200 },
        series: [
          {
            type: "bar",
            barGap: "10%",
            barCategoryGap: "34%",
            data: stores.map(function (s) {
              return {
                value: toNum(s.rate),
                itemStyle: {
                  color: s.state === "bad" ? "rgba(255,255,255,.26)" : "rgba(255,255,255,.92)",
                  borderRadius: [2, 2, 0, 0]
                }
              };
            }),
            animationDuration: 600,
            animationEasing: "cubicOut",
            animationDelay: function (idx) { return 1100 + idx * 30; }
          }
        ]
      })
    );
    return chart;
  }

  /* 内页：四店达成率对比 */
  function storeRateBars(el) {
    var stores = R.stores.slice().sort(function (a, b) { return toNum(b.rate) - toNum(a.rate); });
    var chart = window.echarts.init(el);
    chart.setOption(
      baseGrid({
        grid: { left: 8, right: 48, top: 16, bottom: 8, containLabel: true },
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" },
          backgroundColor: "rgba(3,28,36,.94)",
          borderColor: "rgba(255,255,255,.12)",
          textStyle: { color: INK, fontSize: 12 },
          formatter: function (params) {
            var s = stores[params[0].dataIndex];
            return s.name + "<br/>达成率 " + s.rate + "<br/>差额 " + s.diff + " 元" +
              "<br/>同比 " + s.yoy + "　环比 " + s.mom;
          }
        },
        xAxis: {
          type: "value",
          max: 180,
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { lineStyle: { color: HAIR } },
          axisLabel: { color: SOFT, fontSize: 11, formatter: "{value}%" }
        },
        yAxis: {
          type: "category",
          data: stores.map(function (s) { return short(s.name); }),
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: axisLabel({ fontSize: 12 })
        },
        series: [
          {
            type: "bar",
            barWidth: 14,
            itemStyle: { borderRadius: [0, 6, 6, 0] },
            label: {
              show: true,
              position: "right",
              color: INK,
              fontSize: 12,
              formatter: "{c}%"
            },
            data: stores.map(function (s) {
              return { value: toNum(s.rate), itemStyle: { color: stateColor(s.state) } };
            }),
            animationDuration: 700,
            animationDelay: function (idx) { return idx * 90; }
          }
        ]
      })
    );
    return chart;
  }

  /* 内页：一级品类结构（销售额），按段取数 */
  function categoryBars(el, segment) {
    var block = R.tables.filter(function (b) { return b.title === "块 3-2 一级品类"; })[0];
    if (!block) return null;
    var rows = block.rows.filter(function (r) { return r[0].v === segment; });
    rows = rows
      .map(function (r) {
        return { name: r[1].v, value: toNum(r[5].v), diff: r[8].v, raw: r[5].v };
      })
      .filter(function (d) { return d.value != null; })
      .sort(function (a, b) { return a.value - b.value; });
    var chart = window.echarts.init(el);
    chart.setOption(
      baseGrid({
        grid: { left: 8, right: 72, top: 16, bottom: 8, containLabel: true },
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" },
          backgroundColor: "rgba(3,28,36,.94)",
          borderColor: "rgba(255,255,255,.12)",
          textStyle: { color: INK, fontSize: 12 },
          formatter: function (params) {
            var d = rows[params[0].dataIndex];
            return d.name + "<br/>销售额 " + d.raw + " 元<br/>环比 " + d.diff;
          }
        },
        xAxis: {
          type: "value",
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { lineStyle: { color: HAIR } },
          axisLabel: {
            color: SOFT,
            fontSize: 11,
            formatter: function (v) { return (v / 10000).toFixed(0) + " 万"; }
          }
        },
        yAxis: {
          type: "category",
          data: rows.map(function (d) { return d.name; }),
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: axisLabel({ fontSize: 12 })
        },
        series: [
          {
            type: "bar",
            barWidth: 14,
            itemStyle: { borderRadius: [0, 6, 6, 0], color: ACCENT },
            label: {
              show: true,
              position: "right",
              color: SOFT,
              fontSize: 11,
              formatter: function (p) { return (p.value / 10000).toFixed(1) + " 万"; }
            },
            data: rows.map(function (d) { return d.value; }),
            animationDuration: 700,
            animationDelay: function (idx) { return idx * 70; }
          }
        ]
      })
    );
    return chart;
  }

  /* 年季结构（销售额），按段取数 */
  function seasonBars(el, segment) {
    var block = R.tables.filter(function (b) { return b.title === "块 3-4 年季"; })[0];
    if (!block) return null;
    var rows = block.rows
      .filter(function (r) { return r[0].v === segment; })
      .map(function (r) {
        return { name: r[1].v, value: toNum(r[6].v), share: r[7].v, yoy: r[8].v };
      })
      .filter(function (d) { return d.value != null && d.value > 0; })
      .sort(function (a, b) { return a.value - b.value; });
    var chart = window.echarts.init(el);
    chart.setOption(
      baseGrid({
        grid: { left: 8, right: 56, top: 16, bottom: 8, containLabel: true },
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "shadow" },
          backgroundColor: "rgba(3,28,36,.94)",
          borderColor: "rgba(255,255,255,.12)",
          textStyle: { color: INK, fontSize: 12 },
          formatter: function (params) {
            var d = rows[params[0].dataIndex];
            return d.name + "<br/>销售额占比 " + d.share + "<br/>同比 " + d.yoy;
          }
        },
        xAxis: {
          type: "value",
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { lineStyle: { color: HAIR } },
          axisLabel: {
            color: SOFT,
            fontSize: 11,
            formatter: function (v) { return (v / 10000).toFixed(0) + " 万"; }
          }
        },
        yAxis: {
          type: "category",
          data: rows.map(function (d) { return d.name; }),
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: axisLabel({ fontSize: 12 })
        },
        series: [
          {
            type: "bar",
            barWidth: 12,
            itemStyle: { borderRadius: [0, 6, 6, 0], color: "rgba(232,140,115,.75)" },
            label: {
              show: true,
              position: "right",
              color: SOFT,
              fontSize: 11,
              formatter: function (p) { return (p.value / 10000).toFixed(1) + " 万"; }
            },
            data: rows.map(function (d) { return d.value; }),
            animationDuration: 700,
            animationDelay: function (idx) { return idx * 50; }
          }
        ]
      })
    );
    return chart;
  }

  function fallback(el) {
    el.innerHTML = '<div class="chart-fallback">图表需联网加载（ECharts CDN 不可用），下方表格数据不受影响</div>';
  }

  var charts = [];
  var resizeBound = false;

  function mount(page, store) {
    if (!R) return;
    var targets = document.querySelectorAll("[data-chart]");
    if (!targets.length) return;

    if (!window.echarts) {
      targets.forEach(fallback);
      return;
    }

    targets.forEach(function (el) {
      var kind = el.dataset.chart;
      try {
        if (kind === "hero-stores") charts.push(heroStores(el));
        if (kind === "store-rate") charts.push(storeRateBars(el));
        if (kind === "category") charts.push(categoryBars(el, store || R.meta.ttlLabel));
        if (kind === "season") charts.push(seasonBars(el, store || R.meta.ttlLabel));
      } catch (err) {
        fallback(el);
      }
    });

    if (!resizeBound) {
      resizeBound = true;
      window.addEventListener("resize", function () {
        charts.forEach(function (c) { if (c && c.resize) c.resize(); });
      });
    }
  }

  /* 单文件模式切换视图前先把旧图表销毁，避免 canvas 与实例堆积 */
  function dispose() {
    charts.forEach(function (c) {
      try { if (c && c.dispose) c.dispose(); } catch (e) { /* 忽略 */ }
    });
    charts = [];
  }

  window.FabriqueCharts = { mount: mount, dispose: dispose };
})();
