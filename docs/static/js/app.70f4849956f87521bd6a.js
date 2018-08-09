!function(e){function r(r){for(var t,o,n=r[0],u=r[1],h=r[2],m=r[3]||[],g=0,p=[];g<n.length;g++)o=n[g],s[o]&&p.push(s[o][0]),s[o]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);i&&i(r);var f=document.getElementsByTagName("head")[0];for(m.forEach(function(e){if(void 0===s[e]){s[e]=null;var r=document.createElement("link");r.crossOrigin="anonymous",c.nc&&r.setAttribute("nonce",c.nc),r.rel="prefetch",r.as="script",r.href=d(e),f.appendChild(r)}});p.length;)p.shift()();return l.push.apply(l,h||[]),a()}function a(){for(var e,r=0;r<l.length;r++){for(var a=l[r],t=!0,d=1;d<a.length;d++){var o=a[d];0!==s[o]&&(t=!1)}t&&(l.splice(r--,1),e=c(c.s=a[0]))}return e}var t={},s={1:0},l=[];function d(e){return c.p+"static/js/"+({2:"src-docs-area-chart",3:"src-docs-bar-chart",4:"src-docs-bubble-chart",5:"src-docs-calendar-chart",6:"src-docs-candle-stick-chart",7:"src-docs-column-chart",8:"src-docs-combo-chart",9:"src-docs-diff-chart",10:"src-docs-formatters",11:"src-docs-from-api",12:"src-docs-from-spread-sheet",13:"src-docs-gantt-chart",14:"src-docs-gauge-chart",15:"src-docs-geo-chart",16:"src-docs-histogram",17:"src-docs-intervals",18:"src-docs-line-chart",19:"src-docs-org-chart",20:"src-docs-pie-chart",21:"src-docs-sankey-diagram",22:"src-docs-scatter-chart",23:"src-docs-stepped-area-chart",24:"src-docs-table-chart",25:"src-docs-timeline",26:"src-docs-tree-map",27:"src-docs-trend-line",28:"src-docs-word-tree",29:"src-docs-index"}[e]||e)+"."+{2:"746bfe47",3:"527c6df4",4:"2b4301cf",5:"b6f53bf1",6:"9369e930",7:"e2f93a45",8:"a3778fc2",9:"d39a8d61",10:"c470ee32",11:"9e94da79",12:"1b60dcab",13:"4135b580",14:"8d7f1f6f",15:"b0a24ce5",16:"372c29ac",17:"b6f45d31",18:"842b4645",19:"f7f4b4be",20:"3436de78",21:"d43166fa",22:"49efa31b",23:"de4eb814",24:"021e1786",25:"7a3cf329",26:"2e96d00b",27:"4427a441",28:"91297406",29:"909ffa4e"}[e]+".js"}function c(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var r=[],a=s[e];if(0!==a)if(a)r.push(a[2]);else{var t=new Promise(function(r,t){a=s[e]=[r,t]});r.push(a[2]=t);var l,o=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.timeout=120,c.nc&&n.setAttribute("nonce",c.nc),n.src=d(e),0!==n.src.indexOf(window.location.origin+"/")&&(n.crossOrigin="anonymous"),l=function(r){n.onerror=n.onload=null,clearTimeout(u);var a=s[e];if(0!==a){if(a){var t=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src,d=new Error("Loading chunk "+e+" failed.\n("+t+": "+l+")");d.type=t,d.request=l,a[1](d)}s[e]=void 0}};var u=setTimeout(function(){l({type:"timeout",target:n})},12e4);n.onerror=n.onload=l,o.appendChild(n)}return Promise.all(r)},c.m=e,c.c=t,c.d=function(e,r,a){c.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,r){if(1&r&&(e=c(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)c.d(a,t,function(r){return e[r]}.bind(null,t));return a},c.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(r,"a",r),r},c.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},c.p="/react-google-charts/",c.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],n=o.push.bind(o);o.push=r,o=o.slice();for(var u=0;u<o.length;u++)r(o[u]);var i=n;r([[],{},0,[0,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,7]]),l.push([0,0]),a()}({"./.docz/app/db.json":function(e){e.exports={config:{title:"React Google Charts",description:"Render any chart with Google Charts and React",themeConfig:{},ordering:"descending",version:"2.0.29",typescript:!0,dest:"docs",hashRouter:!0,propsParser:!1,indexHtml:"src/docs/index.html",base:"/react-google-charts/"},entries:{"src/docs/AreaChart.mdx":{route:"/area-chart",name:"Area Chart",menu:"Charts",id:"01CMEWCJB98RV7PCEHD5CF74VP",filepath:"src/docs/AreaChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/AreaChart.mdx",slug:"src-docs-area-chart",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"simple-example",value:"Simple example"},{depth:2,slug:"stacking-areas",value:"Stacking areas"},{depth:2,slug:"100-percent-stacked-areas",value:"100 percent stacked areas"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/BarChart.mdx":{route:"/bar-chart",name:"Bar Chart",menu:"Charts",id:"01CMEWCJBAYC32DP9TR0FE3QA5",filepath:"src/docs/BarChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/BarChart.mdx",slug:"src-docs-bar-chart",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"basic-bar-chart-with-multiple-series",value:"Basic bar chart with multiple series"},{depth:2,slug:"material-design",value:"Material design"},{depth:2,slug:"stacked-bar-chart-with-multiple-series",value:"Stacked bar chart with multiple series"},{depth:2,slug:"customizable-bar-colors",value:"Customizable bar colors"},{depth:2,slug:"right-y-axis",value:"Right y axis"},{depth:2,slug:"labeling-bars",value:"Labeling bars"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/BubbleChart.mdx":{route:"/bubble-chart",name:"Bubble Chart",menu:"Charts",id:"01CMEWCJBBP8366A0K2GY6NEPF",filepath:"src/docs/BubbleChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/BubbleChart.mdx",slug:"src-docs-bubble-chart",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"series-example",value:"Series example"},{depth:2,slug:"color-by-numbers",value:"Color by numbers"},{depth:2,slug:"custom-labels",value:"Custom labels"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/CalendarChart.mdx":{route:"/calendar-chart",name:"Calendar Chart",menu:"Charts",id:"01CMEWCJBBV4DHVGNVRVJ4Q2S2",filepath:"src/docs/CalendarChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/CalendarChart.mdx",slug:"src-docs-calendar-chart",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"simple-example",value:"Simple example"},{depth:2,slug:"with-negative-values",value:"With negative values"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/CandleStickChart.mdx":{route:"/candleStick-chart",name:"CandleStick Chart",menu:"Charts",id:"01CMEWCJBB5DMCRR1DBMA789G7",filepath:"src/docs/CandleStickChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/CandleStickChart.mdx",slug:"src-docs-candle-stick-chart",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"simple-example",value:"Simple example"},{depth:2,slug:"waterfall-chart",value:"Waterfall chart"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/ColumnChart.mdx":{route:"/column-chart",name:"Column Chart",menu:"Charts",id:"01CMEWCJBBY7JYX7QX5N5J2BNA",filepath:"src/docs/ColumnChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/ColumnChart.mdx",slug:"src-docs-column-chart",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"same-as-barchart",value:"Same as barchart"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/ComboChart.mdx":{route:"/combo-chart",name:"Combo Chart",menu:"Charts",id:"01CMEWCJBC92BS6ZRMTZTRVVJW",filepath:"src/docs/ComboChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/ComboChart.mdx",slug:"src-docs-combo-chart",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/DiffChart.mdx":{route:"/diff-chart",name:"Diff Chart",menu:"Charts",id:"01CMEWCJBCNK22H7GT24S28QHX",filepath:"src/docs/DiffChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/DiffChart.mdx",slug:"src-docs-diff-chart",order:0,headings:[{depth:2,slug:"diff-scatter-chart",value:"Diff scatter chart"},{depth:2,slug:"diff-pie-charts",value:"Diff pie charts"},{depth:2,slug:"diff-bar-charts",value:"Diff bar charts"},{depth:2,slug:"diff-column-charts",value:"Diff column charts"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/Formatters.mdx":{route:"/formatters",name:"Formatters",menu:"Charts",id:"01CMEWCJBCJYE4D3VDM7S1J8DG",filepath:"src/docs/Formatters.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/Formatters.mdx",slug:"src-docs-formatters",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"arrowformat",value:"Arrowformat"},{depth:2,slug:"barformat",value:"Barformat"},{depth:2,slug:"colorformat",value:"Colorformat"},{depth:2,slug:"dateformat",value:"Dateformat"},{depth:2,slug:"numberformat",value:"Numberformat"},{depth:2,slug:"patternformat",value:"Patternformat"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/FromAPI.mdx":{route:"/data-sources/from-api",name:"From API",menu:"Data Sources",id:"01CMEWCJBCMSRD3C6J12QMP8WC",filepath:"src/docs/FromAPI.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/FromAPI.mdx",slug:"src-docs-from-api",order:0,headings:[{depth:1,slug:"fetch-data-from-an-api",value:"Fetch data from an api"},{depth:2,slug:"exchange-rates",value:"Exchange rates"},{depth:2,slug:"debt-incurred-by-the-lebanese-state-over-time",value:"Debt incurred by the lebanese state over time"},{depth:2,slug:"databank-reference",value:"Databank reference"}]},"src/docs/FromSpreadSheet.mdx":{route:"/data-sources/from-google-spreadsheet",name:"From Google SpreadSheet",menu:"Data Sources",id:"01CMEWCJBD3A56DH6R8HT5A8X3",filepath:"src/docs/FromSpreadSheet.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/FromSpreadSheet.mdx",slug:"src-docs-from-spread-sheet",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"simple-example",value:"Simple example"},{depth:2,slug:"query-data-from-spreadsheet",value:"Query data from spreadsheet"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/GanttChart.mdx":{route:"/gantt-chart",name:"Gantt Chart",menu:"Charts",id:"01CMEWCJBD5FE0ERHSJ1K2HC9T",filepath:"src/docs/GanttChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/GanttChart.mdx",slug:"src-docs-gantt-chart",order:0,headings:[{depth:2,slug:"simple-example",value:"Simple example"},{depth:2,slug:"no-dependencies",value:"No dependencies"},{depth:2,slug:"grouping-resources",value:"Grouping resources"},{depth:2,slug:"computed-start-end-from-duration",value:"Computed start end from duration"},{depth:2,slug:"critical-path",value:"Critical path"},{depth:2,slug:"styling-arrows",value:"Styling arrows"},{depth:2,slug:"styling-tracks",value:"Styling tracks"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/GaugeChart.mdx":{route:"/gauge-chart",name:"Gauge Chart",menu:"Charts",id:"01CMEWCJBDKQXA2BH7CWYBSV36",filepath:"src/docs/GaugeChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/GaugeChart.mdx",slug:"src-docs-gauge-chart",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"simple-example",value:"Simple example"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/GeoChart.mdx":{route:"/geo-chart",name:"Geo Chart",menu:"Charts",id:"01CMEWCJBDKAT84YMCA36MQWM9",filepath:"src/docs/GeoChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/GeoChart.mdx",slug:"src-docs-geo-chart",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"region-geocharts",value:"Region geocharts"},{depth:2,slug:"marker-geocharts",value:"Marker geocharts"},{depth:2,slug:"displaying-proportional-markers",value:"Displaying proportional markers"},{depth:2,slug:"coloring-your-chart",value:"Coloring your chart"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/Histogram.mdx":{route:"/histogram-chart",name:"Histogram",menu:"Charts",id:"01CMEWCJBEAR57VS4S1AD4R8AX",filepath:"src/docs/Histogram.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/Histogram.mdx",slug:"src-docs-histogram",order:0,headings:[{depth:2,slug:"example",value:"Example"},{depth:2,slug:"controlling-colors",value:"Controlling colors"},{depth:2,slug:"controlling-buckets",value:"Controlling buckets"},{depth:2,slug:"distribution",value:"Distribution"},{depth:2,slug:"multiple-series",value:"Multiple series"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/Intervals.mdx":{route:"/intervals-chart",name:"Intervals",menu:"Charts",id:"01CMEWCJBEGVMGXF24KA122TJN",filepath:"src/docs/Intervals.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/Intervals.mdx",slug:"src-docs-intervals",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"line-intervals",value:"Line intervals"},{depth:2,slug:"line-intervals-tailored",value:"Line intervals tailored"},{depth:2,slug:"bar-intervals",value:"Bar intervals"},{depth:2,slug:"box-intervals",value:"Box intervals"},{depth:2,slug:"stick-intervals",value:"Stick intervals"},{depth:2,slug:"point-intervals",value:"Point intervals"},{depth:2,slug:"area-intervals",value:"Area intervals"},{depth:2,slug:"combining-interval-styles",value:"Combining interval styles"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/LineChart.mdx":{route:"/line-chart",name:"Line Chart",menu:"Charts",id:"01CMEWCJBEWBVZHVM2HVMW9RT0",filepath:"src/docs/LineChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/LineChart.mdx",slug:"src-docs-line-chart",order:0,headings:[{depth:2,slug:"basic-line-chart-with-default-styling",value:"Basic line chart with default styling"},{depth:2,slug:"multiple-line-types",value:"Multiple line types"},{depth:2,slug:"material-design-linechart",value:"Material design linechart"},{depth:2,slug:"material-design-dual-y-charts",value:"Material design dual y charts"},{depth:2,slug:"data-format",value:"Data format"},{depth:2,slug:"reference",value:"Reference"}]},"src/docs/OrgChart.mdx":{route:"/org-chart",name:"Org Chart",menu:"Charts",id:"01CMEWCJBEB00HZJS2Y19NANR3",filepath:"src/docs/OrgChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/OrgChart.mdx",slug:"src-docs-org-chart",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"example-with-html",value:"Example with html"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/PieChart.mdx":{route:"/pie-chart",name:"Pie Chart",menu:"Charts",id:"01CMEWCJBF0W2AA51SEQF2W94R",filepath:"src/docs/PieChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/PieChart.mdx",slug:"src-docs-pie-chart",order:0,headings:[{depth:2,slug:"simple-example",value:"Simple example"},{depth:2,slug:"3d-pie-chart",value:"3d pie chart"},{depth:2,slug:"donut-chart",value:"Donut chart"},{depth:2,slug:"rotating-a-pie-chart",value:"Rotating a pie chart"},{depth:2,slug:"exploding-a-slice",value:"Exploding a slice"},{depth:2,slug:"removing-slices",value:"Removing slices"},{depth:2,slug:"slice-visibility-threshold",value:"Slice visibility threshold"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/SankeyDiagram.mdx":{route:"/sankey-diagram",name:"Sankey Diagram",menu:"Charts",id:"01CMEWCJBFA0F5ETK71GR4CTFX",filepath:"src/docs/SankeyDiagram.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/SankeyDiagram.mdx",slug:"src-docs-sankey-diagram",order:0,headings:[{depth:2,slug:"simple-example",value:"Simple example"},{depth:2,slug:"multilvel-sankeys",value:"Multilvel sankeys"},{depth:2,slug:"custom-colors",value:"Custom colors"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/ScatterChart.mdx":{route:"/scatter-chart",name:"Scatter Chart",menu:"Charts",id:"01CMEWCJBFPZBZBT1NK7Y013BX",filepath:"src/docs/ScatterChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/ScatterChart.mdx",slug:"src-docs-scatter-chart",order:0,headings:[{depth:2,slug:"simple-example",value:"Simple example"},{depth:2,slug:"changing-shapes-and-animating-points",value:"Changing shapes and animating points"},{depth:2,slug:"material-design-scatter-chart",value:"Material design scatter chart"},{depth:2,slug:"dual-y-material-design-scatterchart",value:"Dual y material design scatterchart"},{depth:2,slug:"top-x-chart",value:"Top x chart"},{depth:2,slug:"data-format",value:"Data format"},{depth:2,slug:"reference",value:"Reference"}]},"src/docs/SteppedAreaChart.mdx":{route:"/stepped-area-chart",name:"Stepped Area Chart",menu:"Charts",id:"01CMEWCJBFWGNNR0E6Z2C3ARQV",filepath:"src/docs/SteppedAreaChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/SteppedAreaChart.mdx",slug:"src-docs-stepped-area-chart",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"simple-example",value:"Simple example"},{depth:2,slug:"100-percent-stacked-stepped-area",value:"100 percent stacked stepped area"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/TableChart.mdx":{route:"/table-chart",name:"Table Chart",menu:"Charts",id:"01CMEWCJBGETSY8AE8GM8VSHJA",filepath:"src/docs/TableChart.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/TableChart.mdx",slug:"src-docs-table-chart",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"simple-example",value:"Simple example"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/Timeline.mdx":{route:"/timeline-chart",name:"Timelines",menu:"Charts",id:"01CMEWCJBGPV6H8RJMVZSCPT91",filepath:"src/docs/Timeline.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/Timeline.mdx",slug:"src-docs-timeline",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"simple-example",value:"Simple example"},{depth:2,slug:"labeling-the-bars",value:"Labeling the bars"},{depth:2,slug:"an-advanced-example",value:"An advanced example"},{depth:2,slug:"putting-bars-on-one-row",value:"Putting bars on one row"},{depth:2,slug:"controlling-the-colors",value:"Controlling the colors"},{depth:3,slug:"color-by-row-label",value:"Color by row label"},{depth:3,slug:"same-colors-for-all-bars",value:"Same colors for all bars"},{depth:3,slug:"setting-background-color",value:"Setting background color"},{depth:3,slug:"setting-individual-bar-colors",value:"Setting individual bar colors"},{depth:3,slug:"changing-the-fonts",value:"Changing the fonts"},{depth:2,slug:"overlapping-gridlines",value:"Overlapping gridlines"},{depth:2,slug:"customizing-tooltips",value:"Customizing tooltips"},{depth:2,slug:"data-format",value:"Data format"},{depth:2,slug:"reference",value:"Reference"}]},"src/docs/TreeMap.mdx":{route:"/treemap-chart",name:"TreeMap",menu:"Charts",id:"01CMEWCJBGSZM4WFEKMYRVBJPJ",filepath:"src/docs/TreeMap.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/TreeMap.mdx",slug:"src-docs-tree-map",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"example",value:"Example"},{depth:2,slug:"highlights",value:"Highlights"},{depth:2,slug:"custom-tooltips",value:"Custom tooltips"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/TrendLine.mdx":{route:"/trendline-chart",name:"TrendLines",menu:"Charts",id:"01CMEWCJBHSDVSK9C8EV6DH6CS",filepath:"src/docs/TrendLine.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/TrendLine.mdx",slug:"src-docs-trend-line",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"linear-trendlines",value:"Linear trendlines"},{depth:2,slug:"exponential-trendlines",value:"Exponential trendlines"},{depth:2,slug:"changing-the-color",value:"Changing the color"},{depth:2,slug:"polynomial-trendlines",value:"Polynomial trendlines"},{depth:2,slug:"changing-opacity-and-line-width",value:"Changing opacity and line width"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/WordTree.mdx":{route:"/wordtree-chart",name:"Word Tree",menu:"Charts",id:"01CMEWCJBHAE3CEJSSN7A47EDA",filepath:"src/docs/WordTree.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/WordTree.mdx",slug:"src-docs-word-tree",order:0,headings:[{depth:1,slug:"usage",value:"Usage"},{depth:2,slug:"simple-example",value:"Simple example"},{depth:2,slug:"eplicit-wordtree",value:"Eplicit wordtree"},{depth:1,slug:"data-format",value:"Data format"},{depth:1,slug:"reference",value:"Reference"}]},"src/docs/index.mdx":{name:"Getting Started",route:"/",order:5,id:"01CMEWCJBHTT9RHGFNX2HJG12V",filepath:"src/docs/index.mdx",link:"https://github.com/RakanNimer/react-google-charts/tree/master/src/docs/index.mdx",slug:"src-docs-index",menu:null,headings:[{depth:1,slug:"react-google-charts",value:"React google charts"},{depth:2,slug:"install",value:"Install"},{depth:2,slug:"import",value:"Import"},{depth:4,slug:"and-many-more",value:"And many more"}]}}}},"./.docz/app/imports.js":function(e,r,a){"use strict";a.d(r,"a",function(){return t});var t={"src/docs/AreaChart.mdx":function(){return Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"./src/docs/AreaChart.mdx"))},"src/docs/BarChart.mdx":function(){return Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"./src/docs/BarChart.mdx"))},"src/docs/BubbleChart.mdx":function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"./src/docs/BubbleChart.mdx"))},"src/docs/CalendarChart.mdx":function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,"./src/docs/CalendarChart.mdx"))},"src/docs/CandleStickChart.mdx":function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,"./src/docs/CandleStickChart.mdx"))},"src/docs/ColumnChart.mdx":function(){return a.e(7).then(a.bind(null,"./src/docs/ColumnChart.mdx"))},"src/docs/ComboChart.mdx":function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,"./src/docs/ComboChart.mdx"))},"src/docs/DiffChart.mdx":function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,"./src/docs/DiffChart.mdx"))},"src/docs/Formatters.mdx":function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,"./src/docs/Formatters.mdx"))},"src/docs/FromAPI.mdx":function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,"./src/docs/FromAPI.mdx"))},"src/docs/FromSpreadSheet.mdx":function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,"./src/docs/FromSpreadSheet.mdx"))},"src/docs/GanttChart.mdx":function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,"./src/docs/GanttChart.mdx"))},"src/docs/GaugeChart.mdx":function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,"./src/docs/GaugeChart.mdx"))},"src/docs/GeoChart.mdx":function(){return Promise.all([a.e(0),a.e(15)]).then(a.bind(null,"./src/docs/GeoChart.mdx"))},"src/docs/Histogram.mdx":function(){return Promise.all([a.e(0),a.e(16)]).then(a.bind(null,"./src/docs/Histogram.mdx"))},"src/docs/Intervals.mdx":function(){return Promise.all([a.e(0),a.e(17)]).then(a.bind(null,"./src/docs/Intervals.mdx"))},"src/docs/LineChart.mdx":function(){return Promise.all([a.e(0),a.e(18)]).then(a.bind(null,"./src/docs/LineChart.mdx"))},"src/docs/OrgChart.mdx":function(){return Promise.all([a.e(0),a.e(19)]).then(a.bind(null,"./src/docs/OrgChart.mdx"))},"src/docs/PieChart.mdx":function(){return Promise.all([a.e(0),a.e(20)]).then(a.bind(null,"./src/docs/PieChart.mdx"))},"src/docs/SankeyDiagram.mdx":function(){return Promise.all([a.e(0),a.e(21)]).then(a.bind(null,"./src/docs/SankeyDiagram.mdx"))},"src/docs/ScatterChart.mdx":function(){return Promise.all([a.e(0),a.e(22)]).then(a.bind(null,"./src/docs/ScatterChart.mdx"))},"src/docs/SteppedAreaChart.mdx":function(){return Promise.all([a.e(0),a.e(23)]).then(a.bind(null,"./src/docs/SteppedAreaChart.mdx"))},"src/docs/TableChart.mdx":function(){return Promise.all([a.e(0),a.e(24)]).then(a.bind(null,"./src/docs/TableChart.mdx"))},"src/docs/Timeline.mdx":function(){return Promise.all([a.e(0),a.e(25)]).then(a.bind(null,"./src/docs/Timeline.mdx"))},"src/docs/TreeMap.mdx":function(){return Promise.all([a.e(0),a.e(26)]).then(a.bind(null,"./src/docs/TreeMap.mdx"))},"src/docs/TrendLine.mdx":function(){return Promise.all([a.e(0),a.e(27)]).then(a.bind(null,"./src/docs/TrendLine.mdx"))},"src/docs/WordTree.mdx":function(){return Promise.all([a.e(0),a.e(28)]).then(a.bind(null,"./src/docs/WordTree.mdx"))},"src/docs/index.mdx":function(){return Promise.all([a.e(0),a.e(29)]).then(a.bind(null,"./src/docs/index.mdx"))}}},"./.docz/app/index.jsx":function(e,r,a){"use strict";a.r(r);var t=a("./node_modules/react/index.js"),s=a.n(t),l=a("./node_modules/react-dom/index.js"),d=a.n(l),c=a("./.docz/app/root.jsx"),o=[],n=[],u=function(){return n.forEach(function(e){return e&&e()})},i=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.a;o.forEach(function(e){return e&&e()}),d.a.render(s.a.createElement(e,null),i,u)}(c.a)},"./.docz/app/root.jsx":function(e,r,a){"use strict";(function(e){var t=a("./node_modules/react/index.js"),s=a.n(t),l=a("./node_modules/react-hot-loader/index.js"),d=a("./node_modules/docz-theme-default/dist/index.m.js"),c=a("./.docz/app/imports.js"),o=a("./.docz/app/db.json");r.a=Object(l.hot)(e)(function(){return s.a.createElement(d.a,{db:o,imports:c.a,hashRouter:!0})})}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},0:function(e,r,a){a("./node_modules/docz-core/node_modules/babel-polyfill/lib/index.js"),e.exports=a("./.docz/app/index.jsx")}});