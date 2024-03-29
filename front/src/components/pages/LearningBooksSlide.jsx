import Skill from "../pages/Skill";
import { AiOutlineArrowRight } from "react-icons/ai";

const LearningBooksSlide = () => {
  const DailyReportUrl = process.env.REACT_APP_REPORT_URL;
  return (
    <div id="LearningBooksSlide" className="mb-20 sm:pt-10 mt-40">
      <div className="animate-tracking-in-expand">
        <div className="flex flex-col justify-center items-center relative">
          <h1 className="text-indigo-400 font-bold sm:text-6xl text-4xl opacity-50">
            ABOUT LEARNING
          </h1>
          <h1 className="text-black absolute top-[4px] sm:left-[460px] sm:text-6xl text-4xl font-bold ">
            ABOUT LEARNING
          </h1>
          <Skill />
          <div className="flex sm:flex-row flex-col">
            <img
              src="https://github-readme-stats.vercel.app/api?username=kokimoriguchi&theme=apprentice&show_icons=true"
              alt="koki GitHub stats"
            />
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=kokimoriguchi&theme=default"
              alt="GitHub Stats Card"
            />
          </div>
          <p className="text-center pt-8 text-gray-500">
            Gitのリポジトリに対する使用割合の多いものをAPIにて取得してグラフにしております。
            <br />
            学習時間は、2022年1月頃から在職中に学習を始め、出勤日は最低1時間、休日は最低4時間の学習を行っておりました。
            <br />
            apprentice期間中は毎日日報作成しており、週最低60時間の学習を継続しました。結果、4ヶ月間の学習時間は1000時間を超えました。
            <br />
            また、GitHubに日報を残しておりますので、そちらもご確認ください。
          </p>
          <div className="flex flex-row py-10 justify-center transition duration-300 cursor-pointer">
            <a
              href={DailyReportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <div className="pt-2 px-3">
                <p className="border-b-2 border-indigo-400">view report</p>
              </div>
              <div className="bg-black rounded-full w-10 h-10 text-white flex items-center justify-center hover:bg-indigo-400 hover:text-black transition duration-300">
                <AiOutlineArrowRight />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LearningBooksSlide;
