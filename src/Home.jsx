const Home = () => {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1718471472310-77a63c5fad95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Welcome to the Home Page
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          This is a simple home page with a beautiful background.
        </p>
        <button className="px-6 py-3 bg-purple-600 rounded-full text-lg md:text-xl hover:bg-purple-700 transition duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Home;
