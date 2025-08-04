import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className=" flex items-center justify-center bg-white">
      <div className="max-w-6xl mx-auto    text-center ">
        <div className="mb-12">
          <img
            src="/lovable-uploads/HOPE.jpg"
            className="absolute left-0 w-screen h-[90%] object-cover"
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-white text-5xl font-bold text-center drop-shadow-lg mt-20">
              <h1 className="text-white mt-[18%] text-6xl md:text-7xl font-Bold mb-6 leading-tight">
                Bright futures begin with small hands and big hearts
              </h1>
                <Button
                  onClick={scrollToContact}
                  className="bg-gray-700 hover:bg-gray-800 text-white px-10 py-4 text-lg font-medium shadow-md transition-all duration-200"
                >
                  Donate Now
                </Button>
            </h1>
          </div>
          {/* Optional: Overlay for darkening */}
          <div className="absolute inset-0 bg-black/50 z-0 h-[90%]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
