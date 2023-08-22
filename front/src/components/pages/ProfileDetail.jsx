import { FadeIn } from "../Hooks/FadeIn";
import { useState } from "react";
import {
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiDocker,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiMysql,
  SiGithub,
  SiGit,
  SiAmazonaws,
  SiNginx,
  SiRubocop,
  SiFigma,
} from "react-icons/si";

const ProfileDetail = () => {
  const [animationTitle, setAnimationTitle] = useState(false);
  const [animationDetail, setAnimationDetail] = useState(false);
  const [animationIcon, setAnimationIcon] = useState(false);
  const [animationProfileCard, setAnimationProfileCard] = useState(false);
  const [animationProfileText, setAnimationProfileText] = useState(false);
  const [animationProfileCardImage, setAnimationProfileCardImage] =
    useState(false);

  const profileFadeInEnd = () => {
    setTimeout(() => {
      setAnimationTitle(true);
    }, 300);
    setTimeout(() => {
      setAnimationDetail(true);
    }, 600);
    setTimeout(() => {
      setAnimationIcon(true);
    }, 900);
    setTimeout(() => {
      setAnimationProfileCard(true);
    }, 1500);
    setTimeout(() => {
      setAnimationProfileCardImage(true);
    }, 1800);
    setTimeout(() => {
      setAnimationProfileText(true);
    }, 2300);
  };

  function onClickHandleGitIcon() {
    window.open("https://github.com/kokimoriguchi");
  }

  function onClickHandleTwitterIcon() {
    window.open("https://twitter.com/?lang=ja");
  }

  function onClickHandleIgIcon() {
    window.open("https://www.instagram.com/");
  }

  return (
    <div className="bg-gray-200 sm:h-[1000px] h-[1500px] py-32 font-mono">
      <FadeIn onAnimationEnd={profileFadeInEnd}>
        <div className="sm:mx-16">
          <div
            className="sm:pr-20 pr-0 h-auto flex flex-col lg:flex-row rounded-lg"
            id="ProfileDetail"
          >
            <div className="mb-6 pr-16 mt-10 font-mono flex w-auto flex-col justify-center sm:mb-12 lg:mb-0 lg:w-2/5 lg:pt-48">
              {animationTitle ? (
                <div className="animate-tracking-in-expand pl-8 sm:pl-0">
                  <h1 className="text-indigo-400 text-black-800 mb-4 font-bold text-6xl opacity-50">
                    PROFILE
                  </h1>
                  <h1 className="text-black-800 relative -top-[79px] right-2 text-6xl font-bold ">
                    PROFILE
                  </h1>
                </div>
              ) : (
                <h1 className="text-4xl mb-4 opacity-0 font-bold">PROFILE</h1>
              )}
              {animationDetail ? (
                <p className="pl-8 sm:pl-0 animate-tracking-in-expand font-semibold text-indigo-400 mb-6 md:text-lg xl:text-2xl">
                  ABOUT
                </p>
              ) : (
                <p className="font-semibold text-indigo-400 md:mb-6 md:text-lg xl:text-2xl opacity-0">
                  ABOUT
                </p>
              )}
              {animationIcon ? (
                <div className="md:mb-8 md:text-lg max-w-screen-md text-gray-600">
                  <div className="flex sm:flex-row flex-col">
                    <div className="flex flex-row pl-8 sm:pl-0 pb-5 sm:pb-5">
                      <div className="animate-tracking-in-expand order-1">
                        <p>NAME:</p>
                        <p>BIRTH:</p>
                        <p>AGE:</p>
                        <p>FROM:</p>
                        <p>EDITOR:</p>
                        <p>OS:</p>
                      </div>
                      <div className="animate-tracking-in-expand order-2">
                        <p>森口皓貴</p>
                        <p>1997/06/07</p>
                        <p>26歳</p>
                        <p>Osaka</p>
                        <p>VSCode</p>
                        <p>M1MacOS</p>
                      </div>
                    </div>
                    <div>
                      <div className="pl-8 flex flex-row animate-tracking-in-expand order-3">
                        <div className="flex flex-col">
                          <p>LANGUAGE:</p>
                          <p>FRAMEWORK:</p>
                          <p>DESIGN:</p>
                          <p>DATABASE:</p>
                          <p>INFRA:</p>
                          <p>OTHERS:</p>
                        </div>
                        <div className="text-2xl animate-tracking-in-expand order-4">
                          <div className="flex flex-row mb-1">
                            <SiJavascript className="text-yellow-500 mr-2" />
                            <SiRuby className="text-red-700 mr-2" />
                            <SiHtml5 className=" text-orange-500 mr-2" />
                            <SiCss3 className="text-blue-500 mr-2" />
                          </div>
                          <div className="flex flex-row mb-1">
                            <SiReact className="text-blue-300 mr-2" />
                            <SiRubyonrails className="text-red-700 mr-2" />
                          </div>
                          <div className="flex flex-row mb-1">
                            <SiTailwindcss className="text-sky-300 mr-2" />
                            <SiSass className="text-pink-600 mr-2" />
                            <SiFigma className="mr-2" />
                          </div>
                          <div className="flex flex-row mb-1">
                            <SiMysql className="text-blue-500" />
                          </div>
                          <div className="flex flex-row mb-1">
                            <SiAmazonaws className="mr-2" />
                            <SiDocker className="text-blue-400" />
                          </div>
                          <div className="flex flex-row mb-1">
                            <SiGithub className="text-black mr-2" />
                            <SiGit className="text-orange-700 mr-2" />
                            <SiNginx className="text-green-700 mr-2" />
                            <SiRubocop className="text-black" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="hidden"></div>
              )}
              <hr></hr>
            </div>

            {animationProfileCard ? (
              <FadeIn>
                <div className="lg:h-[750px] py-6 px-4 sm:ml-32 lg:w-[650px] w-full h-auto bg-indigo-400 shadow-2xl items-center rounded-xl">
                  <div className="mx-5 bg-white h-full rounded-3xl relative">
                    <div
                      className="absolute top-10 left-0 w-full h-1/2 border-8"
                      style={{
                        borderRadius: "0% 100% 0% 100% / 0% 100% 0% 100% ",
                      }}
                    />
                    <div
                      className="absolute top-10 left-0 w-full h-1/2 border-8"
                      style={{
                        borderRadius: "100% 0% 100% 0% / 100% 0% 100% 0% ",
                      }}
                    />
                    {animationProfileCardImage ? (
                      <FadeIn>
                        <div className="pt-12 animation-flip-in-hor-bottom">
                          <div className="relative border-8 border-indigo-400 border-solid z-10 h-[265px] w-[220px] rounded-3xl m-auto items-center overflow-hidden">
                            <img src="/images/myImg.png" alt="MyPicture" />
                          </div>
                        </div>
                      </FadeIn>
                    ) : (
                      <div className="">
                        <img
                          src="/images/myImg.png"
                          alt="MyPicture"
                          className="w-2/5 h-auto mx-auto pt-8 opacity-0"
                        />
                      </div>
                    )}

                    {animationProfileText ? (
                      <ul className="animate-tracking-in-expand leading-relaxed text-gray-500  xl:text-lg">
                        <li className="m-auto text-indigo-400 text-center font-semibold text-2xl py-5">
                          CAREER
                        </li>
                        <li className="px-10 pb-2">
                          2013/04〜:桜宮高校バスケ部副キャプテン。最高戦績大阪3位
                        </li>
                        <li className="px-10 pb-2">
                          2016/04〜:龍谷大学経済学部国際経済学科。基地問題を研究
                        </li>
                        <li className="px-10 pb-2">
                          2020/01〜:マルタ島短期留学
                        </li>
                        <li className="px-10 pb-2">
                          2020/04〜:ゼビオ株式会社入社チーフマネージャーとして勤務
                        </li>
                        <li className="px-10 pb-2">
                          2023/04〜:apprentice参加プログラミング学習に集中
                        </li>
                      </ul>
                    ) : (
                      <div className="h-[400px]"></div>
                    )}
                    <div className="relative sm:top-[73px] top-[20px] w-full rounded-b-3xl shadow-2xl h-16 flex flex-row justify-center bg-gray-700">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-b-[30px] border-gray-700 border-t-transparent border-r-[30px] border-l-[30px] border-r-transparent border-l-transparent"></div>
                      <div
                        target="_blank"
                        className="text-slate-200 z-10 pt-3 pr-10 transition duration-100 hover:text-indigo-500 active:text-gray-600 cursor-pointer"
                      >
                        <svg
                          className="h-10 w-10"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={onClickHandleIgIcon}
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>

                      <div
                        target="_blank"
                        className="text-slate-200 z-10 pt-3 pr-10 transition duration-100 hover:text-indigo-500 active:text-gray-600 cursor-pointer"
                      >
                        <svg
                          className="h-10 w-10"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={onClickHandleTwitterIcon}
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </div>
                      <div
                        target="_blank"
                        className="text-slate-200 z-10 pt-3 transition duration-100 hover:text-indigo-500 active:text-gray-600 cursor-pointer"
                      >
                        <svg
                          className="h-10 w-10"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={onClickHandleGitIcon}
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ) : (
              <div className="py-8 w-[800px] bg-indigo-200 items-center hidden" />
            )}
          </div>
        </div>
      </FadeIn>
    </div>
  );
};
export default ProfileDetail;
