const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'frontend/src/assets/sounds/notification.mp3');
const dest = path.join(__dirname, 'frontend/src/assets/sounds/message_sent.mp3');

console.log('Source:', src);
console.log('Dest:', dest);

try {
    if (fs.existsSync(src)) {
        console.log('Source exists.');
        fs.copyFileSync(src, dest);
        console.log('Successfully copied to:', dest);
    } else {
        console.error('Source file NOT found!');
    }
} catch (error) {
    console.error('Error copying file:', error);
}
