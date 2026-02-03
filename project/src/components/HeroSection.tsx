import heroBg from '../assets/bg-img.jpeg'; 

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black mb-5">
      <div className="absolute inset-0 z-0 brightness-[0.2]" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} />
      <div className="w-full relative z-10 text-center px-4">
        <h1 className="text-shadow-600 font-serif text-xl md:text-2xl mb-2 tracking-wide">
          MELASPAS
        </h1>
        <p className="text-shadow-500 font-serif text-5xl md:text-7xl lg:text-8xl items-center justify-center my-4">
          Puri Pejeng
        </p>
        <p className="text-shadow-600 font-serif text-2xl md:text-3xl mt-2 tracking-[0.2em]">
          15 / 02 / 26
        </p>
        <p className="text-shadow-600 font-serif text-lg md:text-2xl mt-4 max-w-2xl mx-auto italic opacity-90">
          "Om Awighnamastu Namo Siddham, <br className="md:hidden" />
          Om Siddhirastu Tad Astu Swaha"
        </p>
      </div>
    </section>
  );
}