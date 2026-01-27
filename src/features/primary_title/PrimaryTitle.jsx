import { useEffect, useState } from "react";

function PrimaryText({ 
  component_id = "primary_text", 
  text, 
  feature_text = [], 
  feature_color,
  write_speed = 50
}) {
  const [content, setContent] = useState("");
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContent(prev => prev + text[pos]);
      setPos(prev => prev + 1);
    }, write_speed);

    if (pos >= text.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [pos, text]);

  const renderContent = () => {
    return content.split(" ").map((word, i) => {
      if (feature_text.map(ft => ft.toLowerCase()).includes(word.toLowerCase())) {
        return (
          <span key={i} style={{"color" : `var(${feature_color})`}}>
            {word}{" "}
          </span>
        );
      }
      return word + " ";
    });
  };

  return (
    <h1
      id={component_id}
      className="text-white px-5 m-auto w-fit top-10 font-inter font-bold text-[38px] max-lg:text-[30px] max-md:text-[25px] capitalize text-center write_effect_animation overflow-hidden"
    >
      {renderContent()}
    </h1>
  );
}

export default PrimaryText;
