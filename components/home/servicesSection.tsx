import { Card, CardBody } from '@heroui/card';

interface ServicesSectionProps  {
    data: {
      heading: string,
      items: Array<{
        heading: string,
      }>
    };
};

export const ServicesSection = ({data}: ServicesSectionProps) => {
    return (
        <section className="px-4 md:px-0" id="services">
        <div className="max-w-5xl mx-auto border-t border-white/10 pt-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            {data?.heading || "Our Services"}
          </h2>
          <Card className="border border-white/10 bg-slate-900/80 rounded-3xl shadow-lg shadow-slate-950/60">
            <CardBody className="px-8 py-10">
              <div className="grid gap-4 md:grid-cols-2 text-sm md:text-base text-slate-200">
                {data?.items?.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="mt-1 text-violet-400 font-bold">✓</span>
                    <p>{item.heading}</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    );
};

export default ServicesSection;