 "use client";
import {useState} from "react";
import {createBrowserClient} from "@supabase/ssr";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function AuthForm({mode}:{mode:"login"|"signup"}){
 const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [name,setName]=useState(""); const [error,setError]=useState(""); const [busy,setBusy]=useState(false); const router=useRouter();
 const supabase=createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
 async function submit(e:React.FormEvent){e.preventDefault();setBusy(true);setError("");
  const result=mode==="login"?await supabase.auth.signInWithPassword({email,password}):await supabase.auth.signUp({email,password,options:{data:{full_name:name},emailRedirectTo:`${location.origin}/auth/callback` }});
  if(result.error)setError(result.error.message); else router.push(mode==="login"?"/dashboard":"/login?check=1"); setBusy(false);
 }
 return <main className="grid min-h-screen place-items-center px-5"><div className="w-full max-w-md">
  <div className="mb-8 text-center"><div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-violet-600/20 text-3xl">🤖</div><h1 className="text-3xl font-black">Content<span className="gradient-text">AI</span> Toolkit</h1><p className="small-muted mt-2">Sign in to enter your private workspace.</p></div>
  <form onSubmit={submit} className="card p-7">
   {mode==="signup"&&<><label className="small-muted">Full name</label><input className="input mt-2 mb-5" value={name} onChange={e=>setName(e.target.value)} required /></>}
   <label className="small-muted">Email</label><input className="input mt-2 mb-5" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
   <label className="small-muted">Password</label><input className="input mt-2" type="password" minLength={8} value={password} onChange={e=>setPassword(e.target.value)} required />
   {error&&<div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">{error}</div>}
   <button disabled={busy} className="btn-primary mt-6 w-full">{busy?"Please wait…":mode==="login"?"Login":"Create account"}</button>
   <p className="small-muted mt-5 text-center">{mode==="login"?<>New here? <Link className="text-violet-300" href="/signup">Create an account</Link></>:<>Already have an account? <Link className="text-violet-300" href="/login">Login</Link></>}</p>
  </form>
 </div></main>;
}