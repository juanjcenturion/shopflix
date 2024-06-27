export default function ProductAttributes({ attributes }) {
    if (!attributes || attributes.length === 0) {
        return <div className="text-gray-500">No hay atributos disponibles</div>;
    }

    return (
        <div className="grid grid-cols-3 gap-4 p-4 mb-3 border rounded-lg shadow-lg from bg-gray-50">
            {attributes.map(attr => (
                <div key={attr.id} className="bg-white p-4 rounded-lg shadow-md border-md">
                    <h3 className="font-semibold text-gray-700">{attr.name}</h3>
                    <p className="text-gray-500">{attr.value_name || 'N/A'}</p>
                </div>
            ))}
        </div>
    );
}
