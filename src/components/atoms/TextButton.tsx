interface TextButtonProps {
    text: string;
    to: string;
    dark?: boolean; 
  }
  
  function TextButton({ text, to, dark = false }: TextButtonProps) {
    return (
      <a
        href={to}
        className={`flex items-center gap-0.5 leading-6 transition duration-150 ease-in-out ${dark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}
      >
        {text}
        <span aria-hidden="true" className="-rotate-45">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
      </a>
    );
  }
  
  export default TextButton;
  