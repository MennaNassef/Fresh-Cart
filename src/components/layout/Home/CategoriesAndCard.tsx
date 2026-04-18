
import apiServices from "@/app/services/api";

export default async function CategoriesAndCard() {
  
  const categories = await apiServices.getCategories()
  console.log(categories);
  
  

  return (
    <div className="bg-[white] py-10">

      {/* Header */}
      <div className="flex items-center justify-between mx-16 mb-8">
        <h1 className="relative flex items-center text-2xl font-semibold text-gray-800 pl-4">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full bg-gradient-to-b from-green-400 to-green-700"></span>
          Shop By <span className="text-green-600 ml-2">Category</span>
        </h1>

        <a className="text-green-600 flex items-center gap-2 hover:gap-3 transition">
          View All Categories →
        </a>
      </div>

      {/* Categories Grid */}
      <div className="grid lg:grid-cols-6 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-16">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm border hover:shadow-md transition p-4 flex flex-col items-center justify-center cursor-pointer"
          >
            <div className="w-20 h-20 mb-3 rounded-full overflow-hidden border">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-700 font-medium text-sm text-center">
              {cat.name}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Banners */}
      <div className="grid md:grid-cols-2 gap-6 mx-16 mt-12">

        {/* Left Card */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-2xl p-8 relative overflow-hidden">
          <p className="bg-green-500 inline-block px-3 py-1 rounded-full text-sm mb-4">
            🔥 Deal of the Day
          </p>

          <h2 className="text-2xl font-bold mb-2">
            Fresh Organic Fruits
          </h2>

          <p className="mb-4 text-sm">
            Get up to 40% off on selected organic fruits
          </p>

          <h3 className="text-3xl font-bold mb-4">
            40% OFF <span className="text-sm">Use code: ORGANIC40</span>
          </h3>

          <button className="bg-white text-green-700 px-5 py-2 rounded-full font-medium">
            Shop Now →
          </button>
        </div>

        {/* Right Card */}
        <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl p-8 relative overflow-hidden">
          <p className="bg-orange-300 inline-block px-3 py-1 rounded-full text-sm mb-4">
            ✨ New Arrivals
          </p>

          <h2 className="text-2xl font-bold mb-2">
            Exotic Vegetables
          </h2>

          <p className="mb-4 text-sm">
            Discover our latest collection of premium vegetables
          </p>

          <h3 className="text-3xl font-bold mb-4">
            25% OFF <span className="text-sm">Use code: FRESH25</span>
          </h3>

          <button className="bg-white text-orange-600 px-5 py-2 rounded-full font-medium">
            Explore Now →
          </button>
        </div>

      </div>
    </div>
  );
}