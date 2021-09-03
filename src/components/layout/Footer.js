import FooterTitle from "../elements/ui/FooterTitle";
import FooterSubscribe from "../elements/ui/FooterSubscribe";
import FooterList from "../elements/widgets/Footer/FooterList";
import FooterMenuData from "../../db/footermenu.json";
import React, { useState } from "react";

export default function Footer() {
  const [newFooterMenu, setNewFooterMenu] = useState(FooterMenuData);

  const footerData1 = newFooterMenu["ABOUT US"].filter(
    (item) => item === "ABOUT US"
  );

  return (
    <footer>
      <div class="container-fluid" style={{ padding: 0 }}>
        <div class="footer">
          <div class="container">
            <div class="row">
              <FooterTitle />

              <FooterList
                footerMenuList={newFooterMenu["ABOUT US"]}
                footerMenuTitle={"ABOUT US"}
              />
              <FooterList
                footerMenuList={newFooterMenu["USEFUL LINKS"]}
                footerMenuTitle={"USEFUL LINKS"}
              />
              <FooterList
                footerMenuList={newFooterMenu["FOLLOW US"]}
                footerMenuTitle={"FOLLOW US"}
              />
              <FooterSubscribe />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
