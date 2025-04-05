import QRCode from "react-qr-code"
import { useState } from "react";
export default function QRCodeGenerato() {
    const[qrCode, setQrCode] = useState("");
    const[input, setInput] = useState("");
    function handleQrCode() {
        setQrCode(input);
        setInput("");
    }
    return (
        <div>
            <div>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
                <button
                disabled ={input && input.trim() !== "" ?  false: true}
                 onClick={handleQrCode}>Generate</button>
            </div>
            <QRCode value={qrCode} id="qr-code" size={200}/>

        </div>
    )
}