// import React from 'react'
import Container from "../../../components/ui/Container";
import { Tabs, type Tab } from "../../../components/ui/Tabs";
import { useNewColaborator } from "./hooks/useNewColaborator";

import Header from "./components/NewColabolatorComponents/Header";
import { PersonalDataForm } from "./components/NewColabolatorComponents/PersonalDataForm";
import { Directions } from "./components/NewColabolatorComponents/Directions";
import FiscalData from "./components/NewColabolatorComponents/FiscalData";
import { AditionalData } from "./components/NewColabolatorComponents/AditionalData";

import ButtonSection from "./components/NewColabolatorComponents/ButtonSection";

const CrearEmpleado = () => {
 
  const {
    handleChange,
    errors,
    newColaborator,
    activeTab,
    setActiveTab,
    loading,
    handleSubmit
  } = useNewColaborator();
  const tabs: Tab[] = [
    {
      id: "inicio",
      label: "🏠 Datos Personales",
      content: (
        <PersonalDataForm {...{ newColaborator, handleChange, errors }} />
      ),
    },
    {
      id: "domicilio",
      label: "🏠 Domicilio",
      content: <Directions {...{ newColaborator, handleChange, errors }} />,
    },
    {
      id: "fiscal",
      label: "💼 Datos Fiscales",
      content: <FiscalData {...{ newColaborator, handleChange, errors }} />,
    },
    {
      id: "laboral",
      label: "🏢 Datos Laborales",
      content: <AditionalData {...{ newColaborator, handleChange, errors }} />,
    },
  ];
  return (
    <Container>
      <Header />
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
     <ButtonSection {...{ tabs, activeTab, setActiveTab, loading,handleSubmit }} />
    </Container>
  );
};

export default CrearEmpleado;
