var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_PourcentageAutres_0 = new ol.format.GeoJSON();
var features_PourcentageAutres_0 = format_PourcentageAutres_0.readFeatures(json_PourcentageAutres_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PourcentageAutres_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PourcentageAutres_0.addFeatures(features_PourcentageAutres_0);var lyr_PourcentageAutres_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PourcentageAutres_0, 
                style: style_PourcentageAutres_0,
    title: 'Pourcentage Autres<br />\
    <img src="styles/legend/PourcentageAutres_0_0.png" />  0 - 21 <br />\
    <img src="styles/legend/PourcentageAutres_0_1.png" />  21 - 42 <br />\
    <img src="styles/legend/PourcentageAutres_0_2.png" />  42 - 63 <br />'
        });var format_PourcentagedAcide_1 = new ol.format.GeoJSON();
var features_PourcentagedAcide_1 = format_PourcentagedAcide_1.readFeatures(json_PourcentagedAcide_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PourcentagedAcide_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PourcentagedAcide_1.addFeatures(features_PourcentagedAcide_1);var lyr_PourcentagedAcide_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PourcentagedAcide_1, 
                style: style_PourcentagedAcide_1,
    title: 'Pourcentage d\'Acide<br />\
    <img src="styles/legend/PourcentagedAcide_1_0.png" />  0 - 20 <br />\
    <img src="styles/legend/PourcentagedAcide_1_1.png" />  20 - 39 <br />\
    <img src="styles/legend/PourcentagedAcide_1_2.png" />  39 - 59 <br />'
        });var format_PourcentagedePhnolique_2 = new ol.format.GeoJSON();
var features_PourcentagedePhnolique_2 = format_PourcentagedePhnolique_2.readFeatures(json_PourcentagedePhnolique_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PourcentagedePhnolique_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PourcentagedePhnolique_2.addFeatures(features_PourcentagedePhnolique_2);var lyr_PourcentagedePhnolique_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PourcentagedePhnolique_2, 
                style: style_PourcentagedePhnolique_2,
    title: 'Pourcentage de Phénolique<br />\
    <img src="styles/legend/PourcentagedePhnolique_2_0.png" />  36 - 57 <br />\
    <img src="styles/legend/PourcentagedePhnolique_2_1.png" />  57 - 79 <br />\
    <img src="styles/legend/PourcentagedePhnolique_2_2.png" />  79 - 100 <br />'
        });var format_PourcentagedePoirier_3 = new ol.format.GeoJSON();
var features_PourcentagedePoirier_3 = format_PourcentagedePoirier_3.readFeatures(json_PourcentagedePoirier_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PourcentagedePoirier_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PourcentagedePoirier_3.addFeatures(features_PourcentagedePoirier_3);var lyr_PourcentagedePoirier_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PourcentagedePoirier_3, 
                style: style_PourcentagedePoirier_3,
    title: 'Pourcentage de Poirier<br />\
    <img src="styles/legend/PourcentagedePoirier_3_0.png" /> 0<br />\
    <img src="styles/legend/PourcentagedePoirier_3_1.png" /> 3<br />\
    <img src="styles/legend/PourcentagedePoirier_3_2.png" /> 26<br />'
        });var format_PourcentagedePommier_4 = new ol.format.GeoJSON();
var features_PourcentagedePommier_4 = format_PourcentagedePommier_4.readFeatures(json_PourcentagedePommier_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PourcentagedePommier_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PourcentagedePommier_4.addFeatures(features_PourcentagedePommier_4);var lyr_PourcentagedePommier_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PourcentagedePommier_4, 
                style: style_PourcentagedePommier_4,
    title: 'Pourcentage de Pommier<br />\
    <img src="styles/legend/PourcentagedePommier_4_0.png" />  74.0 - 82.7 <br />\
    <img src="styles/legend/PourcentagedePommier_4_1.png" />  82.7 - 91.3 <br />\
    <img src="styles/legend/PourcentagedePommier_4_2.png" />  91.3 - 100.0 <br />'
        });var format_NombredAOC_5 = new ol.format.GeoJSON();
