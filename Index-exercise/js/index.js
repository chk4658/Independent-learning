var newsT = document.getElementById('newsT');
var flag = document.getElementById('flag');
var newsContainer = document.getElementById('newsContainer');
for (var i = 0; i < 2; i ++) {
	var link = newT.children[i];
	link.onmouseover = linkMouseover;
	link.setAttribute('index', i);
}
function linkMouseover() {
	// 蓝色的线执行动画
	var offsetLeft = this.offsetLeft;
	animate(flag, offsetLeft - 3);
	// 显示对应内容
    // 让所有的详细内容隐藏
    for (var i = 0, len = newsContainer.children.length; i < len; i ++) {
    	var div = newsContainer.children[i];
    	// 判断是否已经有了hide
    	if (div.className.indexOf('hide') === -1) {
    		div.className = 'news-b hide';
    	}
    }
    var index = parseInt(this.getAttribute('index'));
    newsContainer.children[index].className = 'news-b';
}