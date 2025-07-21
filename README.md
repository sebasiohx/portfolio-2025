# Portafolio web 2025

Un portafolio web moderno desarrollado con **Astro**, **React** y **TypeScript**. Este proyecto utiliza las últimas tecnologías web para crear una experiencia rápida y atractiva.

## 🚀 Tecnologías utilizadas

- **[Astro](https://astro.build/)** - Framework web moderno y rápido
- **[React](https://react.dev/)** - Biblioteca para interfaces de usuario
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript con tipado estático
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Sass](https://sass-lang.com/)** - Preprocesador CSS
- **[MDX](https://mdxjs.com/)** - Markdown con componentes JSX

## 📁 Estructura del proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/     # Imágenes del proyecto
│   ├── components/     # Componentes reutilizables
│   ├── config/         # Archivo ts con los datos del sitio web
│   ├── content/        # Coleccion de contenidos con los trabajos
│   ├── layouts/        # Plantillas de página
│   ├── pages/          # Páginas del sitio
│   ├── styles/         # Archivos de estilos
│   └── utils/          # Data y funciones de utilidad
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Comandos disponibles

Todos los comandos se ejecutan desde la raíz del proyecto usando la terminal:

| Comando | Acción |
|---------|--------|
| `npm install` | Instala todas las dependencias del proyecto |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run start` | Alias para `npm run dev` |
| `npm run build` | Construye el sitio para producción en `./dist/` |
| `npm run preview` | Previsualiza la construcción localmente antes del despliegue |
| `npm run astro` | Ejecuta comandos CLI de Astro |
| `npm run astro -- --help` | Muestra ayuda para los comandos de Astro CLI |
| `npm run dev -- --host` | Inicia un servidor de desarrollo el cual será accesible desde otros dispositivos en tu red local |


## 🔧 Configuración

### TypeScript
El proyecto está configurado con TypeScript estricto y utiliza alias de rutas para una mejor organización:

- `@images/*` → `./src/assets/images/*`
- `@styles/*` → `./src/styles/*`
- `@components/*` → `./src/components/*`
- `@utils/*` → `./src/utils/*`

### Características principales
- **Renderizado estático** para máximo rendimiento
- **Componentes React** integrados con Astro
- **Estilos con Tailwind CSS** y Sass
- **Tipado completo** con TypeScript
- **Optimización automática** de imágenes y assets

## 🚀 Desarrollo

1. **Clona el repositorio**
```bash
git clone https://github.com/sebasiohx/portfolio-2025.git
cd portfolio-2025
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre tu navegador** y ve a `http://localhost:4321`

## 📦 Construcción para producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos se generarán en el directorio `./dist/` listos para ser desplegados en cualquier servidor web.

## 📱 Características del portafolio

- Diseño responsivo y moderno
- Carga rápida y optimización SEO
- Animaciones y transiciones suaves
- Compatibilidad con dispositivos móviles
- Código limpio y mantenible

---

©2025 Sebastián Olate Huenuñir.

Desarrollado en Chile con Astro y mucho CSS.

Diseño inspirado en la serie Neon Genesis Evangelion (新世紀エヴァンゲリオン)