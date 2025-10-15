# API REST de Habilidades

API REST simple para gestionar habilidades (skills) de un CV. Permite operaciones CRUD (crear, leer, actualizar y eliminar) sobre una lista de habilidades en memoria.

## Tecnologías

- Node.js
- Express
- CORS

## Instalación

1. Clona el repositorio o copia los archivos.
2. Instala las dependencias:

```
npm install express cors
```

3. Inicia el servidor:

```
node api.js
```

El servidor escuchará en [http://localhost:3001](http://localhost:3001).

## Endpoints

### Obtener todas las habilidades

```
GET /skills
```
**Respuesta:**  
Lista de todas las habilidades.

---

### Obtener una habilidad por ID

```
GET /skills/:id
```
**Respuesta:**  
Objeto de la habilidad solicitada.

---

### Crear una nueva habilidad

```
POST /skills
```
**Body (JSON):**
```json
{
  "name": "Nombre",
  "level": 80,
  "category": "frontend"
}
```
**Respuesta:**  
Habilidad creada.

---

### Actualizar una habilidad

```
PATCH /skills/:id
```
**Body (JSON):**
```json
{
  "name": "Nuevo nombre",
  "level": 90,
  "category": "backend"
}
```
**Respuesta:**  
Habilidad actualizada.

---

### Eliminar una habilidad

```
DELETE /skills/:id
```
**Respuesta:**  
Habilidad eliminada.

---

## Notas

- Los datos se almacenan en memoria, se pierden al reiniciar el servidor.
- El campo `level` es un número (porcentaje de dominio).
- El campo `category` puede ser, por ejemplo, `frontend`, `backend`, `devops`, etc.

---

## Ejemplo de habilidad

```json
{
  "id": 1,
  "name": "Angular",
  "level": 80,
  "category": "frontend"
}
```

---

## Autor

API creada para fines educativos, por Gian Paolo Robelo.