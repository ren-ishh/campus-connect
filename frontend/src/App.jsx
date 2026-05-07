import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Users, Calendar, MessageSquare, Search, Bell, Heart, MessageCircle, Share2, Play, User, MoreHorizontal } from 'lucide-react'

const AuroraBackground = () => (
  <div className="aurora-bg">
    <div className="aurora-wave"></div>
    {[...Array(25)].map((_, i) => (
      <div 
        key={i} 
        className="star" 
        style={{ 
          top: `${Math.random() * 100}%`, 
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 3}px`,
          height: `${Math.random() * 3}px`,
          boxShadow: `0 0 ${Math.random() * 10}px white`,
          animationDelay: `${Math.random() * 5}s`,
          animation: 'pulse 3s infinite'
        }}
      ></div>
    ))}
  </div>
)

const AmorphicGlass = ({ children, className, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay, ease: [0.23, 1, 0.32, 1] }}
    className={`amorphic-glass amorphic-float p-8 ${className}`}
  >
    {children}
  </motion.div>
)

const Sidebar = () => (
  <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-50">
    <div className="sidebar-glass">
      <div className="p-3 rounded-2xl bg-white/10 text-neon-cyan neon-glow-cyan cursor-pointer transition-all hover:scale-110">
        <Home size={28} />
      </div>
      <Users size={28} className="text-white/40 hover:text-white transition-all hover:scale-110 cursor-pointer" />
      <Calendar size={28} className="text-white/40 hover:text-white transition-all hover:scale-110 cursor-pointer" />
      <MessageSquare size={28} className="text-white/40 hover:text-white transition-all hover:scale-110 cursor-pointer" />
      <div className="mt-12 flex flex-col items-center gap-6">
        <div className="w-12 h-12 rounded-full border-2 border-neon-magenta p-0.5 relative cursor-pointer">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-neon-magenta to-neon-violet overflow-hidden">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="profile" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></div>
        </div>
      </div>
    </div>
  </aside>
)

const Header = () => (
  <header className="flex justify-between items-center mb-16 relative z-10">
    <div>
      <h1 className="text-6xl font-black tracking-tighter text-white flex items-baseline gap-3 heading-glow">
        CAMPUS <span className="heading-outline font-black opacity-80">CONNECT</span>
      </h1>
      <p className="text-neon-cyan text-xl font-medium mt-3 tracking-[0.2em] uppercase opacity-80">
        Fluid Glass Activity Feed
      </p>
    </div>
    <div className="flex gap-6">
      <div className="w-14 h-14 amorphic-glass flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all hover:scale-110">
        <Search size={24} className="text-white/80" />
      </div>
      <div className="w-14 h-14 amorphic-glass flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all hover:scale-110 relative">
        <Bell size={24} className="text-white/80" />
        <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full border-2 border-black neon-glow-magenta"></div>
      </div>
    </div>
  </header>
)

const PostCard = ({ type, user, time, content, image, tags, poll, delay, gridImages }) => (
  <AmorphicGlass className="w-full" delay={delay}>
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-neon-cyan to-neon-violet border border-white/20 overflow-hidden">
          <img src={`https://i.pravatar.cc/150?u=${user}`} alt={user} />
        </div>
        <div>
          <h4 className="text-base font-bold text-white/90 tracking-tight">{user}</h4>
          <p className="text-[10px] text-white/40 uppercase tracking-[0.15em] font-bold mt-0.5">{time}</p>
        </div>
      </div>
      <button className="text-white/30 hover:text-white transition-colors">
        <MoreHorizontal size={20} />
      </button>
    </div>

    <p className="text-white/80 text-base leading-relaxed mb-6 font-medium">
      {content}
    </p>

    {tags && (
      <div className="flex gap-3 mb-6">
        {tags.map(tag => (
          <span key={tag} className="text-sm font-bold text-neon-cyan/80 cursor-pointer hover:text-neon-cyan transition-colors">#{tag}</span>
        ))}
      </div>
    )}

    {image && !gridImages && (
      <div className="relative group rounded-3xl overflow-hidden mb-8 border border-white/10">
        <img src={image} alt="post" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
        {type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all group-hover:backdrop-blur-0">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border border-white/40 backdrop-blur-xl group-hover:scale-110 transition-transform">
              <Play size={32} className="text-white fill-white ml-1" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
               <button className="glass-btn text-xs font-bold text-white py-2 px-6">Join Event</button>
            </div>
          </div>
        )}
      </div>
    )}

    {gridImages && (
      <div className="grid grid-cols-3 gap-3 mb-8">
        {gridImages.map((img, i) => (
          <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-white/10 group">
            <img src={img} alt={`grid-${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
        ))}
      </div>
    )}

    {poll && (
      <div className="space-y-4 mb-8">
        {poll.map(opt => (
          <div key={opt.label} className="relative w-full h-12 rounded-full bg-white/5 border border-white/10 overflow-hidden group cursor-pointer hover:border-white/20 transition-all">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${opt.value}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 bg-gradient-to-r from-neon-cyan/30 to-neon-violet/30"
            ></motion.div>
            <div className="absolute inset-0 px-6 flex justify-between items-center text-sm font-bold tracking-wide">
              <span className="text-white/90">{opt.label}</span>
              <span className="text-neon-cyan neon-text-glow">{opt.value}%</span>
            </div>
          </div>
        ))}
      </div>
    )}

    <div className="flex items-center gap-4 mt-auto">
      <button className="flex-1 py-3 px-6 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold hover:bg-neon-magenta/20 hover:border-neon-magenta/50 hover:text-neon-magenta transition-all flex items-center justify-center gap-2 group">
        <Heart size={16} className="group-hover:fill-neon-magenta transition-all" /> Like (124)
      </button>
      <button className="flex-1 py-3 px-6 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold hover:bg-neon-cyan/20 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all flex items-center justify-center gap-2 group">
        <MessageCircle size={16} className="group-hover:fill-neon-cyan transition-all" /> Comment (32)
      </button>
      <button className="p-3 rounded-full bg-white/5 border border-white/10 text-white/40 hover:bg-white/10 hover:text-white transition-all">
        <Share2 size={16} />
      </button>
    </div>
  </AmorphicGlass>
)

export default function App() {
  return (
    <div className="min-h-screen pl-40 pr-20 py-20 font-['Inter'] text-white">
      <AuroraBackground />
      <Sidebar />
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Column 1 */}
          <div className="space-y-12">
            <PostCard 
              user="Alex Rivera"
              time="2 hours ago"
              content="Late night study session in the library. Good luck on finals! #CampusLife #StudyHard"
              image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000"
              tags={["CampusLife", "StudyHard"]}
              delay={0.2}
            />
            
            <PostCard 
              user="Campus Foodies"
              time="8 hours ago"
              content="Which dining hall is serving the best food today?"
              poll={[
                { label: "North Hall", value: 35 },
                { label: "South Commons", value: 22 },
                { label: "The Hub", value: 0 }
              ]}
              delay={0.4}
            />
          </div>

          {/* Column 2 */}
          <div className="space-y-12 pt-20">
            <PostCard 
              type="video"
              user="Campus Music Club"
              time="4 hours ago"
              content="Live Music Performance at the Quad. Tomorrow, 8 PM"
              image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000"
              delay={0.3}
            />

            <PostCard 
              user="Mia Chen, Arts Major"
              time="8 hours ago"
              content="Just finished the new art installation in the main hall. Check it out! It's interactive."
              tags={["ArtClub", "Installation"]}
              gridImages={[
                "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=500",
                "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80&w=500",
                "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=500"
              ]}
              delay={0.5}
            />
          </div>
        </div>

        <footer className="mt-32 amorphic-glass p-12 text-center border-white/5">
          <div className="flex justify-center gap-12 mb-6 text-sm font-bold tracking-widest text-white/40 uppercase">
            <a href="#" className="hover:text-neon-cyan transition-colors">About</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">Privacy</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">Terms</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">Contact</a>
          </div>
          <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">Copyright © All Rights Reserved</p>
        </footer>
      </div>
    </div>
  )
}
