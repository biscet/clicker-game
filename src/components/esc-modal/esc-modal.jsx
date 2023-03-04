import React from "react";
import ReactDOM from "react-dom";
import { useStore } from "effector-react";

import { $open_esc_modal, change_state_esc_modal } from "@models/esc-modal";
import { game_version } from "@utils/constants";
import "./esc-modal.scss";

export function EscButton() {
  return (
    <button className="esc-button" onClick={change_state_esc_modal}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export function EscModal() {
  const opened_modal = useStore($open_esc_modal);

  return opened_modal
    ? ReactDOM.createPortal(
        <div className="esc-modal">
          <div className="modal">
            <div className="modal__header">
              <h1>Clicker Game</h1>
              <p>v {game_version}</p>
            </div>
            <button className="modal__button" onClick={change_state_esc_modal}>
              Продолжить
            </button>
            <button className="modal__button">Настройки</button>
            <button className="modal__button">Помощь</button>
            <button className="modal__button" onClick={() => window.close()}>
              Выход
            </button>
          </div>
        </div>,
        document.getElementById("root-modal")
      )
    : null;
}
