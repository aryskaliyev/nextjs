import LogoutButton from "@/components/auth/logout-button";
import { Card } from "@/components/ui/card";
import { currentSession } from "@/lib/auth";

const DashboardPage = async () => {
  // const session = await auth();
  // const userRole = session?.user.role;
  const session = await currentSession();
  return (
    <div className="bg-green-500">
      <h1>DASHBOARD PAGE! </h1>
      {JSON.stringify(session)}
      <LogoutButton />
    </div>
  );
};

export default DashboardPage;
