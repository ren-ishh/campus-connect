import { useEffect, useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import { AnimatePresence, motion, type HTMLMotionProps } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  BookOpen,
  CalendarDays,
  ChevronRight,
  CircleUserRound,
  Clock3,
  Compass,
  Filter,
  Heart,
  Home,
  MapPin,
  MessageCircle,
  Plus,
  Search,
  Send,
  Settings,
  Sparkles,
  UserPlus,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "./utils/cn";

type PageId = "home" | "explore" | "events" | "messages" | "people" | "profile";

const validPages: PageId[] = ["home", "explore", "events", "messages", "people", "profile"];

const pageMeta: Record<PageId, { eyebrow: string; title: string; copy: string }> = {
  home: {
    eyebrow: "Campus social layer",
    title: "Campus Connect",
    copy:
      "A soft, connected place for events, messages, and study rooms to live together on one polished surface.",
  },
  explore: {
    eyebrow: "Discovery",
    title: "Explore what is happening across campus.",
    copy:
      "Find clubs, rooms, and shared interests with a layout that makes browsing feel calm instead of crowded.",
  },
  events: {
    eyebrow: "Schedule",
    title: "Plan your week around the rooms that matter.",
    copy:
      "Track what is live now, what starts next, and where the next group of students is already gathering.",
  },
  messages: {
    eyebrow: "Inbox",
    title: "Keep every class group and club thread in one place.",
    copy:
      "Switch between conversations quickly, reply without friction, and keep the social layer easy to use.",
  },
  people: {
    eyebrow: "Network",
    title: "Meet students, mentors, and organizers nearby.",
    copy:
      "Follow the people who keep campus moving and start conversations from a profile-first discovery flow.",
  },
  profile: {
    eyebrow: "Account",
    title: "Your campus identity stays on one calm surface.",
    copy:
      "Review your profile, settings, and recent activity with the same glass language used everywhere else.",
  },
};

const navItems: Array<{ id: PageId; label: string; icon: LucideIcon }> = [
  { id: "home", label: "Home", icon: Home },
  { id: "explore", label: "Explore", icon: Compass },
  { id: "events", label: "Events", icon: CalendarDays },
  { id: "messages", label: "Messages", icon: MessageCircle },
  { id: "people", label: "People", icon: Users },
  { id: "profile", label: "Profile", icon: CircleUserRound },
];

const homeSpaces = [
  {
    icon: BookOpen,
    title: "Study Lounge",
    copy: "Quiet focus rooms for notes, revisions, and borrowing a second brain before deadlines.",
  },
  {
    icon: Sparkles,
    title: "Creator Circle",
    copy: "A soft corner for critique, design reviews, and work-in-progress shares.",
  },
  {
    icon: Users,
    title: "Student Hub",
    copy: "A friendly layer for clubs, classmates, and the people you keep meeting again.",
  },
];

const feedPosts = [
  {
    author: "Maya Chen",
    role: "Architecture",
    time: "12m ago",
    copy:
      "Crit board at the atrium is open until 8. Bring sketches, moodboards, or just a second pair of eyes.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80",
    tags: ["#studio", "#crit", "#campus"],
  },
  {
    author: "Campus Music Club",
    role: "Community",
    time: "37m ago",
    copy:
      "First rehearsal on the lawn after sunset. If you can sing, play, or clap on time, come through.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80",
    tags: ["#live", "#music", "#open-call"],
  },
  {
    author: "Leo Park",
    role: "Computer Science",
    time: "1h ago",
    copy: "Launching a mini build sprint in the lab. If you want feedback on your app idea, drop in and stay awhile.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    tags: ["#build", "#hack", "#teamup"],
  },
];

const exploreRows = [
  {
    icon: Compass,
    title: "Open studios",
    copy: "Design, film, and media groups that are taking walk-ins today.",
    detail: "18 active rooms",
  },
  {
    icon: Clock3,
    title: "Late library",
    copy: "Study tables, quiet floors, and open collaboration corners after class.",
    detail: "Open until 1 AM",
  },
  {
    icon: MapPin,
    title: "Campus lawns",
    copy: "The easiest places to find a crowd, a conversation, or a quick event.",
    detail: "3 live meetups",
  },
];

const eventSchedule = [
  {
    time: "4:30 PM",
    title: "Sunset Startup Sprint",
    place: "Innovation Lab",
    copy: "Pair with new people and turn a rough idea into something shareable in ninety minutes.",
  },
  {
    time: "6:00 PM",
    title: "Campus Film Night",
    place: "The Commons",
    copy: "A low-key screening with post-film discussion hosted by the media club.",
  },
  {
    time: "7:30 PM",
    title: "Open Mic Warmup",
    place: "North Lawn",
    copy: "A student-led stage for music, poetry, and short stories under the lights.",
  },
];

const conversations = [
  {
    id: "amina",
    name: "Amina",
    group: "Design studio",
    preview: "Can you share the poster export before tonight?",
    status: "Active now",
    unread: 2,
    messages: [
      { sender: "Amina", text: "Can you share the poster export before tonight?", mine: false },
      { sender: "You", text: "Yep, I am cleaning it up now and will drop it in the thread.", mine: true },
      { sender: "Amina", text: "Perfect. The light version looks great so far.", mine: false },
    ],
  },
  {
    id: "noah",
    name: "Noah",
    group: "Physics lab",
    preview: "We still have a spare seat for the study table.",
    status: "2m ago",
    unread: 0,
    messages: [
      { sender: "Noah", text: "We still have a spare seat for the study table.", mine: false },
      { sender: "You", text: "Saving it. I will be there after class.", mine: true },
    ],
  },
  {
    id: "mila",
    name: "Mila",
    group: "Campus music club",
    preview: "Need one more guitar for rehearsal tonight.",
    status: "12m ago",
    unread: 1,
    messages: [
      { sender: "Mila", text: "Need one more guitar for rehearsal tonight.", mine: false },
      { sender: "You", text: "I can bring mine. What time should I meet everyone?", mine: true },
    ],
  },
];

const peopleList = [
  {
    initials: "AK",
    name: "Ava Kim",
    role: "Product Design",
    copy: "Runs a critique circle every Thursday and shares the best campus study spots.",
  },
  {
    initials: "MP",
    name: "Marcus Patel",
    role: "Computer Science",
    copy: "Building tools for student clubs and always happy to swap app feedback.",
  },
  {
    initials: "SR",
    name: "Sofia Rivera",
    role: "Community Lead",
    copy: "Keeps the events board fresh and helps new students find their first group.",
  },
  {
    initials: "JT",
    name: "Jordan Tran",
    role: "Music Society",
    copy: "Connects musicians, venues, and everyone who wants to join the next jam.",
  },
];

const profileActivity = [
  {
    icon: CalendarDays,
    title: "Registered for campus film night",
    time: "Today at 2:10 PM",
  },
  {
    icon: MessageCircle,
    title: "Replied in the design studio thread",
    time: "Today at 11:42 AM",
  },
  {
    icon: Heart,
    title: "Liked a study lounge recommendation",
    time: "Yesterday at 9:05 PM",
  },
];

const pageTransition = {
  initial: { opacity: 0, y: 18, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -12, filter: "blur(8px)" },
};

function getPageFromHash(hash: string): PageId {
  const next = hash.replace("#", "") as PageId;
  return validPages.includes(next) ? next : "home";
}

function GlassPanel({ className, contentClassName, children, ...props }: HTMLMotionProps<"div"> & { children: ReactNode; contentClassName?: string }) {
  return (
    <motion.div className={cn("glass-panel relative overflow-hidden rounded-[32px] p-6", className)} {...props}>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.08)_30%,rgba(255,255,255,0)_58%)] opacity-90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_42%)]" />
      <div className={cn("relative z-10 flex h-full flex-col", contentClassName)}>{children}</div>
    </motion.div>
  );
}

