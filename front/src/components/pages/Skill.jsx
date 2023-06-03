import { useEffect } from "react";
import { useReducer } from "react";
import { skillReducer } from "../reducer/skillReducer";
import { initialState } from "../reducer/skillReducer";
import { actionTypes } from "../reducer/skillReducer";
import { requestStates } from "../reducer/constants";
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
    <div id="skills">
      <div className="text-black-800 text-4xl font-bold sm:text-5xl md:text-6xl text-center pt-4 pb-4">
        <h2>Skills</h2>
      </div>
      <div className="sm:flex sm:flex-row flex-col justify-center ">
        {state.requestState === requestStates.loading && (
          <p className="description">取得中...</p>
        )}
        {state.requestState === requestStates.success &&
          state.languageList.map((item, index) => (
            <div key={index} className="justify-center">
              <p className="description text-center">
                <strong>{item.language}</strong>
              </p>
              <Circle
                animate
                progress={converseCountToPercentage(item.count)}
                size="200px"
              />
            </div>
          ))}
        {state.requestState === requestStates.error && (
          <p className="description">エラーが発生しました</p>
        )}
      </div>
    </div>
  );
};

export default Skill;