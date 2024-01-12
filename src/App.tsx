import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slice/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex gap-4 items-center justify-center bg-slate-200 p-12 rounded-lg">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 px-3 text-xl py-1 rounded-md text-white">
          Increment
        </button>
        <p className="text-3xl px-2">{count}</p>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 px-3 text-xl py-1 rounded-md text-white">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
  