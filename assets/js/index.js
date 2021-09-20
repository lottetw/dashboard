// console.log = function () { } //disable all console.log

function headerSetup(dataId) {
  $('header').load('./inc_nav.html', function () {
    if (dataId == 'jsNavBrd' || dataId == 'jsNavAcc' || dataId == 'jsNavRepo' || dataId == 'jsNavMng' || dataId == 'jsNavConf' || dataId == 'jsNavDevice') {
      $('#jsNavbarMenu a.nav-link').removeClass('active');
      $('#jsNavbarMenu a.nav-link[data-id="' + dataId + '"]').addClass('active');
    }
  });
}

//-----------------------------
// amchart config functions
//-----------------------------
function am4themes_vicTheme(target) {
  if (target instanceof am4core.ColorSet) {
    target.list = [
      am4core.color("#41C1FF"), // cyan
      am4core.color("#CC8CFF"), // purple
      am4core.color("#FFD002"), //  yellow
      am4core.color("#7ED321"),  //  green       
      am4core.color("#FA9C00"), // orange
      am4core.color("#9A9A9A"), // gray
      am4core.color("#216896"), //  blue
      am4core.color("#DC5108"),  //  red
    ];
  }
}
//
// colors, data here!
//
var VIC_EX_BGCOLOR = am4core.color("#091C2D"); //dark blue
var VIC_MAP_COLOR_LV3 = am4core.color("#7E5500"); //brown
var VIC_MAP_COLOR_LV2 = am4core.color("#F79A00"); //orange
var VIC_MAP_COLOR_LV1 = am4core.color("#FFDC43"); //yellow
var VIC_LEGEND_DOT_SIZE = 15;


