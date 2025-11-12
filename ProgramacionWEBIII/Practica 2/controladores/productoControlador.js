import { insertaCategoria,listar,obtenerConProductos, actualizar, 
  eliminar,registrar, listarProd, obtenerPorId,
  actualizarProd, modificarStock} from '../modelos/productoModelo.js';

export const registrarCategoria = async (req, res) => {
  try {
    const resultado = await insertaCategoria(req.body);
    res.status(201).json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const listarCategorias = async (req, res) => {
  try {
    const categorias = await listar();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const categoriaConProductos = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await obtenerConProductos(id);

    if (!data) return res.status(404).json({ mensaje: "Categoría no encontrada" });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const actualizado = await actualizar(id, req.body);

    if (!actualizado) return res.status(404).json({ mensaje: "Categoría no encontrada" });

    res.status(200).json({ ok: true, mensaje: "Categoría actualizada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await eliminar(id);

    if (!eliminado) return res.status(404).json({ mensaje: "Categoría no encontrada" });

    res.status(200).json({ ok: true, mensaje: "Categoría y sus productos eliminados" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const registrarProducto = async (req, res) => {
  try {
    const nuevoProducto = await registrar(req.body);
    res.status(201).json({ ok: true, mensaje: "Producto registrado", producto: nuevoProducto });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const listarProductos = async (req, res) => {
  try {
    const productos = await listarProd();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const productoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await obtenerPorId(id);

    if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado" });

    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const actualizado = await actualizarProd(id, req.body);

    if (!actualizado)
      return res.status(404).json({ mensaje: "Producto no encontrado" });

    res.status(200).json({ ok: true, mensaje: "Producto actualizado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const modificarStockProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { cantidad } = req.body;
    const actualizado = await modificarStock(id, cantidad);

    if (!actualizado)
      return res.status(404).json({ mensaje: "Producto no encontrado" });

    res.status(200).json({ ok: true, mensaje: "Stock actualizado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};