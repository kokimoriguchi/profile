import ReactDOM from "react-dom";

const OpenModal = ({ slide, closeModal }) => {
  const modalContents = (slide) => {
    switch (slide.altText) {
      case "シフト管理アプリ":
        return "/images/スクリーンショット 2023-06-04 15.21.25.png";
      case "DEMO商品管理システム":
        return "/images/スクリーンショット 2023-06-04 15.05.25.png";
      case "iSara模写":
        return "/images/localhost_3000_.png";
      case "Todoアプリ":
        return "/images/スクリーンショット 2023-06-04 15.26.46.png";
      case "ProGate模写":
        return "/images/_Users_kokimoriguchi_html_book_progate_index.html.png";
      default:
        return "ERROR";
    }
  };

  const imageUrl = modalContents(slide);
  return ReactDOM.createPortal(
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed left-0 top-0 w-screen flex items-center justify-center z-50 overflow-auto"
    >
      <div
        onClick={closeModal}
        className="fixed top-0 left-0 w-screen h-screen bg-gray-400 opacity-80 overflow-auto "
      ></div>
      <div className="fixed inset-0 flex items-center justify-center overflow-auto">
        <div className="max-h-screen w-1/2 m-auto">
          <img
            src={imageUrl}
            alt={slide.altText}
            className="object-contain max-h-full max-w-full"
            onClick={closeModal}
          />
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default OpenModal;
