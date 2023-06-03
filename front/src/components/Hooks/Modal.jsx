const OpenModal = ({ slide, closeModal }) => {
  const modalContents = (slide) => {
    switch (slide.altText) {
      case "シフト管理アプリ":
        return "/images/528C3401-49E1-4E22-99DF-4A9E70E726A8_1_105_c.jpeg";
      case "DEMO商品管理システム":
        return "/images/528C3401-49E1-4E22-99DF-4A9E70E726A8_1_105_c.jpeg";
      case "iSara模写":
        return "/images/camera-g3583b09a1_640.jpg";
      case "Todoアプリ":
        return "/images/bird-g6d3e981be_640.jpg";
      case "ProGate模写":
        return "/images/mountain-g0c16fbfe2_1280.jpg";
      default:
        return "ERROR";
    }
  };

  const imageUrl = modalContents(slide);
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div>
        <div
          onClick={closeModal}
          className="overflow-auto sticky w-screen opacity-70 z-20 top-0 left-0 bg-slate-500 flex items-center justify-center "
        >
          <img src={imageUrl} alt={slide.altText} />
        </div>
      </div>
    </div>
  );
};

export default OpenModal;
