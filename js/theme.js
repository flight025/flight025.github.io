const btn = document.getElementById('invert-btn');
const html = document.documentElement;

// 页面加载时检查本地存储
if (localStorage.getItem('inverted') === 'true') {
    html.classList.add('inverted');
}

// 按钮点击事件
btn.addEventListener('click', () => {
    const isInverted = html.classList.toggle('inverted');
    // 保存状态到本地存储
    localStorage.setItem('inverted', isInverted);
});