(this["webpackJsonptodays-weather"]=this["webpackJsonptodays-weather"]||[]).push([[0],{156:function(e,a,n){},157:function(e,a,n){},183:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n(33),i=n.n(r),c=n(132),o=n(31),s=n(78),u=(n(155),n(156),n(195)),l=n(203),d=n(196),h=n(202),b=(n(157),n(28)),j=n.n(b),m=n(50),O=n(83),p=n(197),y=n(199),S=n(133),A=n.n(S),M={Afghanistan:"AF","Aland Islands":"AX",Albania:"AL",Algeria:"DZ","American Samoa":"AS",Andorra:"AD",Angola:"AO",Anguilla:"AI",Antarctica:"AQ","Antigua And Barbuda":"AG",Argentina:"AR",Armenia:"AM",Aruba:"AW",Australia:"AU",Austria:"AT",Azerbaijan:"AZ",Bahamas:"BS",Bahrain:"BH",Bangladesh:"BD",Barbados:"BB",Belarus:"BY",Belgium:"BE",Belize:"BZ",Benin:"BJ",Bermuda:"BM",Bhutan:"BT",Bolivia:"BO","Bosnia And Herzegovina":"BA",Botswana:"BW","Bouvet Island":"BV",Brazil:"BR","British Indian Ocean Territory":"IO","Brunei Darussalam":"BN",Bulgaria:"BG","Burkina Faso":"BF",Burundi:"BI",Cambodia:"KH",Cameroon:"CM",Canada:"CA","Cape Verde":"CV","Cayman Islands":"KY","Central African Republic":"CF",Chad:"TD",Chile:"CL",China:"CN","Christmas Island":"CX","Cocos (Keeling) Islands":"CC",Colombia:"CO",Comoros:"KM",Congo:"CG","Congo, Democratic Republic":"CD","Cook Islands":"CK","Costa Rica":"CR",Croatia:"HR",Cuba:"CU",Cyprus:"CY","Czech Republic":"CZ",Denmark:"DK",Djibouti:"DJ",Dominica:"DM","Dominican Republic":"DO",Ecuador:"EC",Egypt:"EG","El Salvador":"SV","Equatorial Guinea":"GQ",Eritrea:"ER",Estonia:"EE",Ethiopia:"ET","Falkland Islands":"FK","Faroe Islands":"FO",Fiji:"FJ",Finland:"FI",France:"FR","French Guiana":"GF","French Polynesia":"PF","French Southern Territories":"TF",Gabon:"GA",Gambia:"GM",Georgia:"GE",Germany:"DE",Ghana:"GH",Gibraltar:"GI",Greece:"GR",Greenland:"GL",Grenada:"GD",Guadeloupe:"GP",Guam:"GU",Guatemala:"GT",Guernsey:"GG",Guinea:"GN","Guinea-Bissau":"GW",Guyana:"GY",Haiti:"HT","Heard Island & Mcdonald Islands":"HM","Holy See (Vatican City State)":"VA",Honduras:"HN","Hong Kong":"HK",Hungary:"HU",Iceland:"IS",India:"IN",Indonesia:"ID","Iran, Islamic Republic Of":"IR",Iraq:"IQ",Ireland:"IE","Isle Of Man":"IM",Israel:"IL",Italy:"IT",Jamaica:"JM",Japan:"JP",Jersey:"JE",Jordan:"JO",Kazakhstan:"KZ",Kenya:"KE",Kiribati:"KI","Republic of Korea":"KR","South Korea":"KR","Democratic People's Republic of Korea":"KP","North Korea":"KP",Kuwait:"KW",Kyrgyzstan:"KG",Latvia:"LV",Lebanon:"LB",Lesotho:"LS",Liberia:"LR","Libyan Arab Jamahiriya":"LY",Liechtenstein:"LI",Lithuania:"LT",Luxembourg:"LU",Macao:"MO",Macedonia:"MK",Madagascar:"MG",Malawi:"MW",Malaysia:"MY",Maldives:"MV",Mali:"ML",Malta:"MT","Marshall Islands":"MH",Martinique:"MQ",Mauritania:"MR",Mauritius:"MU",Mayotte:"YT",Mexico:"MX","Micronesia, Federated States Of":"FM",Moldova:"MD",Monaco:"MC",Mongolia:"MN",Montenegro:"ME",Montserrat:"MS",Morocco:"MA",Mozambique:"MZ",Myanmar:"MM",Namibia:"NA",Nauru:"NR",Nepal:"NP",Netherlands:"NL","Netherlands Antilles":"AN","New Caledonia":"NC","New Zealand":"NZ",Nicaragua:"NI",Niger:"NE",Nigeria:"NG",Niue:"NU","Norfolk Island":"NF","Northern Mariana Islands":"MP",Norway:"NO",Oman:"OM",Pakistan:"PK",Palau:"PW","Palestinian Territory, Occupied":"PS",Panama:"PA","Papua New Guinea":"PG",Paraguay:"PY",Peru:"PE",Philippines:"PH",Pitcairn:"PN",Poland:"PL",Portugal:"PT","Puerto Rico":"PR",Qatar:"QA",Reunion:"RE",Romania:"RO","Russian Federation":"RU",Rwanda:"RW","Saint Barthelemy":"BL","Saint Helena":"SH","Saint Kitts And Nevis":"KN","Saint Lucia":"LC","Saint Martin":"MF","Saint Pierre And Miquelon":"PM","Saint Vincent And Grenadines":"VC",Samoa:"WS","San Marino":"SM","Sao Tome And Principe":"ST","Saudi Arabia":"SA",Senegal:"SN",Serbia:"RS",Seychelles:"SC","Sierra Leone":"SL",Singapore:"SG",Slovakia:"SK",Slovenia:"SI","Solomon Islands":"SB",Somalia:"SO","South Africa":"ZA","South Georgia And Sandwich Isl.":"GS",Spain:"ES","Sri Lanka":"LK",Sudan:"SD",Suriname:"SR","Svalbard And Jan Mayen":"SJ",Swaziland:"SZ",Sweden:"SE",Switzerland:"CH","Syrian Arab Republic":"SY",Taiwan:"TW",Tajikistan:"TJ",Tanzania:"TZ",Thailand:"TH","Timor-Leste":"TL",Togo:"TG",Tokelau:"TK",Tonga:"TO","Trinidad And Tobago":"TT",Tunisia:"TN",Turkey:"TR",Turkmenistan:"TM","Turks And Caicos Islands":"TC",Tuvalu:"TV",Uganda:"UG",Ukraine:"UA","United Arab Emirates":"AE","United Kingdom":"GB","United States":"US","United States Outlying Islands":"UM",Uruguay:"UY",Uzbekistan:"UZ",Vanuatu:"VU",Venezuela:"VE",Vietnam:"VN","Virgin Islands, British":"VG","Virgin Islands, U.S.":"VI","Wallis And Futuna":"WF","Western Sahara":"EH",Yemen:"YE",Zambia:"ZM",Zimbabwe:"ZW"},g=function(e){return e?e[0].toUpperCase()+e.slice(1).toLowerCase():""},C="UPDATE_SEARCH_RESULTS",T="UPDATE_SEARCH_PARAMS",f="UPDATE_SEARCH_HISTORY",x="DELETE_HISTORY_BY_INDEX",G=function(e,a){return function(){var n=Object(m.a)(j.a.mark((function n(t){var r,i;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=M[g(a)],i=r?"".concat(e,",").concat(r):"".concat(e),n.abrupt("return",A.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&appid=c3a8951e9f10f320d81023e11e361418&units=metric")).then((function(e){var a=e.data;console.log(a),t(I(a)),t(v(a)),console.log("end")})));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},I=function(e){return{type:C,results:e}},B=function(e,a){return{type:T,city:e,country:M[g(a)]}},v=function(e){return{type:f,results:e}},w=n(6),E=function(){var e=Object(o.b)(),a=Object(t.useState)(""),n=Object(O.a)(a,2),r=n[0],i=n[1],c=Object(t.useState)(""),s=Object(O.a)(c,2),u=s[0],l=s[1],d=Object(t.useState)(!1),h=Object(O.a)(d,2),b=h[0],S=h[1],A=Object(t.useState)(!1),M=Object(O.a)(A,2),g=M[0],C=M[1],T=Object(t.useCallback)(Object(m.a)(j.a.mark((function a(){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==r){a.next=4;break}S("Please enter city"),a.next=15;break;case 4:return a.prev=4,a.next=7,e(G(r,u));case 7:e(B(r,u)),f(),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(4),console.log(a.t0),C(!0);case 15:case"end":return a.stop()}}),a,null,[[4,11]])}))),[r,u,e]),f=function(){i(""),S(!1),l("")};return Object(t.useEffect)((function(){S(!1),C(!1)}),[r,u]),Object(w.jsxs)("div",{children:[Object(w.jsxs)(p.a,{children:[Object(w.jsxs)(p.a.Group,{widths:"equal",children:[Object(w.jsx)(p.a.Input,{onChange:function(e){return i(e.target.value)},label:"City",placeholder:"City...",error:b,value:r}),Object(w.jsx)(p.a.Input,{onChange:function(e){return l(e.target.value)},label:"Country",placeholder:"Country...",value:u})]}),Object(w.jsxs)(p.a.Group,{inline:!0,children:[Object(w.jsx)(p.a.Button,{onClick:T,primary:!0,children:"Search"}),Object(w.jsx)(p.a.Button,{onClick:f,children:"Reset"})]})]}),g&&Object(w.jsx)(y.a,{negative:!0,children:Object(w.jsx)("p",{children:"No Record Found"})})]})},N=n(116),R=n.n(N),P=function(e){if(!e||e&&e.search&&e.search.result&&0===Object.keys(e.search.result).length)return[];var a=e.search.result;return[{country:a.sys.country,city:a.name,weather:a.weather[0].main,description:a.weather[0].description,temp:a.main.temp_min+" ~ "+a.main.temp_max,humidity:a.main.humidity+"%",dateTime:R()(new Date(1e3*a.dt+a.timezone)).format("YYYY-MM-DD h:mm:ss A")}]},K=function(e){return e.search.history.map((function(e){return{city:e.name,country:e.sys.country,time:R()(new Date(1e3*e.dt+e.timezone)).format("h:mm:ss A")}}))},L=function(){var e=Object(o.c)(P),a=Object(o.c)(K);return 0!==e.length&&0!==a.length&&Object(w.jsxs)(h.a,{style:{marginTop:"3em"},children:[Object(w.jsx)(l.a,{as:"h2",children:e[0].weather}),Object(w.jsxs)(l.a,{as:"h4",color:"grey",children:[e[0].city,", ",e[0].country]}),Object(w.jsxs)("p",{children:[" Description: ",e[0].description," "]}),Object(w.jsxs)("p",{children:[" Temperature: ",e[0].temp," ",Object(w.jsx)("span",{children:"\u2103"})]}),Object(w.jsxs)("p",{children:[" Humidity: ",e[0].humidity," "]}),Object(w.jsxs)("p",{children:[" Time: ",e[0].dateTime," "]})]})},k=n(200),D=n(79),H=n(201),U=n(55),F=function(){var e=Object(o.b)(),a=Object(o.c)(K),n=function(){var a=Object(m.a)(j.a.mark((function a(n,t){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e(G(n,t));case 3:e(B(n,t)),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.log(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e,n){return a.apply(this,arguments)}}(),t=function(){var a=Object(m.a)(j.a.mark((function a(n){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e({type:x,index:n});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(w.jsxs)(u.a,{children:[Object(w.jsx)(l.a,{as:"h2",children:"Search History"}),Object(w.jsx)(d.a,{}),0===a.length?Object(w.jsx)(u.a,{textAlign:"center",children:"No records"}):Object(w.jsx)(k.a,{children:Object(w.jsx)(k.a.Body,{children:a.map((function(e,a){return Object(w.jsxs)(D.a,{children:[Object(w.jsxs)(k.a.Cell,{children:[e.city,", ",e.country]}),Object(w.jsx)(k.a.Cell,{textAlign:"right",children:e.time}),Object(w.jsxs)(k.a.Cell,{textAlign:"right",children:[Object(w.jsx)(H.a,{icon:!0,onClick:function(){return n(e.city,e.country)},children:Object(w.jsx)(U.a,{name:"search"})}),Object(w.jsx)(H.a,{icon:!0,onClick:function(){return t(a)},children:Object(w.jsx)(U.a,{name:"close"})})]})]},a)}))})})]})},V=function(){return Object(w.jsxs)(u.a,{style:{marginTop:"3em"},children:[Object(w.jsx)(l.a,{as:"h1",children:"Today's Weather"}),Object(w.jsx)(d.a,{}),Object(w.jsx)(E,{}),Object(w.jsx)(L,{}),Object(w.jsx)(h.a,{vertical:!0,style:{marginTop:"7em"},children:Object(w.jsx)(F,{})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=n(36),J={result:{},params:{},history:[]},W=Object(s.b)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case C:return Object(Y.a)(Object(Y.a)({},e),{},{result:a.results});case T:return Object(Y.a)(Object(Y.a)({},e),{},{params:{city:a.city,country:a.country}});case f:return e.history.unshift(a.results),Object(Y.a)(Object(Y.a)({},e),{},{history:e.history});case x:return e.history.splice(a.index,1),Object(Y.a)(Object(Y.a)({},e),{},{history:e.history});default:return e}}}),Z=Object(s.d)(W,[],Object(s.c)(Object(s.a)(c.a),window.devToolsExtension?window.devToolsExtension():function(e){return e}));i.a.render(Object(w.jsx)(o.a,{store:Z,children:Object(w.jsx)(V,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[183,1,2]]]);
//# sourceMappingURL=main.57a11942.chunk.js.map