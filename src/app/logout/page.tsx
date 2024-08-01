import { auth } from "../../../auth";
import { redirect } from 'next/navigation';
import { SignOutButton } from "@/components/SignOutButton";

export default async function logoutPage() {
  const session = await auth();
  if (!session) redirect("/login");

  if (session)
    return (
      <main className="min-h-screen" data-theme="bumblebee">
      <div className="flex items-center justify-center w-full h-screen bg-white">
        <div className="flex flex-col w-full max-w-80 mb-16 text-center">
          <a href="/" className="m-auto my-2 text-sm text-secondary-content">
            Synopa.
          </a>
          <div className="my-8">
            <h2 className="text-2xl mb-2">Logout</h2>
            <p className="text-gray-700 text-sm">
              Are you sure you want to sign out?
            </p>
          </div>
          <SignOutButton />
        </div>
      </div>
    </main>
    );
}