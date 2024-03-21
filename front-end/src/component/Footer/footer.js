import React from "react";

import Instagram from "../../image/footer_image/instagram.png";
import Eum from "../../image/footer_image/eum.png";

function Footer() {
  return (
    <footer className="flex flex-col bottom-0 items-center mt-10 bg-slate-800 text-white">
      <div className="flex space-x-4 mt-3">
        <a href="https://www.instagram.com/gwnu_eum_wonju/" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="Instagram" className="h-8 w-8" />
        </a>
        <a href="https://gwnuclubs.modoo.at/" target="_blank" rel="noopener noreferrer">
          <img src={Eum} alt="Eum" className="h-8 w-8 rounded-full" />
        </a>
      </div>

      <p className="mt-3 text-xs">
        강릉원주대학교 원주 캠퍼스 | 총동아리 연합회 'EUM'
      </p>

      <p className="mt-1 text-xs">
        컴퓨터공학과 오연택 | e-mail : oot309@naver.com
      </p>

      <p className="mt-1 text-xs">
        컴퓨터공학과 유재현 | e-mail : jhyoo1203@gmail.com
      </p>

      <p className="mt-1 mb-3 text-sm">
        Copyright D:D:D 2024. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
