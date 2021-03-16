import React from "react";
import Link from "next/link";
import "../src/styles.module.css";

const Page = () => (
  <div>
    <h1>Index Page</h1>
    <Link href="/notes">Note</Link>
    <div>Index page</div>
  </div>
);

export default Page;
