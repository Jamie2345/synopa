import "@/css/style.css";

export default function Page() {
  return (
    <main className="min-h-screen" data-theme="bumblebee">
      <div className="flex items-center justify-center w-full h-screen bg-white">
        <div className="flex flex-col w-full max-w-80 mb-16">
          <a href="/" className="m-auto my-2 text-sm text-secondary-content">
            Synopa.
          </a>
          <div className="my-8">
            <h2 className="text-2xl mb-2">Welcome!</h2>
            <p className="text-secondary-content text-sm">
              Create an account to get started.
            </p>
          </div>
          <div className="grid gap-2">
            <div>
              <label className="text-gray-800 text-xs">Name</label>
              <input
                type="text"
                className="shadow-lg rounded-md w-full p-2 outline-secondary-content border-[1px] border-gray-800 text-sm outline-1"
              />
            </div>
            <div>
              <label className="text-gray-800 text-xs">Email</label>
              <input
                type="text"
                className="shadow-lg rounded-md w-full p-2 outline-secondary-content border-[1px] border-gray-800 text-sm outline-1"
              />
            </div>
          </div>
          <button className="btn btn-secondary w-full btn-sm h-10 text-white mt-4 text-sm rounded-md font-light">
            Continue
          </button>
          <p className="text-sm m-auto mt-5">
            Already have an account?{" "}
            <a className="text-secondary-content" href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
