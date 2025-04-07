document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorTrail = document.querySelector('.cursor-trail');
    let cursorPosition = { x: 0, y: 0 };
    let trailPosition = { x: 0, y: 0 };
    
    // Update cursor and trail positions
    document.addEventListener('mousemove', (e) => {
        // Update cursor position immediately
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Update target position for trail
        cursorPosition.x = e.clientX;
        cursorPosition.y = e.clientY;
    });

    // Smooth trail animation
    function updateTrail() {
        // Calculate smooth movement
        trailPosition.x += (cursorPosition.x - trailPosition.x) * 0.05; // 调整这个值来改变延迟
        trailPosition.y += (cursorPosition.y - trailPosition.y) * 0.05;

        // Apply position
        cursorTrail.style.left = `${trailPosition.x}px`;
        cursorTrail.style.top = `${trailPosition.y}px`;

        // Continue animation
        requestAnimationFrame(updateTrail);
    }

    // Start the trail animation
    updateTrail();

    // Hover effect handlers
    const handleHover = () => {
        cursor.classList.add('hover');
        cursorTrail.style.opacity = '0.5';
    };

    const handleLeave = () => {
        cursor.classList.remove('hover');
        cursorTrail.style.opacity = '0.3';
    };

    // Add hover effects to all links and buttons
    const hoverElements = document.querySelectorAll('a, button');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', handleHover);
        element.addEventListener('mouseleave', handleLeave);
    });
});