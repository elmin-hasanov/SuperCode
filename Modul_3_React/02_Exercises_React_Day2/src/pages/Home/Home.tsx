import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import ProduktList from "../../components/ProduktList/ProduktList"
import Shoplist from "../../components/Shoplist/Shoplist"
import TodoList from "../../components/TodoList/TodoList"

const Home = () => {
  return (
    <div>
        <h2>React-Props-Todo-Level-1_1</h2>
        <TodoList/>
        <hr />
        <h2>React-Props-Products-Level-2_1</h2>
        <ProduktList/>
        <hr />
        <h2>Projekt-React-The-Design-Shop Level-1_3</h2>
        <Header/>
        <Shoplist/>
        <Footer/>
    </div>
  )
}

export default Home
