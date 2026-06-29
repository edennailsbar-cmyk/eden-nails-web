EDÉN NAILS - REFERIDOS CON GOOGLE SHEETS

Esta versión conecta la página con tu Apps Script:

https://script.google.com/macros/s/AKfycbw4H6LyAMR_IkxNmwS83hy9kexNHVIejZXW3lhvl3gSjDray2G8y_lHD8UxXVeo6hhf/exec

Qué hace:
1. Página privada /admin/referidos.html
   - Crea códigos para clientas reales.
   - Guarda automáticamente en Google Sheets, pestaña Codigos.
   - Si el WhatsApp ya existe, recupera el código existente.

2. Página pública
   - Solo permite usar códigos ya existentes.
   - Si el código no existe o no está activo, muestra error.
   - Si la persona intenta usar su propio código, muestra error.
   - Si el WhatsApp ya usó un código antes, muestra error.
   - Si todo está bien, guarda el uso en Google Sheets, pestaña Usos.

También mantiene Netlify Forms como respaldo.
