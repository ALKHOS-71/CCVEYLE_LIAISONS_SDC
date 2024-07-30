var size = 0;
var placement = 'point';
function categories_LIAISONSCYCLABLES_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '1 - LIAISON COMMUNAUTAIRE STRUCTURANTE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(235,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2 - AUTRE LIAISON COMMUNAUTAIRE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,23,116,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '3 - LIAISON COMMUNALE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(4,170,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_LIAISONSCYCLABLES_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("TYPE ITINE");
    var labelText = "";
    size = 0;
    var labelFont = "11.700000000000001px \'Arial\', sans-serif";
    var labelFill = "#0123ff";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_LIAISONSCYCLABLES_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
