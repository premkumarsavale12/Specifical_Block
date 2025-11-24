import { Item } from "@radix-ui/react-select";


export const Example = (props: any) => {


    const sliders = Array.isArray(props.sliders) ? props.sliders : [];

    if (sliders.length === 0) return null;

    
    return (

        <div> 

            {sliders.map((item: any, index: number) => (

                <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 mb-4 hover:shadow-xl transition-shadow duration-300 "
                >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 ">{item.title}</h3>


                    <img
                        src={item.image.thumbnailURL}
                        alt={item.image}

                    />
                    <p> {item.caption}</p>


                </div>
            ))}


        </div>
    )
}