
function UseMemoCounts({memoizedValue}) {

  return (
    <div className="mt-3">
      <p className="dark:text-white max-w-md">
        I'll only re-render when you click <span className="font-bold text-indigo-400">Force render.</span> 
        </p>
      <p className="dark:text-white">I've now rendered: <span className="text-green-400">{memoizedValue} time(s)</span> </p>
    </div>
  );
}

export default UseMemoCounts;