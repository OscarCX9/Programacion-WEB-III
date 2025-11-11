import { db } from '../config/db.js';

// 1️⃣ Registrar nueva categoría
export const registrarCategoria = async (req, res) => {
  const { nombre, descripcion } = req.body;
  const q = 'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)';
  try {
    await db.query(q, [nombre, descripcion]);
    res.json({ ok: true, mensaje: 'Categoría registrada' });
  } catch (err) {
    res.json(err);
  }
};

// 2️⃣ Listar todas las categorías
export const listarCategorias = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM categorias');
    res.json(rows);
  } catch (err) {
    res.json(err);
  }
};

// 3️⃣ Categoría con sus productos
export const categoriaConProductos = async (req, res) => {
  const { id } = req.params;
  try {
    const [categoria] = await db.query('SELECT * FROM categorias WHERE id = ?', [id]);
    if (categoria.length === 0) return res.json({ mensaje: 'Categoría no encontrada' });
    const [productos] = await db.query('SELECT * FROM productos WHERE categoria_id = ?', [id]);
    res.json({ categoria: categoria[0], productos });
  } catch (err) {
    res.json(err);
  }
};

// 4️⃣ Actualizar categoría
export const actualizarCategoria = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  const q = 'UPDATE categorias SET nombre = ?, descripcion = ?, fecha_act = NOW() WHERE id = ?';
  try {
    await db.query(q, [nombre, descripcion, id]);
    res.json({ ok: true, mensaje: 'Categoría actualizada' });
  } catch (err) {
    res.json(err);
  }
};

// 5️⃣ Eliminar categoría y sus productos
export const eliminarCategoria = async (req, res) => {
    const { id } = req.params;
    try {
      const q1 = 'DELETE FROM productos WHERE categoria_id = ?';
      await db.query(q1, [id]);
      const q2 = 'DELETE FROM categorias WHERE id = ?';
      await db.query(q2, [id]);
      res.json({ ok: true, mensaje: 'Categoría y sus productos eliminados' });
    } catch (err) {
      res.json(err);
    }
  };
  

// 6️⃣ Registrar nuevo producto
export const registrarProducto = async (req, res) => {
  const { nombre, precio, stock, categoria_id } = req.body;
  const q = 'INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?, ?, ?, ?)';
  try {
    await db.query(q, [nombre, precio, stock, categoria_id]);
    res.json({ ok: true, mensaje: 'Producto registrado' });
  } catch (err) {
    res.json(err);
  }
};

// 7️⃣ Listar productos con nombre de categoría
export const listarProductos = async (req, res) => {
  const q = `
    SELECT p.*, c.nombre AS categoria
    FROM productos p
    INNER JOIN categorias c ON p.categoria_id = c.id
  `;
  try {
    const [rows] = await db.query(q);
    res.json(rows);
  } catch (err) {
    res.json(err);
  }
};

// 8️⃣ Producto por ID con su categoría
export const productoPorId = async (req, res) => {
  const { id } = req.params;
  const q = `
    SELECT p.*, c.nombre AS categoria
    FROM productos p
    INNER JOIN categorias c ON p.categoria_id = c.id
    WHERE p.id = ?
  `;
  try {
    const [rows] = await db.query(q, [id]);
    res.json(rows[0]);
  } catch (err) {
    res.json(err);
  }
};

// 9️⃣ Actualizar producto
export const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, stock, categoria_id } = req.body;
  const q = `
    UPDATE productos 
    SET nombre = ?, precio = ?, stock = ?, categoria_id = ?, fecha_act = NOW()
    WHERE id = ?
  `;
  try {
    await db.query(q, [nombre, precio, stock, categoria_id, id]);
    res.json({ ok: true, mensaje: 'Producto actualizado' });
  } catch (err) {
    res.json(err);
  }
};

// 🔟 Modificar stock
export const modificarStock = async (req, res) => {
  const { id } = req.params;
  const { cantidad } = req.body;
  const q = 'UPDATE productos SET stock = stock + ? WHERE id = ?';
  try {
    await db.query(q, [cantidad, id]);
    res.json({ ok: true, mensaje: 'Stock actualizado' });
  } catch (err) {
    res.json(err);
  }
};


  