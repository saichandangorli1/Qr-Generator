import React, { useState } from "react";

const App = () => {
  const [qrText, setQrText] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateCode = () => {
    if (qrText.length > 0) {
      let encodedText = encodeURIComponent(qrText);
      // let src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodedText}`
      let src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodedText}&bgcolor=d9d9d9`;

      setQrCode(src);
    }
  };
  const handleChange = (e) => {
    setQrText(e.target.value);
  };

  const handleCopy = (e) => {
    navigator.clipboard.writeText(qrText);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div class="relative h-screen w-screen bg-slate-950">
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] flex justify-center items-center flex-col">
        <div className={`py-2 px-8 w-72 sm:w-96 ${qrCode ? "sm:h-[484px]" : "sm:h-[284px]"} ${qrCode ? "h-[434px" : "h-[300px"} ] bg-[#ffffff69] rounded-xl `}>
          <h1 className="text-center font-bold text-2xl sm:text-3xl text-slate-950 mt-5">
            Scan QR Code
          </h1>
          <p className="text-center font-semibold text-[10px] sm:text-sm text-slate-100 mt-2">
            Scan this Qr Code in -app to verify device.
          </p>
          {qrCode && (
            <div className="">
              <div className="p-2 rounded-md bg-[#ffffffb2] flex items-center justify-center my-8 w-1/2 mx-auto ">
                <img src={qrCode} alt="" />
              </div>
            </div>
          )}

          <div className="h-[2px] w-full bg-slate-800 mt-4"></div>

          <div className="my-5 flex gap-2 items-center">
            <input
              type="text"
              value={qrText}
              onChange={handleChange}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  generateCode();
                }
              }}
              name=""
              id=""
              className="rounded-md px-2 py-2 font-semibold outline-none w-[180px] sm:w-[280px]"
            />
            <button
              className=" bg-blue-700 hover:bg-blue-800 text-white  size-10 rounded-md"
              onClick={handleCopy}
            >
              <img
                src="./copy.gif"
                className="mix-blend-color-burn"
                alt="copy"
              />
            </button>
          </div>
          <button
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md font-semibold " 
            disabled={qrText.length < 0}
            onClick={generateCode}
          >
            Continue
          </button>
        </div>
        <footer className="bg-[#ddd] text-slate-950 text-center p-4 w-screen fixed bottom-0 font-bold flex justify-center items-center flex-row gap-2">
          <div>
            <img src="./qr-code.gif" className="size-10 mix-blend-color-burn" alt="" />
          </div>
         <div>
         <p>
          QRCreate. Created by Saichandan Gorli
          </p>
          <p>
            © {currentYear}. All rights are reserved.
          </p>
         </div>
        </footer>
        );
      </div>
    </div>
  );
};

export default App;
