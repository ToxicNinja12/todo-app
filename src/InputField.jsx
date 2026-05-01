import { ArrowTurnDownLeftIcon } from "@heroicons/react/24/outline";

function InputField() {
  return (
    <form className="flex justify-between border border-slate-300 p-1 rounded-full focus-within:outline-2 focus-within:outline-blue-300/50">
      <input
        type="text"
        className="text-slate-500 w-96 ml-2 placeholder:text-slate-300 focus:outline-0"
        placeholder="Add new task"
      />
      <div className="bg-blue-400 px-3 py-1 rounded-full">
        <ArrowTurnDownLeftIcon className="size-6 text-blue-50" />
      </div>
    </form>
  );
}

export default InputField;
