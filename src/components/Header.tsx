import TextDesc from "./TextDesc";

interface HeaderProps {
  title: string;
  desc: string;
}
const Header = ({ title }: HeaderProps) => {
  return (
    <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
      <TextDesc />
    </a>
  );
};

export default Header;
