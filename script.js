
const msgs = [
    "Aşkım, gülüşün dünyamı ışıl ışıl yapıyor… 🌹",
    "Sen benim mucizemsin… Öğretmenler günün kutlu olsun! ❤️",
    "Güller güzel olabilir ama sen hep daha güzelsin. 🌸",
    "Seninle geçen bir dakika bile paha biçilemez…",
    "İyi ki varsın prensesim, iyi ki benimlesin. ✨"
];
let index = 0;

function showNext(){
    index = (index + 1) % msgs.length;
    document.getElementById("msg").textContent = msgs[index];
}

// Floating hearts generator
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 90 + "%";
    heart.style.fontSize = (Math.random()*20 + 20) + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 700);
