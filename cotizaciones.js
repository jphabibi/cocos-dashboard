# Cocos Capital Dashboard — Deploy en Netlify

## Estructura del proyecto

```
cocos-dashboard/
├── netlify.toml              ← Configuración de Netlify
├── netlify/
│   └── functions/
│       └── cotizaciones.js   ← Función serverless (proxy dolarapi.com)
└── public/
    └── index.html            ← Dashboard completo
```

## Cómo deployar en Netlify (3 pasos)

### Opción A — Drag & Drop (más simple)
1. Entrá a https://app.netlify.com
2. Creá una cuenta gratis si no tenés
3. En el dashboard, arrastrá **la carpeta `cocos-dashboard`** completa al área de deploy
4. Listo — Netlify te da una URL pública en segundos

### Opción B — GitHub (recomendado para actualizaciones)
1. Subí esta carpeta a un repositorio de GitHub
2. En Netlify: **Add new site → Import from Git**
3. Conectá el repo, dejá todo por defecto
4. Deploy automático cada vez que hagas cambios

## Cotizaciones en vivo
- La función `cotizaciones.js` llama a **dolarapi.com** desde el servidor (sin restricciones CORS)
- Se actualiza automáticamente cada **5 minutos** en el browser
- Si la API falla, el dashboard muestra campos manuales como fallback
- Fuentes: Banco Nación (Oficial) y Mercado de bonos AL30/GD30 (MEP)

## Personalización
Para cambiar el nombre del cliente o la cartera inicial, editá estas líneas en `public/index.html`:
- Línea ~220: array `portfolio` con los instrumentos
- Línea ~380: texto `Sofía Habibi`
