import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";

const MyFavorite = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const movementSkate = Math.round(scrollY * 0.1);
  const movementMalta = Math.round(scrollY * 0.05);
  const movementLiam = Math.round(scrollY * 0.05);
  const movementBasket = Math.round(scrollY * 0.05);

  const calculatedSkateRight = 0 + movementSkate;
  const calculatedMaltaRight = -70 + movementMalta;
  const calculatedLiamLeft = -100 + movementLiam;
  const calculatedBasketLeft = 100 + movementBasket;

  return (
    <div className="py-40 relative font-mono">
      <ul className="relative h-[900px]">
        <li className="w-[400px] h-[500px] m-auto absolute top-0 left-1/2 transform -translate-x-1/2 opacity-90">
          <img src="/images/bike.jpeg" alt="MyBike" className="object-cover" />
        </li>
        <li
          className="absolute opacity-90"
          style={{
            width: "200px",
            height: "200px",
            left: `${calculatedBasketLeft}px`,
            top: "250px",
          }}
        >
          <img
            src="/images/basketball.jpeg"
            alt="MyBasket"
            className="object-cover h-full w-full"
          />
        </li>
        <li
          className="absolute opacity-90"
          style={{
            width: "150px",
            height: "150px",
            right: `${calculatedSkateRight}px`,
            top: "100px",
          }}
        >
          <img
            src="/images/skate.jpg"
            alt="MySkate"
            className="object-cover w-full h-full"
          />
        </li>
        <li
          className="absolute opacity-90"
          style={{
            width: "350px",
            height: "222px",
            left: `${calculatedLiamLeft}px`,
            top: "540px",
          }}
        >
          <img
            src="/images/liam.jpeg"
            alt="MyLiam"
            className="w-full h-full object-cover"
          />
        </li>
        <li
          className="absolute opacity-90"
          style={{
            width: "350px",
            height: "450px",
            right: `${calculatedMaltaRight}px`,
            top: "400px",
          }}
        >
          <img
            src="/images/malta.jpeg"
            alt="MyMalta"
            className="w-full h-full object-cover"
          />
        </li>
      </ul>
      <div className="text-center absolute z-10 w-[500px] h-[200px] top-[750px] left-1/2 transform -translate-x-1/2">
        <div className="relative font-semibold">
          <h1 className="text-[70px] leading-none z-10 text-black">
            FAVORITE
            <br />
            HOBBY
          </h1>
          <h1 className="text-[70px] absolute top-[2px] -z-10 right-[75px] leading-none text-indigo-400 opacity-50">
            FAVORITE
            <br />
            HOBBY
          </h1>
        </div>
        <p className="pt-2 text-gray-500">
          私という人物を知ってもらうには、
          <br />
          趣味や好きなものを見てもらうことがイメージしやすいかと思いましたので
          <br />
          ここでは自身の持つ写真を展開しています。
          <br />
          詳しく書いてしまうと長くなるので割愛します
          <br />
          ご興味ある方は下のボタンから覗いてみてください。
        </p>
        <div className="flex flex-row pt-8 justify-center">
          <div className="pt-2 px-3">
            <p className="border-b-2">view more</p>
          </div>
          <div className="bg-black rounded-full w-10 h-10 text-white flex items-center justify-center">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFavorite;