function GlassButton({ className, children, tone = "light", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  tone?: "light" | "strong";
}) {
  return (
    <button
      type="button"
      className={cn(
        "glass-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5",
        tone === "strong" && "border-white/24 bg-white/18 shadow-[0_18px_50px_rgba(125,211,252,0.18)]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <motion.div variants={pageTransition} className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.45em] text-white/38">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">{copy}</p>
    </motion.div>
  );
}

function PageIntro({ meta }: { meta: { eyebrow: string; title: string; copy: string } }) {
  return (
    <motion.div variants={pageTransition} className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.45em] text-cyan-100/70">{meta.eyebrow}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl">{meta.title}</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/66 sm:text-base">{meta.copy}</p>
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

function DesktopRail({ activePage, onNavigate }: { activePage: PageId; onNavigate: (page: PageId) => void }) {
  return (
    <aside className="hidden">
      <GlassPanel className="flex w-24 flex-col items-center rounded-[36px] px-3 py-4" contentClassName="justify-between">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/16 bg-white/10 text-[0.68rem] font-semibold tracking-[0.35em] text-white/85 transition hover:-translate-y-0.5"
          aria-label="Campus Connect home"
        >
          CC
        </button>

        <div className="flex flex-col items-center gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = item.id === activePage;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-2xl border transition duration-200 hover:-translate-y-0.5",
                  active
                    ? "border-cyan-200/30 bg-cyan-300/14 text-cyan-100 shadow-[0_0_30px_rgba(56,189,248,0.22)]"
                    : "border-white/8 bg-white/5 text-white/48 hover:border-white/18 hover:bg-white/10 hover:text-white/80",
                )}
              >
                <Icon size={20} strokeWidth={1.9} />
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => onNavigate("profile")}
          className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/14 bg-white/10 ring-1 ring-inset ring-white/10 transition hover:-translate-y-0.5"
          aria-label="Profile"
        >
          <CircleUserRound size={20} className="text-white/80" />
        </button>
      </GlassPanel>
    </aside>
  );
}

