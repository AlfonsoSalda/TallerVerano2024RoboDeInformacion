const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.querySelector('.matrix').appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アカサタナハマヤラワガザダバパキシチニヒミリギジヂビピクスツヌフムユルグズヅブプケセテネヘメレゲゼデベペコソトノホモヨロヲゴゾドボポヴ'.split('');
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const nums = '0123456789'.split('');

const alphabet = katakana.concat(latin).concat(nums);

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = Array.from({ length: columns }).fill(1);

const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    rainDrops.forEach((y, index) => {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        const x = index * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[index] = 0;
        }
        rainDrops[index]++;
    });
};

setInterval(draw, 30);
