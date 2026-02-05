const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, 'notification.mp3');
const dest = path.join(__dirname, 'sent_message_v2.mp3');

console.log(`Copying to ${dest}`);
try {
    fs.copyFileSync(src, dest);
    const stats = fs.statSync(dest);
    console.log(`Success. New size: ${stats.size}`);
} catch (err) {
    console.error('Error:', err);
}
