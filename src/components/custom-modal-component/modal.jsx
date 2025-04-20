

export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">&times;</span>
          <h2>{header ? header : "Modal Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>this is a modal body</p>
            </div>
          )}
        </div>
        <div className="footer">
            {
                footer ? footer : <h2>this is a modal footer</h2>
            }
        </div>
      </div>
    </div>
  );
}
