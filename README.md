# Edén Nails Bar - Panel propio

Esta versión elimina Decap CMS y no requiere Netlify Identity ni Git Gateway.

## Acceso al panel
Después de publicar en Netlify:
`/admin`

Contraseña inicial:
`eden2026`

## Cómo funciona
El panel permite preparar cambios de:
- Configuración general
- Servicios y precios
- Promociones
- Galería
- Videos
- Referidas

Para publicar cambios:
1. Entra a `/admin`
2. Edita lo que necesites
3. Entra a "Publicar cambios"
4. Descarga los archivos JSON
5. Súbelos a GitHub en la carpeta `content`, reemplazando los anteriores
6. Netlify actualizará la página automáticamente

## Videos
Sube archivos MP4 a:
`assets/videos/`

Luego en el panel usa rutas como:
`/assets/videos/reel1.mp4`

## Formularios
Los datos de referidas se guardan en Netlify Forms:
- `referidas-eden`
- `uso-codigo-eden`
