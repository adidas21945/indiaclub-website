import Image from "next/image";

const eventGalleries = [
  {
    name: "Garba Day 1",
    link: "https://gallery.pierrethepearphotography.com/gtindiaclubgarbanight/",
    thumbnail: "/images/garba1.jpg",
    subtitle: "September 13, 2025",
  },
  {
    name: "Garba Day 2",
    link: "https://lightroom.adobe.com/shares/fd1552b70f92405183cf48e1927e99ff",
    thumbnail: "/images/garba2.jpg",
    subtitle: "September 20, 2025",
  },
  {
    name: "Diwali",
    link: "https://anaveragephoto.pixieset.com/icgtdiwali/",
    thumbnail: "/images/diwaliboard.jpg",
    subtitle: "November 8, 2025",
  },
];

export default function Events() {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-green-800 mb-3">Events</h1>
      <p className="text-lg text-gray-700 mb-10">
        Browse photo galleries from recent India Club events.
      </p>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {eventGalleries.map((event) => (
          <a
            key={event.name}
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={event.thumbnail}
                alt={`${event.name} gallery thumbnail`}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-green-800 group-hover:text-orange-600 transition-colors duration-300">
                {event.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1 group-hover:text-orange-600 transition-colors duration-300">
                {event.subtitle}
              </p>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
