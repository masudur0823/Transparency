import { useState } from "react";
import edit from "../assets/images/editor_icons/editIcon.svg";
import copy from "../assets/images/editor_icons/copy.svg";
import save from "../assets/images/editor_icons/save.svg";
import language from "../assets/images/editor_icons/language-switch.svg";
import msgedit from "../assets/images/editor_icons/msgedit.svg";
import shre from "../assets/images/editor_icons/share.svg";

function TextEditor() {
  const [text, setText] = useState("");
  const handleSave = () => {
    alert(text);
  };
  const handleEdit = () => {};
  const handleCopy = () => {};
  const handleLanguage = () => {};
  const handleMsgEdit = () => {};
  const handleShre = () => {};
  return (
    <div id="textarea" className="bg-my_grey pt-3 md:pt-8 pb-3 px-3 lg:px-5 xl:px-8 rounded-xl">
      <textarea
        name="w3review"
        // rows={4}
        // cols={30}
        className="bg-transparent resize-none text-area w-full h-36 md:h-96 "
        placeholder="Fill in car information transparently below."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex gap-3 mt-2">
        <button onClick={handleEdit}>
          <img src={edit} alt="" />
        </button>
        <button onClick={handleCopy}>
          <img src={copy} alt="" />
        </button>
        <button onClick={handleSave}>
          <img src={save} alt="" />
        </button>
        <button onClick={handleLanguage}>
          <img src={language} alt="" />
        </button>
        <button onClick={handleMsgEdit}>
          <img src={msgedit} alt="" />
        </button>
        <button onClick={handleShre}>
          <img src={shre} alt="" />
        </button>
      </div>
    </div>
  );
}

export default TextEditor;
