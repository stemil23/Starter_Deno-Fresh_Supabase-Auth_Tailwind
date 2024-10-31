import DynamicMenu from "../islands/DynamicMenu.tsx";
import Logo from "./Logo.tsx";

interface NavProps {
  loggedIn: boolean;
}

export default function Nav({ loggedIn }: NavProps) {
  const staticMenus = [
    { name: "About", href: "/about", id: "about" },
    { name: "Instructions", href: "/instructions", id: "instructions" },
    { name: "DB Test", href: "/db-test", id: "db-test" },
    { name: "DB Test API", href: "/db-test-api", id: "db-test-api" },
    { name: "DB Test Island", href: "/db-test-island", id: "db-test-island" },
    { name: "DB Test Island API", href: "/db-test-island-api", id: "db-test-api-island" }
  ];

  return (
    <div class="bg-white max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="text-2xl ml-1 font-bold">
        <Logo />
      </div>
      <ul class="flex gap-6">
        {staticMenus.map((menu) => (
          <li key={menu.id}>
            <a
              href={menu.href}
              id={menu.id}
              class="text-gray-500 hover:text-gray-700 py-1 aria-[current]:text-black aria-[current]:font-bold"
            >
              {menu.name}
            </a>
          </li>
        ))}

        <DynamicMenu loggedIn={loggedIn} />
      </ul>
    </div>
  );
}
