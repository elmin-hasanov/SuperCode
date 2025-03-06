type BuyBtnProps = {
    text: string;
  };
  
  const BuyBtn = (props: BuyBtnProps) => {
    const aFunction = () => {
      console.log("Ich wurde geklickt");
    };
  
    return (
      <button onClick={aFunction} className="bg-rose-400 rounded-2xl py-2 px-5">
        {props.text}
      </button>
    );
  };
  
  export default BuyBtn;
  
  //-> ich kann einen Type natuerlich auch dirket hinter den : deklarieren
  // const BuyBtn = (props: { text: string }) => {
  //   return <button>{props.text}</button>;
  // };
  
  // export default BuyBtn;