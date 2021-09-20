am4core.useTheme(am4themes_vicTheme);

//-----------------------------
// idChartAccSrcIpByte_byTime
//-----------------------------
var chart001 = am4core.create("idChartAccSrcIpByte_byTime", am4charts.XYChart);
// Set up data source
chart001.dataSource.url = "./json/idChartAccSrcIpByte_byTime.json";
// Enable export
chart001.exporting.menu = new am4core.ExportMenu();
chart001.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart001.exporting.menu);
//xaxes
chart001.xAxes.push(new am4charts.CategoryAxis());
chart001.xAxes._values[0].dataFields.category = "time";
//yaxes
chart001.yAxes.push(new am4charts.ValueAxis());
chart001.yAxes._values[0].title.text = "(G)位元組";
vicConfigAxes(chart001.xAxes._values[0], chart001.yAxes._values[0], "valueY");
// Create series 1
chart001.series.push(new am4charts.LineSeries());
chart001.series._values[0].dataFields.valueY = "bytes_sent";
chart001.series._values[0].dataFields.categoryX = "time";
chart001.series._values[0].name = "bytes_sent";
vicConfigSeries(chart001.series._values[0], "valueY", chart001.yAxes._values[0].title.text);
vicConfigLineSeries(chart001.series._values[0], "triangle");
// Create series 2
chart001.series.push(new am4charts.LineSeries());
chart001.series._values[1].dataFields.valueY = "bytes_receive";
chart001.series._values[1].dataFields.categoryX = "time";
chart001.series._values[1].name = "bytes_receive";
vicConfigSeries(chart001.series._values[1], "valueY", chart001.yAxes._values[0].title.text);
vicConfigLineSeries(chart001.series._values[1], "circle");
// Add (+/-) scrollbar
chart001.scrollbarX = new am4core.Scrollbar();
vicConfigScrollbarX(chart001.scrollbarX);
chart001.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarY(chart001.scrollbarY);
// Add cursor
chart001.cursor = new am4charts.XYCursor();
// Add legend
chart001.legend = new am4charts.Legend();
vicConfigLegend(chart001.legend);

//-----------------------------
// idChartAccSrcIpSession_byTime
//-----------------------------
var chart002 = am4core.create("idChartAccSrcIpSession_byTime", am4charts.XYChart);
// Set up data source
chart002.dataSource.url = "./json/idChartAccSrcIpSession_byTime.json";
// Enable export
chart002.exporting.menu = new am4core.ExportMenu();
chart002.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart002.exporting.menu);
//xaxes
chart002.xAxes.push(new am4charts.CategoryAxis());
chart002.xAxes._values[0].dataFields.category = "time";
//yaxes
chart002.yAxes.push(new am4charts.ValueAxis());
// chart002.yAxes._values[0].title.text = "";
vicConfigAxes(chart002.xAxes._values[0], chart002.yAxes._values[0], "valueY");
// Create series 1
chart002.series.push(new am4charts.LineSeries());
chart002.series._values[0].dataFields.valueY = "sessions";
chart002.series._values[0].dataFields.categoryX = "time";
chart002.series._values[0].name = "sessions";
vicConfigSeries(chart002.series._values[0], "valueY", "sessions");
vicConfigLineSeries(chart002.series._values[0], ""); //nobullets
// Add (+/-) scrollbar
chart002.scrollbarX = new am4core.Scrollbar();
vicConfigScrollbarX(chart002.scrollbarX);
chart002.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarY(chart002.scrollbarY);
// Add cursor
chart002.cursor = new am4charts.XYCursor();
// Add legend
chart002.legend = new am4charts.Legend();
vicConfigLegend(chart002.legend);

//-----------------------------
// idChartAccSrcIpThreat_byCat
//-----------------------------
var chart003 = am4core.create("idChartAccSrcIpThreat_byCat", am4charts.XYChart);
// Set up data source
chart003.dataSource.url = "./json/idChartAccSrcIpThreat_byCat.json";
// Enable export
chart003.exporting.menu = new am4core.ExportMenu();
chart003.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart003.exporting.menu);
//yaxes
chart003.yAxes.push(new am4charts.CategoryAxis());
chart003.yAxes._values[0].dataFields.category = "category";
// chart003.yAxes._values[0].title.text = "category";
//xaxes
chart003.xAxes.push(new am4charts.ValueAxis());
chart003.xAxes._values[0].title.text = "amounts";
vicConfigAxes(chart003.xAxes._values[0], chart003.yAxes._values[0], "valueX");
// Create series 1
chart003.series.push(new am4charts.ColumnSeries());
chart003.series._values[0].dataFields.valueX = "value";
chart003.series._values[0].dataFields.categoryY = "category";
chart003.series._values[0].name = "amounts";
// Add cursor
chart003.cursor = new am4charts.XYCursor();
vicConfigSeries(chart003.series._values[0], "valueX","");
vicConfigColumnSeries(chart003.series._values[0], chart003);

//-----------------------------
// idChartAccSrcIpThreat_byTime
//-----------------------------
var chart004 = am4core.create("idChartAccSrcIpThreat_byTime", am4charts.XYChart);
// Set up data source
chart004.dataSource.url = "./json/idChartAccSrcIpThreat_byTime.json";
// Enable export
chart004.exporting.menu = new am4core.ExportMenu();
chart004.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart004.exporting.menu);
//xaxes
chart004.xAxes.push(new am4charts.CategoryAxis());
chart004.xAxes._values[0].dataFields.category = "time";
//yaxes
chart004.yAxes.push(new am4charts.ValueAxis());
chart004.yAxes._values[0].title.text = "數量";
vicConfigAxes(chart004.xAxes._values[0], chart004.yAxes._values[0], "valueY");
// Create series 1
chart004.series.push(new am4charts.LineSeries());
chart004.series._values[0].dataFields.valueY = "vulnerability";
chart004.series._values[0].dataFields.categoryX = "time";
chart004.series._values[0].name = "vulnerability";
vicConfigSeries(chart004.series._values[0], "valueY", chart004.yAxes._values[0].title.text);
vicConfigLineSeries(chart004.series._values[0], "triangle");
// Create series 2
chart004.series.push(new am4charts.LineSeries());
chart004.series._values[1].dataFields.valueY = "spyware";
chart004.series._values[1].dataFields.categoryX = "time";
chart004.series._values[1].name = "spyware";
vicConfigSeries(chart004.series._values[1], "valueY", chart004.yAxes._values[0].title.text);
vicConfigLineSeries(chart004.series._values[1], "circle");
// Add (+/-) scrollbar
chart004.scrollbarX = new am4core.Scrollbar();
vicConfigScrollbarX(chart004.scrollbarX);
chart004.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarY(chart004.scrollbarY);
// Add cursor
chart004.cursor = new am4charts.XYCursor();
// Add legend
chart004.legend = new am4charts.Legend();
vicConfigLegend(chart004.legend);

//-----------------------------
// idChartAccDestIpByte_byTime
//-----------------------------
var chart005 = am4core.create("idChartAccDestIpByte_byTime", am4charts.XYChart);
// Set up data source
chart005.dataSource.url = "./json/idChartAccSrcIpByte_byTime.json"; //重覆使用假資料
// Enable export
chart005.exporting.menu = new am4core.ExportMenu();
chart005.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart005.exporting.menu);
//xaxes
chart005.xAxes.push(new am4charts.CategoryAxis());
chart005.xAxes._values[0].dataFields.category = "time";
//yaxes
chart005.yAxes.push(new am4charts.ValueAxis());
chart005.yAxes._values[0].title.text = "(G)位元組";
vicConfigAxes(chart005.xAxes._values[0], chart005.yAxes._values[0], "valueY");
// Create series 1
chart005.series.push(new am4charts.LineSeries());
chart005.series._values[0].dataFields.valueY = "bytes_sent";
chart005.series._values[0].dataFields.categoryX = "time";
chart005.series._values[0].name = "bytes_sent";
vicConfigSeries(chart005.series._values[0], "valueY", chart005.yAxes._values[0].title.text);
vicConfigLineSeries(chart005.series._values[0], "triangle");
// Create series 2
chart005.series.push(new am4charts.LineSeries());
chart005.series._values[1].dataFields.valueY = "bytes_receive";
chart005.series._values[1].dataFields.categoryX = "time";
chart005.series._values[1].name = "bytes_receive";
vicConfigSeries(chart005.series._values[1], "valueY", chart005.yAxes._values[0].title.text);
vicConfigLineSeries(chart005.series._values[1], "circle");
// Add (+/-) scrollbar
chart005.scrollbarX = new am4core.Scrollbar();
vicConfigScrollbarX(chart005.scrollbarX);
chart005.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarY(chart005.scrollbarY);
// Add cursor
chart005.cursor = new am4charts.XYCursor();
// Add legend
chart005.legend = new am4charts.Legend();
vicConfigLegend(chart005.legend);

