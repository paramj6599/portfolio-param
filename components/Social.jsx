import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaCode, FaEnvelope} from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/paramj6599"},
    { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/param-joshi-68a520149/"},
    { icon: <FaCode />, path: "https://leetcode.com/u/param6599/"},
    { icon: <FaEnvelope />, path: "mailto:param6599@gmail.com"},
]

const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key = {index} href={item.path} className={iconStyles}>
                    <span className="icon-container">{item.icon}</span>
                </Link>
            );
        })}
    </div>;
}

export default Social;