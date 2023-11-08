import { useRef } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer";
import JsPDF from "jspdf";

const pdfLabel = localStorage.getItem("name") + "'s" + " ID.pdf";

const generatePDF = async () => {
  const pdf = new JsPDF("landscape", "pt", "a4");
  const pdfElement = document.getElementById("pdf");

  if (pdfElement) {
    pdfElement.style.visibility = "visibile";
    pdfElement.className = "";
    pdf.html(pdfElement).then(() => {
      pdf.save(pdfLabel);
    });
  }
};
const View2 = () => {
  const view2Ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="view2" id="view2" ref={view2Ref}>
        <Navbar />
        <Card />
        <Footer />
      </div>

      <div className="pdf" id="pdf">
        <Footer />
        <Card />
        <Navbar />
      </div>
    </div>
  );
};

export default View2;
// eslint-disable-next-line react-refresh/only-export-components
export { generatePDF };