//-----------------------------
// idChartAccDestIpSession_byTime
//-----------------------------
var chart006 = am4core.create("idChartAccDestIpSession_byTime", am4charts.XYChart);
// Set up data source
chart006.dataSource.url = "./json/idChartAccSrcIpSession_byTime.json"; //重覆使用假資料
// Enable export
chart006.exporting.menu = new am4core.ExportMenu();
chart006.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart006.exporting.menu);
//xaxes
chart006.xAxes.push(new am4charts.CategoryAxis());
chart006.xAxes._values[0].dataFields.category = "time";
//yaxes
chart006.yAxes.push(new am4charts.ValueAxis());
// chart006.yAxes._values[0].title.text = "";
vicConfigAxes(chart006.xAxes._values[0], chart006.yAxes._values[0], "valueY");
// Create series 1
chart006.series.push(new am4charts.LineSeries());
chart006.series._values[0].dataFields.valueY = "sessions";
chart006.series._values[0].dataFields.categoryX = "time";
chart006.series._values[0].name = "sessions";
vicConfigSeries(chart006.series._values[0], "valueY", "sessions");
vicConfigLineSeries(chart006.series._values[0], ""); //nobullets
// Add (+/-) scrollbar
chart006.scrollbarX = new am4core.Scrollbar();
vicConfigScrollbarX(chart006.scrollbarX);
chart006.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarY(chart006.scrollbarY);
// Add cursor
chart006.cursor = new am4charts.XYCursor();
// Add legend
chart006.legend = new am4charts.Legend();
vicConfigLegend(chart006.legend);

//-----------------------------
// idChartAccDestIpThreat_byCat
//-----------------------------
var chart007 = am4core.create("idChartAccDestIpThreat_byCat", am4charts.XYChart);
// Set up data source
chart007.dataSource.url = "./json/idChartAccSrcIpThreat_byCat.json"; //重覆使用假資料
// Enable export
chart007.exporting.menu = new am4core.ExportMenu();
chart007.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart007.exporting.menu);
//yaxes
chart007.yAxes.push(new am4charts.CategoryAxis());
chart007.yAxes._values[0].dataFields.category = "category";
// chart007.yAxes._values[0].title.text = "category";
//yaxes
chart007.xAxes.push(new am4charts.ValueAxis());
chart007.xAxes._values[0].title.text = "amounts";
vicConfigAxes(chart007.xAxes._values[0], chart007.yAxes._values[0], "valueX");
// Create series 1
chart007.series.push(new am4charts.ColumnSeries());
chart007.series._values[0].dataFields.valueX = "value";
chart007.series._values[0].dataFields.categoryY = "category";
chart007.series._values[0].name = "amounts";
// Add cursor
chart007.cursor = new am4charts.XYCursor();
vicConfigSeries(chart007.series._values[0], "valueX", "");
vicConfigColumnSeries(chart007.series._values[0], chart007);


//-----------------------------
// idChartAccDestIpThreat_byTime
//-----------------------------
var chart008 = am4core.create("idChartAccDestIpThreat_byTime", am4charts.XYChart);
// Set up data source
chart008.dataSource.url = "./json/idChartAccSrcIpThreat_byTime.json"; //重覆使用假資料
// Enable export
chart008.exporting.menu = new am4core.ExportMenu();
chart008.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart008.exporting.menu);
//xaxes
chart008.xAxes.push(new am4charts.CategoryAxis());
chart008.xAxes._values[0].dataFields.category = "time";
//yaxes
chart008.yAxes.push(new am4charts.ValueAxis());
chart008.yAxes._values[0].title.text = "數量";
vicConfigAxes(chart008.xAxes._values[0], chart008.yAxes._values[0], "valueY");
// Create series 1
chart008.series.push(new am4charts.LineSeries());
chart008.series._values[0].dataFields.valueY = "vulnerability";
chart008.series._values[0].dataFields.categoryX = "time";
chart008.series._values[0].name = "vulnerability";
vicConfigSeries(chart008.series._values[0], "valueY", chart008.yAxes._values[0].title.text);
vicConfigLineSeries(chart008.series._values[0], "triangle");
// Create series 2
chart008.series.push(new am4charts.LineSeries());
chart008.series._values[1].dataFields.valueY = "spyware";
chart008.series._values[1].dataFields.categoryX = "time";
chart008.series._values[1].name = "spyware";
vicConfigSeries(chart008.series._values[1], "valueY", chart008.yAxes._values[0].title.text);
vicConfigLineSeries(chart008.series._values[1], "circle");
// Add (+/-) scrollbar
chart008.scrollbarX = new am4core.Scrollbar();
vicConfigScrollbarX(chart008.scrollbarX);
chart008.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarY(chart008.scrollbarY);
// Add cursor
chart008.cursor = new am4charts.XYCursor();
// Add legend
chart008.legend = new am4charts.Legend();
vicConfigLegend(chart008.legend);


