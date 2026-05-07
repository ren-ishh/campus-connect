import React from 'react'
import { motion } from 'framer-motion'
import { Home, Users, Calendar, MessageSquare, Heart, MessageCircle, Share2, Play, Search, Bell } from 'lucide-react'

const AuroraBackground = () => (
  <div style={{
    position: 'fixed', inset: 0, zIndex: 0,
    background: '#07080f',
    overflow: 'hidden',
  }}>
    {/* Top-left cyan glow */}
    <div style={{
      position: 'absolute', top: '-10%', left: '-5%',
      width: '55%', height: '70%',
      background: 'radial-gradient(ellipse, rgba(0,220,255,0.28) 0%, rgba(0,180,255,0.12) 40%, transparent 70%)',
      filter: 'blur(40px)',
    }} />
    {/* Right magenta/purple glow */}
    <div style={{
      position: 'absolute', top: '10%', right: '-10%',
      width: '55%', height: '80%',
      background: 'radial-gradient(ellipse, rgba(180,0,255,0.22) 0%, rgba(255,0,180,0.12) 40%, transparent 70%)',
      filter: 'blur(50px)',
    }} />
    {/* Bottom center purple */}
    <div style={{
      position: 'absolute', bottom: '-10%', left: '25%',
      width: '50%', height: '50%',
      background: 'radial-gradient(ellipse, rgba(100,0,200,0.18) 0%, transparent 70%)',
      filter: 'blur(60px)',
    }} />
    {/* Stars */}
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

const Sidebar = () => (
  <div style={{
    position: 'fixed', left: '28px', top: '50%', transform: 'translateY(-50%)',
    zIndex: 100,
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px',
    background: 'rgba(255,255,255,0.06)',
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '50px',
    padding: '24px 14px',
    width: '72px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
  }}>
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

const ActionButtons = ({ likes = 124, comments = 32 }) => (
  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
    <button style={{
      display: 'flex', alignItems: 'center', gap: '6px',
      background: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '50px', padding: '8px 16px',
      color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: 700,
      cursor: 'pointer', backdropFilter: 'blur(10px)',
    }}>
      <Heart size={14} /> Like ({likes})
    </button>
    <button style={{
      display: 'flex', alignItems: 'center', gap: '6px',
      background: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '50px', padding: '8px 16px',
      color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: 700,
      cursor: 'pointer', backdropFilter: 'blur(10px)',
    }}>
      <MessageCircle size={14} /> Comment ({comments})
    </button>
    <button style={{
      display: 'flex', alignItems: 'center', gap: '6px',
      background: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '50px', padding: '8px 16px',
      color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: 700,
      cursor: 'pointer', backdropFilter: 'blur(10px)',
    }}>
      <Share2 size={14} /> Share
    </button>
  </div>
)

const UserBadge = ({ name, time, avatar }) => (
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

// The blob shape SVG clip paths
const BlobCard = ({ children, style, className }) => (
  <div style={{
    background: 'rgba(255,255,255,0.07)',
    backdropFilter: 'blur(40px)',
    WebkitBackdropFilter: 'blur(40px)',
    borderRadius: '44% 56% 65% 35% / 48% 44% 56% 52%',
    border: '1.5px solid rgba(255,255,255,0.15)',
    padding: '32px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'inset 0 0 30px rgba(255,255,255,0.03), 0 20px 60px rgba(0,0,0,0.4)',
    ...style,
  }}>
    {/* Iridescent border shimmer */}
    <div style={{
      position: 'absolute', inset: 0, borderRadius: 'inherit',
      background: 'linear-gradient(135deg, rgba(0,220,255,0.15) 0%, transparent 40%, rgba(255,0,180,0.12) 100%)',
      pointerEvents: 'none',
    }} />
    {children}
  </div>
)

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
              fontFamily: "'Inter', sans-serif",
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

        {/* Main Feed - Two column blob layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>

          {/* LEFT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

            {/* Post 1: Study Session */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <BlobCard style={{ borderRadius: '45% 55% 68% 32% / 46% 48% 52% 54%' }}>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '8px', fontWeight: 500 }}>
                  Late night study session in the library. Good luck on finals!{' '}
                  <span style={{ color: '#00DCFF' }}>#CampusLife</span>{' '}
                  <span style={{ color: '#00DCFF' }}>#StudyHard</span>
                </p>

                {/* Image */}
                <div style={{
                  borderRadius: '20px', overflow: 'hidden',
                  marginBottom: '20px', marginTop: '12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  height: '190px',
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                    alt="study"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Action buttons */}
                <ActionButtons />

                {/* User info */}
                <div style={{ marginTop: '16px' }}>
                  <UserBadge name="Alex Rivera" time="2 hours ago" />
                </div>
              </BlobCard>
            </motion.div>

            {/* Post 2: Poll */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            >
              <BlobCard style={{ borderRadius: '55% 45% 32% 68% / 52% 56% 44% 48%' }}>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', fontWeight: 600, marginBottom: '20px', lineHeight: 1.5 }}>
                  Which dining hall is serving the best food today?
                </p>

                {/* Poll options */}
                {[
                  { label: 'North Hall', value: 35 },
                  { label: 'South Commons', value: 22 },
                  { label: 'The Hub', value: 0 },
                ].map((opt) => (
                  <div key={opt.label} style={{ marginBottom: '10px', cursor: 'pointer' }}>
                    <div style={{
                      position: 'relative', height: '44px',
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
                        padding: '0 16px', fontSize: '13px', fontWeight: 700,
                      }}>
                        <span style={{ color: 'rgba(255,255,255,0.85)' }}>{opt.label}</span>
                        <span style={{ color: '#00DCFF' }}>{opt.value}%</span>
                      </div>
                    </div>
                  </div>
                ))}

                <div style={{ marginTop: '16px' }}>
                  <UserBadge name="Campus Foodies" time="6 hours ago" />
                </div>
              </BlobCard>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingTop: '60px' }}>

            {/* Post 3: Video/Event */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              <BlobCard style={{ borderRadius: '38% 62% 55% 45% / 50% 42% 58% 50%' }}>
                {/* Compact video card layout like screenshot */}
                <div style={{
                  display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '16px',
                }}>
                  {/* Thumbnail with play */}
                  <div style={{
                    width: '120px', height: '80px', borderRadius: '14px',
                    overflow: 'hidden', flexShrink: 0, position: 'relative',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}>
                    <img
                      src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400"
                      alt="event"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(0,0,0,0.3)',
                    }}>
                      <div style={{
                        width: '30px', height: '30px', borderRadius: '50%',
                        background: 'rgba(255,255,255,0.2)',
                        border: '1px solid rgba(255,255,255,0.4)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        backdropFilter: 'blur(10px)',
                      }}>
                        <Play size={14} color="white" fill="white" style={{ marginLeft: '2px' }} />
                      </div>
                    </div>
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'white', margin: '0 0 4px', lineHeight: 1.3 }}>
                      Live Music Performance at the Quad
                    </h3>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', margin: '0 0 12px' }}>
                      Tomorrow, 6 PM
                    </p>
                    <button style={{
                      background: 'rgba(0,220,255,0.15)',
                      border: '1px solid rgba(0,220,255,0.5)',
                      borderRadius: '50px', padding: '6px 18px',
                      color: '#00DCFF', fontSize: '12px', fontWeight: 700,
                      cursor: 'pointer',
                    }}>
                      Join Event
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00DCFF, #8A2BE2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '12px',
                  }}>🎵</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>Campus Music Club</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>4 hours ago</div>
                  </div>
                </div>
              </BlobCard>
            </motion.div>

            {/* Post 4: Art Installation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
            >
              <BlobCard style={{ borderRadius: '60% 40% 45% 55% / 55% 60% 40% 45%' }}>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', marginBottom: '8px', fontWeight: 500, lineHeight: 1.6 }}>
                  Just finished the new art installation in the main hall. Check it out! It's interactive.
                </p>
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ color: '#00DCFF', fontSize: '13px', fontWeight: 700, marginRight: '10px' }}>#ArtClub</span>
                  <span style={{ color: '#00DCFF', fontSize: '13px', fontWeight: 700 }}>#Installation</span>
                </div>

                {/* 3 grid images */}
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '8px', marginBottom: '20px',
                }}>
                  {[
                    "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=400",
                  ].map((img, i) => (
                    <div key={i} style={{
                      aspectRatio: '1', borderRadius: '14px', overflow: 'hidden',
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}>
                      <img src={img} alt={`art-${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>

                <ActionButtons />

                <div style={{ marginTop: '16px' }}>
                  <UserBadge name="Mia Chen, Arts Major" time="8 hours ago" />
                </div>
              </BlobCard>
            </motion.div>

          </div>
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