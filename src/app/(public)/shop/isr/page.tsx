import { ProductCard, type Product } from "@/components/ProductCard"
import { API_URL } from "@/constant"

export default async function shopISRPage() {
    const respons = await fetch(API_URL, {
        next: { revalidate: 300 }
    }
    )
    const products = (await respons.json()).products.map((product: any) => ({
        id: product.id,
        price: product.price,
        image: product.thumbnail,
        title: product.title
    })) as Product[]

    return <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
            <ProductCard
                key={product.id}
                {...product} />
        ))}
    </div>
}