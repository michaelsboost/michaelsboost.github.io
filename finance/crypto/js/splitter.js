// var theme = "metro";
var theme = "metrodark";

// initiate splitter
$('#mainSplitter, #leftSplitter, #rightSplitter').jqxSplitter({
  width: "100%",
  height: "100%",
  theme: theme
});
$('#mainSplitter').jqxSplitter({
  panels: [{ size: "70%" }]
});

// splitter orientation
$('#leftSplitter, #rightSplitter').jqxSplitter({
  orientation: 'horizontal'
});

// splitter left column default size
$('#leftSplitter').jqxSplitter({
  panels: [{ size: "70%", collapsible: true }]
});

// splitter right don't collapse ticker
$('#rightSplitter').jqxSplitter({
  panels: [{ size: "50%", collapsible: false }]
});