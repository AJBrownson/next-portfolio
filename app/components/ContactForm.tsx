import { FaPlane } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";

export default function ContactForm() {
  return (
    <>
      <form className="flex flex-col gap-y-5 font-geistMono">
        <div className="flex flex-col gap-y-2">
          <label>Name</label>
          <input
            type="text"
            className="bg-slate-900 text-white p-3"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label>Email Address</label>
          <input
            type="email"
            className="bg-slate-900 text-white p-3"
            placeholder="Enter your email address"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label>Message</label>
          <textarea className="bg-slate-900 text-white p-3" placeholder="Enter your message"></textarea>
        </div>

        <div className="flex justify-center">
          <button className="flex items-center gap-x-2 py-2 px-5 border border-slate-400 hover:border-slate-400 hover:border-2">
            <FaPaperPlane />
            Send
          </button>
        </div>
      </form>
    </>
  );
}
