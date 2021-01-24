import ParentComponent from "../components/parent-component";

export default function IndexPage() {
  return (
    <>
      <ParentComponent title="Without React.memo() or useMemo()" withoutMemo={true} />
      <ParentComponent title="With React.memo()" withReactMemo={true} />
      <ParentComponent title="With useMemo()" withUseMemo={true} />
    </>
  );
}
