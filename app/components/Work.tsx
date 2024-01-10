import WorkJSON from "../JSON/Work.json";
interface workExp {
  period: string;
  company: string;
  experience: Array<string>;
  techStack: string;
  position: string;
}
export const Work = () => {
  return (
    <section className="mx-auto px-8 mb-40 lg:p-0 lg:mb-52 lg:max-w-screen-lg">
      <h3 className=" text-4xl lg:text-5xl font-bold text-headingWhite text-center font-Poppins leading-7 mb-24">Work History</h3>
      <div className="flex flex-col text-headingWhite">
        {WorkJSON.map((item: workExp, index) => (
          <div className="lg:flex mb-5 text-lg gap-7 font-Poppins" key={index}>
            <div className=" min-w-56 text-gray-400 font-medium pb-1 flex gap-4">
              <div className="flex flex-col items-center h-full pt-2">
                <div className="hidden md:block mb-3  w-2 h-2 rounded-full bg-gray-500 ring-2 ring-offset-2 ring-offset-gray-900 ring-gray-600"></div>
                <div className=" bg-slate-700 w-[1px] h-full"></div>
              </div>
              <span>{item.period}</span>
            </div>
            <div>
              <span className="inline-block text-xl">{item.company}</span>
              <span className="block text-gray-400 mb-2">{item.position}</span>
              <ul className="list-disc font-extralight">
                {item.experience.map((item: string, index) => (
                  <li key={index} className=" text-lightContent text-lg font-Poppins font-extralight">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
