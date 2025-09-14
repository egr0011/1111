import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cardData = [
  { title: "Engagement", src: "/images/1.jpg" },
  { title: "Prewedding", src: "/images/2.jpg" },
  { title: "Wedding", src: "/images/3.jpg" },
  { title: "Babyshower", src: "/images/4.jpg" },
  { title: "Birthday", src: "/images/5.jpg" },
  { title: "Model Shoot", src: "/images/6.jpg" },
];

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <div className="p-8 bg-gray-100">

      {/* Photographer Info Section */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden mb-12 p-6" data-aos="fade-up">
        
        {/* Left: Photographer Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/jb.jpg"
            alt="Photographer"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Right: About the Photographer */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
          <h2 className="text-5xl font-bold mb-4 font-cinzel" >JAGANNATHAN</h2>
          <p className="text-gray-700 text-lg leading-relaxed font-cinzel">
            Welcome! I’m a professional photographer specializing in Engagement, Wedding, Babyshowers, and Model Shoots.
            My passion is capturing unforgettable moments and turning them into beautiful memories. With years of experience,
            I focus on creative, high-quality photography that tells your story naturally. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut quidem natus corporis, cum quos accusamus quis ducimus esse! Iusto labore fugiat veritatis quas natus laudantium repellendus tempora impedit velit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nobis asperiores? Alias vel mDucimus delectus dolor, iusto quis explicabo architecto ea eveniet? Pariatur totam consectetur nemo explicabo est exercitationem distinctio dolorum laborum eligendi, nostrum odio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vero distinctio ex nemo labore et, placeat voluptatum dicta minima maxime, alias id beatae! Nobis debitis aperiam, unde ipsa velit dolore?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus deserunt odio quisquam qui natus dolore consequuntur velit ut ad iure, impedit maiores adipisci? Eveniet, delectus assumenda! Eveniet quisquam voluptatibus recusandae.
          </p>
        </div>
      </div>

      {/* Services Grid Section */}
      <h1 className="text-black text-5xl font-bold font-cinzel text-center mb-10">
        Services
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative h-64 rounded-sm shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
            style={{
              backgroundImage: `url(${card.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-up"
          >
            <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center transition duration-300 hover:brightness-100">
              <h2 className="text-white text-2xl font-cinzel text-center px-4">
                {card.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
