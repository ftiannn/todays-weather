(this["webpackJsonptodays-weather"]=this["webpackJsonptodays-weather"]||[]).push([[0],{164:function(e,a,t){},165:function(e,a,t){},193:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t(36),i=t.n(r),c=t(141),o=t(34),s=t(81),u=(t(163),t(164),t(208)),l=(t(165),t(205)),d=t(213),h=t(206),b=t(121),j=t(30),m=t(54),O=t(88),p=t(207),y=t(209),S=t(138),g=t.n(S),f={Afghanistan:"AF","Aland Islands":"AX",Albania:"AL",Algeria:"DZ","American Samoa":"AS",Andorra:"AD",Angola:"AO",Anguilla:"AI",Antarctica:"AQ","Antigua And Barbuda":"AG",Argentina:"AR",Armenia:"AM",Aruba:"AW",Australia:"AU",Austria:"AT",Azerbaijan:"AZ",Bahamas:"BS",Bahrain:"BH",Bangladesh:"BD",Barbados:"BB",Belarus:"BY",Belgium:"BE",Belize:"BZ",Benin:"BJ",Bermuda:"BM",Bhutan:"BT",Bolivia:"BO","Bosnia And Herzegovina":"BA",Botswana:"BW","Bouvet Island":"BV",Brazil:"BR","British Indian Ocean Territory":"IO","Brunei Darussalam":"BN",Bulgaria:"BG","Burkina Faso":"BF",Burundi:"BI",Cambodia:"KH",Cameroon:"CM",Canada:"CA","Cape Verde":"CV","Cayman Islands":"KY","Central African Republic":"CF",Chad:"TD",Chile:"CL",China:"CN","Christmas Island":"CX","Cocos (Keeling) Islands":"CC",Colombia:"CO",Comoros:"KM",Congo:"CG","Congo, Democratic Republic":"CD","Cook Islands":"CK","Costa Rica":"CR",Croatia:"HR",Cuba:"CU",Cyprus:"CY","Czech Republic":"CZ",Denmark:"DK",Djibouti:"DJ",Dominica:"DM","Dominican Republic":"DO",Ecuador:"EC",Egypt:"EG","El Salvador":"SV","Equatorial Guinea":"GQ",Eritrea:"ER",Estonia:"EE",Ethiopia:"ET","Falkland Islands":"FK","Faroe Islands":"FO",Fiji:"FJ",Finland:"FI",France:"FR","French Guiana":"GF","French Polynesia":"PF","French Southern Territories":"TF",Gabon:"GA",Gambia:"GM",Georgia:"GE",Germany:"DE",Ghana:"GH",Gibraltar:"GI",Greece:"GR",Greenland:"GL",Grenada:"GD",Guadeloupe:"GP",Guam:"GU",Guatemala:"GT",Guernsey:"GG",Guinea:"GN","Guinea-Bissau":"GW",Guyana:"GY",Haiti:"HT","Heard Island & Mcdonald Islands":"HM","Holy See (Vatican City State)":"VA",Honduras:"HN","Hong Kong":"HK",Hungary:"HU",Iceland:"IS",India:"IN",Indonesia:"ID","Iran, Islamic Republic Of":"IR",Iraq:"IQ",Ireland:"IE","Isle Of Man":"IM",Israel:"IL",Italy:"IT",Jamaica:"JM",Japan:"JP",Jersey:"JE",Jordan:"JO",Kazakhstan:"KZ",Kenya:"KE",Kiribati:"KI","Republic of Korea":"KR","South Korea":"KR","Democratic People's Republic of Korea":"KP","North Korea":"KP",Kuwait:"KW",Kyrgyzstan:"KG",Latvia:"LV",Lebanon:"LB",Lesotho:"LS",Liberia:"LR","Libyan Arab Jamahiriya":"LY",Liechtenstein:"LI",Lithuania:"LT",Luxembourg:"LU",Macao:"MO",Macedonia:"MK",Madagascar:"MG",Malawi:"MW",Malaysia:"MY",Maldives:"MV",Mali:"ML",Malta:"MT","Marshall Islands":"MH",Martinique:"MQ",Mauritania:"MR",Mauritius:"MU",Mayotte:"YT",Mexico:"MX","Micronesia, Federated States Of":"FM",Moldova:"MD",Monaco:"MC",Mongolia:"MN",Montenegro:"ME",Montserrat:"MS",Morocco:"MA",Mozambique:"MZ",Myanmar:"MM",Namibia:"NA",Nauru:"NR",Nepal:"NP",Netherlands:"NL","Netherlands Antilles":"AN","New Caledonia":"NC","New Zealand":"NZ",Nicaragua:"NI",Niger:"NE",Nigeria:"NG",Niue:"NU","Norfolk Island":"NF","Northern Mariana Islands":"MP",Norway:"NO",Oman:"OM",Pakistan:"PK",Palau:"PW","Palestinian Territory, Occupied":"PS",Panama:"PA","Papua New Guinea":"PG",Paraguay:"PY",Peru:"PE",Philippines:"PH",Pitcairn:"PN",Poland:"PL",Portugal:"PT","Puerto Rico":"PR",Qatar:"QA",Reunion:"RE",Romania:"RO","Russian Federation":"RU",Rwanda:"RW","Saint Barthelemy":"BL","Saint Helena":"SH","Saint Kitts And Nevis":"KN","Saint Lucia":"LC","Saint Martin":"MF","Saint Pierre And Miquelon":"PM","Saint Vincent And Grenadines":"VC",Samoa:"WS","San Marino":"SM","Sao Tome And Principe":"ST","Saudi Arabia":"SA",Senegal:"SN",Serbia:"RS",Seychelles:"SC","Sierra Leone":"SL",Singapore:"SG",Slovakia:"SK",Slovenia:"SI","Solomon Islands":"SB",Somalia:"SO","South Africa":"ZA","South Georgia And Sandwich Isl.":"GS",Spain:"ES","Sri Lanka":"LK",Sudan:"SD",Suriname:"SR","Svalbard And Jan Mayen":"SJ",Swaziland:"SZ",Sweden:"SE",Switzerland:"CH","Syrian Arab Republic":"SY",Taiwan:"TW",Tajikistan:"TJ",Tanzania:"TZ",Thailand:"TH","Timor-Leste":"TL",Togo:"TG",Tokelau:"TK",Tonga:"TO","Trinidad And Tobago":"TT",Tunisia:"TN",Turkey:"TR",Turkmenistan:"TM","Turks And Caicos Islands":"TC",Tuvalu:"TV",Uganda:"UG",Ukraine:"UA","United Arab Emirates":"AE","United Kingdom":"GB","United States":"US","United States Outlying Islands":"UM",Uruguay:"UY",Uzbekistan:"UZ",Vanuatu:"VU",Venezuela:"VE",Vietnam:"VN","Virgin Islands, British":"VG","Virgin Islands, U.S.":"VI","Wallis And Futuna":"WF","Western Sahara":"EH",Yemen:"YE",Zambia:"ZM",Zimbabwe:"ZW"},A=function(e){return e?e[0].toUpperCase()+e.slice(1).toLowerCase():""},M="UPDATE_SEARCH_RESULTS",x="UPDATE_SEARCH_PARAMS",T="UPDATE_SEARCH_HISTORY",C="DELETE_HISTORY_BY_INDEX",w=function(e,a){return function(){var t=Object(m.a)(Object(j.a)().mark((function t(n){var r,i;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=f[A(a)],i=r?"".concat(e,",").concat(r):"".concat(e),t.abrupt("return",g.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&appid=c3a8951e9f10f320d81023e11e361418&units=metric")).then((function(e){var a=e.data;n(I(a)),n(G(a))})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(e){return{type:M,results:e}},B=function(e,a){return{type:x,city:e,country:f[A(a)]}},G=function(e){return{type:T,results:e}},v=t(6),E=function(){var e=Object(o.b)(),a=Object(n.useState)(""),t=Object(O.a)(a,2),r=t[0],i=t[1],c=Object(n.useState)(""),s=Object(O.a)(c,2),u=s[0],l=s[1],d=Object(n.useState)(!1),h=Object(O.a)(d,2),b=h[0],S=h[1],g=Object(n.useState)(!1),f=Object(O.a)(g,2),A=f[0],M=f[1],x=Object(n.useCallback)(Object(m.a)(Object(j.a)().mark((function a(){return Object(j.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==r){a.next=4;break}S("Please enter city"),a.next=15;break;case 4:return a.prev=4,a.next=7,e(w(r,u));case 7:e(B(r,u)),T(),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(4),console.log(a.t0),M(!0);case 15:case"end":return a.stop()}}),a,null,[[4,11]])}))),[r,u,e]),T=function(){i(""),S(!1),l("")};return Object(n.useEffect)((function(){S(!1),M(!1)}),[r,u]),Object(v.jsxs)("div",{children:[Object(v.jsxs)(p.a,{children:[Object(v.jsxs)(p.a.Group,{widths:"equal",children:[Object(v.jsx)(p.a.Input,{onChange:function(e){return i(e.target.value)},label:"City",placeholder:"City...",error:b,value:r}),Object(v.jsx)(p.a.Input,{onChange:function(e){return l(e.target.value)},label:"Country",placeholder:"Country...",value:u})]}),Object(v.jsxs)(p.a.Group,{inline:!0,children:[Object(v.jsx)(p.a.Button,{onClick:x,primary:!0,children:"Search"}),Object(v.jsx)(p.a.Button,{onClick:T,children:"Reset"})]})]}),A&&Object(v.jsx)(y.a,{negative:!0,children:Object(v.jsx)("p",{children:"No Record Found"})})]})},N=t(120),R=t.n(N),k=function(e){if(!e||e&&e.search&&e.search.result&&0===Object.keys(e.search.result).length)return[];var a=e.search.result;return[{country:a.sys.country,city:a.name,weather:a.weather[0].main,description:a.weather[0].description,temp:a.main.temp_min+" ~ "+a.main.temp_max,humidity:a.main.humidity+"%",dateTime:R()(new Date(1e3*a.dt+a.timezone)).format("YYYY-MM-DD h:mm:ss A")}]},P=function(e){return e.search.history.map((function(e){return{city:e.name,country:e.sys.country,time:R()(new Date(1e3*e.dt+e.timezone)).format("h:mm:ss A")}}))},L=function(){var e=Object(o.c)(k),a=Object(o.c)(P);return 0!==e.length&&0!==a.length&&Object(v.jsxs)(b.a,{style:{marginTop:"3em"},children:[Object(v.jsx)(d.a,{as:"h2",children:e[0].weather}),Object(v.jsxs)(d.a,{as:"h4",color:"grey",children:[e[0].city,", ",e[0].country]}),Object(v.jsxs)("p",{children:[" Description: ",e[0].description," "]}),Object(v.jsxs)("p",{children:[" Temperature: ",e[0].temp," ",Object(v.jsx)("span",{children:"\u2103"})]}),Object(v.jsxs)("p",{children:[" Humidity: ",e[0].humidity," "]}),Object(v.jsxs)("p",{children:[" Time: ",e[0].dateTime," "]})]})},K=t(210),D=t(83),H=t(211),F=t(59),U=function(){var e=Object(o.b)(),a=Object(o.c)(P),t=function(){var a=Object(m.a)(Object(j.a)().mark((function a(t,n){return Object(j.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e(w(t,n));case 3:e(B(t,n)),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.log(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e,t){return a.apply(this,arguments)}}(),n=function(){var a=Object(m.a)(Object(j.a)().mark((function a(t){return Object(j.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e({type:C,index:t});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a,{as:"h2",children:"Search History"}),Object(v.jsx)(h.a,{}),0===a.length?Object(v.jsx)(l.a,{textAlign:"center",children:"No records"}):Object(v.jsx)(K.a,{children:Object(v.jsx)(K.a.Body,{children:a.map((function(e,a){return Object(v.jsxs)(D.a,{children:[Object(v.jsxs)(K.a.Cell,{children:[e.city,", ",e.country]}),Object(v.jsx)(K.a.Cell,{textAlign:"right",children:e.time}),Object(v.jsxs)(K.a.Cell,{textAlign:"right",children:[Object(v.jsx)(H.a,{icon:!0,onClick:function(){return t(e.city,e.country)},children:Object(v.jsx)(F.a,{name:"search"})}),Object(v.jsx)(H.a,{icon:!0,onClick:function(){return n(a)},children:Object(v.jsx)(F.a,{name:"close"})})]})]},a)}))})})]})},V=function(){return Object(v.jsxs)(l.a,{style:{marginTop:"3em"},children:[Object(v.jsx)(d.a,{as:"h1",children:"Today's Weather"}),Object(v.jsx)(h.a,{}),Object(v.jsx)(E,{}),Object(v.jsx)(L,{}),Object(v.jsx)(b.a,{vertical:!0,style:{marginTop:"7em"},children:Object(v.jsx)(U,{})})]})},Y=function(){return Object(v.jsxs)(l.a,{style:{marginTop:"3em"},children:[Object(v.jsx)(d.a,{as:"h1",children:"Quote of the day"}),Object(v.jsx)("img",{src:"/todays-weather/qotd.png",alt:"qotd"}),Object(v.jsx)(h.a,{}),Object(v.jsx)(y.a,{style:{marginTop:"2em"},header:"For you today...",content:function(){var e=["Logic will get you from A to B. Imagination will take you everywhere.","There are 10 kinds of people. Those who know binary and those who don't.","There are two ways of constructing a software deisng. One way is to make it so simple taht there are obvious no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.","It's not that I'm so smart, it's just that I stay with problems longer.","It is pitch dark. You are likely to be eaten by a grue."];return e[Math.floor(e.length*Math.random())]}()}),Object(v.jsx)(H.a,{style:{marginTop:"2em"},color:"github square",icon:"github square",onClick:function(){return window.location="https://github.com/ftiannn/todays-weather"}})]})},J=[{menuItem:"Quote of the day",render:function(){return Object(v.jsx)(u.a.Pane,{attached:!1,children:Object(v.jsx)(Y,{})})}},{menuItem:"Weather Tracker",render:function(){return Object(v.jsx)(u.a.Pane,{attached:!1,children:Object(v.jsx)(V,{})})}}],W=function(){return Object(v.jsx)(u.a,{menu:{pointing:!0},panes:J})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=t(26),z={result:{},params:{},history:[]},q=Object(s.b)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case M:return Object(Z.a)(Object(Z.a)({},e),{},{result:a.results});case x:return Object(Z.a)(Object(Z.a)({},e),{},{params:{city:a.city,country:a.country}});case T:return e.history.unshift(a.results),Object(Z.a)(Object(Z.a)({},e),{},{history:e.history});case C:return e.history.splice(a.index,1),Object(Z.a)(Object(Z.a)({},e),{},{history:e.history});default:return e}}}),_=Object(s.d)(q,[],Object(s.c)(Object(s.a)(c.a),window.devToolsExtension?window.devToolsExtension():function(e){return e}));i.a.render(Object(v.jsx)(o.a,{store:_,children:Object(v.jsx)(W,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[193,1,2]]]);
//# sourceMappingURL=main.76619a83.chunk.js.map