//-----------------------------
// idChartAccSrcRegByte_Map
//-----------------------------
var chartMap01 = am4core.create("idChartAccSrcRegByte_Map", am4maps.MapChart);
// Set up data source
$.getJSON('./json/idChartAccSrcRegByte_Map.json', function (data) {
  var groupdataMap01 = data;
  // console.table(groupdataMap01);
  vicConfigMapGroupData(groupdataMap01, chartMap01, "(G)位元組");
});
// config MAP
vicConfigMap(chartMap01);
// Enable export
chartMap01.exporting.menu = new am4core.ExportMenu();
chartMap01.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chartMap01.exporting.menu);
// Zoom control
chartMap01.zoomControl = new am4maps.ZoomControl();
vicConfigZoomCtrl(chartMap01.zoomControl);
// add home button
var homebtnMap01 = new am4core.Button();
homebtnMap01.events.on("hit", function () { chartMap01.goHome(); });
vicConfigHomeBtn(homebtnMap01, chartMap01.zoomControl);
// Legend styles
chartMap01.legend = new am4maps.Legend();
vicConfigMapLegend(chartMap01.legend);
//-----------------------------
// idChartAccSrcRegSession_Map
//-----------------------------
var chartMap02 = am4core.create("idChartAccSrcRegSession_Map", am4maps.MapChart);
// Set up data source
$.getJSON('./json/idChartAccSrcRegSession_Map.json', function (data) {
  var groupdataMap02 = data;
  // console.table(groupdataMap02);
  vicConfigMapGroupData(groupdataMap02, chartMap02, "sessions");
});
// config MAP
vicConfigMap(chartMap02);
// Enable export
chartMap02.exporting.menu = new am4core.ExportMenu();
chartMap02.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chartMap02.exporting.menu);
// Zoom control
chartMap02.zoomControl = new am4maps.ZoomControl();
vicConfigZoomCtrl(chartMap02.zoomControl);
// add home button
var homebtnMap02 = new am4core.Button();
homebtnMap02.events.on("hit", function () { chartMap02.goHome(); });
vicConfigHomeBtn(homebtnMap02, chartMap02.zoomControl);
// Legend styles
chartMap02.legend = new am4maps.Legend();
vicConfigMapLegend(chartMap02.legend);
//-----------------------------
// idChartAccSrcRegThreat_Map
//-----------------------------
var chartMap03 = am4core.create("idChartAccSrcRegThreat_Map", am4maps.MapChart);
// Set up data source
$.getJSON('./json/idChartAccSrcRegThreat_Map.json', function (data) {
  var groupdataMap03 = data;
  // console.table(groupdataMap03);
  vicConfigMapGroupData(groupdataMap03, chartMap03, "數量");
});
// config MAP
vicConfigMap(chartMap03);
// Enable export
chartMap03.exporting.menu = new am4core.ExportMenu();
chartMap03.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chartMap03.exporting.menu);
// Zoom control
chartMap03.zoomControl = new am4maps.ZoomControl();
vicConfigZoomCtrl(chartMap03.zoomControl);
// add home button
var homebtnMap03 = new am4core.Button();
homebtnMap03.events.on("hit", function () { chartMap03.goHome(); });
vicConfigHomeBtn(homebtnMap03, chartMap03.zoomControl);
// Legend styles
chartMap03.legend = new am4maps.Legend();
vicConfigMapLegend(chartMap03.legend);
//-----------------------------
// idChartAccSrcRegThreat_Bar
//-----------------------------
var chart009 = am4core.create("idChartAccSrcRegThreat_Bar", am4charts.XYChart);
// Set up data source
chart009.dataSource.url = "./json/idChartAccSrcRegThreat_Bar.json";
// Enable export
chart009.exporting.menu = new am4core.ExportMenu();
chart009.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart009.exporting.menu);
//yaxes
chart009.yAxes.push(new am4charts.CategoryAxis());
chart009.yAxes._values[0].dataFields.category = "region";
// chart009.yAxes._values[0].title.text = "category";
//yaxes
chart009.xAxes.push(new am4charts.ValueAxis());
chart009.xAxes._values[0].title.text = "amounts";
vicConfigAxes(chart009.xAxes._values[0], chart009.yAxes._values[0], "valueX");
// Create series 1
chart009.series.push(new am4charts.ColumnSeries());
chart009.series._values[0].dataFields.valueX = "value";
chart009.series._values[0].dataFields.categoryY = "region";
chart009.series._values[0].name = "amounts";
// Add cursor
chart009.cursor = new am4charts.XYCursor();
vicConfigSeries(chart009.series._values[0], "valueX", "");
vicConfigColumnSeries(chart009.series._values[0], chart009);

//-----------------------------
// idChartAccDestRegByte_Map
//-----------------------------
var chartMap04 = am4core.create("idChartAccDestRegByte_Map", am4maps.MapChart);
// Set up data source  
$.getJSON('./json/idChartAccSrcRegByte_Map.json', function (data) { //重覆使用假資料
  var groupdataMap04 = data;
  // console.table(groupdataMap04);
  vicConfigMapGroupData(groupdataMap04, chartMap04, "(G)位元組");
});
// config MAP
vicConfigMap(chartMap04);
// Enable export
chartMap04.exporting.menu = new am4core.ExportMenu();
chartMap04.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chartMap04.exporting.menu);
// Zoom control
chartMap04.zoomControl = new am4maps.ZoomControl();
vicConfigZoomCtrl(chartMap04.zoomControl);
// add home button
var homebtnMap04 = new am4core.Button();
homebtnMap04.events.on("hit", function () { chartMap04.goHome(); });
vicConfigHomeBtn(homebtnMap04, chartMap04.zoomControl);
// Legend styles
chartMap04.legend = new am4maps.Legend();
vicConfigMapLegend(chartMap04.legend);
//-----------------------------
// idChartAccDestRegSession_Map
//-----------------------------
var chartMap05 = am4core.create("idChartAccDestRegSession_Map", am4maps.MapChart);
// Set up data source
$.getJSON('./json/idChartAccSrcRegSession_Map.json', function (data) {  //重覆使用假資料
  var groupdataMap05 = data;
  // console.table(groupdataMap05);
  vicConfigMapGroupData(groupdataMap05, chartMap05, "sessions");
});
// config MAP
vicConfigMap(chartMap05);
// Enable export
chartMap05.exporting.menu = new am4core.ExportMenu();
chartMap05.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chartMap05.exporting.menu);
// Zoom control
chartMap05.zoomControl = new am4maps.ZoomControl();
vicConfigZoomCtrl(chartMap05.zoomControl);
// add home button
var homebtnMap05 = new am4core.Button();
homebtnMap05.events.on("hit", function () { chartMap05.goHome(); });
vicConfigHomeBtn(homebtnMap05, chartMap05.zoomControl);
// Legend styles
chartMap05.legend = new am4maps.Legend();
vicConfigMapLegend(chartMap05.legend);
//-----------------------------
// idChartAccDestRegThreat_Map
//-----------------------------
var chartMap06 = am4core.create("idChartAccDestRegThreat_Map", am4maps.MapChart);
// Set up data source
$.getJSON('./json/idChartAccDestRegThreat_Map.json', function (data) {
  var groupdataMap06 = data;
  // console.table(groupdataMap06);
  vicConfigMapGroupData(groupdataMap06, chartMap06, "數量");
});
// config MAP
vicConfigMap(chartMap06);
// Enable export
chartMap06.exporting.menu = new am4core.ExportMenu();
chartMap06.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chartMap06.exporting.menu);
// Zoom control
chartMap06.zoomControl = new am4maps.ZoomControl();
vicConfigZoomCtrl(chartMap06.zoomControl);
// add home button
var homebtnMap06 = new am4core.Button();
homebtnMap06.events.on("hit", function () { chartMap06.goHome(); });
vicConfigHomeBtn(homebtnMap06, chartMap06.zoomControl);
// Legend styles
chartMap06.legend = new am4maps.Legend();
vicConfigMapLegend(chartMap06.legend);

//-----------------------------
// idChartAccDestRegThreat_Bar
//-----------------------------
var chart010 = am4core.create("idChartAccDestRegThreat_Bar", am4charts.XYChart);
// Set up data source
chart010.dataSource.url = "./json/idChartAccDestRegThreat_Bar.json";
// Enable export
chart010.exporting.menu = new am4core.ExportMenu();
chart010.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart010.exporting.menu);

//yaxes
chart010.yAxes.push(new am4charts.CategoryAxis());
chart010.yAxes._values[0].dataFields.category = "region";
// chart010.yAxes._values[0].title.text = "category";
//yaxes
chart010.xAxes.push(new am4charts.ValueAxis());
chart010.xAxes._values[0].title.text = "amounts";
vicConfigAxes(chart010.xAxes._values[0], chart010.yAxes._values[0], "valueX");
// Create series 1
chart010.series.push(new am4charts.ColumnSeries());
chart010.series._values[0].dataFields.valueX = "value";
chart010.series._values[0].dataFields.categoryY = "region";
chart010.series._values[0].name = "amounts";
// Add cursor
chart010.cursor = new am4charts.XYCursor();
vicConfigSeries(chart010.series._values[0], "valueX", "");
vicConfigColumnSeries(chart010.series._values[0], chart010);

