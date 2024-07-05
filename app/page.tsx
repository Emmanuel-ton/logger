import GreetingSection from "@/components/GreetingSection";
import { name } from "@/data/name";


export default function Home() {
  return (
    <main className="px-4">
      <GreetingSection name={name}/>
    </main>
  );
}
