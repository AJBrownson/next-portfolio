import { FaCss3Alt, FaDatabase, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa6";



export default function Stack() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-3">
        <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
          <FaHtml5 />
          <p>HTML</p>
        </div>

        <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
          <FaCss3Alt />
          <p>CSS</p>
        </div>

        <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
          <FaJs />
          <p>JavaScript</p>
        </div>

        <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
          <FaReact />
          <p>ReactJS</p>
        </div>

        <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
          <FaNodeJs />
          <p>NodeJS</p>
        </div>

        <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
          <FaNodeJs />
          <p>ExpressJS</p>
        </div>

        <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
          <FaReact />
          <p>NextJS</p>
        </div>

        <div className="flex flex-col gap-y-1 justify-center items-center border border-slate-700 py-2 px-4">
          <FaDatabase />
          <p>MongoDB</p>
        </div>
      </div>
    </>
  );
}
