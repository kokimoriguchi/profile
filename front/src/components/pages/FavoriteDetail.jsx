import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const FavoriteDetail = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-auto w-auto bg-custom-bg pt-32 pb-20 font-mono">
      <section className="">
        <div className="relative animate-tracking-in-expand transition duration-700">
          <div className="text-[155px] absolute top-0 left-1/2 transform -translate-x-1/2 text-center z-10 font-mono font-bold">
            <span
              className="absolute animate-rotate top-0 left-48 h-[400px] w-[400px] border-4 border-gray-600 inline-block"
              style={{
                borderRadius: "60% 40% 41% 59% / 43% 50% 50% 57% ",
              }}
            />
            <span
              className="absolute animate-rotate-reverse top-0 left-52 h-[400px] w-[400px] border-4 border-gray-600 inline-block"
              style={{
                borderRadius: "47% 53% 43% 57% / 61% 47% 53% 39% ",
              }}
            />
            <span
              className="absolute animate-rotate-reverse top-0 left-40 h-[400px] w-[400px] border-2 border-gray-600 inline-block"
              style={{
                borderRadius: "40% 60% 38% 62% / 66% 38% 62% 34% ",
              }}
            />
            <span
              className="absolute animate-rotate top-0 left-56 h-[400px] w-[400px] border-2 border-gray-600 inline-block"
              style={{
                borderRadius: "55% 45% 60% 40% / 52% 50% 50% 48% ",
              }}
            />
            <span
              className="absolute animate-rotate top-0 left-52 h-[400px] w-[400px] border-2 border-gray-600 inline-block"
              style={{
                borderRadius: "52% 48% 54% 46% / 47% 58% 42% 53% ",
              }}
            />
            <h1>FAVORITE</h1>
            <h1>HOBBY</h1>
          </div>
          <div className="text-[150px] absolute top-0 left-1/2 transform -translate-x-1/2 text-indigo-400 text-center z-10 font-mono font-bold">
            <h1>FAVORITE</h1>
            <h1>HOBBY</h1>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="h-[600px] w-auto shadow-2xl">
            <img
              src="/images/bike.jpeg"
              alt="yzf-r3画像"
              className="h-full w-auto object-cover z-10 shadow-2xl"
            />
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent shadow-inner z-20"></div>
          </div>
          <div className="h-[600px] w-auto shadow-2xl">
            <img
              src="/images/Me2.jpeg"
              alt="AboutMe画像"
              className="h-full w-auto object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>
      <section className="pt-40 flex flex-row justify-between">
        <div className="flex justify-start">
          <img
            src="/images/steed.jpeg"
            alt="Steed画像"
            className="h-[550px] w-auto object-cover mt-[200px] shadow-2xl"
          />
        </div>
        <div className="w-2/3 flex flex-col">
          <div className="flex justify-end pb-8">
            <img
              src="/images/R3.jpeg"
              alt="R3画像"
              className="w-[900px] h-[300px] object-cover shadow-2xl"
            />
          </div>
          <div className="w-full flex-col flex justify-center items-center m-auto">
            <div className="flex relative justify-center items-center text-center pt-16 m-auto flex-col">
              <div>
                <h2 className="text-[70px] z-10 font-semibold absolute top-0 left-1/2 transform -translate-x-1/2">
                  BIKE
                </h2>
                <h2 className="text-[74px] text-indigo-400 font-semibold absolute top-0 left-1/2 transform -translate-x-1/2">
                  BIKE
                </h2>
              </div>
            </div>
            <div className="pt-10 w-1/2 text-center opacity-60 text-lg">
              <p>
                私の趣味のひとつでバイクがあります。
                <br />
                先輩の後ろに乗せてもらったのがきっかけで、
                <br />
                無理をしてローンを組み60万するYAMAHAのyzf-r3という320ccの中型バイクを購入しました
                <br />
                現在は400ccのsteed400というバイクに乗っています。
                <br />
                社会人になってからの休みの日は、
                <br />
                何かの勉強しているかバイクに乗っているかの日が多いです。
                <br />
                将来はSportSter XL1200NS Iron1200か
                <br />
                DUCATIのSuperLeggera V4を買うことが夢です!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-40 flex flex-row w-full justify-between">
        <div className="w-2/3">
          <div className="text-center m-auto">
            <div className="relative flex flex-col">
              <h2 className="text-[70px] z-10 font-semibold relative top-[104px] left-1/2 transform -translate-x-1/2">
                BASKETBALL
              </h2>
              <h2 className="text-[72px] text-indigo-400 font-semibold relative top-0 left-1/2 transform -translate-x-1/2">
                BASKETBALL
              </h2>
            </div>
          </div>
          <div className="text-center opacity-60 text-lg">
            <p>
              私を形成した重要な趣味のひとつがバスケットボールです。
              <br />
              小学校の頃からバスケットボールをしていて、中学ではキャプテンで市の選抜選考会にも出場しました。
              <br />
              高校では大阪の公立校で最も強いバスケットボール部に入部しました。
              <br />
              高校時代は、バスケットボールが全てでした。
              <br />
              しかし、私は高校ではもっとも下手な存在でした。
              <br />
              技術では負けていても、努力では誰にも負けないという気持ちがありました。
              <br />
              その気持ちがあったからこそ、誰よりも朝早くから練習に行き、誰よりも遅くまで練習をしていました。
              <br />
              その結果、副キャプテンに指名してもらい、最後の大会では、市立大会を優勝して引退することができました。
              <br />
              この時の経験が、絶対に諦めないという気持ちを作った経験で私の人生において最も大きな財産になっています。
              <br />
              現在も趣味でバスケットボールは機会があれば社会人サークルなどに参加しています。
            </p>
          </div>
        </div>
        <div className="flex justify-end w-1/3">
          <img
            src="/images/basketball.jpeg"
            alt="basketball画像"
            className="h-[650px] w-auto object-cover shadow-2xl"
          />
        </div>
      </section>
      <section className="w-full pt-40">
        <div className="w-2/3">
          <img
            src="/images/WeMalta.jpeg"
            alt="Malta画像"
            className="w-full h-[350px] object-cover shadow-2xl"
          />
        </div>
        <div className="flex justify-between pt-10 flex-row w-full">
          <div className="m-auto">
            <div className="text-center m-auto">
              <div className="relative flex flex-col">
                <h2 className="text-[70px] z-10 font-semibold absolute top-0 left-1/2 transform -translate-x-1/2">
                  ABROAD
                </h2>
                <h2 className="text-[73px] text-indigo-400 font-semibold relative top-0 left-1/2 transform -translate-x-1/2">
                  ABROAD
                </h2>
              </div>
            </div>
            <div className="text-center opacity-60 text-lg">
              <p>
                海外への興味は、純粋な好奇心からです。
                <br />
                ただ、思い立って行ってみることにしました。
                <br />
                資金を集めるために、鳶職という高所での厳しい仕事を始め、毎日熱心に働きました。
                <br />
                その結果、40万円を貯め、英語の知識もないままマルタ島への語学留学への道を選びました。
                <br />
                言語の障壁や初めてのルームシェアの経験は確かに困難でした。
                <br />
                しかし、マルタでの出会いは私の視野を広げ、新しい夢を抱くきっかけとなりました。
                <br />
                この素晴らしい経験を通して、いつかマルタで知り合った友人たちと共に仕事をすることを夢見ています。
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <img
              src="/images/London.jpeg"
              alt="London画像"
              className="h-[400px] w-auto object-contain"
            />
          </div>
        </div>
      </section>
      <section className="pt-40 flex flex-row w-full justify-between">
        <div className="flex justify-end w-1/3">
          <img
            src="/images/Liam2.jpeg"
            alt="Liam2l画像"
            className="h-[600px] w-full object-cover shadow-2xl"
          />
        </div>
        <div className="w-2/3">
          <div className="text-center m-auto">
            <div className="relative flex flex-col">
              <h2 className="text-[70px] z-10 font-semibold relative top-[104px] left-1/2 transform -translate-x-1/2">
                MUSIC
              </h2>
              <h2 className="text-[72px] text-indigo-400 font-semibold relative top-0 left-1/2 transform -translate-x-1/2">
                MUSIC
              </h2>
            </div>
          </div>
          <div className="text-center opacity-60 text-lg">
            <p>
              私は音楽が大好きで、特に洋楽が好きです。
              <br />
              中でもOasisは私のお気に入りのアーティストです。
              <br />
              高校時代、映画「BECK」でOasisの曲を聴いたのがきっかけで、
              <br />
              その瞬間から彼らのメロディに引き込まれました。
              <br />
              どんな気分の時も、Oasisの音楽は私に力を与えてくれます。
              <br />
              特に「The Masterplan」と「Little By
              Little」は、心からおすすめの曲です!
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-row pt-40 justify-center">
        <div
          className="bg-black rounded-full w-10 h-10 hover:text-black hover:bg-indigo-400 cursor-pointer text-white flex items-center justify-center transition duration-300"
          onClick={() => handleOnClick()}
        >
          <AiOutlineArrowLeft />
        </div>
        <div className="pt-2 px-3">
          <p className="border-b-2 border-indigo-400">back</p>
        </div>
      </div>
    </div>
  );
};

export default FavoriteDetail;
