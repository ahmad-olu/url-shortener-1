import Image from "next/image";
import { getSessionUser } from "./lib/session";

export default async function Home() {
  const user = await getSessionUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>New Page coming soon</div>
      {user && <div>{user}</div>}
    </main>
  );
}
