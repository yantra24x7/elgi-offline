function _defineProperties(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{WXiH:function(n,t,e){"use strict";e.r(t);var a=e("8Y7J"),l=function n(){_classCallCheck(this,n)},c=e("NcP4"),i=e("xYTU"),o=e("t68o"),_=e("zbXB"),g=e("9AJC"),r=e("fo5T"),u=e("XePT"),s=e("pMnS"),p=e("ITXy"),m=e("B0QU"),C=e("SVse"),h=e("G0yt"),O=e("6n/F"),P=function(){function n(t,e,a,l){_classCallCheck(this,n),this.nav=e,this.http=a,this.service=l,this.change=0,this.itemList=[],this.Highcharts=O,this.data=[],this.data1=[],this.myLoader=!1,this.customOptions={loop:!0,mouseDrag:!1,touchDrag:!1,pullDrag:!1,dots:!1,navSpeed:10,autoplay:!0,animateOut:"slideOutUp",animateIn:"slideInUp",navText:["",""],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:4}},nav:!0},this.nav.show(),t.interval=2e3,t.keyboard=!0,t.pauseOnHover=!0}return _createClass(n,[{key:"scrollToTop",value:function(n){n.scrollTop=this.change}},{key:"ngOnInit",value:function(){var n=this;this.myLoader=!0,console.log(this.change),this.service.god().subscribe((function(t){for(var e in n.machine_response=t,console.log(n.change),n.ltime=n.machine_response[0].up_time,n.myLoader=!1,n.machine_response){for(var a in n.chart_loop=n.machine_response[e].data,n.data=[],n.data1=[],n.machine_response[e].data)n.data.push(n.machine_response[e].data[a].time),n.data1.push(n.machine_response[e].data[a].count),n.reflect=n.machine_response[e].status;O.chart("partcycle"+e,{chart:{renderTo:"container"+e,zoomType:"xy",height:120},exporting:{enabled:!1},credits:{enabled:!1},title:{text:""},subtitle:{text:""},xAxis:[{categories:n.data,crosshair:!1,labels:{enabled:!0}}],yAxis:[{gridLineColor:"#45B734",labels:{enabled:!1},title:{text:""}},{title:{text:""},opposite:!1}],tooltip:{shared:!0},series:[{showInLegend:!1,name:"Count",type:"column",yAxis:1,data:n.data1,color:"OPERATE"===n.reflect?"#1EAD55":"DISCONNECT"===n.reflect?"#6D6D6D":"#F81301",tooltip:{valueSuffix:" "}},{showInLegend:!1,name:"Parts",type:"spline",data:n.data1,color:"OPERATE"===n.reflect?"#1EAD55":"DISCONNECT"===n.reflect?"#6D6D6D":"#F81301",tooltip:{valueSuffix:""}}]})}})),setInterval((function(){n.service.god().subscribe((function(t){n.machine_response=t,n.ltime=n.machine_response[0].up_time})),n.change=n.change+400,console.log(n.change),n.change>=1200&&(n.change=0),n.scrollToBottom()}),1e5)}},{key:"ngAfterViewChecked",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){this.scrollBottom.nativeElement.scrollTop=this.change}}]),n}(),M=e("cXjN"),b=e("IheW"),d=e("xjKI"),f=a.rb({encapsulation:0,styles:[['rect.highcharts-background{opacity:.3}.carousel-caption[_ngcontent-%COMP%]{background-color:#11d525}.frame[_ngcontent-%COMP%]{height:95%;position:absolute;width:100%;top:0;margin-top:10px;background-color:gray;overflow:scroll}.owl-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]{min-height:1px;float:left;-webkit-backface-visibility:hidden;-webkit-touch-callout:none;color:#9acd32}.owl-item.ng-tns-c11-20.active.ng-trigger.ng-trigger-autoHeight.ng-star-inserted[_ngcontent-%COMP%]{color:violet}button.test123[_ngcontent-%COMP%]{position:fixed;bottom:40px;right:5px;font-size:20px;text-align:center;border-radius:5px;outline:0;z-index:1}  circle-progress tspan{font-weight:600;fill:#3f3f3f}  .highcharts-yaxis-labels text{fill:#fff!important}  .highcharts-yaxis-grid .highcharts-grid-line{stroke:#d5d5d5}h2.sub_title[_ngcontent-%COMP%]{width:35%}#page_area.page[_ngcontent-%COMP%]{background-color:#fafafa}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #dedede;margin-bottom:15px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .sub_title[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:#1a1f3d;margin-bottom:15px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]{list-style:none;display:flex}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:5px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after{content:"|";padding-left:5px;color:#aeaeae}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after{display:none}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:16px;padding-right:4px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;text-transform:capitalize}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#11d525}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li.idle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#646262}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li.stop[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#ba1d11}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:19%;margin:0 10px 20px 0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:10px 5px;justify-content:space-between}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]{display:flex;align-items:center}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]   .machine_name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;margin-bottom:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]   .machine_name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;margin:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{margin:0;display:flex;align-items:center}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#34e31a;font-size:16px;padding-right:4px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-top:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center;justify-content:space-between;padding:15px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:10px;text-transform:uppercase}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;font-weight:600}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]{text-align:center}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px;text-transform:uppercase;font-weight:600}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;text-align:center;padding:5px 0;margin:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   figure.highcharts-figure[_ngcontent-%COMP%]{margin:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph_text[_ngcontent-%COMP%]{font-size:12px;text-align:center;padding:5px 0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]{border:1px solid #16a500}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]{color:#fff;background:#16a500}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#34e31a}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]{background:#16a5002e}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]{background:#16a5004f;color:#fff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#056b2d}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background:#16a500;color:#fff;border-bottom:1px solid #056b2d}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph_text[_ngcontent-%COMP%]{background:#16a500;color:#fff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]{border:1px solid #888}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]{color:#fff;background:#888}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#646262}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]{background:#8888883b}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]{background:#88888885;color:#fff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background:#888;color:#fff;border-bottom:1px solid #646262}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]{height:120px;min-height:120px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph_text[_ngcontent-%COMP%]{background:#888;color:#fff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]{border:1px solid #f81301}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]{color:#fff;background:#f81301}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#ba1d11}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]{background:#daa5a159}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]{background:#f81301ab;color:#fff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background:#f81301;color:#fff;border-bottom:1px solid #ba1d11}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph_text[_ngcontent-%COMP%]{background:#f81301;color:#fff}@media only screen and (min-width:834px) and (max-width:1112px){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:31%;margin:0 6px 14px}}@media only screen and (min-width:834px) and (max-width:1112px) and (orientation:landscape){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:22%;margin:0 11px 17px 12px}}@media only screen and (min-width:768px) and (max-width:1024px) and (orientation:landscape){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{margin:0 11px 17px 12px}}@media only screen and (max-width:768px){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:31%;margin:0 10px 20px 0}}@media only screen and (max-width:600px){#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]{margin-bottom:10px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:10px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:100%;margin:0 0 20px}}@media only screen and (min-device-width:320px) and (max-device-width:768px) and (orientation:landscape){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:48%;margin:0 10px 20px 0}ng-deep.highcharts-container[_ngcontent-%COMP%]{width:100%!important}}.highcharts-data-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .highcharts-figure[_ngcontent-%COMP%]{min-width:310px;max-width:800px;margin:1em auto}#container[_ngcontent-%COMP%]{height:400px}.highcharts-data-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-family:Verdana,sans-serif;border-collapse:collapse;border:1px solid #ebebeb;margin:10px auto;text-align:center;width:100%;max-width:500px}.highcharts-data-table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.2em;color:#555}.highcharts-data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:600}.highcharts-data-table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%], .highcharts-data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .highcharts-data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.5em}.highcharts-data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .highcharts-data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background:#f8f8f8}.highcharts-data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#f1f7ff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{color:#f81301;font-weight:600}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{color:#16a500;font-weight:600}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{color:#646262;font-weight:600}@media only screen and (min-width:1920px){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;-webkit-margin-after:-.5em;margin-block-end:-.5em}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:40px}.activemenu[_ngcontent-%COMP%]   #page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]   .machine_name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:67px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]   .machine_name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:65px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:30px;padding:0;font-weight:500}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:50px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:32%;margin:0 11px 20px}  circle-progress tspan:nth-child(1){font-size:54px}  circle-progress tspan:nth-child(2){font-size:50px}  circle-progress tspan:nth-child(3){font-size:47px}.machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:66px;margin-top:6px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:40px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .sub_title[_ngcontent-%COMP%]{font-size:25px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]{align-items:center}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]{padding-top:20px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{padding:5px 15px 15px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{margin:0 -7px}}']],data:{}});function x(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"div",[["class","spinner"]],null,null,null,null,null)),(n()(),a.tb(1,0,null,null,0,"img",[["src","assets/images/spinner.gif"]],null,null,null,null,null))],null,null)}function D(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"circle-progress",[["animation","true"],["animationDuration","300"],["innerStrokeColor","#f2f2f2"],["outerStrokeColor","#1EAD55"],["radius","80"]],null,null,null,p.b,p.a)),a.sb(1,770048,null,0,m.a,[m.b,a.k,C.d],{radius:[0,"radius"],percent:[1,"percent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],animation:[4,"animation"],animationDuration:[5,"animationDuration"]},null)],(function(n,t){n(t,1,0,"80",a.xb(1,"",null==t.parent.context.$implicit?null:t.parent.context.$implicit.oee,""),"#1EAD55","#f2f2f2","true","300")}),null)}function y(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"circle-progress",[["animation","true"],["animationDuration","300"],["innerStrokeColor","#f2f2f2"],["outerStrokeColor","#F81301"],["radius","80"]],null,null,null,p.b,p.a)),a.sb(1,770048,null,0,m.a,[m.b,a.k,C.d],{radius:[0,"radius"],percent:[1,"percent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],animation:[4,"animation"],animationDuration:[5,"animationDuration"]},null)],(function(n,t){n(t,1,0,"80",a.xb(1,"",null==t.parent.context.$implicit?null:t.parent.context.$implicit.oee,""),"#F81301","#f2f2f2","true","300")}),null)}function v(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"circle-progress",[["animation","true"],["animationDuration","300"],["innerStrokeColor","#f2f2f2"],["outerStrokeColor","#6D6D6D"],["radius","80"]],null,null,null,p.b,p.a)),a.sb(1,770048,null,0,m.a,[m.b,a.k,C.d],{radius:[0,"radius"],percent:[1,"percent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],animation:[4,"animation"],animationDuration:[5,"animationDuration"]},null)],(function(n,t){n(t,1,0,"80",a.xb(1,"",null==t.parent.context.$implicit?null:t.parent.context.$implicit.oee,""),"#6D6D6D","#f2f2f2","true","300")}),null)}function k(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,42,"div",[["class","machine_item"]],[[2,"stop",null],[2,"active",null],[2,"idle",null]],null,null,null,null)),(n()(),a.tb(1,0,null,null,9,"div",[["class","machine_header"]],null,null,null,null,null)),(n()(),a.tb(2,0,null,null,5,"div",[["class","machine_title"]],null,null,null,null,null)),(n()(),a.tb(3,0,null,null,1,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),a.Nb(-1,null,[" check_circle_outline "])),(n()(),a.tb(5,0,null,null,2,"div",[["class","machine_name pl-2"]],null,null,null,null,null)),(n()(),a.tb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Nb(7,null,["",""])),(n()(),a.tb(8,0,null,null,2,"p",[["class","status"]],null,null,null,null,null)),(n()(),a.tb(9,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),a.Nb(-1,null,[" fiber_manual_record "])),(n()(),a.tb(11,0,null,null,31,"div",[["class","machine_body"]],null,null,null,null,null)),(n()(),a.tb(12,0,null,null,6,"div",[["class","progress_bar"]],null,null,null,null,null)),(n()(),a.ib(16777216,null,null,1,null,D)),a.sb(14,16384,null,0,C.n,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(n()(),a.ib(16777216,null,null,1,null,y)),a.sb(16,16384,null,0,C.n,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(n()(),a.ib(16777216,null,null,1,null,v)),a.sb(18,16384,null,0,C.n,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(n()(),a.tb(19,0,null,null,15,"ul",[["class","metrics list-unstyle"]],null,null,null,null,null)),(n()(),a.tb(20,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),a.tb(21,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["Availability"])),(n()(),a.tb(23,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a.Nb(24,null,["","%"])),(n()(),a.tb(25,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),a.tb(26,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["Performance"])),(n()(),a.tb(28,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a.Nb(29,null,["","%"])),(n()(),a.tb(30,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),a.tb(31,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["Quality"])),(n()(),a.tb(33,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a.Nb(34,null,["","%"])),(n()(),a.tb(35,0,null,null,2,"div",[["class","parts_sec d-none"]],null,null,null,null,null)),(n()(),a.tb(36,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["Parts"])),(n()(),a.tb(38,0,null,null,4,"div",[["class","machine_values"]],null,null,null,null,null)),(n()(),a.tb(39,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["Actual / Plan : "])),(n()(),a.tb(41,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a.Nb(42,null,[""," /",""]))],(function(n,t){n(t,14,0,"OPERATE"===(null==t.context.$implicit?null:t.context.$implicit.status)),n(t,16,0,"STOP"===(null==t.context.$implicit?null:t.context.$implicit.status)),n(t,18,0,"DISCONNECT"===(null==t.context.$implicit?null:t.context.$implicit.status))}),(function(n,t){n(t,0,0,"STOP"===t.context.$implicit.status,"OPERATE"===t.context.$implicit.status,"DISCONNECT"===t.context.$implicit.status),n(t,7,0,null==t.context.$implicit?null:t.context.$implicit.machine),n(t,24,0,null==t.context.$implicit?null:t.context.$implicit.run),n(t,29,0,null==t.context.$implicit?null:t.context.$implicit.efficiency),n(t,34,0,null==t.context.$implicit?null:t.context.$implicit.quality),n(t,42,0,null==t.context.$implicit?null:t.context.$implicit.actual,null==t.context.$implicit?null:t.context.$implicit.tar)}))}function w(n){return a.Pb(0,[a.Hb(0,C.e,[a.t]),a.Lb(671088640,1,{scrollBottom:0}),(n()(),a.tb(2,0,[[1,0],["scrollBottom",1]],null,20,"section",[["class","page kpi"],["id","page_area"]],null,null,null,null,null)),(n()(),a.ib(16777216,null,null,1,null,x)),a.sb(4,16384,null,0,C.n,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(n()(),a.tb(5,0,null,null,16,"div",[["class","section_top_padding"]],null,null,null,null,null)),(n()(),a.tb(6,0,null,null,15,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),a.tb(7,0,null,null,11,"div",[["class","page_title_sec"]],null,null,null,null,null)),(n()(),a.tb(8,0,null,null,1,"h2",[["class","sub_title"]],null,null,null,null,null)),(n()(),a.Nb(-1,null,[" OEE Dashboard "])),(n()(),a.tb(10,0,null,null,8,"div",[["class","d-flex justify-content-end"]],null,null,null,null,null)),(n()(),a.tb(11,0,null,null,1,"h2",[["class","sub_title"]],null,null,null,null,null)),(n()(),a.Nb(-1,null,[" Last Update Time & Date "])),(n()(),a.tb(13,0,null,null,5,"h2",[["class","sub_title"]],null,null,null,null,null)),(n()(),a.Nb(14,null,[" ",""])),a.Jb(15,2),(n()(),a.tb(16,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.Nb(17,null,[" "," "])),a.Jb(18,2),(n()(),a.tb(19,0,null,null,2,"div",[["class","machine_list"]],null,null,null,null,null)),(n()(),a.ib(16777216,null,null,1,null,k)),a.sb(21,278528,null,0,C.m,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null),(n()(),a.tb(22,0,null,null,0,"div",[],null,null,null,null,null))],(function(n,t){var e=t.component;n(t,4,0,e.myLoader),n(t,21,0,e.machine_response)}),(function(n,t){var e=t.component,l=a.Ob(t,14,0,n(t,15,0,a.Fb(t,0),e.ltime,"h:mm:ss a"));n(t,14,0,l);var c=a.Ob(t,17,0,n(t,18,0,a.Fb(t,0),e.ltime,"dd-MM-yyyy"));n(t,17,0,c)}))}var z=a.pb("app-kpi-dashboard",P,(function(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,2,"app-kpi-dashboard",[],null,null,null,w,f)),a.Kb(512,null,h.j,h.j,[]),a.sb(2,8503296,null,0,P,[h.j,M.a,b.c,d.a],null,null)],(function(n,t){n(t,2,0)}),null)}),{},{},[]),S=e("KMir"),N=e("cUpR"),E=e("s7LF"),T=e("QQfA"),j=e("IP0z"),$=e("gavF"),I=e("POq0"),A=e("Xd0L"),L=e("/Co4"),F=e("JjoW"),B=e("/HVE"),J=e("qJ5m"),q=e("Mz6y"),H=e("5GAg"),U=e("DkaU"),V=e("s6ns"),X=e("821u"),Z=e("OIZN"),Q=e("Wc//"),R=e("Fwaw"),W=e("zMNK"),G=e("hOhj"),K=e("Gi4r"),Y=e("oapL"),nn=e("HsOI"),tn=e("ZwOa"),en=e("igqZ"),an=e("02hT"),ln=e("Q+lL"),cn=e("pBi1"),on=e("lT8R"),_n=e("BV1i"),gn=e("elxJ"),rn=e("5Bek"),un=e("c9fC"),sn=e("FVPZ"),pn=e("qJ50"),mn=e("AaDx"),Cn=e("mkRZ"),hn=e("dFDH"),On=e("rWV4"),Pn=e("zQui"),Mn=e("8rEH"),bn=e("r0V8"),dn=e("10VE"),fn=e("BzsH"),xn=e("cw5Z"),Dn=e("hfXE"),yn=e("ECJv"),vn=e("EApP"),kn=e("1Q6g"),wn=e("iInd"),zn=function n(){_classCallCheck(this,n)};e.d(t,"KpiDashboardModuleNgFactory",(function(){return Sn}));var Sn=a.qb(l,[],(function(n){return a.Cb([a.Db(512,a.j,a.bb,[[8,[c.a,i.a,i.b,o.a,_.b,_.a,g.a,g.b,g.h,g.i,g.e,g.f,g.g,r.a,u.a,s.a,z]],[3,a.j],a.w]),a.Db(4608,C.p,C.o,[a.t,[2,C.L]]),a.Db(4608,S.i,S.j,[]),a.Db(5120,S.h,S.k,[S.i,a.A]),a.Db(4608,S.t,S.t,[N.d]),a.Db(4608,S.m,S.n,[]),a.Db(5120,S.l,S.o,[S.m,a.A]),a.Db(4608,S.f,S.f,[a.l]),a.Db(4608,E.D,E.D,[]),a.Db(4608,E.g,E.g,[]),a.Db(4608,T.c,T.c,[T.i,T.e,a.j,T.h,T.f,a.q,a.y,C.d,j.b,[2,C.j]]),a.Db(5120,T.j,T.k,[T.c]),a.Db(5120,$.a,$.d,[T.c]),a.Db(4608,I.c,I.c,[]),a.Db(4608,A.b,A.b,[]),a.Db(5120,L.a,L.b,[T.c]),a.Db(5120,F.a,F.b,[T.c]),a.Db(4608,N.e,A.c,[[2,A.g],[2,A.l]]),a.Db(4608,A.a,A.w,[[2,A.f],B.a]),a.Db(5120,J.b,J.a,[[3,J.b]]),a.Db(5120,q.b,q.c,[T.c]),a.Db(135680,H.h,H.h,[a.y,B.a]),a.Db(4608,U.e,U.e,[a.L]),a.Db(5120,V.c,V.d,[T.c]),a.Db(135680,V.e,V.e,[T.c,a.q,[2,C.j],[2,V.b],V.c,[3,V.e],T.e]),a.Db(4608,X.i,X.i,[]),a.Db(5120,X.a,X.b,[T.c]),a.Db(5120,Z.c,Z.a,[[3,Z.c]]),a.Db(4608,h.v,h.v,[a.j,a.q,h.jb,h.w]),a.Db(4608,Q.a,Q.a,[]),a.Db(1073742336,C.c,C.c,[]),a.Db(1073742336,S.b,S.b,[]),a.Db(1073742336,E.C,E.C,[]),a.Db(1073742336,E.m,E.m,[]),a.Db(1073742336,E.z,E.z,[]),a.Db(1073742336,j.a,j.a,[]),a.Db(1073742336,A.l,A.l,[[2,A.d],[2,N.f]]),a.Db(1073742336,B.b,B.b,[]),a.Db(1073742336,A.v,A.v,[]),a.Db(1073742336,R.c,R.c,[]),a.Db(1073742336,W.g,W.g,[]),a.Db(1073742336,G.c,G.c,[]),a.Db(1073742336,T.g,T.g,[]),a.Db(1073742336,$.c,$.c,[]),a.Db(1073742336,$.b,$.b,[]),a.Db(1073742336,K.c,K.c,[]),a.Db(1073742336,Y.c,Y.c,[]),a.Db(1073742336,I.d,I.d,[]),a.Db(1073742336,nn.e,nn.e,[]),a.Db(1073742336,tn.c,tn.c,[]),a.Db(1073742336,en.e,en.e,[]),a.Db(1073742336,A.m,A.m,[]),a.Db(1073742336,A.t,A.t,[]),a.Db(1073742336,an.a,an.a,[]),a.Db(1073742336,ln.a,ln.a,[]),a.Db(1073742336,A.q,A.q,[]),a.Db(1073742336,L.c,L.c,[]),a.Db(1073742336,F.d,F.d,[]),a.Db(1073742336,cn.b,cn.b,[]),a.Db(1073742336,cn.a,cn.a,[]),a.Db(1073742336,on.a,on.a,[]),a.Db(1073742336,_n.a,_n.a,[]),a.Db(1073742336,A.x,A.x,[]),a.Db(1073742336,A.n,A.n,[]),a.Db(1073742336,gn.a,gn.a,[]),a.Db(1073742336,rn.c,rn.c,[]),a.Db(1073742336,un.a,un.a,[]),a.Db(1073742336,sn.a,sn.a,[]),a.Db(1073742336,pn.e,pn.e,[]),a.Db(1073742336,J.c,J.c,[]),a.Db(1073742336,H.a,H.a,[]),a.Db(1073742336,q.e,q.e,[]),a.Db(1073742336,U.c,U.c,[]),a.Db(1073742336,mn.a,mn.a,[]),a.Db(1073742336,Cn.a,Cn.a,[]),a.Db(1073742336,hn.d,hn.d,[]),a.Db(1073742336,On.j,On.j,[]),a.Db(1073742336,V.k,V.k,[]),a.Db(1073742336,Pn.p,Pn.p,[]),a.Db(1073742336,Mn.m,Mn.m,[]),a.Db(1073742336,X.j,X.j,[]),a.Db(1073742336,bn.d,bn.d,[]),a.Db(1073742336,bn.c,bn.c,[]),a.Db(1073742336,dn.i,dn.i,[]),a.Db(1073742336,fn.b,fn.b,[]),a.Db(1073742336,Z.d,Z.d,[]),a.Db(1073742336,h.c,h.c,[]),a.Db(1073742336,h.f,h.f,[]),a.Db(1073742336,h.g,h.g,[]),a.Db(1073742336,h.k,h.k,[]),a.Db(1073742336,h.l,h.l,[]),a.Db(1073742336,h.r,h.r,[]),a.Db(1073742336,h.t,h.t,[]),a.Db(1073742336,h.x,h.x,[]),a.Db(1073742336,h.z,h.z,[]),a.Db(1073742336,h.D,h.D,[]),a.Db(1073742336,h.G,h.G,[]),a.Db(1073742336,h.J,h.J,[]),a.Db(1073742336,h.M,h.M,[]),a.Db(1073742336,h.P,h.P,[]),a.Db(1073742336,h.U,h.U,[]),a.Db(1073742336,h.X,h.X,[]),a.Db(1073742336,h.Y,h.Y,[]),a.Db(1073742336,h.Z,h.Z,[]),a.Db(1073742336,h.y,h.y,[]),a.Db(1073742336,xn.h,xn.h,[]),a.Db(1073742336,Dn.b,Dn.b,[]),a.Db(1073742336,yn.b,yn.b,[]),a.Db(1073742336,vn.i,vn.i,[]),a.Db(1073742336,kn.a,kn.a,[]),a.Db(1073742336,wn.p,wn.p,[[2,wn.u],[2,wn.l]]),a.Db(1073742336,zn,zn,[]),a.Db(1073742336,m.c,m.c,[]),a.Db(1073742336,l,l,[]),a.Db(256,A.e,A.i,[]),a.Db(256,xn.p,"en-US",[]),a.Db(256,vn.b,{default:vn.a,config:{timeOut:2e3,positionClass:"toast-top-center",preventDuplicates:!0}},[]),a.Db(1024,wn.j,(function(){return[[{path:"",component:P}]]}),[]),a.Db(256,m.b,{radius:50,space:-12,outerStrokeWidth:12,innerStrokeWidth:12,showSubtitle:!0,subtitle:"OEE"},[])])}))}}]);