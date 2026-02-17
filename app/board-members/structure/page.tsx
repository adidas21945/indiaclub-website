import Image from "next/image";

export default function Structure() {
  return (
    <section className="w-full">
      <Image
        src="/images/BoardStructure.png"
        alt="India Club board structure"
        width={2000}
        height={1200}
        priority
        className="w-full h-auto"
      />
    </section>
  );
}
