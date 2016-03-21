console.log( encodeURIComponent('北京') );

$(function() {

	// 天气模块开始
	var szEncoded = encodeURIComponent('深圳');
	$.get('http://apis.baidu.com/apistore/weatherservice/recentweathers?cityname=' + szEncoded + '&cityid=101280601', function() {
		
	});

	// 天气模块结束

});