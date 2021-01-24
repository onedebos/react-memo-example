import { useRef } from "react";

export default function Counts() {
  const renderCount = useRef(0);

  return (
    <div className="mt-3">
      <p className="dark:text-white">
        Nothing has changed here but I've now rendered:{" "}
        <span className="dark:text-green-300 text-grey-900">{(renderCount.current ++)} time(s)</span>
      </p>
    </div>
  );
}
