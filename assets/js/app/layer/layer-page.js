require(['jquery','jquery.layer'], function () {

    var $ = require('jquery');
    require('jquery.layer');

    $('#click1').click(function() {
        layer.alert('Just a alert', 6); //风格一
    });
    $('#click2').click(function(){
        layer.msg('Just a tip',5,1); //风格二
    });
    $('#loading1-click').click(function(){
        layer.load('Loading...', 0);
    });
    $('#loading2-click').click(function(){
        layer.load(3);
    });
    $('#tip1-click').click(function(){
        layer.tips('you could custom tips style.', this, {
            style: ['background-color:#78BA32; color:#fff', '#78BA32'],
            maxWidth:185,
            time: 3,
            closeBtn:[0, true]
        });
    });

    $('#tip2-click').click(function(){
        layer.tips('none close button by default.', this , {guide: 1, time: 2});
    });
});