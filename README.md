# Licitum · Abogados y Notarios — Sitio web

Sitio web profesional, adaptable a computadora, tablet y celular. No necesita servidor ni instalación: funciona directo en **GitHub Pages**.

## Estructura

```
licitum-web/
├── index.html        ← estructura de la página (no hace falta tocarlo)
├── css/styles.css    ← diseño y colores
├── js/config.js      ← ✏️ TODO EL CONTENIDO SE EDITA AQUÍ
├── js/main.js        ← funcionamiento (no hace falta tocarlo)
└── img/              ← imágenes
```

## Cómo editar (sin saber programar)

Abra **`js/config.js`** (en GitHub: clic en el archivo → ícono de lápiz ✏️). Ahí está todo:

| Qué quiere cambiar | Dónde en `config.js` |
|---|---|
| Teléfonos, WhatsApp, correo, dirección, horario | `contacto` |
| Título y texto de la portada | `portada` |
| Texto "Quiénes somos" y la frase | `nosotros` |
| Servicios (agregar, quitar, cambiar) | `servicios.lista` |
| Pasos de trabajo | `proceso.pasos` |
| Abogados del equipo | `equipo.miembros` |
| Testimonios | `testimonios.lista` (vacía = sección oculta) |
| Preguntas frecuentes | `preguntas.lista` |
| Facebook / Instagram / LinkedIn / TikTok | `redes` (deje `""` para ocultar) |
| Colores | `general.colorPrincipal` y `general.colorAcento` |

**Reglas:** cambie solo el texto entre comillas `"..."`, no borre comas `,` ni llaves `{ }`. Para agregar un servicio, copie un bloque `{ icono: ..., titulo: ..., texto: ... },` y péguelo debajo.

Iconos disponibles para servicios: `notaria, empresa, balanza, familia, contrato, casa, trabajo, escudo, documento, herencia`.

## Cambiar imágenes

| Archivo | Uso | Tamaño sugerido |
|---|---|---|
| `img/henry-barreda.jpg` | **Foto del Lic. Barreda (reemplazar)** | 800×1000 px, vertical |
| `img/oficina.jpg` | Sección "Quiénes somos" | 900×1100 px, vertical |
| `img/fondo-hero.jpg` | Fondo de la portada | 1920×1100 px |
| `img/logo-emblema.png` | Logo del menú (fondo transparente) | PNG |
| `img/logo-completo.png` | Logo grande (portada y pie) | PNG transparente |
| `img/favicon.png` | Ícono de la pestaña | 256×256 px |
| `img/og-imagen.jpg` | Vista previa al compartir en WhatsApp/Facebook | 1200×630 px |

Lo más fácil: suba la nueva imagen **con el mismo nombre** para reemplazarla (GitHub → carpeta `img` → *Add file* → *Upload files*).

## Formulario de contacto

No necesita servidor: al enviar, abre **WhatsApp** con el mensaje ya redactado al número de `contacto.whatsapp`. También tiene la opción "enviar por correo".

## Publicar en GitHub Pages

1. Cree un repositorio en GitHub (ej. `licitum`).
2. Suba **todo el contenido** de esta carpeta (que `index.html` quede en la raíz).
3. Vaya a **Settings → Pages**.
4. En *Source* elija **Deploy from a branch**, rama `main`, carpeta `/ (root)` → **Save**.
5. En 1–2 minutos estará en `https://SU-USUARIO.github.io/licitum/`.

Por terminal:
```bash
git init
git add .
git commit -m "Sitio web Licitum"
git branch -M main
git remote add origin https://github.com/SU-USUARIO/licitum.git
git push -u origin main
```

### Dominio propio (opcional)
Si compran `licitum.com.gt` u otro: en **Settings → Pages → Custom domain** escríbalo, y en el proveedor del dominio cree un registro `CNAME` apuntando a `SU-USUARIO.github.io`.

## Mapa
Para ajustar la ubicación exacta: Google Maps → busque la oficina → **Compartir → Insertar un mapa** → copie solo el enlace que está dentro de `src="..."` y péguelo en `contacto.mapa`.
