import { Link } from "react-router-dom";
import { Button } from "./components/Button/Button";
import { useEffect, useState } from "react";
import { generatePDF } from "./View2";

const Card = () => {
  const [download_label, setDownloadlabel] = useState("Download");
  const [create_label, setCreatelabel] = useState("Create a New ID");
  const [date_label, setDateLabel] = useState("Date");
  const [address_label, setAddressLabel] = useState("Address");
  const [id_label, setIdLabel] = useState("ID Number");

  const [english, setEnglish] = useState(true);
  const [class_lang, setClassLang] = useState("id-static-info-eng");

  //Function that always runs at the first generation of the page, where it basically checks what was the final language chosen in view 1 before pressing "generate", that way the users preferred language is saved and is consistent between each view
  function baseLanguage() {
    if (localStorage.getItem("english") === "true") {
      setEnglish(true);
      setDownloadlabel("Download");
      setCreatelabel("Create a New ID");
      setDateLabel("Date of Birth:");
      setAddressLabel("Address:");
      setIdLabel("ID Number:");
      setClassLang("id-static-info-eng");
    } else {
      setEnglish(false);
      setDownloadlabel(":تحميل");
      setCreatelabel(":إنشاء بطاقة جديدة");
      setDateLabel(":تاريخ الميلاد");
      setAddressLabel(":عنوان");
      setIdLabel(":رقم الهوية");
      setClassLang("id-static-info-ar");
    }
  }
  //Function that is executed whenever the english language button is pressed, it checks if the language is NOT english, then adjusts the flag value and all other label values accordingly
  function handleEngClick() {
    if (!english) {
      setEnglish(true);
      setDownloadlabel("Download");
      setCreatelabel("Create a New ID");
      setDateLabel("Date of Birth:");
      setAddressLabel("Address:");
      setIdLabel("ID Number:");
      setClassLang("id-static-info-eng");
    }
  }

  //Function that is executed whenever the Arabic language button is pressed, it checks if the language is NOT arabic, then adjusts the flag value and all other label values accordingly
  function handleArClick() {
    if (english) {
      setEnglish(false);
      setDownloadlabel("تحميل");
      setCreatelabel("إنشاء بطاقة جديدة");
      setDateLabel(":تاريخ الميلاد");
      setAddressLabel(":عنوان");
      setIdLabel(":رقم الهوية");
      setClassLang("id-static-info-ar");
    }
  }

  useEffect(() => {
    baseLanguage();
  }, []);

  return (
    <div>
      <div className="ID-card">
        <div className="white-stripe">
          <h4>{localStorage.getItem("name")}</h4>
          <p>{localStorage.getItem("title")}</p>
        </div>

        {english ? (
          <div className="id-text-container">
            <div className={class_lang}>
              <p>{date_label}</p>
              <p>{address_label}</p>
              <p>{id_label}</p>
            </div>

            <div className="id-dynamic-info">
              <p>{localStorage.getItem("date")}</p>
              <p>{localStorage.getItem("address")} </p>
              <p>{localStorage.getItem("id")}</p>
            </div>
          </div>
        ) : (
          <div className="id-text-container">
            <div className="id-dynamic-info">
              <p>{localStorage.getItem("date")}</p>
              <p>{localStorage.getItem("address")} </p>
              <p>{localStorage.getItem("id")}</p>
            </div>

            <div className={class_lang}>
              <p>{date_label}</p>
              <p>{address_label}</p>
              <p>{id_label}</p>
            </div>
          </div>
        )}
      </div>

      <div className="lang-buttons">
        <Button type={""} label={"AR"} onClick={handleArClick} />
        <Button type={""} label={"ENG"} onClick={handleEngClick} />
      </div>

      <div className="view2-buttons">
        <Link to="/">
          {" "}
          <Button label={create_label} type={""} />{" "}
        </Link>
        <Button label={download_label} type={""} onClick={generatePDF} />
      </div>
    </div>
  );
};

export default Card;
