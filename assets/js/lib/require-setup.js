// file: js/require-setup.js
//
// Declare this variable before loading RequireJS JavaScript library
// To config RequireJS after it’s loaded, pass the below object into require.config();
var require = {
    baseUrl: '../assets/js/lib',
    urlArgs: "v=0.0.1",
    paths: {
        'jquery': 'jquery/jquery-1.11.1',
        'jquery.validate': 'jquery-validation/jquery.validate',
        'jquery.treetable': 'jquery-treetable/jquery.treetable',
        "jquery.layer": "jquery-layer/layer",
        'bootstrap': 'bootstrap/bootstrap',
        'template': 'template/template-debug',
        'echarts':'echarts/echarts-map',
        'echarts/chart/bar' : 'echarts/echarts-map',
        'echarts/chart/line': 'echarts/echarts-map',
        'echarts/chart/map' : 'echarts/echarts-map'
    },
    shim : {
        "bootstrap" : { "deps" :['jquery']},
        "jquery.treetable" : { "deps" :['jquery']},
        "jquery.layer": { "deps" :['jquery']}
    }
};
