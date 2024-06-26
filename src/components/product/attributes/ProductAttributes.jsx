export default function ProductAttributes({ attributes }) {
    if (!attributes || attributes.length === 0) {
        return <div className="text-gray-500">No hay atributos disponibles</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 border rounded-lg shadow-md">
            {attributes.map(attr => (
                <div key={attr.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <h3 className="font-semibold text-gray-700">{attr.name}</h3>
                    <p className="text-gray-500">{attr.value_name || 'N/A'}</p>
                </div>
            ))}
        </div>
    );
}