//-----------------------------
// idChartAccAppByte_byTime
//-----------------------------
var chart011 = am4core.create("idChartAccAppByte_byTime", am4charts.XYChart);
// Set up data source
chart011.dataSource.url = "./json/idChartAccAppByte_byTime.json";
// Enable export
chart011.exporting.menu = new am4core.ExportMenu();
chart011.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart011.exporting.menu);
//xaxes
chart011.xAxes.push(new am4charts.CategoryAxis());
chart011.xAxes._values[0].dataFields.category = "time";
//yaxes
chart011.yAxes.push(new am4charts.ValueAxis());
chart011.yAxes._values[0].title.text = "(G)位元組";
vicConfigAxes(chart011.xAxes._values[0], chart011.yAxes._values[0], "valueY");
// Create series 1
chart011.series.push(new am4charts.LineSeries());
chart011.series._values[0].dataFields.valueY = "bytes_sent";
chart011.series._values[0].dataFields.categoryX = "time";
chart011.series._values[0].name = "bytes_sent";
vicConfigSeries(chart011.series._values[0], "valueY", chart011.yAxes._values[0].title.text);
vicConfigLineSeries(chart011.series._values[0], "triangle");
// Create series 2
chart011.series.push(new am4charts.LineSeries());
chart011.series._values[1].dataFields.valueY = "bytes_receive";
chart011.series._values[1].dataFields.categoryX = "time";
chart011.series._values[1].name = "bytes_receive";
vicConfigSeries(chart011.series._values[1], "valueY", chart011.yAxes._values[0].title.text);
vicConfigLineSeries(chart011.series._values[1], "circle");
// Add (+/-) scrollbar
chart011.scrollbarX = new am4core.Scrollbar();
vicConfigScrollbarX(chart011.scrollbarX);
chart011.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarY(chart011.scrollbarY);
// Add cursor
chart011.cursor = new am4charts.XYCursor();
// Add legend
chart011.legend = new am4charts.Legend();
vicConfigLegend(chart011.legend);

//-----------------------------
// idChartAccAppSession_byCat
//-----------------------------
var chart012 = am4core.create("idChartAccAppSession_byCat", am4charts.XYChart);
// Set up data source
chart012.dataSource.url = "./json/idChartAccAppSession_byCat.json";
// Enable export
chart012.exporting.menu = new am4core.ExportMenu();
chart012.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart012.exporting.menu);
//yaxes
chart012.yAxes.push(new am4charts.CategoryAxis());
chart012.yAxes._values[0].dataFields.category = "category";
// chart012.yAxes._values[0].title.text = "category";
//xaxes
chart012.xAxes.push(new am4charts.ValueAxis());
chart012.xAxes._values[0].title.text = "sessions";
vicConfigAxes(chart012.xAxes._values[0], chart012.yAxes._values[0], "valueX");
// Create series 1
chart012.series.push(new am4charts.ColumnSeries());
chart012.series._values[0].dataFields.valueX = "value";
chart012.series._values[0].dataFields.categoryY = "category";
chart012.series._values[0].name = "sessions";
// Add cursor
chart012.cursor = new am4charts.XYCursor();
vicConfigSeries(chart012.series._values[0], "valueX", "");
vicConfigColumnSeries(chart012.series._values[0], chart012);
//-----------------------------
// idChartAccAppSession_byTime
//-----------------------------
var chart013 = am4core.create("idChartAccAppSession_byTime", am4charts.XYChart);
// Set up data source
chart013.dataSource.url = "./json/idChartAccAppSession_byTime.json";
// Enable export
chart013.exporting.menu = new am4core.ExportMenu();
chart013.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart013.exporting.menu);
//xaxes
chart013.xAxes.push(new am4charts.CategoryAxis());
chart013.xAxes._values[0].dataFields.category = "time";
//yaxes
chart013.yAxes.push(new am4charts.ValueAxis());
chart013.yAxes._values[0].title.text = "sessions";
vicConfigAxes(chart013.xAxes._values[0], chart013.yAxes._values[0], "valueY");
// Create 7 series
for(var i=0;i<7;i++){
  chart013.series.push(new am4charts.LineSeries());
  chart013.series._values[i].dataFields.valueY = "cat0"+i;
  chart013.series._values[i].dataFields.categoryX = "time";
  vicConfigSeries(chart013.series._values[i], "valueY", chart013.yAxes._values[0].title.text);
  vicConfigLineSeries(chart013.series._values[i], "circle");
}
chart013.series._values[0].name = "general-internet";
chart013.series._values[1].name = "networking";
chart013.series._values[2].name = "media";
chart013.series._values[3].name = "collaboration";
chart013.series._values[4].name = "business-system";
chart013.series._values[5].name = "unknown";
chart013.series._values[6].name = "internal";
// Add (+/-) scrollbar
chart013.scrollbarX = new am4core.Scrollbar();
vicConfigScrollbarX(chart013.scrollbarX);
chart013.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarY(chart013.scrollbarY);
// Add cursor
chart013.cursor = new am4charts.XYCursor();
// Add legend
chart013.legend = new am4charts.Legend();
vicConfigLegend(chart013.legend);
//-----------------------------
// idChartAccAppThreat_byCat
//-----------------------------
var chart014 = am4core.create("idChartAccAppThreat_byCat", am4charts.XYChart);
// Set up data source
chart014.dataSource.url = "./json/idChartAccAppThreat_byCat.json";
// Enable export
chart014.exporting.menu = new am4core.ExportMenu();
chart014.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart014.exporting.menu);
//yaxes
chart014.yAxes.push(new am4charts.CategoryAxis());
chart014.yAxes._values[0].dataFields.category = "category";
// chart014.yAxes._values[0].title.text = "category";
//xaxes
chart014.xAxes.push(new am4charts.ValueAxis());
chart014.xAxes._values[0].title.text = "amounts";
vicConfigAxes(chart014.xAxes._values[0], chart014.yAxes._values[0], "valueX");
// Create series 1
chart014.series.push(new am4charts.ColumnSeries());
chart014.series._values[0].dataFields.valueX = "value";
chart014.series._values[0].dataFields.categoryY = "category";
chart014.series._values[0].name = "amounts";
// Add cursor
chart014.cursor = new am4charts.XYCursor();
vicConfigSeries(chart014.series._values[0], "valueX", "");
vicConfigColumnSeries(chart014.series._values[0], chart014);
//-----------------------------
// idChartAccAppThreat_byTime
//-----------------------------
var chart015 = am4core.create("idChartAccAppThreat_byTime", am4charts.XYChart);
// Set up data source
chart015.dataSource.url = "./json/idChartAccAppThreat_byTime.json";
// Enable export
chart015.exporting.menu = new am4core.ExportMenu();
chart015.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart015.exporting.menu);
//xaxes
chart015.xAxes.push(new am4charts.CategoryAxis());
chart015.xAxes._values[0].dataFields.category = "time";
//yaxes
chart015.yAxes.push(new am4charts.ValueAxis());
chart015.yAxes._values[0].title.text = "sessions";
vicConfigAxes(chart015.xAxes._values[0], chart015.yAxes._values[0], "valueY");
// Create 7 series
for (var i = 0; i < 7; i++) {
  chart015.series.push(new am4charts.LineSeries());
  chart015.series._values[i].dataFields.valueY = "cat0" + i;
  chart015.series._values[i].dataFields.categoryX = "time";
  vicConfigSeries(chart015.series._values[i], "valueY", chart015.yAxes._values[0].title.text);
  vicConfigLineSeries(chart015.series._values[i], "circle");
}
chart015.series._values[0].name = "networking";
chart015.series._values[1].name = "general-internet";
chart015.series._values[2].name = "business-system";
chart015.series._values[3].name = "unknown";
chart015.series._values[4].name = "internal";
chart015.series._values[5].name = "media";
chart015.series._values[6].name = "collaboration";
// Add (+/-) scrollbar
chart015.scrollbarX = new am4core.Scrollbar();
vicConfigScrollbarX(chart015.scrollbarX);
chart015.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarY(chart015.scrollbarY);
// Add cursor
chart015.cursor = new am4charts.XYCursor();
// Add legend
chart015.legend = new am4charts.Legend();
vicConfigLegend(chart015.legend);
//-----------------------------
// idChartAccBlockedAppThreat_byCat
//-----------------------------
var chart016 = am4core.create("idChartAccBlockedAppThreat_byCat", am4charts.XYChart);
// Set up data source
chart016.dataSource.url = "./json/idChartAccBlockedAppThreat_byCat.json";
// Enable export
chart016.exporting.menu = new am4core.ExportMenu();
chart016.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart016.exporting.menu);
//yaxes
chart016.yAxes.push(new am4charts.CategoryAxis());
chart016.yAxes._values[0].dataFields.category = "category";
// chart016.yAxes._values[0].title.text = "category";
//xaxes
chart016.xAxes.push(new am4charts.ValueAxis());
chart016.xAxes._values[0].title.text = "amounts";
vicConfigAxes(chart016.xAxes._values[0], chart016.yAxes._values[0], "valueX");
// Create series 1
chart016.series.push(new am4charts.ColumnSeries());
chart016.series._values[0].dataFields.valueX = "value";
chart016.series._values[0].dataFields.categoryY = "category";
chart016.series._values[0].name = "amounts";
// Add cursor
chart016.cursor = new am4charts.XYCursor();
vicConfigSeries(chart016.series._values[0], "valueX", "");
vicConfigColumnSeries(chart016.series._values[0], chart016);
//-----------------------------
// idChartAccBlockedAppThreat_byTime
//-----------------------------
var chart017 = am4core.create("idChartAccBlockedAppThreat_byTime", am4charts.XYChart);
// Set up data source
chart017.dataSource.url = "./json/idChartAccBlockedAppThreat_byTime.json";
// Enable export
chart017.exporting.menu = new am4core.ExportMenu();
chart017.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart017.exporting.menu);
//xaxes
chart017.xAxes.push(new am4charts.CategoryAxis());
chart017.xAxes._values[0].dataFields.category = "time";
//yaxes
chart017.yAxes.push(new am4charts.ValueAxis());
chart017.yAxes._values[0].title.text = "sessions";
vicConfigAxes(chart017.xAxes._values[0], chart017.yAxes._values[0], "valueY");
// Create 1 series
for (var i = 0; i < 1; i++) {
  chart017.series.push(new am4charts.LineSeries());
  chart017.series._values[i].dataFields.valueY = "cat0" + i;
  chart017.series._values[i].dataFields.categoryX = "time";
  vicConfigSeries(chart017.series._values[i], "valueY", chart017.yAxes._values[0].title.text);
  vicConfigLineSeries(chart017.series._values[i], "circle");
}
chart017.series._values[0].name = "web-browsing";
// Add (+/-) scrollbar
chart017.scrollbarX = new am4core.Scrollbar();
vicConfigScrollbarX(chart017.scrollbarX);
chart017.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarY(chart017.scrollbarY);
// Add cursor
chart017.cursor = new am4charts.XYCursor();
// Add legend
chart017.legend = new am4charts.Legend();
vicConfigLegend(chart017.legend);

