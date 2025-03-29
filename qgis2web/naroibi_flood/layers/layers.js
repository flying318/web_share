var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_maskroi_1 = new ol.format.GeoJSON();
var features_maskroi_1 = format_maskroi_1.readFeatures(json_maskroi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maskroi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maskroi_1.addFeatures(features_maskroi_1);
var lyr_maskroi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_maskroi_1, 
                style: style_maskroi_1,
                popuplayertitle: 'mask — roi',
                interactive: false,
                title: '<img src="styles/legend/maskroi_1.png" /> mask — roi'
            });
var format_kenya_2 = new ol.format.GeoJSON();
var features_kenya_2 = format_kenya_2.readFeatures(json_kenya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kenya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenya_2.addFeatures(features_kenya_2);
var lyr_kenya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kenya_2, 
                style: style_kenya_2,
                popuplayertitle: 'kenya',
                interactive: true,
    title: 'kenya<br />\
    <img src="styles/legend/kenya_2_0.png" /> 1<br />\
    <img src="styles/legend/kenya_2_1.png" /> 2<br />\
    <img src="styles/legend/kenya_2_2.png" /> 3<br />\
    <img src="styles/legend/kenya_2_3.png" /> 4<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_maskroi_1.setVisible(true);lyr_kenya_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_maskroi_1,lyr_kenya_2];
lyr_maskroi_1.set('fieldAliases', {'id': 'id', });
lyr_kenya_2.set('fieldAliases', {'fid': 'fid', 'value': 'value', });
lyr_maskroi_1.set('fieldImages', {'id': 'Range', });
lyr_kenya_2.set('fieldImages', {'fid': 'TextEdit', 'value': 'TextEdit', });
lyr_maskroi_1.set('fieldLabels', {'id': 'no label', });
lyr_kenya_2.set('fieldLabels', {'fid': 'no label', 'value': 'inline label - visible with data', });
lyr_kenya_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});