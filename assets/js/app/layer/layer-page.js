require(['jquery','jquery.layer'], function () {

    var $ = require('jquery');
    require('jquery.layer');

    $('#click1').click(function() {
        layer.alert('Just a alert', 6); //风格一
    });
    $('#msg1').click(function(){
        layer.msg('Just a tip',1,1); //风格二
    });
    $('#msg2').click(function(){
        layer.msg('Just a tip',1,2); //风格二
    });
    $('#msg3').click(function(){
        layer.msg('Just a tip',1,3); //风格二
    });
    $('#msg4').click(function(){
        layer.msg('Just a tip',1,4); //风格二
    });
    $('#msg5').click(function(){
        layer.msg('Just a tip',1,5); //风格二
    });
    $('#msg6').click(function(){
        layer.msg('Just a tip',1,6); //风格二
    });
    $('#msg7').click(function(){
        layer.msg('Just a tip',1,7); //风格二
    });
    $('#msg8').click(function(){
        layer.msg('Just a tip',1,8); //风格二
    });
    $('#msg9').click(function(){
        layer.msg('Just a tip',0,9); //风格二
    });
    $('#msg10').click(function(){
        layer.msg('Just a tip',1,10); //风格二
    });
    $('#msg11').click(function(){
        layer.msg('Just a tip',1,11); //风格二
    });
    $('#msg12').click(function(){
        layer.msg('Just a tip',1,12); //风格二
    });
    $('#msg13').click(function(){
        layer.msg('Just a tip',1,13); //风格二
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