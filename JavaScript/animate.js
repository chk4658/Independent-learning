// 封装动画
function animate(element, target) {
	// 让只有一个定时器在执行动画
	if(element.timerId) {
		clearInterval(element.timerId);
		timerId = null;
	}
	element.timerId = setInterval(function() {
		// 步进距离
		var step = 10;
		// 盒子当前位置
		var current = element.offsetLeft;
		// 如果当前位置 > 目标位置 step要变成负值
		if(current > target) {
			step = - Math.abs(step);
		}
		if(Math.abs(current - target) <= Math.abs(step)) {
			// 相差小于一步的距离，就停止定时器
			clearInterval(element.timerId);
			element.style.left = target + 'px';
			return;
		}
		element.style.left = element.offsetLeft + step + 'px';
	}, 10)
}