export default function verifyErrorPage() {
  return (
    <main className="min-h-screen" data-theme="bumblebee">
      <div className="flex items-center justify-center w-full h-screen bg-white">
        <div className="flex flex-col w-full max-w-80 mb-16 text-center">
          <a href="/" className="m-auto my-2 text-sm text-secondary-content">
            Synopa.
          </a>
          <div className="my-8">
            <h2 className="text-2xl mb-2">Unable to sign in</h2>
            <p className="text-gray-700 text-sm mb-2">
              The sign in link is no longer valid.
            </p>
            <p className="text-gray-700 text-sm">
            It may have been used already or it may have expired.
            </p>
          </div>
          <a className="btn btn-secondary w-full btn-sm text-sm font-light text-white"href="/login">Login</a>
        </div>
      </div>
    </main>
  );
}