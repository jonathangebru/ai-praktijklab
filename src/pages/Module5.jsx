import { ModulePage } from "./ModulePage";
import { modules } from "../data/modules";
import { useVoortgang } from "../lib/voortgang";

export function Module5() {
  const m = modules["groei-en-team"];
  const { lessonStates } = useVoortgang();
  return <ModulePage module={m} states={lessonStates} />;
}
