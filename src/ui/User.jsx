import { useAuthContext } from "../contexts/AuthContext";

const User = () => {
  const {
    FAKE_USER: { name, avatar },
  } = useAuthContext();

  return (
    <div className="flex items-center space-x-4">
      <img
        className="w-12 rounded-full border-2 border-blue-950"
        src={avatar}
        alt={name}
      />
      <p className="hidden text-xl font-bold md:block">{name}</p>
    </div>
  );
};

export default User;
