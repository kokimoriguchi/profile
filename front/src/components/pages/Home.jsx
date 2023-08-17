import { FadeIn } from "../Hooks/FadeIn";
import { useState } from "react";

const Home = () => {
  const [animationTitle, setAnimationTitle] = useState(false);
  const [animationDetail, setAnimationDetail] = useState(false);
  const [animationText, setAnimationText] = useState(false);

  const handleAnimationEnd = () => {
    setTimeout(() => {
      setAnimationTitle(true);
    }, 300);
    setTimeout(() => {
      setAnimationDetail(true);
    }, 600);
    setTimeout(() => {
      setAnimationText(true);
    }, 900);
  };

  return (
    <FadeIn onAnimationEnd={handleAnimationEnd}>
      <div
        id="Home"
        className="sm:mx-16 mx-0 mb-8 flex flex-wrap justify-between"
      >
        <div className="mb-6 font-mono flex w-auto flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-36 lg:pb-12">
          {animationTitle ? (
            <div className="animate-tracking-in-expand h-[100px]">
              <h1 className="text-indigo-400 text-black-800 mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-[70px] opacity-50">
                WELCOME
              </h1>
              <h1 className="text-black-800 relative -top-[120px] right-2 text-[70px] font-bold ">
                WELCOME
              </h1>
            </div>
          ) : (
            <h1 className="text-4xl mb-4 opacity-0 font-bold">WELCOME</h1>
          )}
          {animationDetail ? (
            <h2 className="text-indigo-400 animate-tracking-in-expand mb-8 text-2xl font-bold sm:text-2xl md:mb-12 md:text-2xl">
              DETAIL
            </h2>
          ) : (
            <h2 className="mb-8 text-2xl font-bold sm:text-2xl md:mb-12 md:text-2xl opacity-0">
              DETAIL
            </h2>
          )}
          {animationText ? (
            <div>
              <p className="animate-tracking-in-expand sm:max-w-md leading-relaxed text-gray-500 xl:text-base w-auto">
                サイトをご覧いただきありがとうございます。
                <br />
                このページでは私、森口皓貴について
                <br />
                簡単に自己紹介させていただければと思います。
                <br />
                ページ構成として、プロフィール
                <br />
                現状のスキルレベル、学習履歴、
                <br />
                ポートフォリオの順に掲載しております。
                <br />
                <br />
              </p>
              <hr></hr>
            </div>
          ) : (
            <div>
              <p className="opacity-0 sm:max-w-md leading-relaxed text-gray-500 xl:text-base w-auto">
                サイトをご覧いただきありがとうございます。
                <br />
                このページでは私、森口皓貴について
                <br />
                簡単に自己紹介させていただければと思います。
                <br />
                ページ構成として、プロフィール
                <br />
                現状のスキルレベル、学習履歴、
                <br />
                ポートフォリオの順に掲載しております。
                <br />
                <br />
              </p>
              <hr></hr>
            </div>
          )}
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="h-3/4 relative top-12 left-12  -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:top-16 md:left-16 lg:ml-0">
            <img
              src="/images/camera-g3583b09a1_640.jpg"
              alt="bike"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="h-3/4 overflow-hidden rounded-lg z-20 bg-gray-100 shadow-lg">
            <img
              src="/images/mountain-g0c16fbfe2_1280.jpg"
              alt="myImage"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
export default Home;
