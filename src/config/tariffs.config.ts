import type { TariffCardProps } from "@/components/molecules/types";

export const tariffs: TariffCardProps[] = [
    {
        imgUrl: "/images/cars/car-solaris.png",
        title: "Стандарт",
        cars: ["Hyundai Solaris"],
        features: [
            "4 пассажира, 2 чемодана",
            "Кондиционер",
            "Детское кресло по запросу"
        ],
        costs: "от 1500",
        hasBadge: false
    },
    {
        imgUrl: "/images/cars/car-octavia.png",
        title: "Комфорт",
        cars: ["Škoda Octavia"],
        features: [
            "4 пассажира, 3 чемодана",
            "Просторный задний ряд",
            "Вода в дорогу",
            "Встреча с табличкой"
        ],
        costs: "от 2200",
        hasBadge: true
    },
    {
        imgUrl: "/images/cars/car-k5.png",
        title: "Комфорт+",
        cars: ["Kia K5"],
        features: [
            "4 пассажира, 3 чемодана",
            "Кожаный салон",
            "Тише в дороге",
            "Встреча с табличкой"
        ],
        costs: "от 2900",
        hasBadge: false
    },
    {
        imgUrl: "/images/cars/car-hongqi.png",
        title: "Бизнес",
        cars: ["Hongqi H5"],
        features: [
            "3 пассажира, 3 чемодана",
            "Представительский салон",
            "Опытный водитель",
            "Встреча с табличкой"
        ],
        costs: "от 4500",
        hasBadge: false
    }
]