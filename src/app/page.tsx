"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Facebook,
  Globe,
  Handshake,
  HeartPulse,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  QrCode,
  Sparkles,
  Target,
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
  coverImage: string;
  phone: string[];
  email?: string;
  emailPlaceholder?: string;
  address: string;
  mapQuery: string;
  qrName: string;
  accent: string;
  socials: SocialLink[];
};

const brands: Brand[] = [
  {
    id: "malishaedu",
    name: "MalishaEdu",
    short: "Education Pathways",
    oneLiner: "Admissions, scholarships, and student guidance for studying in China.",
    focus:
      "We guide students from application to arrival with structured support across admissions, scholarship planning, and on-ground orientation.",
    website: "https://malishaedu.com",
    logo: "/logos/malishaedu.png",
    coverImage: "/brands/malishaedu.jpg",
    phone: ["+86 18613114366"],
    email: "info@malishaedu.com",
    address:
      "Room 13D, 13th Floor, Rongjian Building, No. 29 Liuma / Construction Six Road, Yuexiu District, Guangzhou, China",
    mapQuery: "Room 13D, 13th Floor, Rongjian Building, Construction Six Road, Yuexiu District, Guangzhou, China",
    qrName: "malishaedu_qr.jpg",
    accent: "from-cyan-500 to-sky-500",
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
      "BRHC connects patients to trusted hospitals with language support, appointment coordination, and guided treatment journeys.",
    website: "https://www.chinahealthcare.center",
    logo: "/logos/brhc_2.png",
    coverImage: "/brands/brhc.jpg",
    phone: ["+86 15989054366", "+88 01332-511838"],
    emailPlaceholder: "Email: To be confirmed",
    address:
      "4th Floor (East Side), Praasad Trade Center, 6 Kemal Ataturk Avenue, Dhaka",
    mapQuery: "Praasad Trade Center, 6 Kemal Ataturk Avenue, Dhaka, Bangladesh",
    qrName: "malishaedu_qr.jpg",
    accent: "from-emerald-500 to-cyan-500",
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
      "A welcoming halal dining destination near transit, built for students, families, and business travelers seeking trusted comfort.",
    website: "https://www.facebook.com/albarakahrestaurantguangzhou/",
    logo: "/logos/AL-Barakah.png",
    coverImage: "/brands/albarakah.jpg",
    phone: ["+86 19128630063", "+88 01929-732131"],
    address: "Near Metro Line 2, Sanyuanli Station, Exit C2, Guangzhou",
    mapQuery: "Sanyuanli Station Exit C2, Guangzhou, China",
    qrName: "albarakah_qr.jpg",
    accent: "from-amber-500 to-orange-500",
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
      "EasyLink enables market entry and operations in China with practical support across company formation, compliance, and growth strategy.",
    website: "https://www.gzeasylink.com/",
    logo: "/logos/easylink.png",
    coverImage: "/brands/easylink.jpg",
    phone: ["+86 18989410063"],
    email: "info@easylinkchina.com",
    address:
      "Room 13D, 13th Floor, Rongjian Building, No. 29, Construction Six Road, Yuexiu District, Guangzhou, China",
    mapQuery: "Room 13D, 13th Floor, Rongjian Building, Construction Six Road, Yuexiu District, Guangzhou, China",
    qrName: "easylink_qr.jpg",
    accent: "from-blue-600 to-cyan-500",
    socials: [
      { label: "Website", href: "https://www.gzeasylink.com/", icon: Globe },
      { label: "Facebook", href: "https://www.facebook.com/easylinkgz/", icon: Facebook },
    ],
  },
];

const missionVision = [
  {
    title: "Our Mission",
    icon: Target,
    cardClass: "bg-white border-slate-200 text-slate-800",
    bullets: [
      "Bridge global clients with trusted opportunities in China.",
      "Deliver practical, transparent and accountable support.",
      "Build long-term outcomes across education, healthcare, hospitality and business.",
    ],
  },
  {
    title: "Our Vision",
    icon: CheckCircle2,
    cardClass: "bg-gradient-to-br from-blue-600 to-blue-700 border-blue-500 text-white",
    bullets: [
      "Become the most trusted cross-border partner network in China.",
      "Set the standard for service quality, speed and reliability.",
      "Enable sustainable partnerships that strengthen global collaboration.",
    ],
  },
];

const coreValues = [
  { title: "Trust", desc: "Building lasting relationships", icon: Handshake, tone: "text-sky-700 bg-sky-100" },
  { title: "Efficiency", desc: "Streamlined processes", icon: Sparkles, tone: "text-emerald-700 bg-emerald-100" },
  { title: "Excellence", desc: "Quality in everything", icon: BadgeCheck, tone: "text-blue-700 bg-blue-100" },
  { title: "Global", desc: "Worldwide perspective", icon: Globe, tone: "text-fuchsia-700 bg-fuchsia-100" },
];

