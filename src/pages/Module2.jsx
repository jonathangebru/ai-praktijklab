import { ModulePage } from "./ModulePage";
import { modules } from "../data/modules";

export function Module2() {
  const m = modules["ai-geletterdheid"];
  const progress = {
    "ai-geletterdheid": true,
  };
  return <ModulePage module={m} progress={progress} />;
}
