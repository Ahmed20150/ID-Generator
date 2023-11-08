import { useEffect, useState } from "react";
import { Button } from "./components/Button/Button";
import { InputField } from "./components/InputField/inputField";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

let finalName = "";
let finalDate = "";
let finalAddress = "";
let finalTitle = "";
let finalid = "";
let finalEnglish = "true";

const View1 = () => {
  //flag that determines whether or not the currently displayed language is english
  const [english, setEnglish] = useState(true);

  //the labels for the data form/ the main label on top of it
  const [main_label, setMainLabel] = useState("Create your Own ID!");
  const [button_label, setButtonlabel] = useState("Generate");
  const [name_label, setNameLabel] = useState("Name");
  const [date_label, setDateLabel] = useState("Date");
  const [address_label, setAddressLabel] = useState("Address");
  const [title_label, setTitleLabel] = useState("Title");
  const [id_label, setIdLabel] = useState("ID Number");

  //placeholder text that is present in each textfield (ph=placeholder)
  const [name_ph, setNameph] = useState("Enter your Name");
  const [date_ph, setDateph] = useState("Enter your Date of Birth");
  const [address_ph, setAddressph] = useState("Enter your Address");
  const [title_ph, setTitleph] = useState("Enter your Title");

  //the data that the user enters that we will store from the user to be displayed in view 2(on the id itself)
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  function boolTostring(boolValue: boolean): string {
    if (boolValue) {
      return "true";
    } else {
      return "false";
    }
  }

  //function that is called when the user has entered all the correct data and has pressed on the "Generate" Button, which saves the users data in the local storage so that it is not lost upon refresh
  function handleSubmit() {
    finalName = name;
    finalDate = date;
    finalAddress = address;
    finalTitle = title;
    finalid = id;
    finalEnglish = boolTostring(english);
    localStorage.setItem("name", finalName);
    localStorage.setItem("date", finalDate);
    localStorage.setItem("address", finalAddress);
    localStorage.setItem("title", finalTitle);
    localStorage.setItem("id", finalid);
    localStorage.setItem("english", finalEnglish);
  }

  //Function that is executed whenever the english language button is pressed, it checks if the language is NOT english, then adjusts the flag value and all other label values accordingly
  function handleEngClick() {
    if (!english) {
      setEnglish(true);
      setMainLabel("Create your Own ID!");
      setNameLabel("Name");
      setDateLabel("Date");
      setAddressLabel("Address");
      setTitleLabel("Title");
      setIdLabel("ID Number");
      setButtonlabel("Generate");
      setNameph("Enter your Name");
      setDateph("Enter your Date");
      setAddressph("Enter your Address");
      setTitleph("Enter your Title");
    }
  }

  //Function that is executed whenever the Arabic language button is pressed, it checks if the language is NOT arabic, then adjusts the flag value and all other label values accordingly
  function handleArClick() {
    if (english) {
      setEnglish(false);
      setMainLabel("!قم بإنشاء بطاقتك");
      setNameLabel("اسم");
      setDateLabel("تاريخ الميلاد");
      setAddressLabel("عنوان");
      setTitleLabel("لقب");
      setIdLabel("رقم الهوية");
      setButtonlabel("اصنع بطاقتك");
      setNameph("أدخل أسمك");
      setDateph("أدخل تاريخ ميلادك");
      setAddressph("أدخل عنوانك");
      setTitleph("أدخل لقبك");
    }
  }

  const generateId = () => {
    const idNumber = Math.random().toString(36).substring(2, 10);
    setId(idNumber);
    finalid = id;
  };

  useEffect(() => {
    generateId();
  }, []);

  return (
    <div className="view1">
      <div className="navbar">
        <Navbar />
      </div>

      <h1 className="mainText">{main_label}</h1>

      <form className="formbox">
        <div className="inputfields">
          <InputField
            label={name_label}
            placeholder={name_ph}
            type={"text"}
            id={"name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></InputField>
          <InputField
            label={date_label}
            placeholder={date_ph}
            type={"date"}
            id={"d.o.b"}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></InputField>
          <InputField
            label={address_label}
            placeholder={address_ph}
            type={"text"}
            id={"address"}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></InputField>
          <InputField
            label={title_label}
            placeholder={title_ph}
            type={"text"}
            id={"title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></InputField>
        </div>
      </form>

      <div className="lang-buttons">
        <Button type={""} label={"AR"} onClick={handleArClick} />
        <Button type={""} label={"ENG"} onClick={handleEngClick} />
      </div>

      <Link to="/View-ID">
        <Button type={"submit"} label={button_label} onClick={handleSubmit} />
      </Link>
    </div>
  );
};

export default View1;
