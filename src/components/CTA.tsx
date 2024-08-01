export default function CTA() {
  return (
    <div className="mx-40 w-full py-10">
      <h3 className="text-5xl font-semibold text-black">Boost your productivity.</h3>
      <p className="text-5xl font-semibold text-secondary-content">Start using our app today.</p>
      <div className="py-10">
        <a className="btn btn-secondary btn-md text-white mr-3" href="register">Get started</a>
        <a className="btn btn-ghost btn-md text-black" href="login">Login</a>
      </div>
    </div>
  );
}