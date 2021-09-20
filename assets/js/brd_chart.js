//-----------------------------
// idChartDashbrdHardware
//-----------------------------
var chart000 = am4core.create("idChartDashbrdHardware", am4charts.XYChart);
// Set up data source
chart000.dataSource.url = "./json/idChartDashbrdHardware.json";
//fg color
chart000.colors.list = [
  am4core.color("#FF8E8E"), // pink
  am4core.color("#FFD002"), // yellow
];
//background color
var gradient = new am4core.LinearGradient();
gradient.addColor(am4core.color("#F8F8FF"));
gradient.addColor(am4core.color("#000"));
gradient.rotation = 90;
chart000.plotContainer.background.fill = gradient;
chart000.plotContainer.background.fillOpacity = 0.1;
//xaxes
var myXaxis = chart000.xAxes.push(new am4charts.CategoryAxis());
myXaxis.dataFields.category = "time";
myXaxis.renderer.labels.template.wrap = false;
myXaxis.renderer.labels.template.rotation = -45;
myXaxis.renderer.labels.template.horizontalCenter = "right";
myXaxis.renderer.minGridDistance = 10;
myXaxis.renderer.grid.template.location = 0.5;
myXaxis.renderer.line.strokeOpacity = 1;
myXaxis.renderer.line.strokeWidth = 2;
myXaxis.renderer.line.stroke = am4core.color("#41C1FF"); // cyan
myXaxis.tooltip.disabled = true;
myXaxis.renderer.grid.template.strokeOpacity = 0;

//客製化 xaxis title
myXaxis.title.text = "時間";
myXaxis.title.fill = am4core.color("#41C1FF"); // cyan
myXaxis.title.fontSize = 15;
myXaxis.title.align = "right";
myXaxis.title.paddingRight = 10;

//yaxes
var myYaxis = chart000.yAxes.push(new am4charts.ValueAxis());
myYaxis.renderer.labels.template.wrap = false;
myYaxis.renderer.minGridDistance = 20;
myYaxis.tooltip.disabled = true;
myYaxis.renderer.line.strokeOpacity = 1;
myYaxis.renderer.line.strokeWidth = 2;
myYaxis.renderer.line.stroke = am4core.color("#CC8CFF"); // purple
myYaxis.renderer.grid.template.strokeOpacity = 1;
myYaxis.renderer.grid.template.stroke = am4core.color("#06314d"); //bgnavy
myYaxis.renderer.grid.template.strokeWidth = 2;
//客製化 yaxis title
var topContainer = chart000.chartContainer.createChild(am4core.Container);
topContainer.layout = "absolute";
topContainer.toBack();
topContainer.paddingBottom = 15;
topContainer.paddingLeft = 0;
topContainer.width = am4core.percent(80);
var dateTitle = topContainer.createChild(am4core.Label);
dateTitle.text = "The time that the used host is ready.(%)";
dateTitle.fill = am4core.color("#CC8CFF"); // purple
dateTitle.fontWeight = 600;
dateTitle.fontSize = 14;
dateTitle.align = "left";
// Create series 1
chart000.series.push(new am4charts.LineSeries());
chart000.series._values[0].dataFields.valueY = "CPU";
chart000.series._values[0].dataFields.categoryX = "time";
chart000.series._values[0].name = "CPU";
vicConfigSeries(chart000.series._values[0], "valueY", "(%)");
vicConfigLineSeries(chart000.series._values[0], "circle");
var bullet1 = chart000.series._values[0].bullets._values[0];
bullet1.circle.fill = am4core.color("#FFF");
bullet1.circle.stroke = chart000.colors.list[0]; // pink
bullet1.circle.strokeWidth = 2;
// Create series 2
// chart000.series.push(new am4charts.LineSeries());
// chart000.series._values[1].dataFields.valueY = "memory";
// chart000.series._values[1].dataFields.categoryX = "time";
// chart000.series._values[1].name = "記憶體";
// vicConfigSeries(chart000.series._values[1], "valueY", "(%)");
// vicConfigLineSeries(chart000.series._values[1], "circle");
// var bullet2 = chart000.series._values[1].bullets._values[0];
// bullet2.circle.fill = am4core.color("#FFF");
// bullet2.circle.stroke = chart000.colors.list[1]; // yellow
// bullet2.circle.strokeWidth = 2;
// Add cursor
chart000.cursor = new am4charts.XYCursor();
// Add legend
chart000.legend = new am4charts.Legend();
chart000.legend.position = "top";
chart000.legend.contentAlign = "right";
chart000.legend.useDefaultMarker = true;
chart000.legend.markers.template.width = VIC_LEGEND_DOT_SIZE;
chart000.legend.markers.template.height = VIC_LEGEND_DOT_SIZE;
chart000.legend.markers.template.children.getIndex(0).cornerRadius(0,0,0,0);

