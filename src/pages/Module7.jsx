import { ModulePage } from "./ModulePage";
import { modules } from "../data/modules";
import { useVoortgang } from "../lib/voortgang";

export function Module7() {
  const m = modules["toegankelijkheid-en-inclusie"];
  const { lessonStates } = useVoortgang();
  return <ModulePage module={m} states={lessonStates} />;
}
