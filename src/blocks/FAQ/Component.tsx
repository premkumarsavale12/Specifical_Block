


export const FAQ = (props: any) => { 
    console.log(props)

    const items = Array.isArray(props.items) ? props.items : [];

    if (items.length === 0) return null;

    return (
        <div>
            {items.map((item: any, index: number) => (
                <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 mb-4 hover:shadow-xl transition-shadow duration-300 "
                >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 ">{item.Question}</h3>
                    <p className="text-gray-600">{item.Answer}</p>
                </div>

            ))}
        </div>
    );
};

