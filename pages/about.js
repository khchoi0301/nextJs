import Link from "next/link";

const About = () => (
    <div>
        <ul>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/about'><a>About</a></Link></li>
        </ul>
        <h1>About BitzPrices</h1>
        <p>Application</p>
    </div>
)

export default About