//-----------------------------
// amchart XYchart config functions
//-----------------------------
var myhandle;
function vicConfigScrollbarHandle(mygrip, startend){
  mygrip.background.disabled = true;
  mygrip.scale = 0.75;
  mygrip.icon.disabled = true;
  myhandle = mygrip.createChild(am4core.Triangle);
  myhandle.width = 15; 
  myhandle.height = 15; 
  // myhandle.fill = am4core.color("#CC8CFF");
  myhandle.fill = am4core.color("#FFF");
  if (startend == "Xstart"){
    myhandle.rotation = 90;
  }else if (startend == "Xend"){
    myhandle.rotation = -90;
  }else if (startend == "Ystart"){
    myhandle.rotation = 0;
  }else{
    myhandle.rotation = 180;
  }
  myhandle.align = "center";
}
function vicConfigScrollbarX(myscrollbarX) {
  myscrollbarX.background.fill = am4core.color("#FFF");
  myscrollbarX.minHeight = 4;
  // myscrollbarX.valign = "bottom";
  vicConfigScrollbarHandle(myscrollbarX.startGrip,"Xstart");
  vicConfigScrollbarHandle(myscrollbarX.endGrip, "Xend");
  myscrollbarX.marginBottom = "15px";
  myscrollbarX.marginTop = "15px";
}
function vicConfigScrollbarY(myscrollbarY) {
  myscrollbarY.background.fill = am4core.color("#FFF");
  myscrollbarY.minWidth = 4;
  vicConfigScrollbarHandle(myscrollbarY.startGrip, "Ystart");
  vicConfigScrollbarHandle(myscrollbarY.endGrip, "Yend");
  myscrollbarY.marginLeft = "10px";
  myscrollbarY.marginRight = "0";
}
function vicConfigExMenu(mymenu) {
  mymenu.align = "left";
  mymenu.verticalAlign = "bottom";
  mymenu.items = [
    {
      "label": "...",
      "menu": [
        {
          "label": "下載圖片",
          "menu": [
            { "type": "png", "label": "下載PNG" },
            { "type": "svg", "label": "下載SVG" }
          ]
        }, {
          "label": "下載資料",
          "menu": [
            { "type": "json", "label": "下載JSON" },
            { "type": "csv", "label": "下載CSV" }
          ]
        }
      ]
    }
  ]
}
function vicConfigAxes(myXaxis, myYaxis, myValueAxis) {
  if (myValueAxis == "valueY") {
    myXaxis.renderer.labels.template.rotation = 0;
    myXaxis.renderer.labels.template.horizontalCenter = "center";
    myXaxis.renderer.labels.template.maxWidth = 80;
    // myXaxis.renderer.labels.template.truncate = true;
  } else {
    myYaxis.renderer.labels.template.verticalCenter = "middle";  
    myYaxis.renderer.minGridDistance = 30;
    myYaxis.renderer.labels.template.truncate = true;
    myYaxis.renderer.labels.template.maxWidth = 100;
  }
  myXaxis.renderer.labels.template.wrap = false;
  myXaxis.renderer.minGridDistance = 80;
  myXaxis.renderer.grid.template.location = 0.5;
  myXaxis.title.align = "right";
  myYaxis.tooltip.disabled = true;
  myYaxis.renderer.grid.template.location = 0;

  
  myYaxis.layout = "absolute";
  myYaxis.paddingLeft = 0;
  myYaxis.paddingRight = 0;
  myYaxis.title.valign = "top"; 
  myYaxis.title.align = "center";
  myYaxis.title.rotation = 0;
  
  myYaxis.title.dy = -42;

}
function vicConfigSeries(mySeries, myValueAxis, unit) {
  if (myValueAxis == "valueY") {
    mySeries.tooltipText = "{name}: {valueY} " + unit;
    mySeries.tooltip.background.fillOpacity = 0.8
  } else {
    mySeries.tooltipText = "{name}: {valueX} " + unit;
    mySeries.tooltip.background.fillOpacity = 0.8
  }
}
var arrow;
function vicConfigLineSeries(mySeries, myBulletStyle) {
  mySeries.strokeWidth = 3;
  if (myBulletStyle == "triangle") {
    mySeries.bullets.push(new am4charts.Bullet());
    // arrow = mySeries.bullets._values[0].createChild(am4core.Triangle);
    arrow = mySeries.bullets._values[0].createChild(am4core.Rectangle);
    arrow.horizontalCenter = "middle";
    arrow.verticalCenter = "middle";
    arrow.rotation = 90;
    // arrow.direction = "top";
    arrow.width = 8;
    arrow.height = 8;
  } else if (myBulletStyle == "circle"){
    mySeries.bullets.push(new am4charts.CircleBullet());
    mySeries.bullets._values[0].circle.radius =5;
  } 
  //else: no bullet, just line.
}
function vicConfigColumnSeries(mySeries, mychart) {
  var valueLabel;
  mychart.xAxes._values[0].tooltip.disabled = true;
  mychart.yAxes._values[0].tooltip.disabled = true;
  mySeries.columns.template.height = am4core.percent(50);
  mySeries.columns.template.strokeWidth = 0;
  mySeries.columns.template.adapter.add("fill", function (fill, target) {
    return mychart.colors.getIndex(target.dataItem.index); //user our color template
  });
  mySeries.tooltipText = "{categoryY}: {valueX}";
  valueLabel = mySeries.bullets.push(new am4charts.LabelBullet());
  valueLabel.label.text = "{valueX}";
  valueLabel.label.horizontalCenter = "left";
  valueLabel.label.dx = 5;
  valueLabel.label.hideOversized = false;
  valueLabel.label.truncate = false;
  // valueLabel.label.fill = am4core.color("#000");
  
}
function vicConfigLegend(myLegend) {
  myLegend.position = "bottom";
  myLegend.contentAlign = "right";
  myLegend.itemContainers.template.paddingTop = 1;
  myLegend.itemContainers.template.paddingBottom = 1;
  myLegend.maxHeight = 75;
  myLegend.scrollable = true;
}
//-----------------------------
// amchart Map config functions
//-----------------------------
function vicConfigMap(myMap) {
  // Set map definition
  myMap.geodata = am4geodata_worldLow;
  myMap.projection = new am4maps.projections.Miller();
  myMap.homeZoomLevel = 1.1;
}
function vicConfigMapSeries(mySeries, unit) {
  // Make map load polygon (like country names) data from GeoJSON
  mySeries.useGeodata = true;
  // Remove Antarctica
  mySeries.mapPolygons.template.tooltipText = "{name} ({id}): \n{value} " + unit;
  // mySeries.mapPolygons.template.fill = am4core.color("#aaa");
}
function vicConfigZoomBtn(myBtn) {
  myBtn.width = 30;
  myBtn.height = 30;
  myBtn.background.cornerRadius(15, 15, 15, 15);
  myBtn.background.fill = VIC_EX_BGCOLOR;
  myBtn.background.stroke = am4core.color("#fff");
  myBtn.background.strokeOpacity = 0.5;
  myBtn.background.states.getKey("hover").properties.strokeOpacity = 1;
}
function vicConfigHomeBtn(myhomeButton, myZoomCtrl) {
  vicConfigZoomBtn(myhomeButton);
  myhomeButton.width = 32;
  myhomeButton.height = 32;
  myhomeButton.icon = new am4core.Sprite();
  myhomeButton.padding(0, 0, 18, 0);
  myhomeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
  myhomeButton.icon.fill = am4core.color("#fff");
  myhomeButton.icon.opacity = 0.5;
  myhomeButton.marginBottom = 5;
  myhomeButton.parent = myZoomCtrl;
  myhomeButton.insertBefore(myZoomCtrl.plusButton);
}
function vicConfigZoomCtrl(myZoomCtrl) {
  myZoomCtrl.align = "left";
  myZoomCtrl.paddingBottom = 60;
  vicConfigZoomBtn(myZoomCtrl.minusButton);
  vicConfigZoomBtn(myZoomCtrl.plusButton);
}
function vicConfigMapGroupData(groupData, chart, unit) {
  var excludedCountries = ["AQ"];
  // Create a series for each group, and populate the above array
  groupData.forEach(function (group) {
    var series = chart.series.push(new am4maps.MapPolygonSeries());
    vicConfigMapSeries(series, unit);
    var includedCountries = [];
    group.data.forEach(function (country) {
      includedCountries.push(country.id);
      excludedCountries.push(country.id);
    });
    series.name = group.name;
    series.include = includedCountries;
    series.fill = am4core.color(group.color);
    // Country shape properties & behaviors
    var mapPolygonTemplate = series.mapPolygons.template;
    // Instead of our custom title, we could also use {name} which comes from geodata  
    mapPolygonTemplate.fill = am4core.color(group.color);
    series.data = JSON.parse(JSON.stringify(group.data));
  });
  // The rest of the world.
  var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
  var worldSeriesName = "world";
  worldSeries.name = worldSeriesName;
  worldSeries.useGeodata = true;
  worldSeries.exclude = excludedCountries;
  worldSeries.fill = am4core.color("fff");
  worldSeries.fillOpacity = 1;
  worldSeries.hiddenInLegend = true;
  worldSeries.mapPolygons.template.fill = am4core.color("#aaa");
}
function vicConfigMapLegend(myLegend) {
  // Legend position
  myLegend.paddingLeft = 0;
  myLegend.paddingRight = 0;
  myLegend.marginBottom = 0;
  myLegend.width = am4core.percent(70);
  myLegend.valign = "bottom";
  myLegend.align = "right";
  myLegend.contentAlign = "right";
  // Legend dots
  myLegend.useDefaultMarker = true;
  myLegend.markers.template.width = VIC_LEGEND_DOT_SIZE;
  myLegend.markers.template.height = VIC_LEGEND_DOT_SIZE;
  myLegend.markers.template.children.getIndex(0).cornerRadius(0, 0, 0, 0);
  //interaction
  myLegend.itemContainers.template.interactionsEnabled = false;
}
//global config
am4core.options.commercialLicense = true;  //remove watermark
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);

