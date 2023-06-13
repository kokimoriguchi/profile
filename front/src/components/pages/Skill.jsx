import { useEffect } from "react";
import { useReducer } from "react";
import { skillReducer } from "../reducer/skillReducer";
import { initialState } from "../reducer/skillReducer";
import { actionTypes } from "../reducer/skillReducer";
import { requestStates } from "../reducer/constants";
import { FadeIn } from "../Hooks/FadeIn";
import axios from "axios";
import Circle from "react-circle";

const Skill = () => {
  const [state, dispatch] = useReducer(skillReducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.fetch });
    axios
      .get("https://api.github.com/users/kokimoriguchi/repos")
      .then((response) => {
        const languageList = response.data.map((res) => res.language);
        const countedLanguageList = generateLanguageCountObj(languageList);
        dispatch({
          type: actionTypes.success,
          payload: { languageList: countedLanguageList },
        });
      })
      .catch(() => {
        dispatch({ type: actionTypes.error });
      });
  }, []);

  const generateLanguageCountObj = (allLanguageList) => {
    const notNullLanguageList = allLanguageList.filter(
      (language) => language != null
    );
    const uniqueLanguageList = [...new Set(notNullLanguageList)];

    return uniqueLanguageList.map((item) => {
      return {
        language: item,
        count: allLanguageList.filter((language) => language === item).length,
      };
    });
  };

  const converseCountToPercentage = (count) => {
    if (count > 10) {
      return 100;
    }
    return count * 10;
  };

  return (
    <div id="skills" className="pb-20">
      <div className="text-black text-4xl font-bold sm:text-5xl md:text-6xl text-center pt-4 pb-4">
        <h2>Skills</h2>
      </div>
      <FadeIn>
        <div className="sm:flex sm:flex-row flex-col sm:justify-center justify-center text-black">
          {state.requestState === requestStates.loading && (
            <p className="description">取得中...</p>
          )}
          {state.requestState === requestStates.success &&
            state.languageList.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:justify-center justify-center items-center"
              >
                <p className="description text-center">
                  <strong>{item.language}</strong>
                </p>
                <Circle
                  animate
                  progress={converseCountToPercentage(item.count)}
                  size="200px"
                  className="flex justify-center text-white"
                />
              </div>
            ))}
          {state.requestState === requestStates.error && (
            <p className="description">エラーが発生しました</p>
          )}
        </div>
      </FadeIn>
    </div>
  );
};

export default Skill;
