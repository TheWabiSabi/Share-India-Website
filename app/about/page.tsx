import Link from "next/link"

export default function AboutPage() {
  return (
    <div>
        <h1>About Page</h1>
        <ul>
            <li>
                <Link href={"about/journey"}>Journey of SIIB</Link>
            </li>
            <li>
                <Link href={"about/impact"}>Impact of SIIB</Link>
            </li>
            <li>
                <Link href={"about/leaders-and-team"}>Leaders and Team</Link>
            </li>
            <li>
                <Link href={"about/testimonials"}>Testimonials</Link>
            </li>
        </ul>
    </div>
  )
}
