import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="col">
          <div className="head">FIND US HERE</div>
          <img src="Images/facebook.png" alt="" />
          <img src="Images/linkedin.png" alt="" />
          <img src="Images/insta.png" alt="" />
        </div>
        <div className="col">
          <div className="head">CONTACT INFO</div>

          <div className="Items">Call: (+91)9205757093</div>
          <div className="Items">contact@gagahealth.com</div>
          <div className="Items">
            Two Horizon Centre, 5th Floor Two Horizon Centre DLF, DLF Phase 5,
            Gurugram, Haryana 122002
          </div>
        </div>
        <div className="col">
          <div className="head">QUICK LINKS</div>
          <div className="Items">About us</div>
          <div className="Items">Blog</div>
          <div className="Items">Faq</div>
          <div className="Items">Doctors</div>
          <div className="Items">Contact us</div>
        </div>
      </div>
      <div className="copyright">
        <div className="body">&copy; Shruti Singh</div>
      </div>
    </>
  );
}
