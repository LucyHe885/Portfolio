// 2. Page Transition
document.addEventListener('DOMContentLoaded', () => {
    const pageTransition = document.querySelector('.page-transition');
    
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (!targetSection) return;

            pageTransition.classList.add('active');
            
            setTimeout(() => {
                targetSection.scrollIntoView();
                pageTransition.classList.remove('active');
            }, 1000); 
        });
    });
});

// 3. Particles Animation
document.addEventListener('DOMContentLoaded', () => {
    const particles = document.querySelector('.particles');
    
    function createParticles() {
        for(let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 2 + 's';
            particles.appendChild(particle);
        }
    }

    createParticles();
});

// 4. Skills Section Tabs
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-btn");
    const panels = document.querySelectorAll(".skill-panel");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            tab.classList.add("active");
            const targetPanel = document.getElementById(tab.dataset.tab);
            targetPanel.classList.add("active");
        });
    });
});

// 5. Work Section Tabs - 使用独特的类名
document.addEventListener("DOMContentLoaded", () => {
    const workTabs = document.querySelectorAll(".work-tab-btn");
    const workPanels = document.querySelectorAll(".work-panel");

    workTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // 只移除 work section 的活动状态
            workTabs.forEach(t => t.classList.remove("active"));
            workPanels.forEach(p => p.classList.remove("active"));

            // 添加新的活动状态
            tab.classList.add("active");
            const targetPanel = document.getElementById(tab.dataset.tab);
            targetPanel.classList.add("active");
        });
    });
});

// 6. About Section Parallax
const aboutSection = document.querySelector('#about');
const sliderTrack = document.querySelector('.slider-track');

window.addEventListener('scroll', () => {
    const sectionTop = aboutSection.offsetTop;
    const sectionHeight = aboutSection.offsetHeight;
    const scrollY = window.scrollY;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        const speed = 0.4; 
        const offset = scrollY - sectionTop; 
        sliderTrack.style.transform = `translateY(${-offset * speed}px)`;
    }
});

// 3d img - 修改为选择所有图片
const images = document.querySelectorAll('.single-work img');

images.forEach(image => {
    image.addEventListener('mousemove', (e) => {
        const { width, height, top, left } = image.getBoundingClientRect();
        const offsetX = e.clientX - left;
        const offsetY = e.clientY - top;

        const rotateX = (offsetY / height - 0.5) * 10;  
        const rotateY = (offsetX / width - 0.5) * -10;  

        image.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg) translateZ(10px)';
    });
});
