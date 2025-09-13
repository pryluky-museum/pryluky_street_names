var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'OSM',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Межа м. Прилуки',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Межа м. Прилуки'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Вулиці м. Прилуки',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Вулиці м. Прилуки'
            });

lyr_OSM_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_OSM_0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'fid': 'fid', 'ADM4_UA': 'ADM4_UA', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM3_UA': 'ADM3_UA', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_UA': 'ADM2_UA', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_UA': 'ADM1_UA', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_UA': 'ADM0_UA', 'ADM0_PCODE': 'ADM0_PCODE', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'street_name': 'street_name', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'ADM4_UA': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM3_UA': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_UA': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_UA': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_UA': 'TextEdit', 'ADM0_PCODE': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'street_name': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'hidden field', 'ADM4_UA': 'hidden field', 'ADM4_PCODE': 'hidden field', 'ADM3_UA': 'hidden field', 'ADM3_PCODE': 'hidden field', 'ADM2_UA': 'hidden field', 'ADM2_PCODE': 'hidden field', 'ADM1_UA': 'hidden field', 'ADM1_PCODE': 'hidden field', 'ADM0_UA': 'hidden field', 'ADM0_PCODE': 'hidden field', });
lyr__2.set('fieldLabels', {'fid': 'hidden field', 'street_name': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});