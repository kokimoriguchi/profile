import { FadeIn } from "../Hooks/FadeIn";

const ProfileDetail = () => {
  return (
    <div className="bg-gray-100">
      <FadeIn>
        <div className="sm:pb-8 lg:pb-12 mb-20 bg-cover">
          <div className="mx-auto max-w-screen-2xl">
            <h1 className="text-black text-4xl font-bold sm:text-5xl md:text-6xl text-center mr-auto pt-4 pb-4 ">
              Profile
            </h1>
            <div
              id="ProfileDetail"
              className="h-auto flex flex-col lg:flex-row rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-max w-full text-center lg:py-4   xl:py-12">
                <p className="font-semibold text-indigo-400 pt-8 md:mb-6 md:text-lg xl:text-xl">
                  MyProfile
                </p>
                <h1 className="text-black text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
                  KOKI MORIGUCHI
                </h1>
                <h2 className="font-semibold text-indigo-400 md:mb-6 md:text-lg xl:text-xl">
                  About Me
                </h2>
                <p className="md:mb-8 md:text-lg max-w-screen-md text-black">
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  pppppppppppppppppppppppppppppppppppppp
                  pppppppppppppppppppppppppppppppppppppp
                  pppppppppppppppppppppppppppppppppppppp
                  pppppppppppppppppppppppppppppppppppppp
                  pppppppppppppppppppppppppppppppppppppp
                  pppppppppppppppppppppppppppppppppppppp
                  pppppppppppppppppppppppppppppppppppppp
                  pppppppppppppppppppppppppppppppppppppp
                  pppppppppppppppppppppppppppppppppppppp
                  pppppppppppppppppppppppppppppppppppppp
                  pppppppppppppppppppppppppppppppppppppp
                  pppppppppppppppppppppppppppppppppppppp
                  pppppppppppppppppppppppppppppppppppppp
                </p>
              </div>

              <div className="w-full text-center sm:text-center lg:py-4 xl:py-12 mx-auto items-center">
                <div className="items-center w-full md:mb-16 lg:h-auto ">
                  <img
                    src="/images/537C3E1C-319B-4478-A4CF-1312B5AABEAE_1_201_a.jpeg"
                    alt="MyPicture"
                    className="w-2/5 h-auto mx-auto pt-8 rounded-full"
                  />
                </div>

                <ul className="text-center leading-relaxed text-gray-500 md:mb-12 xl:text-lg">
                  <li>
                    ⚪︎⚪︎ 高校卒業バスケ部で副キャプテン。最高戦績大阪3位
                  </li>
                  <li>⚪︎⚪︎ 大学経済学部国際経済学科入学</li>
                  <li>
                    ⚪︎⚪︎ 大学卒業ゼミで沖縄の基地問題について学習し論文作成
                  </li>
                  <li>⚪︎⚪︎ 株式会社入社マネージャーとして勤務</li>
                  <li>⚪︎⚪︎ 株式会社退職全体販売点数第5位になる</li>
                  <li>⚪︎⚪︎ apprentice参加プログラミング学習に集中</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};
export default ProfileDetail;
