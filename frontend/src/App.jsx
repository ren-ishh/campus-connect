import React from 'react'
import { motion } from 'framer-motion'
import { Home, Users, Calendar, MessageSquare, Heart, MessageCircle, Share2, Play, Search, Bell } from 'lucide-react'

// ─────────────── Aurora Background ───────────────
const AuroraBackground = () => (
  <div style={{
    position: 'fixed', inset: 0, zIndex: 0,
    background: '#07080f',
    overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute', top: '-10%', left: '-5%',
      width: '55%', height: '70%',
      background: 'radial-gradient(ellipse, rgba(0,220,255,0.28) 0%, rgba(0,180,255,0.12) 40%, transparent 70%)',
      filter: 'blur(40px)',
    }} />
    <div style={{
      position: 'absolute', top: '10%', right: '-10%',
      width: '55%', height: '80%',
      background: 'radial-gradient(ellipse, rgba(180,0,255,0.22) 0%, rgba(255,0,180,0.12) 40%, transparent 70%)',
      filter: 'blur(50px)',
    }} />
    <div style={{
      position: 'absolute', bottom: '-10%', left: '25%',
      width: '50%', height: '50%',
      background: 'radial-gradient(ellipse, rgba(100,0,200,0.18) 0%, transparent 70%)',
      filter: 'blur(60px)',
    }} />
    {[...Array(30)].map((_, i) => (
      <div key={i} style={{
        position: 'absolute',
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${1 + Math.random() * 2}px`,
        height: `${1 + Math.random() * 2}px`,
        borderRadius: '50%',
        background: 'white',
        opacity: 0.3 + Math.random() * 0.5,
        boxShadow: `0 0 ${2 + Math.random() * 6}px white`,
      }} />
    ))}
  </div>
)

// ─────────────── Sidebar ───────────────
const Sidebar = () => (
  <div style={{
    position: 'fixed', left: '28px', top: '50%', transform: 'translateY(-50%)',
    zIndex: 100,
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px',
    background: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(40px)',
    WebkitBackdropFilter: 'blur(40px)',
    borderRadius: '60px',
    border: '1px solid rgba(255,255,255,0.25)',
    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1), 0 20px 50px rgba(0,0,0,0.6)',
    padding: '24px 14px',
    width: '72px',
    overflow: 'hidden',
  }}>
    {/* Glossy highlight */}
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
      borderRadius: '60px 60px 0 0',
      background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%)',
      pointerEvents: 'none',
    }} />
    <div style={{
      width: '44px', height: '44px', borderRadius: '14px',
      background: 'rgba(0,220,255,0.18)',
      border: '1px solid rgba(0,220,255,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      filter: 'drop-shadow(0 0 8px rgba(0,220,255,0.7))',
      cursor: 'pointer',
    }}>
      <Home size={22} color="#00DCFF" />
    </div>
    <Users size={24} color="rgba(255,255,255,0.4)" style={{ cursor: 'pointer' }} />
    <Calendar size={24} color="rgba(255,255,255,0.4)" style={{ cursor: 'pointer' }} />
    <MessageSquare size={24} color="rgba(255,255,255,0.4)" style={{ cursor: 'pointer' }} />
    <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', margin: '4px 0' }} />
    <div style={{
      width: '44px', height: '44px', borderRadius: '50%',
      border: '2px solid rgba(255,0,180,0.7)',
      overflow: 'hidden', cursor: 'pointer',
      boxShadow: '0 0 10px rgba(255,0,180,0.4)',
    }}>
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
        alt="profile"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  </div>
)

// ─────────────── Reusable Components ───────────────
const UserBadge = ({ name, time }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <div style={{
      width: '36px', height: '36px', borderRadius: '50%',
      overflow: 'hidden', border: '2px solid rgba(255,255,255,0.2)',
      flexShrink: 0,
    }}>
      <img src={`https://i.pravatar.cc/150?u=${name}`} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div>
      <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{name}</div>
      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>{time}</div>
    </div>
  </div>
)

// ─────────────── Liquid Glass Card ───────────────
const GlassCard = ({ children, style }) => (
  <div style={{
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(50px)',
    WebkitBackdropFilter: 'blur(50px)',
    borderRadius: '28px',
    padding: '24px',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    aspectRatio: '3 / 4',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    ...style,
  }}>
    {/* Glowing animated border */}
    <div style={{
      position: 'absolute',
      inset: '-2px',
      borderRadius: 'inherit',
      padding: '2px',
      background: 'linear-gradient(90deg, #00ffff, #ff00ff, #00ffff)',
      backgroundSize: '200% 100%',
      animation: 'glowBorder 6s linear infinite',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      maskComposite: 'exclude',
      pointerEvents: 'none',
      zIndex: 1,
    }} />
    {/* Glossy top shine */}
    <div style={{
      position: 'absolute',
      top: 0, left: 0, right: 0, height: '50%',
      borderRadius: '28px 28px 0 0',
      background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)',
      pointerEvents: 'none',
      zIndex: 0,
    }} />
    {children}
  </div>
)

// ─────────────── Divider + Icon Buttons ───────────────
const CardActions = () => (
  <>
    <div style={{
      width: '100%', height: '1px',
      background: 'rgba(255, 255, 255, 0.1)',
      marginBottom: '12px',
    }} />
    <div style={{ display: 'flex', gap: '20px' }}>
      <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '6px' }}>
        <Heart size={18} color="rgba(255,255,255,0.7)" />
      </button>
      <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '6px' }}>
        <MessageCircle size={18} color="rgba(255,255,255,0.7)" />
      </button>
      <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '6px' }}>
        <Share2 size={18} color="rgba(255,255,255,0.7)" />
      </button>
    </div>
  </>
)

