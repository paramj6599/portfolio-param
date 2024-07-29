import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaCode, FaEnvelope} from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/ShaunakJoshi1407"},
    { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/shaunakhemantjoshi/"},
    { icon: <FaCode />, path: "https://leetcode.com/u/shaunakjoshi1407/"},
    { icon: <FaEnvelope />, path: "mailto:shaunakjoshi@tamu.edu"},
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