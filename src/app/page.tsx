import { DomainList } from "@/features/domain/components";

export default function Home() {
  return (
    <main>
      <div className="p-4 sm:p-10">
        <DomainList />
      </div>
    </main>
  );
}
