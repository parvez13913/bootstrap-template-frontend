import DocumentationCarousel from "../component/navbar/documentation-carousel";

export default function Hero() {
  return (
    <div className="relative">
      <div className="flex lg:min-h-[80vh] flex-col items-center justify-center bg-[#0047CC] px-4 py-16 text-white sm:min-h-[20vh]">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-8 text-3xl font-normal leading-tight sm:text-4xl md:text-5xl lg:text-5xl">
            Powerful <span className="font-bold">Documentation</span> and Help
            Center Bootstrap Template.
          </h1>
          <button className="rounded-sm bg-[#2ECC71] px-8 py-3 font-medium text-white transition-colors hover:bg-[#27AE60] focus:outline-none focus:ring-2 focus:ring-[#2ECC71] focus:ring-offset-2 focus:ring-offset-[#0047CC]">
            Purchase Now
          </button>
        </div>
      </div>
      <div className="absolute -bottom-[30%] lg:-bottom-[70%] md:-bottom-[80%]">
        <DocumentationCarousel />
      </div>
    </div>
  );
}
