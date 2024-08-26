interface MainButtonProps {
  text: string;
  to: string;
}
function MainButton(props: MainButtonProps) {
  return (
    <>
      <a className="font-medium" href={props.to}>
        <button className="flex gap-1.5 px-4 py-2.5 bg-graphite text-white rounded-2xl shadow-md hover:bg-opacity-70 transition-all">
          {props.text}
        
        </button>
      </a>
    </>
  );
}

export default MainButton;
