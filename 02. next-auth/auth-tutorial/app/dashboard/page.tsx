import LogoutButton from "@/components/auth/logout-button";
import { getCurrentSession } from "@/hooks/get-current-session";

const DashboardPage = async () => {
  const session = await getCurrentSession();
  const userRole = session?.user.role;
  return (
    <div className="bg-green-500">
      <h1>DASHBOARD PAGE! </h1>
      {JSON.stringify(session)}
      <LogoutButton />
    </div>
  );
};

export default DashboardPage;
