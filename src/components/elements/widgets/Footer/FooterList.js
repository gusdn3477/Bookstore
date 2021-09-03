import React, { useState } from "react";

export default function FooterList({ footerMenuList, footerMenuTitle }) {
  const [newList, setNewList] = useState(footerMenuList);

  const menuList = newList.map((item) => <li key={item.id}>{item.name}</li>);

  return (
    <div class="col-12 col-md-2">
      <p class="menuTitle">{footerMenuTitle}</p>
      <ul>{menuList}</ul>
    </div>
  );
}
