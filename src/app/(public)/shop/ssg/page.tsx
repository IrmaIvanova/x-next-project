import { ProductCard, type Product } from "@/components/ProductCard"
import { API_URL } from "@/constant"

export default async function shopSSGPage() {
    const respons = await fetch(API_URL)
    const products = (await respons.json()).products.map((product: {id:number, price:string, thumbnail:string, title:string }) => ({
        id: product.id,
        price: product.price,
        image: product.thumbnail,
        title: product.title
    })) as Product[]

    return <div className="grid grid-cols-4 gap-4">
        {products.map(product => (
            <ProductCard
                key={product.id}
                {...product} />
        ))}
    </div>
}