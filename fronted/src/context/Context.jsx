import { createContext } from "react";
import { useState } from "react";
export const Context = createContext();

export const ContextProvider = (props) => {
  const [input, setinput] = useState("");
  const [recentpromt, setrecentprompt] = useState("");
  const [prevprompts, setprevprompts] = useState([]);
  const [showresult, setshowresult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultdata, setresultdata] = useState("");

   

  const onSent = async () => {
    try {
      setresultdata("");
      setloading(true);
      setshowresult(true)
      setrecentprompt(input)
      setprevprompts(prev=>[...prev,input])

      const response = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt:input }),
      });
      const data = await response.json();
      console.log(data.result);
      setresultdata(data.result);
      setloading(false);
      setinput("");
    } catch (err) {
      console.error(err);
    }
  };

  
  

  const contextValue = {
    input,
    setinput,
    recentpromt,
    setrecentprompt,
    prevprompts,
    setprevprompts,
    showresult,
    setshowresult,
    loading,
    setloading,
    resultdata,
    setresultdata,
    onSent
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
