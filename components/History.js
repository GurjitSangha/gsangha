import Card from "./Card";

export default function History({ history }) {
  return (
    <div id="history" className="flex flex-col items-center mb-8">
      <h3 className="text-4xl pb-4">History</h3>
      {history.map((item) => (
        <Card data={item} />
      ))}
    </div>
  );
}
