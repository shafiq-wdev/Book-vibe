import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
return ( 
<section className="px-4 py-12 md:py-20"> 
<div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 overflow-hidden rounded-4xl bg-gradient-to-r from-slate-100 via-slate-200 to-emerald-50 px-6 py-10 shadow-lg md:grid-cols-2 md:px-12 md:py-14">

    {/* Left Content */}
    <div className="space-y-6">
      <p className="w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
        Find Your Next Favorite Book
      </p>

      <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
        Books to freshen up
        
          your bookshelf
        
      </h1>

      <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
        Discover amazing books, explore new stories, and find something
        special to add to your collection.
      </p>

      <button className="btn border-0 bg-emerald-600 px-7 text-white shadow-md shadow-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-lg">
        View the List →
      </button>
    </div>

    {/* Right Image */}
    <div className="flex justify-center">
      <div className="relative">
        <div className="absolute -inset-5 rounded-full bg-emerald-300/30 blur-3xl" />

        <Image
          src={bannerImg}
          alt="Books banner"
          width={500}
          height={400}
          priority
          className="relative w-full max-w-md rounded-2xl object-cover shadow-2xl"
        />
      </div>
    </div>

  </div>
</section>

);
};

export default Banner;
