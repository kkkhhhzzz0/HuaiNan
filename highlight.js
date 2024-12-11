document.addEventListener("DOMContentLoaded", function() {
    // 获取所有导航栏链接
    const navLinks = document.querySelectorAll('.webnav li a');

    // 为每个链接添加鼠标悬停事件监听器
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#add8e6'; // 浅蓝色高亮颜色
            this.style.color = '#000000'; // 黑色文字颜色
        });

        link.addEventListener('mouseout', function() {
            this.style.backgroundColor = ''; // 移除高亮
            this.style.color = ''; // 恢复默认文字颜色
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // 获取所有导航栏链接
    const navLinks = document.querySelectorAll('.webnav li a');

    // 为每个链接添加鼠标悬停事件监听器
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#add8e6'; // 浅蓝色高亮颜色
            this.style.color = '#000000'; // 黑色文字颜色
        });

        link.addEventListener('mouseout', function() {
            this.style.backgroundColor = ''; // 移除高亮
            this.style.color = ''; // 恢复默认文字颜色
        });
    });

    // 表单验证
    const form = document.querySelector('.form-container');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单默认提交行为

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '') {
            alert('姓名不能为空');
            return;
        }

        if (email === '' || !validateEmail(email)) {
            alert('请输入有效的电子邮件地址');
            return;
        }

        if (message === '') {
            alert('消息不能为空');
            return;
        }

        // 如果验证通过，可以提交表单
        alert('表单提交成功！');
        form.reset(); // 清空表单
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});