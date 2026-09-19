import type { TariffCardProps } from "@/components/molecules/types";

export const tariffs: TariffCardProps[] = [
  {
    imgUrl: "/images/cars/car-solaris.png",
    title: "Стандарт",
    description:
      "Надёжный автомобиль для городских поездок, трансфера в аэропорт и коротких маршрутов.",
    cars: ["Hyundai Solaris"],
    features: [
      "4 пассажира, 2 чемодана",
      "Кондиционер",
      "Детское кресло по запросу",
    ],
    costs: "от 1500",
    hasBadge: false,
  },
  {
    imgUrl: "/images/cars/car-octavia.png",
    title: "Комфорт",
    description:
      "Комфортный трансфер для города и междугородних поездок с просторным салоном и встречей с табличкой.",
    cars: ["Škoda Octavia"],
    features: [
      "4 пассажира, 3 чемодана",
      "Просторный задний ряд",
      "Вода в дорогу",
      "Встреча с табличкой",
    ],
    costs: "от 2200",
    hasBadge: true,
  },
  {
    imgUrl: "/images/cars/car-k5.png",
    title: "Комфорт+",
    description:
      "Премиальный уровень комфорта для длительной дороги, деловых поездок и трансфера из аэропорта.",
    cars: ["Kia K5"],
    features: [
      "4 пассажира, 3 чемодана",
      "Кожаный салон",
      "Тише в дороге",
      "Встреча с табличкой",
    ],
    costs: "от 2900",
    hasBadge: false,
  },
  {
    imgUrl: "/images/cars/car-hongqi.png",
    title: "Бизнес",
    description:
      "Представительский автомобиль с опытным водителем для деловых встреч, важных поездок и VIP-трансфера.",
    cars: ["Hongqi H5"],
    features: [
      "3 пассажира, 3 чемодана",
      "Представительский салон",
      "Опытный водитель",
      "Встреча с табличкой",
    ],
    costs: "от 4500",
    hasBadge: false,
  },
];
