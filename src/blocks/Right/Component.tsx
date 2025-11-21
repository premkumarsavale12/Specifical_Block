import React from "react";
import RichText from "@/components/RichText";
import { Media } from "@/components/Media";

interface RightProps {
  items: {
    media: any;
    richText: any;
  }[];
}

export const Right: React.FC<RightProps> = ({ items = [] }) => { 

  return ( 

    <div className="container mx-auto"> 

      <div className="flex flex-col md:flex-row items-start gap-6">

      
        <div className="w-full md:w-1/2"> 

          {items.map((item, index) => ( 

            <div key={index} className="mb-4"> 

              {item.media && <Media resource={item.media} />} 

            </div> 

          ))} 

        </div>

     
        <div className="w-full md:w-1/2"> 

          {items.map((item, index) => ( 

            <div key={index} className="mb-4"> 

              {item.richText && ( 

                <RichText data={item.richText} enableGutter={false} /> 

              )} 

            </div> 

          ))} 
          

          <button className="mt-4 px-6 py-3 w-40 h-12 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Click Me
          </button>
        </div>

      </div>
    </div>
  );
};
