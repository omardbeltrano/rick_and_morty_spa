import logoPortal from '../assets/images/portal404.png';

const Error404 = () => {
    const view = `
        <div class="Error404">
            <img src="${logoPortal}">
            <h2>Error 404</h2>
        </div>    
    `;

    return view;
}

export default Error404;