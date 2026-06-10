import { ModulePage } from "./ModulePage";
import { modules } from "../data/modules";
import { useVoortgang } from "../lib/voortgang";

export function Module4() {
  const m = modules["ai-beleid"];
  const { lessonStates } = useVoortgang();
  return <ModulePage module={m} states={lessonStates} />;
}
