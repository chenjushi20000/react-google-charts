(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/docs/FromAPI.mdx":function(e,t,a){"use strict";a.r(t);var n=a("./node_modules/docz-core/node_modules/@babel/runtime/regenerator/index.js"),r=a.n(n),o=a("./node_modules/react/index.js"),s=a.n(o),c=a("./node_modules/@mdx-js/tag/dist/index.js"),i=a("./node_modules/docz/dist/index.m.js"),p=a("./node_modules/react-component-component/es/index.js"),m=a("./src/index.tsx");function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(e,t,a,n,r,o,s){try{var c=e[o](s),i=c.value}catch(e){return void a(e)}c.done?t(i):Promise.resolve(i).then(n,r)}function u(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var o=e.apply(t,a);function s(e){l(o,n,r,s,c,"next",e)}function c(e){l(o,n,r,s,c,"throw",e)}s(void 0)})}}function h(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}t.default=function(e){var t=e.components;h(e,["components"]);return s.a.createElement(c.MDXTag,{name:"wrapper",components:t},s.a.createElement(c.MDXTag,{name:"h1",components:t,props:{id:"fetch-data-from-an-api"}},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"h1",props:{"aria-hidden":!0,href:"#fetch-data-from-an-api"}},s.a.createElement(c.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Fetch data from an API"),s.a.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"exchange-rates"}},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#exchange-rates"}},s.a.createElement(c.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Exchange Rates"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Let's use ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://exchangeratesapi.io/"}},"exchangeratesapi.io")," to get some exchange rates\nand render them in a chart."),s.a.createElement(c.MDXTag,{name:"p",components:t},"Note : We're using ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"react-component-component")," to avoid having to use a React Class Component. It's not necessary for our use-case to do so."),s.a.createElement(c.MDXTag,{name:"p",components:t},"You can check the raw api response ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://exchangeratesapi.io/api/latest?symbols=USD,GBP,CAD"}},"here.")),s.a.createElement(i.d,{__position:0,__code:"<Component\n  initialState={{ dataLoadingStatus: 'loading', chartData: [] }}\n  didMount={async component => {\n    const response = await fetch(\n      'https://exchangeratesapi.io/api/latest?symbols=USD,GBP,CAD',\n    )\n    const json = await response.json()\n    const rateCurrencyNames = Object.keys(json.rates)\n    const rateCurrencyValues = Object.values(json.rates)\n    const chartData = [['Currency Name', 'Currency Rate']]\n    for (let i = 0; i < rateCurrencyNames.length; i += 1) {\n      chartData.push([rateCurrencyNames[i], rateCurrencyValues[i]])\n    }\n    component.setState({\n      dataLoadingStatus: 'ready',\n      chartData: chartData,\n    })\n  }}\n>\n  {component => {\n    return component.state.dataLoadingStatus === 'ready' ? (\n      <Chart\n        chartType=\"BarChart\"\n        data={component.state.chartData}\n        options={{\n          chartArea: {\n            width: '50%',\n          },\n          title: 'EUR Price',\n        }}\n        rootProps={{ 'data-testid': '1' }}\n      />\n    ) : (\n      <div>Fetching data from API</div>\n    )\n  }}\n</Component>"},s.a.createElement(p.a,{initialState:{dataLoadingStatus:"loading",chartData:[]},didMount:function(){var e=u(r.a.mark(function e(t){var a,n,o,s,c,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://exchangeratesapi.io/api/latest?symbols=USD,GBP,CAD");case 2:return a=e.sent,e.next=5,a.json();case 5:for(n=e.sent,o=Object.keys(n.rates),s=Object.values(n.rates),c=[["Currency Name","Currency Rate"]],i=0;i<o.length;i+=1)c.push([o[i],s[i]]);t.setState({dataLoadingStatus:"ready",chartData:c});case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},function(e){return"ready"===e.state.dataLoadingStatus?s.a.createElement(m.a,{chartType:"BarChart",data:e.state.chartData,options:{chartArea:{width:"50%"},title:"EUR Price"},rootProps:{"data-testid":"1"}}):s.a.createElement("div",null,"Fetching data from API")})),s.a.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"debt-incurred-by-the-lebanese-state-over-time"}},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#debt-incurred-by-the-lebanese-state-over-time"}},s.a.createElement(c.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Debt Incurred by the Lebanese state over time."),s.a.createElement(c.MDXTag,{name:"p",components:t},"Let's use the ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://data.worldbank.org/indicator"}},"worldbank.org API")," to get GDP growth in Lebanon."),s.a.createElement(c.MDXTag,{name:"p",components:t},"Note : We're using ",s.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"react-component-component")," to avoid having to use a React Class Component. It's not necessary for our use-case to do so."),s.a.createElement(c.MDXTag,{name:"p",components:t},"You can check the raw api response ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://api.worldbank.org/v2/countries/lb/indicators/DT.DOD.DECT.CD?format=json"}},"here.")),s.a.createElement(i.d,{__position:1,__code:"<Component\n  initialState={{ dataLoadingStatus: 'loading', chartData: [] }}\n  didMount={async component => {\n    const COUNTRY_CODE = 'lb'\n    const INDICATOR = 'DT.DOD.DECT.CD'\n    const response = await fetch(\n      'http://api.worldbank.org/v2/countries/' +\n        COUNTRY_CODE +\n        '/indicators/' +\n        INDICATOR +\n        '?format=json',\n    )\n    const json = await response.json()\n    const [metadata, data] = json\n    {\n      /* console.log(data,metadata) */\n    }\n    const columns = [\n      { type: 'date', label: 'Year' },\n      { type: 'number', label: 'Debt' },\n    ]\n    let rows = []\n    const nonNullData = data.filter(row => row.value !== null)\n    for (let row of nonNullData) {\n      const { date, value } = row\n      rows.push([new Date(Date.parse(date)), value])\n    }\n    component.setState({\n      chartData: [columns, ...rows],\n      dataLoadingStatus: 'ready',\n    })\n  }}\n>\n  {component => {\n    return component.state.dataLoadingStatus === 'ready' ? (\n      <Chart\n        chartType=\"LineChart\"\n        data={component.state.chartData}\n        options={{\n          hAxis: {\n            format: 'yyyy',\n          },\n          vAxis: {\n            format: 'short',\n          },\n          title: 'Debt incurred over time.',\n        }}\n        rootProps={{ 'data-testid': '2' }}\n      />\n    ) : (\n      <div>Fetching data from API</div>\n    )\n  }}\n</Component>"},s.a.createElement(p.a,{initialState:{dataLoadingStatus:"loading",chartData:[]},didMount:function(){var e=u(r.a.mark(function e(t){var a,n,o,s,c,i,p,m,l,u,h,f,D,g,y,v,b;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="lb",n="DT.DOD.DECT.CD",e.next=4,fetch("http://api.worldbank.org/v2/countries/"+a+"/indicators/"+n+"?format=json");case 4:return o=e.sent,e.next=7,o.json();case 7:for(s=e.sent,c=d(s,2),c[0],i=c[1],p=[{type:"date",label:"Year"},{type:"number",label:"Debt"}],m=[],l=i.filter(function(e){return null!==e.value}),u=!0,h=!1,f=void 0,e.prev=15,D=l[Symbol.iterator]();!(u=(g=D.next()).done);u=!0)y=g.value,v=y.date,b=y.value,m.push([new Date(Date.parse(v)),b]);e.next=23;break;case 19:e.prev=19,e.t0=e.catch(15),h=!0,f=e.t0;case 23:e.prev=23,e.prev=24,u||null==D.return||D.return();case 26:if(e.prev=26,!h){e.next=29;break}throw f;case 29:return e.finish(26);case 30:return e.finish(23);case 31:t.setState({chartData:[p].concat(m),dataLoadingStatus:"ready"});case 32:case"end":return e.stop()}},e,this,[[15,19,23,31],[24,,26,30]])}));return function(t){return e.apply(this,arguments)}}()},function(e){return"ready"===e.state.dataLoadingStatus?s.a.createElement(m.a,{chartType:"LineChart",data:e.state.chartData,options:{hAxis:{format:"yyyy"},vAxis:{format:"short"},title:"Debt incurred over time."},rootProps:{"data-testid":"2"}}):s.a.createElement("div",null,"Fetching data from API")})),s.a.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"databank-reference"}},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#databank-reference"}},s.a.createElement(c.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"DataBank Reference"))}}}]);