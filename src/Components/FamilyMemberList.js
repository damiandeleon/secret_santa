import React from "react";
import ListCards from "./ListCards";
import boy from "../assets/christmas_boy_pic.jpeg";
import billGif from "../assets/billGif.gif";
import boygif from '../assets/christmas_boy_gif.gif';
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
      link: "https://amazon.com",
      pic: boygif,
      linkTitle: "Martin's Wishlist",
    },
    {
      id: 2,
      name: "Damian",
      link: "https://amazon.com",
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
      link: "https://amazon.com",
      pic: girlsanta,
      linkTitle: "Lauren's Wishlist",
    },
    {
      id: 6,
      name: "Colin",
      link: "https://amazon.com",
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
      link: "https://amazon.com",
      pic: girlAnimeSanta,
      linkTitle: "Lily's Wishlist",
    },
    {
      id: 7,
      name: "Lawson",
      link: "https://amazon.com",
      pic: lawsonGif,
      linkTitle: "Lawson's Wishlist",
    },
    {
      id: 8,
      name: "Brooks",
      link: "https://amazon.com",
      pic: brooksGif,
      linkTitle: "Brooks' Wishlist",
    },
    {
      id: 9,
      name: "Penny",
      link: "https://amazon.com",
      pic: babychristmas,
      linkTitle: "Penny's Wishlist",
    },
  ];
  return <ListCards list={giftListDetails} />;
}

export default FamilyMemberList;
