/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":14,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Layers shifter","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Slides","preferredSize":[200,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-3":{"id":3,"type":"VerticalTabbedPanel","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[150,0],"tabNavWidth":0,"margins":0,"alignment":null,"selection":4}},"item-4":{"id":4,"type":"Tab","parentId":3,"style":{"enabled":true,"varName":null,"text":"Slide 1","orientation":"column","spacing":5,"alignChildren":["left","top"]}},"item-5":{"id":5,"type":"Tab","parentId":3,"style":{"enabled":true,"varName":null,"text":"Slide 2","orientation":"column","spacing":16,"alignChildren":["fill","top"]}},"item-11":{"id":11,"type":"Button","parentId":0,"style":{"enabled":true,"varName":null,"text":"Shift","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-12":{"id":12,"type":"StaticText","parentId":14,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"StaticText","justify":"left","preferredSize":[0,0],"alignment":"left","helpTip":null}},"item-13":{"id":13,"type":"EditText","parentId":14,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"EditText","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Global settings","preferredSize":[200,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"left"}},"item-15":{"id":15,"type":"StaticText","parentId":14,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Layers name","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"EditText","parentId":14,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"txt,img","justify":"left","preferredSize":[150,0],"alignment":null,"helpTip":null}},"item-17":{"id":17,"type":"StaticText","parentId":14,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Appear txt delay","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-18":{"id":18,"type":"EditText","parentId":14,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"500","justify":"left","preferredSize":[150,0],"alignment":"left","helpTip":null}},"item-19":{"id":19,"type":"Checkbox","parentId":4,"style":{"enabled":true,"varName":null,"text":"Multitext","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-20":{"id":20,"type":"Button","parentId":1,"style":{"enabled":true,"varName":null,"text":"+","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-21":{"id":21,"type":"Button","parentId":1,"style":{"enabled":true,"varName":null,"text":"-","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-22":{"id":22,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Duration","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-23":{"id":23,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"4,3","justify":"left","preferredSize":[120,0],"alignment":null,"helpTip":null}},"item-24":{"id":24,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Leave text","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-25":{"id":25,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1","justify":"left","preferredSize":[120,0],"alignment":null,"helpTip":null}},"item-26":{"id":26,"type":"Divider","parentId":4,"style":{"enabled":true,"varName":null}},"item-27":{"id":27,"type":"Divider","parentId":4,"style":{"enabled":true,"varName":null}}},"order":[0,14,15,16,17,18,12,13,1,3,4,19,26,22,23,27,24,25,5,20,21,11],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/


// DIALOG
// ======
var dialog = new Window("dialog");
dialog.text = "Layers shifter";
dialog.orientation = "column";
dialog.alignChildren = ["center", "top"];
dialog.spacing = 10;
dialog.margins = 16;

// PANEL1
// ======
var panelGlobalSettings = dialog.add("panel", undefined, undefined, {name: "panel1"});
panelGlobalSettings.text = "Global settings";
panelGlobalSettings.preferredSize.width = 200;
panelGlobalSettings.orientation = "column";
panelGlobalSettings.alignChildren = ["left", "top"];
panelGlobalSettings.spacing = 10;
panelGlobalSettings.margins = 10;
panelGlobalSettings.alignment = ["left", "top"];

var statictextName = panelGlobalSettings.add("statictext", undefined, undefined, {name: "statictext1"});
statictextName.text = "Layers name";

var edittextType = panelGlobalSettings.add('edittext {properties: {name: "edittext1"}}');
edittextType.text = "txt,img";
edittextType.preferredSize.width = 150;

var statictextOverlap = panelGlobalSettings.add("statictext", undefined, undefined, {name: "statictext2"});
statictextOverlap.text = "Overlap layers";

var edittextOverlap = panelGlobalSettings.add('edittext {properties: {name: "edittext2"}}');
edittextOverlap.text = "0.5";
edittextOverlap.preferredSize.width = 150;
edittextOverlap.alignment = ["left", "top"];

var statictextAppearTime = panelGlobalSettings.add("statictext", undefined, undefined, {name: "statictext3"});
statictextAppearTime.text = "Appear time";
statictextAppearTime.alignment = ["left", "top"];

var edittextAppearTime = panelGlobalSettings.add('edittext {properties: {name: "edittext3"}}');
edittextAppearTime.text = "0.8";
edittextAppearTime.preferredSize.width = 150;
edittextAppearTime.alignment = ["left", "top"];

