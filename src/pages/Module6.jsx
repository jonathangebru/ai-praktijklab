import { ModulePage } from "./ModulePage";
import { modules } from "../data/modules";
import { useVoortgang } from "../lib/voortgang";

export function Module6() {
  const m = modules["werkdruk-en-organisatie"];
  const { lessonStates } = useVoortgang();
  return <ModulePage module={m} states={lessonStates} />;
}
