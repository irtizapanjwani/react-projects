/* export default function Hero({ showAvailable, setShowAvailable }) {
    return (
      <section className="bg-[#0f0f0f]/90 rounded-2xl p-8 text-center text-white shadow-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold">Our Collection</h1>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
          A curated selection of coffees from different origins. Roasted in small batches.
        </p>
  
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => setShowAvailable(false)}
            className={`px-4 py-2 rounded-md font-semibold ${
              !showAvailable
                ? "bg-gray-300 text-black"
                : "text-gray-300 border border-gray-700"
            }`}
          >
            All Products
          </button>
  
          <button
            onClick={() => setShowAvailable(true)}
            className={`px-4 py-2 rounded-md font-semibold ${
              showAvailable
                ? "bg-gray-300 text-black"
                : "text-gray-300 border border-gray-700"
            }`}
          >
            Available Now
          </button>
        </div>
      </section>
    );
  }
   */