var features_NombredAOC_5 = format_NombredAOC_5.readFeatures(json_NombredAOC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NombredAOC_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NombredAOC_5.addFeatures(features_NombredAOC_5);var lyr_NombredAOC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NombredAOC_5, 
                style: style_NombredAOC_5,
    title: 'Nombre d\'AOC <br />\
    <img src="styles/legend/NombredAOC_5_0.png" /> 2<br />\
    <img src="styles/legend/NombredAOC_5_1.png" /> 3<br />'
        });var format_Annedeplantation_6 = new ol.format.GeoJSON();
var features_Annedeplantation_6 = format_Annedeplantation_6.readFeatures(json_Annedeplantation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Annedeplantation_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Annedeplantation_6.addFeatures(features_Annedeplantation_6);var lyr_Annedeplantation_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Annedeplantation_6, 
                style: style_Annedeplantation_6,
    title: 'Année de plantation<br />\
    <img src="styles/legend/Annedeplantation_6_0.png" />  1947 - 1964 <br />\
    <img src="styles/legend/Annedeplantation_6_1.png" />  1964 - 1982 <br />\
    <img src="styles/legend/Annedeplantation_6_2.png" />  1982 - 1999 <br />\
    <img src="styles/legend/Annedeplantation_6_3.png" />  1999 - 2016 <br />'
        });var format_Densitdeplantation_7 = new ol.format.GeoJSON();
var features_Densitdeplantation_7 = format_Densitdeplantation_7.readFeatures(json_Densitdeplantation_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Densitdeplantation_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Densitdeplantation_7.addFeatures(features_Densitdeplantation_7);var lyr_Densitdeplantation_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Densitdeplantation_7, 
                style: style_Densitdeplantation_7,
    title: 'Densité de plantation<br />\
    <img src="styles/legend/Densitdeplantation_7_0.png" />  0 - 333 <br />\
    <img src="styles/legend/Densitdeplantation_7_1.png" />  333 - 667 <br />\
    <img src="styles/legend/Densitdeplantation_7_2.png" />  667 - 1000 <br />'
        });var format_Pourcentagedesurfaceplante_8 = new ol.format.GeoJSON();
var features_Pourcentagedesurfaceplante_8 = format_Pourcentagedesurfaceplante_8.readFeatures(json_Pourcentagedesurfaceplante_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pourcentagedesurfaceplante_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pourcentagedesurfaceplante_8.addFeatures(features_Pourcentagedesurfaceplante_8);var lyr_Pourcentagedesurfaceplante_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pourcentagedesurfaceplante_8, 
                style: style_Pourcentagedesurfaceplante_8,
    title: 'Pourcentage de surface plantée<br />\
    <img src="styles/legend/Pourcentagedesurfaceplante_8_0.png" />  2 - 33 <br />\
    <img src="styles/legend/Pourcentagedesurfaceplante_8_1.png" />  33 - 64 <br />\
    <img src="styles/legend/Pourcentagedesurfaceplante_8_2.png" />  64 - 95 <br />'
        });var format_Nombredevaritprsente_9 = new ol.format.GeoJSON();
var features_Nombredevaritprsente_9 = format_Nombredevaritprsente_9.readFeatures(json_Nombredevaritprsente_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nombredevaritprsente_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Nombredevaritprsente_9.addFeatures(features_Nombredevaritprsente_9);var lyr_Nombredevaritprsente_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nombredevaritprsente_9, 
                style: style_Nombredevaritprsente_9,
    title: 'Nombre de variété présente <br />\
    <img src="styles/legend/Nombredevaritprsente_9_0.png" />  1 - 5 <br />\
    <img src="styles/legend/Nombredevaritprsente_9_1.png" />  5 - 15 <br />\
    <img src="styles/legend/Nombredevaritprsente_9_2.png" />  15 - 34 <br />'
        });

