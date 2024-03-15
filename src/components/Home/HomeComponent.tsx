import CardComponent from "./Card/CardComponent.tsx";
import {useEffect, useState} from "react";
import LoadingComponent from "../Loader/LoadingComponent.tsx";

export type Products = {
    readonly id? : number,
    title : string,
    price: number,
    description: string,
    image: string,
}
export default function HomeComponent(){
    const [getProduct, setGetProduct] = useState<Products[]>()
    const [loading, setLoading] = useState(false)
    async function fetchProduct(){
        setLoading(true)
        try{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setGetProduct(data)
        }
        catch(error){
            console.log(error);
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchProduct()
    },[])
    return(
        <>
            {
                loading ? ( <LoadingComponent/> )
                : (
                    getProduct?.map((product, index) => (
                        <CardComponent
                            key={index}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                        />
                    ))
                )
            }
        </>
    )
}