const leadershipVideos = [
  {
    title: "Message from Our Chairman",
    name: "Chairman Sheikh Korban Ali",
    videoId: "cHZfV9ElVU8",
    desc: "Shares the vision for global collaboration and long-term partnership growth.",
  },
  {
    title: "Leadership Message",
    name: "Dr. Maruf Mollah",
    videoId: "mwJK-x5Ov-E",
    desc: "Highlights practical healthcare access, patient trust, and service excellence.",
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
      ? { width: 120, height: 60, cls: "h-10 w-20" }
      : size === "lg"
        ? { width: 220, height: 110, cls: "h-14 w-28" }
        : { width: 180, height: 90, cls: "h-12 w-24" };

  if (failed) {
    return (
      <div className={`flex ${sizes.cls} items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-xs font-semibold text-slate-700`}>
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
      className={`${sizes.cls} rounded-xl object-contain`}
      onError={() => setFailed(true)}
    />
  );
}

function socialStyles(label: string) {
  if (label === "Facebook") return "text-blue-600 bg-blue-50 border-blue-200";
  if (label === "YouTube") return "text-red-600 bg-red-50 border-red-200";
  if (label === "Instagram") return "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200";
  if (label === "LinkedIn") return "text-sky-700 bg-sky-50 border-sky-200";
  if (label === "WhatsApp") return "text-emerald-600 bg-emerald-50 border-emerald-200";
  return "text-slate-700 bg-slate-50 border-slate-200";
}

function SocialPill({ social }: { social: SocialLink }) {
  const Icon = social.icon;
  const tone = socialStyles(social.label);
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition hover:-translate-y-0.5 ${tone}`}
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
      <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-3 text-center">
        <div>
          <QrCode className="mx-auto mb-2 h-5 w-5 text-slate-500" />
          <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">QR Missing</p>
          <p className="mt-1 text-[10px] text-slate-400">/public/qr/{file}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={`/qr/${file}`}
      alt={`${file} qr`}
      width={128}
      height={128}
      className="h-32 w-32 rounded-3xl border border-slate-200 object-cover"
      onError={() => setFailed(true)}
    />
  );
}

function HeroImage() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex aspect-[2/1] w-full items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 text-slate-500">
        Place `hero.png` in `/public`
      </div>
    );
  }

  return (
    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-3xl border border-slate-200">
      <Image src="/hero/hero.png" alt="Malisha Group hero" fill className="object-cover" onError={() => setFailed(true)} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
      <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-2 sm:bottom-6 sm:left-6">
        <p className="font-[var(--font-display)] text-xl text-slate-900 sm:text-3xl">
          MalishaGroup is your bridge to China
        </p>
      </div>
    </div>
  );
}

function HeroCompanyCard({ brand }: { brand: Brand }) {
  return (
    <a
      href={brand.website}
      target="_blank"
      rel="noreferrer"
      className="glass-card rounded-2xl border border-slate-200 p-4 text-center transition hover:-translate-y-0.5"
    >
      <div className="mx-auto mb-3 w-fit rounded-xl border border-slate-200 bg-white p-2">
        <LogoImage src={brand.logo} alt={brand.name} size="lg" />
      </div>
      <p className="text-lg font-semibold text-slate-900">{brand.name}</p>
      <p className="text-sm text-slate-600">{brand.short}</p>
    </a>
  );
}

function BrandCover({ brand }: { brand: Brand }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`h-full min-h-[260px] rounded-3xl bg-gradient-to-br ${brand.accent} p-8 text-white`}>
        <div className="rounded-2xl bg-white/90 p-3 w-fit">
          <LogoImage src={brand.logo} alt={brand.name} size="lg" />
        </div>
        <h3 className="mt-6 font-[var(--font-display)] text-3xl">{brand.name}</h3>
        <p className="mt-2 text-white/90">{brand.short}</p>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[260px] overflow-hidden rounded-3xl border border-slate-200">
      <Image
        src={brand.coverImage}
        alt={`${brand.name} cover`}
        fill
        className="object-cover"
        onError={() => setFailed(true)}
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${brand.accent} opacity-55`} />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="font-[var(--font-display)] text-3xl">{brand.name}</p>
        <p className="text-sm text-white/90">{brand.short}</p>
      </div>
    </div>
  );
}

function BrandMap({ query, brandName }: { query: string; brandName: string }) {
  const encoded = encodeURIComponent(query);
  const src = `https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=${encoded}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <iframe
        title={`${brandName} office map`}
        src={src}
        className="h-64 w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encoded}`}
        target="_blank"
        rel="noreferrer"
        className="block border-t border-slate-200 px-3 py-2 text-center text-xs font-semibold text-blue-700 hover:bg-blue-50"
      >
        Open in Google Maps
      </a>
    </div>
  );
}

