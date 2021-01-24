import Counts from "./counts";
import Button from "./button";
import { useState, useEffect, useRef, useMemo } from "react";
import constants from "../utils";
import MemoizedCounts from "./react-memo-counts";
import UseMemoCounts from "./use-memo-counts";
const { MOZARELLA, CHEDDAR, PARMESAN, CABERNET, CHARDONAY, MERLOT } = constants;

export default function ParentComponent({
  title,
  withoutMemo = false,
  withReactMemo = false,
  withUseMemo = false,
}) {
  const [cheeseType, setCheeseType] = useState("");
  const [wine, setWine] = useState("");
  const [times, setTimes] = useState(0);
  const useMemoRef = useRef(0);

  const incrementUseMemoRef = () => useMemoRef.current++;

  // const memoizedValue = useMemoRef.current++;
  const memoizedValue = useMemo(() => incrementUseMemoRef(), [times]);

  const whichWineGoesBest = () => {
    switch (cheeseType) {
      case MOZARELLA:
        return setWine(CABERNET);
      case CHEDDAR:
        return setWine(CHARDONAY);
      case PARMESAN:
        return setWine(MERLOT);
      default:
        CHARDONAY;
    }
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      whichWineGoesBest();
    }

    return () => (mounted = false);
  }, [cheeseType]);

  return (
    <div className="flex flex-col justify-center items-center border-2 rounded-md mt-5 dark:border-yellow-200 max-w-lg m-auto pb-10 bg-gray-900">
      <h3 className="text-center dark:text-gray-400 mt-10">{title}</h3>
      <h1 className="font-semibold text-2xl dark:text-white max-w-md text-center">
        Select a cheese and we will tell you which wine goes best!
      </h1>
      <div className="flex flex-col gap-4 mt-10">
        <Button text={MOZARELLA} onClick={() => setCheeseType(MOZARELLA)} />
        <Button text={CHEDDAR} onClick={() => setCheeseType(CHEDDAR)} />
        <Button text={PARMESAN} onClick={() => setCheeseType(PARMESAN)} />
      </div>
      {cheeseType && (
        <p className="mt-5 dark:text-green-400 font-semibold">
          For {cheeseType}, <span className="dark:text-yellow-500">{wine}</span>{" "}
          goes best.
        </p>
      )}

      {/* Without React Memo */}
      {withoutMemo && <Counts />}

      {/* With React.memo() */}
      {withReactMemo && <MemoizedCounts />}

      {/* With useMemo() */}
      {withUseMemo && (
        <div className="mt-4 text-center">
          <button
            className="bg-indigo-200 hover:bg-indigo-300 py-2 px-10 rounded-md"
            onClick={() => setTimes(times + 1)}
          >
            Force render
          </button>
          <UseMemoCounts memoizedValue={memoizedValue} />
        </div>
      )}
    </div>
  );
}
