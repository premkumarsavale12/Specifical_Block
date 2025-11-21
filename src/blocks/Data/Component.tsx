interface DataBlockProps {
    dateOnly?: string | null;
    timeOnly?: string | null;
    monthOnly?: string | null;
    contect: string;
    description: string;
    age: number;
}

export const DataBlockComponent = ({ dateOnly, timeOnly,monthOnly,contect, description,age}: DataBlockProps) => {
    return (
        <section className="max-w-md mx-auto rounded-xl shadow-lg bg-white p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">

   
            <div className="mb-4">
                {dateOnly && (
                    <h1 className="text-3xl font-bold text-gray-800">
                        {dateOnly}
                    </h1>
                )}

                <div className="flex gap-4 mt-2 text-gray-500 text-sm">
                    {timeOnly && <span className="px-2 py-1 bg-gray-100 rounded-md">{timeOnly}</span>}
                    {monthOnly && <span className="px-2 py-1 bg-gray-100 rounded-md">{monthOnly}</span>}
                </div>
            </div>

 
            <div className="space-y-2 text-gray-700">
                <h4 className="text-lg font-semibold">{contect}</h4>
                <p className="text-sm">{description}</p>
                <p className="text-sm font-medium text-blue-600">Age: {age}</p>
            </div>
        </section>
    );
};
