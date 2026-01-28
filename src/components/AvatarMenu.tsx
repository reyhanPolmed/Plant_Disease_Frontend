import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { selectCurrentUser } from "@/features/user/AuthSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut } from "@/features/user/AuthSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
type PopupLogoutPromptProps = {
  onOpen: () => void;
};
export default function AvatarMenu({ onOpen }: PopupLogoutPromptProps) {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
    onOpen();
          setTimeout(() => {
        navigate("/");
      }, 1000);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className=" outline-none">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 "
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOwBL-ofY2S6Dohpxtezi9F0iKlgtnitrL5XY3pSbRj61yG0CzTDPVWj1h1HT6f-qS-cHYjVhpX3dWjIeKDJhpCtC1j_qjo5IBm6Z-V1BMqs1F08goAwf7AgpjSjGpxowBl2bwO5Uohq7Gt-E4fy4aV6akJEiNKRyC7xMS6EI6-EDcoMkU8zxvh8JdYAD6OuyceIcfsTV87snKC_1nNXkorWPFIYer2RiGfb-zX0TJfC7ty6mhE25wGnwjp-LZIIJZrGWLMr4a1ck")`,
            }}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuLabel>{user?.first_name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => console.log("Profile clicked")}>
          <button className="w-full h-full text-left">Profile</button>
        </DropdownMenuItem>
        <Link to={'/pesanan-saya'}>
        <DropdownMenuItem>
          <button className="w-full h-full text-left">Pesanan saya</button>
        </DropdownMenuItem>
        </Link>
        <DropdownMenuItem onClick={handleLogout}>
          <button className="w-full h-full text-left">Logout</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
