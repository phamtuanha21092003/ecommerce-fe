import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
    return [{ title: "Products" }, { name: "description", content: "Products" }]
}

export default function Products() {
    return <div>Products</div>
}
