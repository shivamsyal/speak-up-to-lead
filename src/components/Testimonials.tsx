const testimonials = [
  {
    quote: "Maansha did an excellent job and helped my daughter become more confident to participate in classroom discussions.",
    name: "Rachna",
  },
  {
    quote: "My son used to be very shy in social settings, but after joining Speak Up To Lead he's become the most outgoing!",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-4xl font-bold text-primary">
          Testimonials
        </h2>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {testimonials.map(({ quote, name }) => (
            <figure
              key={quote}
              className="flex flex-col justify-between gap-5 rounded-lg border border-gray-200 bg-white p-6 text-center"
            >
              <blockquote className="text-lg leading-relaxed text-gray-700">
                <p>{quote}</p>
              </blockquote>
              <figcaption className="text-primary">
                {name && <><strong className="font-semibold">{name}</strong>{" | "}</>}
                Parent
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
