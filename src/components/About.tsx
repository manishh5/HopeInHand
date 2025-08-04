import { Button } from "@/components/ui/button";

const About = () => {
  const handleLocationClick = () => {
    window.open(
      "https://maps.google.com/?q=1287+Maplewood+Drive,+Los+Angeles,+CA+90026",
      "_blank"
    );
  };

  const handlePhoneClick = () => {
    window.open("tel:+13235550192", "_self");
  };

  const handleEmailClick = () => {
    window.open("mailto:serena@blakepsychology.com", "_self");
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-dark text-stone-700 mb-6">
            About us
          </h2>
          <div className="w-19 h-px bg-slate-400 mx-auto mb-8"></div>
        </div>

        <div className="grid items-center">
          <div className="order-2 lg:order-1">
            <div className="prose prose-xl text-stone-700 leading-relaxed font-light">
              <p className="mb-8 text-lg">
                Hope in Hand – Empowering Children, One Dream at a Time

                At Hope in Hand, we believe every child deserves a chance — a chance to learn, grow, play, and dream. Founded with the mission of bringing hope to underprivileged children, we work tirelessly to provide access to education, nutrition, emotional support, and a safe environment where children can truly thrive.

                Our Story
                The journey of Hope in Hand began with a simple yet powerful belief: small acts of kindness can transform lives. What started as a few volunteers teaching street children under a tree has now grown into a community-driven initiative impacting hundreds of young lives across.              
              </p>

              <p className="mb-8 text-lg">
                What We Do
                We focus on holistic child development through:
                Education: Running learning centers, distributing school supplies, and supporting admissions to schools.

                Health & Nutrition: Organizing health camps, daily meals, and hygiene awareness sessions.

                Emotional Wellbeing: Creating safe spaces for expression, play, and creative exploration.

                Community Support: Working closely with parents and local communities to ensure long-term impact.

                Our Vision
                A world where every child — regardless of background — has hope in hand and opportunity ahead.

                Our Mission
                To build a nurturing and inclusive environment for underprivileged children through education, care, and community-driven support systems.
              </p>

              <p className="mb-12 text-lg">
                Join Our Journey
                Change begins with people like you. Whether you donate, volunteer, or simply share our story — your support helps us keep hope alive in the hearts of children who need it most.

                Together, we can give more than help. We can give hope.
              </p>
              <Button
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                  className="bg-gray-700 hover:bg-gray-800 text-white px-10 py-6 text-lg font-medium shadow-md transition-all duration-200"
                >
                  Contact Us
                </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
