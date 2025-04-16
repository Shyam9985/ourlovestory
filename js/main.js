// Smooth scrolling for scroll buttons
document.querySelectorAll('a.scroll-btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add floating hearts animation
function createFloatingHearts() {
    const container = document.querySelector('.hero-section');
    const heartCount = window.innerWidth < 768 ? 30 : 50;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 8 + 4) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
}

// Add touch-friendly animations
function addTouchAnimations() {
    const touchElements = document.querySelectorAll('.timeline-content, .gallery-item');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', (e) => {
            element.style.transform = 'scale(1.05)';
            element.style.transition = 'transform 0.3s ease';
        });
        
        element.addEventListener('touchend', (e) => {
            element.style.transform = 'scale(1)';
            element.style.transition = 'transform 0.3s ease';
        });
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    addParallaxEffect();
    addTouchAnimations();
});

// Add mobile-friendly parallax effect
function addParallaxEffect() {
    const hero = document.querySelector('.hero-section');
    const timeline = document.querySelector('.timeline');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const isMobile = window.innerWidth < 768;
        
        // Reduce parallax effect on mobile
        hero.style.backgroundPositionY = isMobile ? scrollPosition * 0.2 + 'px' : scrollPosition * 0.5 + 'px';

    });
}

// Add parallax effect
function addParallaxEffect() {
    const hero = document.querySelector('.hero-section');
    const timeline = document.querySelector('.timeline');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';

    });
}

// Add music toggle
function addMusicToggle() {
    const musicBtn = document.createElement('button');
    musicBtn.className = 'music-toggle btn btn-light';
    musicBtn.innerHTML = '🎵 Toggle Music';
    musicBtn.onclick = toggleMusic;
    document.body.appendChild(musicBtn);
}

// Initialize music toggle
document.addEventListener('DOMContentLoaded', addMusicToggle);

// Add gallery items with touch-friendly animations
function addGalleryItems() {
    const gallery = document.querySelector('.gallery-section .row');
    const memories = [
        { icon: '⏳', caption: 'You waiting for me with love and excitement' },
        { icon: '🍽️', caption: 'Our first lunch together at your sister\'s house' },
        { icon: '🚉', caption: 'You came all the way to Hyderabad just for me' },
        { icon: '🤗', caption: 'Our beautiful meet-ups in Hyderabad' },
        { icon: '🎂', caption: 'Magical midnight birthday celebration moments' },
        { icon: '💝', caption: 'Your unforgettable birthday date in Hyderabad' }
    ];

    memories.forEach((memory, index) => {
        const item = document.createElement('div');
        item.className = 'col-md-4 mb-4';
        item.setAttribute('data-aos', 'zoom-in-up');
        item.setAttribute('data-aos-delay', String(100 * (index + 1)));
        item.innerHTML = `
            <div class="gallery-item memory-card d-flex flex-column align-items-center justify-content-center p-4 shadow-lg rounded-4" style="background: rgba(255, 247, 230, 0.85); min-height: 240px; border: 1.5px solid #ffd6e0; position: relative;">
                <span class="memory-icon mb-2 d-flex align-items-center justify-content-center" style="font-size: 3.2rem; background: linear-gradient(135deg, #fffbe6 60%, #ffe0f7 100%); border-radius: 50%; width: 76px; height: 76px; box-shadow: 0 2px 12px rgba(255,182,193,0.14); border: 2.5px solid #ffb6c1; position: relative;">
                    ${memory.icon}
                    <span style="position: absolute; bottom: 2px; right: 6px; font-size: 1.2rem; color: #ff6b81;">❤</span>
                </span>
                <div class="gallery-caption text-center mt-2 px-2" style="font-size: 1.13rem; font-weight: 500; color: #b85c8e; letter-spacing: 0.01em;">
                    ${memory.caption}
                </div>
            </div>
        `;
        gallery.appendChild(item);
    });
}

// Initialize gallery
document.addEventListener('DOMContentLoaded', addGalleryItems);

// Add music player with playlist
function toggleMusic() {
    const audio = document.querySelector('audio');
    if (!audio) {
        const audio = document.createElement('audio');
        audio.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
        audio.loop = true;
        audio.volume = 0.3;
        document.body.appendChild(audio);
    }
    
    // Add playlist functionality
    const playlist = [
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    ];
    
    audio.addEventListener('ended', () => {
        const currentSong = playlist.indexOf(audio.src);
        const nextSong = (currentSong + 1) % playlist.length;
        audio.src = playlist[nextSong];
        audio.play();
    });
    
    audio.paused ? audio.play() : audio.pause();
    this.textContent = audio.paused ? '🎵 Toggle Music' : '🔇 Toggle Music';
}
