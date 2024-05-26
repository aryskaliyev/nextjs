import { auth, signOut } from "@/auth";

const MentorPage = async () => {
  const session = await auth();

  return (
    <div className="bg-blue-500">
        <h1>MENTOR PAGE!</h1>
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

export default MentorPage;
