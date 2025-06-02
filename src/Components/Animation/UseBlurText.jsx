import BlurText from "./BlurText";

function UseBlurText({ text , className }) {
  return (
    <BlurText
      text={text}
      delay={100}
      animateBy="words"
      direction="top"
      className={className}
    />
  );
}

export default UseBlurText;