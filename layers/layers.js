var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_COMMUNECCVEYLE_1 = new ol.format.GeoJSON();
var features_COMMUNECCVEYLE_1 = format_COMMUNECCVEYLE_1.readFeatures(json_COMMUNECCVEYLE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNECCVEYLE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNECCVEYLE_1.addFeatures(features_COMMUNECCVEYLE_1);
var lyr_COMMUNECCVEYLE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNECCVEYLE_1, 
                style: style_COMMUNECCVEYLE_1,
                popuplayertitle: "COMMUNE CC VEYLE",
                interactive: false,
                    title: '<img src="styles/legend/COMMUNECCVEYLE_1.png" /> COMMUNE CC VEYLE'
                });
var format_CCVEYLE_2 = new ol.format.GeoJSON();
var features_CCVEYLE_2 = format_CCVEYLE_2.readFeatures(json_CCVEYLE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCVEYLE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCVEYLE_2.addFeatures(features_CCVEYLE_2);
var lyr_CCVEYLE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCVEYLE_2, 
                style: style_CCVEYLE_2,
                popuplayertitle: "CC VEYLE",
                interactive: false,
                    title: '<img src="styles/legend/CCVEYLE_2.png" /> CC VEYLE'
                });
var format_VOIEBLEUE_3 = new ol.format.GeoJSON();
var features_VOIEBLEUE_3 = format_VOIEBLEUE_3.readFeatures(json_VOIEBLEUE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOIEBLEUE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOIEBLEUE_3.addFeatures(features_VOIEBLEUE_3);
var lyr_VOIEBLEUE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOIEBLEUE_3, 
                style: style_VOIEBLEUE_3,
                popuplayertitle: "VOIE BLEUE",
                interactive: false,
                    title: '<img src="styles/legend/VOIEBLEUE_3.png" /> VOIE BLEUE'
                });
var format_LIAISONSCYCLABLES_4 = new ol.format.GeoJSON();
var features_LIAISONSCYCLABLES_4 = format_LIAISONSCYCLABLES_4.readFeatures(json_LIAISONSCYCLABLES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIAISONSCYCLABLES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIAISONSCYCLABLES_4.addFeatures(features_LIAISONSCYCLABLES_4);
var lyr_LIAISONSCYCLABLES_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIAISONSCYCLABLES_4, 
                style: style_LIAISONSCYCLABLES_4,
                popuplayertitle: "LIAISONS CYCLABLES",
                interactive: true,
    title: 'LIAISONS CYCLABLES<br />\
    <img src="styles/legend/LIAISONSCYCLABLES_4_0.png" /> 1 - LIAISON COMMUNAUTAIRE STRUCTURANTE<br />\
    <img src="styles/legend/LIAISONSCYCLABLES_4_1.png" /> 2 - AUTRE LIAISON COMMUNAUTAIRE<br />\
    <img src="styles/legend/LIAISONSCYCLABLES_4_2.png" /> 3 - LIAISON COMMUNALE<br />'
        });
var format_Numrodeliaisons_5 = new ol.format.GeoJSON();
var features_Numrodeliaisons_5 = format_Numrodeliaisons_5.readFeatures(json_Numrodeliaisons_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Numrodeliaisons_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Numrodeliaisons_5.addFeatures(features_Numrodeliaisons_5);
var lyr_Numrodeliaisons_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Numrodeliaisons_5, 
                style: style_Numrodeliaisons_5,
                popuplayertitle: "Numéro de liaisons",
                interactive: false,
                    title: '<img src="styles/legend/Numrodeliaisons_5.png" /> Numéro de liaisons'
                });
var format_POINTSDURS_6 = new ol.format.GeoJSON();
var features_POINTSDURS_6 = format_POINTSDURS_6.readFeatures(json_POINTSDURS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POINTSDURS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POINTSDURS_6.addFeatures(features_POINTSDURS_6);
var lyr_POINTSDURS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POINTSDURS_6, 
                style: style_POINTSDURS_6,
                popuplayertitle: "POINTS DURS",
                interactive: true,
                    title: '<img src="styles/legend/POINTSDURS_6.png" /> POINTS DURS'
                });

