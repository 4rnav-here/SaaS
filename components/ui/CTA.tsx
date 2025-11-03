import Link from "next/link";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badege">Start Learning your way</div>
      <h2 className="text-3xl font-bold">
        Build and personalize your learning journey with AI Companions
      </h2>
      <p>
        Pick a name, voice and personality for your AI Companion and start your
        learning journey today!
      </p>
      <Image src={"/images/cta.svg"} alt="CTA" width={370} height={230} />
      <button className="btn-primary">
        <Image src={"/icons/plus.svg"} alt="Add" width={15} height={15} />
        <Link href="/companions/new">
          <p>Create Your Companion</p>
        </Link>
      </button>
    </section>
  );
};

export default CTA;
