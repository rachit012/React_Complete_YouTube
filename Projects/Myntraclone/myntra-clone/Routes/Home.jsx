import HomeItem from "../src/components/HomeItem";
import {useSelector, Provider} from "react-redux";

const Home = () => {
    const items = useSelector((store) => store.items);

return (
    <Provider store={items}>
        <main>
            <div className="items-container">
            {items.map((item) => (<HomeItem key={item.id} item={ item } />))}
            </div>
        </main>
    </Provider>
    
    );
};

export default Home;