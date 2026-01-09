document.addEventListener('DOMContentLoaded', () => {
    console.log("%c ¡Bienvenido al Calabozo de Jamir! ", "background: #050505; color: #bd93f9; border: 1px solid #c5b358; padding: 5px; font-family: monospace; font-size: 14px;");

    // Add a small glitch effect or interaction on hover for titles?
    // keeping it simple for now as requested.

    // Initial log
    // console.log("System initialized...");

    // Avatar interaction (Coin Flip)
    const avatar = document.querySelector('.avatar-img');
    if (avatar) {
        avatar.addEventListener('click', () => {
            // Reset animation to allow re-triggering (simple toggle for now)
            if (avatar.classList.contains('avatar-coin-flip')) {
                avatar.classList.remove('avatar-coin-flip');
                // Force reflow
                void avatar.offsetWidth;
            }
            avatar.classList.add('avatar-coin-flip');

            // Remove after animation completes to allow re-flip
            setTimeout(() => {
                avatar.classList.remove('avatar-coin-flip');
            }, 1000);
        });
    }

    // Story Toggle
    const toggleBtn = document.getElementById('toggle-story-btn');
    const fullStory = document.getElementById('story-full');

    if (toggleBtn && fullStory) {
        toggleBtn.addEventListener('click', () => {
            fullStory.classList.toggle('visible');
            if (fullStory.classList.contains('visible')) {
                toggleBtn.innerText = "[ Cerrar Crónica - ]";
            } else {
                toggleBtn.innerText = "[ Leer Crónica Completa + ]";
            }
        });
    }

    // --- RENDER POSTS DYNAMICALLY ---
    const grid = document.querySelector('.dungeon-grid');
    if (grid && typeof blogPosts !== 'undefined') {
        grid.innerHTML = ''; // Clear existing content

        blogPosts.forEach(post => {
            const article = document.createElement('article');
            article.className = 'post-card';
            article.setAttribute('data-category', post.category);
            // Initialize with animation style
            article.style.display = 'flex';

            article.innerHTML = `
                <div class="card-header">
                    <span class="post-date">${post.date}</span>
                    <span class="post-tag">${post.tag}</span>
                </div>
                <h2 class="post-title">${post.title}</h2>
                <p class="post-excerpt">
                    ${post.excerpt}
                </p>
                <a href="#" class="read-more-btn" data-id="${post.id}">Leer pergamino_</a>
            `;

            grid.appendChild(article);
        });
    }

    // Nav Filter Logic & Interactions (Re-query cards after dynamic render)
    const cards = document.querySelectorAll('.post-card');

    // Apply hover effects to new cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'var(--color-purple)';
        });
        card.addEventListener('mouseleave', () => {
            // Only reset if it's not the active card? For now simple reset.
            card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
    });

    const navLinks = document.querySelectorAll('.nav-link[data-filter]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Active state
            navLinks.forEach(l => l.style.color = '');
            link.style.color = 'var(--color-purple)';

            const filter = link.getAttribute('data-filter');

            // Scroll to grid to show results
            if (grid) {
                grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            cards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                    // Add animation on show
                    card.style.opacity = '0';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- MODAL LOGIC (DRAMATIC SCROLL) ---
    const modal = document.getElementById('scroll-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalTag = document.getElementById('modal-tag');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.getElementById('close-modal-btn');

    // Event Delegation for "Leer pergamino" buttons
    if (grid) {
        grid.addEventListener('click', (e) => {
            if (e.target.classList.contains('read-more-btn')) {
                e.preventDefault();
                const postId = e.target.getAttribute('data-id');
                // Ensure id match is robust (string vs string)
                const post = blogPosts.find(p => p.id === postId);

                if (post && modal) {
                    // Populate Modal
                    modalTitle.innerText = post.title;
                    modalDate.innerText = post.date;
                    modalTag.innerText = post.tag;
                    modalBody.innerHTML = post.body || post.excerpt; // Fallback to excerpt if no body

                    // Open Modal (Trigger Animation)
                    modal.classList.add('open');
                }
            }
        });
    }

    // Close Modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('open');
        });
    }

    // Close on click outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('open');
            }
        });
    }
});
