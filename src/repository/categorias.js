import { conexionbbdd } from "../conexionbbdd.js";
import { supabase } from "../supabase.js";

// Gestionar categorías
export async function anadirCategoria(categoria) {
    try {
        const { data, error } = await supabase
            .from('categoria')
            .insert([{ nombre: categoria }]);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error al añadir categoría:', error);
        throw error;
    }
}

// Ver productos de una categoría dado su nombre
export async function getProductByCategoryName(name) {
    try {
        const { data, error } = await supabase
            .from('articulo')
            .select('*')
            .eq('categoria.nombre', name)
            .join('categoria', 'categoria_id', 'categoria.id');
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error al obtener productos por nombre de categoría:', error);
        throw error;
    }
}

// Ver productos de una categoría dado su ID
export async function getProductByCategoryId(id) {
    try {
        const { data, error } = await supabase
            .from('articulo')
            .select('*')
            .eq('categoria_id', id);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error al obtener productos por ID de categoría:', error);
        throw error;
    }
}

// Ver subcategorías de una categoría dado su ID
export async function verSubCategoriade(id) {
    try {
        const { data, error } = await supabase
            .from('subcategoria')
            .select('*')
            .eq('categoria_id', id);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error al obtener subcategorías por ID de categoría:', error);
        throw error;
    }
}

// Añadir subcategoría
export async function anadirSubCategoria(subcategoria) {
    try {
        const { data, error } = await supabase
            .from('subcategoria')
            .insert([{ nombre: subcategoria.nombre, categoria_id: subcategoria.categoria_id }]);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error al añadir subcategoría:', error);
        throw error;
    }
}

// Eliminar categoría
export async function eliminarCategoria(id) {
    try {
        const { data, error } = await supabase
            .from('categoria')
            .delete()
            .eq('id', id);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error al eliminar categoría:', error);
        throw error;
    }
}

// Modificar categoría
export async function modificarCategoria(id, nombre) {
    try {
        const { data, error } = await supabase
            .from('categoria')
            .update({ nombre: nombre })
            .eq('id', id);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error al modificar categoría:', error);
        throw error;
    }
}

// Eliminar subcategoría
export async function eliminarSubCategoria(id) {
    try {
        const { data, error } = await supabase
            .from('subcategoria')
            .delete()
            .eq('id', id);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error al eliminar subcategoría:', error);
        throw error;
    }
}

// Modificar subcategoría
export async function modificarSubCategoria(id, nombre) {
    try {
        const { data, error } = await supabase
            .from('subcategoria')
            .update({ nombre: nombre })
            .eq('id', id);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error al modificar subcategoría:', error);
        throw error;
    }
}