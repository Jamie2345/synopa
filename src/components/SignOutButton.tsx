import { signOut } from "../../auth"
 
export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({
          redirect: true,
          redirectTo: "/login",
        })
      }}
    >
      <button type="submit" className="btn btn-secondary text-sm btn-sm text-white">Sign Out</button>
    </form>
  )
}