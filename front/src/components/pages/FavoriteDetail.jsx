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
            FAVORITE
            <br />
            HOBBY
          </div>
          <div className="text-[150px] absolute top-0 left-1/2 transform -translate-x-1/2 text-indigo-400 text-center z-10 font-mono font-bold">
            FAVORITE
            <br />
            HOBBY
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
                海外に興味を持ったきっかけは、
                <br />
                ただの好奇心で海外に行ってみたいと思ったからです。
                <br />
                おもいたったが吉日ということで、すぐに行く資金を貯めるために、
                <br />
                鳶職という高所作業をする仕事を始めました。週6日、朝から晩まで働き、
                <br />
                40万円の資金を貯めマルタ島という島に語学留学という形で行きました。
                <br />
                英語も話せず、海外にも行ったことがない私は、
                <br />
                ただ好奇心を胸に行動しました。
                <br />
                全く話せない言語の壁を痛感し慣れない土地でのルームシェアにも苦労しました。
                <br />
                しかし、そこで出会った人たちとの出会いは私の夢を大きくしてくれました。
                <br />
                いつかここで出会った人たちと一緒に仕事をしたいと思っています。
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
              その中でも、特に好きなアーティストは、Oasisです。
              <br />
              高校時代BECKという映画の中でOasisの音楽が流れていたことがきっかけでした。
              <br />
              その後、Oasisの音楽を聴き始め、その音楽に魅了されました。
              <br />
              辛い時、悲しい時、嬉しい時、楽しい時、どんな時でもOasisの音楽を聴くと元気が出ます。
              <br />
              おすすめはTheMasterplanとLittleByLittleいう曲です!
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
