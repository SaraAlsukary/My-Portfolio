import { useEffect, useState } from "react";

type TLink = {
    href: string,
    children: React.ReactNode,
}
const CustomLink = ({ href, children, ...props }: TLink) => {
    const [path, setPath] = useState('#home');

    useEffect(() => {
        document.querySelectorAll("#links").forEach(a => {
            a.addEventListener('click', (e: any) => act(e))

        })
    }, [path])

    const act = (e: any) => {
        setPath(window.location.hash);
        if (href === path) {
            document.querySelectorAll("#links").forEach(a => {
                if (a.classList.contains('active'))
                    a.classList.remove('active')
            })

            e.target.className = 'active';
        }
    }
    return (
        <li>
            <a id='links' className={href === path ? 'active' : ""} href={href} {...props}>{children}</a>
        </li >
    )
}
export default CustomLink;