import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { decrement, increment } from "./redux/slice/counterSlice";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  console.log(Array(count));
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-12 bg-slate-200  rounded-lg">
        <div className="flex gap-4 items-center justify-center ">
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
        <div className="mt-3 flex gap-1">
          {Array(count)
            .fill(0)
            .map((value, index) => {
              return count % 5 === 0 ? (
                <div key={index} className="w-3 rounded-full h-3 bg-red-500" />
              ) : (
                <div key={index} className="w-3 rounded-full h-3 bg-blue-500" />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
