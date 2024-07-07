const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const switchLabel = document.querySelector('.switch-label');
const sideNav = document.getElementById('side-nav');
const navToggle = document.getElementById('nav-toggle');

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
        switchLabel.textContent = '亮色模式';
    } else {
        document.body.classList.remove('dark-mode');
        switchLabel.textContent = '深色模式';
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});

// 側邊導航功能
navToggle.addEventListener('click', () => {
    sideNav.classList.toggle('active');
    navToggle.classList.toggle('active');
    navToggle.innerHTML = sideNav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// 點擊導航鏈接後關閉側邊欄
document.querySelectorAll('.side-nav a').forEach(link => {
    link.addEventListener('click', () => {
        sideNav.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// 平滑滾動到相應部分
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});