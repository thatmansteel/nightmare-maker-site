// Simple gallery for now (we can add real images later)
const galleryItems = [
    { src: "assets/placeholder1.jpg", caption: "Nightmare 1" },
    { src: "assets/placeholder2.jpg", caption: "Nightmare 2" }
];

const grid = document.getElementById('gallery-grid');
if (grid) {
    galleryItems.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="${item.src}" alt="${item.caption}" class="w-full rounded-2xl border border-zinc-700">
            <p class="text-center mt-2 text-sm">${item.caption}</p>
        `;
        grid.appendChild(div);
    });
}

// Basic form message (we can connect it to real email later)
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent into the nightmare... (In a real site this would email you)');
        form.reset();
    });
}