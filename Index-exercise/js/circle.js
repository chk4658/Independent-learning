var box = document.getElementById('Carousel');
var screen = box.children[0];
var ul = screen.children[0];
var ol = screen.children[1];
var arr = document.getElementById('arr');
var arrLeft = arr.children[0];
var arrRight = arr.children[1];
var imgWidth = screen.offsetWidth;
// 1、动态生成圆点
var count = ul.children.length;
for(var i = 0; i < count; i ++) {
	var li = document.createElement('li');
	ol.appendChild(li);
	li.innerText = '';
	if(i === 0) {
		li.className = 'current';
	}
	// 2、点击圆点 以动画的方式 切换图片
	li.onclick = liClick;
	// 当前li要记录其索引
	// 设置标签的自定义属性
	li.setAttribute('index', i);
} 
function liClick() {
	// 取消其他li的高亮显示，让当前li高亮显示
	for(var i = 0; i < ol.children.length; i ++) {
		var li = ol.children[i];
		li.className = '';
	}
	this.className = 'current';
	// 点击序号，以动画的方式切换到当前点击的图片位置
	// this.getAttribute('index')是字符串形式
	var liIndex = parseInt(this.getAttribute('index'));
	animate(ul, - liIndex * imgWidth);
    index = liIndex;
}
// 3、鼠标放到盒子上显示箭头
screen.onmouseenter = function() {
	arr.style.display = 'block';
    // 清除自动切换图片定时器
    clearInterval(timeId);
}
screen.onmouseleave = function() {
	arr.style.display = 'none';
    // 自动开启自动切换图片定时器
    timeId = setInterval(function() {
        arrRight.click();
    }, 2000);
}

// 4、实现上一张和下一张的功能
var index = 0;
arrRight.onclick = function() {
    // 如果当前是克隆的第一张图片，就修改li的坐标
    if(index === count) {
        ul.style.left = '0px';
        index = 0;
    }
    // 8张图片。还有一张是克隆的,总共是9
    index ++;
	if(index < count) {
        // animate(ul, -imgWidth * index);
        // 模拟点击事件 li.click()
        ol.children[index].click();
	} else {
        animate(ul, -index * imgWidth);
        // 取消所有序号的高亮显示，让第一序号高亮显示
        for (var i = 0; i < ol.children.length; i++) {
            var li = ol.children[i];
            li.className = '';
        }   
        ol.children[0].className = 'current';      
    }
}
arrLeft.onclick = function() {
    // 如果当前是第一张，要切到克隆的那一张 
    if (index === 0) {
        index = count;
        ul.style.left = -index * imgWidth + 'px';
    }
    index --;
    ol.children[index].click();
}
// 无缝滚动
var firstLi = ul.children[0];
// 克隆li cloneNode()复制节点
// 参数为true时,复制节点的内容，false只复制节点，不复制内容
var cloneLi = firstLi.cloneNode(true);
ul.appendChild(cloneLi);
// 5、自动切换图片
var timeId = setInterval(function() {
    arrRight.click();
}, 3500)