// ─────────────── Main App ───────────────
export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: "'Inter', sans-serif",
      color: 'white',
      position: 'relative',
      padding: '0',
    }}>
      <AuroraBackground />
      <Sidebar />

      <div style={{
        position: 'relative', zIndex: 10,
        paddingLeft: '130px', paddingRight: '40px',
        paddingTop: '32px', paddingBottom: '48px',
        maxWidth: '1400px', margin: '0 auto',
      }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
          <div>
            <h1 style={{
              fontSize: '56px', fontWeight: 900, letterSpacing: '-2px',
              margin: 0, lineHeight: 1,
              textShadow: '0 0 30px rgba(0,220,255,0.3), 0 0 60px rgba(255,0,180,0.15)',
            }}>
              CAMPUS CONNECT
            </h1>
            <p style={{
              color: '#00DCFF', fontSize: '15px', fontWeight: 600,
              letterSpacing: '0.2em', marginTop: '8px', opacity: 0.85,
              textTransform: 'uppercase',
            }}>
              Fluid Glass Activity Feed
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{
              width: '52px', height: '52px', borderRadius: '16px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}>
              <Search size={22} color="rgba(255,255,255,0.8)" />
            </button>
            <button style={{
              width: '52px', height: '52px', borderRadius: '16px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', position: 'relative',
            }}>
              <Bell size={22} color="rgba(255,255,255,0.8)" />
              <div style={{
                position: 'absolute', top: '11px', right: '11px',
                width: '9px', height: '9px', borderRadius: '50%',
                background: '#ff4444', border: '1.5px solid #07080f',
              }} />
            </button>
          </div>
        </div>

        {/* 3‑column grid of cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'start' }}>

          {/* Card 1 – Alex Rivera */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}>
            <GlassCard>
              <UserBadge name="Alex Rivera" time="2 hours ago" />
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.5, margin: '14px 0', flex: 1 }}>
                Late night study session in the library. Good luck on finals!{' '}
                <span style={{ color: '#00DCFF' }}>#CampusLife</span>{' '}
                <span style={{ color: '#00DCFF' }}>#StudyHard</span>
              </p>
              <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '12px', flexShrink: 0, height: '130px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" alt="study" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <CardActions />
            </GlassCard>
          </motion.div>

          {/* Card 2 – Campus Foodies (Poll) */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}>
            <GlassCard>
              <UserBadge name="Campus Foodies" time="6 hours ago" />
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', fontWeight: 600, margin: '14px 0', flex: 1 }}>
                Which dining hall is serving the best food today?
              </p>
              <div style={{ marginBottom: '12px' }}>
                {[
                  { label: 'North Hall', value: 35 },
                  { label: 'South Commons', value: 22 },
                  { label: 'The Hub', value: 0 },
                ].map((opt) => (
                  <div key={opt.label} style={{ marginBottom: '8px' }}>
                    <div style={{
                      position: 'relative', height: '36px',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '50px', overflow: 'hidden',
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${opt.value}%` }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
                        style={{
                          position: 'absolute', inset: 0,
                          background: 'linear-gradient(90deg, rgba(0,220,255,0.25), rgba(138,43,226,0.25))',
                          borderRadius: '50px',
                        }}
                      />
                      <div style={{
                        position: 'absolute', inset: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0 14px', fontSize: '12px', fontWeight: 700,
                      }}>
                        <span style={{ color: 'rgba(255,255,255,0.85)' }}>{opt.label}</span>
                        <span style={{ color: '#00DCFF' }}>{opt.value}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <CardActions />
            </GlassCard>
          </motion.div>

          {/* Card 3 – Campus Music Club (Event) */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}>
            <GlassCard>
              <UserBadge name="Campus Music Club" time="4 hours ago" />
              <div style={{ flex: 1, margin: '14px 0' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '100px', height: '70px', borderRadius: '12px',
                    overflow: 'hidden', flexShrink: 0, position: 'relative',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}>
                    <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400" alt="event" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(0,0,0,0.3)',
                    }}>
                      <div style={{
                        width: '28px', height: '28px', borderRadius: '50%',
                        background: 'rgba(255,255,255,0.2)',
                        border: '1px solid rgba(255,255,255,0.4)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        backdropFilter: 'blur(10px)',
                      }}>
                        <Play size={14} color="white" fill="white" style={{ marginLeft: '2px' }} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'white', margin: '0 0 4px' }}>
                      Live Music Performance at the Quad
                    </h3>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', margin: '0 0 10px' }}>
                      Tomorrow, 6 PM
                    </p>
                    <button style={{
                      background: 'rgba(0,220,255,0.15)',
                      border: '1px solid rgba(0,220,255,0.5)',
                      borderRadius: '50px', padding: '4px 14px',
                      color: '#00DCFF', fontSize: '11px', fontWeight: 700,
                      cursor: 'pointer',
                    }}>
                      Join Event
                    </button>
                  </div>
                </div>
              </div>
              <CardActions />
            </GlassCard>
          </motion.div>

          {/* Card 4 – Mia Chen (Art) */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}>
            <GlassCard>
              <UserBadge name="Mia Chen, Arts Major" time="8 hours ago" />
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: 1.5, margin: '14px 0', flex: 1 }}>
                Just finished the new art installation in the main hall. Check it out! It's interactive.
              </p>
              <div style={{ marginBottom: '12px' }}>
                <span style={{ color: '#00DCFF', fontSize: '12px', fontWeight: 700, marginRight: '8px' }}>#ArtClub</span>
                <span style={{ color: '#00DCFF', fontSize: '12px', fontWeight: 700 }}>#Installation</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', marginBottom: '12px' }}>
                {[
                  "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80&w=400",
                  "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=400",
                ].map((img, i) => (
                  <div key={i} style={{
                    aspectRatio: '1', borderRadius: '10px', overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}>
                    <img src={img} alt={`art-${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
              <CardActions />
            </GlassCard>
          </motion.div>

        </div>

        {/* Footer */}
        <div style={{
          marginTop: '60px',
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(30px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '24px',
          padding: '32px 40px',
          textAlign: 'center',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '12px' }}>
            {['About', 'Privacy', 'Terms', 'Contact'].map(link => (
              <a key={link} href="#" style={{
                color: 'rgba(255,255,255,0.35)', fontSize: '12px', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none',
              }}>{link}</a>
            ))}
          </div>
          <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700, margin: 0 }}>
            Copyright © All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}