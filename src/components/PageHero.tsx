import Reveal from "./Reveal";

export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-navy-950/85" />
      <div className="container-tdi py-20 text-center sm:py-28">
        <Reveal className="mx-auto max-w-3xl">
          {eyebrow ? <p className="eyebrow mb-3 text-brand-200">{eyebrow}</p> : null}
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-navy-100 sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
