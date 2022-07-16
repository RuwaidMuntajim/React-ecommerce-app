import { commerce } from "../../../lib/commerce";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Product from "./Product";
import loading from "../../../Assets/Svgs/loading.svg"
//interface
export interface productObj {
    name: string,
    imgURL: string,
    key: string,
    price: string,
}

const Products = () => {

    const [products, setProducts] = useState<productObj[]>([]);
    const [isLoading, setIsloading] = useState<boolean>(true)

    const [cate, setCate] = useState<string>("All")
    const categories = ["All", "Electronics", "Furnitures"]

    const selectStyle = "overflow-x-hidden text-white w-24 lg:w-32 rounded-full text-xs lg:text-base font-semibold";
    const unSelectStyle = "bg-gray-200 text-black py-1 w-24 lg:w-32 rounded-full text-xs lg:text-base font-semibold";
    const layoutStyle = "py-1 w-full rounded-full bg-black"

    //functions
    let getProducts: () => Promise<productObj[]>

    getProducts = async () => {
        const response = await commerce.products.list();
        console.log(response)  
        response?.data.forEach(product => {
            products.push({
                name: product.name,
                price: product.price.formatted_with_symbol,
                key: product.id,
                imgURL: product.media.source
            })
        })
        setProducts([...products])
        setIsloading(false)
        return products
    }


    useEffect(() => {
        setTimeout(() => {
            getProducts().
            then((products) => console.log(products))  
        }, 2000)
          
    }, [])


    return (
        <div className='Products text-xs font-extrabold space-y-9'>
            <div style={{backgroundColor: "rgba(255, 255, 255, 0.9)"}} className="bg-white h-14 sticky top-0 w-full flex items-center justify-evenly">
            
                {
                    categories.map(cat =>
                         
                        cat == cate ?
                        <motion.button onClick={() => setCate(cat)} className={selectStyle}>
                            <motion.div layoutId="layoutStyle" className={layoutStyle}>
                                {cat}
                            </motion.div>
                        </motion.button>
                        :
                        <motion.button onClick={() => setCate(cat)} className={unSelectStyle}>
                            {cat}
                        </motion.button>
                        
                    )
                }
            
            </div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-5 mx-6 md:mx-8 lg:mx-16'>
                {products.length > 0 && products.map(product => (
                    <Product product={product}/>
                ))}
            </div>
            {isLoading && <div className="h-44 flex flex-col items-center justify-center mb-8 text-base"><img className="h-32 w-32 object-cover" src={loading}></img>Loading...</div>}
                


        </div>
    );
};

export default Products;
