import Header from "components/Header";
import LetterForm from "components/LetterForm";
import LetterList from "components/LetterList";
import React from "react";

export default function Home() {

  return (
    <>
        <Header/>
        <LetterForm />
        <LetterList />
    </>
  );
}
