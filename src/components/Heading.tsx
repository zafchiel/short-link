import { Balancer } from "react-wrap-balancer"

export default function Heading() {
  return (
    <section className="mb-7">
      <h1 className="text-center text-4xl font-bold md:text-6xl">
        <Balancer ratio={0.7}>
          Create short link and QR code blazingly fast
        </Balancer>
      </h1>
      <p className="text-right">running on serverless Edge</p>
    </section>
  )
}
