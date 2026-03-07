"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Facebook,
  Globe,
  GraduationCap,
  HeartPulse,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PlayCircle,
  QrCode,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UtensilsCrossed,
  Youtube,
  type LucideIcon,
} from "lucide-react";

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type Brand = {
  id: string;
  name: string;
  short: string;
  oneLiner: string;
  focus: string;
  website: string;
  logo: string;
  phone: string[];
  email?: string;
  emailPlaceholder?: string;
  address: string;
  mapQuery: string;
  qrName: string;
  accent: string;
  softAccent: string;
  icon: LucideIcon;
  bullets: string[];
  socials: SocialLink[];
};

const brands: Brand[] = [
  {
    id: "malishaedu",
    name: "MalishaEdu",
    short: "Education Pathways",
    oneLiner: "Admissions, scholarships, and student guidance for studying in China.",
    focus:
      "We guide students from application to arrival with premium support across admissions, scholarship planning, visa direction, and on-ground orientation.",
    website: "https://malishaedu.com",
    logo: "/logos/malishaedu.png",
    phone: ["+86 18613114366"],
    email: "info@malishaedu.com",
    address:
      "Room 13D, 13th Floor, Rongjian Building, No. 29 Liuma / Construction Six Road, Yuexiu District, Guangzhou, China",
    mapQuery:
      "Room 13D, 13th Floor, Rongjian Building, Construction Six Road, Yuexiu District, Guangzhou, China",
    qrName: "malishaedu_qr.jpg",
    accent: "from-cyan-500 via-sky-500 to-blue-700",
    softAccent: "from-cyan-50 to-blue-50",
    icon: GraduationCap,
    bullets: ["Scholarship guidance", "Admissions support", "Student onboarding in China"],
    socials: [
      { label: "Website", href: "https://malishaedu.com", icon: Globe },
      { label: "Facebook", href: "https://www.facebook.com/gz.malishaedu", icon: Facebook },
      { label: "YouTube", href: "https://www.youtube.com/@MalishaEdu", icon: Youtube },
      { label: "Instagram", href: "https://www.instagram.com/malishaedu", icon: Instagram },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/malishaedu/", icon: Linkedin },
    ],
  },
  {
    id: "brhc",
    name: "BRHC",
    short: "Healthcare Access",
    oneLiner: "Cross-border healthcare coordination and treatment support in China.",
    focus:
      "BRHC connects patients to trusted hospitals with language support, appointment coordination, case guidance, and a more organized treatment journey.",
    website: "https://www.chinahealthcare.center",
    logo: "/logos/brhc_2.png",
    phone: ["+86 15989054366", "+88 01332-511838"],
    emailPlaceholder: "Official email to be added",
    address: "4th Floor (East Side), Praasad Trade Center, 6 Kemal Ataturk Avenue, Dhaka",
    mapQuery: "Praasad Trade Center, 6 Kemal Ataturk Avenue, Dhaka, Bangladesh",
    qrName: "malishaedu_qr.jpg",
    accent: "from-emerald-500 via-teal-500 to-cyan-700",
    softAccent: "from-emerald-50 to-cyan-50",
    icon: Stethoscope,
    bullets: ["Hospital matching", "Translation support", "Patient travel coordination"],
    socials: [
      { label: "Website", href: "https://www.chinahealthcare.center", icon: Globe },
      { label: "Facebook", href: "https://www.facebook.com/brcchealthcare", icon: Facebook },
      {
        label: "YouTube",
        href: "https://www.youtube.com/channel/UCb8cEBGCCuaBDRYoQBANG2g",
        icon: Youtube,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/brcchealthcarecenter/",
        icon: Linkedin,
      },
    ],
  },
  {
    id: "al-barakah",
    name: "AL-Barakah Restaurant",
    short: "Hospitality & Community",
    oneLiner: "Halal comfort dining and warm hospitality in Guangzhou.",
    focus:
      "A welcoming halal dining destination built for students, families, visitors, and business travelers seeking trusted taste and community in Guangzhou.",
    website: "https://www.facebook.com/albarakahrestaurantguangzhou/",
    logo: "/logos/AL-Barakah.png",
    phone: ["+86 19128630063", "+88 01929-732131"],
    emailPlaceholder: "Facebook / WhatsApp contact",
    address: "Near Metro Line 2, Sanyuanli Station, Exit C2, Guangzhou, China",
    mapQuery: "Sanyuanli Station Exit C2, Guangzhou, China",
    qrName: "al-barakah.png",
    accent: "from-amber-400 via-orange-500 to-rose-500",
    softAccent: "from-amber-50 to-orange-50",
    icon: UtensilsCrossed,
    bullets: ["Halal dining", "Community comfort", "Accessible Guangzhou location"],
    socials: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/albarakahrestaurantguangzhou/",
        icon: Facebook,
      },
    ],
  },
  {
    id: "easylink",
    name: "EasyLink",
    short: "Business Expansion",
    oneLiner: "Company setup, visa, tax, bookkeeping, and business consulting.",
    focus:
      "EasyLink enables market entry and operations in China with practical support across company formation, compliance, visa processing, accounting, and growth strategy.",
    website: "https://www.gzeasylink.com/",
    logo: "/logos/easylink.png",
    phone: ["+86 18989410063"],
    email: "info@easylinkchina.com",
    address:
      "Room 13D, 13th Floor, Rongjian Building, No. 29, Construction Six Road, Yuexiu District, Guangzhou, China",
    mapQuery:
      "Room 13D, 13th Floor, Rongjian Building, Construction Six Road, Yuexiu District, Guangzhou, China",
    qrName: "malishaedu_qr.jpg",
    accent: "from-blue-600 via-sky-500 to-cyan-500",
    softAccent: "from-blue-50 to-cyan-50",
    icon: Building2,
    bullets: ["Company formation", "Visa & tax support", "Business operations in China"],
    socials: [
      { label: "Website", href: "https://www.gzeasylink.com/", icon: Globe },
      { label: "Facebook", href: "https://www.facebook.com/easylinkgz/", icon: Facebook },
    ],
  },
];