lyr_OpenStreetMap_0.setVisible(true);lyr_COMMUNECCVEYLE_1.setVisible(true);lyr_CCVEYLE_2.setVisible(true);lyr_VOIEBLEUE_3.setVisible(true);lyr_LIAISONSCYCLABLES_4.setVisible(true);lyr_Numrodeliaisons_5.setVisible(true);lyr_POINTSDURS_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_COMMUNECCVEYLE_1,lyr_CCVEYLE_2,lyr_VOIEBLEUE_3,lyr_LIAISONSCYCLABLES_4,lyr_Numrodeliaisons_5,lyr_POINTSDURS_6];
lyr_COMMUNECCVEYLE_1.set('fieldAliases', {'ID': 'ID', 'STATUT': 'STATUT', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'CODE_EPCI': 'CODE_EPCI', 'NOM_COM_M': 'NOM_COM_M', 'POPULATION': 'POPULATION', 'TYPE': 'TYPE', 'NOM_COM': 'NOM_COM', });
lyr_CCVEYLE_2.set('fieldAliases', {'ID': 'ID', 'CODE_EPCI': 'CODE_EPCI', 'NOM_EPCI': 'NOM_EPCI', 'TYPE_EPCI': 'TYPE_EPCI', });
lyr_VOIEBLEUE_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LIAISONSCYCLABLES_4.set('fieldAliases', {'NUMERO DE': 'NUMERO DE', 'ID': 'ID', 'PHOTO': 'PHOTO', 'COMMUNE': 'COMMUNE', 'TYPE ITINE': 'TYPE ITINE', 'DETAIL ITI': 'DETAIL ITI', 'VARIANTE': 'VARIANTE', 'COMMUN A L': 'COMMUN A L', 'PT_DUR_LIN': 'PT_DUR_LIN', 'STATUT': 'STATUT', 'TYPE D\'EMP': 'TYPE D\'EMP', 'Largeur ch': 'Largeur ch', 'Revêtemen': 'Revêtemen', 'Praticabil': 'Praticabil', 'Largeur ac': 'Largeur ac', 'Nature acc': 'Nature acc', 'Largeur _1': 'Largeur _1', 'Nature a_1': 'Nature a_1', 'LINEAIRE': 'LINEAIRE', 'COMMENTAIR': 'COMMENTAIR', 'AMGT PRECO': 'AMGT PRECO', 'DIRECTION': 'DIRECTION', 'Revetement': 'Revetement', 'Largeur am': 'Largeur am', 'Détail et': 'Détail et', 'PROFIL TYP': 'PROFIL TYP', 'PU€HT': 'PU€HT', 'PLUS/MOINS': 'PLUS/MOINS', 'PLUS/MOI_1': 'PLUS/MOI_1', 'TOTAL €': 'TOTAL €', 'Acq. Fonc.': 'Acq. Fonc.', 'MOE Aléas': 'MOE Aléas', 'COUT TOTAL': 'COUT TOTAL', 'Maîtrise': 'Maîtrise', 'Coût comm': 'Coût comm', 'Coût co_1': 'Coût co_1', 'AMGT PRE_1': 'AMGT PRE_1', 'DIRECTION_': 'DIRECTION_', 'Reveteme_1': 'Reveteme_1', 'Largeur _2': 'Largeur _2', 'Détail _1': 'Détail _1', 'PROFIL T_1': 'PROFIL T_1', 'PU€HT_1': 'PU€HT_1', 'PLUS/MOI_2': 'PLUS/MOI_2', 'PLUS/MOI_3': 'PLUS/MOI_3', 'TOTAL ��_1': 'TOTAL ��_1', 'Acq. Fon_1': 'Acq. Fon_1', 'MOE Alé_1': 'MOE Alé_1', 'COUT TOT_1': 'COUT TOT_1', 'Maîtris_1': 'Maîtris_1', 'Coût co_2': 'Coût co_2', 'Coût co_3': 'Coût co_3', });
lyr_Numrodeliaisons_5.set('fieldAliases', {'NUMERO': 'NUMERO', 'ML': 'ML', 'DESIGNAT°': 'DESIGNAT°', 'POLE1': 'POLE1', 'POLE2': 'POLE2', 'REMARQUE': 'REMARQUE', 'TYPE': 'TYPE', 'SOURCE': 'SOURCE', 'GROUPE': 'GROUPE', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'auxiliar_2': 'auxiliar_2', });
lyr_POINTSDURS_6.set('fieldAliases', {'NUMERO DE': 'NUMERO DE', 'ID': 'ID', 'PHOTO': 'PHOTO', 'LIEN PHOTO': 'LIEN PHOTO', 'COMMUNE': 'COMMUNE', 'TYPE ITINE': 'TYPE ITINE', 'DETAIL ITI': 'DETAIL ITI', 'VARIANTE': 'VARIANTE', 'COMMUN A L': 'COMMUN A L', 'PT_DUR_LIN': 'PT_DUR_LIN', 'STATUT': 'STATUT', 'TYPE D\'EMP': 'TYPE D\'EMP', 'TYPE PT DU': 'TYPE PT DU', 'Largeur ch': 'Largeur ch', 'Revêtemen': 'Revêtemen', 'Praticabil': 'Praticabil', 'Largeur ac': 'Largeur ac', 'Nature acc': 'Nature acc', 'Largeur _1': 'Largeur _1', 'Nature a_1': 'Nature a_1', 'LINEAIRE': 'LINEAIRE', 'COMMENTAIR': 'COMMENTAIR', 'AMGT PRECO': 'AMGT PRECO', 'DIRECTION': 'DIRECTION', 'Revetement': 'Revetement', 'Largeur am': 'Largeur am', 'Détail et': 'Détail et', 'PROFIL TYP': 'PROFIL TYP', 'PU€HT': 'PU€HT', 'PLUS/MOINS': 'PLUS/MOINS', 'PLUS/MOI_1': 'PLUS/MOI_1', 'TOTAL €': 'TOTAL €', 'Acq. Fonc.': 'Acq. Fonc.', 'MOE Aléas': 'MOE Aléas', 'COUT TOTAL': 'COUT TOTAL', 'Maîtrise': 'Maîtrise', 'Coût comm': 'Coût comm', 'Coût co_1': 'Coût co_1', 'AMGT PRE_1': 'AMGT PRE_1', 'DIRECTION_': 'DIRECTION_', 'Reveteme_1': 'Reveteme_1', 'Largeur _2': 'Largeur _2', 'Détail _1': 'Détail _1', 'PROFIL T_1': 'PROFIL T_1', 'PU€HT_1': 'PU€HT_1', 'PLUS/MOI_2': 'PLUS/MOI_2', 'PLUS/MOI_3': 'PLUS/MOI_3', 'TOTAL ��_1': 'TOTAL ��_1', 'Acq. Fon_1': 'Acq. Fon_1', 'MOE Alé_1': 'MOE Alé_1', 'COUT TOT_1': 'COUT TOT_1', 'Maîtris_1': 'Maîtris_1', 'Coût co_2': 'Coût co_2', 'Coût co_3': 'Coût co_3', });
lyr_COMMUNECCVEYLE_1.set('fieldImages', {'ID': 'TextEdit', 'STATUT': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'CODE_EPCI': 'TextEdit', 'NOM_COM_M': 'TextEdit', 'POPULATION': 'TextEdit', 'TYPE': 'TextEdit', 'NOM_COM': 'TextEdit', });
lyr_CCVEYLE_2.set('fieldImages', {'ID': 'TextEdit', 'CODE_EPCI': 'TextEdit', 'NOM_EPCI': 'TextEdit', 'TYPE_EPCI': 'TextEdit', });
lyr_VOIEBLEUE_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_LIAISONSCYCLABLES_4.set('fieldImages', {'NUMERO DE': 'TextEdit', 'ID': 'TextEdit', 'PHOTO': 'TextEdit', 'COMMUNE': 'TextEdit', 'TYPE ITINE': 'TextEdit', 'DETAIL ITI': 'TextEdit', 'VARIANTE': 'TextEdit', 'COMMUN A L': 'TextEdit', 'PT_DUR_LIN': 'TextEdit', 'STATUT': 'TextEdit', 'TYPE D\'EMP': 'TextEdit', 'Largeur ch': 'TextEdit', 'Revêtemen': 'TextEdit', 'Praticabil': 'TextEdit', 'Largeur ac': 'TextEdit', 'Nature acc': 'TextEdit', 'Largeur _1': 'TextEdit', 'Nature a_1': 'TextEdit', 'LINEAIRE': 'TextEdit', 'COMMENTAIR': 'TextEdit', 'AMGT PRECO': 'TextEdit', 'DIRECTION': 'TextEdit', 'Revetement': 'TextEdit', 'Largeur am': 'TextEdit', 'Détail et': 'TextEdit', 'PROFIL TYP': 'TextEdit', 'PU€HT': 'TextEdit', 'PLUS/MOINS': 'TextEdit', 'PLUS/MOI_1': 'TextEdit', 'TOTAL €': 'TextEdit', 'Acq. Fonc.': 'TextEdit', 'MOE Aléas': 'TextEdit', 'COUT TOTAL': 'TextEdit', 'Maîtrise': 'TextEdit', 'Coût comm': 'TextEdit', 'Coût co_1': 'TextEdit', 'AMGT PRE_1': 'TextEdit', 'DIRECTION_': 'TextEdit', 'Reveteme_1': 'TextEdit', 'Largeur _2': 'TextEdit', 'Détail _1': 'TextEdit', 'PROFIL T_1': 'TextEdit', 'PU€HT_1': 'TextEdit', 'PLUS/MOI_2': 'TextEdit', 'PLUS/MOI_3': 'TextEdit', 'TOTAL ��_1': 'TextEdit', 'Acq. Fon_1': 'TextEdit', 'MOE Alé_1': 'TextEdit', 'COUT TOT_1': 'TextEdit', 'Maîtris_1': 'TextEdit', 'Coût co_2': 'TextEdit', 'Coût co_3': 'TextEdit', });
lyr_Numrodeliaisons_5.set('fieldImages', {'NUMERO': 'TextEdit', 'ML': 'TextEdit', 'DESIGNAT°': 'TextEdit', 'POLE1': 'TextEdit', 'POLE2': 'TextEdit', 'REMARQUE': 'TextEdit', 'TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'GROUPE': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', 'auxiliar_2': 'TextEdit', });
lyr_POINTSDURS_6.set('fieldImages', {'NUMERO DE': 'TextEdit', 'ID': 'TextEdit', 'PHOTO': 'TextEdit', 'LIEN PHOTO': 'TextEdit', 'COMMUNE': 'TextEdit', 'TYPE ITINE': 'TextEdit', 'DETAIL ITI': 'TextEdit', 'VARIANTE': 'TextEdit', 'COMMUN A L': 'TextEdit', 'PT_DUR_LIN': 'TextEdit', 'STATUT': 'TextEdit', 'TYPE D\'EMP': 'TextEdit', 'TYPE PT DU': 'TextEdit', 'Largeur ch': 'TextEdit', 'Revêtemen': 'TextEdit', 'Praticabil': 'TextEdit', 'Largeur ac': 'TextEdit', 'Nature acc': 'TextEdit', 'Largeur _1': 'TextEdit', 'Nature a_1': 'TextEdit', 'LINEAIRE': 'TextEdit', 'COMMENTAIR': 'TextEdit', 'AMGT PRECO': 'TextEdit', 'DIRECTION': 'TextEdit', 'Revetement': 'TextEdit', 'Largeur am': 'TextEdit', 'Détail et': 'TextEdit', 'PROFIL TYP': 'TextEdit', 'PU€HT': 'TextEdit', 'PLUS/MOINS': 'TextEdit', 'PLUS/MOI_1': 'TextEdit', 'TOTAL €': 'TextEdit', 'Acq. Fonc.': 'TextEdit', 'MOE Aléas': 'TextEdit', 'COUT TOTAL': 'TextEdit', 'Maîtrise': 'TextEdit', 'Coût comm': 'TextEdit', 'Coût co_1': 'TextEdit', 'AMGT PRE_1': 'TextEdit', 'DIRECTION_': 'TextEdit', 'Reveteme_1': 'TextEdit', 'Largeur _2': 'TextEdit', 'Détail _1': 'TextEdit', 'PROFIL T_1': 'TextEdit', 'PU€HT_1': 'TextEdit', 'PLUS/MOI_2': 'TextEdit', 'PLUS/MOI_3': 'TextEdit', 'TOTAL ��_1': 'TextEdit', 'Acq. Fon_1': 'TextEdit', 'MOE Alé_1': 'TextEdit', 'COUT TOT_1': 'TextEdit', 'Maîtris_1': 'TextEdit', 'Coût co_2': 'TextEdit', 'Coût co_3': 'TextEdit', });
lyr_COMMUNECCVEYLE_1.set('fieldLabels', {'ID': 'no label', 'STATUT': 'no label', 'INSEE_COM': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'CODE_EPCI': 'no label', 'NOM_COM_M': 'no label', 'POPULATION': 'no label', 'TYPE': 'no label', 'NOM_COM': 'no label', });
lyr_CCVEYLE_2.set('fieldLabels', {'ID': 'no label', 'CODE_EPCI': 'no label', 'NOM_EPCI': 'no label', 'TYPE_EPCI': 'no label', });
lyr_VOIEBLEUE_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LIAISONSCYCLABLES_4.set('fieldLabels', {'NUMERO DE': 'inline label - always visible', 'ID': 'inline label - always visible', 'PHOTO': 'inline label - always visible', 'COMMUNE': 'inline label - always visible', 'TYPE ITINE': 'inline label - always visible', 'DETAIL ITI': 'inline label - always visible', 'VARIANTE': 'inline label - always visible', 'COMMUN A L': 'inline label - always visible', 'PT_DUR_LIN': 'inline label - always visible', 'STATUT': 'inline label - always visible', 'TYPE D\'EMP': 'inline label - always visible', 'Largeur ch': 'inline label - always visible', 'Revêtemen': 'inline label - always visible', 'Praticabil': 'inline label - always visible', 'Largeur ac': 'inline label - always visible', 'Nature acc': 'inline label - always visible', 'Largeur _1': 'inline label - always visible', 'Nature a_1': 'inline label - always visible', 'LINEAIRE': 'inline label - always visible', 'COMMENTAIR': 'inline label - always visible', 'AMGT PRECO': 'inline label - always visible', 'DIRECTION': 'inline label - always visible', 'Revetement': 'inline label - always visible', 'Largeur am': 'inline label - always visible', 'Détail et': 'inline label - always visible', 'PROFIL TYP': 'inline label - always visible', 'PU€HT': 'inline label - always visible', 'PLUS/MOINS': 'inline label - always visible', 'PLUS/MOI_1': 'inline label - always visible', 'TOTAL €': 'inline label - always visible', 'Acq. Fonc.': 'inline label - always visible', 'MOE Aléas': 'inline label - always visible', 'COUT TOTAL': 'inline label - always visible', 'Maîtrise': 'inline label - always visible', 'Coût comm': 'inline label - always visible', 'Coût co_1': 'inline label - always visible', 'AMGT PRE_1': 'inline label - always visible', 'DIRECTION_': 'inline label - always visible', 'Reveteme_1': 'inline label - always visible', 'Largeur _2': 'inline label - always visible', 'Détail _1': 'inline label - always visible', 'PROFIL T_1': 'inline label - always visible', 'PU€HT_1': 'inline label - always visible', 'PLUS/MOI_2': 'inline label - always visible', 'PLUS/MOI_3': 'inline label - always visible', 'TOTAL ��_1': 'inline label - always visible', 'Acq. Fon_1': 'inline label - always visible', 'MOE Alé_1': 'inline label - always visible', 'COUT TOT_1': 'inline label - always visible', 'Maîtris_1': 'inline label - always visible', 'Coût co_2': 'inline label - always visible', 'Coût co_3': 'inline label - always visible', });
lyr_Numrodeliaisons_5.set('fieldLabels', {'NUMERO': 'no label', 'ML': 'no label', 'DESIGNAT°': 'no label', 'POLE1': 'no label', 'POLE2': 'no label', 'REMARQUE': 'no label', 'TYPE': 'no label', 'SOURCE': 'no label', 'GROUPE': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', 'auxiliar_2': 'no label', });
lyr_POINTSDURS_6.set('fieldLabels', {'NUMERO DE': 'inline label - always visible', 'ID': 'inline label - always visible', 'PHOTO': 'inline label - always visible', 'LIEN PHOTO': 'inline label - always visible', 'COMMUNE': 'inline label - always visible', 'TYPE ITINE': 'inline label - always visible', 'DETAIL ITI': 'inline label - always visible', 'VARIANTE': 'inline label - always visible', 'COMMUN A L': 'inline label - always visible', 'PT_DUR_LIN': 'inline label - always visible', 'STATUT': 'inline label - always visible', 'TYPE D\'EMP': 'inline label - always visible', 'TYPE PT DU': 'inline label - always visible', 'Largeur ch': 'inline label - always visible', 'Revêtemen': 'inline label - always visible', 'Praticabil': 'inline label - always visible', 'Largeur ac': 'inline label - always visible', 'Nature acc': 'inline label - always visible', 'Largeur _1': 'inline label - always visible', 'Nature a_1': 'inline label - always visible', 'LINEAIRE': 'inline label - always visible', 'COMMENTAIR': 'inline label - always visible', 'AMGT PRECO': 'inline label - always visible', 'DIRECTION': 'inline label - always visible', 'Revetement': 'inline label - always visible', 'Largeur am': 'inline label - always visible', 'Détail et': 'inline label - always visible', 'PROFIL TYP': 'inline label - always visible', 'PU€HT': 'inline label - always visible', 'PLUS/MOINS': 'inline label - always visible', 'PLUS/MOI_1': 'inline label - always visible', 'TOTAL €': 'inline label - always visible', 'Acq. Fonc.': 'inline label - always visible', 'MOE Aléas': 'inline label - always visible', 'COUT TOTAL': 'inline label - always visible', 'Maîtrise': 'inline label - always visible', 'Coût comm': 'inline label - always visible', 'Coût co_1': 'inline label - always visible', 'AMGT PRE_1': 'inline label - always visible', 'DIRECTION_': 'inline label - always visible', 'Reveteme_1': 'inline label - always visible', 'Largeur _2': 'inline label - always visible', 'Détail _1': 'inline label - always visible', 'PROFIL T_1': 'inline label - always visible', 'PU€HT_1': 'inline label - always visible', 'PLUS/MOI_2': 'inline label - always visible', 'PLUS/MOI_3': 'inline label - always visible', 'TOTAL ��_1': 'inline label - always visible', 'Acq. Fon_1': 'inline label - always visible', 'MOE Alé_1': 'inline label - always visible', 'COUT TOT_1': 'inline label - always visible', 'Maîtris_1': 'inline label - always visible', 'Coût co_2': 'inline label - always visible', 'Coût co_3': 'inline label - always visible', });
lyr_POINTSDURS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});