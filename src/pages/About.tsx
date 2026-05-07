import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 space-y-24">
      {/* Brand Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-hero shadow-soft group">
          <img 
            src="https://images.unsplash.com/photo-1550951053-d18306917688?auto=format&fit=crop&q=80&w=800" 
            alt="LushPetals" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-sage/10 mix-blend-multiply" />
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="section-label">Our Story</span>
            <h1 className="text-6xl font-serif text-ink">Kisah LushPetals</h1>
          </div>
          
          <div className="space-y-6 text-lg text-ink/70 font-sans leading-relaxed">
            <p>
              Di era modern seperti sekarang, kebutuhan akan estetika dan keindahan menjadi bagian penting dalam kehidupan sehari-hari. 
              Dekorasi tidak hanya berfungsi sebagai pelengkap, tetapi juga sebagai bentuk ekspresi diri dan lifestyle statement.
            </p>
            <p>
              Lahir dari kebutuhan akan estetika yang praktis, kami menghadirkan solusi dekorasi yang long-lasting tanpa ribet perawatan, 
              memberikan keindahan abadi di setiap sudut ruang Anda.
            </p>
            <p className="italic font-serif text-2xl text-clay">
              "Timeless Beauty, Effortless Elegance"
            </p>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="bg-white rounded-hero p-12 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-16 shadow-soft border border-black/5">
        <div className="space-y-6">
          <span className="section-label">Vision</span>
          <h2 className="text-3xl font-serif italic text-sage">Keindahan Abadi</h2>
          <p className="text-lg text-ink/80 leading-relaxed font-serif">
            Menjadi brand artificial flower yang menghadirkan keindahan abadi dengan sentuhan elegan 
            dan modern di setiap ruang kehidupan.
          </p>
        </div>
        <div className="space-y-6 lg:border-l border-black/5 lg:pl-16">
          <span className="section-label">Mission</span>
          <ul className="space-y-4 text-sm text-ink/70 list-none font-sans uppercase tracking-wider">
            <li className="flex gap-4 items-center">
              <span className="text-clay">❀</span> 高 Quality & Realistic
            </li>
            <li className="flex gap-4 items-center">
              <span className="text-clay">❀</span> Aesthetic & Up to date
            </li>
            <li className="flex gap-4 items-center">
              <span className="text-clay">❀</span> Practical Beauty
            </li>
            <li className="flex gap-4 items-center">
              <span className="text-clay">❀</span> Customer Satisfaction
            </li>
          </ul>
        </div>
      </section>

      {/* Aesthetic Filler Image */}
      <section className="relative h-[400px] overflow-hidden rounded-[3rem]">
        <img 
          src="https://images.unsplash.com/photo-1548611635-b6e78eb9d0fb?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover grayscale-[20%] opacity-90"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-3xl font-serif italic drop-shadow-lg">Captured in Silence, Preserved in Beauty</p>
        </div>
      </section>
    </div>
  );
}
