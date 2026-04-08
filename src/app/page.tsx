"use client";

import Image from "next/image";
import { useState, type CSSProperties, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Facebook,
  Globe,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  QrCode,
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
    short: "Education consulting and student support in China",
    oneLiner: "Admissions, scholarships, and student guidance for higher study in China.",
    focus:
      "We guide students from application to arrival with premium support across admissions, scholarship planning, visa direction, and on-ground orientation.",
    website: "https://malishaedu.com",
    logo: "/logos/malishaedu.png",
    phone: ["+86 18613114366"],
    email: "info@malishaedu.com",
    address:
      "Room 13D, 13th Floor, Rongjian Building, No. 29 Liuma / Construction Six Road, Yuexiu District, Guangzhou, China",
    qrName: "malishaedu_qr.jpg",
    accent: "from-red-600 via-rose-600 to-red-700",
    softAccent: "from-red-50 via-white to-rose-50",
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
    short: "Medical tourism and treatment support in China",
    oneLiner: "Cross-border healthcare coordination and treatment support in China.",
    focus:
      "BRHC connects patients to trusted hospitals with language support, appointment coordination, case guidance, and a more organized treatment journey.",
    website: "https://www.chinahealthcare.center",
    logo: "/logos/brhc_2.png",
    phone: ["+86 15989054366", "+88 01332-511838"],
    emailPlaceholder: "info@malishaedu.com",
    address: "4th Floor (East Side), Praasad Trade Center, 6 Kemal Ataturk Avenue, Dhaka",
    qrName: "malishaedu_qr.jpg",
    accent: "from-rose-600 via-red-600 to-red-500",
    softAccent: "from-rose-50 via-white to-red-50",
    icon: Stethoscope,
    bullets: ["Hospital matching", "Translation support", "Patient travel coordination"],
    socials: [
      { label: "Website", href: "https://www.chinahealthcare.center", icon: Globe },
      { label: "Facebook", href: "https://www.facebook.com/brcchealthcare", icon: Facebook },
      { label: "YouTube", href: "https://www.youtube.com/channel/UCb8cEBGCCuaBDRYoQBANG2g", icon: Youtube },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/brcchealthcarecenter/", icon: Linkedin },
    ],
  },
  {
    id: "al-barakah",
    name: "AL-Barakah Restaurant",
    short: "Halal dining in Guangzhou",
    oneLiner: "Halal comfort dining and warm hospitality in Guangzhou.",
    focus:
      "A welcoming halal dining destination built for students, families, visitors, and business travelers seeking trusted taste and community in Guangzhou.",
    website: "https://www.facebook.com/albarakahrestaurantguangzhou/",
    logo: "/logos/AL-Barakah.png",
    phone: ["+86 19128630063", "+88 01929-732131"],
    emailPlaceholder: "Facebook / WhatsApp contact",
    address: "Near Metro Line 2, Sanyuanli Station, Exit C2, Guangzhou, China",
    qrName: "al-barakah.png",
    accent: "from-red-500 via-rose-600 to-orange-500",
    softAccent: "from-red-50 via-white to-orange-50",
    icon: UtensilsCrossed,
    bullets: ["Halal dining", "Community comfort", "Accessible Guangzhou location"],
    socials: [{ label: "Facebook", href: "https://www.facebook.com/albarakahrestaurantguangzhou/", icon: Facebook }],
  },
  {
    id: "easylink",
    name: "EasyLink",
    short: "Business setup and visa support in China",
    oneLiner: "Company setup, visa, tax, bookkeeping, and business consulting.",
    focus:
      "EasyLink enables market entry and operations in China with practical support across company formation, compliance, visa processing, accounting, and growth strategy.",
    website: "https://www.gzeasylink.com/",
    logo: "/logos/easylink.png",
    phone: ["+86 13265980063"],
    email: "info@malishagroup.com",
    address:
      "Room 13D, 13th Floor, Rongjian Building, No. 29, Construction Six Road, Yuexiu District, Guangzhou, China",
    qrName: "malishaedu_qr.jpg",
    accent: "from-red-700 via-red-600 to-rose-600",
    softAccent: "from-red-50 via-white to-rose-50",
    icon: Building2,
    bullets: ["Company formation", "Visa and tax support", "Business operations in China"],
    socials: [
      { label: "Website", href: "https://www.gzeasylink.com/", icon: Globe },
      { label: "Facebook", href: "https://www.facebook.com/easylinkgz/", icon: Facebook },
    ],
  },
  {
    id: "chimpex",
    name: "Chimpex International",
    short: "Trade solutions in China",
    oneLiner: "Trade solutions for sourcing and global business support.",
    focus:
      "Chimpex International supports import-export workflows with a Hong Kong base and a clean trade-focused service experience.",
    website: "https://ychimpex.vercel.app",
    logo: "/logos/chimpex.png",
    phone: ["Hong Kong company"],
    emailPlaceholder: "www.chinachimpex.com",
    address: "Hong Kong",
    qrName: "malishaedu_qr.jpg",
    accent: "from-red-700 via-rose-600 to-red-500",
    softAccent: "from-red-50 via-white to-rose-50",
    icon: Building2,
    bullets: ["Import export", "Hong Kong operations", "Global trade support"],
    socials: [{ label: "Website", href: "https://ychimpex.vercel.app", icon: Globe }],
  },
];

