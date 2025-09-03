import Card from '@/components/Card';

export default function MoreAboutSection() {
  return (
    <section className="section-vibrant-blue relative px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-pattern-dots absolute inset-0 opacity-20" />
      <div className="relative container mx-auto">
        <div className="mb-8 text-center">
          <div className="from-si-primary/15 to-si-red/10 text-si-primary border-si-primary/20 mb-4 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
            <span className="accent-dot-vibrant h-1.5 w-1.5 rounded-full" />
            Learn More
          </div>
          <h1 className="text-si-ink px-4 py-8 text-3xl font-bold sm:px-6 sm:text-4xl lg:px-8 lg:text-5xl">
            More About <span className="text-gradient-primary">Us</span>
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-6 p-4 sm:flex-row sm:gap-8 sm:p-6">
          <Card
            image="/Scenery.jpg"
            imageAlt="Aerial view of golf course"
            category="Case Study"
            title="The LPGA Unlocks Talent Potential with Data"
            description="The LPGA shares how data technology has helped to pinpoint the personality traits of top players, leading to success on and off the golf course."
            link="/about/journey"
            linkText="Find Out More"
          />
          <Card
            image="/Scenery.jpg"
            imageAlt="Aerial view of golf course"
            category="Case Study"
            title="The LPGA Unlocks Talent Potential with Data"
            description="The LPGA shares how data technology has helped to pinpoint the personality traits of top players, leading to success on and off the golf course."
            link="/about/journey"
            linkText="Find Out More"
          />
          <Card
            image="/Scenery.jpg"
            imageAlt="Aerial view of golf course"
            category="Case Study"
            title="The LPGA Unlocks Talent Potential with Data"
            description="The LPGA shares how data technology has helped to pinpoint the personality traits of top players, leading to success on and off the golf course."
            link="/about/journey"
            linkText="Find Out More"
          />
        </div>
      </div>
    </section>
  );
}
