import { FadeIn } from "../Hooks/FadeIn";

const Home = () => {
  return (
    <FadeIn>
      <div
        id="Home"
        className="sm:mx-16 mx-0 mb-8 flex flex-wrap justify-between"
      >
        <div className="mb-6 flex w-auto flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
          <h1 className="text-black-800 mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">
            WELCOME
          </h1>
          <h2 className="text-black-800 mb-8 text-2xl font-bold sm:text-2xl md:mb-12 md:text-2xl">
            DETAIL
          </h2>
          <p className="sm:max-w-md leading-relaxed text-gray-500 xl:text-base w-auto">
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
            <hr></hr>
            <br />
          </p>
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
