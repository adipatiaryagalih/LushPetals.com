import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Bouquet Artificial",
    description: "Buket bunga artificial yang dibungkus dengan kertas aesthetic (wrapping paper) dan pita cantik.",
    price: "Rp. 75.000",
    image: "https://images.unsplash.com/photo-1591886616136-621aa1680720?auto=format&fit=crop&q=80&w=800",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Flower Vase",
    description: "Bunga artificial yang sudah dirangkai dalam vas (kaca/keramik/plastik premium).",
    price: "Rp. 19.200",
    image: "https://images.unsplash.com/photo-1533226993203-d23258814777?auto=format&fit=crop&q=80&w=800",
    tag: "Minimalist"
  },
  {
    id: 3,
    name: "Flower Box",
    description: "Bunga disusun dalam kotak (box) elegan, biasanya bentuk love atau square.",
    price: "Rp. 240.000",
    image: "https://images.unsplash.com/photo-1548611635-b6e78eb9d0fb?auto=format&fit=crop&q=80&w=800",
    tag: "Premium Gift"
  }
];

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="space-y-4">
          <span className="section-label">Featured Products</span>
          <h1 className="text-5xl md:text-6xl font-serif">Signature Series</h1>
        </div>
        <p className="max-w-md text-ink/60 font-serif italic text-lg border-l-2 border-clay pl-6">
          "Setiap rangkaian dibuat dengan hati untuk melengkapi momen spesial Anda."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group pinterest-item p-4"
          >
            <div className="relative aspect-square overflow-hidden rounded-card mb-6 shadow-soft group-hover:shadow-lg transition-all duration-500">
              <img 
                src={product.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="inline-block px-3 py-1 border border-olive rounded-full text-[10px] text-sage bg-white/80 backdrop-blur-sm tracking-widest uppercase font-bold">
                  {product.tag}
                </span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-serif text-ink truncate pr-4 italic">{product.name}</h3>
                <span className="text-sm font-bold text-clay whitespace-nowrap">{product.price}</span>
              </div>
              <p className="text-ink/60 text-xs leading-relaxed font-sans line-clamp-2">
                {product.description}
              </p>
              <button className="w-full bg-sage text-white py-3 rounded-full text-[10px] uppercase tracking-widest font-bold mt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                Detail Produk
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Featured Lily Item */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 p-12 bg-accent/10 rounded-[3rem] flex flex-col lg:flex-row gap-16 items-center"
      >
        <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-serif leading-tight">Spesial Collection: <br/>The Lily Majesty</h2>
            <p className="text-lg text-primary/70 leading-relaxed font-light">
                Campuran lily premium dengan mawar dan baby's breath, dibalut dalam burlap natural. 
                Sempurna untuk melengkapi dekorasi rumah bergaya Pinterest.
            </p>
            <button className="border border-primary/20 px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-white transition-all">
                Learn More
            </button>
        </div>
        <div className="flex-1 w-full aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover"
            />
        </div>
      </motion.div>
    </div>
  );
}
