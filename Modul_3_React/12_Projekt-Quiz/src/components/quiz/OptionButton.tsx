type OptionButtonProps = {
    option: string;
    isCorrect: boolean;
    isSelected: boolean;
    // TODO: Extra prop das aussagt, ob schon geklickt wurde (=> ob richtig/falsch gezeigt werden soll)
    handleAnswerClick: (selectedAnswer: string) => void
};

export default function OptionButton({option, isCorrect, handleAnswerClick, isSelected}: OptionButtonProps) {
    // let buttonClass = "big-button "
    // if (...)

    return (
    <button
      className={
        "big-button " +
        (isCorrect
          ? "big-button--correctoption "
          : " ") + (isSelected ? "big-button--selected" : "")
      }
      key={option}
      onClick={() => handleAnswerClick(option)}
    >
      {/* <span className="big-button__logo">
        {["A", "B", "C", "D", "E", "F"][index]}
      </span> */}
      <span className="big-button__text">{option}</span>
    </button>
  );
}
