import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className="bg-yellow-500">
        <h1>ADMIN PAGE!</h1>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut({redirectTo: "/"});
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default AdminPage;
