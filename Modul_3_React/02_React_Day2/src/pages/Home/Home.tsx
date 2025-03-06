import ItemsList from "../../components/itemsList/ItemsList";

type User = {
    name: string;
    isLoggedIn: boolean;
  };
  
  const users: User[] = [
    {
      name: "Max",
      isLoggedIn: true,
    },
    {
      name: "Elmin",
      isLoggedIn: false,
    },
    {
      name: "Jule",
      isLoggedIn: true,
    },
  ];
  
  const Home = () => {
    const aVariable = "Elmin";
  
    //-arrow FN - aber auch klassische FN-Schreibweise ist natuerlich moeglich
    const calcAge = (birthYear: number) => {
      const currentYear = new Date().getFullYear();
      return currentYear - birthYear;
    };
  
    return (
      //   wenn wir Code innerhalb von TSX verwenden wollen, musst du ihn einfach mit geschweiften Klammern umschliessen
      <>
        <h1>Hello World {5 * 5} </h1>
        <h2>My Name: {aVariable}</h2>
        <h3>I am {calcAge(1988)} years old</h3>
        {/* {users.map((singleUser) => (
          <h4 key={singleUser.name}>{singleUser.name}</h4>
        ))} */}
  
        {/* {users.map((singleUser) => {
          if (singleUser.isLoggedIn) {
            return <h4>Hallo, {singleUser.name}</h4>;
          } else {
            return <h4>{singleUser.name} ist nicht eingeloggt</h4>;
          }
        })} */}
  
        {/* variante 3 mit Ternary */}
        {users.map((singleUser) =>
          singleUser.isLoggedIn ? <h4 key={singleUser.name}>Hallo, {singleUser.name}</h4> : null
        )}
        <ItemsList/>
      </>
    );
  };
  
  export default Home;