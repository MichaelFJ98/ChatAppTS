import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");
socket.on("connect", () => {
  console.log(`Client: ${socket.id}`);
})

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Test</h1>
  </div>
`

