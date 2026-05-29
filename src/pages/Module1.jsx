import { ModulePage } from "./ModulePage";
import { modules } from "../data/modules";

export function Module1() {
  const m = modules["basiscursus-ai"];
  // Mock progress — first three lessons completed
  const progress = {
    "wat-is-ai": true,
    "wat-kan-ai": true,
    "prompting-voor-docenten": true,
  };
  return <ModulePage module={m} progress={progress} />;
}
