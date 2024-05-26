import { auth, signOut } from "@/auth";
import IsAdminRole from "@/hooks/is-admin-role";
import IsMentorRole from "@/hooks/is-mentor-role";
import IsStudentRole from "@/hooks/is-student-role";

const DashboardPage = async () => {
  const session = await auth();
  const userRole = session?.user.role;

  return (
    <div className="bg-green-500">
      <h1>
        {IsAdminRole(userRole) && <span>
          ADMIN
        </span>}
        {IsStudentRole(userRole) && <span>
          STUDENT
        </span>}
        {IsMentorRole(userRole) && <span>
          MENTOR
        </span>}
         DASHBOARD PAGE!</h1>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut({ redirectTo: "/" });
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default DashboardPage;
