// Adding the './' means CRA (create-react-app) is looking for the file in the cur folder, 'src', and in 'node_modules' if './' is left out
/* 
import foods from './fruitsDemo/foods'; 
import { choice, remove } from './fruitsDemo/helpers';
*/
import './App.css';
import Game from './BasicRCs/Game';
import SuperDemo from './BasicRCs/SuperDemo';
import Rando from './BasicRCs/Rando';
import ClickEvent from './BasicRCs/ClickEvent';
import BrokenClick from './BasicRCs/BrokenClick';
import Clicker from './BasicRCs/Clicker';
import ScoreKeeper from './BasicRCs/ScoreKeeper';
import IconList from './BasicRCs/IconList';
import Lottery from './Lottery/Lottery';
import CoinFlip from './CoinFlip/CoinFlip';
import ColorBoard from './ColorBoard/ColorBoard';
import WiseSquare from './BasicRCs/WiseSquare';
import ButtonList from './BasicRCs/ButtonList';
import NumberList from './NumberList/NumberList';
import RollDice from './RollDice/RollDice';
import Form from './BasicRCs/Form';
import MultipleForm from './BasicRCs/MultipleForm';
import ShoppingList from './ShoppingList/ShoppingList';
import BoxList from './BoxList/BoxList';
import Timer from './BasicRCs/Timer';
import ZenQuote from './ZenQuote/ZenQuote';
import GithubUserInfo from './BasicRCs/GithubUserInfo';
import DeckOfCards from './DeckOfCards/DeckOfCards';
import ReactRouter from './ReactRouter/ReactRouter';
import CounterHook from './BasicRCs/CounterHook';
import TogglerHook from './BasicRCs/TogglerHook';
import FormHook from './BasicRCs/FormHook';
import FormHookAbstraction from './BasicRCs/FormHookAbstraction';
import ClickerHook from './BasicRCs/ClickerHook';
import SWMoviesHook from './BasicRCs/SWMoviesHook';
import ReactReducer from './ReactReducer/ReactReducer';

function App() {
  /*
  const food = choice(foods);
  const newFoods = remove(foods, food);
  */
  return (
    <div className="App">
      {/* // This is for 'fruitsDemo'
      <p>I'd like one {food}, please</p>
      <p>Here you go: {food}</p>
      <p>Delicious! May I have another?</p>
      <p>I'm sorry, we're all out. We have {newFoods.length} left.</p>
      */}
      <div className='container mw-100'>
        <div className='row'>
          <div className='App-border col-4'>
            <h3>Game RC</h3>
            <Game />
          </div>
          <div className='App-border col-4'>
            <h3>SuperDemo RC</h3>
            <SuperDemo animal='Bobcat' food='Pineapple' />
          </div>
          <div className='App-border col-4'>
            <h3>Rando RC</h3>
            <Rando maxNum={7} />
          </div>
        </div>
        <div className='row'>
          <div className='App-border col-4'>
            <h3>ClickEvent RC</h3>
            <ClickEvent />
          </div>
          <div className='App-border col-4'>
            <h3>BrokenClick RC</h3>
            <BrokenClick />
          </div>
          <div className='App-border col-4'>
            <h3>Clicker RC</h3>
            <Clicker maxNum={10} />
          </div>
        </div>
        <div className='row'>
          <div className='App-border col-4'>
            <h3>ScoreKeeper RC</h3>
            <ScoreKeeper />
          </div>
          <div className='App-border col-4'>
            <h3>Icon RC</h3>
            <IconList />
          </div>
          <div className='App-border col-4'>
            <h3>Lottery RC</h3>
            <Lottery title='Super8' maxNum={40} numBalls={8} />
            {/* <Lottery title='Lotto Fun' maxNum={10} /> */}
          </div>
        </div>
        <div className='row'>
          <div className='App-border col-4'>
            <h3>CoinFlip RC</h3>
            <CoinFlip />
          </div>
          <div className='App-border col-4'>
            <h3>ColorBoard RC</h3>
            <ColorBoard numCols={6} />
          </div>
          <div className='App-border col-4'>
            <h3>WiseSquare RC</h3>
            <WiseSquare />
          </div>
        </div>
        <div className='row'>
          <div className='App-border col-4'>
            <h3>ButtonList RC</h3>
            <ButtonList />
          </div>
          <div className='App-border col-4'>
            <h3>NumberList RC</h3>
            <NumberList />
          </div>
          <div className='App-border col-4'>
            <h3>RollDice RC</h3>
            <RollDice />
          </div>
        </div>
        <div className='row'>
          <div className='App-border col-4'>
            <h3>Form RC</h3>
            <Form />
          </div>
          <div className='App-border col-4'>
            <h4>Form w/ Multi Inputs RC</h4>
            <MultipleForm />
          </div>
          <div className='App-border col-4'>
            <h3>ShoppingList RC</h3>
            <ShoppingList />
          </div>
        </div>
        <div className='row'>
          <div className='App-border col-4'>
            <h3>BoxList RC</h3>
            <BoxList />
          </div>
          <div className='App-border col-4'>
            <h3>Timer RC</h3>
            <Timer />
          </div>
          <div className='App-border col-4'>
            <h3>ZenQuote RC</h3>
            <ZenQuote />
          </div>
        </div>
        <div className='row'>
          <div className='App-border col-4'>
            <h3>GithubUserInfo RC</h3>
            <GithubUserInfo username='facebook' />
          </div>
          <div className='App-border col-4'>
            <h3>DeckOfCards RC</h3>
            <DeckOfCards />
          </div>
          <div className='App-border col-4'>
            <h3>ReactRouter RC</h3>
            <ReactRouter />
          </div>
        </div>
        <div className='row'>
          <div className='App-border col-4'>
            <h3>CounterHook RC</h3>
            <CounterHook />
          </div>
          <div className='App-border col-4'>
            <h3>TogglerHook RC</h3>
            <TogglerHook />
          </div>
          <div className='App-border col-4'>
            <h3>FormHook RC</h3>
            <FormHook />
          </div>
        </div>
        <div className='row'>
          <div className='App-border col-4'>
            <h4>FormHookAbstraction RC</h4>
            <FormHookAbstraction />
          </div>
          <div className='App-border col-4'>
            <h3>ClickerHook RC</h3>
            <ClickerHook />
          </div>
          <div className='App-border col-4'>
            <h3>SWMoviesHook RC</h3>
            <SWMoviesHook />
          </div>
        </div>
        <div className='row'>
          <div className='App-border col-4'>
            <h3>ReactReducer RC</h3>
            <ReactReducer />
          </div>
          <div className='App-border col-4'>

          </div>
          <div className='App-border col-4'>

          </div>
        </div>
        <div className='row'>
          <div className='App-border col-4'>

          </div>
          <div className='App-border col-4'>

          </div>
          <div className='App-border col-4'>

          </div>
        </div>
        <div className='row'>
          <div className='App-border col-4'>

          </div>
          <div className='App-border col-4'>

          </div>
          <div className='App-border col-4'>

          </div>
        </div>
        <div className='row'>
          <div className='App-border col-4'>

          </div>
          <div className='App-border col-4'>

          </div>
          <div className='App-border col-4'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
