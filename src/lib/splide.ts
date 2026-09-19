export const splideOptions = {
  type: "loop",
  perPage: 3,
  perMove: 1,
  gap: "24px",
  padding: 0,
  pagination: false,
  arrows: false,
  drag: true,
  speed: 800,
  easing: "cubic-bezier(0.22, 0.61, 0.36, 1)",
  breakpoints: {
    1024: { perPage: 2 },
    640: { perPage: 1 },
  },
};
