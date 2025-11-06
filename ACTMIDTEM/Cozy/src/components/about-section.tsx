import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Heart, Leaf } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1653762377140-fdc924220c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlb3BsZSUyMHRhbGtpbmclMjBjb2ZmZWV8ZW58MXx8fHwxNzYyMzk3MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Business people in formal attire having a conversation over coffee"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-6">Our Story</h2>
            <p className="mb-6 text-gray-700">
              It all started in 2024 when a group of passionate
              classmates gathered over coffee, discussing their
              dreams and aspirations. What began as casual
              conversations about entrepreneurship quickly
              turned into a shared vision: to create a welcoming
              space where quality coffee and meaningful
              connections could flourish.
            </p>
            <p className="mb-8 text-gray-700">
              From those late-night study sessions and business
              plan brainstorming, Cozy Drip was born. We
              combined our diverse skills, united by our love
              for exceptional coffee and our commitment to
              building something special together. Today, every
              cup we serve carries the warmth of friendship and
              the dedication of young entrepreneurs pursuing
              their dreams.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center mb-3">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2">Sustainable</h3>
                <p className="text-sm text-gray-600">
                  Ethically sourced beans
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2">Premium</h3>
                <p className="text-sm text-gray-600">
                  Award-winning quality
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2">Crafted</h3>
                <p className="text-sm text-gray-600">
                  Made with love
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}