function StickySocialRail() {
  return (
    <div className="fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">
      {stickySocials.map((item) => {
        const Icon = item.icon;
        const tone = socialStyles(item.label);
        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-lg transition hover:-translate-y-0.5 ${tone}`}
            aria-label={item.label}
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}

function CompanySection({ brand, reverse }: { brand: Brand; reverse: boolean }) {
  return (
    <article className="glass-card overflow-hidden rounded-[2rem] p-5 sm:p-6">
      <div className="grid items-stretch gap-5 md:grid-cols-2">
        <div className={`space-y-4 ${reverse ? "md:order-2" : ""}`}>
          <BrandCover brand={brand} />
          <div className="rounded-2xl border border-slate-200 bg-white p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sky-700">Office Location Map</p>
            <BrandMap query={brand.mapQuery} brandName={brand.name} />
          </div>
        </div>

        <div className={`rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 ${reverse ? "md:order-1" : ""}`}>
          <h3 className="font-[var(--font-display)] text-3xl text-slate-900">{brand.name}</h3>
          <p className="mt-1 text-sm font-semibold text-slate-600">{brand.oneLiner}</p>
          <p className="text-sm leading-7 text-slate-700">{brand.focus}</p>
          <p className="mt-3 text-sm font-semibold text-sky-700">For details, visit our page.</p>

          <div className="mt-5 space-y-2 text-sm text-slate-700">
            {brand.phone.map((item) => (
              <p key={item} className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
                <span>{item}</span>
              </p>
            ))}
            <p className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
              <span>{brand.email ?? brand.emailPlaceholder}</span>
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
              <span>{brand.address}</span>
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {brand.socials.map((social) => (
              <SocialPill key={`${brand.id}-${social.label}`} social={social} />
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <a
              href={brand.website}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${brand.accent} px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5`}
            >
              Visit Website
              <ArrowRight className="h-4 w-4" />
            </a>
            <QRDisplay file={brand.qrName} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-20 text-slate-900">
      <StickySocialRail />

      <section className="relative px-4 pb-14 pt-8 sm:px-6 lg:px-10 lg:pt-12">
        <div className="section-shell">
          <div className="rounded-[2.2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <HeroImage />
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {brands.map((brand) => (
                <HeroCompanyCard key={`hero-card-${brand.id}`} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-8">
        <div className="section-shell">
          <h2 className="text-center font-[var(--font-display)] text-4xl text-slate-900 sm:text-5xl">Mission & Vision</h2>
          <div className="mt-8 grid auto-rows-fr gap-6 md:grid-cols-2">
            {missionVision.map((item) => {
              const Icon = item.icon;
              const pointTone = item.title === "Our Vision" ? "text-blue-100" : "text-slate-700";
              return (
                <article key={item.title} className={`h-full rounded-3xl border p-7 shadow-lg ${item.cardClass}`}>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-[var(--font-display)] text-3xl">{item.title}</h3>
                  <ul className={`mt-5 space-y-3 text-sm leading-7 ${pointTone}`}>
                    {item.bullets.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <HeartPulse className="mt-1 h-4 w-4 shrink-0 text-current" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="glass-card rounded-2xl p-5 text-center">
                  <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full ${value.tone}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900">{value.title}</h4>
                  <p className="mt-1 text-sm text-slate-600">{value.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      <section className="section-space">
        <div className="section-shell">
          <h2 className="text-center font-[var(--font-display)] text-4xl text-slate-900 sm:text-5xl">Leadership Messages</h2>
          <div className="mt-8 grid auto-rows-fr gap-6 md:grid-cols-2">
            {leadershipVideos.map((video) => (
              <article key={video.videoId} className="glass-card h-full rounded-3xl p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-sky-700">{video.title}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{video.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{video.desc}</p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-black">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      <section id="brands" className="section-space">
        <div className="section-shell space-y-6">
          <h2 className="text-center font-[var(--font-display)] text-4xl text-slate-900 sm:text-5xl">Our Companies</h2>
          {brands.map((brand, idx) => (
            <CompanySection key={brand.id} brand={brand} reverse={idx % 2 === 1} />
          ))}
        </div>
      </section>

      <div className="glow-divider" />

      <section id="contact" className="section-space">
        <div className="section-shell">
          <h2 className="text-center font-[var(--font-display)] text-4xl text-slate-900 sm:text-5xl">Contact Grid</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {brands.map((brand) => (
              <article key={`${brand.id}-contact`} className="glass-card rounded-3xl p-5">
                <div className="mb-3 flex items-center gap-3">
                  <LogoImage src={brand.logo} alt={brand.name} size="md" />
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900">{brand.name}</h4>
                    <p className="text-sm text-slate-600">{brand.short}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-700">{brand.oneLiner}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {brand.socials.slice(0, 3).map((social) => (
                    <SocialPill key={`${brand.id}-contact-${social.label}`} social={social} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