//-----------------------------
// idChartAccRuleByte_byTime
//-----------------------------
var chart022 = am4core.create("idChartAccRuleByte_byTime", am4charts.XYChart);
// Set up data source
chart022.dataSource.url = "./json/idChartAccSrcIpByte_byTime.json"; //重覆使用假資料
// Enable export
chart022.exporting.menu = new am4core.ExportMenu();
chart022.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart022.exporting.menu);
//xaxes
chart022.xAxes.push(new am4charts.CategoryAxis());
chart022.xAxes._values[0].dataFields.category = "time";
//yaxes
chart022.yAxes.push(new am4charts.ValueAxis());
chart022.yAxes._values[0].title.text = "(G)位元組";
vicConfigAxes(chart022.xAxes._values[0], chart022.yAxes._values[0], "valueY");
// Create series 1
chart022.series.push(new am4charts.LineSeries());
chart022.series._values[0].dataFields.valueY = "bytes_sent";
chart022.series._values[0].dataFields.categoryX = "time";
chart022.series._values[0].name = "bytes_sent";
vicConfigSeries(chart022.series._values[0], "valueY", chart022.yAxes._values[0].title.text);
vicConfigLineSeries(chart022.series._values[0], "triangle");
// Create series 2
chart022.series.push(new am4charts.LineSeries());
chart022.series._values[1].dataFields.valueY = "bytes_receive";
chart022.series._values[1].dataFields.categoryX = "time";
chart022.series._values[1].name = "bytes_receive";
vicConfigSeries(chart022.series._values[1], "valueY", chart022.yAxes._values[0].title.text);
vicConfigLineSeries(chart022.series._values[1], "circle");
// Add (+/-) scrollbar
chart022.scrollbarX = new am4core.Scrollbar();
chart022.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarX(chart022.scrollbarX);
vicConfigScrollbarY(chart022.scrollbarY);
// Add cursor
chart022.cursor = new am4charts.XYCursor();
// Add legend
chart022.legend = new am4charts.Legend();
vicConfigLegend(chart022.legend);

//-----------------------------
// idChartAccRuleSession_byTime
//-----------------------------
var chart023 = am4core.create("idChartAccRuleSession_byTime", am4charts.XYChart);
// Set up data source
chart023.dataSource.url = "./json/idChartAccSrcIpSession_byTime.json"; //重覆使用假資料
// Enable export
chart023.exporting.menu = new am4core.ExportMenu();
chart023.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart023.exporting.menu);
//xaxes
chart023.xAxes.push(new am4charts.CategoryAxis());
chart023.xAxes._values[0].dataFields.category = "time";
//yaxes
chart023.yAxes.push(new am4charts.ValueAxis());
// chart023.yAxes._values[0].title.text = "";
vicConfigAxes(chart023.xAxes._values[0], chart023.yAxes._values[0], "valueY");
// Create series 1
chart023.series.push(new am4charts.LineSeries());
chart023.series._values[0].dataFields.valueY = "sessions";
chart023.series._values[0].dataFields.categoryX = "time";
chart023.series._values[0].name = "sessions";
vicConfigSeries(chart023.series._values[0], "valueY", "sessions");
vicConfigLineSeries(chart023.series._values[0], ""); //nobullets
// Add (+/-) scrollbar
chart023.scrollbarX = new am4core.Scrollbar();
chart023.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarX(chart023.scrollbarX);
vicConfigScrollbarY(chart023.scrollbarY);
// Add cursor
chart023.cursor = new am4charts.XYCursor();
// Add legend
chart023.legend = new am4charts.Legend();
vicConfigLegend(chart023.legend);

//-----------------------------
// idChartAccRuleThreat_byCat
//-----------------------------
var chart024 = am4core.create("idChartAccRuleThreat_byCat", am4charts.XYChart);
// Set up data source
chart024.dataSource.url = "./json/idChartAccSrcIpThreat_byCat.json"; //重覆使用假資料
// Enable export
chart024.exporting.menu = new am4core.ExportMenu();
chart024.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart024.exporting.menu);
//yaxes
chart024.yAxes.push(new am4charts.CategoryAxis());
chart024.yAxes._values[0].dataFields.category = "category";
//xaxes
chart024.xAxes.push(new am4charts.ValueAxis());
chart024.xAxes._values[0].title.text = "amounts";
vicConfigAxes(chart024.xAxes._values[0], chart024.yAxes._values[0], "valueX");
// Create series 1
chart024.series.push(new am4charts.ColumnSeries());
chart024.series._values[0].dataFields.valueX = "value";
chart024.series._values[0].dataFields.categoryY = "category";
chart024.series._values[0].name = "amounts";
// Add cursor
chart024.cursor = new am4charts.XYCursor();
vicConfigSeries(chart024.series._values[0], "valueX", "");
vicConfigColumnSeries(chart024.series._values[0], chart024);

