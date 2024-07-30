var size = 0;
var placement = 'point';

var style_Numrodeliaisons_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "11.700000000000001px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#fafafa";
    var bufferWidth = 5.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("NUMERO") !== null) {
        labelText = String(feature.get("NUMERO"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(225,89,137,0.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.787999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