// PANEL2
// ======
var panelSlides = dialog.add("panel", undefined, undefined, {name: "panel2"});
panelSlides.text = "Slides";
panelSlides.preferredSize.width = 200;
panelSlides.orientation = "column";
panelSlides.alignChildren = ["left", "top"];
panelSlides.spacing = 10;
panelSlides.margins = 10;


// VERTICALTABBEDPANEL1
// ====================
var verticaltabbedSlides = panelSlides.add("group", undefined, undefined, {name: "verticaltabbedpanel1"});
verticaltabbedSlides.alignChildren = ["left", "fill"];
var verticaltabbedSlides_nav = verticaltabbedSlides.add("listbox", undefined, ['Slide 1', 'Slide 2']);


var verticaltabbedSlides_innerwrap = verticaltabbedSlides.add("group")
verticaltabbedSlides_innerwrap.alignment = ["fill", "fill"];
verticaltabbedSlides_innerwrap.orientation = ["stack"];
verticaltabbedSlides.preferredSize.width = 150;

// TAB1
// ====
var tabOne = verticaltabbedSlides_innerwrap.add("group", undefined, {name: "tab1"});
tabOne.text = "Slide 1";
tabOne.orientation = "column";
tabOne.alignChildren = ["left", "top"];
tabOne.spacing = 5;
tabOne.margins = 0;

var checkboxTabOne = tabOne.add("checkbox", undefined, undefined, {name: "checkbox1"});
checkboxTabOne.text = "Multitext";
checkboxTabOne.value = true;

var dividerOneTabOne = tabOne.add("panel", undefined, undefined, {name: "divider1"});
dividerOneTabOne.alignment = "fill";

var statictextDurTabOne = tabOne.add("statictext", undefined, undefined, {name: "statictext4"});
statictextDurTabOne.text = "Duration";

var edittextDurTabOne = tabOne.add('edittext {properties: {name: "edittext4"}}');
edittextDurTabOne.text = "4,3";
edittextDurTabOne.preferredSize.width = 120;

var dividerTwoTabOne = tabOne.add("panel", undefined, undefined, {name: "divider2"});
dividerTwoTabOne.alignment = "fill";

var statictextLeaveTabOne = tabOne.add("statictext", undefined, undefined, {name: "statictext5"});
statictextLeaveTabOne.text = "Leave text";

var edittextLeaveText = tabOne.add('edittext {properties: {name: "edittext5"}}');
edittextLeaveText.text = "1";
edittextLeaveText.preferredSize.width = 120;

// TAB2
// ====
var tabTwo = verticaltabbedSlides_innerwrap.add("group", undefined, {name: "tab2"});
tabTwo.text = "Slide 2";
tabTwo.orientation = "column";
tabTwo.alignChildren = ["fill", "top"];
tabTwo.spacing = 16;
tabTwo.margins = 0;

var checkboxTabTwo = tabTwo.add("checkbox", undefined, undefined, {name: "checkbox1"});
checkboxTabTwo.text = "Multitext";
checkboxTabTwo.value = true;

var dividerOneTabTwo = tabTwo.add("panel", undefined, undefined, {name: "divider1"});
dividerOneTabTwo.alignment = "fill";

var statictextDurTabTwo = tabTwo.add("statictext", undefined, undefined, {name: "statictext4"});
statictextDurTabTwo.text = "Duration";

var edittextDurTabTwo = tabTwo.add('edittext {properties: {name: "edittext4"}}');
edittextDurTabTwo.text = "4,5";
edittextDurTabTwo.preferredSize.width = 120;

var dividerTwoTabTwo = tabTwo.add("panel", undefined, undefined, {name: "divider2"});
dividerTwoTabTwo.alignment = "fill";

var statictextLeaveTabTwo = tabTwo.add("statictext", undefined, undefined, {name: "statictext5"});
statictextLeaveTabTwo.text = "Leave text";

var edittextLeaveTabTwo = tabTwo.add('edittext {properties: {name: "edittext5"}}');
edittextLeaveTabTwo.text = "2";
edittextLeaveTabTwo.preferredSize.width = 120;

// VERTICALTABBEDPANEL1
// ====================
verticaltabbedpanelSlides_tabs = [tabOne, tabTwo];


for (var i = 0; i < verticaltabbedpanelSlides_tabs.length; i++) {
    verticaltabbedpanelSlides_tabs[i].orientation = 'column';
    verticaltabbedpanelSlides_tabs[i].alignChildren = 'fill';
    verticaltabbedpanelSlides_tabs[i].alignment = ['fill', 'fill'];
    verticaltabbedpanelSlides_tabs[i].visible = false;
}


verticaltabbedSlides_nav.onChange = showTab_verticaltabbedpanel1;

