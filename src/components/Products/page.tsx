"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: "2021-08-31",
  useCdn: true,
});

export interface Product {
  _id: string;
  productName: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
  slug: {
    _type: "slug";
    current: string;
  };
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async (): Promise<void> => {
    try {
      const query = `*[_type == "product"] {
        _id,
        productName,
        price,
        description,
        discountPercentage,
        "imageUrl": image.asset->url,
        tags,
        slug
      }`;

      const data: Product[] = await sanity.fetch<Product[]>(query);
      setProducts(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Failed to fetch products:", error.message);
      } else {
        console.error("An unknown error occurred.");
      }
    }
  };

  const addToCart = (product: Product): void => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.productName} has been added to your cart!`);
  };

  const truncateDescription = (description: string): string => {
    return description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-2">
        Products From API&apos;s Data
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/product/${product.slug.current}`}>
              <div>
                <Image
                  src={product.imageUrl || "/placeholder-image.png"} // Fallback for missing imageUrl
                  alt={product.productName || "Product Image"}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="mt-4">
                  <h2 className="text-lg font-semibold">
                    {product.productName}
                  </h2>
                  <p className="text-slate-800 mt-2 text-sm">
                    {truncateDescription(product.description)}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="text-slate-600 font-bold">
                        ${product.price.toFixed(2)}
                      </p>
                      {product.discountPercentage > 0 && (
                        <p className="text-sm text-green-600">
                          {product.discountPercentage}% OFF
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {Array.isArray(product.tags) && product.tags.length > 0 ? (
                      product.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-slate-400 text-black px-2 py-1"
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-gray-500">
                        No tags available
                      </span>
                    )}
                  </div>
                  <button
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div>
                  <p className="font-medium text-slate-900">
                    {item.productName}
                  </p>
                  <p className="text-sm text-blue-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <Image
                  src={item.imageUrl || "/placeholder-image.png"} // Fallback for missing imageUrl
                  alt={item.productName || "Cart Image"}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">
            Your Cart Is Empty. Please Add Products.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
