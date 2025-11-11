/*import { registrarCategoria } from '../modelos/productoModelo.js';

export const registrar = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const resultado = await registrarCategoria(nombre, descripcion);
    res.json(resultado);
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
};*/

import {
    registrarCategoria,
    listarCategorias,
    categoriaConProductos,
    actualizarCategoria,
    eliminarCategoria,
    registrarProducto,
    listarProductos,
    productoPorId,
    actualizarProducto,
    modificarStock
  } from '../modelos/productoModelo.js';
  
  export {
    registrarCategoria,
    listarCategorias,
    categoriaConProductos,
    actualizarCategoria,
    eliminarCategoria,
    registrarProducto,
    listarProductos,
    productoPorId,
    actualizarProducto,
    modificarStock
  };
  

