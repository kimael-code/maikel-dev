# Guía de Versionado y Lanzamientos 🚀

Este proyecto utiliza **standard-version** para automatizar el versionado semántico y la generación del archivo `CHANGELOG.md` basándose en los mensajes de commit.

## 📋 Requisitos Previos

Para que el sistema funcione correctamente, debes seguir la convención de **Conventional Commits**:

- `feat:` para nuevas funcionalidades (genera un salto de versión **MENOR**).
- `fix:` para correcciones de errores (genera un salto de versión **PARCHE**).
- `chore:`, `docs:`, `style:`, `refactor:`, `test:` para otros cambios (no suelen generar saltos de versión por sí solos).
- Añadir `BREAKING CHANGE:` en el pie del commit genera un salto de versión **MAYOR**.

## 🚀 Pasos para realizar un lanzamiento

Cuando estés listo para liberar una nueva versión, sigue estos pasos:

### 1. Asegúrate de estar en la rama principal

```bash
git checkout main
git pull origin main
```

### 2. Ejecuta el comando de release

Este comando aumentará la versión en `package.json`, actualizará el `CHANGELOG.md` y creará un tag de git automáticamente.

**Para un lanzamiento automático (recomendado):**

```bash
npm run release
```

**Para forzar un tipo de versión específico:**

- Parche (0.0.x): `npm run release -- --release-as patch`
- Menor (0.x.0): `npm run release -- --release-as minor`
- Mayor (x.0.0): `npm run release -- --release-as major`

### 3. Sincroniza con el repositorio remoto

Una vez generado el tag y los cambios en local, envíalos al servidor:

```bash
git push --follow-tags origin main
```

## 🛠️ Comandos Útiles

- **Dry Run (Prueba en seco):** Para ver qué cambios se realizarían sin aplicarlos realmente.
  ```bash
  npm run release -- --dry-run
  ```
- **Primera Versión:** Si es la primera vez que etiquetas el proyecto.
  ```bash
  npm run release -- --first-release
  ```

---

_Documentación generada para el Portafolio de Maikel Carballo._
