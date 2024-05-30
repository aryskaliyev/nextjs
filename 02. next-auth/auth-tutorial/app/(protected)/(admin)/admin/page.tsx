import { auth } from "@/auth";
import LogoutButton from "@/components/auth/logout-button";

const AdminPage = async () => {
  const session = await auth();
  const userRole = session?.user.role;

  return (
    <div className="bg-green-500">
      <h1>
        {/* {IsAdminRole(userRole) && <span>
          ADMIN
        </span>}
        {IsStudentRole(userRole) && <span>
          STUDENT
        </span>}
        {IsMentorRole(userRole) && <span>
          MENTOR
        </span>}
        DASHBOARD PAGE!*/}
        </h1>
      {JSON.stringify(session)}
      <LogoutButton />
    </div>
  );
};

export default AdminPage;
