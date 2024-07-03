import './style.css';

const hello = document.createElement('h1');
const wrapper = document.createElement('div');

hello.textContent = 'Hello World!';
hello.classList.add('nx-bg-gradient-to-r', 'nx-from-green-400', 'nx-to-blue-500', 'nx-text-transparent', 'nx-text-9xl', 'nx-bg-clip-text', 'nx-font-extrabold');

wrapper.classList.add('nx-flex', 'nx-w-full', 'nx-h-screen', 'nx-justify-center', 'nx-items-center');

wrapper.appendChild(hello);
document.body.appendChild(wrapper);