const leaderVideos = [
  {
    title: "Message from the Chairman",
    name: "Sheikh Korban Ali",
    videoId: "cHZfV9ElVU8",
    note:
      "A leadership message focused on trust, opportunity, and connecting people to education, healthcare, hospitality, and business pathways in China.",
  },
  {
    title: "Managing Director's Vision",
    name: "Dr. Maruf Mollah",
    videoId: "mwJK-x5Ov-E",
    note:
      "A patient-centered message highlighting guidance, care coordination, and confidence for families exploring treatment support.",
  },
];

const stickySocials: Array<{ label: string; href: string; icon: LucideIcon }> = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/malishaedu/", icon: Linkedin },
  { label: "WhatsApp", href: "https://wa.me/8618613114366", icon: MessageCircle },
  { label: "YouTube", href: "https://www.youtube.com/@MalishaEdu", icon: Youtube },
  { label: "Facebook", href: "https://www.facebook.com/gz.malishaedu", icon: Facebook },
];

function LogoImage({ src, alt, size = "md" }: { src: string; alt: string; size?: "sm" | "md" | "lg" }) {
  const [failed, setFailed] = useState(false);
  const sizes =
    size === "sm"
      ? { width: 120, height: 56, cls: "h-10 w-20" }
      : size === "lg"
        ? { width: 200, height: 88, cls: "h-16 w-32" }
        : { width: 160, height: 72, cls: "h-12 w-24" };

  if (failed) {
    return (
      <div
        className={`flex ${sizes.cls} items-center justify-center rounded-2xl border border-white/40 bg-white/90 text-sm font-semibold text-slate-800`}
      >
        {alt.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={sizes.width}
      height={sizes.height}
      className={`${sizes.cls} rounded-2xl object-contain`}
      onError={() => setFailed(true)}
    />
  );
}

function HeroImage() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="relative h-full min-h-[560px] w-full overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,.35),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,.22),transparent_28%),linear-gradient(135deg,#06152e_0%,#0f2f63_45%,#0b4f88_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,0))]" />
        <div className="absolute -left-10 top-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-sky-300/10 blur-3xl" />
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[560px] w-full overflow-hidden rounded-[2rem]">
      <Image src="/hero/hero.png" alt="Malisha Group hero" fill className="object-cover" onError={() => setFailed(true)} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,15,37,.78)_0%,rgba(5,33,73,.45)_42%,rgba(7,35,82,.25)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,.18),transparent_24%)]" />
    </div>
  );
}

function SectionHeading({ eyebrow, title, note }: { eyebrow: string; title: string; note: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-cyan-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-700">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </p>
      <h2 className="mt-5 font-[var(--font-display)] text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{note}</p>
    </div>
  );
}

