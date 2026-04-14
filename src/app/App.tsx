import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Coffee, Heart, Award, Users, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const menuCategories = [
    { id: 'all', label: 'All Items' },
    { id: 'hot', label: 'Hot Coffee' },
    { id: 'cold', label: 'Cold Drinks' },
    { id: 'food', label: 'Food' },
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Signature Espresso',
      category: 'hot',
      price: '$4.50',
      description: 'Rich, bold espresso with notes of dark chocolate',
      image: 'https://images.unsplash.com/photo-1762657433581-15773c721a42?w=600&q=80',
    },
    {
      id: 2,
      name: 'Cappuccino Supreme',
      category: 'hot',
      price: '$5.50',
      description: 'Velvety microfoam meets perfectly pulled espresso',
      image: 'https://images.unsplash.com/photo-1703013132195-691ce55017c0?w=600&q=80',
    },
    {
      id: 3,
      name: 'Caramel Latte',
      category: 'hot',
      price: '$6.00',
      description: 'Smooth espresso with house-made caramel',
      image: 'https://images.unsplash.com/photo-1667388363703-c4be38bf0874?w=600&q=80',
    },
    {
      id: 4,
      name: 'Iced Americano',
      category: 'cold',
      price: '$4.00',
      description: 'Bold espresso over ice, pure and simple',
      image: 'https://images.unsplash.com/photo-1599861496039-5cf7d6ca6ef9?w=600&q=80',
    },
    {
      id: 5,
      name: 'Cold Brew',
      category: 'cold',
      price: '$5.00',
      description: 'Smooth, naturally sweet, 16-hour cold brew',
      image: 'https://images.unsplash.com/photo-1634976243773-733877dc6121?w=600&q=80',
    },
    {
      id: 6,
      name: 'Butter Croissant',
      category: 'food',
      price: '$3.50',
      description: 'Flaky, golden, baked fresh daily',
      image: 'https://images.unsplash.com/photo-1571157577110-493b325fdd3d?w=600&q=80',
    },
    {
      id: 7,
      name: 'Chocolate Pastry',
      category: 'food',
      price: '$4.00',
      description: 'Decadent chocolate-filled pastry',
      image: 'https://images.unsplash.com/photo-1737700088850-d0b53f9d39ec?w=600&q=80',
    },
    {
      id: 8,
      name: 'Morning Bun',
      category: 'food',
      price: '$3.00',
      description: 'Cinnamon sugar perfection',
      image: 'https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?w=600&q=80',
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1668884405041-aa8963908538?w=800&q=80', alt: 'Cozy cafe interior' },
    { url: 'https://images.unsplash.com/photo-1667388363683-a07bbf0c84b1?w=800&q=80', alt: 'Pour over coffee' },
    { url: 'https://images.unsplash.com/photo-1773934926697-dfd9c67d93da?w=800&q=80', alt: 'Coffee beans' },
    { url: 'https://images.unsplash.com/photo-1581068106017-b29553281b51?w=800&q=80', alt: 'Latte art pouring' },
    { url: 'https://images.unsplash.com/photo-1646192040615-7598de7e6d26?w=800&q=80', alt: 'Coffee bar' },
    { url: 'https://images.unsplash.com/photo-1650097364104-eef0e54af0da?w=800&q=80', alt: 'Cappuccino' },
  ];

  const testimonials = [
    {
      name: 'Emily Rodriguez',
      role: 'Artist',
      text: 'Brewora has become my creative sanctuary. The atmosphere is perfect, and the coffee? Absolutely exceptional.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Developer',
      text: "I've tried every coffee shop in the area. Nothing compares to Brewora's attention to detail and quality.",
    },
    {
      name: 'Michael Chen',
      role: 'Entrepreneur',
      text: 'From the first sip to the last, every cup is crafted with care. This is coffee as it should be.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-espresso text-cream">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-espresso/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl font-bold text-gold tracking-tight">
                Brewora
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-cream hover:text-gold transition-colors duration-300 text-[15px]">Home</a>
              <a href="#about" className="text-cream hover:text-gold transition-colors duration-300 text-[15px]">About</a>
              <a href="#menu" className="text-cream hover:text-gold transition-colors duration-300 text-[15px]">Menu</a>
              <a href="#gallery" className="text-cream hover:text-gold transition-colors duration-300 text-[15px]">Gallery</a>
              <a href="#reviews" className="text-cream hover:text-gold transition-colors duration-300 text-[15px]">Reviews</a>
              <a href="#contact" className="text-cream hover:text-gold transition-colors duration-300 text-[15px]">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-espresso">
          <div className="absolute inset-0 opacity-30">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1773934926697-dfd9c67d93da?w=1920&q=80"
              alt="Coffee beans texture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/80 to-espresso"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,169,106,0.08)_0%,transparent_70%)]"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center py-32">
          <div className="animate-[fadeIn_1s_ease-out]">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-8 leading-[1.1] drop-shadow-2xl"
            >
              Where passion meets perfection in every cup
            </h2>
            <p className="text-lg md:text-xl text-beige mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the art of coffee crafted with precision, passion, and the finest beans from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a
                href="#menu"
                className="px-10 py-4 bg-gold text-espresso rounded-xl font-medium transition-all duration-300 hover:bg-gold-dark hover:scale-105 shadow-2xl text-[15px]"
              >
                Explore Our Menu
              </a>
              <a
                href="#about"
                className="px-10 py-4 border-2 border-cream/30 bg-cream/5 backdrop-blur-sm text-cream rounded-xl font-medium transition-all duration-300 hover:bg-cream/10 hover:border-cream/50 text-[15px]"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/60 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-espresso to-dark-roast">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-gold text-sm uppercase tracking-[0.2em] mb-4 font-medium">Est. 2020</p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-6xl font-bold text-cream mb-6"
            >
              Our Coffee Story
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl group-hover:bg-gold/15 transition-all duration-500"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1773934926697-dfd9c67d93da?w=800&q=80"
                alt="Coffee beans"
                className="relative rounded-2xl w-full h-[500px] object-cover shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-cream text-lg leading-relaxed">
                Brewora was born from a simple belief: coffee is more than a beverage—it's an experience, a ritual, a moment of connection. Founded in 2020, we've dedicated ourselves to sourcing the finest beans and mastering the craft of coffee.
              </p>
              <p className="text-beige text-lg leading-relaxed">
                Every cup we serve is a testament to our commitment to quality, sustainability, and the vibrant communities we serve. From our carefully selected single-origin beans to our expert baristas, we ensure excellence in every detail.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Coffee className="w-8 h-8" />}
              title="Premium Beans"
              description="Sourced from the world's finest coffee regions"
            />
            <FeatureCard
              icon={<Heart className="w-8 h-8" />}
              title="Crafted with Love"
              description="Every cup made with passion and precision"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Community Focus"
              description="Building connections one cup at a time"
            />
            <FeatureCard
              icon={<Award className="w-8 h-8" />}
              title="Award Winning"
              description="Recognized for excellence in specialty coffee"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-dark-roast">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-6xl font-bold text-cream mb-6"
            >
              Our Menu
            </h2>
            <p className="text-beige text-lg max-w-2xl mx-auto">
              Discover our selection of expertly crafted beverages and fresh pastries
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-7 py-3 rounded-xl font-medium transition-all duration-300 text-[15px] ${
                  activeCategory === category.id
                    ? 'bg-gold text-espresso shadow-lg'
                    : 'bg-coffee-bean text-cream hover:bg-medium-roast border border-border'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-gradient-to-b from-dark-roast to-espresso">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-6xl font-bold text-cream mb-6"
            >
              Gallery
            </h2>
            <p className="text-beige text-lg max-w-2xl mx-auto">
              A visual journey through our craft
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s backwards`,
                }}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-32 bg-coffee-bean">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-6xl font-bold text-cream mb-6"
            >
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-dark-roast">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-6xl font-bold text-cream mb-6"
            >
              Visit Us
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8 mb-12">
                <ContactInfo
                  icon={<MapPin className="w-6 h-6" />}
                  title="Address"
                  content="123 Coffee Street, Downtown District, CA 94102"
                />
                <ContactInfo
                  icon={<Phone className="w-6 h-6" />}
                  title="Phone"
                  content="+1 (555) 123-4567"
                />
                <ContactInfo
                  icon={<Mail className="w-6 h-6" />}
                  title="Email"
                  content="hello@brewora.com"
                />
                <ContactInfo
                  icon={<Clock className="w-6 h-6" />}
                  title="Hours"
                  content="Mon-Fri: 7AM-8PM | Sat-Sun: 8AM-9PM"
                />
              </div>

              <div className="bg-coffee-bean rounded-xl overflow-hidden h-64 border border-border">
                <div className="w-full h-full bg-gradient-to-br from-medium-roast/40 to-gold/10 flex items-center justify-center">
                  <p className="text-beige">Map View</p>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-cream mb-3 font-medium text-[15px]">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 bg-coffee-bean border border-border rounded-xl text-cream placeholder-beige/60 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-cream mb-3 font-medium text-[15px]">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-3.5 bg-coffee-bean border border-border rounded-xl text-cream placeholder-beige/60 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label className="block text-cream mb-3 font-medium text-[15px]">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 bg-coffee-bean border border-border rounded-xl text-cream placeholder-beige/60 focus:outline-none focus:border-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-cream mb-3 font-medium text-[15px]">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-5 py-3.5 bg-coffee-bean border border-border rounded-xl text-cream placeholder-beige/60 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gold text-espresso rounded-xl font-medium transition-all duration-300 hover:bg-gold-dark hover:scale-[1.02] shadow-lg text-[15px]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl font-bold text-gold mb-4"
              >
                Brewora
              </h3>
              <p className="text-beige text-sm leading-relaxed">
                Crafting exceptional coffee experiences since 2020.
              </p>
            </div>
            <div>
              <h4 className="text-cream font-medium mb-4 text-[15px]">Quick Links</h4>
              <div className="space-y-3">
                <a href="#about" className="block text-beige hover:text-gold transition-colors text-sm">About</a>
                <a href="#menu" className="block text-beige hover:text-gold transition-colors text-sm">Menu</a>
                <a href="#contact" className="block text-beige hover:text-gold transition-colors text-sm">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="text-cream font-medium mb-4 text-[15px]">Connect</h4>
              <div className="space-y-3">
                <a href="#" className="block text-beige hover:text-gold transition-colors text-sm">Instagram</a>
                <a href="#" className="block text-beige hover:text-gold transition-colors text-sm">Facebook</a>
                <a href="#" className="block text-beige hover:text-gold transition-colors text-sm">Twitter</a>
              </div>
            </div>
            <div>
              <h4 className="text-cream font-medium mb-4 text-[15px]">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-coffee-bean border border-border rounded-lg text-sm text-cream placeholder-beige/60 focus:outline-none focus:border-gold transition-colors"
                />
                <button className="px-5 py-2.5 bg-gold text-espresso rounded-lg text-sm font-medium hover:bg-gold-dark transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center">
            <p className="text-beige/80 text-sm">
              © 2026 Brewora. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group p-8 bg-coffee-bean rounded-xl border border-border hover:border-gold/30 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
      <div className="text-gold mb-5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3
        style={{ fontFamily: "'Playfair Display', serif" }}
        className="text-xl font-semibold text-cream mb-3"
      >
        {title}
      </h3>
      <p className="text-beige text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function MenuCard({ item, index }: { item: any; index: number }) {
  return (
    <div
      className="group bg-coffee-bean rounded-xl overflow-hidden border border-border hover:border-gold/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
      style={{
        animation: `fadeIn 0.5s ease-out ${index * 0.05}s backwards`,
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-bean/80 via-transparent to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-xl font-semibold text-cream"
          >
            {item.name}
          </h3>
          <span className="text-gold font-semibold text-[15px]">{item.price}</span>
        </div>
        <p className="text-beige text-sm mb-5 leading-relaxed">{item.description}</p>
        <button className="w-full px-4 py-3 bg-gold/10 border border-gold/40 text-gold rounded-lg text-sm font-medium hover:bg-gold hover:text-espresso transition-all duration-300">
          Add to Order
        </button>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  return (
    <div
      className="p-8 bg-dark-roast rounded-xl border border-border hover:border-gold/30 transition-all duration-300 shadow-lg"
      style={{
        animation: `fadeIn 0.6s ease-out ${index * 0.15}s backwards`,
      }}
    >
      <div className="mb-6">
        <div className="flex gap-1 mb-5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-gold text-lg">★</span>
          ))}
        </div>
        <p className="text-cream leading-relaxed italic text-[15px]">"{testimonial.text}"</p>
      </div>
      <div className="flex items-center gap-4 pt-6 border-t border-border">
        <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
          <span className="text-gold font-semibold text-lg">{testimonial.name.charAt(0)}</span>
        </div>
        <div>
          <p className="text-cream font-medium text-[15px]">{testimonial.name}</p>
          <p className="text-beige text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
        {icon}
      </div>
      <div>
        <h4 className="text-cream font-medium mb-2 text-[15px]">{title}</h4>
        <p className="text-beige text-[15px] leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
