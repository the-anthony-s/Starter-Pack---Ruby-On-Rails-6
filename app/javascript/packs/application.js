require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

window.jQuery = $;
window.$ = $;

// Check website theme
window.matchMedia('(prefers-color-scheme: dark)').matches