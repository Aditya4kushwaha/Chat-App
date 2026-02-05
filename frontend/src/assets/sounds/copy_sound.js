const fs = require('fs');
try {
    fs.copyFileSync('notification.mp3', 'message_sent.mp3');
    console.log('Successfully copied notification.mp3 to message_sent.mp3');
} catch (err) {
    console.error('Error copying file:', err);
    process.exit(1);
}
