import React from "react";
import ListCards from "./ListCards";
import boy from "../assets/christmas_boy_pic.jpeg";
import billGif from "../assets/billGif.gif";
import boygif from "../assets/christmas_boy_gif.gif";
import girlgif from "../assets/christmas_girl_gif.gif";
import girlsanta from "../assets/christmas-girl-santa-laugh.gif";
import babychristmas from "../assets/babychristmas.gif";
import girlAnimeSanta from "../assets/girlAnimeSanta.gif";
import colingif from "../assets/colingif.gif";
import brooksGif from "../assets/brooksGif.gif";
import noahGif from "../assets/noahGif.gif";
import lawsonGif from "../assets/lawsonGif.gif";
import damianGif from "../assets/damianGif.gif";

function FamilyMemberList() {
  const giftListDetails = [
    {
      id: 1,
      name: "Martin",
      link: "https://www.amazon.com/hz/wishlist/ls/3EBI9JMY30HCS?ref_=wl_share",
      pic: boygif,
      linkTitle: "Martin's Wishlist",
    },
    {
      id: 2,
      name: "Damian",
      link: "https://www.amazon.com/hz/wishlist/ls/2Z5UUDDUWS7AX?ref_=wl_share",
      pic: damianGif,
      linkTitle: "Damian's Wishlist",
    },
    {
      id: 3,
      name: "Melissa",
      link: "https://amazon.com",
      pic: girlgif,
      linkTitle: "Melissa's Wishlist",
    },
    {
      id: 4,
      name: "Bill",
      link: "https://amazon.com",
      pic: billGif,
      linkTitle: "Bill's Wishlist",
    },
    {
      id: 5,
      name: "Lauren",
      link: "https://www.amazon.com/hz/wishlist/ls/3AIK24Z6DHK6J?ref_=wl_share",
      pic: girlsanta,
      linkTitle: "Lauren's Wishlist",
    },
    {
      id: 6,
      name: "Colin",
      link: "https://www.amazon.com/hz/wishlist/ls/DINY34X9YNW?ref_=wl_share",
      pic: colingif,
      linkTitle: "Colin's Wishlist",
    },
    {
      id: 10,
      name: "Noah",
      link: "https://amazon.com",
      pic: noahGif,
      linkTitle: "Noah's Wishlist",
    },
    {
      id: 11,
      name: "Lily",
      link: "https://www.amazon.com/hz/wishlist/ls/129WDZ90U36TZ?type=wishlist",
      pic: girlAnimeSanta,
      linkTitle: "Lily's Wishlist",
    },
    {
      id: 7,
      name: "Lawson",
      link: "https://www.amazon.com/hz/wishlist/ls/15VKBLF9P9G8I?ref_=wl_share",
      pic: lawsonGif,
      linkTitle: "Lawson's Wishlist",
    },
    {
      id: 8,
      name: "Brooks",
      link: "https://www.amazon.com/hz/wishlist/ls/MAL3VD5J9YIQ?ref_=wl_share",
      pic: brooksGif,
      linkTitle: "Brooks' Wishlist",
    },
    {
      id: 9,
      name: "Penny",
      link: "https://www.amazon.com/hz/wishlist/ls/430HR16Q2DDQ?ref_=wl_share",
      pic: babychristmas,
      linkTitle: "Penny's Wishlist",
    },
  ];
  return <ListCards list={giftListDetails} />;
}

export default FamilyMemberList;
