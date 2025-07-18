import Card from '@/components/Card';

export default function MoreAboutSection() {
  return (
    <section className="bg -z-10 bg-gray-300 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="px-4 py-8 text-3xl font-bold text-gray-900 sm:px-6 sm:text-4xl lg:px-8 lg:text-5xl">
          More About Us
        </h1>
        <div className="-z-10 flex flex-col justify-center gap-4 p-4 sm:flex-row sm:gap-6 sm:p-6">
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
