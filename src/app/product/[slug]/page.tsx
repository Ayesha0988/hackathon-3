import { client } from "../../../sanity/lib/client";
import { Product } from "../../../components/Products/page";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "../../../sanity/lib/image";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        productName,
        price,
        description,
        discountPercentage,
        "imageUrl": image.asset->url,
        tags
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* Product Image */}
        <div className="aspect-square">
          {product.imageUrl && (
            <Image
              src={urlFor(product.imageUrl).url()}
              alt={product.productName}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          {/* Product Name */}
          <h1 className="text-3xl font-bold text-gray-800">
            {product.productName}
          </h1>

          {/* Product Description */}
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Product Price */}
          <p className="text-2xl font-semibold text-green-700">
            ${product.price.toFixed(2)}
          </p>

          {/* Optional Tags */}
          {product.tags?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
