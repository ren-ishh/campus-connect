import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  BookOpen,
  CalendarDays,
  Compass,
  Heart,
  Home,
  MessageCircle,
  Search,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "./utils/cn";

const floatIn = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Compass, label: "Explore" },
  { icon: CalendarDays, label: "Events" },
  { icon: MessageCircle, label: "Messages" },
  { icon: Users, label: "People" },
];

const liveSpaces = [
  {
    icon: BookOpen,
    title: "Study Lounge",
    copy: "A calm glass room for quiet focus, shared notes, and late-night momentum.",
  },
  {
    icon: Sparkles,
    title: "Creator Circle",
    copy: "Design reviews, student work, and bright ideas floating in one clean surface.",
  },
  {
    icon: Users,
    title: "Student Hub",
    copy: "The social layer for clubs, classmates, and the people you keep seeing again.",
  },
];

const feedPosts = [
  {
    author: "Maya Chen",
    role: "Architecture",
    time: "12m ago",
    copy: "Crit board at the atrium is open until 8. Bring sketches, moodboards, or just a second pair of eyes.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80",
    accents: ["#studio", "#crit", "#campus"],
  },
  {
    author: "Campus Music Club",
    role: "Community",
    time: "37m ago",
    copy: "First rehearsal on the lawn after sunset. If you can sing, play, or clap on time, come through.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
    accents: ["#live", "#music", "#open-call"],
  },
  {
    author: "Leo Park",
    role: "Computer Science",
    time: "1h ago",
    copy: "Launching a mini build sprint in the lab. If you want feedback on your app idea, drop in and stay for a while.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    accents: ["#build", "#hack", "#teamup"],
  },
];

function GlassCard({ className, children, ...props }: HTMLMotionProps<"article"> & { className?: string; children: ReactNode }) {
  return (
    <motion.article
      className={cn("glass-panel relative overflow-hidden rounded-[32px] p-6", className)}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.08)_28%,rgba(255,255,255,0)_58%)] opacity-90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_42%)]" />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.article>
  );
}

function GlassButton({ className, children, tone = "light" }: { className?: string; children: ReactNode; tone?: "light" | "strong" }) {
  return (
    <button
      className={cn(
        "glass-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5",
        tone === "strong" && "border-white/24 bg-white/18 shadow-[0_18px_50px_rgba(125,211,252,0.18)]",
        className,
      )}
      type="button"
    >
      {children}
    </button>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <motion.div variants={floatIn} className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.4em] text-white/35">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">{title}</h2>
      <p className="mt-3 max-w-xl text-sm leading-6 text-white/62 sm:text-base">{copy}</p>
    </motion.div>
  );
}

function LiquidBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05060a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.17),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_bottom,rgba(20,184,166,0.1),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-18" />
      <motion.div
        aria-hidden="true"
        className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-cyan-400/16 blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, 18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[-4rem] top-24 h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/14 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, -18, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[-6rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-emerald-400/10 blur-3xl"
        animate={{ x: [0, 16, 0], y: [0, -12, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <LiquidBackdrop />

      <aside className="hidden">
        <motion.div
          className="glass-panel flex w-[4.75rem] flex-col items-center gap-4 rounded-[40px] px-3 py-4"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-[0.65rem] font-semibold tracking-[0.35em] text-cyan-100">
            CC
          </div>
          <div className="h-px w-8 bg-white/10" />
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                aria-label={item.label}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-2xl border transition duration-200 hover:-translate-y-0.5",
                  item.active
                    ? "border-cyan-200/30 bg-cyan-300/14 text-cyan-100 shadow-[0_0_30px_rgba(56,189,248,0.22)]"
                    : "border-white/8 bg-white/5 text-white/48 hover:border-white/18 hover:bg-white/10 hover:text-white/80",
                )}
              >
                <Icon size={20} strokeWidth={1.9} />
              </button>
            );
          })}
          <div className="mt-1 h-px w-8 bg-white/10" />
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-fuchsia-200/30 bg-white/10 ring-1 ring-inset ring-white/10 transition duration-200 hover:-translate-y-0.5"
            aria-label="Profile"
          >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </button>
        </motion.div>
      </aside>

      <div className="fixed bottom-4 left-1/2 z-30 w-[min(92vw,28rem)] -translate-x-1/2">
        <div className="glass-panel flex items-center justify-between rounded-[28px] px-3 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                aria-label={item.label}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-2xl border transition duration-200",
                  item.active
                    ? "border-cyan-200/30 bg-cyan-300/14 text-cyan-100"
                    : "border-white/8 bg-white/5 text-white/50",
                )}
              >
                <Icon size={19} strokeWidth={1.9} />
              </button>
            );
          })}
        </div>
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-28 pt-6 sm:px-6">
        <header className="flex items-center justify-between gap-4">
          <motion.div
            className="glass-panel flex items-center gap-3 rounded-full px-4 py-3"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/10 text-[0.65rem] font-semibold tracking-[0.35em] text-white/90">
              CC
            </div>
            <div className="hidden sm:block">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/42">Campus Connect</p>
              <p className="text-sm text-white/72">Liquid glass campus network</p>
            </div>
          </motion.div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Search"
              className="glass-button flex h-12 w-12 items-center justify-center rounded-full text-white/78"
            >
              <Search size={18} strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="Notifications"
              className="glass-button relative flex h-12 w-12 items-center justify-center rounded-full text-white/78"
            >
              <Bell size={18} strokeWidth={2} />
              <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
            </button>
          </div>
        </header>

        <section className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-14">
          <motion.div
            className="max-w-2xl"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={floatIn} className="text-xs uppercase tracking-[0.4em] text-cyan-100/65">
              Campus social layer
            </motion.p>
            <motion.h1
              variants={floatIn}
              className="mt-4 text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl"
            >
              Campus Connect
            </motion.h1>
            <motion.p variants={floatIn} className="mt-6 max-w-xl text-base leading-7 text-white/68 sm:text-lg">
              A liquid glass experience for campus life, where conversations, events, and communities float together on one elegant surface.
            </motion.p>

            <motion.div variants={floatIn} className="mt-8 flex flex-wrap gap-3">
              <GlassButton tone="strong">
                Open the feed <ArrowRight size={16} strokeWidth={2.2} />
              </GlassButton>
              <GlassButton>
                Explore spaces <Sparkles size={16} strokeWidth={2.2} />
              </GlassButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <motion.div
              className="glass-panel relative min-h-[34rem] overflow-hidden rounded-[40px] p-4 sm:min-h-[42rem]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_35%,rgba(255,255,255,0.04)_100%)]" />
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
                alt="Students studying together on campus"
                className="absolute inset-0 h-full w-full object-cover opacity-72"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,10,0.08)_0%,rgba(5,6,10,0.18)_42%,rgba(5,6,10,0.72)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.25),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.16),transparent_30%)]" />

              <div className="relative z-10 flex h-full flex-col justify-between rounded-[32px] border border-white/10 bg-white/4 p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="glass-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
                    <Sparkles size={14} strokeWidth={2.1} />
                    Live presence
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-2 text-xs text-white/65">
                    <Users size={14} strokeWidth={2.1} />
                    Campuswide
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="glass-panel rounded-[28px] p-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/40">Today</p>
                    <p className="mt-2 text-lg font-semibold text-white">Everything feels connected.</p>
                    <p className="mt-2 text-sm leading-6 text-white/62">
                      A frosted layer of messages, events, and study rooms that glide on top of campus life.
                    </p>
                  </div>
                  <div className="glass-panel rounded-[28px] p-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/40">Look & feel</p>
                    <p className="mt-2 text-lg font-semibold text-white">Soft, bright, and reflective.</p>
                    <p className="mt-2 text-sm leading-6 text-white/62">
                      Translucent surfaces, subtle borders, and layered glow create the liquid glass finish.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          className="pb-14 pt-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="Live spaces"
            title="Every panel, button, and rail should feel like it belongs to the same sheet of glass."
            copy="The surfaces below reuse the same frost, highlight, and depth treatment so the whole interface feels native to the effect rather than decorated with it."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {liveSpaces.map((space, index) => {
              const Icon = space.icon;
              return (
                <GlassCard
                  key={space.title}
                  variants={floatIn}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="min-h-[18rem]"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/14 bg-white/8",
                        index === 0 && "text-cyan-100",
                        index === 1 && "text-fuchsia-100",
                        index === 2 && "text-emerald-100",
                      )}
                    >
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-white/38">Glass room</p>
                      <h3 className="mt-1 text-xl font-semibold tracking-[-0.03em] text-white">{space.title}</h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-white/68">{space.copy}</p>
                  <div className="mt-auto flex items-center justify-between pt-8 text-sm text-white/52">
                    <span>Open surface</span>
                    <ArrowRight size={16} strokeWidth={2.2} />
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          className="pb-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <SectionHeading
            eyebrow="Community feed"
            title="Posts should feel as soft and luminous as the interface around them."
            copy="Each feed card uses the same frosted depth, reflective highlight, and low-contrast media treatment so the content blends into the glass language rather than fighting it."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {feedPosts.map((post, index) => (
              <GlassCard
                key={post.author}
                variants={floatIn}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={cn(index === 0 ? "lg:col-span-2" : "", "min-h-[26rem]")}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/10 text-sm font-semibold text-white/88">
                    {post.author
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-white">{post.author}</div>
                    <div className="text-xs text-white/45">
                      {post.role} · {post.time}
                    </div>
                  </div>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-6 text-white/68">{post.copy}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {post.accents.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 overflow-hidden rounded-[28px] border border-white/10 bg-white/6">
                  <img src={post.image} alt={post.author} className="h-60 w-full object-cover opacity-88" />
                </div>

                <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                  <div className="flex items-center gap-5 text-white/56">
                    <button type="button" className="flex items-center gap-2 transition hover:text-white">
                      <Heart size={16} strokeWidth={2} />
                      <span className="text-xs font-semibold uppercase tracking-[0.24em]">Like</span>
                    </button>
                    <button type="button" className="flex items-center gap-2 transition hover:text-white">
                      <MessageCircle size={16} strokeWidth={2} />
                      <span className="text-xs font-semibold uppercase tracking-[0.24em]">Reply</span>
                    </button>
                  </div>
                  <button type="button" className="glass-button flex h-10 w-10 items-center justify-center rounded-full text-white/82">
                    <Send size={15} strokeWidth={2.2} />
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        <footer className="mt-auto pb-2">
          <div className="glass-panel flex flex-col gap-4 rounded-[28px] px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/35">Campus Connect</p>
              <p className="mt-2 text-sm text-white/64">
                Built to feel like one continuous pane of light, blur, and motion.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
              <a href="#" className="transition hover:text-white">
                About
              </a>
              <a href="#" className="transition hover:text-white">
                Privacy
              </a>
              <a href="#" className="transition hover:text-white">
                Terms
              </a>
              <a href="#" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
