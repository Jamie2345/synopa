import { signIn } from "../../auth";

export function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed z-50">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl text-primary-content" href="#">Synopa.</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#features" className="scroll-smooth">Features</a>
          </li>
          <li>
            <a href="#pricing" className="scroll-smooth">Pricing</a>
          </li>
          <li>
            <a href="#faqs" className="scroll-smooth">FAQ's</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn mr-3 btn-sm" href="/login">Login</a>
        <a className="btn btn-secondary btn-sm text-white" href="/register">Start Free</a>
      </div>
    </div>
  );
}
