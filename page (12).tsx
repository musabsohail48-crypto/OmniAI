import ToolGrid from "@/components/ToolGrid";
import AdSlot from "@/components/AdSlot";

export default function ToolsPage() {
  return <div className="mx-auto max-w-7xl px-5 py-8">
    <h1 className="text-4xl font-black">AI Tools</h1>
    <p className="small-muted mt-2">Create platform-ready content in seconds.</p>
    <AdSlot label="Tools page ad slot" />
    <ToolGrid />
  </div>;
}