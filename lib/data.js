import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const projectsDir = path.join(process.cwd(), "projects");
const historyDir = path.join(process.cwd(), "history");

async function getSortedDataFromDir(dir) {
  const fileNames = fs.readdirSync(dir);
  const data = await Promise.all(
    fileNames.map(async (fileName) => {
      const fileContents = fs.readFileSync(path.join(dir, fileName), "utf8");
      const mattered = matter(fileContents);
      const remarked = await remark().use(html).process(mattered.content);
      const content = remarked.toString();

      return {
        id: fileName.replace(/\.md/, ""),
        content,
        ...mattered.data,
      };
    })
  );
  return data.sort((a, b) => {
    return a.date < b.date;
  });
}

export async function getProjectData() {
  return await getSortedDataFromDir(projectsDir);
}

export async function getHistoryData() {
  return await getSortedDataFromDir(historyDir);
}
