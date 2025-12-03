import { WebsiteRedesignSlider } from './WebsiteRedesignSlider';

export function WebsiteRedesign() {

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl">
              Website Redesign & Revitalization
            </h2>
            <p className="mt-4 text-white">
             Refresh your online presence with our website redesign services. We revitalize outdated sites, improving aesthetics, functionality, and user experience to re-engage your audience.
            </p>
          </div>
        </div>
        <div className="flex items-center">
            <WebsiteRedesignSlider />
        </div>
      </div>
    </section>
  );
}
