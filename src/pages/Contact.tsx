import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Send, Mail, User } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/response', { state: { name, email } });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <span className="section-label text-sage uppercase tracking-widest text-xs font-bold">Reach Out</span>
          <h1 className="text-6xl font-serif text-ink">Let's Connect</h1>
        </div>
        <p className="text-xl text-ink/70 leading-relaxed font-serif italic">
          Punya pertanyaan tentang rangkaian kami? Atau ingin konsultasi dekorasi? 
          Kami sangat senang mendengar kabar dari Anda.
        </p>
        
        <div className="space-y-6 pt-8">
          <div className="flex items-center gap-6 text-ink bg-white p-8 rounded-card shadow-soft border border-black/5">
            <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center border border-olive/30 text-sage">
                <Mail className="w-5 h-5" />
            </div>
            <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-sage">Email Us</p>
                <p className="text-lg font-serif italic">hello@lushpetals.com</p>
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-10 md:p-14 rounded-hero shadow-soft border border-black/5 relative overflow-hidden"
      >
        <h2 className="text-3xl font-serif mb-10 text-ink italic">Kirim Pesan</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-3">
            <label className="text-[11px] font-bold uppercase tracking-[2px] text-sage block">
                Nama Lengkap
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ahmad Galih Fulvian"
              className="w-full bg-cream border border-black/5 rounded-2xl px-6 py-4 focus:border-clay transition-all outline-none font-sans text-sm"
            />
          </div>
          <div className="space-y-3">
            <label className="text-[11px] font-bold uppercase tracking-[2px] text-sage block">
                Alamat Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="glih59236@gmail.com"
              className="w-full bg-cream border border-black/5 rounded-2xl px-6 py-4 focus:border-clay transition-all outline-none font-sans text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sage text-white py-5 rounded-pill font-bold tracking-widest uppercase text-[11px] hover:opacity-90 transition-all shadow-lg shadow-sage/10"
          >
            Kirim Pesan
          </button>
        </form>
      </motion.div>
    </div>
  );
}