function showTab_verticaltabbedpanel1() {
    if (verticaltabbedSlides_nav.selection !== null) {
        for (var i = verticaltabbedpanelSlides_tabs.length - 1; i >= 0; i--) {
            verticaltabbedpanelSlides_tabs[i].visible = false;
        }
        verticaltabbedpanelSlides_tabs[verticaltabbedSlides_nav.selection.index].visible = true;
    }
}

verticaltabbedSlides_nav.selection = 0;
showTab_verticaltabbedpanel1()

// PANEL2
// ======

var groupButton = panelSlides.add('group')
groupButton.orientation = "row"

var button1 = groupButton.add("button", undefined, undefined, {name: "button1"});
button1.text = "+";
button1.alignment = ["fill", "top"];

button1.onClick = function () {

    var newTabNumber = verticaltabbedpanelSlides_tabs.length + 1;

    var newTab = verticaltabbedSlides_innerwrap.add("group", undefined, {name: "tab" + newTabNumber});
    newTab.text = "Slide " + newTabNumber;
    newTab.orientation = "column";
    newTab.alignChildren = ["left", 'top'];
    newTab.spacing = 10;
    newTab.margins = 10;


    var nameSlide = 'Slide ' + newTabNumber

    var divider13 = newTab.add("panel", undefined, undefined, {name: "divider" + newTabNumber});
    divider13.alignment = "fill";

    var statictext43 = newTab.add("statictext", undefined, undefined, {name: "statictext4" + newTabNumber});
    statictext43.text = "Duration";

    var edittextSubsequence = newTab.add('edittext {properties: {name: "edittext4"}}');
    edittextSubsequence.text = "4,3";
    edittextSubsequence.preferredSize.width = 120;

    var divider23 = newTab.add("panel", undefined, undefined, {name: "divider2" + newTabNumber});
    divider23.alignment = "fill";

    var statictext3 = newTab.add("statictext", undefined, undefined, {name: "statictext5" + newTabNumber});
    statictext3.text = "Leave text";

    var edittext3 = newTab.add('edittext {properties: {name: "edittext5"}}');
    edittext3.text = "1";
    edittext3.preferredSize.width = 120;

    verticaltabbedpanelSlides_tabs.push(newTab);
    verticaltabbedSlides_nav.add('item', nameSlide);


}


var button2 = groupButton.add("button", undefined, undefined, {name: "button2"});
button2.text = "-";
button2.alignment = ["fill", "top"];

button2.onClick = function () {
    if (verticaltabbedSlides_nav.selection !== null) {
        var selectedIndex = verticaltabbedSlides_nav.selection.index;
        verticaltabbedSlides_innerwrap.remove(verticaltabbedpanelSlides_tabs[selectedIndex]);
        verticaltabbedSlides_nav.remove(selectedIndex);
        verticaltabbedpanelSlides_tabs.splice(selectedIndex, 1);

        if (verticaltabbedpanelSlides_tabs.length > 0) {
            verticaltabbedSlides_nav.selection = 0;
            showTab_verticaltabbedpanel1();
        }
    }
}


var button3 = dialog.add("button", undefined, undefined, {name: "button3"});
button3.text = "Shift";
button3.alignment = ["fill", "top"];


button3.onClick = function () {
    var comp = app.project.activeItem;


    var arrDuration = edittextDurTabOne.text.split(",");
    var arrType = edittextType.text.split(',');

    var numberOverlap = parseFloat(edittextOverlap.text)


    if (!comp || !(comp instanceof CompItem)) {
        alert("Please make sure you have an active composition selected.");
    } else {
        app.beginUndoGroup("Find Layers");


        for (var i = 0; i < arrType.length; i++) {
            var tempTime = 0.0
            var arrLayer = []
            for (var j = comp.layers.length; j >= 1; j--) {
                var layer = comp.layer(j);
                var regex = new RegExp(arrType[i]);

                if (layer.name.match(regex)) {
                    arrLayer.push(layer)
                }
            }
            for (var k = 0; k < arrLayer.length; k++) {
                arrLayer[k].startTime = tempTime;
                arrLayer[k].outPoint = tempTime + (arrDuration[k] ? parseFloat(arrDuration[k]) : parseFloat(arrDuration[arrDuration.length - 1]))
                tempTime = arrLayer[k].outPoint - numberOverlap;
            }
            if (checkboxTabOne.value) {
                arrLayer[parseInt(edittextLeaveText.text) - 1].outPoint = arrLayer[arrLayer.length - 1].outPoint
            }
        }

        app.endUndoGroup();
    }
}


dialog.show();

