import express from "express";
import{registrarCategoria,listarCategorias,categoriaConProductos,actualizarCategoria,eliminarCategoria,
registrarProducto,listarProductos,productoPorId,actualizarProducto,modificarStockProducto} 
from'../controladores/productoControlador.js'
const rutas=express.Router();
rutas.post('/categorias/adi', registrarCategoria);
rutas.get("/categorias", listarCategorias);
rutas.get("/categorias/:id", categoriaConProductos);
rutas.put("/categorias/:id", actualizarCategoria);
rutas.delete("/categorias/:id", eliminarCategoria);
rutas.post("/productos", registrarProducto);
rutas.get("/productos", listarProductos);
rutas.get("/productos/:id", productoPorId);
rutas.put("/productos/:id", actualizarProducto);
rutas.patch("/productos/:id/stock", modificarStockProducto);
export default rutas;

