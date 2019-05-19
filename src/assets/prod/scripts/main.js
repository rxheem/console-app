const Push = require('push.js');

// Reqqests to display notificaions
try {
  Push.Permission.request();
} catch (err) {
  // does nothing
}
