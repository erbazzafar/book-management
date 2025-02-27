  "use client";
  import React from "react";
  import { FloatingNav } from "@/components/ui/floating-navbar";
  import { Home, User } from "lucide-react";

  export function FloatingNavDemo() {
    const navItems = [
      { name: "Home", link: "/", icon: <Home className="h-4 w-4" /> },
      { name: "SignUp", link: "/signUp", icon: <User className="h-4 w-4" /> },
      { name: "LogIn", link: "/log-in", icon: <User className="h-4 w-4" /> },
      { name: "Profile", link: "/profile", icon: <User className="h-4 w-4" /> },

    ];

    console.log("Nav Items in FloatingNav:", navItems);

    return <FloatingNav navItems={navItems} />;
  }

  export default FloatingNavDemo;
