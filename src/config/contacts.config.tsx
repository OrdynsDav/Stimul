import { AvitoIcon } from "@/components/atoms/Icons/AvitoIcon";
import { MaxIcon } from "@/components/atoms/Icons/MaxIcon";
import { TelegramIcon } from "@/components/atoms/Icons/TelegramIcon";
import { WhatsAppIcon } from "@/components/atoms/Icons/WhatsAppIcon";

export const contacts = [
  {
    href: "https://t.me/TRANSFER_STIMUL",
    name: "Telegram",
    icon: <TelegramIcon />,
  },
  {
    href: "https://wa.me/message/F55MCJ6QOOSGL1",
    name: "WhatsApp",
    icon: <WhatsAppIcon />,
  },
  {
    href: "https://max.ru/u/f9LHodD0cOI-7bmWpPdMK8Poc0LpqTnwIIwFYgYt0zgmoyg_5t7PRaTlifY",
    name: "Max",
    icon: <MaxIcon />,
  },
  {
    href: "https://www.avito.ru/user/26099acf169d7314cd3af3b0de06b276/profile?src=sharing",
    name: "Avito",
    icon: <AvitoIcon />,
  }
];

export const contactsObject = {
  avito: {
    href: "https://www.avito.ru/user/26099acf169d7314cd3af3b0de06b276/profile?src=sharing"
  }
}