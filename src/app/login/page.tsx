import { signIn } from "../../../auth";
import { auth } from "../../../auth";
import { redirect } from 'next/navigation';

export default async function SignInPage() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    // Call signIn and handle its result
    const result = await signIn("resend", formData);

    // Optionally handle the result - maybe check if result contains an error
    if (!result) {
      console.error("Sign-in failed", result);
    }
  };
  const session = await auth();
  if (!session)
    return (
      <main className="min-h-screen" data-theme="bumblebee">
        <div className="flex items-center justify-center w-full h-screen bg-white">
          <div className="flex flex-col w-full max-w-80 mb-16">
            <a href="/" className="m-auto my-2 text-sm text-secondary-content">
              Synopa.
            </a>
            <div className="my-8">
              <h2 className="text-2xl mb-2">Welcome back!</h2>
              <p className="text-secondary-content text-sm">
                Sign in to continue
              </p>
            </div>
            <form action={handleSubmit}>
              <div>
                <label className="text-gray-800 text-xs">Email</label>
                <input
                  name="email" // Ensure the input has a name attribute
                  type="text"
                  className="shadow-lg rounded-md w-full p-2 outline-secondary-content border-[1px] border-gray-800 text-sm outline-1"
                  required // good practice to mark it as required
                />
              </div>
              <button
                type="submit"
                className="btn btn-secondary w-full btn-sm h-10 text-white mt-4 text-sm font-light rounded-md"
              >
                Continue
              </button>
            </form>
            <p className="text-sm m-auto mt-5">
              No account?{" "}
              <a className="text-secondary-content" href="/register">
                Create one
              </a>
            </p>
          </div>
        </div>
      </main>
    );
  if (session) redirect("/synopa");
}
