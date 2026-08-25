import AdSlot from "@/components/AdSlot";
import { createClient } from "@/lib/supabase/server";
export default async function History() {
  const supabase = await createClient();
  const { data } = await supabase.from("generations").select("id,tool,platform,output,created_at").order("created_at",{ascending:false}).limit(30);
  return <div className="mx-auto max-w-6xl px-5 py-8"><h1 className="text-4xl font-black">History</h1><AdSlot label="History top ad slot" /><div className="mt-7 space-y-3">{(data||[]).map(x=><div key={x.id} className="card p-5"><div className="flex justify-between gap-4"><div><b>{x.tool}</b><span className="small-muted ml-3">{x.platform||""}</span></div><span className="small-muted">{new Date(x.created_at).toLocaleString()}</span></div><p className="mt-3 whitespace-pre-wrap text-slate-300">{x.output.slice(0,800)}{x.output.length>800?"…":""}</p></div>)}{!data?.length && <div className="card p-8 text-center text-slate-400">No generations yet.</div>}</div></div>;
}