export async function GetAllCategories() {
    try {
        const response = await fetch('https://api.mercadolibre.com/sites/MLA/categories');
        if (!response.ok) {
            throw new Error('Response not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}

export async function GetProductById (id) {
    try {
        const response = await fetch(`https://api.mercadolibre.com/items/${id}`)
        if (!response.ok) {
            throw new Error('Response not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}


export async function fetchSelectedProducts(selectedIds) {
    try {
        const products = await Promise.all(
            selectedIds.map(async id => {
                const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
                if (!response.ok) {
                    throw new Error('Response not ok');
                }
                return response.json();
            })
        );
        return products;
    } catch (error) {
        console.error('Error fetching selected products:', error);
        throw error;
    }
}
