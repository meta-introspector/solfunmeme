import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);


const AboutSectionOne = () => {

  const Thrust = () => (
    <div>
      <SectionTitle  title="Crafted for launching Private Personal, AI Startup, SaaS and Business AI Agents"
      paragraph="The main ‘thrust’ is to focus on enabling $SOLFUNMEME holders how to launch soverign self hosted agents on own servers, to be self dependent and secure. We are agent, cloud, language and os agnostic in the zero ontology system philosophy"
      mb="44px"
    />
      <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
        <div className="mx-[-12px] flex flex-wrap">                   
          <List text="Ticket system for organizing " />
          <List text="Free Tier Cloud Options" />
          <List text="Own and control all your data and processing" />
          <UncheckedList text="One Click Cloud Install" />
        </div>
	  </div>
    </div>    
  )

  const FrameWorks = () => (
    <div>
      <SectionTitle
        title="Multiple Agent Frameworks"
        paragraph="We support multiple agents, and give them an audited, compliant
	safe execution environment to work in and collaborate with human partners."
        mb="44px"
      />
      <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
        <List text="ElizaOS" />	
        <List text="Swarms" />
        <List text="AutoGPT" />
      </div>
    </div>
  )

  const CloudNative = () => (
    <div>
      <SectionTitle
        title="Provider Agnostic/Cloud Native"
        paragraph="Using terraform we are cloud agnostic and flexible."
        mb="44px"
      />
      <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
        <List text="Terraform" />
	<UncheckedList text="AWS Lambda(planned)" />
        <List text="AWS EC2(in progress)" />
	<List text="Akash(in progress)" />
	<List text="Docker" />
	<List text="Github Actions" />
	<List text="Github Spaces" />
	<List text="Github Apps" />
	<List text="Vercel Hosting" />
	<List text="Hugging Space Spaces" />	
	<UncheckedList text="K8S(planned)" />
	<UncheckedList text="wasm(planned)" />
	<UncheckedList text="zkvm(planned)" />
      </div>
    </div>
  )

  const Distributions = () => (
    <div>
      <SectionTitle
        title="OS"
        paragraph="We will support multiple OS versions."
        mb="44px"
      />
      <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
	<UncheckedList text="Debian GNU/Linux" />
        <List text="Ubuntu LTS" />
	<List text="Android Termux(In progress)" />
        <List text="NIX(in progress)" />
	<List text="GUIX(in progress)" />
        <UncheckedList text="WS2 Local testing" />
	<UncheckedList text="AWS Linux (planned)" />
	<UncheckedList text="Arch Linux (planned)" />
	<UncheckedList text="Mac os m1 (planned)" />
      </div>
    </div>
  )

  const Languages = () => (
    <div>
      <SectionTitle
        title="Languages"
        paragraph="We will support agents and workflows in multiple languages."
        mb="44px"
      />
      <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
        <List text="Typescript/NodeJS" />
        <List text="Python" />
	<List text="Rust" />
	<List text="Ocaml" />
	<List text="Plain old Bash scripts" />
        <UncheckedList text="GOlang" />
      </div>
    </div>
  )

  const Goals = () => (
    <div>
      <SectionTitle
        title="Goals."
        paragraph="We have high expectations from ourselves and our partners."
        mb="44px"
      />
      <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
        <List text="Zero Trust Architecture" />	
        <List text="Infrastructure as Code" />
        <UncheckedList text="Semantic disovery and integration via ZOS protocol(In progress)" />
	<List text="Auditing and Obserability(OTEL)" />
	<List text="Detailed Kernel Level Performance Monitoring and understanding with linux Perf " />
        <List text="Free/Libre Open Source Software" />
	<List text="Self Hosted/Cloud Hosted" />
	<List text="LiteLLM (OpenLightLLM) open ai proxy server" />
    	<List text="Ticket Driven Agent Workforce" />
	<List text="AI Department in a box" />
	<List text="Hybrid Multicloud Parameterization" />
	
	<UncheckedList text="ISO9000/GMP(Good Manufacturing Practices)" />
	<UncheckedList text="Zero Knowledge Proofs" />
    	<UncheckedList text="Zero Knowledge Machine Learning" />	      
      </div>
    </div>
  )

  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  
  const UncheckedList = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">        
      </span>
      {text}
    </p>
  );
  
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
	      <Thrust/>
	      <FrameWorks/>
	      <CloudNative/>
	      <Distributions/>
	      <Languages/>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
              <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
      </div>
    
    </section>
  );
};

export default AboutSectionOne;
