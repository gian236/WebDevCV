// ========================================
// API REST SIMPLE PARA GESTIONAR HABILIDADES
// ========================================

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// ----------------------------------------
// "Base de datos" en memoria
// ----------------------------------------
let skills = [
  { id: 1, name: 'Angular', level: 80, category: 'frontend' },
  { id: 2, name: 'React', level: 70, category: 'frontend' },
  { id: 3, name: 'Node.js', level: 85, category: 'backend' },
  { id: 4, name: 'Docker', level: 60, category: 'devops' }
];

// ----------------------------------------
// GET /skills - Obtener todas las habilidades
// ----------------------------------------
app.get('/skills', (req, res) => {
  res.json(skills);
});

// ----------------------------------------
// GET /skills/:id - Obtener una habilidad por ID
// ----------------------------------------
app.get('/skills/:id', (req, res) => {
  const id = Number(req.params.id);
  const skill = skills.find(s => s.id === id);
  if (!skill) return res.status(404).json({ error: 'Habilidad no encontrada' });
  res.json(skill);
});

// ----------------------------------------
// POST /skills - Crear una nueva habilidad
// ----------------------------------------
app.post('/skills', (req, res) => {
  const { name, level, category } = req.body;
  if (!name || level === undefined || !category) {
    return res.status(422).json({ error: 'Campos obligatorios: name, level, category' });
  }

  const nuevoId = Math.max(0, ...skills.map(s => s.id)) + 1;
  const newSkill = { id: nuevoId, name, level, category };
  skills.push(newSkill);
  res.status(201).json(newSkill);
});

// ----------------------------------------
// PATCH /skills/:id - Actualizar una habilidad
// ----------------------------------------
app.patch('/skills/:id', (req, res) => {
  const id = Number(req.params.id);
  const skill = skills.find(s => s.id === id);
  if (!skill) return res.status(404).json({ error: 'Habilidad no encontrada' });

  const { name, level, category } = req.body;
  if (name !== undefined) skill.name = name;
  if (level !== undefined) skill.level = level;
  if (category !== undefined) skill.category = category;

  res.json(skill);
});

// ----------------------------------------
// DELETE /skills/:id - Eliminar una habilidad
// ----------------------------------------
app.delete('/skills/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = skills.findIndex(s => s.id === id);
  if (index === -1) return res.status(404).json({ error: 'Habilidad no encontrada' });

  const deletedSkill = skills.splice(index, 1)[0];
  res.json(deletedSkill);
});

// ----------------------------------------
// Manejar rutas no encontradas
// ----------------------------------------
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// ----------------------------------------
// Iniciar servidor
// ----------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 API escuchando en http://localhost:${PORT}`);
  console.log(`📋 Endpoints disponibles:`);
  console.log(`   GET    /skills`);
  console.log(`   GET    /skills/:id`);
  console.log(`   POST   /skills`);
  console.log(`   PATCH  /skills/:id`);
  console.log(`   DELETE /skills/:id`);
});