//-----------------------------
// idChartAccRuleThreat_byTime
//-----------------------------
var chart025 = am4core.create("idChartAccRuleThreat_byTime", am4charts.XYChart);
// Set up data source
chart025.dataSource.url = "./json/idChartAccSrcIpThreat_byTime.json"; //重覆使用假資料
// Enable export
chart025.exporting.menu = new am4core.ExportMenu();
chart025.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart025.exporting.menu);
//xaxes
chart025.xAxes.push(new am4charts.CategoryAxis());
chart025.xAxes._values[0].dataFields.category = "time";
//yaxes
chart025.yAxes.push(new am4charts.ValueAxis());
chart025.yAxes._values[0].title.text = "數量";
vicConfigAxes(chart025.xAxes._values[0], chart025.yAxes._values[0], "valueY");
// Create series 1
chart025.series.push(new am4charts.LineSeries());
chart025.series._values[0].dataFields.valueY = "vulnerability";
chart025.series._values[0].dataFields.categoryX = "time";
chart025.series._values[0].name = "vulnerability";
vicConfigSeries(chart025.series._values[0], "valueY", chart025.yAxes._values[0].title.text);
vicConfigLineSeries(chart025.series._values[0], "triangle");
// Create series 2
chart025.series.push(new am4charts.LineSeries());
chart025.series._values[1].dataFields.valueY = "spyware";
chart025.series._values[1].dataFields.categoryX = "time";
chart025.series._values[1].name = "spyware";
vicConfigSeries(chart025.series._values[1], "valueY", chart025.yAxes._values[0].title.text);
vicConfigLineSeries(chart025.series._values[1], "circle");
// Add (+/-) scrollbar
chart025.scrollbarX = new am4core.Scrollbar();
chart025.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarX(chart025.scrollbarX);
vicConfigScrollbarY(chart025.scrollbarY);
// Add cursor
chart025.cursor = new am4charts.XYCursor();
// Add legend
chart025.legend = new am4charts.Legend();
vicConfigLegend(chart025.legend);

//-----------------------------
// idChartAccRuleContent_byCat
//-----------------------------
var chart026 = am4core.create("idChartAccRuleContent_byCat", am4charts.XYChart);
// Set up data source
chart026.dataSource.url = "./json/idChartAccBlockedAppThreat_byCat.json"; //重覆使用假資料
// Enable export
chart026.exporting.menu = new am4core.ExportMenu();
chart026.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart026.exporting.menu);
//yaxes
chart026.yAxes.push(new am4charts.CategoryAxis());
chart026.yAxes._values[0].dataFields.category = "category";
// chart026.yAxes._values[0].title.text = "category";
//xaxes
chart026.xAxes.push(new am4charts.ValueAxis());
chart026.xAxes._values[0].title.text = "amounts";
vicConfigAxes(chart026.xAxes._values[0], chart026.yAxes._values[0], "valueX");
// Create series 1
chart026.series.push(new am4charts.ColumnSeries());
chart026.series._values[0].dataFields.valueX = "value";
chart026.series._values[0].dataFields.categoryY = "category";
chart026.series._values[0].name = "amounts";
// Add cursor
chart026.cursor = new am4charts.XYCursor();
vicConfigSeries(chart026.series._values[0], "valueX", "");
vicConfigColumnSeries(chart026.series._values[0], chart026);
//-----------------------------
// idChartAccRuleContent_byTime
//-----------------------------
var chart027 = am4core.create("idChartAccRuleContent_byTime", am4charts.XYChart);
// Set up data source
chart027.dataSource.url = "./json/idChartAccBlockedAppThreat_byTime.json"; //重覆使用假資料
// Enable export
chart027.exporting.menu = new am4core.ExportMenu();
chart027.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart027.exporting.menu);
//xaxes
chart027.xAxes.push(new am4charts.CategoryAxis());
chart027.xAxes._values[0].dataFields.category = "time";
//yaxes
chart027.yAxes.push(new am4charts.ValueAxis());
chart027.yAxes._values[0].title.text = "sessions";
vicConfigAxes(chart027.xAxes._values[0], chart027.yAxes._values[0], "valueY");
// Create 1 series
for (var i = 0; i < 1; i++) {
  chart027.series.push(new am4charts.LineSeries());
  chart027.series._values[i].dataFields.valueY = "cat0" + i;
  chart027.series._values[i].dataFields.categoryX = "time";
  vicConfigSeries(chart027.series._values[i], "valueY", chart027.yAxes._values[0].title.text);
  vicConfigLineSeries(chart027.series._values[i], "circle");
}
chart027.series._values[0].name = "web-browsing";
// Add (+/-) scrollbar
chart027.scrollbarX = new am4core.Scrollbar();
chart027.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarX(chart027.scrollbarX);
vicConfigScrollbarY(chart027.scrollbarY);
// Add cursor
chart027.cursor = new am4charts.XYCursor();
// Add legend
chart027.legend = new am4charts.Legend();
vicConfigLegend(chart027.legend);

//-----------------------------
// idChartAccRuleUrl_byCat
//-----------------------------
var chart028 = am4core.create("idChartAccRuleUrl_byCat", am4charts.XYChart);
// Set up data source
chart028.dataSource.url = "./json/idChartAccUrl_byCat.json"; //重覆使用假資料
// Enable export
chart028.exporting.menu = new am4core.ExportMenu();
chart028.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart028.exporting.menu);
//yaxes
chart028.yAxes.push(new am4charts.CategoryAxis());
chart028.yAxes._values[0].dataFields.category = "category";
// chart028.yAxes._values[0].title.text = "category";
//xaxes
chart028.xAxes.push(new am4charts.ValueAxis());
chart028.xAxes._values[0].title.text = "amounts";
vicConfigAxes(chart028.xAxes._values[0], chart028.yAxes._values[0], "valueX");
// Create series 1
chart028.series.push(new am4charts.ColumnSeries());
chart028.series._values[0].dataFields.valueX = "value";
chart028.series._values[0].dataFields.categoryY = "category";
chart028.series._values[0].name = "amounts";
// Add cursor
chart028.cursor = new am4charts.XYCursor();
vicConfigSeries(chart028.series._values[0], "valueX", "");
vicConfigColumnSeries(chart028.series._values[0], chart028);
//-----------------------------
// idChartAccRuleUrl_byTime
//-----------------------------
var chart029 = am4core.create("idChartAccRuleUrl_byTime", am4charts.XYChart);
// Set up data source
chart029.dataSource.url = "./json/idChartAccUrl_byTime.json"; //重覆使用假資料
// Enable export
chart029.exporting.menu = new am4core.ExportMenu();
chart029.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart029.exporting.menu);
//xaxes
chart029.xAxes.push(new am4charts.CategoryAxis());
chart029.xAxes._values[0].dataFields.category = "time";
//yaxes
chart029.yAxes.push(new am4charts.ValueAxis());
chart029.yAxes._values[0].title.text = "sessions";
vicConfigAxes(chart029.xAxes._values[0], chart029.yAxes._values[0], "valueY");
// Create 7 series
for (var i = 0; i < 8; i++) {
  chart029.series.push(new am4charts.LineSeries());
  chart029.series._values[i].dataFields.valueY = "cat0" + i;
  chart029.series._values[i].dataFields.categoryX = "time";
  vicConfigSeries(chart029.series._values[i], "valueY", chart029.yAxes._values[0].title.text);
  vicConfigLineSeries(chart029.series._values[i], "circle");
}
chart029.series._values[0].name = "web-advertisements";
chart029.series._values[1].name = "social-networking";
chart029.series._values[2].name = "games";
chart029.series._values[3].name = "computer-and-intern";
chart029.series._values[4].name = "serch-engines";
chart029.series._values[5].name = "streaming-media";
chart029.series._values[6].name = "shopping";
chart029.series._values[7].name = "business-and-economy";
// Add (+/-) scrollbar
chart029.scrollbarX = new am4core.Scrollbar();
chart029.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarX(chart029.scrollbarX);
vicConfigScrollbarY(chart029.scrollbarY);
// Add cursor
chart029.cursor = new am4charts.XYCursor();
// Add legend
chart029.legend = new am4charts.Legend();
vicConfigLegend(chart029.legend);

