import Link from "next/link";

export const metadata = {
    title: 'Next || About page',
    description: 'Generated by Next.js',
}



const About = () => {
    return (
        <div>
            This is about Page
            <Link href='/'>
                <button className="btn btn-active btn-secondary mt-8">Go to Home</button>
            </Link>
        </div>
    );
};

export default About;