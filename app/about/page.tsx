import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/holi.avif"
        alt="Holi celebration"
        width={2400}
        height={1600}
        priority
        className="absolute left-0 -top-[100px] h-full w-full object-cover object-center"
      />
      <div className="absolute left-1/2 top-1/3 w-full -translate-x-1/2 -translate-y-1/2 -mt-[125px] text-center">
        <h1 className="px-4 text-white text-4xl md:text-6xl font-semibold">
          Your Home Away From Home
        </h1>
      </div>
    </section>
  );
}
