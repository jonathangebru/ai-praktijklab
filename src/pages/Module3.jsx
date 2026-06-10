import { ModulePage } from "./ModulePage";
import { modules } from "../data/modules";
import { useVoortgang } from "../lib/voortgang";

export function Module3() {
  const m = modules["ai-geletterdheid-onderwijzen"];
  const { lessonStates } = useVoortgang();
  return <ModulePage module={m} states={lessonStates} />;
}
