import { Header } from "@/components/Header";
import { DashboardCard } from "@/components/DashboardCard";
import { StatsCard } from "@/components/StatsCard";
import { UserPlus, Plus, List, IndianRupee, FileText, Users } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          <StatsCard
            title="Today's Sevas"
            value="12"
            icon={List}
            variant="primary"
          />
          <StatsCard
            title="Total Collection"
            value="₹25,000"
            icon={IndianRupee}
            variant="success"
          />
          <StatsCard
            title="Pending Payments"
            value="5"
            icon={FileText}
            variant="warning"
          />
          <StatsCard
            title="Total Devotees"
            value="156"
            icon={Users}
            variant="default"
          />
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <DashboardCard
              title="New Registration"
              icon={UserPlus}
              to="/devotees"
              gradient
            />
            <DashboardCard
              title="Add Seva"
              icon={Plus}
              to="/sevas/new"
              variant="success"
            />
            <DashboardCard
              title="Seva List"
              icon={List}
              to="/sevas"
              variant="default"
            />
            <DashboardCard
              title="Pending Payments"
              icon={IndianRupee}
              to="/sevas?filter=pending"
              variant="warning"
            />
            <DashboardCard
              title="Reports"
              icon={FileText}
              to="/reports"
              variant="default"
            />
            <DashboardCard
              title="All Devotees"
              icon={Users}
              to="/devotees"
              variant="default"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
