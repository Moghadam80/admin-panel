import { Advertise, Dashboard, ManageAccount, News, Products, Reports, Retailellers, Support, Users, Wholesellers } from "@/components/common/Svg/dashboardSvg";
import { useContext, createContext, useState, useEffect, useRef } from "react";

const Context = createContext();

const AppContext = ({ children }) => {
//   const { user, logout } = useAuthContext();

  const ItemLogin = [
    { title: "داشبورد", icon: <Dashboard/> , url: "/" },
    { title: "محصولات", icon: <Products/> , url: "/products" },
    { title: "گزارشات", icon: <Reports/>  , url: "/reports" },
    { title: "عمده فروشان", icon: <Wholesellers/>  , url: "/whole-sellers" },
    { title: "خرده فروشان", icon: <Retailellers/>  , url: "/retail-seller" },
    { title: "کاربران", icon: <Users/>  , url: "/users" },
    { title: "اخبار و اطلاعیه", icon: <News/> , url: "/news" },
    { title: "تبلیغات و بازاریابی", icon: <Advertise/> , url: "/advertise" },
    { title: "پشتیبانی", icon: <Support/>  , url: "/support" },
    { title: "مدیریت حساب", icon: <ManageAccount/>  , url: "/account" }
  ]
  

  return (
    <Context.Provider
      value={{
        ItemLogin
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);

export default AppContext;