//-----------------------------
// main
//-----------------------------
$(document).ready(function() {
  //Board: counter up numbers
  $('.vc-counter').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2500,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  //Board: counter up numbers: for decimal points
  $('.vc-counter-decipoint').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2500,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now * 10) / 10); //decimal points
      }
    });
  });
  //User change pass Modal
  // $('.jsPassShow').append('<span class="jsPassIcon vc-passshow"></span>');  
  $('.jsPassIcon').on('click', function () {
    $(this).toggleClass("vc-passshow, vc-passhide");
    $(this).prev('input').attr('type', function (index, attr) { return attr == 'password' ? 'text' : 'password'; }); 

  });  
  //ACC Subnav
  var SUBNAV_W = 700;
  $('#idAccSubnavToggle').on("click", function(){
    $('#idAccSubnav').slideToggle();
  });
  $('#idAccSubnav a').on("click", function(){
    $('#idAccSubnavToggle').text($(this).text());
    //we don't toggle tab after click a
    //only toggle tab on Mobile size
    // if ($(window).width() < SUBNAV_W){
    //   $('#idAccSubnav').slideToggle();
    // }
  });
  window.addEventListener('resize', function (event) {
    //always show tab on PC size
    if ($(window).width() >= SUBNAV_W) {
      $('#idAccSubnav').show();
    }else{
      $('#idAccSubnav').hide();
    }
  });

  //ACC RWD TAble: click to show more info
  $('.jsTableMobileInfoToggle').on("click", function () {
    $(this).next('.jsTableMobileInfo').toggleClass('vc-hide');
  }); 
  //ACC RWD TAble: click thead to select attribute
  $('.jsTableMobileTheadMenu a').on("click", function () {
    var myDataId = $(this).data("id");
    var myPrevDataId = $(this).siblings('.active').data("id");
    //active item換成我
    $(this).addClass('active');
    $(this).siblings('.active').removeClass('active');
    //thead 文字換成 我的文字
    $(this).closest('.jsTableMobileTheadMenu').prev('.jsTableMobileThead').text($(this).text());
    //vc-col-dynamic 的內容換成 同一個row裡面，我 dataID 的 vc-col-pc-only
    $('.jsTableMobileInfoToggle .vc-col-dynamic').each( function( index ){
      // console.log($(this).siblings('.vc-col-pc-only[data-id=' + myDataId + ']').html());
      $(this).html($(this).siblings('.vc-col-pc-only[data-id=' + myDataId + ']').html());
    });
    $('.jsTableMobileInfo').each(function (index) {
      //mobile info裡面，我的infobox不顯示，因為我已顯示在vc-col-dynamic裡了。
      $(this).find('.vc-info-box[data-id=' + myDataId + ']').addClass('vc-hide');
      $(this).find('.vc-info-box[data-id=' + myPrevDataId + ']').removeClass('vc-hide');
    });
  }); 

  //ACC sidemenu collapse
  $('.jsSideToggle').on("click", function () {
    $('.jsSideMenuEvt').toggleClass('vc-mode-sidehide');
  });
  // w < 992px, ACC sidemenu mask can be clickable
  var MAINNAV_W = 992;
  $('.vc-acc-main-wrapper').before().on("click", function () {
    if ($(window).width() < MAINNAV_W && (!$('.vc-acc-main-wrapper').hasClass('vc-mode-sidehide')) ){
      $('.jsSideMenuEvt').addClass('vc-mode-sidehide');
    }
  });
  //ACC sidemenu datepicker
  var myFormat = 'YYYY/MM/DD HH:mm';
  var default_start = moment().startOf('hour').subtract(32, 'hour');
  var default_end = moment().startOf('hour');
  $('.jsStartTime').text(default_start.format(myFormat));
  $('.jsEndTime').text(default_end.format(myFormat));
  $('input[name="jsAccDaterange"]').daterangepicker({
    startDate: default_start, //起始時間
    endDate: default_end, //迄止時間
    minDate: '2019/01/01 23:00',
    maxDate: default_end, //迄止時間
    timePicker: true, 
    timePicker24Hour: true,
    timePickerIncrement: 15,
    buttonClasses: "btn vc-squarebtn vc-mid",
    applyButtonClasses: "vc-btnYES",
    cancelButtonClasses: "vc-btnNO",
    opens: 'center',
    locale: {
      applyLabel: "套用",
      cancelLabel: "取消",
      format: myFormat,
      daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
      monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
    }
  }, function (start, end, label) {
      console.log("已選擇 開始: " + start.format(myFormat) + '結束: ' + end.format(myFormat));
      $('.jsStartTime').text(start.format(myFormat));
      $('.jsEndTime').text(end.format(myFormat));
  });
  //ACC sidemenu editmode
  $('.jsFilterEditOpen').on("click", function () {
    $('.jsFilterEditEvt').toggleClass('vc-mode-filteredit vc-mode-filterview' );
    $('.jsFilterEditEvt').addClass('active');
    //ACC 
    $('.jsSelect2Id1').select2({
      allowClear: false,
      language: {
        "noResults": function () {
          return "找不到結果";
        }
      }
    });
    $('.jsSelect2Id2').select2({
      allowClear: false,
      language: {
        "noResults": function () {
          return "找不到結果";
        }
      }
    });
    $('.jsSelect2Id3').select2({
      allowClear: false,
      language: {
        "noResults": function () {
          return "找不到結果";
        }
      }
    });
  }); 
  //ACC sidemenu addinput
  var inputIp = "0.0.0.0";
  $('.jsFilterInputAdd').on("click", function () {
    inputIp = $(this).prev('.vc-input').val();
    console.log(inputIp);
    $(this).closest(".vc-filterwgt-body").find(".jsFilterInputUl").append('<li class="select2-selection__choice" title="' + inputIp + '"><span class= "select2-selection__choice__remove" role = "presentation" >×</span >' + inputIp+'</li>');
    $('.jsFilterInputUl .select2-selection__choice__remove').on("click", function () {
      $(this).closest(".select2-selection__choice").remove();
    });
  }); 
 
  $('.jsFilterEditDone').on("click", function () {
    $('.jsFilterEditEvt').toggleClass('vc-mode-filteredit vc-mode-filterview');
  }); 
  $('.jsFilterOnOff').on("click", function () {
    $(this).siblings(".jsFilterOnOff").toggleClass('active');
    $(this).toggleClass('active');
  });   

  //ACC chart switch
  $('.jsChartSwitch').on("click", function () {
    if ( !$(this).hasClass('active') ){
      $(this).addClass('active');
      $(this).siblings(".jsChartSwitch").removeClass('active');
      console.log("ACC chartId: " + $(this).data('id'));
      $($(this).data('id')).removeClass('hide');
      $($(this).data('id')).siblings(".vc-amchart-div").addClass('hide');
    }
  }); 

    // //goTop button control
    // $('.js-btn-gotop').on('click', function (e) {
    //     e.preventDefault();
    //     $('html, body').animate({ scrollTop: 0 }, 'slow');
    // });


}); //document ready 