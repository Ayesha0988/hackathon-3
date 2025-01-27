import Image from 'next/image';
import React from 'react';

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <main className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Your Bag</h2>

        <div className="space-y-6">
          {/* Item 1 */}
          <div className="flex items-center bg-white shadow-md p-4 rounded-lg">
            <Image
              src="/Techknit.png"
              alt="TechKnit Ultra Shirt"
              width={96}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold">Nike Dri-FIT ADV TechKnit Ultra</h3>
              <p>Men&#39;s Short-Sleeve Running Top</p>
              <p>
                Ashen Slate/Cobalt Bliss <span className="text-gray-600">| Size: L | Quantity: 1</span>
              </p>
              <p className="text-gray-600 mt-2">MRP: ₹ 3,895.00</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center bg-white shadow-md p-4 rounded-lg">
            <Image
              src="/p1.png"
              alt="Nike Air Max 97 SE"
              width={96}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold">Nike Air Max 97 SE</h3>
              <p>Men&#39;s Shoes</p>
              <p>
                Flat Pewter/Light Bone/Black/White <span className="text-gray-600">| Size: 8 | Quantity: 1</span>
              </p>
              <p className="text-gray-600 mt-2">MRP: ₹ 16,995.00</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 mt-8 shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-4">Summary</h3>
          <div className="flex justify-between mb-2">
            <p>Subtotal:</p>
            <p>₹ 20,890.00</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Estimated Delivery & Handling:</p>
            <p className="text-green-500">Free</p>
          </div>
          <div className="border-t pt-4 flex justify-between text-lg font-semibold">
            <p>Total:</p>
            <p>₹ 20,890.00</p>
          </div>
          <button className="w-full bg-black text-white py-3 mt-4 rounded-lg hover:bg-gray-800">
            Member Checkout
          </button>
        </div>
      </main>
    </div>
  );
};

export default Cart;
