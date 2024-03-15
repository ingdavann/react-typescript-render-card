import {Products} from "../HomeComponent.tsx";

export default function CardComponent({id,title,price,description,image} : Products) {
    return(
        <>
            <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
                <div className="relative">
                    <img className="w-full h-[250px] md:h-[150px] lg:h-[300px] " src={image}
                         alt="Product Image"/>
                    <div
                        className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-medium mb-2" style={{lineHeight: "1.5rem" , height: "3em", overflow: "hidden"}}>{title}</h3>
                    <p className="text-gray-600 text-sm mb-4" style={{lineHeight: "1.5rem" , height: "3em", overflow: "hidden"}}>{description}</p>
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-lg">{price}</span>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}