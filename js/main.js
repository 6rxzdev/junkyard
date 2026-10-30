
(() => {
  const searchInput = document.getElementById('searchInput');
  const noResults = document.getElementById('noResults');
  const themeToggle = document.getElementById('themeToggle');
  const searchable = [...document.querySelectorAll('.searchable')];

  // Live search
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      let matches = 0;

      searchable.forEach(element => {
        const text = (
          element.innerText + ' ' + (element.dataset.search || '')
        ).toLowerCase();

        const show = !query || text.includes(query);
        element.hidden = !show;

        if (show) matches++;
      });

      if (noResults) {
        noResults.style.display =
          query && matches === 0 ? 'block' : 'none';
      }
    });
  }

  // Dark and light mode
  const savedTheme = localStorage.getItem('jsw-theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  if (themeToggle) {
    themeToggle.textContent =
      document.body.classList.contains('dark') ? '☾' : '☀';

    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');

      const dark = document.body.classList.contains('dark');

      localStorage.setItem('jsw-theme', dark ? 'dark' : 'light');
      themeToggle.textContent = dark ? '☾' : '☀';
    });
  }

  // Active sidebar navigation
  const sideLinks = [
    ...document.querySelectorAll('.side-link[href^="#"]')
  ];

  const sections = sideLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sideLinks.forEach(link => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${entry.target.id}`
            );
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -65% 0px'
    });

    sections.forEach(section => observer.observe(section));
  }

  // Automatic copyright year
  const copyright = document.querySelector('.copyright');

  if (copyright) {
    copyright.innerHTML = copyright.innerHTML.replace(
      /2026/,
      new Date().getFullYear()
    );
  }
})();
