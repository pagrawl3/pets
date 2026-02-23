"use client";

import { metricpilot } from "@metricpilot/sdk";

let initialized = false;

export function initMetricPilot() {
  if (initialized) return;
  initialized = true;
  
  metricpilot.init({
    apiKey: process.env.NEXT_PUBLIC_METRICPILOT_API_KEY || "METRICPILOT_API_KEY",
  });
}

export { metricpilot };
