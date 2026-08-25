import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import AdSlot from "@/components/AdSlot";

const tools = [
  ["🎬","YouTube","8 tools","Video scripts, titles, hooks, descriptions and ideas"],
  ["🎵","TikTok / Reels","6 tools","Hooks, captions, scripts, hashtags and CTAs"],
  ["📸","Instagram","6 tools","Captions, bios, post ideas, carousels and reels"],
  ["📌","Pinterest","5 tools","Pin titles, SEO descriptions, keywords and boards"],
  ["🛍️","E-commerce","6 tools","Product copy, ads, benefits and features"],
  ["💼","Business","6 tools","Emails, marketing copy, bios and promotional text"],
  ["✍️","AI Writing","7 tools","Rewrite, paraphrase, summarize, grammar and tone"],
  ["🧰","Other Tools","6+ tools","Content improver, keyword extractor and counters"]
];

export default async function Dashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: profile } = await supabase.from("profiles").select("plan,monthly_generations").eq("id", user!.id).single();
  const plan = profile?.plan || "free";
  const usage = profile?.monthly_generations || 0;

  return (
    <div className="mx-auto max-w-7xl px-5 py-8">
      <section className="mb-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr] items-center">
        <div>
          <p className="mb-3 text-violet-300">Welcome back, creator 👋</p>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">All-in-One <span className="gradient-text">AI Content Toolkit</span></h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-400">Create ideas, hooks, scripts, titles, captions, descriptions and marketing copy from one secure workspace.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/dashboard/tools" className="btn-primary">Start Creating Free</Link>
            <Link href="/dashboard/pricing" className="btn-secondary">View Pro</Link>
          </div>
        </div>
        <div className="card relative min-h-[280px] overflow-hidden p-8">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="relative flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-5 grid h-28 w-28 place-items-center rounded-[2rem] border border-cyan-300/30 bg-gradient-to-br from-violet-600/50 to-cyan-400/20 text-6xl shadow-glow">🤖</div>
              <p className="font-semibold">Your creative AI workspace</p>
              <p className="small-muted mt-1">YouTube • TikTok • Instagram • Pinterest • Business</p>
            </div>
          </div>
        </div>
      </section>

      <AdSlot label="Top banner ad slot" />

      <section className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          ["100+","AI Tools"],["25K+","Creator Goal"],["500K+","Content Goal"],[plan.toUpperCase(), "Current Plan"]
        ].map(([a,b]) => <div key={b} className="card p-5"><div className="text-2xl font-black">{a}</div><div className="small-muted mt-1">{b}</div></div>)}
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold">What ContentAI provides</h2>
          <p className="small-muted mt-1">Pick a platform and start with a specialized tool.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {tools.map(([icon,name,count,desc]) => (
            <Link href={`/dashboard/tools?category=${encodeURIComponent(name)}`} key={name} className="card group p-5 transition hover:-translate-y-1 hover:border-violet-400/40">
              <div className="flex items-center justify-between"><span className="text-2xl">{icon}</span><span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300">{count}</span></div>
              <h3 className="mt-5 font-bold">{name}</h3>
              <p className="small-muted mt-2 min-h-10">{desc}</p>
              <div className="mt-5 text-sm font-semibold text-violet-300">Explore tools →</div>
            </Link>
          ))}
        </div>
      </section>

      <AdSlot label="In-content ad slot" />

      <section className="card mt-8 p-7">
        <h2 className="text-center text-2xl font-bold">Smart Content Workflow</h2>
        <p className="small-muted mt-1 text-center">Idea → Hook → Script → Title → Description → Caption → Hashtags</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {["💡 Idea","🧲 Hook","📄 Script","🔤 Title","📋 Description","💬 Caption","# Hashtags"].map((x,i)=><div key={x} className="rounded-xl border border-slate-700/70 bg-slate-950/40 p-4 text-center"><div className="text-sm font-semibold">{i+1}. {x}</div></div>)}
        </div>
      </section>

      <AdSlot label="Bottom banner ad slot" />

      <section className="sticky bottom-4 z-10 mt-10 rounded-2xl border border-violet-400/30 bg-[#11162b]/95 p-4 shadow-2xl backdrop-blur-xl md:flex md:items-center md:justify-between">
        <div><div className="font-bold">Ready to create faster?</div><div className="small-muted">Start free now — upgrade only when you need more.</div></div>
        <Link href="/dashboard/tools" className="btn-primary mt-3 block text-center md:mt-0">Get Started Free →</Link>
      </section>

      <div className="mt-8 text-center">
        <p className="small-muted">Free plan: {usage} generations used this month.</p>
        <Link href="/dashboard/pricing" className="mt-3 inline-block text-violet-300 hover:underline">Upgrade to Pro for higher limits →</Link>
      </div>
    </div>
  );
}