function MobileDock({ activePage, onNavigate }: { activePage: PageId; onNavigate: (page: PageId) => void }) {
  return (
    <div className="fixed bottom-4 left-1/2 z-30 w-[min(92vw,30rem)] -translate-x-1/2">
      <GlassPanel className="rounded-[28px] px-3 py-3" contentClassName="flex-row items-center justify-between">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.id === activePage;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-2xl border transition duration-200",
                active ? "border-cyan-200/30 bg-cyan-300/14 text-cyan-100" : "border-white/8 bg-white/5 text-white/50",
              )}
            >
              <Icon size={19} strokeWidth={1.9} />
            </button>
          );
        })}
      </GlassPanel>
    </div>
  );
}

function HomePage({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <div className="flex flex-1 flex-col">
      <motion.section
        className="grid gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-14"
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.45em] text-cyan-100/70">Campus social layer</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl">
            Campus Connect
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/68 sm:text-lg">
            A liquid glass experience for campus life, where conversations, events, and communities float together on
            one elegant surface.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <GlassButton tone="strong" onClick={() => onNavigate("explore") }>
              Explore spaces <ArrowRight size={16} strokeWidth={2.2} />
            </GlassButton>
            <GlassButton onClick={() => onNavigate("messages") }>
              Open inbox <MessageCircle size={16} strokeWidth={2.2} />
            </GlassButton>
          </div>
        </div>

        <GlassPanel className="min-h-[36rem] p-4 sm:min-h-[42rem] sm:p-5">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
            alt="Students studying together on campus"
            className="absolute inset-0 h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,10,0.12)_0%,rgba(5,6,10,0.18)_42%,rgba(5,6,10,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.24),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.16),transparent_30%)]" />

          <div className="relative z-10 flex h-full flex-col justify-between rounded-[32px] border border-white/10 bg-white/6 p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="glass-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
                <Sparkles size={14} strokeWidth={2.1} />
                Live today
              </div>
              <div className="glass-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                <Users size={14} strokeWidth={2.1} />
                12 rooms open
              </div>
            </div>

            <div className="max-w-md rounded-[32px] border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-white/42">Right now</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                The next conversation is already open.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/66">
                Study rooms, clubs, and event chatter stay in one soft, connected surface.
              </p>
            </div>
          </div>
        </GlassPanel>
      </motion.section>

      <section className="pb-14 pt-4">
        <SectionTitle
          eyebrow="Live spaces"
          title="Every surface should feel like it belongs to the same sheet of glass."
          copy="The panels below reuse the same frost, highlight, and depth treatment so the interface feels native to the effect rather than decorated with it."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {homeSpaces.map((space, index) => {
            const Icon = space.icon;
            return (
              <GlassPanel key={space.title} whileHover={{ y: -8, scale: 1.01 }} transition={{ duration: 0.25, ease: "easeOut" }} className="min-h-[18rem]">
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
                <button className="mt-auto flex items-center justify-between pt-8 text-sm text-white/52 transition hover:text-white" type="button">
                  <span>Open surface</span>
                  <ChevronRight size={16} strokeWidth={2.2} />
                </button>
              </GlassPanel>
            );
          })}
        </div>
      </section>

      <section className="pb-16">
        <SectionTitle
          eyebrow="Community feed"
          title="Posts should feel as soft and luminous as the interface around them."
          copy="Each feed surface uses the same frosted depth, reflective highlight, and low-contrast media treatment so the content blends into the glass language rather than fighting it."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {feedPosts.map((post, index) => (
            <GlassPanel key={post.author} whileHover={{ y: -8, scale: 1.01 }} transition={{ duration: 0.25, ease: "easeOut" }} className={cn(index === 0 ? "lg:col-span-2" : "", "min-h-[26rem]")}>
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
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">
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
            </GlassPanel>
          ))}
        </div>
      </section>

      <footer className="mt-auto pb-2">
        <GlassPanel className="rounded-[28px] px-5 py-5" contentClassName="gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/35">Campus Connect</p>
            <p className="mt-2 text-sm text-white/64">Built to feel like one continuous pane of light, blur, and motion.</p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/42 sm:mt-0">
            <button type="button" className="transition hover:text-white" onClick={() => onNavigate("explore") }>
              Explore
            </button>
            <button type="button" className="transition hover:text-white" onClick={() => onNavigate("events") }>
              Events
            </button>
            <button type="button" className="transition hover:text-white" onClick={() => onNavigate("messages") }>
              Messages
            </button>
            <button type="button" className="transition hover:text-white" onClick={() => onNavigate("profile") }>
              Profile
            </button>
          </div>
        </GlassPanel>
      </footer>
    </div>
  );
}

