import { db } from '../config/db.js';

export const insertaCategoria = async (categoria) => {
  const { nombre, descripcion } = categoria;
  const [resultado] = await db.query('INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
  [nombre, descripcion]);
  return { id: resultado.insertId, ...categoria };
};

export const listar = async () => {
  const [rows] = await db.query("SELECT * FROM categorias");
  return rows;
};

export const obtenerConProductos = async (id) => {
  const [categoria] = await db.query("SELECT * FROM categorias WHERE id = ?", [id]);
  if (categoria.length === 0) return null;

  const [productos] = await db.query("SELECT * FROM productos WHERE categoria_id = ?", [id]);
  return { categoria: categoria[0], productos };
};

export const actualizar = async (id, { nombre, descripcion }) => {
  const q = "UPDATE categorias SET nombre = ?, descripcion = ?, fecha_act = NOW() WHERE id = ?";
  const [resultado] = await db.query(q, [nombre, descripcion, id]);
  return resultado.affectedRows > 0;
};

export const eliminar = async (id) => {
  await db.query("DELETE FROM productos WHERE categoria_id = ?", [id]);
  const [resultado] = await db.query("DELETE FROM categorias WHERE id = ?", [id]);
  return resultado.affectedRows > 0;
}

export const registrar = async (producto) => {
  const { nombre, precio, stock, categoria_id } = producto;
  const [resultado] = await db.query(
    "INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?, ?, ?, ?)",
    [nombre, precio, stock, categoria_id]
  );
  return { id: resultado.insertId, ...producto };
};

export const listarProd = async () => {
  const [rows] = await db.query(`
    SELECT p.*, c.nombre AS categoria
    FROM productos p
    INNER JOIN categorias c ON p.categoria_id = c.id
  `);
  return rows;
};

export const obtenerPorId = async (id) => {
  const [rows] = await db.query(`
    SELECT p.*, c.nombre AS categoria
    FROM productos p
    INNER JOIN categorias c ON p.categoria_id = c.id
    WHERE p.id = ?
  `, [id]);
  return rows[0];
};

export const actualizarProd = async (id, producto) => {
  const { nombre, precio, stock, categoria_id } = producto;
  const q = `
    UPDATE productos
    SET nombre = ?, precio = ?, stock = ?, categoria_id = ?, fecha_act = NOW()
    WHERE id = ?
  `;
  const [resultado] = await db.query(q, [nombre, precio, stock, categoria_id, id]);
  return resultado.affectedRows > 0;
};

export const modificarStock = async (id, cantidad) => {
  const q = "UPDATE productos SET stock = stock + ? WHERE id = ?";
  const [resultado] = await db.query(q, [cantidad, id]);
  return resultado.affectedRows > 0;
};