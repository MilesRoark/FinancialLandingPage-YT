import Klarna from "../assets/logo-wall/klarna.png";
import Stripe from "../assets/logo-wall/stripe.png";
import Paypal from "../assets/logo-wall/paypal.png";
import Bedc from "../assets/logo-wall/bedc.png";
import MasterCard from "../assets/logo-wall/mastercard.png";
import Mtn from "../assets/logo-wall/mtn.png";
import Airtel from "../assets/logo-wall/airtel.png";
import Payoneer from "../assets/logo-wall/payoneer.png";
import Mobile from "../assets/logo-wall/mobile.png";
import Visa from "../assets/logo-wall/visa.png";
import Ikeja from "../assets/logo-wall/ikeja.png";
import Dstv from "../assets/logo-wall/dstv.png";
import LogoWall from "../Common/LogoWall";
function Partners() {
  return (
    <section id="partners" className="mt-20 flex flex-col bg-gray-50 py-20">
      <article className="mb-10 w-full px-8 text-center lg:px-12">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Transact seamlessly with...
        </h2>
        <p>
          Connect your other accounts to Kobodrop seamlessly. Kobodrop supports
          200+
          <br /> integrations with other payment platforms like stripe, paypal,
          payoneer and others.
        </p>
      </article>
      <div className="md:ml-44 xl:flex xl:justify-center">
        <LogoWall
          src1={Klarna}
          src2={Paypal}
          src3={Stripe}
          alt1="Klarna Logo"
          alt2="Paypal Logo"
          alt3="Stripe Logo"
        />
        <LogoWall
          src1={Bedc}
          src2={MasterCard}
          src3={Mtn}
          alt1="Bedc Logo"
          alt2="MasterCard Logo"
          alt3="Mtn Logo"
        />
      </div>
      <div className="md:ml-44 xl:flex xl:justify-center">
        <LogoWall
          src1={Airtel}
          src2={Payoneer}
          src3={Mobile}
          alt1="Airtel Logo"
          alt2="Payoneer Logo"
          alt3="Mobile Logo"
        />
        <LogoWall
          src1={Visa}
          src2={Ikeja}
          src3={Dstv}
          alt1="Visa Logo"
          alt2="Ikeja Logo"
          alt3="Dstv Logo"
        />
      </div>
    </section>
  );
}

export default Partners;