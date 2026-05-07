import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Zap, Wallet } from 'lucide-react';

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1550951053-d18306917688?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1591886616136-621aa1680720?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1533226993203-d23258814777?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1548611635-b6e78eb9d0fb?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-end overflow-hidden rounded-hero shadow-soft">
        <img 
          src={images[0]} 
          alt="LushPetals Florist" 
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.9]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative p-12 text-white"
        >
          <h1 className="text-6xl md:text-7xl font-serif mb-4 leading-none text-white">LushPetals</h1>
          <p className="text-lg md:text-xl font-serif italic opacity-90 max-w-lg">
            "Timeless Beauty, Effortless Elegance"
          </p>
        </motion.div>
      </section>

      {/* Description Section with Pinterest Grid */}
      <section className="space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="section-label">Kenapa Kami?</span>
          <h2 className="text-5xl font-serif leading-tight text-ink">Keindahan Abadi di Setiap Ruang</h2>
          <p className="text-lg leading-relaxed text-ink/70 font-sans">
            Produk kami merupakan bunga artificial dengan kualitas premium yang dirancang menyerupai bunga asli secara detail. 
            Menghadirkan keindahan tanpa perlu perawatan intensif.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FeatureItem title="Long-lasting" desc="Tidak layu selamanya" tag="🌼" />
              <FeatureItem title="Low Maintenance" desc="Tanpa perawatan intensif" tag="🌼" />
              <FeatureItem title="Aesthetic Design" desc="Elegant & modern design" tag="🌼" />
              <FeatureItem title="Affordable Classy" desc="Premium quality yet classy" tag="🌼" />
            </div>
            
            <div className="p-10 bg-white rounded-card shadow-soft border-l-4 border-accent italic text-xl text-ink/80 leading-relaxed font-serif">
              "Bunga artificial kualitas premium yang dirancang menyerupai bunga asli secara detail untuk dekorasi kamar & hadiah spesial."
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src={images[1]} 
                className="rounded-card w-full h-[300px] object-cover shadow-soft"
              />
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src={images[2]} 
                className="rounded-card w-full h-[450px] object-cover shadow-soft"
              />
            </div>
            <div className="space-y-4 mt-12">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src={images[5]} 
                className="rounded-card w-full h-[400px] object-cover shadow-soft"
              />
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src={images[3]} 
                className="rounded-card w-full h-[250px] object-cover shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="text-center py-24 bg-sage/5 rounded-hero relative overflow-hidden border border-sage/10">
        <h3 className="text-4xl font-serif italic max-w-2xl mx-auto leading-tight px-6 z-10 relative text-sage">
          "Timeless Beauty, Effortless Elegance — LushPetals menghadirkan keindahan abadi di setiap sudut ruang Anda."
        </h3>
      </section>
    </div>
  );
}

function FeatureItem({ title, desc, tag }: { title: string, desc: string, tag: string }) {
  return (
    <div className="p-6 bg-white rounded-card shadow-soft border border-black/5 hover:border-accent/40 transition-all group">
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-block p-1.5 border border-olive rounded-full text-[10px] text-sage">{tag}</span>
        <h4 className="font-serif text-lg text-ink italic group-hover:text-accent transition-colors">{title}</h4>
      </div>
      <p className="text-xs text-ink/60 leading-relaxed font-sans">{desc}</p>
    </div>
  );
}
