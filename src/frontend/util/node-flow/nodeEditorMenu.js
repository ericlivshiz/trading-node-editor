import React, { useState } from "react";
import typeIcon from './../../../img/money.png'
import triggerIcon from './../../../img/trigger-icon.png'
import conditionIcon from './../../../img/split-rgb.png'
import actionIcon from './../../../img/action-runner.png'
import TypesMenu from "./typesMenu";
import TriggersMenu from "./triggersMenu";
import ConditionsMenu from "./conditionsMenu";
import ActionsMenu from "./actionsMenu";
import './nodeEditorMenu.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const NodeEditorMenu = () => {
  const [openSections, setOpenSections] = useState({
    types: false,
    triggers: false,
    conditions: false,
    actions: false
  });

  const toggleSection = (section) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
  };

  const options /* keyof typeof openSections */ = {
    types: [typeIcon, TypesMenu],
    triggers: [triggerIcon, TriggersMenu],
    conditions: [conditionIcon, ConditionsMenu],
    actions: [actionIcon, ActionsMenu]
  }

  return (
    <div className="menu-container">
      {
        Object.entries(options).map(([toggle, [icon, MenuComponent]]) => {
          return (
            <div className="menu-section" key={toggle}>
              <h2 onClick={() => toggleSection(toggle)}>
                <img src={icon} alt={`${capitalizeFirstLetter(toggle)}-Icon`} /> {capitalizeFirstLetter(toggle)}
              </h2>
              {openSections[toggle] && <MenuComponent openSections={openSections} setOpenSections={setOpenSections} />}
            </div>
          )
        })
      }
    </div>
  );
}
/*{/* </div>

  return (
    <div className="menu-container">
        <div className="menu-section">
            <h2 onClick={() => toggleSection('types')}>
                <img src={typeIcon} alt="Types-Icon"/> Types
            </h2>
            {openSections.types && <TypesMenu openSections={openSections} setOpenSections={setOpenSections}/>}
        </div>
        <div className="menu-section">
            <h2 onClick={() => toggleSection('triggers')}>
                <img src={triggerIcon} alt="Triggers-Icon"/> Triggers
            </h2>
            {openSections.triggers && <TriggersMenu openSections={openSections} setOpenSections={setOpenSections}/>}
        </div>
        <div className="menu-section">
            <h2 onClick={() => toggleSection('conditions')}>
                <img src={conditionIcon} alt="Conditions-Icon"/> Conditions
            </h2>
            {openSections.conditions && <ConditionsMenu />}
        </div>
        <div className="menu-section">
            <h2 onClick={() => toggleSection('actions')}>
                <img src={actionIcon} alt="Actions-Icon"/> Actions
            </h2>
            {openSections.actions && <ActionsMenu />}
        </div>
    </div>
//   ); */
// };
// */
export default NodeEditorMenu;