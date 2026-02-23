"use client";

import { useEffect } from "react";
import { initMetricPilot } from "@/lib/metricpilot";

export function MetricPilotProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initMetricPilot();
  }, []);

  return <>{children}</>;
}
