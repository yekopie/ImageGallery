const grid = document.getElementById("grid");
let num = 1;

for (let row = 1; row <= 6; row++) {
    for (let col = 1; col <= 6; col++) {
        // Ortadaki 2x2 alanı geçiyoruz
        if ((row === 3 || row === 4) && (col === 3 || col === 4)) {
            continue;
        }

        const box = document.createElement("div");
        box.classList.add("box");

        const img = document.createElement("img");
        img.src = `https://picsum.photos/900/900?random=${num++}`;
        
        // Her resme tıklanınca modal açılır ve resim gösterilir
        img.addEventListener("click", () => {
            const modalImg = document.getElementById("modalImage");
            modalImg.src = img.src;
            const modal = new bootstrap.Modal(document.getElementById("imageModal"));
            modal.show();
        });

        box.appendChild(img);
        grid.appendChild(box);
    }
}

// Ortadaki büyük kutu
const bigBox = document.createElement("div");
bigBox.classList.add("box", "big");

const bigImg = document.createElement("img");
bigImg.src = `https://picsum.photos/900/900?random=${num}`;

// Ortadaki büyük kutuya event ekliyoruz
bigImg.addEventListener("click", () => {
    const modalImg = document.getElementById("modalImage");
    modalImg.src = bigImg.src;
    const modal = new bootstrap.Modal(document.getElementById("imageModal"));
    modal.show();
});

bigBox.appendChild(bigImg);
grid.appendChild(bigBox);
