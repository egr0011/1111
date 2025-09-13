import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}
      <div className="text-center" data-aos="fade-up">
        {/* Logo */}
        <div>
          <a
            className="flex-none text-xl font-semibold text-black dark:text-white"
            href="#"
            aria-label="Brand"
          >
            Brand
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-3" data-aos="fade-up" data-aos-delay="200">
          <p className="text-gray-500 dark:text-neutral-500">
            We're part of the{" "}
            <a
              className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
              href="#"
            >
              Htmlstream
            </a>{" "}
            family.
          </p>
          <p className="text-gray-500 dark:text-neutral-500">© 2025 Preline Labs.</p>
        </div>

        {/* Social Brands */}
        
        {/* End Social Brands */}
      </div>
      {/* End Grid */}
    </footer>
  );
}
