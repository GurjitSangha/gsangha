import Head from "next/head";
import { getHistoryData, getProjectData } from "../lib/data";
import Projects from "../components/Projects";
import History from "../components/History";
import Links from "../components/Links";

export async function getStaticProps() {
  const projects = await getProjectData();
  const history = await getHistoryData();
  console.log(history);
  return {
    props: {
      projects,
      history,
    },
  };
}

export default function Home({ projects, history }) {
  return (
    <div className="flex h-full py-8 flex-col text-gray-200 max-w-6xl mx-auto">
      <Head>
        <title>Gurjit Sangha</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-10 items-center justify-evenly text-xl">
        <a href="#projects">Projects</a>
        <a href="#history">History</a>
        <a href="#links">Links</a>
      </div>

      <div className="flex flex-col h-96 items-center justify-center">
        <h1 className="text-6xl font-bold mb-8">
          Hello, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-600 to-yellow-300">
            Gurjit Sangha
          </span>
        </h1>
        <p className="text-2xl">I Develop Things</p>
      </div>

      <Projects projects={projects} />
      <History history={history} />
      <Links />
    </div>
  );
}