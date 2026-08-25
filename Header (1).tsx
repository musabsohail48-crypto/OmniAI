 "use client";
import {createBrowserClient} from "@supabase/ssr";
import {useRouter} from "next/navigation";
export default function Header({email}:{email:string}){
 const router=useRouter(); const supabase=createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
 async function logout(){await supabase.auth.signOut();router.push("/login");router.refresh();}
 return <header className="fixed left-0 right-0 top-0 z-30 h-16 border-b border-slate-800/80 bg-[#070b18]/90 backdrop-blur-xl"><div className="flex h-full items-center justify-between px-5 md:pl-[285px]"><div className="font-black md:hidden">Content<span className="gradient-text">AI</span></div><div className="ml-auto flex items-center gap-4"><span className="hidden text-sm text-slate-400 sm:block">{email}</span><button onClick={logout} className="btn-secondary px-4 py-2 text-sm">Logout</button></div></div></header>;
}