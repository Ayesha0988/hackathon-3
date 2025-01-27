"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
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
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
  slug: {
    _type: "slug";
    current: string;
  };
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"] {
        _id,
        productName, // Changed from title to productName
        price,
        description,
        discountPercentage,
        "imageUrl": image.asset->url,
        tags,
        slug
      }`;
    
      const data = await sanity.fetch(query);
      console.log("Fetched Products Data:", data); 
      setProducts(data);
    } catch (error: any) {
      console.error("Failed to Fetch Products:", error.message || error);
    }
  
  };



  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.productName} has been added to your cart!`); 
  };

  function truncateDescription(description: string): string {
    return description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-2">
        Products From API's Data
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/product/${product.slug.current}`}>
              <Image
                src={product.imageUrl}
                alt={product.productName} 
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{product.productName}</h2> 
                <p className="text-slate-800 mt-2 text-sm">
                  {truncateDescription(product.description)}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-slate-600 font-bold"> ${product.price}</p>
                    {product.discountPercentage > 0 && (
                      <p className="text-sm text-green-600">
                        {product.discountPercentage} % OFF
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {Array.isArray(product.tags) && product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-slate-400 text-black  px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
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
                  <p className="font-medium text-slate-900">{item.productName}</p> {/* Changed from title to productName */}
                  <p className="text-sm text-blue-600">
                    ${item.price.toFixed(2)}
                  </p>

                  <Image
                    src={item.imageUrl}
                    alt={item.productName} // Changed from title to productName
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">
            Your Cart Is Empty Please Add Products
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
