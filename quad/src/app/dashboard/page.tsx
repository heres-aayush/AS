"use client";

import Navigation from "@/components/navigation"
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { CommuterDashboard } from "@/components/commuter-dashboard";
import { ParentDashboard } from "@/components/parent-dashboard";
import { DriverDashboard } from "@/components/driver-dashboard";
import { AgencyDashboard } from "@/components/agency-dashboard";

export default function Home() {
  const [userType, setUserType] = useState<"commuter" | "parent" | "driver" | "agency">("commuter");


  return (
    <DashboardLayout userType={userType} onUserTypeChange={setUserType}>
      <Navigation />
      {userType === "commuter" && <CommuterDashboard />}
      {userType === "parent" && <ParentDashboard />}
      {userType === "driver" && <DriverDashboard />}
      {userType === "agency" && <AgencyDashboard />}
    </DashboardLayout>
  );
}
