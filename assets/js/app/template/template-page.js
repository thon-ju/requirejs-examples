require(['template'], function (template) {

    var data = {
		title: 'Basic List',
		isAdmin: true,
		list: ['Art', 'blog', 'Photo', 'Movie', 'Music', 'Travel', 'Guitar']
	};

	var html = template('test', data);
	document.getElementById('content').innerHTML = html;
});