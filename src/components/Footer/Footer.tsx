import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-300 max-w-[80%] m-auto mt-7 flex flex-wrap justify-between h-16 ">
      <span className="text-sm  p-5 text-gray-500 sm:text-center dark:text-gray-400 ">
        © 2024 Diego Alami All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 p-5 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            className="mx-4 "
          >
            <InstagramIcon style={{ color: "black" }} />
          </Link>
        </li>
        <li>
          <Link
            href="https://web.telegram.org/k/"
            target="_blank"
            className="mx-4 "
          >
            <TelegramIcon style={{ color: "black" }} />
          </Link>
        </li>
        <li>
          <Link
            href="https://x.com/?lang=es"
            target="_blank"
            className="mx-4 "
          >
            <XIcon style={{ color: "black" }} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.facebook.com/?locale=es_LA"
            target="_blank"
            className="mx-4 "
          >
            <FacebookIcon style={{ color: "black" }} />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