//-----------------------------
// idChartAccBlockedRuleThreat_byCat
//-----------------------------
var chart030 = am4core.create("idChartAccBlockedRuleThreat_byCat", am4charts.XYChart);
// Set up data source
chart030.dataSource.url = "./json/idChartAccSrcIpThreat_byCat.json"; //重覆使用假資料
// Enable export
chart030.exporting.menu = new am4core.ExportMenu();
chart030.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart030.exporting.menu);
//yaxes
chart030.yAxes.push(new am4charts.CategoryAxis());
chart030.yAxes._values[0].dataFields.category = "category";
// chart030.yAxes._values[0].title.text = "category";
//xaxes
chart030.xAxes.push(new am4charts.ValueAxis());
chart030.xAxes._values[0].title.text = "amounts";
vicConfigAxes(chart030.xAxes._values[0], chart030.yAxes._values[0], "valueX");
// Create series 1
chart030.series.push(new am4charts.ColumnSeries());
chart030.series._values[0].dataFields.valueX = "value";
chart030.series._values[0].dataFields.categoryY = "category";
chart030.series._values[0].name = "amounts";
// Add cursor
chart030.cursor = new am4charts.XYCursor();
vicConfigSeries(chart030.series._values[0], "valueX", "");
vicConfigColumnSeries(chart030.series._values[0], chart030);

//-----------------------------
// idChartAccBlockedRuleThreat_byTime
//-----------------------------
var chart031 = am4core.create("idChartAccBlockedRuleThreat_byTime", am4charts.XYChart);
// Set up data source
chart031.dataSource.url = "./json/idChartAccSrcIpThreat_byTime.json"; //重覆使用假資料
// Enable export
chart031.exporting.menu = new am4core.ExportMenu();
chart031.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart031.exporting.menu);
//xaxes
chart031.xAxes.push(new am4charts.CategoryAxis());
chart031.xAxes._values[0].dataFields.category = "time";
//yaxes
chart031.yAxes.push(new am4charts.ValueAxis());
chart031.yAxes._values[0].title.text = "數量";
vicConfigAxes(chart031.xAxes._values[0], chart031.yAxes._values[0], "valueY");
// Create series 1
chart031.series.push(new am4charts.LineSeries());
chart031.series._values[0].dataFields.valueY = "vulnerability";
chart031.series._values[0].dataFields.categoryX = "time";
chart031.series._values[0].name = "vulnerability";
vicConfigSeries(chart031.series._values[0], "valueY", chart031.yAxes._values[0].title.text);
vicConfigLineSeries(chart031.series._values[0], "triangle");
// Create series 2
chart031.series.push(new am4charts.LineSeries());
chart031.series._values[1].dataFields.valueY = "spyware";
chart031.series._values[1].dataFields.categoryX = "time";
chart031.series._values[1].name = "spyware";
vicConfigSeries(chart031.series._values[1], "valueY", chart031.yAxes._values[0].title.text);
vicConfigLineSeries(chart031.series._values[1], "circle");
// Add (+/-) scrollbar
chart031.scrollbarX = new am4core.Scrollbar();
chart031.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarX(chart031.scrollbarX);
vicConfigScrollbarY(chart031.scrollbarY);
// Add cursor
chart031.cursor = new am4charts.XYCursor();
// Add legend
chart031.legend = new am4charts.Legend();
vicConfigLegend(chart031.legend);

//-----------------------------
// idChartAccBlockedRuleContent_byCat
//-----------------------------
var chart032 = am4core.create("idChartAccBlockedRuleContent_byCat", am4charts.XYChart);
// Set up data source
chart032.dataSource.url = "./json/idChartAccBlockedAppThreat_byCat.json"; //重覆使用假資料
// Enable export
chart032.exporting.menu = new am4core.ExportMenu();
chart032.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart032.exporting.menu);
//yaxes
chart032.yAxes.push(new am4charts.CategoryAxis());
chart032.yAxes._values[0].dataFields.category = "category";
// chart032.yAxes._values[0].title.text = "category";
//xaxes
chart032.xAxes.push(new am4charts.ValueAxis());
chart032.xAxes._values[0].title.text = "amounts";
vicConfigAxes(chart032.xAxes._values[0], chart032.yAxes._values[0], "valueX");
// Create series 1
chart032.series.push(new am4charts.ColumnSeries());
chart032.series._values[0].dataFields.valueX = "value";
chart032.series._values[0].dataFields.categoryY = "category";
chart032.series._values[0].name = "amounts";
// Add cursor
chart032.cursor = new am4charts.XYCursor();
vicConfigSeries(chart032.series._values[0], "valueX", "");
vicConfigColumnSeries(chart032.series._values[0], chart032);
//-----------------------------
// idChartAccBlockedRuleContent_byTime
//-----------------------------
var chart033 = am4core.create("idChartAccBlockedRuleContent_byTime", am4charts.XYChart);
// Set up data source
chart033.dataSource.url = "./json/idChartAccBlockedAppThreat_byTime.json"; //重覆使用假資料
// Enable export
chart033.exporting.menu = new am4core.ExportMenu();
chart033.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart033.exporting.menu);
//xaxes
chart033.xAxes.push(new am4charts.CategoryAxis());
chart033.xAxes._values[0].dataFields.category = "time";
//yaxes
chart033.yAxes.push(new am4charts.ValueAxis());
chart033.yAxes._values[0].title.text = "sessions";
vicConfigAxes(chart033.xAxes._values[0], chart033.yAxes._values[0], "valueY");
// Create 1 series
for (var i = 0; i < 1; i++) {
  chart033.series.push(new am4charts.LineSeries());
  chart033.series._values[i].dataFields.valueY = "cat0" + i;
  chart033.series._values[i].dataFields.categoryX = "time";
  vicConfigSeries(chart033.series._values[i], "valueY", chart033.yAxes._values[0].title.text);
  vicConfigLineSeries(chart033.series._values[i], "circle");
}
chart033.series._values[0].name = "web-browsing";
// Add (+/-) scrollbar
chart033.scrollbarX = new am4core.Scrollbar();
chart033.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarX(chart033.scrollbarX);
vicConfigScrollbarY(chart033.scrollbarY);
// Add cursor
chart033.cursor = new am4charts.XYCursor();
// Add legend
chart033.legend = new am4charts.Legend();
vicConfigLegend(chart033.legend);

//-----------------------------
// idChartAccBlockedRuleUrl_byCat
//-----------------------------
var chart034 = am4core.create("idChartAccBlockedRuleUrl_byCat", am4charts.XYChart);
// Set up data source
chart034.dataSource.url = "./json/idChartAccUrl_byCat.json"; //重覆使用假資料
// Enable export
chart034.exporting.menu = new am4core.ExportMenu();
chart034.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart034.exporting.menu);
//yaxes
chart034.yAxes.push(new am4charts.CategoryAxis());
chart034.yAxes._values[0].dataFields.category = "category";
// chart034.yAxes._values[0].title.text = "category";
//xaxes
chart034.xAxes.push(new am4charts.ValueAxis());
chart034.xAxes._values[0].title.text = "amounts";
vicConfigAxes(chart034.xAxes._values[0], chart034.yAxes._values[0], "valueX");
// Create series 1
chart034.series.push(new am4charts.ColumnSeries());
chart034.series._values[0].dataFields.valueX = "value";
chart034.series._values[0].dataFields.categoryY = "category";
chart034.series._values[0].name = "amounts";
// Add cursor
chart034.cursor = new am4charts.XYCursor();
vicConfigSeries(chart034.series._values[0], "valueX", "");
vicConfigColumnSeries(chart034.series._values[0], chart034);
//-----------------------------
// idChartAccBlockedRuleUrl_byTime
//-----------------------------
var chart035 = am4core.create("idChartAccBlockedRuleUrl_byTime", am4charts.XYChart);
// Set up data source
chart035.dataSource.url = "./json/idChartAccUrl_byTime.json"; //重覆使用假資料
// Enable export
chart035.exporting.menu = new am4core.ExportMenu();
chart035.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart035.exporting.menu);
//xaxes
chart035.xAxes.push(new am4charts.CategoryAxis());
chart035.xAxes._values[0].dataFields.category = "time";
//yaxes
chart035.yAxes.push(new am4charts.ValueAxis());
chart035.yAxes._values[0].title.text = "sessions";
vicConfigAxes(chart035.xAxes._values[0], chart035.yAxes._values[0], "valueY");
// Create 7 series
for (var i = 0; i < 8; i++) {
  chart035.series.push(new am4charts.LineSeries());
  chart035.series._values[i].dataFields.valueY = "cat0" + i;
  chart035.series._values[i].dataFields.categoryX = "time";
  vicConfigSeries(chart035.series._values[i], "valueY", chart035.yAxes._values[0].title.text);
  vicConfigLineSeries(chart035.series._values[i], "circle");
}
chart035.series._values[0].name = "web-advertisements";
chart035.series._values[1].name = "social-networking";
chart035.series._values[2].name = "games";
chart035.series._values[3].name = "computer-and-intern";
chart035.series._values[4].name = "serch-engines";
chart035.series._values[5].name = "streaming-media";
chart035.series._values[6].name = "shopping";
chart035.series._values[7].name = "business-and-economy";
// Add (+/-) scrollbar
chart035.scrollbarX = new am4core.Scrollbar();
chart035.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarX(chart035.scrollbarX);
vicConfigScrollbarY(chart035.scrollbarY);
// Add cursor
chart035.cursor = new am4charts.XYCursor();
// Add legend
chart035.legend = new am4charts.Legend();
vicConfigLegend(chart035.legend);

