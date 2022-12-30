var left = document.getElementById("left")
var right = document.getElementById("right")

var pic_divs = document.querySelector(".banner-content").querySelectorAll("div");
var index = 0;



pic_divs.forEach(function (item, index) {
    item.onclick = function () {
        if (index == 0) {
            window.location.href = '4.html';
        } else if (index == 1) {
            window.open("http://www.shejijingsai.com/2022/11/854434.html","_blank")
            // window.location.href = 'http://www.shejijingsai.com/2022/11/854434.html';

        } else {
            window.open("http://www.shejijingsai.com/2022/11/854434.html","_blank")

            // window.location.href = 'http://www.shejijingsai.com/2022/11/854434.html';

        }

    }
})



// 点击左侧按钮，切换图片
left.onclick = function () {
    index--;
    if (index < 0) {
        index = pic_divs.length - 1;
    }
    for (var i = 0; i < pic_divs.length; i++) {

        pic_divs[i].className = 'pic';
    }

    pic_divs[index].className = "current";
}
// 点击右侧按钮，切换图片
right.onclick = function () {
    index++;
    if (index > pic_divs.length - 1) {
        index = 0;
    }
    for (var i = 0; i < pic_divs.length; i++) {

        pic_divs[i].className = 'pic';
    }

    pic_divs[index].className = "current";
}

// 自动播放功能
var focusTimer = setInterval(function () {
    // 手动调用点击事件
    right.click();
}, 5000)