function socialStyles(label: string) {
  if (label === "Facebook") return "text-blue-700 bg-blue-50 border-blue-200 hover:bg-blue-100";
  if (label === "YouTube") return "text-red-600 bg-red-50 border-red-200 hover:bg-red-100";
  if (label === "Instagram") return "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200 hover:bg-fuchsia-100";
  if (label === "LinkedIn") return "text-sky-700 bg-sky-50 border-sky-200 hover:bg-sky-100";
  if (label === "WhatsApp") return "text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100";
  return "text-slate-700 bg-white border-slate-200 hover:bg-slate-50";
}

function SocialPill({ social }: { social: SocialLink }) {
  const Icon = social.icon;
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition duration-200 hover:-translate-y-0.5 ${socialStyles(
        social.label
      )}`}
    >
      <Icon className="h-4 w-4" />
      {social.label}
    </a>
  );
}

function QRDisplay({ file }: { file: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-28 w-28 items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-3 text-center shadow-sm">
        <div>
          <QrCode className="mx-auto mb-1 h-5 w-5 text-slate-500" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">QR</p>
          <p className="mt-1 text-[10px] text-slate-400">/public/qr/{file}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={`/qr/${file}`}
      alt={`${file} qr`}
      width={112}
      height={112}
      className="h-28 w-28 rounded-[1.5rem] border border-white/70 bg-white object-cover shadow-sm"
      onError={() => setFailed(true)}
    />
  );
}

function HeroOverlayCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {brands.map((brand) => (
        <a
          key={brand.id}
          href={brand.website}
          className="group rounded-[1.6rem] border border-white/12 bg-white/10 p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/14"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="rounded-2xl bg-white/95 p-2.5 shadow-lg shadow-slate-950/20">
              <LogoImage src={brand.logo} alt={brand.name} size="sm" />
            </div>
            <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${brand.accent} shadow-lg shadow-cyan-950/20`}>
              <brand.icon className="h-5 w-5 text-white" />
            </div>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-white">{brand.name}</h3>
          <p className="mt-1 text-sm leading-6 text-white/78">{brand.short}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 group-hover:text-white">
            Explore <ArrowRight className="h-4 w-4" />
          </div>
        </a>
      ))}
    </div>
  );
}