function ExplorePage() {
  return (
    <section className="space-y-6 py-10">
      <PageIntro meta={pageMeta.explore} />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <GlassPanel className="min-h-[34rem]">
          <div className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/6 px-4 py-3">
            <Search size={18} className="text-white/46" />
            <input
              type="text"
              placeholder="Search clubs, spaces, or people"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/38"
            />
            <button type="button" className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-white/68 transition hover:text-white">
              <Filter size={16} />
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {exploreRows.map((row) => {
              const Icon = row.icon;
              return (
                <button
                  key={row.title}
                  type="button"
                  className="flex w-full items-center gap-4 rounded-[28px] border border-white/10 bg-white/[0.04] px-4 py-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/8"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-cyan-100">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base font-semibold text-white">{row.title}</h3>
                      <span className="text-xs uppercase tracking-[0.28em] text-white/42">{row.detail}</span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-white/60">{row.copy}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </GlassPanel>

        <GlassPanel className="min-h-[34rem] p-4 sm:p-5">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
            alt="Students collaborating in a bright shared space"
            className="absolute inset-0 h-full w-full object-cover opacity-72"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,10,0.08)_0%,rgba(5,6,10,0.15)_44%,rgba(5,6,10,0.76)_100%)]" />
          <div className="relative z-10 flex h-full flex-col justify-end rounded-[32px] border border-white/10 bg-white/5 p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-white/42">Discovery spotlight</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">A calmer way to browse campus life.</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/66">
              Search by interest, room, or people and the entire surface stays consistent while the details shift.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <GlassButton tone="strong">
                Join a room <ArrowRight size={16} strokeWidth={2.2} />
              </GlassButton>
              <GlassButton>
                Save for later <Plus size={16} strokeWidth={2.2} />
              </GlassButton>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

function EventsPage() {
  return (
    <section className="space-y-6 py-10">
      <PageIntro meta={pageMeta.events} />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <GlassPanel className="min-h-[34rem] p-4 sm:p-5">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80"
            alt="Students gathered for an evening event"
            className="absolute inset-0 h-full w-full object-cover opacity-72"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,10,0.1)_0%,rgba(5,6,10,0.18)_46%,rgba(5,6,10,0.76)_100%)]" />
          <div className="relative z-10 flex h-full flex-col justify-between rounded-[32px] border border-white/10 bg-white/5 p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="glass-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/78">
                <CalendarDays size={14} strokeWidth={2.1} />
                Tonight
              </div>
              <div className="glass-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                <MapPin size={14} strokeWidth={2.1} />
                North Lawn
              </div>
            </div>

            <div className="max-w-md rounded-[32px] border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-white/42">Featured event</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Sunset Startup Sprint</h2>
              <p className="mt-3 text-sm leading-6 text-white/66">
                Pair with new people and turn a rough idea into something shareable in ninety minutes.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <GlassButton tone="strong">
                  RSVP now <ArrowRight size={16} strokeWidth={2.2} />
                </GlassButton>
                <GlassButton>
                  View calendar <ChevronRight size={16} strokeWidth={2.2} />
                </GlassButton>
              </div>
            </div>
          </div>
        </GlassPanel>

        <GlassPanel className="min-h-[34rem]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">Agenda</p>
              <h3 className="mt-2 text-xl font-semibold text-white">What is next on the calendar</h3>
            </div>
            <button type="button" className="glass-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              <Plus size={14} strokeWidth={2.1} />
              Create
            </button>
          </div>

          <div className="mt-5 space-y-4">
            {eventSchedule.map((event) => (
              <button
                key={event.title}
                type="button"
                className="flex w-full items-start gap-4 rounded-[28px] border border-white/10 bg-white/[0.04] px-4 py-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/8"
              >
                <div className="flex h-12 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-sm font-semibold text-cyan-100">
                  {event.time}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-base font-semibold text-white">{event.title}</h4>
                    <span className="text-xs uppercase tracking-[0.28em] text-white/40">{event.place}</span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-white/60">{event.copy}</p>
                </div>
              </button>
            ))}
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState(conversations[0].id);
  const currentConversation = conversations.find((conversation) => conversation.id === activeConversation) ?? conversations[0];

  return (
    <section className="space-y-6 py-10">
      <PageIntro meta={pageMeta.messages} />

      <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
        <GlassPanel className="min-h-[40rem]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">Inbox</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Conversations</h3>
            </div>
            <button type="button" className="glass-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              <Plus size={14} strokeWidth={2.1} />
              New
            </button>
          </div>

          <div className="mt-5 space-y-3">
            {conversations.map((conversation) => {
              const active = conversation.id === activeConversation;
              return (
                <button
                  key={conversation.id}
                  type="button"
                  onClick={() => setActiveConversation(conversation.id)}
                  className={cn(
                    "flex w-full items-center gap-4 rounded-[28px] border px-4 py-4 text-left transition duration-200 hover:-translate-y-0.5",
                    active ? "border-cyan-200/30 bg-cyan-300/12" : "border-white/10 bg-white/[0.04] hover:border-white/18 hover:bg-white/8",
                  )}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/10 text-sm font-semibold text-white/88">
                    {conversation.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="truncate text-sm font-semibold text-white">{conversation.name}</h4>
                      <span className="text-xs uppercase tracking-[0.24em] text-white/40">{conversation.status}</span>
                    </div>
                    <p className="mt-1 truncate text-sm text-white/62">{conversation.preview}</p>
                  </div>
                  {conversation.unread > 0 ? (
                    <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-cyan-300/18 px-2 text-[11px] font-semibold text-cyan-100">
                      {conversation.unread}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </GlassPanel>

        <GlassPanel className="min-h-[40rem]">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/14 bg-white/10 text-sm font-semibold text-white/88">
                {currentConversation.name
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{currentConversation.name}</h3>
                <p className="text-sm text-white/46">{currentConversation.group}</p>
              </div>
            </div>
            <span className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs uppercase tracking-[0.24em] text-white/52">
              {currentConversation.status}
            </span>
          </div>

          <div className="mt-5 flex-1 space-y-4 overflow-hidden">
            {currentConversation.messages.map((message, index) => (
              <div key={`${message.sender}-${index}`} className={cn("flex", message.mine ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[85%] rounded-[28px] border px-4 py-3 text-sm leading-6",
                    message.mine
                      ? "border-cyan-200/30 bg-cyan-300/12 text-white"
                      : "border-white/10 bg-white/[0.05] text-white/70",
                  )}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-[28px] border border-white/10 bg-white/[0.04] px-4 py-3">
            <input
              type="text"
              placeholder="Write a reply..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/38"
            />
            <button type="button" className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-white/72 transition hover:text-white">
              <Send size={16} strokeWidth={2.2} />
            </button>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

function PeoplePage() {
  return (
    <section className="space-y-6 py-10">
      <PageIntro meta={pageMeta.people} />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <GlassPanel>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">Suggested people</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Students to meet</h3>
            </div>
            <button type="button" className="glass-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              <Filter size={14} strokeWidth={2.1} />
              Refine
            </button>
          </div>

          <div className="mt-5 space-y-3">
            {peopleList.map((person) => (
              <button
                key={person.name}
                type="button"
                className="flex w-full items-start gap-4 rounded-[28px] border border-white/10 bg-white/[0.04] px-4 py-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/10 text-sm font-semibold text-white/88">
                  {person.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-sm font-semibold text-white">{person.name}</h4>
                    <span className="text-xs uppercase tracking-[0.24em] text-white/40">{person.role}</span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-white/60">{person.copy}</p>
                </div>
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-white/70">
                  <UserPlus size={16} strokeWidth={2.2} />
                </span>
              </button>
            ))}
          </div>
        </GlassPanel>

        <div className="space-y-6">
          <GlassPanel className="min-h-[16rem]">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/14 bg-white/10 text-lg font-semibold text-white/90">
                CC
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">Campus graph</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Grow your circle naturally</h3>
              </div>
            </div>
            <p className="mt-5 max-w-lg text-sm leading-6 text-white/64">
              Follow classmates, organizers, and creators while keeping the same calm glass language throughout the app.
            </p>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <GlassButton tone="strong">
                Invite people <ArrowRight size={16} strokeWidth={2.2} />
              </GlassButton>
              <GlassButton>
                View all <ChevronRight size={16} strokeWidth={2.2} />
              </GlassButton>
            </div>
          </GlassPanel>

          <GlassPanel>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">Communities</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Groups worth joining</h3>
              </div>
              <BadgeCheck size={18} className="text-cyan-100" />
            </div>

            <div className="mt-5 space-y-4 text-sm text-white/66">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-semibold text-white">Design circle</span>
                  <span className="text-xs uppercase tracking-[0.24em] text-white/40">12 members</span>
                </div>
                <p className="mt-2 leading-6">Daily feedback threads, open critique nights, and shared campus references.</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-semibold text-white">Volunteer board</span>
                  <span className="text-xs uppercase tracking-[0.24em] text-white/40">9 members</span>
                </div>
                <p className="mt-2 leading-6">Find people who want to help with events, outreach, and student support.</p>
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}

function ProfilePage() {
  return (
    <section className="space-y-6 py-10">
      <PageIntro meta={pageMeta.profile} />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <GlassPanel className="min-h-[34rem]">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/14 bg-white/10 text-xl font-semibold text-white">
                CC
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-semibold text-white">Campus Connect</h3>
                  <BadgeCheck size={18} className="text-cyan-100" />
                </div>
                <p className="mt-1 text-sm text-white/56">Student account and profile space</p>
              </div>
            </div>
            <button type="button" className="glass-button flex h-11 w-11 items-center justify-center rounded-2xl text-white/72">
              <Settings size={16} strokeWidth={2.2} />
            </button>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-6 text-white/64">
            A calm profile surface for your bio, settings, and the things you have been doing across campus.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">Rooms joined</p>
              <p className="mt-2 text-2xl font-semibold text-white">14</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">Events saved</p>
              <p className="mt-2 text-2xl font-semibold text-white">8</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">People following</p>
              <p className="mt-2 text-2xl font-semibold text-white">126</p>
            </div>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <GlassButton tone="strong">
              Edit profile <ArrowRight size={16} strokeWidth={2.2} />
            </GlassButton>
            <GlassButton>
              Share account <Send size={16} strokeWidth={2.2} />
            </GlassButton>
          </div>
        </GlassPanel>

        <div className="space-y-6">
          <GlassPanel>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">Recent activity</p>
                <h3 className="mt-2 text-xl font-semibold text-white">What you have done lately</h3>
              </div>
              <Clock3 size={18} className="text-white/60" />
            </div>

            <div className="mt-5 space-y-3">
              {profileActivity.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-cyan-100">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.24em] text-white/40">{item.time}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassPanel>

          <GlassPanel>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">Account controls</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Keep the profile tidy</h3>
              </div>
              <UserPlus size={18} className="text-white/60" />
            </div>

            <div className="mt-5 space-y-3 text-sm text-white/66">
              <div className="flex items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4">
                <span>Notifications</span>
                <span className="text-white/46">On</span>
              </div>
              <div className="flex items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4">
                <span>Privacy</span>
                <span className="text-white/46">Friends only</span>
              </div>
              <div className="flex items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4">
                <span>Theme</span>
                <span className="text-white/46">Liquid glass</span>
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(() => {
    if (typeof window === "undefined") {
      return "home";
    }

    return getPageFromHash(window.location.hash);
  });

  useEffect(() => {
    const syncPage = () => setActivePage(getPageFromHash(window.location.hash));

    if (!window.location.hash) {
      window.history.replaceState(null, "", "#home");
    }

    syncPage();
    window.addEventListener("hashchange", syncPage);

    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  useEffect(() => {
    document.title = activePage === "home" ? "Campus Connect" : `${pageMeta[activePage].title} | Campus Connect`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const navigate = (page: PageId) => {
    setActivePage(page);
    if (window.location.hash !== `#${page}`) {
      window.location.hash = page;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <LiquidBackdrop />

      <DesktopRail activePage={activePage} onNavigate={navigate} />
      <MobileDock activePage={activePage} onNavigate={navigate} />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-28 pt-6 sm:px-6">
        <header className="flex items-center justify-between gap-4">
          <motion.button
            type="button"
            onClick={() => navigate("home")}
            className="glass-panel flex items-center gap-3 rounded-full px-4 py-3 text-left transition hover:-translate-y-0.5"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/10 text-[0.65rem] font-semibold tracking-[0.35em] text-white/90">
              CC
            </div>
            <div className="hidden sm:block">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/42">{pageMeta[activePage].eyebrow}</p>
              <p className="text-sm text-white/72">Campus Connect</p>
            </div>
          </motion.button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("explore")}
              aria-label="Search"
              className="glass-button flex h-12 w-12 items-center justify-center rounded-full text-white/78"
            >
              <Search size={18} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => navigate("messages")}
              aria-label="Notifications"
              className="glass-button relative flex h-12 w-12 items-center justify-center rounded-full text-white/78"
            >
              <Bell size={18} strokeWidth={2} />
              <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
            </button>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="flex-1"
          >
            {activePage === "home" ? <HomePage onNavigate={navigate} /> : null}
            {activePage === "explore" ? <ExplorePage /> : null}
            {activePage === "events" ? <EventsPage /> : null}
            {activePage === "messages" ? <MessagesPage /> : null}
            {activePage === "people" ? <PeoplePage /> : null}
            {activePage === "profile" ? <ProfilePage /> : null}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
