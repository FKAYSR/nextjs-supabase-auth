import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

async function signUp(formData) {
  "use server";

  const email = formData.get("email");
  const password = formData.get("password");

  const supabase = await createClient();
  await supabase.auth.signUp({ email, password });

  redirect("/");
}

export const metadata = {
  title: "Sign up",
  description: "Sign up here",
};

export default function Home() {
  return (
    <main>
      <section>
        <h1>Sign up</h1>
        <p>
          Create an account, log in and see your profile. Only the profile page
          requires login.
        </p>
      </section>

      <form className="auth-form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="At least 6 characters"
          autoComplete="new-password"
          minLength={6}
          required
        />

        <button type="submit">Sign up</button>
      </form>
    </main>
  );
}
