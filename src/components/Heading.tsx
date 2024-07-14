import { Balancer } from "react-wrap-balancer";

export default function Heading() {
	return (
		<section className="mb-7">
			<h1 className="text-center text-4xl md:text-6xl">
				<Balancer ratio={0.7}>
					Create <span className="font-bold">short links</span> and{" "}
					<span className="font-bold">QR codes</span>&nbsp; blazingly fast
				</Balancer>
			</h1>
			<p className="text-right">running on serverless Edge</p>
		</section>
	);
}
