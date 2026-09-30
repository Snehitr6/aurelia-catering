function SignatureDishes() {
  const dishes = [
    {
      name: "Royal Biryani",
      type: "Signature Main",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/90c6317631359a1c681060856c2af10c",
    },
    {
      name: "Traditional Feast",
      type: "South Indian",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=90",
    },
    {
      name: "Sweet Collection",
      type: "Desserts",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=90",
    },
  ];

  return (
    <section className="bg-[#eee7dc] py-24 lg:py-32">
      <div className="container-main">

        <div className="text-center">
          <p className="section-label">
            From Our Kitchen
          </p>

          <h2 className="section-title mt-5">
            Signature favourites
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="group overflow-hidden bg-white"
            >
              <div className="h-[360px] overflow-hidden">

                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />

              </div>

              <div className="p-6">

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a66a38]">
                  {dish.type}
                </p>

                <h3 className="mt-2 font-serif text-2xl text-[#35251b]">
                  {dish.name}
                </h3>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default SignatureDishes;