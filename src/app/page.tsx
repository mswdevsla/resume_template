import { PrintButton } from "@/components/print-button";
import { ResumeDocument } from "@/components/resume-document";
import { resume } from "@/content/resume";

export default function Home() {
  return (
    <>
      <PrintButton />
      <main className="resume-stage">
        <ResumeDocument resume={resume} />
      </main>
    </>
  );
}
