import {
  ArrowBigRight,
  DollarSign,
  Euro,
  HandCoins,
  MonitorSmartphone,
  PoundSterling,
  Power,
  ScanFace,
  ShieldCheck,
  Smile,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CardImg from "../assets/card.jpg";
import SupportImg from "../assets/support.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HomePage = () => {
  return (
    <section className="flex flex-col items-center mt-8 min-h-screen dark:bg-gray-900 px-6 text-center">
      {/* Hero Text */}
      <p className="font-bold text-4xl md:text-6xl leading-tight text-gray-900 dark:text-white">
        Say goodbye to&nbsp;
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white">
          <DollarSign size={50} />
          financial
        </span>
        &nbsp;
        <br />
        stress & uncertainty
      </p>

      {/* Features Section */}
      <div className="w-full max-w-5xl mt-12">
        <h2 className="text-xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Start your journey to <br />
          financial freedom
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <ScanFace size={35} />,
              title: "Manage your accounts",
              desc: "Our app integrates seamlessly with your bank accounts, allowing you to access all your financial information in one place.",
            },
            {
              icon: <ShieldCheck size={35} />,
              title: "Secure and reliable",
              desc: "We employ industry-leading security architecture to keep your data and money safe.",
            },
            {
              icon: <MonitorSmartphone size={35} />,
              title: "Multi-device support",
              desc: "Access your account from any device — mobile, tablet, or desktop.",
            },
            {
              icon: <Smile size={35} />,
              title: "Friendly support",
              desc: "Our team is always ready to assist you with your banking journey.",
            },
            {
              icon: <Power size={35} />,
              title: "No app juggling",
              desc: "Manage all your financial needs in one app, without switching between multiple tools.",
            },
            {
              icon: <HandCoins size={35} />,
              title: "Cost-effective payments",
              desc: "Enjoy low-cost transactions and transparent fees, making financial management more affordable.",
            },
          ].map(({ icon, title, desc }, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {icon}
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm italic">
                  {desc}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Open Banking CTA */}
        <div className="mt-12 p-6 text-center">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Banku will be fully utilizing the Open Banking standards across the
            world, unlocking innovative <br />
            payment experiences and positive journeys for customers.
          </p>

          <Button variant="outline" className="mt-4">
            <Link to="/about" className="flex items-center gap-2">
              EXPLORE MORE
              <ArrowBigRight size={20} />
            </Link>
          </Button>
        </div>
      </div>

      {/* Mastercard Feature Section */}
      <div className="mt-16 p-6 flex flex-col md:flex-row gap-8 max-w-5xl w-full items-center">
        <div className="text-left md:w-3/5">
          <h2 className="mb-5 text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
            Get a Mastercard debit card, accepted worldwide
          </h2>
          <p className="mb-3 text-md text-gray-700 dark:text-gray-300">
            Pick an eye-catching debit card in your choice of color to use with
            your bank account. Enjoy 3 free ATM withdrawals every month, plus
            zero foreign transaction fees when spending abroad.
          </p>
          <p className="text-md text-gray-700 dark:text-gray-300">
            Enable mobile payments and start spending before your physical card
            arrives.
          </p>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <img
            className="w-80  rounded-lg shadow-lg"
            src={CardImg}
            alt="card preview"
          />
        </div>
      </div>

      {/* customer support section */}

      <div className="mt-16 p-6 max-w-5xl w-full flex flex-col md:flex-row items-center gap-8">
        <div className="text-left md:w-3/5">
          <h2 className="mb-5 text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
            Customer support via chat, email, or phone
          </h2>
          <p className="mb-3 text-md text-gray-700 dark:text-gray-300">
            Run into an issue? Our customer support team is here to help you
            24/7. Whether you prefer chat, email, or phone, we are always ready
            to assist you.
          </p>
          <p className="text-md text-gray-700 dark:text-gray-300">
            Get in touch with us anytime, and we'll ensure your banking
            experience is smooth and hassle-free.
          </p>

          <Button variant="outline" className="mt-3">
            <Link className="flex item-center gap-2" to="/contact">
              CONTACT US <ArrowBigRight size={20} />
            </Link>
          </Button>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <img
            className="w-80  rounded-lg shadow-lg"
            src={SupportImg}
            alt="support-image"
          />
        </div>
      </div>
{/* Currency Section */}
<div className="mt-16 p-6 max-w-5xl w-full flex flex-col items-center text-center">
  <h2 className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white mb-4">
    And send across the globe too
  </h2>

  <div className="flex items-center justify-center gap-2 mt-4">
    <div className="p-4 rounded-full bg-gray-500 text-white">
      <DollarSign size={100} />
    </div>
    <div className="p-4 rounded-full bg-gray-500 text-white">
      <Euro size={100} />
    </div>
    <div className="p-4 rounded-full bg-gray-500 text-white">
      <PoundSterling size={100} />
    </div>
  </div>

  <p className="mt-8 text-md text-gray-700 dark:text-gray-300 max-w-xl">
    Whether it's America, Britain or France, you can transfer really fast
    with good rates.
  </p>

  <Button className="mt-5" variant="outline">
    <Link className="flex items-center gap-2" to="/signup">
      Get Started <ArrowBigRight size={20} />
    </Link>
  </Button>
</div>


      {/* FAQ */}

      <div className="mt-16 p-6 max-w-5xl w-full mx-auto">
        <h2 className="mb-5 text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                What is Banku?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-left dark:text-gray-300">
                Banku is a modern banking app that allows you to manage your
                finances, make payments, and access customer support all in one
                place.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                How do I open an account?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-left dark:text-gray-300">
                You can open an account by using our web app and following the
                registration process. It only takes a few minutes!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Is my data secure?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-left dark:text-gray-300">
                Yes, we use industry-leading security measures to protect your
                data and transactions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Can I use Banku internationally?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-left dark:text-gray-300">
                Absolutely! Banku supports international transactions with no
                foreign transaction fees.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
