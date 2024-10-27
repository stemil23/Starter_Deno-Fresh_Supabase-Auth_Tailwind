interface DynamicMenuProps {
    loggedIn: boolean;
  }
  
  export default function DynamicMenu({ loggedIn }: DynamicMenuProps) {
    const loggedInMenus = [
      { name: "Welcome", href: "/auth/welcome", id: "welcome" },
      { name: "Dashboard", href: "/auth/dashboard", id: "dashboard" },
      { name: "Logout", href: "/logout", id: "logout" },
    ];
  
    const nonLoggedInMenus = [
      { name: "Login", href: "/login", id: "login" },
      { name: "SignUp", href: "/signup", id: "signup" },  
    ];
  
    const menus = loggedIn ? loggedInMenus : nonLoggedInMenus;
  
    return (
      <>
        {menus.map((menu) => (
          <li key={menu.id}>
            <a
              href={menu.href}
              id={menu.id}
              class={`py-1 ${
                menu.id === 'logout'
                  ? 'text-yellow-600 hover:text-yellow-700'
                  : 'text-gray-500 hover:text-gray-700'
              } ${
                menu.id !== 'home' ? 'border-gray-500 aria-[current]:text-black aria-[current]:font-bold' : ''
              }`}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </>
    );
  }
