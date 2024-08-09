interface MainButtonProps {
  text: string;
  to: string;
}
function MainButton(props: MainButtonProps) {
  return (
    <>
      <a className="font-medium" href={props.to}>
        <button className="flex gap-1.5 px-4 py-3.5 bg-graphite text-white rounded-2xl shadow-md hover:bg-opacity-70 transition-all">
          {props.text}
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
      </a>
    </>
  );
}

export default MainButton;
