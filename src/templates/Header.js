import logo from '../assets/images/logo.png';

const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <a href="/">
                    <img src="${logo}"
                </a>
            </div>
            <div class="Header-nav">
                <a href="#/about/">About</a>
            </div>
        </div>
    `;
    return view;
}

export default Header;