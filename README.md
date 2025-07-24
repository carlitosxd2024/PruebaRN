# 🧪 Prueba Técnica – React Native Junior (TypeScript)

## 🎯 Objetivo

Crear una aplicación móvil sencilla utilizando **React Native con TypeScript**, que consuma datos desde la API pública [Fake Store API](https://fakestoreapi.com/), y que tenga dos pestañas principales: `Home` y `Perfil`.

> ⏱ **Duración máxima de la prueba: 1 hora y 30 minutos.**

---

## 🧾 Instrucciones generales

1. **Haz un fork de este repositorio.**
2. Realiza tu desarrollo en el fork.
3. Una vez completado, envía el enlace público de tu repositorio a los siguientes correos:
   - jorgezambrano@novicompu.com
   - jpalacios@novicompu.com
   - jbermeo@novicompu.com

---

## 🧭 Estructura general de la app

- La app debe estar construida con **React Native y TypeScript**.
- Debe contar con **navegación de pestañas** (`tabs`) con dos secciones:
  - `Home`
  - `Perfil`
- La estructura del código debe estar ordenada.
- Consumir datos desde la API pública

---

## 🏠 Pestaña: Home

- Obtener productos desde el endpoint de productos
- Mostrar una lista de productos. Cada producto debe mostrar:
  - Imagen
  - Título
  - Precio
- Al presionar un producto, se debe navegar a una pantalla de **detalle**, que incluya:
  - Imagen del producto
  - Nombre
  - Categoría
  - Precio
  - Descripción

---

## 👤 Pestaña: Perfil

- Obtener la información del usuario con ID 1
- Mostrar visualmente los datos disponibles del usuario.
- **Importante:** evitar mostrar el `password` u otra información sensible.

---

## ✅ Criterios de evaluación

| Criterio                     | Descripción |
|-----------------------------|-------------|
| ✅ Funcionalidad             | Las pantallas deben cumplir con lo solicitado |
| 🧼 Código limpio             | Claridad, legibilidad, buena estructura y nombres adecuados |
| 🛠 Uso correcto de TypeScript| Tipado de props, datos y estados |
| 🎨 Diseño visual             | Se valora una buena presentación, aunque sea simple |
| 📁 Organización del proyecto| Separación entre componentes, servicios, pantallas, etc. |

---

## 📘 Recomendaciones

- Puedes utilizar cualquier librería de navegación, `fetch` o `axios`.
- El diseño visual puede ser simple, pero se valora la buena presentación.
- No es necesario implementar autenticación ni lógica compleja.
- No se evaluará el uso de librerías externas de estado.

---

¡Mucho éxito!