const stickySocials: Array<{ label: string; href: string; icon: LucideIcon }> = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/malishaedu/", icon: Linkedin },
  { label: "WhatsApp", href: "https://wa.me/8618613114366", icon: MessageCircle },
  { label: "YouTube", href: "https://www.youtube.com/@MalishaEdu", icon: Youtube },
  { label: "Facebook", href: "https://www.facebook.com/gz.malishaedu", icon: Facebook },
];

const chairmanLinks = [
  {
    label: "BNI Member",
    href: "https://bnichina.com/zh-CN/memberdetails?encryptedMemberId=iJfmfBJK7Q3bQjoBMXTuJQ%3D%3D&cmsv3=true&name=Korban+Ali%EF%BC%88%E8%B0%A2%E9%98%BF%E9%87%8C%EF%BC%89",
    icon: "/logos/bni.png",
  },
  { label: "Facebook", href: "https://www.facebook.com/korbanali/", icon: Facebook },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/engr-sheikh-korban-ali-%EF%BC%88%E8%B0%A2%E9%98%BF%E9%87%8C%EF%BC%89-8b70952a/",
    icon: Linkedin,
  },
];

const mdLinks = [
  { label: "Facebook", href: "https://www.facebook.com/mmaruf1993/", icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prof-dr-maruf-mollah-b98ab0330/", icon: Linkedin },
];

const galleryImages = Array.from({ length: 8 }, (_, index) => `/${index + 1}.jpg`);

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
      <div className={`flex ${sizes.cls} items-center justify-center rounded-2xl border border-red-200 bg-white text-sm font-semibold text-slate-800`}>
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

function SectionHeading({ eyebrow, title, note }: { eyebrow: string; title: string; note: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-red-700">
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
  if (label === "Facebook") return "text-red-700 bg-red-50 border-red-200 hover:bg-red-100";
  if (label === "YouTube") return "text-rose-700 bg-rose-50 border-rose-200 hover:bg-rose-100";
  if (label === "Instagram") return "text-red-600 bg-red-50 border-red-200 hover:bg-red-100";
  if (label === "LinkedIn") return "text-red-800 bg-red-50 border-red-200 hover:bg-red-100";
  if (label === "WhatsApp") return "text-red-700 bg-red-50 border-red-200 hover:bg-red-100";
  return "text-slate-700 bg-white border-red-100 hover:bg-red-50";
}

function SocialPill({ social }: { social: SocialLink }) {
  const Icon = social.icon;
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition duration-200 hover:-translate-y-0.5 ${socialStyles(
        social.label,
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
      <div className="flex h-28 w-28 items-center justify-center rounded-[1.5rem] border border-dashed border-red-300 bg-white p-3 text-center shadow-sm">
        <div>
          <QrCode className="mx-auto mb-1 h-5 w-5 text-red-500" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-red-500">QR</p>
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

function LinkBadge({
  href,
  label,
  icon,
  compact = false,
}: {
  href: string;
  label: string;
  icon: string | LucideIcon;
  compact?: boolean;
}) {
  const IconComponent = typeof icon === "string" ? null : icon;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-3.5 py-2 text-xs font-semibold text-red-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-red-50 ${
        compact ? "px-3 py-1.5" : ""
      }`}
    >
      {typeof icon === "string" ? (
        <Image src={icon} alt={label} width={18} height={18} className="h-4 w-4 rounded object-contain" />
      ) : (
        IconComponent && <IconComponent className="h-4 w-4" />
      )}
      {label}
    </a>
  );
}

function SectionCardGrid({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="grid gap-4 lg:grid-cols-6">{children}</div>;
}

function BalancedBrandGrid({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";

  return (
    <SectionCardGrid>
      {brands.map((brand, index) => (
        <a
          key={`${variant}-${brand.id}`}
          href={brand.website}
          target="_blank"
          rel="noreferrer"
          className={`group overflow-hidden rounded-[1.7rem] border p-4 shadow-[0_20px_50px_-30px_rgba(0,0,0,.18)] transition duration-300 hover:-translate-y-1 ${
            index < 2 ? "lg:col-span-3" : "lg:col-span-2"
          } ${dark ? "border-white/12 bg-white/10 text-white" : "border-red-100 bg-white text-slate-900"}`}
          style={{ minHeight: 220 } as CSSProperties}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-3">
              <div className={`rounded-2xl ${dark ? "bg-white/92" : "bg-white"} p-2.5 shadow-sm`}>
                <LogoImage src={brand.logo} alt={brand.name} size="md" />
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${brand.accent} shadow-lg`}>
                <brand.icon className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="mt-4 flex-1">
              <h4 className={`font-semibold leading-tight ${dark ? "text-[1.2rem] text-white" : "text-[1.45rem] text-slate-950"}`}>
                {brand.name}
              </h4>
              <p className={`mt-2 text-sm font-semibold ${dark ? "text-rose-100" : "text-red-700"}`}>
                {brand.short}
              </p>
     
            </div>
            <div className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold ${dark ? "text-white" : "text-red-700"}`}>
              Open website <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </a>
      ))}
    </SectionCardGrid>
  );
}

function TopBar() {
  return (
    <div className="relative z-30 border-b border-white/15 bg-[#d92b4a]/95 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 text-sm text-red-50 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="tel:+8613265980063"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-semibold shadow-sm transition hover:bg-white/20"
          >
            <Phone className="h-4 w-4 text-white" />
            +86 13265980063
          </a>
          <a
            href="mailto:info@malishagroup.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-semibold shadow-sm transition hover:bg-white/20"
          >
            <Mail className="h-4 w-4 text-white" />
            info@malishagroup.com
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
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
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
        <div className="rounded-full border border-white/20 bg-white px-4 py-2 shadow-2xl shadow-red-950/20 backdrop-blur-xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-700">Malisha Group</p>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#companies"
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/16"
          >
            Companies
          </a>
          <a
            href="#managing-director"
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/16"
          >
            Managing Director
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-red-800 transition hover:bg-red-50"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#c91f3f] text-white">
      <FloatingNav />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(255,255,255,.18),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,.1),transparent_25%),linear-gradient(180deg,#f43f5e_0%,#c91f3f_44%,#9f162f_100%)]" />
      <div className="absolute inset-0 opacity-18 [background-image:linear-gradient(rgba(255,255,255,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.13)_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative mx-auto grid max-w-7xl gap-6 px-4 pb-14 pt-24 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:pb-20 lg:pt-32">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/24 bg-black/15 p-3 shadow-[0_40px_120px_-45px_rgba(0,0,0,.5)] backdrop-blur-xl">
          <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] sm:min-h-[640px]">
            <Image src="/team/chairman.jpg" alt="Chairman of Malisha Group" fill priority className="object-cover object-top" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(159,22,47,.06)_12%,rgba(159,22,47,.2)_48%,rgba(60,9,17,.76)_100%)]" />

            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-red-700 shadow-lg">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              Chairman portrait
            </div>

            <div className="absolute right-5 top-5 flex flex-col gap-2">
              {chairmanLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/95 px-3 py-2 text-[11px] font-semibold text-red-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-red-50"
                >
                  {link.icon === "/logos/bni.png" ? (
                    <Image src={link.icon} alt={link.label} width={18} height={18} className="h-4 w-4 rounded object-contain" />
                  ) : (
                    <span className="inline-flex h-4 w-4 items-center justify-center">
                      {link.label === "Facebook" ? <Facebook className="h-4 w-4" /> : <Linkedin className="h-4 w-4" />}
                    </span>
                  )}
                  {link.label}
                </a>
              ))}
            </div>

            <div className="absolute left-5 right-5 bottom-5">
              <div className="rounded-[1.5rem] border border-white/15 bg-white/12 p-4 backdrop-blur-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-100">Malisha Group</p>
                <p className="mt-2 max-w-xl font-[var(--font-display)] text-2xl leading-tight text-white sm:text-3xl">
                  Member of BNI China
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="reveal-up inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-red-700 shadow-lg">
            <Sparkles className="h-3.5 w-3.5" />
            Malisha Group
          </div>

          <div className="space-y-3">
            <p className="reveal-up text-sm font-semibold uppercase tracking-[0.3em] text-rose-100">
              Your bridge to China
            </p>
          </div>

          <BalancedBrandGrid variant="dark" />
        </div>
      </div>
    </section>
  );
}

function ManagingDirectorSection() {
  return (
    <section id="managing-director" className="section-space relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,.08),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,.08),transparent_20%)]" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Managing Director"
          title="Steady operations, sharper delivery"
          note="A cleaner message card sits beside the portrait on desktop and stacks naturally on mobile."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-stretch">
          <article className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[2.2rem] border border-red-100 bg-[linear-gradient(180deg,#ffffff_0%,#fff7f7_100%)] p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,.24)] sm:min-h-[480px] sm:p-8 lg:min-h-[560px]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-700">In the details</p>
              <h3 className="mt-4 font-[var(--font-display)] text-[clamp(2.4rem,4.5vw,4.5rem)] leading-[0.92] tracking-[-0.04em] text-slate-950 text-3d">
                Dr. Maruf Mollah
              </h3>
              <div className="mt-6 rounded-[1.8rem] border border-red-100 bg-white p-5 shadow-[0_20px_60px_-42px_rgba(15,23,42,.18)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-red-700">Managing Director Message</p>
                <p className="mt-3 text-base leading-8 text-slate-700 sm:text-lg">
                  Our focus is precision with warmth. We want every family, student, and partner to feel that the
                  process is organized, supported, and worth the trust they place in us. From first inquiry to final
                  follow-up, our teams are aligned to deliver meaningful service and a premium experience.
                </p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                  Managing Director, Malisha Group
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {mdLinks.map((link) => (
                    <LinkBadge key={link.label} href={link.href} label={link.label} icon={link.icon} compact />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Process clarity", "Premium coordination", "Family-first support"].map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-red-100 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_16px_45px_-30px_rgba(15,23,42,.2)]"
                  style={{ animationDelay: `${index * 90}ms` } as CSSProperties}
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="relative min-h-[420px] overflow-hidden rounded-[2.2rem] border border-red-100 bg-slate-950 shadow-[0_24px_80px_-40px_rgba(15,23,42,.24)] sm:min-h-[480px] lg:min-h-[560px]">
            <Image src="/team/md.jpg" alt="Managing Director portrait" fill className="object-cover object-top" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(123,15,24,.08)_30%,rgba(123,15,24,.42)_72%,rgba(43,7,12,.84)_100%)]" />
            <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-red-700 backdrop-blur-xl">
              Managing Director
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.6rem] border border-white/15 bg-white/12 p-5 text-white backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">Portrait</p>
              <p className="mt-2 text-sm leading-7 text-white/90">
                Dr. Maruf Mollah
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function DirectorGallerySection() {
  return (
    <section className="section-space bg-white pt-0">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Gallery"
          title="A snapshot of the journey"
          note=""
        />

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className="group relative overflow-hidden rounded-[1.5rem] border border-red-100 bg-red-50 shadow-[0_18px_50px_-34px_rgba(15,23,42,.24)]"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyVisual({ brand }: { brand: Brand }) {
  const Icon = brand.icon;
  return (
    <div className={`relative min-h-[420px] overflow-hidden rounded-[2rem] bg-gradient-to-br ${brand.accent} p-6 text-white shadow-[0_35px_90px_-35px_rgba(2,6,23,.45)] sm:p-8`}>
      <div className="absolute -right-16 -top-14 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-16 left-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,0))]" />

      <div className="relative flex h-full flex-col justify-between">
        <div>
          <div className="inline-flex rounded-[1.5rem] bg-white/92 p-3 shadow-xl shadow-slate-950/20">
            <LogoImage src={brand.logo} alt={brand.name} size="lg" />
          </div>
          <div className="mt-8 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Associated brand</p>
              <h2 className="mt-3 font-[var(--font-display)] text-2xl font-semibold sm:text-2xl">{brand.name}</h2>
              <p className="mt-3 max-w-md text-base leading-7 text-white/90">{brand.oneLiner}</p>
            </div>
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-white/15 backdrop-blur-xl">
              <Icon className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3">
          {brand.bullets.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/14 bg-white/10 px-4 py-3 backdrop-blur-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
              <span className="text-sm font-medium text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OverviewSection() {
  return (
    <section className="section-space bg-white">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Group overview"
          title="Five brands, one elevated identity"
          note="The cards below use a balanced 2-over-3 desktop rhythm so the five companies feel intentional instead of squeezed."
        />
        <div className="mt-10">
          <BalancedBrandGrid variant="light" />
        </div>
      </div>
    </section>
  );
}

function CompaniesSection() {
  return (
    <section id="companies" className="section-space pt-0 bg-white">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Our companies"
          title="Brand stories with depth and polish"
          note="Each company is presented with its logo, name, slogan, and direct website action."
        />
        <div className="mt-10 space-y-6">
          {brands.map((brand, idx) => (
            <article
              key={brand.id}
              id={brand.id}
              className="overflow-hidden rounded-[2.2rem] border border-red-100 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,.28)]"
            >
              <div className="grid items-stretch gap-6 p-4 sm:p-6 lg:grid-cols-[.95fr_1.05fr] lg:p-7">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <CompanyVisual brand={brand} />
                </div>
                <div className={`flex flex-col ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="rounded-[2rem] border border-red-100 bg-[linear-gradient(180deg,#ffffff_0%,#fff7f7_100%)] p-6 sm:p-7">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">{brand.short}</p>
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
                        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${brand.accent} px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-200 transition hover:-translate-y-0.5`}
                      >
                        Visit website
                        <ArrowRight className="h-4 w-4" />
                      </a>
                      <QRDisplay file={brand.qrName} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-red-100 bg-white px-4 py-3 text-slate-700">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
      <span className="text-sm leading-7 sm:text-[15px]">{label}</span>
    </div>
  );
}

function ContactGrid() {
  return (
    <section id="contact" className="section-space bg-[#fff7f7]">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Connect with the right team"
          note="The contact cards follow the same 2-over-3 rhythm and give the phone and email more visual weight."
        />
        <div className="mt-10">
          <SectionCardGrid>
            {brands.map((brand, index) => (
              <article
                key={`${brand.id}-contact`}
                className={`reveal-up overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_24px_80px_-42px_rgba(15,23,42,.25)] ${
                  index < 2 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
                style={{ minHeight: 280, animationDelay: `${index * 70}ms` } as CSSProperties}
              >
                <div className={`h-2 w-full bg-gradient-to-r ${brand.accent}`} />
                <div className="flex h-full flex-col p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-red-50 p-2.5 shadow-sm">
                      <LogoImage src={brand.logo} alt={brand.name} size="md" />
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700">
                      {brand.phone[0]}
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{brand.name}</h3>
                  <p className="mt-1 bg-gradient-to-r from-red-700 via-rose-600 to-red-500 bg-clip-text text-sm font-semibold text-transparent">
                    {brand.short}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{brand.oneLiner}</p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-3.5 py-2 text-sm font-semibold text-red-700">
                    <Mail className="h-4 w-4" />
                    {brand.email ?? brand.emailPlaceholder ?? "Email to be added"}
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-900"
                    >
                      Visit <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <QRDisplay file={brand.qrName} />
                  </div>
                </div>
              </article>
            ))}
          </SectionCardGrid>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#b81b36] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.18),transparent_22%),radial-gradient(circle_at_top_right,rgba(255,255,255,.12),transparent_26%),linear-gradient(180deg,#d92b4a_0%,#b81b36_52%,#8d1328_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-bold text-red-800">
                MG
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-100">Malisha Group</p>
                <p className="mt-1 text-sm text-red-100">Education • Healthcare • Hospitality • Business</p>
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-8 text-red-50/90">
              A premium group experience connecting people to trusted pathways in China through service, guidance,
              and long-term relationships.
            </p>
          </div>

          <div>
            <SectionCardGrid>
              {brands.map((brand, index) => (
                <div
                  key={`${brand.id}-footer`}
                  className={`rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-xl ${
                    index < 2 ? "lg:col-span-3" : "lg:col-span-2"
                  }`}
                  style={{ minHeight: 180 } as CSSProperties}
                >
                  <div className="rounded-xl bg-white p-2">
                    <LogoImage src={brand.logo} alt={brand.name} size="sm" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">{brand.name}</p>
                  <p className="mt-1 text-xs text-red-100">{brand.short}</p>
                </div>
              ))}
            </SectionCardGrid>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-red-100 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Malisha Group. All rights reserved.</p>
          <p>Designed by www.asifrahman.info</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff8f8_0%,#ffffff_16%,#fff5f5_58%,#fff0f0_100%)] text-slate-900">
      <TopBar />
      <HeroSection />
      <ManagingDirectorSection />
      <DirectorGallerySection />
      <OverviewSection />
      <CompaniesSection />
      <ContactGrid />
      <Footer />
    </main>
  );
}
