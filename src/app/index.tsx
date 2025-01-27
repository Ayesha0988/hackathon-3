import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />
      
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-5xl font-bold mb-4">Welcome to Nike Store</h1>
        <p className="text-lg text-gray-600">Explore the latest shoes and apparel.</p>
      </main>
    </div>
  );
};

export default Home;