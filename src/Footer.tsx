const Footer = () => {
  return (
    <div className="footer">
      <h4>Enjoy your brand new ID {localStorage.getItem("name")}!!</h4>
    </div>
  );
};

export default Footer;
