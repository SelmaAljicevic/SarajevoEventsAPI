import { EVENT_TYPES } from "../enums/eventTypes.enum.js";

export const events = [
  {
    name: "Latino night",
    place: "Sloga",
    description: "Some content",
    image_url:
      "https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/71572692_3424085680964725_2509676590804238336_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Pr4Xsji6iAYAX8WAQpp&_nc_ht=scontent.fsjj1-1.fna&oh=00_AT9amLCoN5PbtM6BSAG5ymc6Xo73K7_NlIGyCwYBm9Kf-Q&oe=63447E65",
    category: EVENT_TYPES.DANCE,
    popularity: 0.9,
  },
  {
    name: "Romeo and Juliet",
    place: "BKC",
    description: "Some content",
    image_url: "https://bkc.ba/wp-content/uploads/vh-bkc-10-2-1.png",
    category: EVENT_TYPES.THEATRE,
    popularity: 0.7,
  },
  {
    name: "Live concert",
    place: "Sloga",
    description: "Some content",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/BBI_Shopping_and_Business_Center.jpg",
    category: EVENT_TYPES.MUSIC,
    popularity: 0.85,
  },
];
