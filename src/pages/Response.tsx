import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, ArrowLeft, Heart } from 'lucide-react';

export default function Response() {
  const location = useLocation();
  const { name, email } = location.state || { name: 'Guest', email: 'Not provided' };

  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="space-y-12"
      >
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-clay/10 rounded-full flex items-center justify-center text-clay border border-clay/20">
            <CheckCircle className="w-10 h-10" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl font-serif italic text-ink">Thank You</h1>
          <p className="text-lg text-ink/60 font-sans uppercase tracking-[3px]">
            Blooming request received
          </p>
        </div>

        <div className="bg-white p-12 rounded-hero shadow-soft text-left space-y-8 border border-black/5">
          <div className="space-y-2">
            <span className="section-label mb-0">Customer Information</span>
            <div className="h-px bg-clay/20 w-16" />
          </div>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center py-4 border-b border-black/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-sage">Name</span>
              <span className="text-2xl font-serif italic">{name}</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-black/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-sage">Email</span>
              <span className="text-lg font-sans text-ink/80">{email}</span>
            </div>
          </div>
          
          <div className="pt-4 text-center">
            <p className="text-[11px] text-ink/40 uppercase tracking-widest flex items-center justify-center gap-2">
              Ready to bloom soon <Heart className="w-3 h-3 text-clay fill-clay" />
            </p>
          </div>
        </div>

        <div className="pt-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-4 text-sage font-bold uppercase tracking-[2px] text-xs hover:text-clay transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
