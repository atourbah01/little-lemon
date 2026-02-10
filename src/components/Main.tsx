import { ReactNode } from 'react'
import React from 'react'


export default function Main({ children }: { children: ReactNode }) {
return (
<main className="main-content">
{children}
</main>
)
}