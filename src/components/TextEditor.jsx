import { useState } from "react";
import edit from "../assets/images/editor_icons/editIcon.svg";
import copy from "../assets/images/editor_icons/copy.svg";
import save from "../assets/images/editor_icons/save.svg";
import language from "../assets/images/editor_icons/language-switch.svg";
import msgedit from "../assets/images/editor_icons/msgedit.svg";
import shre from "../assets/images/editor_icons/share.svg";
import tick from "../assets/images/icons/tickcircle-yellow.svg";
import CopyToClipboard from "react-copy-to-clipboard";

function TextEditor() {
  const [text, setText] = useState("");
  const [done, setDone] = useState("hidden");
  const [share, setShare] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleSave = () => {
    setModalText("Done")
    setDone("block");
    const timer = setTimeout(() => {
      setDone("hidden");
    }, 1000);
    return () => clearTimeout(timer);
  };

  const handleEdit = () => {};
  const handleLanguage = () => {};
  const handleMsgEdit = () => {};
  const handleShre = () => {
    setShare(!share);
  };

  return (
    <div
      id="textarea"
      className="bg-my_grey pt-3 md:pt-8 pb-3 px-3 lg:px-5 xl:px-8 rounded-xl relative"
    >
      <textarea
        name="w3review"
        // rows={4}
        // cols={30}
        className="bg-transparent resize-none text-area w-full h-64 md:h-96 "
        placeholder="Fill in car information transparently below."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* done text */}
      <div
        className={`${done} inline-block text-center bg-white p-10 rounded-lg shadow-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <img src={tick} className="mx-auto" alt="" />
        <p className="text-my_orange">{modalText}</p>
      </div>
      {/* share div */}
      {share && (
        <div
          className={`bg-white p-5 md:p-10 rounded-lg shadow-lg w-19/20 md:w-3/4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          <h4 className="text-lg text-my_black4 font-bold">Share Asset</h4>
          <p className="text-mid_grey text-sm mt-2">
            Easily send links to potential buyer
          </p>
          <h4 className="text-lg text-my_black4 font-bold mt-3">
            Link to description
          </h4>
          <div className="relative">
            <input
              type="text"
              value={"https://transparency/sahre-asset/a7fsufjadifadf"}
              className="bg-my_grey2 py-3 px-2 box-border w-full rounded-lg"
            />
            <button className="py-2 px-3 bg-my_orange font-semibold rounded-lg absolute right-1 top-1/2 -translate-y-1/2">
              Copy
            </button>
          </div>
        </div>
      )}

      {/* buttons */}
      <div className="flex gap-3 mt-2">
        <button onClick={handleEdit}>
          <img src={edit} alt="" />
        </button>
        <CopyToClipboard
          text={text}
          onCopy={(v) => {
            setText(v);
            setModalText("Copied")
            setDone("block");
            const timer = setTimeout(() => {
              setDone("hidden");
            }, 1000);
            return () => clearTimeout(timer);
          }}
          className="cursor-pointer"
        >
          <img src={copy} alt="" />
        </CopyToClipboard>
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
