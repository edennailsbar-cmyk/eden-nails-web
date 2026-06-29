EDÉN NAILS - VERSIÓN CON DATOS EN NETLIFY FORMS

Esta versión hace que Netlify SÍ detecte los formularios.

Cuando publiques en Netlify, aparecerán en:
Proyecto → Formularios

Formularios:
1. referidas-eden
   - nombre_completo
   - whatsapp
   - cumpleaños
   - codigo_referida
   - pagina_origen

2. uso-codigo-eden
   - nombre_amiga
   - whatsapp_amiga
   - codigo_recibido
   - servicio_deseado
   - pagina_origen

IMPORTANTE:
- Esto funciona dentro de la misma página de Netlify.
- No necesitas Supabase ni otra cuenta.
- Netlify Forms actúa como lista/base de datos simple.
- Para validar “solo una vez”, revisa el WhatsApp en uso-codigo-eden.
- Para automatizar bloqueos reales se necesita base de datos con servidor, pero esta versión ya te permite ver todos los registros.

Cómo actualizar:
1. Descomprime este ZIP.
2. Sube todo el contenido a GitHub reemplazando lo anterior.
3. Haz Commit changes.
4. Netlify actualizará la página.
5. Luego prueba crear un código.
6. Ve a Netlify → Proyecto → Formularios.
