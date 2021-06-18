
import Head from "next/head";
import React, { useState } from "react";
export default function GlobalHead({title}:any) {
return (<Head>
<title>{title}</title>
</Head>)
}
