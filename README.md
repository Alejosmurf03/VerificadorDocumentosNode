<div align="center">

# 🔍 Verificador de Documentos PDF — Node.js

**Herramienta de línea de comandos que analiza archivos PDF de forma masiva, detecta documentos corruptos o dañados y los clasifica automáticamente.**

[![Node.js](https://img.shields.io/badge/Node.js-JavaScript-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![pdf-parse](https://img.shields.io/badge/pdf--parse-1.1.1-red?style=for-the-badge&logo=adobeacrobatreader&logoColor=white)](https://www.npmjs.com/package/pdf-parse)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](LICENSE)

</div>

---

## 📋 Descripción

**VerificadorDocumentosNode** es un script de Node.js que recorre un conjunto de archivos PDF, intenta leer y parsear cada uno, y determina si el documento está **íntegro** o **dañado/corrupto**. Los resultados se reflejan directamente en la estructura de carpetas del proyecto: `pdfs_buenos` y `pdfs_dañados`.

Este tipo de herramienta es útil en contextos donde se procesan grandes volúmenes de documentos digitales y se necesita garantizar su integridad antes de utilizarlos.

---

## 🚀 Tecnologías Utilizadas

| Tecnología | Versión | Descripción |
|---|---|---|
| **Node.js** | LTS | Runtime de JavaScript para ejecución en servidor/CLI |
| **pdf-parse** | ^1.1.1 | Librería para extraer y analizar contenido de archivos PDF |
| **fs (nativo)** | Node built-in | Lectura de archivos y directorios del sistema |
| **path (nativo)** | Node built-in | Manejo de rutas de archivos multiplataforma |

---

## 📁 Estructura del Proyecto

```
VerificadorDocumentosNode/
├── pdfs_buenos/        # 📄 PDFs que pasaron la verificación correctamente
├── pdfs_dañados/       # ⚠️  PDFs que fallaron al parsear (corruptos/inválidos)
├── pdfs2.js            # 🧠 Script principal del verificador
└── package.json        # Dependencias del proyecto
```

---

## ⚙️ ¿Cómo funciona?

El script aplica el siguiente flujo para cada archivo PDF encontrado:

```
📂 Leer directorio de PDFs
        │
        ▼
   Por cada archivo .pdf
        │
        ├─ Leer el buffer del archivo con fs.readFile()
        │
        ├─ Intentar parsear con pdf-parse()
        │
        ├─ ✅ Éxito  →  PDF válido  →  Reportar como BUENO
        │
        └─ ❌ Error  →  PDF corrupto / inválido  →  Reportar como DAÑADO
```

> La verificación se basa en que `pdf-parse` lanza una excepción cuando el archivo no tiene una estructura PDF válida, está truncado, cifrado sin contraseña, o su contenido está corrupto.

---

## 🛠️ Instalación y Uso

### Requisitos

- [Node.js](https://nodejs.org/) v14 o superior

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Alejosmurf03/VerificadorDocumentosNode.git
cd VerificadorDocumentosNode

# 2. Instalar dependencias
npm install

# 3. Agregar tus PDFs a la carpeta correspondiente y ejecutar
node pdfs2.js
```

### Resultado esperado en consola

```
✅ archivo1.pdf  →  PDF válido  |  Páginas: 5  |  Texto extraído: 1240 chars
✅ archivo2.pdf  →  PDF válido  |  Páginas: 2  |  Texto extraído: 430 chars
❌ archivo3.pdf  →  PDF dañado  |  Error: Invalid PDF structure
❌ archivo4.pdf  →  PDF dañado  |  Error: Unexpected end of file
```

---

## 🧠 Conceptos Aplicados

- ✅ **Manejo del sistema de archivos** con el módulo nativo `fs` de Node.js
- ✅ **Procesamiento asíncrono** con `async/await` para leer múltiples archivos
- ✅ **Manejo de errores con `try/catch`** — base del mecanismo de detección
- ✅ **Parseo de PDFs** con `pdf-parse` (extracción de texto, metadatos y páginas)
- ✅ **Flujo de clasificación automática** basado en el resultado del parseo
- ✅ **Scripting en Node.js** — uso de Node como herramienta de automatización CLI
- ✅ **Módulos nativos** (`fs`, `path`) sin dependencias innecesarias

---

## 💡 Casos de Uso Reales

Este tipo de verificador es aplicable en escenarios como:

- Sistemas de gestión documental que validan archivos antes de almacenarlos
- Pipelines de procesamiento de documentos legales o académicos
- Auditorías de integridad en repositorios de archivos digitales
- Detección de PDFs corruptos en cargas masivas por usuarios

---

## 👨‍💻 Autor

**Manuel Vega** — [@Alejosmurf03](https://github.com/Alejosmurf03)

---

<div align="center">

⭐ Si este proyecto te fue útil, ¡no olvides dejar tu estrella!

</div>
