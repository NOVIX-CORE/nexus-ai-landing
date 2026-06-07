        // Hamburger Menu Logic
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navClose = document.getElementById('nav-close');

        navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
        navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));

        // Theme Toggle Logic
        const themeBtn = document.getElementById('theme-toggle');
        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', targetTheme);
        });

        // FAQ Accordion Logic
        document.querySelectorAll('.accordion__header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                item.classList.toggle('active');
            });
        });