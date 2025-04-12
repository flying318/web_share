var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_mask_2_1 = new ol.format.GeoJSON();
var features_mask_2_1 = format_mask_2_1.readFeatures(json_mask_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mask_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mask_2_1.addFeatures(features_mask_2_1);
var lyr_mask_2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mask_2_1, 
                style: style_mask_2_1,
                popuplayertitle: 'mask_2',
                interactive: true,
                title: '<img src="styles/legend/mask_2_1.png" /> mask_2'
            });
var format_Myanmarearthquake_2 = new ol.format.GeoJSON();
var features_Myanmarearthquake_2 = format_Myanmarearthquake_2.readFeatures(json_Myanmarearthquake_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Myanmarearthquake_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Myanmarearthquake_2.addFeatures(features_Myanmarearthquake_2);
var lyr_Myanmarearthquake_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Myanmarearthquake_2, 
                style: style_Myanmarearthquake_2,
                popuplayertitle: 'Myanmar earthquake',
                interactive: true,
    title: 'Myanmar earthquake<br />\
    <img src="styles/legend/Myanmarearthquake_2_0.png" /> 1<br />\
    <img src="styles/legend/Myanmarearthquake_2_1.png" /> 2<br />\
    <img src="styles/legend/Myanmarearthquake_2_2.png" /> 3<br />\
    <img src="styles/legend/Myanmarearthquake_2_3.png" /> 4<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_mask_2_1.setVisible(true);lyr_Myanmarearthquake_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_mask_2_1,lyr_Myanmarearthquake_2];
lyr_mask_2_1.set('fieldAliases', {});
lyr_Myanmarearthquake_2.set('fieldAliases', {'fid': 'fid', 'value': 'value', 'classification': 'classification', });
lyr_mask_2_1.set('fieldImages', {});
lyr_Myanmarearthquake_2.set('fieldImages', {'fid': 'Range', 'value': 'TextEdit', 'classification': 'TextEdit', });
lyr_mask_2_1.set('fieldLabels', {});
lyr_Myanmarearthquake_2.set('fieldLabels', {'fid': 'hidden field', 'value': 'hidden field', 'classification': 'inline label - visible with data', });
lyr_Myanmarearthquake_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});