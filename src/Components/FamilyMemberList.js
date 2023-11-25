import React from "react";
import ListCards from "./ListCards";

function FamilyMemberList() {
  const giftListDetails = [
    {
      id: 1,
      name: "Martin",
      link: "https://www.amazon.com/hz/wishlist/ls/3EBI9JMY30HCS?ref_=wl_share",
      pic: "M",
      linkTitle: "Martin's Wishlist",
    },
    {
      id: 2,
      name: "Melissa",
      link: "https://www.amazon.com/hz/wishlist/ls/DC1N3LUJPII6?ref_=wl_share",
      pic: "M",
      linkTitle: "Melissa's Wishlist",
    },
    {
      id: 3,
      name: "Damian",
      link: "https://www.amazon.com/hz/wishlist/ls/2Z5UUDDUWS7AX?ref_=wl_share",
      pic: "D",
      linkTitle: "Damian's Wishlist",
    },
    {
      id: 4,
      name: "Lauren",
      link: "https://www.amazon.com/hz/wishlist/ls/3AIK24Z6DHK6J?ref_=wl_share",
      pic: "L",
      linkTitle: "Lauren's Wishlist",
    },
    {
      id: 5,
      name: "Colin",
      link: "https://www.amazon.com/hz/wishlist/ls/DINY34X9YNW?ref_=wl_share",
      pic: "C",
      linkTitle: "Colin's Wishlist",
    },
    {
      id: 6,
      name: "Noah",
      link: "https://www.amazon.com/hz/wishlist/ls/2UWVX7RIMN6OY?ref_=wl_share",
      pic: "N",
      linkTitle: "Noah's Wishlist",
    },
    {
      id: 7,
      name: "Claire",
      link: "https://www.amazon.com/hz/wishlist/ls/28Q2USBS8IU9H?ref_=wl_share",
      pic: "C",
      linkTitle: "Clarie's Wishlist",
    },
    {
      id: 8,
      name: "Lawson",
      link: "https://www.amazon.com/hz/wishlist/ls/15VKBLF9P9G8I?ref_=wl_share",
      pic: "L",
      linkTitle: "Lawson's Wishlist",
    },
    {
      id: 9,
      name: "Brooks",
      link: "https://www.amazon.com/hz/wishlist/ls/MAL3VD5J9YIQ?ref_=wl_share",
      pic: "B",
      linkTitle: "Brooks' Wishlist",
    },
    {
      id: 10,
      name: "Penny",
      link: "https://www.amazon.com/hz/wishlist/ls/430HR16Q2DDQ?ref_=wl_share",
      pic: "P",
      linkTitle: "Penny's Wishlist",
    },
  ];
  return <ListCards list={giftListDetails} />;
}

export default FamilyMemberList;
