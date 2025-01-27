
import React from 'react';

const Help = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="container mx-auto p-4 flex flex-col lg:flex-row">
        
        <div className='w-full lg:w-3/4 text-center my-6'>
          <span className='text-2xl font-semibold my-6 uppercase block'>get help</span>
          <div className='flex justify-center'>
            <input className='w-96 text-xs px-5 py-3 my-2 border border-gray-300 rounded' type="text" placeholder='What can we help you with?' />
          </div>

          <section className="mb-8 text-left">
            <h2 className="text-xl font-bold mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
            <p className="mb-4">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
              <li>If you enter your PAN information at checkout, you’ll be able to pay for your order with PayTM or a local credit or debit card.</li>
              <li>Apple Pay</li>
            </ul>
            <p className="mb-4">Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you’re not already a Member, <a href="#" className="text-blue-500">join us today</a>.</p>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="bg-black text-white px-4 py-2 rounded">JOIN US</a>
              <a href="#" className="bg-black text-white px-4 py-2 rounded">SHOP NIKE</a>
            </div>
          </section>

          <section className="mb-8 text-left">
            <h2 className="text-xl font-bold mb-4">FAQs</h2>
            <div className="mb-4">
              <h3 className="font-bold">Does my card need international purchases enabled?</h3>
              <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
              <p>Please note, some banks may charge a small transaction fee for international orders.</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Can I pay for my order with multiple methods?</h3>
              <p>No, payment for Nike orders can’t be split between multiple payment methods.</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">What payment method is accepted for SNKRS orders?</h3>
              <p>You can use any accepted credit card to pay for your SNKRS order.</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Why don’t I see Apple Pay as an option?</h3>
              <p>To see Apple Pay as an option in the Nike App or on Nike.com, you’ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you’ll need to use Safari to use Apple Pay on Nike.com.</p>
            </div>
          </section>

          <section className="mb-8 text-left">
            <span className='font-semibold block mb-2'>Was this answer helpful?</span>
            <div className="flex items-center space-x-4 mb-4">
              <button className="bg-black text-white px-4 py-2 rounded">👍 Yes</button>
              <button className="bg-black text-white px-4 py-2 rounded">👎 No</button>
            </div>
          </section>

          <section className="mb-8 text-left">
            <span className='text-gray-500 block mb-2'>RELATED</span>
            <div className='underline font-semibold px-9'>
              <span>WHAT ARE {`NIKE'S`} DELIVERY OPTIONS?</span> <br /><br />
              <span>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</span>
            </div>
          </section>
        </div>

        <div className='hidden lg:block lg:w-1/4 lg:pl-4'>
          <img
            className=''
            src={'/banner.svg'}
            alt='banner'
            width={250}
            height={1042}
          />
        </div>

      </main>
    </div>
  );
};

export default Help;
