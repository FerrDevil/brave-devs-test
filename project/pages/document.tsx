
import Head from "next/head";
import React, { useState } from "react";
export default function GlobalHead({title}) {
return (<Head>
<title>{title}</title>
<link rel="icon" href="/favicon.ico" />
</Head>)
}
