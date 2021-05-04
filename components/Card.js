export default function Card({ data }) {
  return (
    <div className="flex flex-col max-w-4xl p-4 border-4 border-gradient-l-yellows hover:bg-red">
      <h3 className="text-xl font-bold">{data.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      {data.link && (
        <a
          href={data.link}
          target="_blank"
          className="mx-auto hover:underline hover:cursor-pointer text-lg text-yellow-400 hover"
        >
          Visit
        </a>
      )}
    </div>
  );
}