function TopBar() {
  return (
    <div className="relative z-30 border-b border-white/10 bg-[#07152e]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 text-sm text-slate-200 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a href="tel:+8618989410063" className="inline-flex items-center gap-2 hover:text-white">
            <Phone className="h-4 w-4 text-cyan-300" />
            +86 18989410063
          </a>
          <a href="mailto:info@easylinkchina.com" className="inline-flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4 text-cyan-300" />
            info@easylinkchina.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          {stickySocials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-200 transition hover:bg-white/12 hover:text-white"
                aria-label={item.label}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function FloatingNav() {
  return (
    <div className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-5 sm:px-6 lg:px-8 lg:pt-7">
        <div className="rounded-full border border-white/12 bg-white/10 px-4 py-2 backdrop-blur-xl shadow-2xl shadow-slate-950/25">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100">Malisha Group</p>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <a href="#companies" className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/16">
            Our Companies
          </a>
          <a href="#leadership" className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/16">
            Leadership
          </a>
          <a href="#contact" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-50">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#061327] pb-12">
      <FloatingNav />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(96,165,250,.16),transparent_26%),linear-gradient(180deg,#061327_0%,#081a38_52%,#0b1f45_100%)]" />
      <div className="relative mx-auto grid min-h-[760px] max-w-[1600px] items-stretch lg:grid-cols-[1.12fr_.88fr]">
        <div className="order-2 flex items-center px-4 pb-10 pt-8 sm:px-6 lg:order-1 lg:px-10 lg:pb-16 lg:pt-28 xl:px-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-100 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" />
              Bridge to China
            </div>
            <h3 className="mt-6 font-[var(--font-display)] text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-3xl xl:text-[2.5rem]">
              One premium group for
              <span className="block bg-gradient-to-r from-cyan-200 via-sky-200 to-blue-300 bg-clip-text text-transparent">
                education, healthcare, hospitality and business.
              </span>
            </h3>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200/88 sm:text-lg">
              Malisha Group brings together trusted brands serving students, patients, entrepreneurs, and visitors with a refined cross-border experience centered on China.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#companies"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-2xl shadow-slate-950/25 transition hover:-translate-y-0.5"
              >
                Explore the brands
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/16"
              >
                Contact the Group
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["4", "Associated brands"],
                ["China ↔ Global", "Cross-border presence"],
                ["Trusted", "Premium support focus"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[1.5rem] border border-white/12 bg-white/8 p-4 backdrop-blur-xl">
                  <p className="text-lg font-semibold text-white">{value}</p>
                  <p className="mt-1 text-sm text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 relative lg:order-2">
          <HeroImage />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,19,39,0),rgba(6,19,39,.32)_46%,rgba(6,19,39,.55)_100%)]" />
          <div className="absolute bottom-5 left-4 right-4 sm:bottom-8 sm:left-6 sm:right-6 lg:bottom-10 lg:left-8 lg:right-8">
            <div className="mb-4 inline-flex rounded-full bg-white/92 px-4 py-2 shadow-lg shadow-slate-950/20 backdrop-blur-xl">
              <p className="font-[var(--font-display)] text-lg text-slate-950 sm:text-2xl">Malisha Group is your bridge to China</p>
            </div>
            <HeroOverlayCards />
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandVisual({ brand }: { brand: Brand }) {
  const Icon = brand.icon;
  return (
    <div className={`relative min-h-[520px] overflow-hidden rounded-[2rem] bg-gradient-to-br ${brand.accent} p-6 text-white shadow-[0_35px_90px_-35px_rgba(2,6,23,.45)] sm:p-8`}>
      <div className="absolute -right-16 -top-14 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-16 left-0 h-56 w-56 rounded-full bg-sky-200/10 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,0))]" />

      <div className="relative flex h-full flex-col justify-between">
        <div>
          <div className="inline-flex rounded-[1.5rem] bg-white/92 p-3 shadow-xl shadow-slate-950/20">
            <LogoImage src={brand.logo} alt={brand.name} size="lg" />
          </div>
          <div className="mt-8 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">Associated Brand</p>
              <h3 className="mt-3 font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">{brand.name}</h3>
              <p className="mt-3 max-w-md text-base leading-7 text-white/85">{brand.oneLiner}</p>
            </div>
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-white/14 backdrop-blur-xl">
              <Icon className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3">
          {brand.bullets.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/14 bg-white/10 px-4 py-3 backdrop-blur-xl">
              <ShieldCheck className="h-5 w-5 text-cyan-100" />
              <span className="text-sm font-medium text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MapCard({ brand }: { brand: Brand }) {
  const query = encodeURIComponent(brand.mapQuery);
  const src = `https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=${query}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700">Location</p>
          <p className="mt-1 text-sm font-medium text-slate-700">Office / service area map</p>
        </div>
        <MapPin className="h-5 w-5 text-sky-600" />
      </div>
      <iframe
        title={`${brand.name} map`}
        src={src}
        className="h-[250px] w-full bg-slate-100"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${query}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 border-t border-slate-200 px-4 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
      >
        Open in Google Maps
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function CompanySection({ brand, reverse }: { brand: Brand; reverse: boolean }) {
  return (
    <article id={brand.id} className="relative overflow-hidden rounded-[2.2rem] border border-slate-200/80 bg-white/88 p-4 shadow-[0_30px_80px_-40px_rgba(15,23,42,.28)] backdrop-blur-xl sm:p-6 lg:p-7">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />
      <div className="grid items-stretch gap-6 lg:grid-cols-[.95fr_1.05fr]">
        <div className={reverse ? "lg:order-2" : ""}>
          <BrandVisual brand={brand} />
        </div>

        <div className={`flex flex-col ${reverse ? "lg:order-1" : ""}`}>
          <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,250,252,.95))] p-6 sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sky-700">{brand.short}</p>
            <h3 className="mt-3 font-[var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {brand.name}
            </h3>
            <p className="mt-3 text-lg font-medium leading-8 text-slate-700">{brand.oneLiner}</p>


            <div className="mt-6 grid gap-3">
              {brand.phone.map((item) => (
                <InfoRow key={item} icon={Phone} label={item} />
              ))}
              <InfoRow icon={MapPin} label={brand.address} />
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {brand.socials.map((social) => (
                <SocialPill key={`${brand.id}-${social.label}`} social={social} />
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={brand.website}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${brand.accent} px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5`}
              >
                Visit Website
                <ArrowRight className="h-4 w-4" />
              </a>
              <QRDisplay file={brand.qrName} />
            </div>
            
          </div>

        </div>
        
      </div>
    </article>
  );
}

function InfoRow({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-slate-700">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
      <span className="text-sm leading-7 sm:text-[15px]">{label}</span>
      
    </div>
  );
}

function LeadershipSection() {
  return (
    <section id="leadership" className="py-18 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Leadership"
          title="Voices behind the vision"
          note="Add authority and trust with embedded leadership messages presented in a premium editorial layout."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {leaderVideos.map((video, idx) => (
            <article
              key={video.videoId}
              className={`overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,.28)] ${
                idx === 0 ? "" : "lg:translate-y-8"
              }`}
            >
              <div className="bg-[linear-gradient(135deg,#07152e_0%,#0a2a5c_58%,#0f4d91_100%)] p-6 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-200">{video.title}</p>
                <h3 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">{video.name}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200">{video.note}</p>
              </div>
              <div className="p-4 sm:p-5">
                <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 shadow-inner">
                  <iframe
                    className="aspect-video w-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.name}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                >
                  <PlayCircle className="h-4 w-4 text-sky-600" />
                  Watch on YouTube
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactGrid() {
  return (
    <section id="contact" className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Connect with the right team"
          note="Each company keeps its own service focus while benefiting from one stronger premium group identity."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {brands.map((brand) => (
            <article key={`${brand.id}-contact`} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_-42px_rgba(15,23,42,.25)]">
              <div className={`h-2 w-full bg-gradient-to-r ${brand.accent}`} />
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-slate-50 p-2.5 shadow-sm">
                    <LogoImage src={brand.logo} alt={brand.name} size="md" />
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">{brand.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{brand.short}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{brand.oneLiner}</p>
                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <p>{brand.phone[0]}</p>
                  <p>{brand.email ?? brand.emailPlaceholder ?? "Email to be added"}</p>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800"
                  >
                    Visit <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <QRDisplay file={brand.qrName} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07152e] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.15),transparent_24%),radial-gradient(circle_at_top_right,rgba(96,165,250,.14),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-950">MG</div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Malisha Group</p>
                <p className="mt-1 text-sm text-slate-300">Education • Healthcare • Hospitality • Business</p>
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              A premium group experience connecting people to trusted pathways in China through service, guidance, and long-term relationships.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {brands.map((brand) => (
              <div key={`${brand.id}-footer`} className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-xl">
                <div className="rounded-xl bg-white p-2">
                  <LogoImage src={brand.logo} alt={brand.name} size="sm" />
                </div>
                <p className="mt-3 text-sm font-semibold text-white">{brand.name}</p>
                <p className="mt-1 text-xs text-slate-300">{brand.short}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Malisha Group. All rights reserved.</p>
          <p>Designed for a premium Vercel-hosted landing experience.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const companyIds = useMemo(() => brands.map((brand) => brand.id), []);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f6fbff_0%,#ffffff_16%,#f8fbff_58%,#f4f8fc_100%)] text-slate-900">
      <TopBar />
      <HeroSection />

      <section className="px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Group Overview"
            title="Four brands. One modern ecosystem."
            note="Built with a stronger visual language inspired by EasyLink’s blue-led color direction, improved typography, and a more premium landing-page structure."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {brands.map((brand) => (
              <a
                key={`overview-${brand.id}`}
                href={`#${brand.id}`}
                className={`group overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br ${brand.softAccent} p-6 shadow-[0_20px_70px_-40px_rgba(15,23,42,.25)] transition duration-300 hover:-translate-y-1`}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-[1.4rem] bg-gradient-to-br ${brand.accent} shadow-lg`}>
                  <brand.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{brand.name}</h3>
                <p className="mt-1 text-sm font-medium text-sky-700">{brand.short}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{brand.focus}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 group-hover:text-sky-800">
                  View section <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="companies" className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Companies"
            title="Brand stories presented with depth"
            note="This section removes empty image areas and replaces them with premium branded visual panels, visible map embeds, stronger contrast, and more polished typographic rhythm."
          />
          <div className="mt-10 space-y-6">
            {brands.filter((brand) => companyIds.includes(brand.id)).map((brand, idx) => (
              <CompanySection key={brand.id} brand={brand} reverse={idx % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <LeadershipSection />
      <ContactGrid />
      <Footer />
    </main>
  );
}
