import { Counter } from "./Counter";
import ReactDOM from "react-dom";

export class CounterWrapper extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('div');
        this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

        ReactDOM.render(<Counter />, mountPoint);
    }
}