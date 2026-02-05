const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, 'notification.mp3');
const dest = path.join(__dirname, 'message_sent.mp3');

console.log(`Source: ${src}`);
console.log(`Dest: ${dest}`);

try {
    if (fs.existsSync(dest)) {
        console.log('Destination exists, removing...');
        fs.unlinkSync(dest);
    }
    fs.copyFileSync(src, dest);
    console.log('Copy complete.');
    const stats = fs.statSync(dest);
    console.log(`New size: ${stats.size}`);
} catch (err) {
    console.error('Error:', err);
}
