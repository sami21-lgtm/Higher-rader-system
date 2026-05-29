// Theme Mode Controller Node Engine
const segmentRadios = document.querySelectorAll('input[name="theme"]');

segmentRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        // Clear old view signatures from the parent viewport
        document.body.classList.remove('view-1', 'view-2', 'view-3');
        
        // Append active state modifiers dynamically
        if (e.target.id === 'v1') {
            document.body.classList.add('view-1');
        } else if (e.target.id === 'v2') {
            document.body.classList.add('view-2');
        } else if (e.target.id === 'v3') {
            document.body.classList.add('view-3');
        }
    });
});
