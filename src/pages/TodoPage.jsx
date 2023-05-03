import React from "react";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { TodoContent } from "../components/Todo/TodoContent";

export default function TodoPage() {
  return (
    <div className="container">
      <Header />
      <SideBar />
      <TodoContent />
    </div>
  );
}
