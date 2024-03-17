import Link from "next/link";

const Button = () => {
  return (
    <button
      className="bg-slate-900 w-full py-2 rounded-lg cursor-pointer 
        hover:bg-yellow-200 hover:text-slate-900 transition ease-in-out delay-75 duration-100"
    >
      <Link
        href={'https://ar.linkedin.com/in/ivanmermelstein'}
        target="_blank"
      >
        Button
      </Link>
    </button>
  );
};

export default Button;