// backToTop.js

document.addEventListener("DOMContentLoaded", function() {
    // 创建返回顶部按钮元素
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'backToTopButton';
    backToTopButton.textContent = '回到顶部';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.padding = '10px 20px';
    backToTopButton.style.backgroundColor = '#007bff';
    backToTopButton.style.color = '#fff';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.display = 'none'; // 初始状态下隐藏按钮

    // 将按钮添加到页面中
    document.body.appendChild(backToTopButton);

    // 监听滚动事件，决定是否显示返回顶部按钮
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { // 当滚动超过200像素时显示按钮
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // 添加点击事件监听器，点击按钮时返回顶部
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 平滑滚动
        });
    });
});