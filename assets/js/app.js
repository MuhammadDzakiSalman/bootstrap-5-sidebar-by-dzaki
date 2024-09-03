const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('content');

    const toggleSidebar = () => {
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');

      if (window.innerWidth >= 992) {
        content.style.marginLeft = sidebar.classList.contains('active') ? '0' : '250px';
      }
    };

    sidebarToggle.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Handle sub-menu toggle
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function () {
        const submenu = this.nextElementSibling;
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        // Toggle the current submenu without reopening it after closing
        if (isExpanded) {
          $(submenu).collapse('hide');
          this.setAttribute('aria-expanded', 'false');
        } else {
          $(submenu).collapse('show');
          this.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Ensure correct content margin on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) {
        content.style.marginLeft = sidebar.classList.contains('active') ? '0' : '250px';
      } else {
        content.style.marginLeft = '0';
      }
    });

    // Initialize correct content margin on page load
    if (window.innerWidth >= 992) {
      content.style.marginLeft = '250px';
    }
