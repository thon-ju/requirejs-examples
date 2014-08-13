require(['jquery','jquery.validate'], function () {

    var $ = require('jquery');
    require('jquery.validate');

    $("#regist-form").validate({
        errorContainer: $("div.error"),
        errorLabelContainer: $("div.error"),
        wrapper: 'li'
    });

    $("#regist-submit").click(function(){
        var $form = $("#regist-form");
        if(!$form.valid()){
            return;
        }

        var postData = $form.serialize();
        var posting = $.post($CONFIG.base_url + "/api/user/save", postData);
        posting.done(function(data) {
            $.jBox.tip('保存成功');
            window.location.href = $CONFIG.base_url + "/admin/user/manage";
        });
    });

});