import React from "react";

// components

export default function Auth({ children }) {
  return (
    <>
      <main>
        <section className="auth_bg--relative">
          <div className="auth_bg--absolute"></div>
          {children}
        </section>
      </main>
    </>
  );
}
