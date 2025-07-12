"use client";
import Image from "next/image";
import "./style.css";
import Header from "../../components/header"
import Footer from "../../components/footer"
import FormWizardSample from "../../components/wizardform"

export default function GetStarted() {
  return (
    
    <>
    {/* Header */}
     <Header />


    {/* Form Start */}

        <FormWizardSample />


    {/* Footer */}
     <Footer />
    

    </>
  );
}