lyr_PourcentageAutres_0.setVisible(true);lyr_PourcentagedAcide_1.setVisible(true);lyr_PourcentagedePhnolique_2.setVisible(true);lyr_PourcentagedePoirier_3.setVisible(true);lyr_PourcentagedePommier_4.setVisible(true);lyr_NombredAOC_5.setVisible(true);lyr_Annedeplantation_6.setVisible(true);lyr_Densitdeplantation_7.setVisible(true);lyr_Pourcentagedesurfaceplante_8.setVisible(true);lyr_Nombredevaritprsente_9.setVisible(true);
var layersList = [baseLayer,lyr_PourcentageAutres_0,lyr_PourcentagedAcide_1,lyr_PourcentagedePhnolique_2,lyr_PourcentagedePoirier_3,lyr_PourcentagedePommier_4,lyr_NombredAOC_5,lyr_Annedeplantation_6,lyr_Densitdeplantation_7,lyr_Pourcentagedesurfaceplante_8,lyr_Nombredevaritprsente_9];
lyr_PourcentageAutres_0.set('fieldAliases', {'IDU': 'IDU', 'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'NOM_VERGER': 'NOM_VERGER', 'CP': 'CP', 'IDVERGER': 'IDVERGER', 'TYPE_AOC': 'TYPE_AOC', 'MODCULTURE': 'MODCULTURE', 'ARBREISOLE': 'ARBREISOLE', 'SURFVERGER': 'SURFVERGER', 'SURFPLANT': 'SURFPLANT', 'P_SURFPLAN': 'P_SURFPLAN', 'TOTALARBRE': 'TOTALARBRE', 'NB_ARBRES': 'NB_ARBRES', 'VERGERDENS': 'VERGERDENS', 'ANNEE': 'ANNEE', 'VERGERRAIS': 'VERGERRAIS', 'VERGERRESP': 'VERGERRESP', 'NBR_AOC': 'NBR_AOC', 'P_POMMES': 'P_POMMES', 'P_POIRES': 'P_POIRES', 'P_PHENOL': 'P_PHENOL', 'P_ACIDE': 'P_ACIDE', 'P_AUTRE': 'P_AUTRE', });
lyr_PourcentagedAcide_1.set('fieldAliases', {'IDU': 'IDU', 'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'NOM_VERGER': 'NOM_VERGER', 'CP': 'CP', 'IDVERGER': 'IDVERGER', 'TYPE_AOC': 'TYPE_AOC', 'MODCULTURE': 'MODCULTURE', 'ARBREISOLE': 'ARBREISOLE', 'SURFVERGER': 'SURFVERGER', 'SURFPLANT': 'SURFPLANT', 'P_SURFPLAN': 'P_SURFPLAN', 'TOTALARBRE': 'TOTALARBRE', 'NB_ARBRES': 'NB_ARBRES', 'VERGERDENS': 'VERGERDENS', 'ANNEE': 'ANNEE', 'VERGERRAIS': 'VERGERRAIS', 'VERGERRESP': 'VERGERRESP', 'NBR_AOC': 'NBR_AOC', 'P_POMMES': 'P_POMMES', 'P_POIRES': 'P_POIRES', 'P_PHENOL': 'P_PHENOL', 'P_ACIDE': 'P_ACIDE', 'P_AUTRE': 'P_AUTRE', });
lyr_PourcentagedePhnolique_2.set('fieldAliases', {'IDU': 'IDU', 'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'NOM_VERGER': 'NOM_VERGER', 'CP': 'CP', 'IDVERGER': 'IDVERGER', 'TYPE_AOC': 'TYPE_AOC', 'MODCULTURE': 'MODCULTURE', 'ARBREISOLE': 'ARBREISOLE', 'SURFVERGER': 'SURFVERGER', 'SURFPLANT': 'SURFPLANT', 'P_SURFPLAN': 'P_SURFPLAN', 'TOTALARBRE': 'TOTALARBRE', 'NB_ARBRES': 'NB_ARBRES', 'VERGERDENS': 'VERGERDENS', 'ANNEE': 'ANNEE', 'VERGERRAIS': 'VERGERRAIS', 'VERGERRESP': 'VERGERRESP', 'NBR_AOC': 'NBR_AOC', 'P_POMMES': 'P_POMMES', 'P_POIRES': 'P_POIRES', 'P_PHENOL': 'P_PHENOL', 'P_ACIDE': 'P_ACIDE', 'P_AUTRE': 'P_AUTRE', });
lyr_PourcentagedePoirier_3.set('fieldAliases', {'IDU': 'IDU', 'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'NOM_VERGER': 'NOM_VERGER', 'CP': 'CP', 'IDVERGER': 'IDVERGER', 'TYPE_AOC': 'TYPE_AOC', 'MODCULTURE': 'MODCULTURE', 'ARBREISOLE': 'ARBREISOLE', 'SURFVERGER': 'SURFVERGER', 'SURFPLANT': 'SURFPLANT', 'P_SURFPLAN': 'P_SURFPLAN', 'TOTALARBRE': 'TOTALARBRE', 'NB_ARBRES': 'NB_ARBRES', 'VERGERDENS': 'VERGERDENS', 'ANNEE': 'ANNEE', 'VERGERRAIS': 'VERGERRAIS', 'VERGERRESP': 'VERGERRESP', 'NBR_AOC': 'NBR_AOC', 'P_POMMES': 'P_POMMES', 'P_POIRES': 'P_POIRES', 'P_PHENOL': 'P_PHENOL', 'P_ACIDE': 'P_ACIDE', 'P_AUTRE': 'P_AUTRE', });
lyr_PourcentagedePommier_4.set('fieldAliases', {'IDU': 'IDU', 'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'NOM_VERGER': 'NOM_VERGER', 'CP': 'CP', 'IDVERGER': 'IDVERGER', 'TYPE_AOC': 'TYPE_AOC', 'MODCULTURE': 'MODCULTURE', 'ARBREISOLE': 'ARBREISOLE', 'SURFVERGER': 'SURFVERGER', 'SURFPLANT': 'SURFPLANT', 'P_SURFPLAN': 'P_SURFPLAN', 'TOTALARBRE': 'TOTALARBRE', 'NB_ARBRES': 'NB_ARBRES', 'VERGERDENS': 'VERGERDENS', 'ANNEE': 'ANNEE', 'VERGERRAIS': 'VERGERRAIS', 'VERGERRESP': 'VERGERRESP', 'NBR_AOC': 'NBR_AOC', 'P_POMMES': 'P_POMMES', 'P_POIRES': 'P_POIRES', 'P_PHENOL': 'P_PHENOL', 'P_ACIDE': 'P_ACIDE', 'P_AUTRE': 'P_AUTRE', });
lyr_NombredAOC_5.set('fieldAliases', {'IDU': 'IDU', 'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'NOM_VERGER': 'NOM_VERGER', 'CP': 'CP', 'IDVERGER': 'IDVERGER', 'TYPE_AOC': 'TYPE_AOC', 'MODCULTURE': 'MODCULTURE', 'ARBREISOLE': 'ARBREISOLE', 'SURFVERGER': 'SURFVERGER', 'SURFPLANT': 'SURFPLANT', 'P_SURFPLAN': 'P_SURFPLAN', 'TOTALARBRE': 'TOTALARBRE', 'NB_ARBRES': 'NB_ARBRES', 'VERGERDENS': 'VERGERDENS', 'ANNEE': 'ANNEE', 'VERGERRAIS': 'VERGERRAIS', 'VERGERRESP': 'VERGERRESP', 'NBR_AOC': 'NBR_AOC', 'P_POMMES': 'P_POMMES', 'P_POIRES': 'P_POIRES', 'P_PHENOL': 'P_PHENOL', 'P_ACIDE': 'P_ACIDE', 'P_AUTRE': 'P_AUTRE', });
lyr_Annedeplantation_6.set('fieldAliases', {'IDU': 'IDU', 'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'NOM_VERGER': 'NOM_VERGER', 'CP': 'CP', 'IDVERGER': 'IDVERGER', 'TYPE_AOC': 'TYPE_AOC', 'MODCULTURE': 'MODCULTURE', 'ARBREISOLE': 'ARBREISOLE', 'SURFVERGER': 'SURFVERGER', 'SURFPLANT': 'SURFPLANT', 'P_SURFPLAN': 'P_SURFPLAN', 'TOTALARBRE': 'TOTALARBRE', 'NB_ARBRES': 'NB_ARBRES', 'VERGERDENS': 'VERGERDENS', 'ANNEE': 'ANNEE', 'VERGERRAIS': 'VERGERRAIS', 'VERGERRESP': 'VERGERRESP', 'NBR_AOC': 'NBR_AOC', 'P_POMMES': 'P_POMMES', 'P_POIRES': 'P_POIRES', 'P_PHENOL': 'P_PHENOL', 'P_ACIDE': 'P_ACIDE', 'P_AUTRE': 'P_AUTRE', });
lyr_Densitdeplantation_7.set('fieldAliases', {'IDU': 'IDU', 'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'NOM_VERGER': 'NOM_VERGER', 'CP': 'CP', 'IDVERGER': 'IDVERGER', 'TYPE_AOC': 'TYPE_AOC', 'MODCULTURE': 'MODCULTURE', 'ARBREISOLE': 'ARBREISOLE', 'SURFVERGER': 'SURFVERGER', 'SURFPLANT': 'SURFPLANT', 'P_SURFPLAN': 'P_SURFPLAN', 'TOTALARBRE': 'TOTALARBRE', 'NB_ARBRES': 'NB_ARBRES', 'VERGERDENS': 'VERGERDENS', 'ANNEE': 'ANNEE', 'VERGERRAIS': 'VERGERRAIS', 'VERGERRESP': 'VERGERRESP', 'NBR_AOC': 'NBR_AOC', 'P_POMMES': 'P_POMMES', 'P_POIRES': 'P_POIRES', 'P_PHENOL': 'P_PHENOL', 'P_ACIDE': 'P_ACIDE', 'P_AUTRE': 'P_AUTRE', });
lyr_Pourcentagedesurfaceplante_8.set('fieldAliases', {'IDU': 'IDU', 'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'NOM_VERGER': 'NOM_VERGER', 'CP': 'CP', 'IDVERGER': 'IDVERGER', 'TYPE_AOC': 'TYPE_AOC', 'MODCULTURE': 'MODCULTURE', 'ARBREISOLE': 'ARBREISOLE', 'SURFVERGER': 'SURFVERGER', 'SURFPLANT': 'SURFPLANT', 'P_SURFPLAN': 'P_SURFPLAN', 'TOTALARBRE': 'TOTALARBRE', 'NB_ARBRES': 'NB_ARBRES', 'VERGERDENS': 'VERGERDENS', 'ANNEE': 'ANNEE', 'VERGERRAIS': 'VERGERRAIS', 'VERGERRESP': 'VERGERRESP', 'NBR_AOC': 'NBR_AOC', 'P_POMMES': 'P_POMMES', 'P_POIRES': 'P_POIRES', 'P_PHENOL': 'P_PHENOL', 'P_ACIDE': 'P_ACIDE', 'P_AUTRE': 'P_AUTRE', });
lyr_Nombredevaritprsente_9.set('fieldAliases', {'IDU': 'IDU', 'NOM_COM': 'NOM_COM', 'INAO': 'INAO', 'NOM_VERGER': 'NOM_VERGER', 'CP': 'CP', 'IDVERGER': 'IDVERGER', 'TYPE_AOC': 'TYPE_AOC', 'MODCULTURE': 'MODCULTURE', 'ARBREISOLE': 'ARBREISOLE', 'SURFVERGER': 'SURFVERGER', 'SURFPLANT': 'SURFPLANT', 'P_SURFPLAN': 'P_SURFPLAN', 'TOTALARBRE': 'TOTALARBRE', 'NB_ARBRES': 'NB_ARBRES', 'VERGERDENS': 'VERGERDENS', 'ANNEE': 'ANNEE', 'VERGERRAIS': 'VERGERRAIS', 'VERGERRESP': 'VERGERRESP', 'NBR_AOC': 'NBR_AOC', 'P_POMMES': 'P_POMMES', 'P_POIRES': 'P_POIRES', 'P_PHENOL': 'P_PHENOL', 'P_ACIDE': 'P_ACIDE', 'P_AUTRE': 'P_AUTRE', });
lyr_PourcentageAutres_0.set('fieldImages', {'IDU': 'Hidden', 'NOM_COM': 'TextEdit', 'INAO': 'Hidden', 'NOM_VERGER': 'TextEdit', 'CP': 'Hidden', 'IDVERGER': 'Hidden', 'TYPE_AOC': 'TextEdit', 'MODCULTURE': 'TextEdit', 'ARBREISOLE': 'TextEdit', 'SURFVERGER': 'Hidden', 'SURFPLANT': 'Hidden', 'P_SURFPLAN': 'Hidden', 'TOTALARBRE': 'Hidden', 'NB_ARBRES': 'Hidden', 'VERGERDENS': 'Hidden', 'ANNEE': 'Hidden', 'VERGERRAIS': 'Hidden', 'VERGERRESP': 'Hidden', 'NBR_AOC': 'Hidden', 'P_POMMES': 'Hidden', 'P_POIRES': 'Hidden', 'P_PHENOL': 'Hidden', 'P_ACIDE': 'Hidden', 'P_AUTRE': 'TextEdit', });
lyr_PourcentagedAcide_1.set('fieldImages', {'IDU': 'Hidden', 'NOM_COM': 'TextEdit', 'INAO': 'Hidden', 'NOM_VERGER': 'TextEdit', 'CP': 'Hidden', 'IDVERGER': 'Hidden', 'TYPE_AOC': 'TextEdit', 'MODCULTURE': 'TextEdit', 'ARBREISOLE': 'TextEdit', 'SURFVERGER': 'Hidden', 'SURFPLANT': 'Hidden', 'P_SURFPLAN': 'Hidden', 'TOTALARBRE': 'Hidden', 'NB_ARBRES': 'Hidden', 'VERGERDENS': 'Hidden', 'ANNEE': 'Hidden', 'VERGERRAIS': 'Hidden', 'VERGERRESP': 'Hidden', 'NBR_AOC': 'Hidden', 'P_POMMES': 'Hidden', 'P_POIRES': 'Hidden', 'P_PHENOL': 'Hidden', 'P_ACIDE': 'TextEdit', 'P_AUTRE': 'Hidden', });
lyr_PourcentagedePhnolique_2.set('fieldImages', {'IDU': 'Hidden', 'NOM_COM': 'TextEdit', 'INAO': 'Hidden', 'NOM_VERGER': 'TextEdit', 'CP': 'Hidden', 'IDVERGER': 'Hidden', 'TYPE_AOC': 'TextEdit', 'MODCULTURE': 'TextEdit', 'ARBREISOLE': 'TextEdit', 'SURFVERGER': 'Hidden', 'SURFPLANT': 'Hidden', 'P_SURFPLAN': 'Hidden', 'TOTALARBRE': 'Hidden', 'NB_ARBRES': 'Hidden', 'VERGERDENS': 'Hidden', 'ANNEE': 'Hidden', 'VERGERRAIS': 'Hidden', 'VERGERRESP': 'Hidden', 'NBR_AOC': 'Hidden', 'P_POMMES': 'Hidden', 'P_POIRES': 'Hidden', 'P_PHENOL': 'TextEdit', 'P_ACIDE': 'Hidden', 'P_AUTRE': 'Hidden', });
lyr_PourcentagedePoirier_3.set('fieldImages', {'IDU': 'Hidden', 'NOM_COM': 'TextEdit', 'INAO': 'Hidden', 'NOM_VERGER': 'TextEdit', 'CP': 'Hidden', 'IDVERGER': 'Hidden', 'TYPE_AOC': 'TextEdit', 'MODCULTURE': 'TextEdit', 'ARBREISOLE': 'TextEdit', 'SURFVERGER': 'Hidden', 'SURFPLANT': 'Hidden', 'P_SURFPLAN': 'Hidden', 'TOTALARBRE': 'Hidden', 'NB_ARBRES': 'Hidden', 'VERGERDENS': 'Hidden', 'ANNEE': 'Hidden', 'VERGERRAIS': 'Hidden', 'VERGERRESP': 'Hidden', 'NBR_AOC': 'Hidden', 'P_POMMES': 'Hidden', 'P_POIRES': 'TextEdit', 'P_PHENOL': 'Hidden', 'P_ACIDE': 'Hidden', 'P_AUTRE': 'Hidden', });
lyr_PourcentagedePommier_4.set('fieldImages', {'IDU': 'Hidden', 'NOM_COM': 'TextEdit', 'INAO': 'Hidden', 'NOM_VERGER': 'TextEdit', 'CP': 'Hidden', 'IDVERGER': 'Hidden', 'TYPE_AOC': 'TextEdit', 'MODCULTURE': 'TextEdit', 'ARBREISOLE': 'TextEdit', 'SURFVERGER': 'Hidden', 'SURFPLANT': 'Hidden', 'P_SURFPLAN': 'Hidden', 'TOTALARBRE': 'Hidden', 'NB_ARBRES': 'Hidden', 'VERGERDENS': 'Hidden', 'ANNEE': 'Hidden', 'VERGERRAIS': 'Hidden', 'VERGERRESP': 'Hidden', 'NBR_AOC': 'Hidden', 'P_POMMES': 'TextEdit', 'P_POIRES': 'Hidden', 'P_PHENOL': 'Hidden', 'P_ACIDE': 'Hidden', 'P_AUTRE': 'Hidden', });
lyr_NombredAOC_5.set('fieldImages', {'IDU': 'Hidden', 'NOM_COM': 'TextEdit', 'INAO': 'Hidden', 'NOM_VERGER': 'TextEdit', 'CP': 'Hidden', 'IDVERGER': 'Hidden', 'TYPE_AOC': 'TextEdit', 'MODCULTURE': 'TextEdit', 'ARBREISOLE': 'TextEdit', 'SURFVERGER': 'Hidden', 'SURFPLANT': 'Hidden', 'P_SURFPLAN': 'Hidden', 'TOTALARBRE': 'Hidden', 'NB_ARBRES': 'Hidden', 'VERGERDENS': 'Hidden', 'ANNEE': 'Hidden', 'VERGERRAIS': 'Hidden', 'VERGERRESP': 'Hidden', 'NBR_AOC': 'TextEdit', 'P_POMMES': 'Hidden', 'P_POIRES': 'Hidden', 'P_PHENOL': 'Hidden', 'P_ACIDE': 'Hidden', 'P_AUTRE': 'Hidden', });
lyr_Annedeplantation_6.set('fieldImages', {'IDU': 'Hidden', 'NOM_COM': 'TextEdit', 'INAO': 'Hidden', 'NOM_VERGER': 'TextEdit', 'CP': 'Hidden', 'IDVERGER': 'Hidden', 'TYPE_AOC': 'TextEdit', 'MODCULTURE': 'TextEdit', 'ARBREISOLE': 'Hidden', 'SURFVERGER': 'Hidden', 'SURFPLANT': 'Hidden', 'P_SURFPLAN': 'Hidden', 'TOTALARBRE': 'Hidden', 'NB_ARBRES': 'Hidden', 'VERGERDENS': 'Hidden', 'ANNEE': 'TextEdit', 'VERGERRAIS': 'Hidden', 'VERGERRESP': 'Hidden', 'NBR_AOC': 'Hidden', 'P_POMMES': 'Hidden', 'P_POIRES': 'Hidden', 'P_PHENOL': 'Hidden', 'P_ACIDE': 'Hidden', 'P_AUTRE': 'Hidden', });
lyr_Densitdeplantation_7.set('fieldImages', {'IDU': 'Hidden', 'NOM_COM': 'TextEdit', 'INAO': 'Hidden', 'NOM_VERGER': 'TextEdit', 'CP': 'Hidden', 'IDVERGER': 'Hidden', 'TYPE_AOC': 'TextEdit', 'MODCULTURE': 'TextEdit', 'ARBREISOLE': 'TextEdit', 'SURFVERGER': 'Hidden', 'SURFPLANT': 'Hidden', 'P_SURFPLAN': 'Hidden', 'TOTALARBRE': 'TextEdit', 'NB_ARBRES': 'TextEdit', 'VERGERDENS': 'TextEdit', 'ANNEE': 'Hidden', 'VERGERRAIS': 'Hidden', 'VERGERRESP': 'Hidden', 'NBR_AOC': 'Hidden', 'P_POMMES': 'Hidden', 'P_POIRES': 'Hidden', 'P_PHENOL': 'Hidden', 'P_ACIDE': 'Hidden', 'P_AUTRE': 'Hidden', });
lyr_Pourcentagedesurfaceplante_8.set('fieldImages', {'IDU': 'Hidden', 'NOM_COM': 'TextEdit', 'INAO': 'Hidden', 'NOM_VERGER': 'TextEdit', 'CP': 'Hidden', 'IDVERGER': 'Hidden', 'TYPE_AOC': 'TextEdit', 'MODCULTURE': 'TextEdit', 'ARBREISOLE': 'TextEdit', 'SURFVERGER': 'TextEdit', 'SURFPLANT': 'TextEdit', 'P_SURFPLAN': 'TextEdit', 'TOTALARBRE': 'Hidden', 'NB_ARBRES': 'Hidden', 'VERGERDENS': 'Hidden', 'ANNEE': 'Hidden', 'VERGERRAIS': 'Hidden', 'VERGERRESP': 'Hidden', 'NBR_AOC': 'Hidden', 'P_POMMES': 'Hidden', 'P_POIRES': 'Hidden', 'P_PHENOL': 'Hidden', 'P_ACIDE': 'Hidden', 'P_AUTRE': 'Hidden', });
lyr_Nombredevaritprsente_9.set('fieldImages', {'IDU': 'Hidden', 'NOM_COM': 'TextEdit', 'INAO': 'Hidden', 'NOM_VERGER': 'TextEdit', 'CP': 'Hidden', 'IDVERGER': 'Hidden', 'TYPE_AOC': 'TextEdit', 'MODCULTURE': 'TextEdit', 'ARBREISOLE': 'TextEdit', 'SURFVERGER': 'Hidden', 'SURFPLANT': 'Hidden', 'P_SURFPLAN': 'Hidden', 'TOTALARBRE': 'TextEdit', 'NB_ARBRES': 'TextEdit', 'VERGERDENS': 'Hidden', 'ANNEE': 'Hidden', 'VERGERRAIS': 'Hidden', 'VERGERRESP': 'Hidden', 'NBR_AOC': 'Hidden', 'P_POMMES': 'Hidden', 'P_POIRES': 'Hidden', 'P_PHENOL': 'Hidden', 'P_ACIDE': 'Hidden', 'P_AUTRE': 'Hidden', });
lyr_PourcentageAutres_0.set('fieldLabels', {'NOM_COM': 'header label', 'NOM_VERGER': 'header label', 'TYPE_AOC': 'header label', 'MODCULTURE': 'header label', 'ARBREISOLE': 'header label', 'P_AUTRE': 'header label', });
lyr_PourcentagedAcide_1.set('fieldLabels', {'NOM_COM': 'header label', 'NOM_VERGER': 'header label', 'TYPE_AOC': 'header label', 'MODCULTURE': 'header label', 'ARBREISOLE': 'header label', 'P_ACIDE': 'header label', });
lyr_PourcentagedePhnolique_2.set('fieldLabels', {'NOM_COM': 'header label', 'NOM_VERGER': 'header label', 'TYPE_AOC': 'header label', 'MODCULTURE': 'header label', 'ARBREISOLE': 'header label', 'P_PHENOL': 'header label', });
lyr_PourcentagedePoirier_3.set('fieldLabels', {'NOM_COM': 'header label', 'NOM_VERGER': 'header label', 'TYPE_AOC': 'header label', 'MODCULTURE': 'header label', 'ARBREISOLE': 'header label', 'P_POIRES': 'header label', });
lyr_PourcentagedePommier_4.set('fieldLabels', {'NOM_COM': 'header label', 'NOM_VERGER': 'header label', 'TYPE_AOC': 'header label', 'MODCULTURE': 'header label', 'ARBREISOLE': 'header label', 'P_POMMES': 'header label', });
lyr_NombredAOC_5.set('fieldLabels', {'NOM_COM': 'header label', 'NOM_VERGER': 'header label', 'TYPE_AOC': 'header label', 'MODCULTURE': 'header label', 'ARBREISOLE': 'header label', 'NBR_AOC': 'header label', });
lyr_Annedeplantation_6.set('fieldLabels', {'NOM_COM': 'header label', 'NOM_VERGER': 'header label', 'TYPE_AOC': 'header label', 'MODCULTURE': 'header label', 'ANNEE': 'header label', });
lyr_Densitdeplantation_7.set('fieldLabels', {'NOM_COM': 'header label', 'NOM_VERGER': 'header label', 'TYPE_AOC': 'header label', 'MODCULTURE': 'header label', 'ARBREISOLE': 'inline label', 'TOTALARBRE': 'header label', 'NB_ARBRES': 'header label', 'VERGERDENS': 'header label', });
lyr_Pourcentagedesurfaceplante_8.set('fieldLabels', {'NOM_COM': 'header label', 'NOM_VERGER': 'header label', 'TYPE_AOC': 'header label', 'MODCULTURE': 'header label', 'ARBREISOLE': 'header label', 'SURFVERGER': 'header label', 'SURFPLANT': 'header label', 'P_SURFPLAN': 'header label', });
lyr_Nombredevaritprsente_9.set('fieldLabels', {'NOM_COM': 'header label', 'NOM_VERGER': 'header label', 'TYPE_AOC': 'header label', 'MODCULTURE': 'header label', 'ARBREISOLE': 'header label', 'TOTALARBRE': 'header label', 'NB_ARBRES': 'header label', });
lyr_Nombredevaritprsente_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});