//-----------------------------
// idChartAccUrl_byCat
//-----------------------------
var chart018 = am4core.create("idChartAccUrl_byCat", am4charts.XYChart);
// Set up data source
chart018.dataSource.url = "./json/idChartAccUrl_byCat.json";
// Enable export
chart018.exporting.menu = new am4core.ExportMenu();
chart018.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart018.exporting.menu);
//yaxes
chart018.yAxes.push(new am4charts.CategoryAxis());
chart018.yAxes._values[0].dataFields.category = "category";
// chart018.yAxes._values[0].title.text = "category";
//xaxes
chart018.xAxes.push(new am4charts.ValueAxis());
chart018.xAxes._values[0].title.text = "amounts";
vicConfigAxes(chart018.xAxes._values[0], chart018.yAxes._values[0], "valueX");
// Create series 1
chart018.series.push(new am4charts.ColumnSeries());
chart018.series._values[0].dataFields.valueX = "value";
chart018.series._values[0].dataFields.categoryY = "category";
chart018.series._values[0].name = "amounts";
// Add cursor
chart018.cursor = new am4charts.XYCursor();
vicConfigSeries(chart018.series._values[0], "valueX", "");
vicConfigColumnSeries(chart018.series._values[0], chart018);
//-----------------------------
// idChartAccUrl_byTime
//-----------------------------
var chart019 = am4core.create("idChartAccUrl_byTime", am4charts.XYChart);
// Set up data source
chart019.dataSource.url = "./json/idChartAccUrl_byTime.json";
// Enable export
chart019.exporting.menu = new am4core.ExportMenu();
chart019.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart019.exporting.menu);
//xaxes
chart019.xAxes.push(new am4charts.CategoryAxis());
chart019.xAxes._values[0].dataFields.category = "time";
//yaxes
chart019.yAxes.push(new am4charts.ValueAxis());
chart019.yAxes._values[0].title.text = "sessions";
vicConfigAxes(chart019.xAxes._values[0], chart019.yAxes._values[0], "valueY");
// Create 7 series
for (var i = 0; i < 8; i++) {
  chart019.series.push(new am4charts.LineSeries());
  chart019.series._values[i].dataFields.valueY = "cat0" + i;
  chart019.series._values[i].dataFields.categoryX = "time";
  vicConfigSeries(chart019.series._values[i], "valueY", chart019.yAxes._values[0].title.text);
  vicConfigLineSeries(chart019.series._values[i], "circle");
}
chart019.series._values[0].name = "web-advertisements";
chart019.series._values[1].name = "social-networking";
chart019.series._values[2].name = "games";
chart019.series._values[3].name = "computer-and-intern";
chart019.series._values[4].name = "serch-engines";
chart019.series._values[5].name = "streaming-media";
chart019.series._values[6].name = "shopping";
chart019.series._values[7].name = "business-and-economy";
// Add (+/-) scrollbar
chart019.scrollbarX = new am4core.Scrollbar();
vicConfigScrollbarX(chart019.scrollbarX);
chart019.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarY(chart019.scrollbarY);
// Add cursor
chart019.cursor = new am4charts.XYCursor();
// Add legend
chart019.legend = new am4charts.Legend();
vicConfigLegend(chart019.legend);

//-----------------------------
// idChartAccThreat_byCat
//-----------------------------
var chart020 = am4core.create("idChartAccThreat_byCat", am4charts.XYChart);
// Set up data source
chart020.dataSource.url = "./json/idChartAccThreat_byCat.json";
// Enable export
chart020.exporting.menu = new am4core.ExportMenu();
chart020.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart020.exporting.menu);
//yaxes
chart020.yAxes.push(new am4charts.CategoryAxis());
chart020.yAxes._values[0].dataFields.category = "category";
// chart020.yAxes._values[0].title.text = "category";
//xaxes
chart020.xAxes.push(new am4charts.ValueAxis());
chart020.xAxes._values[0].title.text = "amounts";
vicConfigAxes(chart020.xAxes._values[0], chart020.yAxes._values[0], "valueX");
// Create series 1
chart020.series.push(new am4charts.ColumnSeries());
chart020.series._values[0].dataFields.valueX = "value";
chart020.series._values[0].dataFields.categoryY = "category";
chart020.series._values[0].name = "amounts";
// Add cursor
chart020.cursor = new am4charts.XYCursor();
vicConfigSeries(chart020.series._values[0], "valueX", "");
vicConfigColumnSeries(chart020.series._values[0], chart020);

//-----------------------------
// idChartAccThreat_byTime
//-----------------------------
var chart021 = am4core.create("idChartAccThreat_byTime", am4charts.XYChart);
// Set up data source
chart021.dataSource.url = "./json/idChartAccThreat_byTime.json";
// Enable export
chart021.exporting.menu = new am4core.ExportMenu();
chart021.exporting.backgroundColor = VIC_EX_BGCOLOR;
vicConfigExMenu(chart021.exporting.menu);
//xaxes
chart021.xAxes.push(new am4charts.CategoryAxis());
chart021.xAxes._values[0].dataFields.category = "time";
//yaxes
chart021.yAxes.push(new am4charts.ValueAxis());
chart021.yAxes._values[0].title.text = "數量";
vicConfigAxes(chart021.xAxes._values[0], chart021.yAxes._values[0], "valueY");
// Create series 1
chart021.series.push(new am4charts.LineSeries());
chart021.series._values[0].dataFields.valueY = "vulnerability";
chart021.series._values[0].dataFields.categoryX = "time";
chart021.series._values[0].name = "vulnerability";
vicConfigSeries(chart021.series._values[0], "valueY", chart021.yAxes._values[0].title.text);
vicConfigLineSeries(chart021.series._values[0], "triangle");
// Create series 2
chart021.series.push(new am4charts.LineSeries());
chart021.series._values[1].dataFields.valueY = "spyware";
chart021.series._values[1].dataFields.categoryX = "time";
chart021.series._values[1].name = "spyware";
vicConfigSeries(chart021.series._values[1], "valueY", chart021.yAxes._values[0].title.text);
vicConfigLineSeries(chart021.series._values[1], "circle");
// Add (+/-) scrollbar
chart021.scrollbarX = new am4core.Scrollbar();
vicConfigScrollbarX(chart021.scrollbarX);
chart021.scrollbarY = new am4core.Scrollbar();
vicConfigScrollbarY(chart021.scrollbarY);
// Add cursor
chart021.cursor = new am4charts.XYCursor();
// Add legend
chart021.legend = new am4charts.Legend();
vicConfigLegend(chart021.legend);




