import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const albums = [
  { name: "Wedding", img: "/images/wedding.jpg" },
  { name: "Birthday", img: "/images/birthday.jpg" },
  { name: "Baby Shower", img: "/images/babyshower.jpg" },
  { name: "Traditional", img: "/images/traditional.jpg" },
];

export default function Album() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {albums.map((album, i) => (
        <Link
          key={i}
          to={`/album/${album.name.toLowerCase().replace(" ", "-")}`}
          className="bg-white rounded shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
          data-aos="fade-up"
        >
          <img
            src={album.img}
            alt={album.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center font-semibold text-lg">
            {album.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
