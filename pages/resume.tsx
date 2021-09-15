import Bar from "../components/Bar";
import { languages, tools } from "../data";
import Head from "next/head";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      <Head>
        <title>
          My  Resume
      </title>
      </Head>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Information Systems
            </h5>
            <p className="font-semibold">Azerbaijan State Oil and Industry University(2020-2024)</p>
            <p className="my-3">
              I am currently pursuing  in Computer Information Systems
              from A.S.O.I.U
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div >
            <h5 className="my-2 text-xl font-bold">Volunteer</h5>
            <p className="font-semibold">ASAN Service</p>
          </div>
          <div >
            <h5 className="my-2 text-xl font-bold">Front-end Developer</h5>
            <p className="font-semibold">Edulogy</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Technologies & Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-5 text-2xl font-bold">Tools & Language</h5>
          <div className="my-5">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
