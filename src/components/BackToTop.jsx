import { FaChevronUp } from 'react-icons/fa';

function BackToTop() {
  return (
    <div className="container h-[50px] overflow-y-hidden">
      <a
        href="#"
        className="mx-auto  flex h-[90px] w-[100px]  items-start justify-center rounded-full bg-gray-100"
      >
        <FaChevronUp className="h-12 w-12 text-gray-400 hover:h-14 hover:w-14" />
      </a>
    </div>
  );
}

export default BackToTop;
