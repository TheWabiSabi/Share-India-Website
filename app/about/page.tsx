import Link from "next/link"

export default function AboutPage() {
  return (
    <div>
        <h1>About Page</h1>
        <ul>
            <li>
                <Link href={"./journey"}>Journey of SIIB</Link>
            </li>
            <li>
                <Link href={"./impact"}>Impact of SIIB</Link>
            </li>
            <li>
                <Link href={"./leaders-and-team"}>Leaders and Team</Link>
            </li>
            <li>
                <Link href={"./testimonials"}>Testimonials</Link>
            </li>
        </ul>
    </div>
  )
}
