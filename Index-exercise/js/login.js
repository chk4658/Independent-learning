var loginShx = document.getElementById('login-shx');
var bg = document.getElementById('bg');
// 点击按钮，弹出登录框和遮盖
var link1 = document.getElementById('link1');
link1.onclick = function() {
    var loginShx = document.getElementById('login-shx');
    var bg = document.getElementById('bg');
    loginShx.style.display = 'block';
    bg.style.display = 'block';
    return false;
}
var link2 = document.getElementById('link2');
link2.onclick = function() {
    var loginShx = document.getElementById('login-shx');
    var bg = document.getElementById('bg');
    loginShx.style.display = 'block';
    bg.style.display = 'block';
    return false;
}
// 关闭按钮
var closeBtn = document.getElementById('closeBtn');
closeBtn.onclick = function() {
    loginShx.style.display = 'none';
    bg.style.display = 'none';
}
var loginTitle = document.getElementById('login-title');
loginTitle.onmousedown = function(e) {
    e = e || window.event;
    var x = e.pageX - loginShx.offsetLeft;
    var y = e.pageY - loginShx.offsetTop;
    document.onmousemove = function(e) {
        e = e || window.event;
        var loginX = e.pageX - x;
        var loginY = e.pageY - y;
        loginShx.style.left = loginX + 'px';
        loginShx.style.top = loginY + 'px';
    }
    document.onmouseup = function(e) {
        document.onmousemove = null;
    }
}